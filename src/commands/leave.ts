import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { getVoiceConnection } from '@discordjs/voice';

export const data = new SlashCommandBuilder()
  .setName('leave')
  .setDescription('Leaves the voice channel')
  .setDMPermission(false); // Explicitly disable DM usage

export async function execute(interaction: ChatInputCommandInteraction) {
  if (!interaction.guild) {
    return interaction.reply({
      content: 'This command can only be used in a server!',
      ephemeral: true,
    });
  }

  const connection = getVoiceConnection(interaction.guild.id);

  if (!connection) {
    return interaction.reply({
      content: "I'm not in a voice channel!",
      ephemeral: true,
    });
  }

  try {
    connection.destroy();
    await interaction.reply('Left the voice channel!');
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'Failed to leave the voice channel!',
      ephemeral: true,
    });
  }
}
