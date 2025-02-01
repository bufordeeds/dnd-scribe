import { SlashCommandBuilder, ChatInputCommandInteraction, GuildMember } from 'discord.js';
import { joinVoiceChannel, VoiceConnectionStatus } from '@discordjs/voice';

export const data = new SlashCommandBuilder()
  .setName('join')
  .setDescription('Joins your voice channel')
  .setDMPermission(false); // Explicitly disable DM usage

export async function execute(interaction: ChatInputCommandInteraction) {
  console.log('Join command received');

  try {
    if (!interaction.guild) {
      console.log('Command used outside of guild');
      return interaction.reply({
        content: 'This command can only be used in a server!',
        flags: ['Ephemeral'],
      });
    }

    // Defer the reply for longer operations
    await interaction.deferReply();

    // Check if the user is in a voice channel
    const member = interaction.member as GuildMember;
    const voiceChannel = member.voice.channel;

    console.log('User voice state:', {
      inVoiceChannel: !!voiceChannel,
      channelId: voiceChannel?.id,
      channelName: voiceChannel?.name,
      guildId: interaction.guild.id,
      guildName: interaction.guild.name,
    });

    if (!voiceChannel) {
      return interaction.editReply('You need to be in a voice channel first!');
    }

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      selfDeaf: false,
      selfMute: false,
    });

    // Handle connection ready state
    connection.on(VoiceConnectionStatus.Ready, () => {
      console.log('Voice connection is ready!');
    });

    console.log('Successfully joined voice channel:', voiceChannel.name);
    await interaction.editReply(`Joined voice channel: ${voiceChannel.name}! Ready to record.`);
  } catch (error) {
    console.error('Error in join command:', error);

    // If we haven't replied yet, defer the reply
    if (!interaction.deferred && !interaction.replied) {
      await interaction.deferReply();
    }

    await interaction.editReply('Failed to join the voice channel!');
  }
}
