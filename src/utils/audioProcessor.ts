import { spawn } from 'child_process';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

export async function convertPcmToMp3(inputPath: string, outputPath: string): Promise<void> {
  try {
    console.log('[AudioProcessor] Starting PCM to MP3 conversion...');

    // Create FFmpeg process for conversion
    const ffmpegProcess = spawn(ffmpeg.path, [
      '-f',
      's16le', // Input format: signed 16-bit little-endian
      '-ar',
      '48000', // Sample rate: 48kHz
      '-ac',
      '2', // Audio channels: 2 (stereo)
      '-i',
      inputPath, // Input file
      '-c:a',
      'libmp3lame', // MP3 codec
      '-b:a',
      '128k', // Bitrate: 128kbps
      outputPath, // Output file
    ]);

    // Add error handlers
    ffmpegProcess.stderr.on('data', (data) => {
      console.log(`[AudioProcessor] FFmpeg: ${data}`);
    });

    // Wait for FFmpeg to finish
    await new Promise<void>((resolve, reject) => {
      ffmpegProcess.on('close', (code) => {
        if (code === 0) {
          console.log('[AudioProcessor] PCM to MP3 conversion completed successfully');
          resolve();
        } else {
          reject(new Error(`FFmpeg process exited with code ${code}`));
        }
      });

      ffmpegProcess.on('error', (error) => {
        console.error('[AudioProcessor] FFmpeg process error:', error);
        reject(error);
      });
    });
  } catch (error) {
    console.error('[AudioProcessor] Error converting PCM to MP3:', error);
    throw error;
  }
}
