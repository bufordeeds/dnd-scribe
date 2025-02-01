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
