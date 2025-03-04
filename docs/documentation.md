# DND Scribe Documentation

## Project Structure

```
├── docs
│   └── documentation.md
├── src
│   ├── commands
│   │   ├── join.ts
│   │   ├── leave.ts
│   │   └── ping.ts
│   ├── services
│   │   ├── audioRecorder.ts
│   │   └── aws-setup.ts
│   ├── types
│   │   ├── commands.ts
│   │   ├── discord.ts
│   │   └── voice.ts
│   ├── utils
│   │   ├── audioProcessor.ts
│   │   └── generateDocs.ts
│   ├── deploy-commands.ts
│   └── index.ts
├── .eslintrc.json
├── CHANGELOG.md
├── package-lock.json
├── package.json
├── README.md
├── ROADMAP.md
└── tsconfig.json
```

## Package.json

```json
{
  "name": "dnd-scribe",
  "version": "1.0.0",
  "description": "A Discord bot that records and transcribes D&D sessions",
  "main": "dist/index.js",
  "type": "module",
  "scripts": {
    "docs": "node --loader ts-node/esm src/utils/generateDocs.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "node --loader ts-node/esm src/index.ts",
    "watch": "tsc -w",
    "lint": "eslint src --ext .ts",
    "format": "prettier --write \"src/**/*.ts\"",
    "deploy": "node --loader ts-node/esm src/deploy-commands.ts",
    "deploy-and-dev": "npm run deploy && sleep 5 && npm run dev"
  },
  "dependencies": {
    "@aws-sdk/client-iam": "^3.738.0",
    "@aws-sdk/client-s3": "^3.0.0",
    "@aws-sdk/client-transcribe": "^3.0.0",
    "@discordjs/opus": "^0.10.0",
    "@discordjs/voice": "^0.18.0",
    "@ffmpeg-installer/ffmpeg": "^1.1.0",
    "@types/ffmpeg-static": "^3.0.3",
    "discord.js": "^14.14.1",
    "dotenv": "^16.0.0",
    "ffmpeg-static": "^5.2.0",
    "node-lame": "^1.3.2",
    "prism-media": "^1.3.5",
    "sodium-native": "^4.0.1"
  },
  "devDependencies": {
    "@types/node": "^18.0.0",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "eslint": "^8.0.0",
    "prettier": "^2.0.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.0.0"
  }
}

```

## Source Code

### src/commands/join.ts

```typescript
import { SlashCommandBuilder, ChatInputCommandInteraction, GuildMember } from 'discord.js';
import { AudioRecorder } from '../services/audioRecorder.js';

// Singleton instance of AudioRecorder
const audioRecorder = new AudioRecorder();

export const data = new SlashCommandBuilder()
  .setName('join')
  .setDescription('Joins your voice channel and starts recording')
  .setDMPermission(false) // Explicitly disable DM usage
  .addStringOption((option) =>
    option.setName('campaign').setDescription('The name of the D&D campaign').setRequired(false),
  );

export async function execute(interaction: ChatInputCommandInteraction) {
  console.log('Join command received');

  try {
    console.log('[Join Command] Starting execution...');

    if (!interaction.guild) {
      console.log('[Join Command] Error: Command used outside of guild');
      return interaction.reply({
        content: 'This command can only be used in a server!',
        flags: ['Ephemeral'],
      });
    }

    console.log('[Join Command] Deferring reply...');
    await interaction.deferReply();
    console.log('[Join Command] Reply deferred');

    // Check if the user is in a voice channel
    const member = interaction.member as GuildMember;
    const voiceChannel = member.voice.channel;

    console.log('[Join Command] User voice state:', {
      inVoiceChannel: !!voiceChannel,
      channelId: voiceChannel?.id,
      channelName: voiceChannel?.name,
      guildId: interaction.guild.id,
      guildName: interaction.guild.name,
      userId: member.id,
      userName: member.user.tag,
    });

    if (!voiceChannel) {
      console.log('[Join Command] Error: User not in a voice channel');
      return interaction.editReply('You need to be in a voice channel first!');
    }

    console.log('[Join Command] Checking for existing session...');
    // Check if there's already an active session
    const existingSession = audioRecorder.getActiveSession(voiceChannel.guild.id);
    if (existingSession) {
      console.log('[Join Command] Error: Active session already exists', {
        existingSessionId: existingSession.sessionId,
      });
      return interaction.editReply(
        'Already recording in a voice channel! Use /leave to stop the current recording first.',
      );
    }

    console.log('[Join Command] Getting campaign name...');
    // Get campaign name if provided
    const campaignName = interaction.options.getString('campaign') ?? undefined;

    console.log('[Join Command] Starting recording...', {
      channelId: voiceChannel.id,
      channelName: voiceChannel.name,
      campaignName,
    });

    // Start recording
    const session = await audioRecorder.startRecording(voiceChannel, campaignName);

    console.log('[Join Command] Recording started successfully:', {
      channelName: voiceChannel.name,
      sessionId: session.sessionId,
      campaignName: session.campaignName,
    });

    await interaction.editReply(
      `Joined ${voiceChannel.name} and started recording!${
        campaignName ? ` (Campaign: ${campaignName})` : ''
      }`,
    );
  } catch (error) {
    console.error('[Join Command] Error:', error);

    // If we haven't replied yet, defer the reply
    if (!interaction.deferred && !interaction.replied) {
      await interaction.deferReply();
    }

    await interaction.editReply('Failed to join the voice channel!');
  }
}

```

### src/commands/leave.ts

```typescript
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { getVoiceConnection } from '@discordjs/voice';
import { AudioRecorder } from '../services/audioRecorder.js';
import { uploadAudioToS3, startTranscriptionJob } from '../services/aws-setup.js';
import { convertPcmToMp3 } from '../utils/audioProcessor.js';

// Use the same singleton instance as join command
const audioRecorder = new AudioRecorder();

export const data = new SlashCommandBuilder()
  .setName('leave')
  .setDescription('Stops recording and leaves the voice channel');

export async function execute(interaction: ChatInputCommandInteraction) {
  if (!interaction.guild) {
    return interaction.reply({
      content: 'This command can only be used in a server!',
      ephemeral: true,
    });
  }

  try {
    console.log('[Leave Command] Checking voice connection and recording status...');

    const connection = getVoiceConnection(interaction.guild.id);
    const activeSession = audioRecorder.getActiveSession(interaction.guild.id);

    // If no connection and no session, nothing to do
    if (!connection && !activeSession) {
      return interaction.reply({
        content: "I'm not in any voice channel!",
        ephemeral: true,
      });
    }

    let response = '';

    // Handle active recording session if exists
    if (activeSession) {
      console.log('[Leave Command] Stopping active recording session...');
      const metadata = await audioRecorder.stopRecording(interaction.guild.id);

      if (metadata) {
        try {
          // Check if the PCM file exists and has content
          const fs = await import('fs/promises');
          const pcmPath = `./recordings/${metadata.sessionId}.pcm`;
          const mp3Path = `./recordings/${metadata.sessionId}.mp3`;

          const fileStats = await fs.stat(pcmPath).catch(() => null);
          if (!fileStats || fileStats.size === 0) {
            console.error('[Leave Command] No audio data recorded');
            response = 'No audio was recorded during the session.';
          } else {
            // Convert PCM to MP3
            console.log('[Leave Command] Converting PCM to MP3...');
            await convertPcmToMp3(pcmPath, mp3Path);

            // Upload MP3 to S3
            console.log('[Leave Command] Uploading MP3 to S3...');
            const s3Key = await uploadAudioToS3(
              mp3Path,
              `${metadata.sessionId}.mp3`,
              process.env.PROJECT_NAME + '-audio-input',
            );

            // Start transcription job
            console.log('[Leave Command] Starting transcription job...');
            await startTranscriptionJob(
              s3Key,
              process.env.PROJECT_NAME + '-audio-input',
              process.env.PROJECT_NAME + '-transcription-output',
              metadata.sessionId,
            );

            const duration = Math.round(metadata.duration);
            const minutes = Math.floor(duration / 60);
            const seconds = duration % 60;
            const participants = metadata.participants.length;

            response =
              `Recording stopped! Session details:\n` +
              `• Duration: ${minutes}m ${seconds}s\n` +
              `• Participants: ${participants}\n` +
              `• Campaign: ${metadata.campaignName || 'Not specified'}\n` +
              `• File size: ${Math.round((metadata.fileSize / 1024 / 1024) * 100) / 100}MB\n` +
              `• Transcription job started: session-${metadata.sessionId}`;
          }

          // Clean up local files
          await fs.unlink(pcmPath).catch((error) => {
            console.error('[Leave Command] Error deleting PCM file:', error);
          });
          if (await fs.stat(mp3Path).catch(() => null)) {
            await fs.unlink(mp3Path).catch((error) => {
              console.error('[Leave Command] Error deleting MP3 file:', error);
            });
          }
        } catch (error: unknown) {
          console.error('[Leave Command] Error processing recording:', error);
          if (error instanceof Error) {
            console.error('[Leave Command] Stack trace:', error.stack);
          }
          response = 'Failed to process recording. Please try again.';
        }
      }
    }

    // Handle voice connection if exists
    if (connection) {
      console.log('[Leave Command] Destroying voice connection...');
      connection.destroy();
      response = response || 'Left the voice channel!';
    }

    await interaction.reply(response);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'Failed to leave the voice channel!',
      ephemeral: true,
    });
  }
}

```

### src/commands/ping.ts

```typescript
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Shows bot status and latency information');

export async function execute(interaction: ChatInputCommandInteraction) {
  const sent = await interaction
    .reply({
      content: 'Pinging...',
    })
    .then((response) => response.fetch());

  const latency = sent.createdTimestamp - interaction.createdTimestamp;
  const wsLatency = interaction.client.ws.ping;
  const uptime = Math.floor(process.uptime());
  const memoryUsage = process.memoryUsage();

  const statusEmbed = {
    color: 0x0099ff,
    title: '🤖 Bot Status',
    fields: [
      {
        name: '📡 Latency',
        value: `
          • API Latency: ${latency}ms
          • WebSocket Latency: ${wsLatency}ms
        `.trim(),
        inline: true,
      },
      {
        name: '⚙️ System',
        value: `
          • Uptime: ${(uptime / 3600).toFixed(2)}h
          • Memory: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB
        `.trim(),
        inline: true,
      },
      {
        name: '🎙️ Voice',
        value: `
          • Connected Servers: ${interaction.client.voice?.adapters.size || 0}
          • Current Server: ${interaction.guild?.name || 'N/A'}
        `.trim(),
        inline: true,
      },
    ],
    timestamp: new Date().toISOString(),
  };

  await interaction.editReply({ content: '', embeds: [statusEmbed] });
}

```

### src/deploy-commands.ts

```typescript
import { REST, Routes } from 'discord.js';
import { config } from 'dotenv';
import * as fs from 'fs';

config();

// Load command files
const commandsPath = new URL('commands', import.meta.url).pathname;
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.ts'));

const commands = [];

// Load all commands
for (const file of commandFiles) {
  const filePath = `file://${commandsPath}/${file}`;
  const command = await import(filePath);
  if ('data' in command) {
    commands.push(command.data.toJSON());
  }
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN!);

// Deploy commands
try {
  console.log('Started refreshing application (/) commands.');

  // For development, register commands to a specific guild (server)
  // This updates instantly unlike global commands which can take up to an hour
  await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.GUILD_ID!), {
    body: commands,
  });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

```

### src/index.ts

```typescript
import { Client, Collection, Events, GatewayIntentBits, Interaction } from 'discord.js';
import { config } from 'dotenv';
import * as fs from 'fs';
import { setupAWSInfrastructure } from './services/aws-setup.js';

// Initialize dotenv
config();

// Initialize AWS Infrastructure
try {
  const awsInfra = await setupAWSInfrastructure();
  console.log('AWS Infrastructure initialized:', awsInfra);
} catch (error) {
  console.error('Failed to initialize AWS infrastructure:', error);
  process.exit(1);
}

import { SlashCommand } from './types/commands.js';

// Extend the Client type to include commands
declare module 'discord.js' {
  interface Client {
    commands: Collection<string, SlashCommand>;
  }
}

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Initialize commands collection
client.commands = new Collection();

// Load command files
const commandsPath = new URL('commands', import.meta.url).pathname;
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.ts'));

// Load all commands
const loadCommands = async () => {
  for (const file of commandFiles) {
    const filePath = `file://${commandsPath}/${file}`;
    const command = await import(filePath);

    if ('data' in command && 'execute' in command) {
      // Set just the command data and execute function
      client.commands.set(command.data.name, {
        data: command.data,
        execute: command.execute,
      });
    }
  }
};

// Load commands before logging in
await loadCommands();

// Handle interactions
client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  // Let the command handle its own errors
  await command.execute(interaction).catch((error) => {
    console.error(`Error executing command ${interaction.commandName}:`, error);
  });
});

client.login(process.env.DISCORD_TOKEN);

```

### src/services/audioRecorder.ts

```typescript
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
          duration: 500, // Increased silence duration before ending
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

      // Create file stream with a larger buffer
      const fileStream = createWriteStream(outputFile, {
        flags: 'w',
        highWaterMark: 1024 * 1024, // 1MB buffer
      });

      // Add write event logging for file stream
      let bytesWritten = 0;
      fileStream.on('write', (chunk) => {
        bytesWritten += chunk.length;
        console.log(
          `[AudioRecorder] Wrote ${chunk.length} bytes to file (Total: ${bytesWritten} bytes)`,
        );
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
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Increased wait time
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

        this.activeSessions.delete(guildId);
        console.log('[AudioRecorder] Recording stopped and uploaded successfully');

        return metadata;
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
          console.log('[AudioRecorder] No audio data recorded');
          return null;
        }
        throw error;
      }
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

```

### src/services/aws-setup.ts

```typescript
import {
  S3Client,
  CreateBucketCommand,
  PutBucketPolicyCommand,
  PutObjectCommand,
  BucketLocationConstraint,
} from '@aws-sdk/client-s3';
import { createReadStream } from 'fs';
import {
  TranscribeClient,
  StartTranscriptionJobCommand,
  LanguageCode,
} from '@aws-sdk/client-transcribe';

// Initialize AWS clients
const s3Client = new S3Client({ region: process.env.AWS_REGION });
const transcribeClient = new TranscribeClient({ region: process.env.AWS_REGION });

interface BucketNames {
  input: string;
  output: string;
}

// Helper function to create a single bucket with retries
async function createBucketWithRetry(bucketName: string, maxRetries = 5): Promise<void> {
  let attempt = 0;
  const baseDelay = 5000; // Start with 5 second delay

  while (attempt < maxRetries) {
    try {
      await s3Client.send(
        new CreateBucketCommand({
          Bucket: bucketName,
          CreateBucketConfiguration: {
            LocationConstraint: process.env.AWS_REGION as BucketLocationConstraint,
          },
        }),
      );
      console.log(`Created bucket: ${bucketName}`);
      return;
    } catch (error: any) {
      if (error.Code === 'BucketAlreadyOwnedByYou') {
        console.log(`Using existing bucket: ${bucketName}`);
        return;
      }

      if (error.Code === 'OperationAborted') {
        attempt++;
        if (attempt < maxRetries) {
          const delay = baseDelay * Math.pow(2, attempt - 1); // Exponential backoff
          console.log(
            `Bucket creation aborted, retrying in ${
              delay / 1000
            } seconds... (Attempt ${attempt}/${maxRetries})`,
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }
      }

      throw error;
    }
  }

  throw new Error(`Failed to create bucket ${bucketName} after ${maxRetries} attempts`);
}

// Create S3 buckets for audio input and transcription output
async function createS3Buckets(): Promise<BucketNames> {
  const bucketNames = {
    input: `${process.env.PROJECT_NAME}-audio-input`,
    output: `${process.env.PROJECT_NAME}-transcription-output`,
  };

  try {
    // Create buckets with retry logic
    await createBucketWithRetry(bucketNames.input);
    await createBucketWithRetry(bucketNames.output);

    // Set bucket policies for Transcribe access
    const inputBucketPolicy = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'TranscribeGetAccess',
          Effect: 'Allow',
          Principal: {
            Service: 'transcribe.amazonaws.com',
          },
          Action: ['s3:GetObject'],
          Resource: [`arn:aws:s3:::${bucketNames.input}/*`],
        },
      ],
    };

    const outputBucketPolicy = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'TranscribePutAccess',
          Effect: 'Allow',
          Principal: {
            Service: 'transcribe.amazonaws.com',
          },
          Action: ['s3:PutObject'],
          Resource: [`arn:aws:s3:::${bucketNames.output}/*`],
        },
      ],
    };

    await s3Client.send(
      new PutBucketPolicyCommand({
        Bucket: bucketNames.input,
        Policy: JSON.stringify(inputBucketPolicy),
      }),
    );

    await s3Client.send(
      new PutBucketPolicyCommand({
        Bucket: bucketNames.output,
        Policy: JSON.stringify(outputBucketPolicy),
      }),
    );

    console.log('S3 buckets created successfully');
    return bucketNames;
  } catch (error) {
    console.error('Error creating S3 buckets:', error);
    throw error;
  }
}

// Get the current user's ARN
async function getCurrentUserArn(): Promise<string> {
  // Since we already have access to S3 and Transcribe, we'll use the credentials
  // that were provided in the environment variables
  return `arn:aws:iam::070195441517:user/dnd-scribe-bot`;
}

// Function to test transcription setup
async function testTranscriptionSetup(inputBucket: string, outputBucket: string): Promise<void> {
  try {
    // Create a dummy test file (1 second of silence in base64)
    const testAudioBase64 =
      'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAFbgCenp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6e//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAYAAAAAAAAABW7gxbmvAAAAAAAAAAAAAAAAAAAA//sQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
    const testAudioBuffer = Buffer.from(testAudioBase64, 'base64');

    // Upload test audio file to S3
    await s3Client.send(
      new PutObjectCommand({
        Bucket: inputBucket,
        Key: 'test-audio.mp3',
        Body: testAudioBuffer,
        ContentType: 'audio/mpeg',
      }),
    );
    console.log('Uploaded test audio file to S3');

    // Start transcription job
    const transcriptionJob = {
      TranscriptionJobName: `test-job-${Date.now()}`,
      LanguageCode: LanguageCode.EN_US,
      Media: {
        MediaFileUri: `s3://${inputBucket}/test-audio.mp3`,
      },
      OutputBucketName: outputBucket,
    };

    await transcribeClient.send(new StartTranscriptionJobCommand(transcriptionJob));
    console.log('Transcription test job started successfully');
  } catch (error) {
    console.error('Error testing transcription setup:', error);
    throw error;
  }
}

interface AWSInfrastructure {
  inputBucket: string;
  outputBucket: string;
  userArn: string;
}

// Main setup function
// Upload audio file to S3
export async function uploadAudioToS3(
  filePath: string,
  fileName: string,
  bucket: string,
): Promise<string> {
  try {
    console.log(`[AWS] Uploading audio file to S3: ${fileName}`);
    const fileStream = createReadStream(filePath);
    const s3Key = `recordings/${fileName}`;

    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: s3Key,
        Body: fileStream,
        ContentType: 'audio/mpeg',
      }),
    );

    console.log(`[AWS] Successfully uploaded audio file to S3: ${s3Key}`);
    return s3Key;
  } catch (error) {
    console.error('[AWS] Error uploading audio file to S3:', error);
    throw error;
  }
}

// Start a transcription job
export async function startTranscriptionJob(
  s3Key: string,
  inputBucket: string,
  outputBucket: string,
  sessionId: string,
): Promise<void> {
  try {
    console.log(`[AWS] Starting transcription job for: ${s3Key}`);

    const transcriptionJob = {
      TranscriptionJobName: `session-${sessionId}`,
      LanguageCode: LanguageCode.EN_US,
      Media: {
        MediaFileUri: `s3://${inputBucket}/${s3Key}`,
      },
      OutputBucketName: outputBucket,
      Settings: {
        ShowSpeakerLabels: true,
        MaxSpeakerLabels: 10,
      },
    };

    await transcribeClient.send(new StartTranscriptionJobCommand(transcriptionJob));
    console.log(`[AWS] Transcription job started successfully: session-${sessionId}`);
  } catch (error) {
    console.error('[AWS] Error starting transcription job:', error);
    throw error;
  }
}

export async function setupAWSInfrastructure(): Promise<AWSInfrastructure> {
  try {
    const buckets = await createS3Buckets();
    const userArn = await getCurrentUserArn();
    await testTranscriptionSetup(buckets.input, buckets.output);

    return {
      inputBucket: buckets.input,
      outputBucket: buckets.output,
      userArn,
    };
  } catch (error) {
    console.error('Error setting up AWS infrastructure:', error);
    throw error;
  }
}

```

### src/types/commands.ts

```typescript
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

export interface SlashCommand {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}

```

### src/types/discord.ts

```typescript
import { Collection } from 'discord.js';
import { SlashCommand } from './commands.js';

declare module 'discord.js' {
  export interface Client {
    commands: Collection<string, SlashCommand>;
  }
}

```

### src/types/voice.ts

```typescript
export interface VoiceRecordingSession {
  guildId: string;
  channelId: string;
  sessionId: string;
  campaignName?: string;
  startTime: Date;
  participants: string[];
  audioStream: import('stream').Readable;
  fileWriter: import('fs').WriteStream;
}

export interface RecordingMetadata {
  sessionId: string;
  campaignName?: string;
  startTime: Date;
  endTime: Date;
  participants: string[];
  fileSize: number;
  duration: number;
  s3Key: string; // Location of the audio file in S3
}

```

### src/utils/audioProcessor.ts

```typescript
import { spawn } from 'child_process';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

export async function convertPcmToMp3(inputPath: string, outputPath: string): Promise<void> {
  try {
    console.log('[AudioProcessor] Starting PCM to MP3 conversion...');

    // Create FFmpeg process for conversion
    const ffmpegProcess = spawn(ffmpeg.path, [
      '-f',
      's16le', // Input format: signed 16-bit little-endian
      '-ar',
      '48000', // Sample rate: 48kHz
      '-ac',
      '2', // Audio channels: 2 (stereo)
      '-i',
      inputPath, // Input file
      '-c:a',
      'libmp3lame', // MP3 codec
      '-b:a',
      '128k', // Bitrate: 128kbps
      outputPath, // Output file
    ]);

    // Add error handlers
    ffmpegProcess.stderr.on('data', (data) => {
      console.log(`[AudioProcessor] FFmpeg: ${data}`);
    });

    // Wait for FFmpeg to finish
    await new Promise<void>((resolve, reject) => {
      ffmpegProcess.on('close', (code) => {
        if (code === 0) {
          console.log('[AudioProcessor] PCM to MP3 conversion completed successfully');
          resolve();
        } else {
          reject(new Error(`FFmpeg process exited with code ${code}`));
        }
      });

      ffmpegProcess.on('error', (error) => {
        console.error('[AudioProcessor] FFmpeg process error:', error);
        reject(error);
      });
    });
  } catch (error) {
    console.error('[AudioProcessor] Error converting PCM to MP3:', error);
    throw error;
  }
}

```

### src/utils/generateDocs.ts

```typescript
import fs from 'fs';
import path from 'path';

// Directories and files to ignore
const ignoredPaths = [
  'node_modules',
  '.git',
  'dist',
  'coverage',
  '.DS_Store',
  '.env',
  'recordings',
];

// Relevant file extensions
const relevantExtensions = ['.ts', '.js', '.json', '.md'];

// Function to create a file tree structure
function generateFileTree(dir: string, prefix = ''): string {
  let output = '';
  const items = fs.readdirSync(dir);

  // Filter out ignored paths and sort items (directories first)
  const filteredItems = items
    .filter((item) => !ignoredPaths.includes(item))
    .sort((a, b) => {
      const aPath = path.join(dir, a);
      const bPath = path.join(dir, b);
      const aIsDir = fs.statSync(aPath).isDirectory();
      const bIsDir = fs.statSync(bPath).isDirectory();
      if (aIsDir && !bIsDir) return -1;
      if (!aIsDir && bIsDir) return 1;
      return a.localeCompare(b);
    });

  filteredItems.forEach((item, index) => {
    const isLast = index === filteredItems.length - 1;
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);

    // Only include directories and files with relevant extensions
    if (stats.isDirectory() || relevantExtensions.includes(path.extname(item))) {
      // Add the current item to the tree
      output += `${prefix}${isLast ? '└── ' : '├── '}${item}\n`;

      // If it's a directory, recurse into it
      if (stats.isDirectory()) {
        output += generateFileTree(itemPath, prefix + (isLast ? '    ' : '│   '));
      }
    }
  });

  return output;
}

// Function to read file contents
function readFileContents(filePath: string): string {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return `Error reading file: ${error.message}`;
    }
    return 'Error reading file: Unknown error occurred';
  }
}

// Function to recursively get all TypeScript files
function getTypeScriptFiles(dir: string): string[] {
  let files: string[] = [];
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      files = files.concat(getTypeScriptFiles(fullPath));
    } else if (item.endsWith('.ts')) {
      files.push(fullPath);
    }
  });

  return files;
}

// Main documentation generation function
async function generateDocumentation() {
  // Create docs directory if it doesn't exist
  const docsDir = path.join(process.cwd(), 'docs');
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
  }

  let documentation = '';

  // Add project name and description
  documentation += '# DND Scribe Documentation\n\n';

  // Add file tree
  documentation += '## Project Structure\n\n```\n';
  documentation += generateFileTree(process.cwd());
  documentation += '```\n\n';

  // Add package.json contents
  documentation += '## Package.json\n\n```json\n';
  documentation += readFileContents(path.join(process.cwd(), 'package.json'));
  documentation += '\n```\n\n';

  // Add source code files
  documentation += '## Source Code\n\n';
  const sourceFiles = getTypeScriptFiles(path.join(process.cwd(), 'src'));

  sourceFiles.forEach((file) => {
    const relativePath = path.relative(process.cwd(), file);
    documentation += `### ${relativePath}\n\n\`\`\`typescript\n`;
    documentation += readFileContents(file);
    documentation += '\n```\n\n';
  });

  // Write the documentation file
  fs.writeFileSync(path.join(docsDir, 'documentation.md'), documentation);

  console.log('Documentation generated successfully in docs/documentation.md');
}

// Execute the documentation generation
generateDocumentation().catch(console.error);

```

