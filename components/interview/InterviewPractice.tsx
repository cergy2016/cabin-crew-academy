'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Play, ArrowRight, Star } from 'lucide-react';
import type { InterviewQuestion } from '@/lib/types';
import AudioPlayer from '../lesson/AudioPlayer';
import VoiceRecorder from '../lesson/VoiceRecorder';
import { useTranslation } from '@/lib/i18n/useTranslation';

interface InterviewPracticeProps {
  question: InterviewQuestion;
  onComplete?: (score: number) => void;
}

type PracticeMode = 'select' | 'listening' | 'recording' | 'review';

export default function InterviewPractice({
  question,
  onComplete,
}: InterviewPracticeProps) {
  const { t } = useTranslation();
  const [mode, setMode] = useState<PracticeMode>('select');
  const [recordingScore, setRecordingScore] = useState<number>(0);

  const questionAudioUrl = `/audio/interview/${question.id}/question.wav`;

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
            <div className="bg-white dark:bg-white/[0.02] rounded-sm border border-amber-500/30 dark:border-amber-400/25 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-amber-700 dark:text-amber-400">
                  {question.airline ?? t((d) => d.interviewPractice.generalLabel)} &middot; {t((d) => d.interviewPractice.interviewQuestionLabel)}
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: question.difficulty }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <h2 className="font-display text-2xl text-stone-900 dark:text-amber-50 mb-6">
                {question.question}
              </h2>
              <AudioPlayer audioUrl={questionAudioUrl} />
            </div>

            {/* Mode Selection */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Listen to Model Answers */}
              <motion.button
                whileHover={{ y: -3 }}
                onClick={() => setMode('listening')}
                className="p-6 rounded-sm bg-white dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 hover:border-amber-500/60 dark:hover:border-amber-400/50 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg text-stone-900 dark:text-amber-50">
                    {t((d) => d.interviewPractice.listenToAnswersTitle)}
                  </h3>
                  <Play className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {t((d) => d.interviewPractice.listenToAnswersDescription)}
                </p>
              </motion.button>

              {/* Record Your Answer */}
              <motion.button
                whileHover={{ y: -3 }}
                onClick={() => setMode('recording')}
                className="p-6 rounded-sm bg-white dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 hover:border-amber-500/60 dark:hover:border-amber-400/50 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg text-stone-900 dark:text-amber-50">
                    {t((d) => d.interviewPractice.recordAnswerTitle)}
                  </h3>
                  <Mic className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {t((d) => d.interviewPractice.recordAnswerDescription)}
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
            <h2 className="font-display text-2xl text-stone-900 dark:text-amber-50">
              {t((d) => d.interviewPractice.modelAnswersTitle)}
            </h2>

            {question.modelAnswers.map((answer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-white/[0.02] rounded-sm border border-stone-200 dark:border-white/10 overflow-hidden"
              >
                {/* Scores */}
                <div className="bg-stone-50 dark:bg-white/[0.03] p-6 border-b border-stone-200 dark:border-white/10">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-4">
                    {t((d) => d.interviewPractice.scoreBreakdown)}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(answer.scoreBreakdown).map(([key, score]) => (
                      <div key={key}>
                        <p className="text-xs text-stone-500 dark:text-stone-400 capitalize mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <div className="relative h-1.5 bg-stone-200 dark:bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 start-0 bg-amber-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${score}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                          />
                        </div>
                        <p className="text-sm font-bold text-stone-900 dark:text-amber-50 mt-1">
                          {score}%
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Answer Text */}
                <div className="p-6 space-y-4">
                  <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                    {answer.text || answer.answer || t((d) => d.interviewPractice.answerNotAvailable)}
                  </p>
                  <AudioPlayer audioUrl={`/audio/interview/${question.id}/answer-${idx}.wav`} />
                </div>
              </motion.div>
            ))}

            {/* Tips to Avoid */}
            {question.mistakesToAvoid && question.mistakesToAvoid.length > 0 && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-800 rounded-sm p-6">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">
                  {t((d) => d.interviewPractice.mistakesToAvoid)}
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setMode('select')}
              className="w-full py-3 border border-stone-300 dark:border-white/15 text-stone-600 dark:text-stone-300 font-bold rounded-sm hover:border-amber-500 dark:hover:border-amber-400 transition-colors"
            >
              {t((d) => d.interviewPractice.backToOptions)}
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
            <div className="bg-stone-50 dark:bg-white/[0.03] border border-stone-200 dark:border-white/10 rounded-sm p-4">
              <p className="text-sm text-stone-700 dark:text-stone-300">
                <strong className="text-amber-700 dark:text-amber-400">{t((d) => d.interviewPractice.readyLabel)}</strong> {t((d) => d.interviewPractice.readyText)}
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
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-sm border border-emerald-300 dark:border-emerald-700 p-8 text-center">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-2">
                {t((d) => d.interviewPractice.interviewScore)}
              </p>
              <p className="font-display text-5xl text-emerald-900 dark:text-emerald-100 mb-2">
                {recordingScore}%
              </p>
              <p className="text-emerald-800 dark:text-emerald-200">
                {t((d) => d.interviewPractice.greatEffort)}
              </p>
            </div>

            <div className="grid gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setMode('listening')}
                className="flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-600 text-[#0b0a08] font-bold rounded-sm transition-colors"
              >
                <Play className="w-5 h-5" />
                {t((d) => d.interviewPractice.listenToModelAnswers)}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setMode('select');
                  onComplete?.(recordingScore);
                }}
                className="flex items-center justify-center gap-2 py-3 bg-stone-800 hover:bg-stone-900 dark:bg-white/10 dark:hover:bg-white/15 text-white dark:text-amber-50 font-bold rounded-sm transition-colors"
              >
                {t((d) => d.interviewPractice.tryAnotherQuestion)}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
