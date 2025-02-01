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
    const filePath = new URL(`commands/${file}`, import.meta.url).href;
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
