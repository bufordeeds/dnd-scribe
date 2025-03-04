import { SlashCommandBuilder, ChatInputCommandInteraction, GuildMember } from 'discord.js';
import { AudioRecorder } from '../services/audioRecorder.js';

// Get the singleton instance of AudioRecorder
const audioRecorder = AudioRecorder.getInstance();

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
