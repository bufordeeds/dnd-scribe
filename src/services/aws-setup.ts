import {
  S3Client,
  CreateBucketCommand,
  PutBucketPolicyCommand,
  PutObjectCommand,
  BucketLocationConstraint,
} from '@aws-sdk/client-s3';
import { createReadStream } from 'fs';
import {
  TranscribeClient,
  StartTranscriptionJobCommand,
  LanguageCode,
} from '@aws-sdk/client-transcribe';

// Initialize AWS clients
const s3Client = new S3Client({ region: process.env.AWS_REGION });
const transcribeClient = new TranscribeClient({ region: process.env.AWS_REGION });

interface BucketNames {
  input: string;
  output: string;
}

// Helper function to create a single bucket with retries
async function createBucketWithRetry(bucketName: string, maxRetries = 5): Promise<void> {
  let attempt = 0;
  const baseDelay = 5000; // Start with 5 second delay

  while (attempt < maxRetries) {
    try {
      await s3Client.send(
        new CreateBucketCommand({
          Bucket: bucketName,
          CreateBucketConfiguration: {
            LocationConstraint: process.env.AWS_REGION as BucketLocationConstraint,
          },
        }),
      );
      console.log(`Created bucket: ${bucketName}`);
      return;
    } catch (error: any) {
      if (error.Code === 'BucketAlreadyOwnedByYou') {
        console.log(`Using existing bucket: ${bucketName}`);
        return;
      }

      if (error.Code === 'OperationAborted') {
        attempt++;
        if (attempt < maxRetries) {
          const delay = baseDelay * Math.pow(2, attempt - 1); // Exponential backoff
          console.log(
            `Bucket creation aborted, retrying in ${
              delay / 1000
            } seconds... (Attempt ${attempt}/${maxRetries})`,
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }
      }

      throw error;
    }
  }

  throw new Error(`Failed to create bucket ${bucketName} after ${maxRetries} attempts`);
}

// Create S3 buckets for audio input and transcription output
async function createS3Buckets(): Promise<BucketNames> {
  const bucketNames = {
    input: `${process.env.PROJECT_NAME}-audio-input`,
    output: `${process.env.PROJECT_NAME}-transcription-output`,
  };

  try {
    // Create buckets with retry logic
    await createBucketWithRetry(bucketNames.input);
    await createBucketWithRetry(bucketNames.output);

    // Set bucket policies for Transcribe access
    const inputBucketPolicy = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'TranscribeGetAccess',
          Effect: 'Allow',
          Principal: {
            Service: 'transcribe.amazonaws.com',
          },
          Action: ['s3:GetObject'],
          Resource: [`arn:aws:s3:::${bucketNames.input}/*`],
        },
      ],
    };

    const outputBucketPolicy = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'TranscribePutAccess',
          Effect: 'Allow',
          Principal: {
            Service: 'transcribe.amazonaws.com',
          },
          Action: ['s3:PutObject'],
          Resource: [`arn:aws:s3:::${bucketNames.output}/*`],
        },
      ],
    };

    await s3Client.send(
      new PutBucketPolicyCommand({
        Bucket: bucketNames.input,
        Policy: JSON.stringify(inputBucketPolicy),
      }),
    );

    await s3Client.send(
      new PutBucketPolicyCommand({
        Bucket: bucketNames.output,
        Policy: JSON.stringify(outputBucketPolicy),
      }),
    );

    console.log('S3 buckets created successfully');
    return bucketNames;
  } catch (error) {
    console.error('Error creating S3 buckets:', error);
    throw error;
  }
}

// Get the current user's ARN
async function getCurrentUserArn(): Promise<string> {
  // Since we already have access to S3 and Transcribe, we'll use the credentials
  // that were provided in the environment variables
  return `arn:aws:iam::070195441517:user/dnd-scribe-bot`;
}

// Function to test transcription setup
async function testTranscriptionSetup(inputBucket: string, outputBucket: string): Promise<void> {
  try {
    // Create a dummy test file (1 second of silence in base64)
    const testAudioBase64 =
      'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAFbgCenp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6e//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAYAAAAAAAAABW7gxbmvAAAAAAAAAAAAAAAAAAAA//sQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
    const testAudioBuffer = Buffer.from(testAudioBase64, 'base64');

    // Upload test audio file to S3
    await s3Client.send(
      new PutObjectCommand({
        Bucket: inputBucket,
        Key: 'test-audio.mp3',
        Body: testAudioBuffer,
        ContentType: 'audio/mpeg',
      }),
    );
    console.log('Uploaded test audio file to S3');

    // Start transcription job
    const transcriptionJob = {
      TranscriptionJobName: `test-job-${Date.now()}`,
      LanguageCode: LanguageCode.EN_US,
      Media: {
        MediaFileUri: `s3://${inputBucket}/test-audio.mp3`,
      },
      OutputBucketName: outputBucket,
    };

    await transcribeClient.send(new StartTranscriptionJobCommand(transcriptionJob));
    console.log('Transcription test job started successfully');
  } catch (error) {
    console.error('Error testing transcription setup:', error);
    throw error;
  }
}

interface AWSInfrastructure {
  inputBucket: string;
  outputBucket: string;
  userArn: string;
}

// Main setup function
// Upload audio file to S3
export async function uploadAudioToS3(
  filePath: string,
  fileName: string,
  bucket: string,
): Promise<string> {
  try {
    console.log(`[AWS] Uploading audio file to S3: ${fileName}`);
    const fileStream = createReadStream(filePath);
    const s3Key = `recordings/${fileName}`;

    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: s3Key,
        Body: fileStream,
        ContentType: 'audio/mpeg',
      }),
    );

    console.log(`[AWS] Successfully uploaded audio file to S3: ${s3Key}`);
    return s3Key;
  } catch (error) {
    console.error('[AWS] Error uploading audio file to S3:', error);
    throw error;
  }
}

// Start a transcription job
export async function startTranscriptionJob(
  s3Key: string,
  inputBucket: string,
  outputBucket: string,
  sessionId: string,
): Promise<void> {
  try {
    console.log(`[AWS] Starting transcription job for: ${s3Key}`);

    const transcriptionJob = {
      TranscriptionJobName: `session-${sessionId}`,
      LanguageCode: LanguageCode.EN_US,
      Media: {
        MediaFileUri: `s3://${inputBucket}/${s3Key}`,
      },
      OutputBucketName: outputBucket,
      Settings: {
        ShowSpeakerLabels: true,
        MaxSpeakerLabels: 10,
      },
    };

    await transcribeClient.send(new StartTranscriptionJobCommand(transcriptionJob));
    console.log(`[AWS] Transcription job started successfully: session-${sessionId}`);
  } catch (error) {
    console.error('[AWS] Error starting transcription job:', error);
    throw error;
  }
}

export async function setupAWSInfrastructure(): Promise<AWSInfrastructure> {
  try {
    const buckets = await createS3Buckets();
    const userArn = await getCurrentUserArn();
    await testTranscriptionSetup(buckets.input, buckets.output);

    return {
      inputBucket: buckets.input,
      outputBucket: buckets.output,
      userArn,
    };
  } catch (error) {
    console.error('Error setting up AWS infrastructure:', error);
    throw error;
  }
}
