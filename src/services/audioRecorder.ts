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
        } catch (error) {
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
      opusStream.on('error', (error) => {
        console.error('[AudioRecorder] Opus stream error:', error);
        console.error('[AudioRecorder] Stack trace:', error.stack);
        this.stopRecording(guildId).catch(console.error);
      });

      pcmStream.on('error', (error) => {
        console.error('[AudioRecorder] PCM stream error:', error);
        console.error('[AudioRecorder] Stack trace:', error.stack);
        this.stopRecording(guildId).catch(console.error);
      });

      fileStream.on('error', (error) => {
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
      // Set up pipeline in the background with more detailed error handling
      pipeline(opusStream, pcmStream, fileStream)
        .then(() => {
          console.log('[AudioRecorder] Audio pipeline established successfully');
          console.log('[AudioRecorder] Recording to file:', outputFile);
        })
        .catch((error) => {
          console.error('[AudioRecorder] Pipeline error:', error);
          console.error('[AudioRecorder] Stack trace:', error.stack);
          console.error('[AudioRecorder] Pipeline state:', {
            opusStreamDestroyed: opusStream.destroyed,
            pcmStreamDestroyed: pcmStream.destroyed,
            fileStreamClosed: fileStream.closed,
          });
          this.stopRecording(guildId).catch(console.error);
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
    } catch (error) {
      console.error('Error starting recording:', error);
      throw error;
    }
  }

  async stopRecording(guildId: string): Promise<RecordingMetadata | null> {
    const session = this.activeSessions.get(guildId);
    if (!session) return null;

    console.log(`Stopping recording for session ${session.sessionId}`);

    try {
      // Close streams
      session.audioStream.destroy();
      await new Promise<void>((resolve, reject) => {
        session.fileWriter.end((err: Error | null) => {
          if (err) reject(err);
          else resolve();
        });
      });

      // Get file stats
      const stats = await import('fs/promises').then((fs) =>
        fs.stat(`./recordings/${session.sessionId}.pcm`),
      );

      const metadata: RecordingMetadata = {
        sessionId: session.sessionId,
        campaignName: session.campaignName,
        startTime: session.startTime,
        endTime: new Date(),
        participants: session.participants,
        fileSize: stats.size,
        duration: (new Date().getTime() - session.startTime.getTime()) / 1000,
      };

      // Cleanup
      const connection = getVoiceConnection(guildId);
      connection?.destroy();
      this.activeSessions.delete(guildId);

      return metadata;
    } catch (error) {
      console.error('Error stopping recording:', error);
      throw error;
    }
  }

  getActiveSession(guildId: string): VoiceRecordingSession | undefined {
    return this.activeSessions.get(guildId);
  }
}
