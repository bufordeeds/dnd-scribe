export interface VoiceRecordingSession {
  guildId: string;
  channelId: string;
  sessionId: string;
  campaignName?: string;
  startTime: Date;
  participants: string[];
  audioStream: import('stream').Readable;
  fileWriter: import('fs').WriteStream;
}

export interface RecordingMetadata {
  sessionId: string;
  campaignName?: string;
  startTime: Date;
  endTime: Date;
  participants: string[];
  fileSize: number;
  duration: number;
  s3Key: string; // Location of the audio file in S3
}
