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
- AWS Account with:
  - IAM user with S3 and Transcribe permissions
  - S3 bucket access in us-east-2 region
  - Amazon Transcribe service access

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

3. Create a `.env` file in the root directory with your configuration:

```env
# Discord Configuration
DISCORD_TOKEN=your_bot_token_here

# AWS Configuration
AWS_REGION=us-east-2
PROJECT_NAME=your_project_name
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
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

## AWS Setup

1. Create an IAM user in the AWS Console (us-east-2 region)
2. Attach policies for S3 and Transcribe services
3. Generate access keys and add them to your .env file
4. The bot will automatically create the necessary S3 buckets on startup

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
