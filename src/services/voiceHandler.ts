import {
  joinVoiceChannel,
  createAudioPlayer,
  NoSubscriberBehavior,
  VoiceConnectionStatus,
  entersState,
  type DiscordGatewayAdapterCreator,
} from '@discordjs/voice';
import type { VoiceBasedChannel } from 'discord.js';

export async function connectToVoice(voiceChannel: VoiceBasedChannel) {
  const connection = joinVoiceChannel({
    channelId: voiceChannel.id,
    guildId: voiceChannel.guild.id,
    adapterCreator: voiceChannel.guild.voiceAdapterCreator as DiscordGatewayAdapterCreator,
    selfDeaf: false,
    selfMute: false,
  });

  try {
    await entersState(connection, VoiceConnectionStatus.Ready, 20e3);
    return connection;
  } catch (error) {
    connection.destroy();
    throw error;
  }
}

export const player = createAudioPlayer({
  behaviors: {
    noSubscriber: NoSubscriberBehavior.Stop,
  },
});
