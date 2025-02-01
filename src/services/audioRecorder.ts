import { joinVoiceChannel, getVoiceConnection, EndBehaviorType } from '@discordjs/voice';
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

    // Join the voice channel
    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      selfDeaf: false,
    });

    // Create an audio receiver
    const receiver = connection.receiver;

    // Create a PCM stream for better audio quality
    const opusStream = receiver.subscribe('all', {
      end: {
        behavior: EndBehaviorType.AfterSilence,
        duration: 100,
      },
    });

    // Create a PCM stream that combines all speaking users
    const pcmStream = new prism.opus.Decoder({
      rate: 48000,
      channels: 2,
      frameSize: 960,
    });

    // Create file stream
    const fileStream = createWriteStream(outputFile);

    // Pipe the audio stream through the decoder to the file
    await pipeline(opusStream, pcmStream, fileStream);

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

    // Listen for speaking events to track participants
    receiver.speaking.on('start', (userId) => {
      const session = this.activeSessions.get(guildId);
      if (session && !session.participants.includes(userId)) {
        session.participants.push(userId);
      }
    });

    return session;
  }

  async stopRecording(guildId: string): Promise<RecordingMetadata | null> {
    const session = this.activeSessions.get(guildId);
    if (!session) return null;

    // Close streams
    session.audioStream.destroy();
    await new Promise<void>((resolve) => {
      session.fileWriter.end(() => resolve());
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
  }

  getActiveSession(guildId: string): VoiceRecordingSession | undefined {
    return this.activeSessions.get(guildId);
  }
}
