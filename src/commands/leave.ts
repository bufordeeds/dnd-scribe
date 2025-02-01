import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { getVoiceConnection } from '@discordjs/voice';
import { AudioRecorder } from '../services/audioRecorder.js';

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
        const duration = Math.round(metadata.duration);
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        const participants = metadata.participants.length;

        response =
          `Recording stopped! Session details:\n` +
          `• Duration: ${minutes}m ${seconds}s\n` +
          `• Participants: ${participants}\n` +
          `• Campaign: ${metadata.campaignName || 'Not specified'}\n` +
          `• File size: ${Math.round((metadata.fileSize / 1024 / 1024) * 100) / 100}MB`;
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
