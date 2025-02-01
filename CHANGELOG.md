# Changelog

All notable changes to DND Scribe will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2024-02-01

### Added

- AWS Infrastructure Setup
  - Implemented automatic S3 bucket creation and configuration
    - Audio input bucket for storing recorded sessions
    - Transcription output bucket for AWS Transcribe results
  - Configured bucket policies for AWS Transcribe service access
  - Added test transcription job functionality
  - Integrated AWS setup with bot initialization
  - Implemented graceful handling of existing AWS resources

## [0.1.0] - 2024-01-31

### Added

- `/ping` command

  - Shows detailed bot status information
  - Displays API and WebSocket latency
  - Reports system metrics (uptime, memory usage)
  - Shows voice connection status across servers

- `/join` command

  - Allows bot to join user's current voice channel
  - Implements proper error handling for various scenarios
  - Provides feedback on connection status
  - Automatically disables usage in DMs
  - Validates user's voice channel presence

- `/leave` command
  - Enables bot to disconnect from voice channels
  - Includes proper cleanup of voice connections
  - Provides clear feedback on success/failure
  - Automatically disables usage in DMs
  - Validates existing voice connection before attempting to leave
