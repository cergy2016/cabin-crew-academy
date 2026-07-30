'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import type { Exercise } from '@/lib/types';
import AudioPlayer from './AudioPlayer';
import VoiceRecorder from './VoiceRecorder';

interface ExerciseCardProps {
  exercise: Exercise;
  number: number;
  onComplete?: (exerciseId: string) => void;
}

export default function ExerciseCard({
  exercise,
  number,
  onComplete,
}: ExerciseCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setSubmitted(true);
    onComplete?.(exercise.id);
  };

  const isCorrect =
    submitted &&
    (exercise.options
      ? exercise.options.find((opt) => opt.id === selectedAnswer)?.isCorrect
      : exercise.correctAnswer
      ? selectedAnswer?.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase()
      : undefined);

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
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  selectedAnswer === option.id
                    ? submitted
                      ? option.isCorrect
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                        : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 hover:border-slate-400'
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
                          : 'border-indigo-600 bg-indigo-600'
                        : 'border-slate-400 dark:border-slate-600'
                    }`}
                  >
                    {selectedAnswer === option.id && submitted && (
                      <span className="text-white text-sm">
                        {option.isCorrect ? '✓' : '✗'}
                      </span>
                    )}
                  </div>
                  <span className="font-medium">{option.text}</span>
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
            <div className="text-lg text-slate-700 dark:text-slate-300">
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
                        className="mx-2 px-3 py-1 border-b-2 border-indigo-600 dark:border-indigo-400 bg-transparent text-indigo-600 dark:text-indigo-400 font-bold w-32 text-center disabled:opacity-60"
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
              className="w-full p-4 rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white disabled:opacity-60 resize-none"
              rows={3}
            />
          </div>
        );

      case 'speaking':
        return (
          <div className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              {exercise.question}
            </p>
            <VoiceRecorder
              exerciseId={exercise.id}
              expectedText={exercise.question}
              onRecordingComplete={() => {
                setSubmitted(true);
                onComplete?.(exercise.id);
              }}
            />
          </div>
        );

      default:
        return (
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300">
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
      className="bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 px-6 py-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Exercise {number}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold bg-indigo-600 text-white px-3 py-1 rounded-full">
              {exercise.points} pts
            </span>
            <span className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full capitalize">
              {exercise.type.replace('-', ' ')}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <p className="text-slate-700 dark:text-slate-300 text-lg font-medium">
          {exercise.question}
        </p>

        {exercise.audio && <AudioPlayer audioUrl={exercise.audio.audioUrl} />}

        {getExerciseContent()}

        {/* Submit/Feedback */}
        <div className="space-y-4">
          {!submitted ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white font-bold rounded-lg transition-colors"
            >
              Submit Answer
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-4 rounded-lg border-2 ${
                isCorrect
                  ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-500'
              }`}
            >
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-emerald-900 dark:text-emerald-100">
                      Correct! Well done! 🎉
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="font-bold text-red-900 dark:text-red-100">
                      Not quite right. Try again!
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {submitted && exercise.explanation && (
            <motion.button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium"
            >
              <HelpCircle className="w-4 h-4" />
              {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
            </motion.button>
          )}

          {showExplanation && exercise.explanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
            >
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Explanation:</strong> {exercise.explanation}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
