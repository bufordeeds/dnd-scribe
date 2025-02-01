import {
  S3Client,
  CreateBucketCommand,
  PutBucketPolicyCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3';
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

// Create S3 buckets for audio input and transcription output
async function createS3Buckets(): Promise<BucketNames> {
  const bucketNames = {
    input: `${process.env.PROJECT_NAME}-audio-input`,
    output: `${process.env.PROJECT_NAME}-transcription-output`,
  };

  try {
    // Check if buckets exist first
    try {
      await s3Client.send(
        new CreateBucketCommand({
          Bucket: bucketNames.input,
        }),
      );
      console.log(`Created input bucket: ${bucketNames.input}`);
    } catch (error: any) {
      if (error.Code === 'BucketAlreadyOwnedByYou') {
        console.log(`Using existing input bucket: ${bucketNames.input}`);
      } else {
        throw error;
      }
    }

    try {
      await s3Client.send(
        new CreateBucketCommand({
          Bucket: bucketNames.output,
        }),
      );
      console.log(`Created output bucket: ${bucketNames.output}`);
    } catch (error: any) {
      if (error.Code === 'BucketAlreadyOwnedByYou') {
        console.log(`Using existing output bucket: ${bucketNames.output}`);
      } else {
        throw error;
      }
    }

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
