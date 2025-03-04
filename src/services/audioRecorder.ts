import {
  joinVoiceChannel,
  getVoiceConnection,
  VoiceConnectionStatus,
  entersState,
  EndBehaviorType,
} from '@discordjs/voice';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import * as prism from 'prism-media';
import type { VoiceBasedChannel } from 'discord.js';
import type { VoiceRecordingSession, RecordingMetadata } from '../types/voice.js';
import { convertPcmToMp3 } from '../utils/audioProcessor.js';
import { uploadAudioToS3 } from './aws-setup.js';

// Singleton instance
let instance: AudioRecorder | null = null;

export class AudioRecorder {
  private activeSessions: Map<string, VoiceRecordingSession> = new Map();

  // Private constructor to prevent direct instantiation
  private constructor() {
    console.log('[AudioRecorder] Singleton instance created');
  }

  // Static method to get the singleton instance
  static getInstance(): AudioRecorder {
    if (!instance) {
      instance = new AudioRecorder();
    }
    return instance;
  }

  async startRecording(
    voiceChannel: VoiceBasedChannel,
    campaignName?: string,
  ): Promise<VoiceRecordingSession> {
    const guildId = voiceChannel.guild.id;
    const sessionId = `${guildId}-${Date.now()}`;
    const outputFile = `./recordings/${sessionId}.pcm`;

    // Create recordings directory if it doesn't exist
    await import('fs/promises').then((fs) => fs.mkdir('./recordings', { recursive: true }));

    try {
      console.log(`[AudioRecorder] Attempting to join voice channel:`, {
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        channelName: voiceChannel.name,
      });

      // Join the voice channel
      const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false,
      });

      console.log('[AudioRecorder] Voice connection created, waiting for ready state...');

      // Wait for the connection to be ready
      await entersState(connection, VoiceConnectionStatus.Ready, 20_000);
      console.log('[AudioRecorder] Voice connection is ready');

      // Handle disconnection with longer timeouts
      connection.on(VoiceConnectionStatus.Disconnected, async () => {
        try {
          await Promise.race([
            entersState(connection, VoiceConnectionStatus.Signalling, 20_000),
            entersState(connection, VoiceConnectionStatus.Connecting, 20_000),
          ]);
          console.log('[AudioRecorder] Reconnecting to voice channel...');
        } catch (error: unknown) {
          console.error('[AudioRecorder] Voice connection disconnected:', error);
          // Don't destroy connection or stop recording here - let the leave command handle it
        }
      });

      // Handle destroyed state
      connection.on(VoiceConnectionStatus.Destroyed, () => {
        console.log('[AudioRecorder] Voice connection destroyed');
      });

      // Create an audio receiver
      const receiver = connection.receiver;

      console.log('[AudioRecorder] Creating audio receiver...');

      // Add speaking event handlers for better debugging
      receiver.speaking.on('start', (userId) => {
        const user = voiceChannel.members.get(userId)?.user;
        console.log(`[AudioRecorder] User started speaking:`, {
          userId,
          username: user?.username,
          tag: user?.tag,
          timestamp: new Date().toISOString(),
        });
      });

      receiver.speaking.on('end', (userId) => {
        const user = voiceChannel.members.get(userId)?.user;
        console.log(`[AudioRecorder] User stopped speaking:`, {
          userId,
          username: user?.username,
          tag: user?.tag,
          timestamp: new Date().toISOString(),
        });
      });

      console.log('[AudioRecorder] Creating audio streams...');

      // Create a merged audio stream for all speakers
      const { PassThrough } = await import('stream');
      const mergedStream = new PassThrough();
      let opusDataCount = 0;

      // Handle new speakers
      receiver.speaking.on('start', (userId) => {
        const user = voiceChannel.members.get(userId)?.user;
        console.log(`[AudioRecorder] Creating opus stream for user:`, {
          userId,
          username: user?.username,
        });

        const userStream = receiver.subscribe(userId, {
          end: {
            behavior: EndBehaviorType.Manual,
          },
        });

        // Log data from this user's stream
        userStream.on('data', (chunk) => {
          opusDataCount++;
          if (opusDataCount % 100 === 0) {
            console.log(`[AudioRecorder] Opus data stats for ${user?.username}:`, {
              chunkSize: chunk.length,
              totalChunks: opusDataCount,
              streamDestroyed: userStream.destroyed,
            });
          }
          mergedStream.write(chunk);
        });

        userStream.on('end', () => {
          console.log(`[AudioRecorder] User stream ended for ${user?.username}`);
        });
      });

      console.log('[AudioRecorder] Opus stream setup complete');

      // Create a PCM stream with more detailed logging
      const pcmStream = new prism.opus.Decoder({
        rate: 48000,
        channels: 2,
        frameSize: 960,
      });

      // Pipe the merged stream to the PCM decoder
      mergedStream.pipe(pcmStream);

      // Log PCM data chunks periodically
      let pcmDataCount = 0;
      let pcmBytesReceived = 0;
      pcmStream.on('data', (chunk) => {
        pcmDataCount++;
        pcmBytesReceived += chunk.length;
        if (pcmDataCount % 1000 === 0) {
          // Log every 1000th chunk
          console.log(`[AudioRecorder] PCM data stats:`, {
            chunkSize: chunk.length,
            totalChunks: pcmDataCount,
            totalKB: (pcmBytesReceived / 1024).toFixed(2),
            streamDestroyed: pcmStream.destroyed,
          });
        }
      });

      pcmStream.on('close', () => {
        console.log('[AudioRecorder] PCM stream closed', {
          totalChunks: pcmDataCount,
          totalBytes: pcmBytesReceived,
        });
      });

      pcmStream.on('end', () => {
        console.log('[AudioRecorder] PCM stream ended', {
          totalChunks: pcmDataCount,
          totalBytes: pcmBytesReceived,
        });
      });

      // Create file stream with detailed logging
      const fileStream = createWriteStream(outputFile, {
        flags: 'w',
        highWaterMark: 1024 * 1024 * 4, // 4MB buffer
      });

      // Track all file stream events
      let bytesWritten = 0;
      let writeCount = 0;

      fileStream.on('open', () => {
        console.log('[AudioRecorder] File stream opened');
      });

      fileStream.on('write', (chunk) => {
        bytesWritten += chunk.length;
        writeCount++;
        if (writeCount % 100 === 0) {
          // Log every 100th write
          console.log('[AudioRecorder] File write stats:', {
            writeCount,
            totalMB: (bytesWritten / (1024 * 1024)).toFixed(2),
            chunkKB: (chunk.length / 1024).toFixed(2),
          });
        }
      });

      fileStream.on('drain', () => {
        console.log('[AudioRecorder] File stream drained:', {
          writeCount,
          totalBytes: bytesWritten,
        });
      });

      fileStream.on('finish', () => {
        console.log('[AudioRecorder] File stream finished:', {
          totalWrites: writeCount,
          totalBytes: bytesWritten,
          totalKB: (bytesWritten / 1024).toFixed(2),
        });
      });

      // Log stream errors but don't trigger stopRecording to avoid double-stopping
      pcmStream.on('error', (error: Error) => {
        console.error('[AudioRecorder] PCM stream error:', error);
        console.error('[AudioRecorder] Stack trace:', error.stack);
      });

      fileStream.on('error', (error: Error) => {
        console.error('[AudioRecorder] File stream error:', error);
        console.error('[AudioRecorder] Stack trace:', error.stack);
      });

      // Add end event handlers for better debugging
      pcmStream.on('end', () => console.log('[AudioRecorder] PCM stream ended'));
      fileStream.on('finish', () => console.log('[AudioRecorder] File stream finished'));

      console.log('[AudioRecorder] Setting up audio pipeline...');
      // Set up pipeline with more robust error handling
      const pipelinePromise = pipeline(pcmStream, fileStream).catch((error) => {
        if ((error as NodeJS.ErrnoException).code === 'ERR_STREAM_PREMATURE_CLOSE') {
          console.log('[AudioRecorder] Pipeline closed normally');
          return; // Don't treat this as an error during shutdown
        }
        console.error('[AudioRecorder] Pipeline error:', error);
      });

      const session: VoiceRecordingSession = {
        guildId,
        channelId: voiceChannel.id,
        sessionId,
        campaignName: campaignName || 'Unnamed Campaign',
        startTime: new Date(),
        participants: [],
        audioStream: mergedStream,
        fileWriter: fileStream,
        pipelinePromise,
      };

      // Log detailed session info
      console.log('[AudioRecorder] Session details:', {
        sessionId,
        guildId,
        channelId: voiceChannel.id,
        channelName: voiceChannel.name,
        campaignName: campaignName || 'Unnamed Campaign',
        startTime: new Date().toISOString(),
        outputFile,
      });

      this.activeSessions.set(guildId, session);
      console.log(
        '[AudioRecorder] Active session added to map. Current sessions:',
        Array.from(this.activeSessions.keys()).map((key) => ({
          guildId: key,
          sessionId: this.activeSessions.get(key)?.sessionId,
        })),
      );

      console.log('[AudioRecorder] Audio pipeline established');
      console.log('[AudioRecorder] Recording to file:', outputFile);

      // Listen for speaking events to track participants
      receiver.speaking.on('start', (userId) => {
        const session = this.activeSessions.get(guildId);
        if (session && !session.participants.includes(userId)) {
          const user = voiceChannel.members.get(userId)?.user;
          session.participants.push(userId);
          console.log(`[AudioRecorder] New participant speaking:`, {
            userId,
            username: user?.username,
            tag: user?.tag,
            timestamp: new Date().toISOString(),
          });
        }
      });

      // Add connection state change listener to handle disconnects
      connection.on('stateChange', (oldState, newState) => {
        console.log(
          `[AudioRecorder] Connection state changed: ${oldState.status} -> ${newState.status}`,
        );

        // If the connection is disconnected, make sure we clean up the session
        if (
          newState.status === VoiceConnectionStatus.Disconnected ||
          newState.status === VoiceConnectionStatus.Destroyed
        ) {
          console.log(
            `[AudioRecorder] Connection disconnected or destroyed, checking if session needs cleanup`,
          );
          const session = this.activeSessions.get(guildId);
          if (session) {
            console.log(
              `[AudioRecorder] Active session found for disconnected connection, will stop recording`,
            );
            // Don't await this to avoid blocking the event handler
            this.stopRecording(guildId).catch((err) => {
              console.error('[AudioRecorder] Error stopping recording after disconnect:', err);
            });
          }
        }
      });

      console.log('[AudioRecorder] Recording session started:', {
        sessionId,
        channelName: voiceChannel.name,
        guildId: voiceChannel.guild.id,
        campaignName: campaignName || 'Not specified',
      });

      return session;
    } catch (error: unknown) {
      console.error('[AudioRecorder] Error starting recording:', error);
      if (error instanceof Error) {
        console.error('[AudioRecorder] Stack trace:', error.stack);
      }
      throw error;
    }
  }

  async stopRecording(guildId: string): Promise<RecordingMetadata | null> {
    console.log(`[AudioRecorder] Checking for active session for guild ${guildId}`);
    console.log(
      '[AudioRecorder] Current active sessions:',
      Array.from(this.activeSessions.keys()).map((key) => ({
        guildId: key,
        sessionId: this.activeSessions.get(key)?.sessionId,
      })),
    );

    const session = this.activeSessions.get(guildId);
    if (!session) {
      console.log(`[AudioRecorder] No active session found for guild ${guildId}`);
      return null;
    }

    console.log(`[AudioRecorder] Stopping recording for session ${session.sessionId}`);

    try {
      try {
        // First close the file writer
        if (!session.fileWriter.closed) {
          await new Promise<void>((resolve, reject) => {
            session.fileWriter.once('finish', () => {
              console.log('[AudioRecorder] File writer finished');
              resolve();
            });
            session.fileWriter.once('error', (err) => {
              console.error('[AudioRecorder] File writer error:', err);
              reject(err);
            });
            session.fileWriter.end();
          });
        }

        // Then signal the end of the audio stream
        if (!session.audioStream.destroyed) {
          session.audioStream.push(null);
          console.log('[AudioRecorder] Audio stream ended');
        }

        // Wait for pipeline to complete
        if (session.pipelinePromise) {
          await session.pipelinePromise;
          console.log('[AudioRecorder] Pipeline completed');
        }

        // Wait for streams to finish
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Finally destroy the voice connection
        const connection = getVoiceConnection(guildId);
        if (connection) {
          console.log('[AudioRecorder] Destroying voice connection');
          connection.destroy();
        }

        if (!session.audioStream.destroyed) {
          session.audioStream.destroy();
          console.log('[AudioRecorder] Audio stream destroyed');
        }
      } catch (error: unknown) {
        console.error('[AudioRecorder] Error during stream cleanup:', error);
        if (error instanceof Error) {
          console.error('[AudioRecorder] Stack trace:', error.stack);
        }
        // Continue with metadata collection even if stream cleanup fails
      }

      const pcmPath = `./recordings/${session.sessionId}.pcm`;
      const mp3Path = `./recordings/${session.sessionId}.mp3`;

      // Get file stats and ensure PCM file exists
      const fs = await import('fs/promises');

      try {
        const stats = await fs.stat(pcmPath);

        if (stats.size === 0) {
          console.log('[AudioRecorder] No audio data recorded');
          await fs.unlink(pcmPath).catch((err) => {
            console.error('[AudioRecorder] Error deleting PCM file:', err);
          });
          return null;
        }

        // Convert PCM to MP3
        console.log('[AudioRecorder] Converting PCM to MP3...');
        await convertPcmToMp3(pcmPath, mp3Path);

        // Upload MP3 to S3
        console.log('[AudioRecorder] Uploading MP3 to S3...');
        const s3Key = await uploadAudioToS3(
          mp3Path,
          `${session.sessionId}.mp3`,
          process.env.PROJECT_NAME + '-audio-input',
        );

        // Clean up temporary files only after successful upload
        console.log('[AudioRecorder] Cleaning up temporary files...');
        await fs.unlink(pcmPath).catch((err) => {
          console.error('[AudioRecorder] Error deleting PCM file:', err);
        });
        await fs.unlink(mp3Path).catch((err) => {
          console.error('[AudioRecorder] Error deleting MP3 file:', err);
        });
        console.log('[AudioRecorder] Temporary files cleaned up successfully');

        const metadata: RecordingMetadata = {
          sessionId: session.sessionId,
          campaignName: session.campaignName,
          startTime: session.startTime,
          endTime: new Date(),
          participants: session.participants,
          fileSize: stats.size,
          duration: (new Date().getTime() - session.startTime.getTime()) / 1000,
          s3Key,
        };

        // Remove the session from the active sessions map
        this.activeSessions.delete(guildId);
        console.log('[AudioRecorder] Session removed from active sessions map');
        console.log('[AudioRecorder] Recording stopped and uploaded successfully');

        return metadata;
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
          console.log('[AudioRecorder] No audio data recorded');
          // Make sure to clean up the session even if no file was found
          this.activeSessions.delete(guildId);
          console.log('[AudioRecorder] Session removed from active sessions map (no file found)');
          return null;
        }
        throw error;
      }
    } catch (error: unknown) {
      console.error('[AudioRecorder] Error stopping recording:', error);
      if (error instanceof Error) {
        console.error('[AudioRecorder] Stack trace:', error.stack);
      }
      // Make sure to clean up the session even if an error occurred
      this.activeSessions.delete(guildId);
      console.log('[AudioRecorder] Session removed from active sessions map (after error)');
      throw error;
    }
  }

  getActiveSession(guildId: string): VoiceRecordingSession | undefined {
    const session = this.activeSessions.get(guildId);
    console.log(`[AudioRecorder] getActiveSession called for guild ${guildId}:`, {
      hasSession: !!session,
      sessionId: session?.sessionId,
      allSessions: Array.from(this.activeSessions.keys()).map((key) => ({
        guildId: key,
        sessionId: this.activeSessions.get(key)?.sessionId,
      })),
    });
    return session;
  }
}
