'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Square, Play, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useVoiceRecording } from '@/lib/services/voiceRecordingService';
import type { VoiceAnalysis } from '@/lib/services/voiceRecordingService';
import AudioPlayer from './AudioPlayer';
import { useTranslation } from '@/lib/i18n/useTranslation';

interface VoiceRecorderProps {
  exerciseId: string;
  expectedText: string;
  onRecordingComplete?: (analysis: VoiceAnalysis) => void;
}

export default function VoiceRecorder({
  exerciseId,
  expectedText,
  onRecordingComplete,
}: VoiceRecorderProps) {
  const { t } = useTranslation();
  const {
    startRecording,
    stopRecording,
    cancelRecording,
    isRecording,
    analyzeVoice,
  } = useVoiceRecording();

  const [recordingState, setRecordingState] = useState<
    'idle' | 'recording' | 'analyzing' | 'complete'
  >('idle');
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<VoiceAnalysis | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const recordingBlobRef = useRef<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStartRecording = async () => {
    try {
      setError(null);
      setRecordingTime(0);
      await startRecording();
      setRecordingState('recording');

      recordingTimerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : t((d) => d.voiceRecorder.errorStart);
      setError(errorMessage);
      console.error('Recording error:', err);
    }
  };

  const handleStopRecording = async () => {
    try {
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
      }

      const blob = await stopRecording();
      recordingBlobRef.current = blob;

      // Convert blob to audio URL
      const audioUrl = URL.createObjectURL(blob);
      setRecordedAudio(audioUrl);

      // Automatically analyze
      await handleAnalyze(blob);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : t((d) => d.voiceRecorder.errorStop);
      setError(errorMessage);
      console.error('Stop recording error:', err);
    }
  };

  const handleCancel = () => {
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
    }
    cancelRecording();
    setRecordingState('idle');
    setRecordingTime(0);
    setError(null);
  };

  const handleAnalyze = async (blob?: Blob) => {
    try {
      if (!recordingBlobRef.current && !blob) {
        setError(t((d) => d.voiceRecorder.errorNoRecording));
        return;
      }

      const audioBlob = blob || recordingBlobRef.current!;
      setRecordingState('analyzing');
      setError(null);

      const result = await analyzeVoice(audioBlob, expectedText, exerciseId);
      setAnalysis(result);
      setRecordingState('complete');
      onRecordingComplete?.(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : t((d) => d.voiceRecorder.errorAnalyze);
      setError(errorMessage);
      setRecordingState('idle');
      console.error('Analysis error:', err);
    }
  };

  const handleRetry = () => {
    setRecordedAudio(null);
    setAnalysis(null);
    setRecordingState('idle');
    setError(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-4">
      <AnimatePresence mode="wait">
        {/* Recording State */}
        {recordingState === 'idle' && !recordedAudio && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="p-4 bg-stone-50 dark:bg-white/[0.03] border border-stone-200 dark:border-white/10 rounded-sm">
              <p className="text-sm text-stone-700 dark:text-stone-300">
                <strong className="text-amber-700 dark:text-amber-400">{t((d) => d.voiceRecorder.instructionsLabel)}</strong> {t((d) => d.voiceRecorder.instructionsText)}
              </p>
            </div>

            <div className="p-4 bg-stone-50 dark:bg-white/[0.03] rounded-sm border border-stone-200 dark:border-white/10">
              <p className="text-stone-900 dark:text-amber-50 font-medium">
                {t((d) => d.voiceRecorder.sayThis)}
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-300 mt-2 italic">
                {expectedText}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartRecording}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold transition-all"
            >
              <Mic className="w-6 h-6" />
              {t((d) => d.voiceRecorder.startRecording)}
            </motion.button>
          </motion.div>
        )}

        {/* Recording Active */}
        {recordingState === 'recording' && (
          <motion.div
            key="recording"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-4"
          >
            <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <Mic className="w-8 h-8 text-red-600 dark:text-red-400" />
                </motion.div>
                <p className="text-lg font-bold text-red-900 dark:text-red-100">
                  {t((d) => d.voiceRecorder.recording)}
                </p>
                <p className="text-2xl font-mono text-red-600 dark:text-red-400 mt-2">
                  {formatTime(recordingTime)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStopRecording}
                className="py-3 flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
              >
                <Square className="w-4 h-4" />
                {t((d) => d.voiceRecorder.stopRecording)}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCancel}
                className="py-3 flex items-center justify-center gap-2 rounded-sm bg-stone-500 hover:bg-stone-600 text-white font-bold transition-colors"
              >
                {t((d) => d.voiceRecorder.cancel)}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Analyzing */}
        {recordingState === 'analyzing' && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 text-center space-y-4"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
              <Loader2 className="w-8 h-8 text-amber-600 dark:text-amber-400 mx-auto" />
            </motion.div>
            <p className="font-semibold text-stone-900 dark:text-amber-50">
              {t((d) => d.voiceRecorder.analyzing)}
            </p>
          </motion.div>
        )}

        {/* Analysis Complete */}
        {recordingState === 'complete' && analysis && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Audio Playback */}
            {recordedAudio && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-stone-600 dark:text-stone-300">
                  {t((d) => d.voiceRecorder.yourRecording)}
                </p>
                <AudioPlayer audioUrl={recordedAudio} />
              </div>
            )}

            {/* Score Summary */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-sm border border-emerald-300 dark:border-emerald-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-display text-lg text-emerald-900 dark:text-emerald-100">
                  {t((d) => d.voiceRecorder.analysisComplete)}
                </h3>
              </div>

              {/* Scores Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.entries(analysis.scores).map(([key, score]) => (
                  <div
                    key={key}
                    className="bg-white dark:bg-white/[0.03] p-3 rounded-sm border border-emerald-200 dark:border-emerald-800"
                  >
                    <p className="text-xs font-medium text-stone-500 dark:text-stone-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                      {score}%
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Transcription */}
            <div className="p-4 bg-stone-50 dark:bg-white/[0.03] rounded-sm border border-stone-200 dark:border-white/10">
              <p className="text-sm font-medium text-stone-600 dark:text-stone-300 mb-2">
                {t((d) => d.voiceRecorder.transcription)}
              </p>
              <p className="text-stone-900 dark:text-amber-50">
                {analysis.transcription}
              </p>
            </div>

            {/* Corrections */}
            {analysis.corrections.length > 0 && (
              <div className="space-y-3">
                <p className="font-medium text-stone-900 dark:text-amber-50">
                  {t((d) => d.voiceRecorder.corrections)}
                </p>
                {analysis.corrections.map((correction, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-sm"
                  >
                    <p className="text-sm">
                      <strong className="text-yellow-900 dark:text-yellow-100">
                        {correction.original}
                      </strong>{' '}
                      →{' '}
                      <strong className="text-emerald-900 dark:text-emerald-100">
                        {correction.correction}
                      </strong>
                    </p>
                    <p className="text-xs text-yellow-800 dark:text-yellow-200 mt-1">
                      {correction.explanation}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Suggestions */}
            {analysis.suggestions.length > 0 && (
              <div className="space-y-2">
                <p className="font-medium text-stone-900 dark:text-amber-50">
                  {t((d) => d.voiceRecorder.tipsForImprovement)}
                </p>
                <ul className="space-y-1">
                  {analysis.suggestions.map((suggestion, idx) => (
                    <li key={idx} className="text-sm text-stone-600 dark:text-stone-300">
                      • {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Retry Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRetry}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-[#0b0a08] font-bold rounded-sm transition-colors"
            >
              {t((d) => d.exercise.tryAgain)}
            </motion.button>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900 dark:text-red-100">
                {t((d) => d.voiceRecorder.recordingError)}
              </p>
              <p className="text-sm text-red-800 dark:text-red-200 mt-1">
                {error}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
