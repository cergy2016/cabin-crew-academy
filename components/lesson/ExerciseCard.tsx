'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, HelpCircle, Lightbulb } from 'lucide-react';
import type { Exercise } from '@/lib/types';
import AudioPlayer from './AudioPlayer';
import VoiceRecorder from './VoiceRecorder';

interface ExerciseCardProps {
  exercise: Exercise;
  number: number;
  onComplete?: (exerciseId: string, firstTry: boolean) => void;
}

export default function ExerciseCard({
  exercise,
  number,
  onComplete,
}: ExerciseCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const isCorrect =
    submitted &&
    (exercise.options
      ? exercise.options.find((opt) => opt.id === selectedAnswer)?.isCorrect
      : exercise.correctAnswer
      ? selectedAnswer?.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase()
      : undefined);

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setSubmitted(true);
    setAttempts((n) => n + 1);
    const correct = exercise.options
      ? exercise.options.find((opt) => opt.id === selectedAnswer)?.isCorrect
      : exercise.correctAnswer
      ? selectedAnswer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase()
      : undefined;
    if (!correct && exercise.hint) setShowHint(true);
    if (correct) onComplete?.(exercise.id, attempts === 0);
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  const adaptiveMessage = isCorrect
    ? attempts > 1
      ? 'Correct! Nice recovery. 💪'
      : 'Correct! Well done! 🎉'
    : attempts >= 2
    ? "Still not quite - check the hint and give it one more try."
    : 'Not quite right. Try again!';

  const getExerciseContent = () => {
    switch (exercise.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {exercise.options?.map((option) => (
              <motion.button
                key={option.id}
                onClick={() => !submitted && setSelectedAnswer(option.id)}
                disabled={submitted}
                whileHover={{ scale: 1.02 }}
                className={`w-full p-4 rounded-sm border text-left transition-all ${
                  selectedAnswer === option.id
                    ? submitted
                      ? option.isCorrect
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                        : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-amber-500 bg-amber-50/60 dark:bg-amber-400/[0.08]'
                    : 'border-stone-300 dark:border-white/15 bg-white dark:bg-white/[0.02] hover:border-amber-400/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === option.id
                        ? submitted
                          ? option.isCorrect
                            ? 'border-emerald-500 bg-emerald-500'
                            : 'border-red-500 bg-red-500'
                          : 'border-amber-500 bg-amber-500'
                        : 'border-stone-400 dark:border-white/20'
                    }`}
                  >
                    {selectedAnswer === option.id && submitted && (
                      <span className="text-white text-sm">
                        {option.isCorrect ? '✓' : '✗'}
                      </span>
                    )}
                  </div>
                  <span className="font-medium text-stone-900 dark:text-amber-50">{option.text}</span>
                  {submitted && selectedAnswer === option.id && (
                    option.isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 ml-auto" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                    )
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        );

      case 'fill-blank':
        return (
          <div className="space-y-4">
            <div className="text-lg text-stone-700 dark:text-stone-300">
              {exercise.question
                .split('_________')
                .map((part, idx, arr) => (
                  <span key={idx}>
                    {part}
                    {idx < arr.length - 1 && (
                      <input
                        type="text"
                        value={selectedAnswer || ''}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        disabled={submitted}
                        placeholder="____"
                        className="mx-2 px-3 py-1 border-b-2 border-amber-500 dark:border-amber-400 bg-transparent text-amber-700 dark:text-amber-400 font-bold w-32 text-center disabled:opacity-60"
                      />
                    )}
                  </span>
                ))}
            </div>
          </div>
        );

      case 'listening-dictation':
        return (
          <div className="space-y-4">
            <textarea
              value={selectedAnswer || ''}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={submitted}
              placeholder="Type your answer..."
              className="w-full p-4 rounded-sm border border-stone-300 dark:border-white/15 bg-white dark:bg-white/[0.02] text-stone-900 dark:text-amber-50 disabled:opacity-60 resize-none focus:outline-none focus:border-amber-500"
              rows={3}
            />
          </div>
        );

      case 'speaking':
        return (
          <div className="space-y-4">
            <p className="text-stone-700 dark:text-stone-300 font-medium">
              {exercise.question}
            </p>
            <VoiceRecorder
              exerciseId={exercise.id}
              expectedText={exercise.question}
              onRecordingComplete={() => {
                setSubmitted(true);
                onComplete?.(exercise.id, true);
              }}
            />
          </div>
        );

      default:
        return (
          <div className="p-4 bg-stone-50 dark:bg-white/[0.03] rounded-sm border border-stone-200 dark:border-white/10">
            <p className="text-stone-700 dark:text-stone-300">
              {exercise.question}
            </p>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-white/[0.02] rounded-sm border border-stone-200 dark:border-white/10 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-stone-50 dark:bg-white/[0.03] px-6 py-4 border-b border-stone-200 dark:border-white/10">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg text-stone-900 dark:text-amber-50">
            Exercise {number}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold bg-amber-500 text-[#0b0a08] px-3 py-1 rounded-full">
              {exercise.points} pts
            </span>
            <span className="text-xs bg-stone-200 dark:bg-white/10 text-stone-700 dark:text-stone-300 px-3 py-1 rounded-full capitalize">
              {exercise.type.replace('-', ' ')}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <p className="text-stone-800 dark:text-amber-50 text-lg font-medium">
          {exercise.question}
        </p>

        {exercise.audio && <AudioPlayer audioUrl={exercise.audio.audioUrl} />}

        {getExerciseContent()}

        {/* Hint */}
        {!submitted && exercise.hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium text-sm"
          >
            <Lightbulb className="w-4 h-4" />
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
        )}
        {showHint && exercise.hint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="p-3 bg-amber-50/60 dark:bg-amber-400/[0.06] border border-amber-500/30 dark:border-amber-400/20 rounded-sm"
          >
            <p className="text-sm text-stone-700 dark:text-amber-100">
              <strong className="text-amber-700 dark:text-amber-400">Hint:</strong> {exercise.hint}
            </p>
          </motion.div>
        )}

        {/* Submit/Feedback */}
        <div className="space-y-4">
          {!submitted ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-stone-200 dark:disabled:bg-white/10 disabled:text-stone-400 text-[#0b0a08] font-bold rounded-sm transition-colors"
            >
              Submit Answer
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-4 rounded-sm border ${
                isCorrect
                  ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-500'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span
                    className={`font-bold ${
                      isCorrect
                        ? 'text-emerald-900 dark:text-emerald-100'
                        : 'text-red-900 dark:text-red-100'
                    }`}
                  >
                    {adaptiveMessage}
                  </span>
                </div>
                {!isCorrect && (
                  <button
                    onClick={handleRetry}
                    className="text-sm font-semibold text-red-700 dark:text-red-300 underline"
                  >
                    Try Again
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {submitted && exercise.explanation && (
            <motion.button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-medium"
            >
              <HelpCircle className="w-4 h-4" />
              {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
            </motion.button>
          )}

          {showExplanation && exercise.explanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-4 bg-stone-50 dark:bg-white/[0.03] border border-stone-200 dark:border-white/10 rounded-sm"
            >
              <p className="text-sm text-stone-700 dark:text-stone-300">
                <strong className="text-amber-700 dark:text-amber-400">Explanation:</strong> {exercise.explanation}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
