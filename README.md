# D&D Scribe

A Discord bot that records D&D sessions and transcribes them using AWS services.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with required credentials
4. Build the project: `npm run build`
5. Start the bot: `npm start`

## Environment Variables

-   `DISCORD_TOKEN`: Your Discord bot token
-   `CLIENT_ID`: Discord application client ID
-   `AWS_REGION`: AWS region for services
-   `AWS_BUCKET`: S3 bucket name for storing recordings

## Commands

-   `/join`: Join a voice channel and start recording
-   `/leave`: Leave the voice channel and stop recording

## Development

-   `npm run dev`: Start the bot in development mode
-   `npm run build`: Build the TypeScript project
-   `npm run watch`: Watch for changes and rebuild
