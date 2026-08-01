'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Briefcase, Target, Zap, Trophy } from 'lucide-react';
import { interviewBanks, generalHRQuestions, interviewTopics } from '@/lib/data/interviews';
import InterviewPractice from '@/components/interview/InterviewPractice';
import ThemeToggle from '@/components/ThemeToggle';

type ViewMode = 'select' | 'practice' | 'topics' | 'airlines';

const allQuestions = [...interviewBanks.flatMap((b) => b.questions), ...generalHRQuestions];
const totalQuestions = allQuestions.length;

export default function InterviewPrepPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('select');
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [practiceScore, setPracticeScore] = useState(0);

  const selectedQuestion = allQuestions.find((q) => q.id === selectedQuestionId);

  const handleQuestionSelect = (questionId: string) => {
    setSelectedQuestionId(questionId);
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
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <ThemeToggle />
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
              Interview Preparation
            </h1>
          </div>
          <p className="text-stone-500 dark:text-stone-400 text-lg">
            Master cabin crew interviews with {totalQuestions}+ practice questions and expert feedback
          </p>
        </motion.header>

        {/* Main Content */}
        {viewMode === 'practice' && selectedQuestion && (
          <div className="mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                setViewMode('select');
                setSelectedQuestionId(null);
              }}
              className="px-6 py-2 rounded-sm border border-stone-300 dark:border-white/15 text-stone-600 dark:text-stone-300 font-semibold hover:border-amber-500 dark:hover:border-amber-400 transition-colors mb-6"
            >
              ← Back to Selection
            </motion.button>
            <InterviewPractice
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
                { icon: Trophy, label: 'Airlines', value: interviewBanks.length.toString() },
                { icon: Target, label: 'Questions', value: `${totalQuestions}+` },
                { icon: Zap, label: 'Practice Modes', value: '3' },
                { icon: BookOpen, label: 'Topics', value: interviewTopics.length.toString() },
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
                Choose Your Practice Mode
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
                    Airline-Specific
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">
                    Practice questions from {interviewBanks.map((b) => b.airline).join(', ')}
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
                    By Topic
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">
                    Learn about specific topics: HR questions, behavioral, technical, situational
                  </p>
                </motion.button>

                {/* General HR */}
                <motion.button
                  whileHover={{ y: -3 }}
                  onClick={() => {
                    if (generalHRQuestions.length > 0) {
                      handleQuestionSelect(generalHRQuestions[0].id);
                    }
                  }}
                  className="text-left p-8 rounded-sm bg-white dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 hover:border-amber-500/60 dark:hover:border-amber-400/50 transition-all"
                >
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-display text-xl text-stone-900 dark:text-amber-50 mb-2">
                    General HR
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">
                    Common interview questions used by most airlines
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
                  Select an Airline
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {interviewBanks.map((bank) => (
                    <motion.button
                      key={bank.id}
                      whileHover={{ y: -3 }}
                      onClick={() => {
                        if (bank.questions.length > 0) {
                          handleQuestionSelect(bank.questions[0].id);
                        }
                      }}
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
                        {bank.questions.length} questions available
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
                  Select a Topic
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {interviewTopics.map((topic) => (
                    <motion.button
                      key={topic.label}
                      whileHover={{ y: -3 }}
                      onClick={() => handleQuestionSelect(topic.questionId)}
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
