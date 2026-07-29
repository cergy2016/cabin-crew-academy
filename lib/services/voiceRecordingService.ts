/**
 * Voice Recording Service - Handles recording, transcription, and analysis
 */

export interface RecordingOptions {
  mimeType?: string;
  audioBitsPerSecond?: number;
}

export interface VoiceAnalysis {
  transcription: string;
  confidence: number;
  scores: {
    pronunciation: number;
    grammar: number;
    vocabulary: number;
    fluency: number;
    confidence: number;
    professionalism: number;
  };
  corrections: Array<{
    original: string;
    correction: string;
    explanation: string;
  }>;
  suggestions: string[];
}

class VoiceRecordingService {
  private mediaRecorder: MediaRecorder | null = null;
  private mediaStream: MediaStream | null = null;
  private chunks: Blob[] = [];
  private isRecording = false;

  /**
   * Start recording audio
   */
  async startRecording(options: RecordingOptions = {}): Promise<void> {
    try {
      this.chunks = [];

      // Request microphone access
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      const mimeType = options.mimeType || this.getSupportedMimeType();

      this.mediaRecorder = new MediaRecorder(this.mediaStream, {
        mimeType,
        audioBitsPerSecond: options.audioBitsPerSecond || 128000,
      });

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.chunks.push(event.data);
        }
      };

      this.mediaRecorder.start();
      this.isRecording = true;
    } catch (error) {
      console.error('Error starting recording:', error);
      throw error;
    }
  }

  /**
   * Stop recording and return blob
   */
  async stopRecording(): Promise<Blob> {
    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder) {
        reject(new Error('No recording in progress'));
        return;
      }

      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: this.mediaRecorder!.mimeType });
        this.stopMediaStream();
        this.isRecording = false;
        resolve(blob);
      };

      this.mediaRecorder.onerror = (event) => {
        this.stopMediaStream();
        this.isRecording = false;
        reject(new Error(`Recording error: ${event.error}`));
      };

      this.mediaRecorder.stop();
    });
  }

  /**
   * Cancel recording
   */
  cancelRecording(): void {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
      this.stopMediaStream();
      this.chunks = [];
      this.isRecording = false;
    }
  }

  /**
   * Stop media stream
   */
  private stopMediaStream(): void {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => track.stop());
      this.mediaStream = null;
    }
  }

  /**
   * Get supported MIME type
   */
  private getSupportedMimeType(): string {
    const types = [
      'audio/webm;codecs=opus',
      'audio/mp4',
      'audio/ogg',
      'audio/wav',
      'audio/mpeg',
    ];

    for (const type of types) {
      if (MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }

    return 'audio/wav';
  }

  /**
   * Get recording state
   */
  getIsRecording(): boolean {
    return this.isRecording;
  }

  /**
   * Convert blob to data URL
   */
  blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  /**
   * Upload recording to server
   */
  async uploadRecording(blob: Blob, lessonId: string): Promise<string> {
    const formData = new FormData();
    formData.append('audio', blob);
    formData.append('lessonId', lessonId);

    const response = await fetch('/api/voice/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload recording');
    }

    const data = await response.json();
    return data.audioUrl;
  }

  /**
   * Analyze voice recording (calls AI service)
   */
  async analyzeVoice(
    blob: Blob,
    expectedText: string,
    lessonId: string
  ): Promise<VoiceAnalysis> {
    const formData = new FormData();
    formData.append('audio', blob);
    formData.append('expectedText', expectedText);
    formData.append('lessonId', lessonId);

    const response = await fetch('/api/voice/analyze', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to analyze voice');
    }

    return response.json();
  }
}

// Export singleton instance
export const voiceRecordingService = new VoiceRecordingService();

/**
 * Hook for using voice recording in React components
 */
export function useVoiceRecording() {
  const startRecording = async (options?: RecordingOptions) => {
    return voiceRecordingService.startRecording(options);
  };

  const stopRecording = async () => {
    return voiceRecordingService.stopRecording();
  };

  const cancelRecording = () => {
    voiceRecordingService.cancelRecording();
  };

  const isRecording = voiceRecordingService.getIsRecording();

  const uploadRecording = async (blob: Blob, lessonId: string) => {
    return voiceRecordingService.uploadRecording(blob, lessonId);
  };

  const analyzeVoice = async (blob: Blob, expectedText: string, lessonId: string) => {
    return voiceRecordingService.analyzeVoice(blob, expectedText, lessonId);
  };

  return {
    startRecording,
    stopRecording,
    cancelRecording,
    isRecording,
    uploadRecording,
    analyzeVoice,
  };
}
