# DND Scribe

A Discord bot designed to record and transcribe D&D sessions, helping Dungeon Masters and players maintain detailed records of their adventures.

## Features

Currently implemented:

- `/ping` - Check bot status, latency, and system metrics
- `/join` - Join a voice channel to begin recording
- `/leave` - Leave the voice channel and stop recording

## Prerequisites

- Node.js 18 or higher
- Discord Bot Token
- AWS Account (for upcoming features)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dnd-scribe.git
cd dnd-scribe
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your Discord bot token:

```env
DISCORD_TOKEN=your_bot_token_here
```

4. Build the project:

```bash
npm run build
```

5. Deploy slash commands:

```bash
npm run deploy-commands
```

6. Start the bot:

```bash
npm start
```

## Usage

1. Invite the bot to your server with the necessary permissions (Voice, Message, etc.)
2. Join a voice channel
3. Use `/join` to have the bot join your channel
4. When finished, use `/leave` to disconnect the bot
5. Use `/ping` anytime to check the bot's status

## Development

This project is built with:

- TypeScript
- discord.js
- @discordjs/voice
- (More integrations coming soon)

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
