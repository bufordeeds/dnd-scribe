import { spawn } from 'child_process';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export async function convertPCMToMP3(
  inputPath: string,
  outputPath: string
): Promise<void> {
  const ffmpeg = spawn('ffmpeg', [
    '-f', 's16le',        // PCM format
    '-ar', '48000',       // Sample rate
    '-ac', '2',           // Channels
    '-i', 'pipe:0',       // Input from pipe
    '-c:a', 'libmp3lame', // MP3 codec
    '-q:a', '4',          // Quality (0-9, lower is better)
    outputPath            // Output file
  ]);

  const inputStream = createReadStream(inputPath);

  // Pipe input to ffmpeg
  await pipeline(inputStream, ffmpeg.stdin);

  return new Promise((resolve, reject) => {
    ffmpeg.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`FFmpeg process exited with code ${code}`));
      }
    });

    ffmpeg.stderr.on('data', (data) => {
      console.log(`FFmpeg: ${data}`);
    });
  });
}
