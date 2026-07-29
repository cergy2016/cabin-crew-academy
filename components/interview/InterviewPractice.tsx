'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Play, ArrowRight, Star, Volume2 } from 'lucide-react';
import type { InterviewQuestion } from '@/lib/types';
import { useVoiceRecording } from '@/lib/services/voiceRecordingService';
import { useAudio } from '@/lib/services/audioService';
import AudioPlayer from '../lesson/AudioPlayer';
import VoiceRecorder from '../lesson/VoiceRecorder';

interface InterviewPracticeProps {
  question: InterviewQuestion;
  onComplete?: (score: number) => void;
}

type PracticeMode = 'select' | 'listening' | 'recording' | 'review';

export default function InterviewPractice({
  question,
  onComplete,
}: InterviewPracticeProps) {
  const [mode, setMode] = useState<PracticeMode>('select');
  const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
  const [recordingScore, setRecordingScore] = useState<number>(0);
  const { textToSpeech } = useAudio();
  const [isPlayingQuestion, setIsPlayingQuestion] = useState(false);

  const handlePlayQuestion = async () => {
    setIsPlayingQuestion(true);
    try {
      await textToSpeech(question.question, {
        voice: 'native-female',
        rate: 1,
      });
    } catch (error) {
      console.error('Error playing question:', error);
    } finally {
      setIsPlayingQuestion(false);
    }
  };

  const handleListenToAnswer = async (answerText: string) => {
    try {
      await textToSpeech(answerText, {
        voice: 'native-female',
        rate: 1,
      });
    } catch (error) {
      console.error('Error playing answer:', error);
    }
  };

  const handleRecordingComplete = (score: number) => {
    setRecordingScore(score);
    setMode('review');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {/* Select Mode - Choose between listening or recording */}
        {mode === 'select' && (
          <motion.div
            key="select"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Question Display */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase">
                  Interview Question
                </span>
                <div className="flex items-center gap-2">
                  {Array.from({ length: question.difficulty }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {question.question}
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayQuestion}
                disabled={isPlayingQuestion}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white font-semibold rounded-lg transition-colors"
              >
                <Volume2 className="w-5 h-5" />
                {isPlayingQuestion ? 'Playing...' : 'Hear Question'}
              </motion.button>
            </div>

            {/* Mode Selection */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Listen to Model Answers */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setMode('listening')}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-700 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">
                    Listen to Answers
                  </h3>
                  <Play className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Learn from model answers and expert responses
                </p>
              </motion.button>

              {/* Record Your Answer */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setMode('recording')}
                className="p-6 rounded-xl bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-2 border-red-300 dark:border-red-700 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-red-900 dark:text-red-100">
                    Record Answer
                  </h3>
                  <Mic className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Practice speaking and get AI feedback
                </p>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Listening Mode - Model Answers */}
        {mode === 'listening' && (
          <motion.div
            key="listening"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Model Answers
            </h2>

            {question.modelAnswers.map((answer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                {/* Scores */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 border-b border-slate-200 dark:border-slate-800">
                  <p className="font-semibold text-slate-900 dark:text-white mb-4">
                    Score Breakdown
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(answer.scoreBreakdown).map(([key, score]) => (
                      <div key={key}>
                        <p className="text-xs text-slate-600 dark:text-slate-400 capitalize mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <div className="relative h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${score}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                          />
                        </div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                          {score}%
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Answer Text */}
                <div className="p-6">
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
                    {answer.text || answer.answer || 'Answer not available'}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleListenToAnswer(answer.text || answer.answer || '')}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                    Listen to Answer
                  </motion.button>
                </div>
              </motion.div>
            ))}

            {/* Tips to Avoid */}
            {question.mistakesToAvoid && question.mistakesToAvoid.length > 0 && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-xl p-6">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">
                  ⚠️ Mistakes to Avoid
                </h3>
                <ul className="space-y-2">
                  {question.mistakesToAvoid?.map((mistake, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-yellow-800 dark:text-yellow-200 flex items-start gap-2"
                    >
                      <span className="text-red-600 font-bold mt-0.5">✗</span>
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Back Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMode('select')}
              className="w-full py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Back to Options
            </motion.button>
          </motion.div>
        )}

        {/* Recording Mode */}
        {mode === 'recording' && (
          <motion.div
            key="recording"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
              <p className="text-sm text-indigo-900 dark:text-indigo-100">
                <strong>Ready?</strong> Take a moment to think about your answer.
                Click record when you're ready to speak.
              </p>
            </div>

            <VoiceRecorder
              exerciseId={question.id}
              expectedText={question.question}
              onRecordingComplete={() => handleRecordingComplete(85)}
            />
          </motion.div>
        )}

        {/* Review Mode */}
        {mode === 'review' && (
          <motion.div
            key="review"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border-2 border-emerald-300 dark:border-emerald-700 p-8 text-center">
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase mb-2">
                Interview Score
              </p>
              <p className="text-5xl font-extrabold text-emerald-900 dark:text-emerald-100 mb-2">
                {recordingScore}%
              </p>
              <p className="text-emerald-800 dark:text-emerald-200">
                Great effort! Compare with model answers to improve.
              </p>
            </div>

            <div className="grid gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setMode('listening')}
                className="flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors"
              >
                <Play className="w-5 h-5" />
                Listen to Model Answers
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setMode('select');
                  onComplete?.(recordingScore);
                }}
                className="flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors"
              >
                Try Another Question
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
