/**
 * Audio Service - Handles text-to-speech and audio playback
 * Uses native text-to-speech API with fallback to external services
 */

export type TTSVoice = 'native-male' | 'native-female' | 'pilot' | 'crew' | 'passenger' | 'instructor';

interface TTSOptions {
  voice?: TTSVoice;
  rate?: number; // 0.5 to 2
  pitch?: number; // 0 to 2
  volume?: number; // 0 to 1
}

class AudioService {
  private audioContext: AudioContext | null = null;
  private isSupported = false;
  private synth: SpeechSynthesis | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.synth = window.speechSynthesis;
      this.isSupported = !!this.synth;
      try {
        const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) {
          this.audioContext = new AudioContext();
        }
      } catch (e) {
        console.warn('AudioContext not supported');
      }
    }
  }

  /**
   * Convert text to speech using Web Speech API
   * Falls back to external TTS if needed
   */
  async textToSpeech(text: string, options: TTSOptions = {}): Promise<HTMLAudioElement | null> {
    if (!this.isSupported || !this.synth) {
      console.warn('Text-to-speech not supported. Using fallback...');
      return this.fallbackTTS(text, options);
    }

    return new Promise((resolve, reject) => {
      try {
        // Cancel any ongoing speech
        this.synth!.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // Set voice characteristics
        utterance.rate = options.rate ?? 1;
        utterance.pitch = options.pitch ?? 1;
        utterance.volume = options.volume ?? 1;

        // Map voice type to actual voice
        const voiceSelection = this.selectVoice(options.voice);
        if (voiceSelection) {
          const voices = this.synth!.getVoices();
          const selectedVoice = voices.find((v) => v.name === voiceSelection);
          if (selectedVoice) {
            utterance.voice = selectedVoice;
          }
        }

        utterance.onend = () => {
          resolve(null); // Native TTS doesn't return an audio element
        };

        utterance.onerror = (error) => {
          console.error('TTS Error:', error);
          reject(error);
        };

        this.synth!.speak(utterance);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Fallback TTS using external service
   */
  private async fallbackTTS(text: string, options: TTSOptions): Promise<HTMLAudioElement | null> {
    try {
      // Use Google Translate API as fallback
      const encodedText = encodeURIComponent(text);
      const audio = new Audio(
        `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=en&client=tw-ob`
      );
      return audio;
    } catch (error) {
      console.error('Fallback TTS failed:', error);
      return null;
    }
  }

  /**
   * Select appropriate voice based on voice type
   */
  private selectVoice(voiceType?: TTSVoice): string | null {
    const voiceMap: Record<TTSVoice, string> = {
      'native-male': 'Google UK English Male',
      'native-female': 'Google UK English Female',
      pilot: 'Google UK English Male',
      crew: 'Google UK English Female',
      passenger: 'Google US English',
      instructor: 'Google UK English Female',
    };

    return voiceMap[voiceType || 'native-female'];
  }

  /**
   * Play audio file with custom controls
   */
  async playAudio(
    audioUrl: string,
    options?: {
      rate?: number;
      volume?: number;
      onPlay?: () => void;
      onPause?: () => void;
      onEnd?: () => void;
      onError?: (error: Error) => void;
    }
  ): Promise<HTMLAudioElement> {
    return new Promise((resolve, reject) => {
      try {
        const audio = new Audio(audioUrl);

        if (options?.rate) {
          audio.playbackRate = options.rate;
        }
        if (options?.volume) {
          audio.volume = options.volume;
        }

        if (options?.onPlay) audio.addEventListener('play', options.onPlay);
        if (options?.onPause) audio.addEventListener('pause', options.onPause);
        if (options?.onEnd) audio.addEventListener('ended', options.onEnd);

        audio.addEventListener('error', (e) => {
          const error = new Error(`Failed to load audio: ${audioUrl}`);
          if (options?.onError) options.onError(error);
          reject(error);
        });

        audio.addEventListener('loadedmetadata', () => {
          resolve(audio);
        });

        // Start loading
        audio.load();
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Stop all ongoing speech synthesis
   */
  stopSpeech(): void {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  /**
   * Get available voices
   */
  getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.synth?.getVoices() || [];
  }

  /**
   * Initialize speech synthesis (required on some browsers)
   */
  initializeSpeechSynthesis(): void {
    if (this.synth) {
      // Trigger voices loading
      this.synth.getVoices();
    }
  }
}

// Export singleton instance
export const audioService = new AudioService();

/**
 * Hook for using audio in React components
 */
export function useAudio() {
  const textToSpeech = async (text: string, options?: TTSOptions) => {
    return audioService.textToSpeech(text, options);
  };

  const playAudio = async (
    audioUrl: string,
    options?: Parameters<typeof audioService.playAudio>[1]
  ) => {
    return audioService.playAudio(audioUrl, options);
  };

  const stopSpeech = () => {
    audioService.stopSpeech();
  };

  return { textToSpeech, playAudio, stopSpeech };
}
