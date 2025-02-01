import { REST, Routes } from 'discord.js';
import { config } from 'dotenv';
import * as fs from 'fs';

config();

// Load command files
const commandsPath = new URL('commands', import.meta.url).pathname;
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

const commands = [];

// Load all commands
for (const file of commandFiles) {
  const filePath = new URL(`commands/${file}`, import.meta.url).href;
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
