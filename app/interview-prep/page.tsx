'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Target, Zap, Trophy } from 'lucide-react';
import { interviewBanks, generalHRQuestions, interviewTopics } from '@/lib/data/interviews';
import InterviewPractice from '@/components/interview/InterviewPractice';

type ViewMode = 'select' | 'practice' | 'topics' | 'airlines';

export default function InterviewPrepPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('select');
  const [selectedBankId, setSelectedBankId] = useState<string | null>(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [practiceScore, setPracticeScore] = useState(0);

  const selectedBank = interviewBanks.find((b) => b.id === selectedBankId);
  const selectedQuestion =
    selectedBank?.questions.find((q) => q.id === selectedQuestionId) ||
    generalHRQuestions.find((q) => q.id === selectedQuestionId);

  const handleQuestionSelect = (questionId: string, bankId?: string) => {
    setSelectedQuestionId(questionId);
    if (bankId) {
      setSelectedBankId(bankId);
    } else {
      setSelectedBankId(null);
    }
    setViewMode('practice');
  };

  const handlePracticeComplete = (score: number) => {
    setPracticeScore(score);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Interview Preparation
            </h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Master cabin crew interviews with 100+ practice questions and expert feedback
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
              className="px-6 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mb-6"
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
                { icon: Target, label: 'Questions', value: '100+' },
                { icon: Zap, label: 'Practice Modes', value: '3' },
                { icon: BookOpen, label: 'Topics', value: interviewTopics.length.toString() },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        {stat.label}
                      </p>
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {stat.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Practice Modes */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Choose Your Practice Mode
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Airlines */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setViewMode('airlines')}
                  className="text-left p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">✈️</div>
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                    Airline-Specific
                  </h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Practice questions from Emirates, Qatar Airways, British Airways, and more
                  </p>
                </motion.button>

                {/* Topics */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setViewMode('topics')}
                  className="text-left p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                    By Topic
                  </h3>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    Learn about specific topics: HR questions, behavioral, technical, situational
                  </p>
                </motion.button>

                {/* General HR */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setSelectedBankId(null);
                    if (generalHRQuestions.length > 0) {
                      handleQuestionSelect(generalHRQuestions[0].id);
                    }
                  }}
                  className="text-left p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-300 dark:border-emerald-700 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                    General HR
                  </h3>
                  <p className="text-sm text-emerald-800 dark:text-emerald-200">
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
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Select an Airline
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {interviewBanks.map((bank) => (
                    <motion.button
                      key={bank.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        setSelectedBankId(bank.id);
                        if (bank.questions.length > 0) {
                          handleQuestionSelect(bank.questions[0].id, bank.id);
                        }
                      }}
                      className="p-6 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-md transition-all text-left"
                    >
                      <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {bank.airline}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
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
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Select a Topic
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {interviewTopics.map((topic) => (
                    <motion.button
                      key={topic}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-2 border-indigo-200 dark:border-indigo-700 hover:shadow-md transition-all text-left"
                    >
                      <p className="font-semibold text-indigo-900 dark:text-indigo-100">
                        {topic}
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
