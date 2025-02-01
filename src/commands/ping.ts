import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Shows bot status and latency information');

export async function execute(interaction: ChatInputCommandInteraction) {
  const sent = await interaction.reply({
    content: 'Pinging...',
    fetchReply: true,
  });

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
          • Uptime: ${uptime}s
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
