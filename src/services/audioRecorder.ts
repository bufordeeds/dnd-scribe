import {
  joinVoiceChannel,
  getVoiceConnection,
  EndBehaviorType,
  VoiceConnectionStatus,
  entersState,
} from '@discordjs/voice';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import * as prism from 'prism-media';
import type { VoiceBasedChannel } from 'discord.js';
import type { VoiceRecordingSession, RecordingMetadata } from '../types/voice.js';
import { convertPcmToMp3 } from '../utils/audioProcessor.js';
import { uploadAudioToS3 } from './aws-setup.js';

export class AudioRecorder {
  private activeSessions: Map<string, VoiceRecordingSession> = new Map();

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

      // Handle disconnection
      connection.on(VoiceConnectionStatus.Disconnected, async () => {
        try {
          await Promise.race([
            entersState(connection, VoiceConnectionStatus.Signalling, 5_000),
            entersState(connection, VoiceConnectionStatus.Connecting, 5_000),
          ]);
          // Seems to be reconnecting to a new channel
        } catch (error: unknown) {
          // Seems to be a real disconnection
          console.error('Voice Connection disconnected:', error);
          connection.destroy();
          await this.stopRecording(guildId);
        }
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

      // Create a PCM stream for better audio quality with more detailed configuration
      const opusStream = receiver.subscribe('all', {
        end: {
          behavior: EndBehaviorType.AfterSilence,
          duration: 200, // Increased silence duration before ending
        },
        autoDestroy: false, // Prevent automatic destruction
      });
      console.log('[AudioRecorder] Opus stream created');

      // Add detailed data event logging for opus stream
      let opusDataCount = 0;
      opusStream.on('data', (chunk) => {
        opusDataCount++;
        if (opusDataCount % 100 === 0) {
          // Log every 100th chunk to avoid spam
          console.log(`[AudioRecorder] Opus data stats:`, {
            chunkSize: chunk.length,
            totalChunks: opusDataCount,
            streamDestroyed: opusStream.destroyed,
          });
        }
      });

      // Create a PCM stream that combines all speaking users with more detailed configuration
      const pcmStream = new prism.opus.Decoder({
        rate: 48000,
        channels: 2,
        frameSize: 960,
      });

      // Add error recovery for PCM stream
      pcmStream.on('close', () => {
        console.log('[AudioRecorder] PCM stream closed');
        if (!pcmStream.destroyed) {
          console.log('[AudioRecorder] Attempting to recover PCM stream...');
          pcmStream.resume();
        }
      });

      // Add detailed data event logging for PCM stream
      let pcmDataCount = 0;
      pcmStream.on('data', (chunk) => {
        pcmDataCount++;
        if (pcmDataCount % 100 === 0) {
          // Log every 100th chunk to avoid spam
          console.log(`[AudioRecorder] PCM data stats:`, {
            chunkSize: chunk.length,
            totalChunks: pcmDataCount,
            streamDestroyed: pcmStream.destroyed,
          });
        }
      });

      // Create file stream
      const fileStream = createWriteStream(outputFile, { flags: 'w' });

      // Add write event logging for file stream
      fileStream.on('write', (chunk) => {
        console.log(`[AudioRecorder] Wrote ${chunk.length} bytes to file`);
      });

      // Handle stream errors with more detailed logging
      opusStream.on('error', (error: Error) => {
        console.error('[AudioRecorder] Opus stream error:', error);
        console.error('[AudioRecorder] Stack trace:', error.stack);
        this.stopRecording(guildId).catch(console.error);
      });

      pcmStream.on('error', (error: Error) => {
        console.error('[AudioRecorder] PCM stream error:', error);
        console.error('[AudioRecorder] Stack trace:', error.stack);
        this.stopRecording(guildId).catch(console.error);
      });

      fileStream.on('error', (error: Error) => {
        console.error('[AudioRecorder] File stream error:', error);
        console.error('[AudioRecorder] Stack trace:', error.stack);
        this.stopRecording(guildId).catch(console.error);
      });

      // Add end event handlers for better debugging
      opusStream.on('end', () => console.log('[AudioRecorder] Opus stream ended'));
      pcmStream.on('end', () => console.log('[AudioRecorder] PCM stream ended'));
      fileStream.on('finish', () => console.log('[AudioRecorder] File stream finished'));

      const session: VoiceRecordingSession = {
        guildId,
        channelId: voiceChannel.id,
        sessionId,
        campaignName,
        startTime: new Date(),
        participants: [],
        audioStream: opusStream,
        fileWriter: fileStream,
      };

      this.activeSessions.set(guildId, session);

      console.log('[AudioRecorder] Setting up audio pipeline...');
      // Set up pipeline with proper error handling for voice disconnection
      const pipelinePromise = pipeline(opusStream, pcmStream, fileStream);

      // Handle pipeline completion/errors without throwing
      pipelinePromise.catch((error: unknown) => {
        if (
          error instanceof Error &&
          (error as NodeJS.ErrnoException).code === 'ERR_STREAM_PREMATURE_CLOSE'
        ) {
          console.log('[AudioRecorder] Pipeline closed due to voice disconnection');
        } else {
          console.error('[AudioRecorder] Pipeline error:', error);
          if (error instanceof Error) {
            console.error('[AudioRecorder] Stack trace:', error.stack);
          }
          console.error('[AudioRecorder] Pipeline state:', {
            opusStreamDestroyed: opusStream.destroyed,
            pcmStreamDestroyed: pcmStream.destroyed,
            fileStreamClosed: fileStream.closed,
          });
        }
      });

      console.log('[AudioRecorder] Audio pipeline established');
      console.log('[AudioRecorder] Recording to file:', outputFile);

      // Add cleanup handler for voice connection
      connection.on(VoiceConnectionStatus.Destroyed, () => {
        console.log('[AudioRecorder] Voice connection destroyed, closing streams...');
        if (!fileStream.closed) {
          fileStream.end();
        }
      });

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
    const session = this.activeSessions.get(guildId);
    if (!session) return null;

    console.log(`[AudioRecorder] Stopping recording for session ${session.sessionId}`);

    try {
      // Gracefully close streams
      try {
        // First end the file writer if it's not closed
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

        // Then destroy the voice connection
        const connection = getVoiceConnection(guildId);
        if (connection) {
          console.log('[AudioRecorder] Destroying voice connection');
          connection.destroy();
        }

        // Finally destroy the audio stream if needed
        if (!session.audioStream.destroyed) {
          session.audioStream.destroy();
          console.log('[AudioRecorder] Audio stream destroyed');
        }

        // Wait a moment for any cleanup to complete
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error: unknown) {
        console.error('[AudioRecorder] Error during stream cleanup:', error);
        if (error instanceof Error) {
          console.error('[AudioRecorder] Stack trace:', error.stack);
        }
        // Continue with metadata collection even if stream cleanup fails
      }

      // Get file stats
      const stats = await import('fs/promises').then((fs) =>
        fs.stat(`./recordings/${session.sessionId}.pcm`),
      );

      // Convert PCM to MP3
      const pcmPath = `./recordings/${session.sessionId}.pcm`;
      const mp3Path = `./recordings/${session.sessionId}.mp3`;

      console.log('[AudioRecorder] Converting PCM to MP3...');
      await convertPcmToMp3(pcmPath, mp3Path);

      // Upload MP3 to S3
      console.log('[AudioRecorder] Uploading MP3 to S3...');
      const s3Key = await uploadAudioToS3(
        mp3Path,
        `${session.sessionId}.mp3`,
        process.env.PROJECT_NAME + '-audio-input',
      );

      // Clean up temporary files
      console.log('[AudioRecorder] Cleaning up temporary files...');
      await import('fs/promises').then(async (fs) => {
        try {
          await fs.unlink(pcmPath);
          await fs.unlink(mp3Path);
          console.log('[AudioRecorder] Temporary files cleaned up successfully');
        } catch (error) {
          console.error('[AudioRecorder] Error cleaning up temporary files:', error);
          // Continue even if cleanup fails
        }
      });

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

      this.activeSessions.delete(guildId);
      console.log('[AudioRecorder] Recording stopped and uploaded successfully');

      return metadata;
    } catch (error: unknown) {
      console.error('[AudioRecorder] Error stopping recording:', error);
      if (error instanceof Error) {
        console.error('[AudioRecorder] Stack trace:', error.stack);
      }
      throw error;
    }
  }

  getActiveSession(guildId: string): VoiceRecordingSession | undefined {
    return this.activeSessions.get(guildId);
  }
}
