import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { getVoiceConnection } from '@discordjs/voice';
import { AudioRecorder } from '../services/audioRecorder.js';

// Get the singleton instance of AudioRecorder
const audioRecorder = AudioRecorder.getInstance();

export const data = new SlashCommandBuilder()
  .setName('leave')
  .setDescription('Stops recording and leaves the voice channel');

export async function execute(interaction: ChatInputCommandInteraction) {
  if (!interaction.guild) {
    return interaction.reply({
      content: 'This command can only be used in a server!',
      ephemeral: true,
    });
  }

  try {
    console.log('[Leave Command] Checking voice connection and recording status...');

    const connection = getVoiceConnection(interaction.guild.id);
    const activeSession = audioRecorder.getActiveSession(interaction.guild.id);

    console.log('[Leave Command] Current state:', {
      hasConnection: !!connection,
      hasActiveSession: !!activeSession,
      guildId: interaction.guild.id,
    });

    // If no connection and no session, nothing to do
    if (!connection && !activeSession) {
      return interaction.reply({
        content: "I'm not in any voice channel!",
        ephemeral: true,
      });
    }

    // Initial reply
    await interaction.reply('🎙️ Stopping recording...');

    // Handle active recording session if exists
    if (activeSession) {
      console.log('[Leave Command] Stopping active recording session...');
      await interaction.followUp('⏳ Waiting for audio pipeline to complete...');

      try {
        // Add a timeout to prevent hanging indefinitely
        const stopRecordingPromise = audioRecorder.stopRecording(interaction.guild.id);
        const timeoutPromise = new Promise<null>((_, reject) => {
          setTimeout(
            () => reject(new Error('Recording stop operation timed out after 60 seconds')),
            60000,
          );
        });

        const metadata = await Promise.race([stopRecordingPromise, timeoutPromise]);
        console.log('[Leave Command] Recording stopped, metadata:', metadata);

        if (metadata) {
          // The audioRecorder.stopRecording method now handles all the processing
          // We just need to provide feedback to the user
          const duration = Math.round(metadata.duration);
          const minutes = Math.floor(duration / 60);
          const seconds = duration % 60;
          const participants = metadata.participants.length;

          // Final summary
          await interaction.followUp(
            `✅ Recording completed successfully!\n\n` +
              `**Session Details:**\n` +
              `• Duration: ${minutes}m ${seconds}s\n` +
              `• Participants: ${participants}\n` +
              `• Campaign: ${metadata.campaignName || 'Not specified'}\n` +
              `• File size: ${Math.round((metadata.fileSize / 1024 / 1024) * 100) / 100}MB\n` +
              `• Transcription job started: session-${metadata.sessionId}\n\n` +
              `The transcription will be available soon.`,
          );
        } else {
          console.error('[Leave Command] No metadata returned from stopRecording');
          await interaction.followUp('❌ Failed to stop recording. No metadata returned.');
        }
      } catch (error) {
        console.error('[Leave Command] Error stopping recording:', error);
        if (error instanceof Error) {
          console.error('[Leave Command] Error name:', error.name);
          console.error('[Leave Command] Error message:', error.message);
          console.error('[Leave Command] Stack trace:', error.stack);

          // Provide more specific error messages based on the error
          if (error.message.includes('timed out')) {
            await interaction.followUp(
              '❌ Recording stop operation timed out. The bot may need to be restarted.',
            );
          } else {
            await interaction.followUp(
              '❌ Failed to stop recording. Please try again or restart the bot.',
            );
          }
        } else {
          await interaction.followUp('❌ Failed to stop recording. Please try again.');
        }

        // If we timed out, try to force destroy the connection
        if (error instanceof Error && error.message.includes('timed out')) {
          try {
            if (connection) {
              console.log('[Leave Command] Forcing connection destruction after timeout');
              connection.destroy();
            }
          } catch (destroyError) {
            console.error('[Leave Command] Error forcing connection destruction:', destroyError);
          }
        }
      }
    } else {
      // If there's a connection but no active session, just destroy the connection
      if (connection) {
        console.log('[Leave Command] Destroying voice connection (no active session)');
        connection.destroy();
      }
      await interaction.followUp('✅ Left the voice channel!');
    }
  } catch (error) {
    console.error('[Leave Command] Unhandled error:', error);
    if (error instanceof Error) {
      console.error('[Leave Command] Error name:', error.name);
      console.error('[Leave Command] Error message:', error.message);
      console.error('[Leave Command] Stack trace:', error.stack);
    }
    await interaction.reply({
      content: 'Failed to leave the voice channel!',
      ephemeral: true,
    });
  }
}
