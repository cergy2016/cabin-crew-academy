'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, Briefcase, Target, Zap, Trophy } from 'lucide-react';
import type { InterviewQuestion } from '@/lib/types';
import { interviewBanks, generalHRQuestions, interviewTopics } from '@/lib/data/interviews';
import InterviewPractice from '@/components/interview/InterviewPractice';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { useTranslation } from '@/lib/i18n/useTranslation';

type ViewMode = 'select' | 'practice' | 'topics' | 'airlines';

const allQuestions = [...interviewBanks.flatMap((b) => b.questions), ...generalHRQuestions];
const totalQuestions = allQuestions.length;
const topicQueue = interviewTopics
  .map((t) => allQuestions.find((q) => q.id === t.questionId))
  .filter((q): q is InterviewQuestion => Boolean(q));

export default function InterviewPrepPage() {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<ViewMode>('select');
  const [queue, setQueue] = useState<InterviewQuestion[]>([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [queueLabel, setQueueLabel] = useState('');
  const [practiceScore, setPracticeScore] = useState(0);

  const selectedQuestion = queue[queueIndex];

  const startQueue = (questions: InterviewQuestion[], label: string, startIndex = 0) => {
    setQueue(questions);
    setQueueIndex(startIndex);
    setQueueLabel(label);
    setViewMode('practice');
  };

  const handlePracticeComplete = (score: number) => {
    setPracticeScore(score);
  };

  return (
    <main className="min-h-screen bg-[#faf6ee] dark:bg-[#0b0a08] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {t((d) => d.common.backToDashboard)}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            <h1 className="font-display text-4xl text-stone-900 dark:text-amber-50">
              {t((d) => d.interviewPrep.title)}
            </h1>
          </div>
          <p className="text-stone-500 dark:text-stone-400 text-lg">
            {t((d) => d.interviewPrep.subtitle).replace('{count}', String(totalQuestions))}
          </p>
        </motion.header>

        {/* Main Content */}
        {viewMode === 'practice' && selectedQuestion && (
          <div className="mb-8">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => setViewMode('select')}
                className="px-6 py-2 rounded-sm border border-stone-300 dark:border-white/15 text-stone-600 dark:text-stone-300 font-semibold hover:border-amber-500 dark:hover:border-amber-400 transition-colors"
              >
                {t((d) => d.interviewPrep.backToSelection)}
              </motion.button>

              {queue.length > 1 && (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQueueIndex((i) => Math.max(0, i - 1))}
                    disabled={queueIndex === 0}
                    aria-label={t((d) => d.common.previous)}
                    className="w-9 h-9 rounded-full border border-stone-300 dark:border-white/15 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:border-amber-500 dark:hover:border-amber-400 disabled:opacity-30 disabled:hover:border-stone-300 dark:disabled:hover:border-white/15 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                  </button>
                  <span className="text-sm font-semibold text-stone-600 dark:text-stone-300 tabular-nums">
                    {t((d) => d.interviewPrep.questionCounter)
                      .replace('{label}', queueLabel)
                      .replace('{current}', String(queueIndex + 1))
                      .replace('{total}', String(queue.length))}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQueueIndex((i) => Math.min(queue.length - 1, i + 1))}
                    disabled={queueIndex === queue.length - 1}
                    aria-label={t((d) => d.common.next)}
                    className="w-9 h-9 rounded-full border border-stone-300 dark:border-white/15 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:border-amber-500 dark:hover:border-amber-400 disabled:opacity-30 disabled:hover:border-stone-300 dark:disabled:hover:border-white/15 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>
              )}
            </div>
            <InterviewPractice
              key={selectedQuestion.id}
              question={selectedQuestion}
              onComplete={handlePracticeComplete}
            />
          </div>
        )}

        {viewMode !== 'practice' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: Trophy, label: t((d) => d.interviewPrep.statAirlines), value: interviewBanks.length.toString() },
                { icon: Target, label: t((d) => d.interviewPrep.statQuestions), value: `${totalQuestions}+` },
                { icon: Zap, label: t((d) => d.interviewPrep.statPracticeModes), value: '3' },
                { icon: BookOpen, label: t((d) => d.interviewPrep.statTopics), value: interviewTopics.length.toString() },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -3 }}
                    className="bg-white dark:bg-white/[0.02] rounded-sm p-6 border border-stone-200 dark:border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      <p className="text-[11px] font-semibold tracking-widest uppercase text-stone-500 dark:text-stone-400">
                        {stat.label}
                      </p>
                    </div>
                    <p className="font-display text-2xl text-stone-900 dark:text-amber-50">
                      {stat.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Practice Modes */}
            <div>
              <h2 className="font-display text-2xl text-stone-900 dark:text-amber-50 mb-6">
                {t((d) => d.interviewPrep.choosePracticeMode)}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Airlines */}
                <motion.button
                  whileHover={{ y: -3 }}
                  onClick={() => setViewMode('airlines')}
                  className="text-left p-8 rounded-sm bg-white dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 hover:border-amber-500/60 dark:hover:border-amber-400/50 transition-all"
                >
                  <div className="text-4xl mb-3">✈️</div>
                  <h3 className="font-display text-xl text-stone-900 dark:text-amber-50 mb-2">
                    {t((d) => d.interviewPrep.airlineSpecificTitle)}
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">
                    {t((d) => d.interviewPrep.airlineSpecificDescription).replace(
                      '{airlines}',
                      interviewBanks.map((b) => b.airline).join(', ')
                    )}
                  </p>
                </motion.button>

                {/* Topics */}
                <motion.button
                  whileHover={{ y: -3 }}
                  onClick={() => setViewMode('topics')}
                  className="text-left p-8 rounded-sm bg-white dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 hover:border-amber-500/60 dark:hover:border-amber-400/50 transition-all"
                >
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="font-display text-xl text-stone-900 dark:text-amber-50 mb-2">
                    {t((d) => d.interviewPrep.byTopicTitle)}
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">
                    {t((d) => d.interviewPrep.byTopicDescription)}
                  </p>
                </motion.button>

                {/* General HR */}
                <motion.button
                  whileHover={{ y: -3 }}
                  onClick={() => startQueue(generalHRQuestions, t((d) => d.interviewPrep.generalHRTitle))}
                  className="text-left p-8 rounded-sm bg-white dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 hover:border-amber-500/60 dark:hover:border-amber-400/50 transition-all"
                >
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-display text-xl text-stone-900 dark:text-amber-50 mb-2">
                    {t((d) => d.interviewPrep.generalHRTitle)}
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">
                    {t((d) => d.interviewPrep.generalHRDescription)}
                  </p>
                </motion.button>
              </div>
            </div>

            {/* Airlines Selection */}
            {viewMode === 'airlines' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="font-display text-2xl text-stone-900 dark:text-amber-50 mb-6">
                  {t((d) => d.interviewPrep.selectAirline)}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {interviewBanks.map((bank) => (
                    <motion.button
                      key={bank.id}
                      whileHover={{ y: -3 }}
                      onClick={() => startQueue(bank.questions, bank.airline)}
                      className="p-6 rounded-sm bg-white dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 hover:border-amber-500/60 dark:hover:border-amber-400/50 transition-all text-left"
                    >
                      <p className="font-display text-xl text-stone-900 dark:text-amber-50 mb-1">
                        {bank.airline}
                      </p>
                      {bank.description && (
                        <p className="text-xs text-stone-500 dark:text-stone-400 mb-2">
                          {bank.description}
                        </p>
                      )}
                      <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                        {t((d) => d.interviewPrep.questionsAvailable).replace(
                          '{count}',
                          String(bank.questions.length)
                        )}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Topics Selection */}
            {viewMode === 'topics' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="font-display text-2xl text-stone-900 dark:text-amber-50 mb-6">
                  {t((d) => d.interviewPrep.selectTopic)}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {interviewTopics.map((topic, idx) => (
                    <motion.button
                      key={topic.label}
                      whileHover={{ y: -3 }}
                      onClick={() => startQueue(topicQueue, 'Topics', idx)}
                      className="p-4 rounded-sm bg-white dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 hover:border-amber-500/60 dark:hover:border-amber-400/50 transition-all text-left"
                    >
                      <p className="font-semibold text-stone-800 dark:text-amber-100">
                        {topic.label}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </main>
  );
}
