import { Collection } from 'discord.js';
import { SlashCommand } from './commands.js';

declare module 'discord.js' {
  export interface Client {
    commands: Collection<string, SlashCommand>;
  }
}
