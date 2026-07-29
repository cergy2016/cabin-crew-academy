'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Flame, Trophy, BookOpen, TrendingUp, Target } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import ProgressRing from '@/components/ProgressRing';
import { lessonData } from '@/lib/data/lessons';

export default function DashboardPage() {
  const { stats, user } = useAppStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex items-center justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl">✈️</span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                Cabin Crew Academy
              </h1>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Master aviation English and prepare for your dream airline career
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
          >
            {user?.name?.charAt(0) || 'C'}
          </motion.div>
        </motion.header>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {/* XP */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-xl">
                <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Total XP
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {stats.totalXp.toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Level */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl">
                <Trophy className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Level
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {stats.level}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Streak */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-xl">
                <Flame className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Streak
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {stats.streak}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Hours Studied
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {stats.totalHoursStudied}h
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-6 h-6" /> Your Progress
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Speaking', score: stats.speakingScore },
              { label: 'Listening', score: stats.listeningScore },
              { label: 'Grammar', score: stats.grammarScore },
              { label: 'Vocabulary', score: stats.vocabularyLearned },
            ].map((skill) => (
              <div key={skill.label} className="flex flex-col items-center">
                <ProgressRing progress={skill.score} size={100} />
                <p className="mt-3 font-semibold text-slate-900 dark:text-white">
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lessons Grid */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-6 h-6" /> Your Learning Path
          </h2>

          <div className="space-y-8">
            {lessonData.map((unit, unitIdx) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: unitIdx * 0.1 }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      <span className="mr-2">{unit.icon}</span>
                      {unit.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                          {unit.progress}% Complete
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-indigo-600 to-blue-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${unit.progress}%` }}
                      transition={{ duration: 1, delay: unitIdx * 0.1 }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {unit.lessons.slice(0, 3).map((lesson, lessonIdx) => (
                    <motion.div
                      key={lesson.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (unitIdx * 0.1) + (lessonIdx * 0.05) }}
                      whileHover={{ y: -5 }}
                    >
                      <Link href={`/lessons/${lesson.id}`}>
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all cursor-pointer overflow-hidden group h-full"
                        >
                          <div
                            className={`h-20 bg-gradient-to-r ${lesson.icaoLevel === 4
                              ? 'from-blue-500 to-indigo-500'
                              : lesson.icaoLevel === 5
                                ? 'from-purple-500 to-pink-500'
                                : 'from-orange-500 to-red-500'
                              } relative flex items-center justify-center`}
                          >
                            <span className="text-4xl group-hover:scale-110 transition-transform">
                              {lesson.icon}
                            </span>
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-slate-900 dark:text-white line-clamp-2">
                              {lesson.title}
                            </h4>
                            <div className="flex items-center justify-between mt-3">
                              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                                +{lesson.xpReward} XP
                              </span>
                              <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-700 dark:text-slate-300">
                                {lesson.estimatedDurationMinutes}m
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}

                  {unit.lessons.length > 3 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 h-full"
                    >
                      <p className="text-center text-slate-600 dark:text-slate-400 font-medium">
                        +{unit.lessons.length - 3} more lessons
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Ready for your next lesson?</h3>
          <p className="mb-6 opacity-90">
            Start with Pre-Flight Briefing or jump into any unit to begin learning
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:shadow-lg transition-shadow"
          >
            Start Learning
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}
