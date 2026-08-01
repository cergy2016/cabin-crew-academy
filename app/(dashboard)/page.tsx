'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Flame, Trophy, BookOpen, TrendingUp, BookMarked, CheckSquare } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import ProgressRing from '@/components/ProgressRing';
import AchievementsPanel from '@/components/AchievementsPanel';
import { iCAOUnits } from '@/lib/data/icao-curriculum';

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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0a0e1a] dark:via-[#0d1226] dark:to-[#0a0e1a] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 shadow-sm"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-amber-300/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <span className="text-xl">✈️</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Cabin Crew Academy
                </h1>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Master aviation English and prepare for your dream airline career
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-4">
                <Link
                  href="/glossary"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-amber-300 transition-colors"
                >
                  <BookMarked className="w-4 h-4" />
                  Glossary of Key Expressions
                </Link>
                <Link
                  href="/answer-key"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-amber-300 transition-colors"
                >
                  <CheckSquare className="w-4 h-4" />
                  Answer Key
                </Link>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-amber-400 p-[2px] shadow-lg shadow-indigo-500/20"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-[#0d1226] flex items-center justify-center text-indigo-600 dark:text-amber-300 text-xl font-bold">
                {user?.name?.charAt(0) || 'C'}
              </div>
            </motion.div>
          </div>
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
            whileHover={{ y: -3 }}
            className="group relative bg-white dark:bg-white/[0.03] p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 hover:shadow-lg hover:shadow-amber-500/5 transition-all overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-500/10 dark:to-orange-500/10 rounded-xl">
                <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase text-[11px]">
                  Total XP
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stats.totalXp.toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Level */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -3 }}
            className="group relative bg-white dark:bg-white/[0.03] p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 hover:shadow-lg hover:shadow-emerald-500/5 transition-all overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-500/10 dark:to-teal-500/10 rounded-xl">
                <Trophy className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase text-[11px]">
                  Level
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stats.level}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Streak */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -3 }}
            className="group relative bg-white dark:bg-white/[0.03] p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 hover:shadow-lg hover:shadow-rose-500/5 transition-all overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-rose-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-rose-100 to-red-100 dark:from-rose-500/10 dark:to-red-500/10 rounded-xl">
                <Flame className="w-6 h-6 text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase text-[11px]">
                  Streak
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stats.streak}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -3 }}
            className="group relative bg-white dark:bg-white/[0.03] p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 hover:shadow-lg hover:shadow-indigo-500/5 transition-all overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-500/10 dark:to-blue-500/10 rounded-xl">
                <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase text-[11px]">
                  Hours Studied
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
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
          className="bg-white dark:bg-white/[0.03] rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-indigo-500" /> Your Progress
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

        <AchievementsPanel />

        {/* Lessons Grid */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-500" /> Your Learning Path
          </h2>

          <div className="space-y-10">
            {iCAOUnits.map((unit, unitIdx) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: unitIdx * 0.1 }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-3">
                      <span className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-white/[0.06] dark:to-white/[0.02] border border-slate-200/70 dark:border-white/10 flex items-center justify-center text-lg">
                        {unit.icon}
                      </span>
                      {unit.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 tabular-nums">
                      {unit.progress}% complete
                    </p>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-white/[0.06] rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-400 h-1.5 rounded-full"
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
                      whileHover={{ y: -4 }}
                    >
                      <Link href={`/lessons/${lesson.id}`}>
                        <div className="bg-white dark:bg-white/[0.03] rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all cursor-pointer overflow-hidden group h-full"
                        >
                          <div
                            className={`h-24 bg-gradient-to-br ${lesson.icaoLevel === 4
                              ? 'from-blue-500 to-indigo-600'
                              : lesson.icaoLevel === 5
                                ? 'from-violet-500 to-fuchsia-600'
                                : 'from-amber-500 to-orange-600'
                              } relative flex items-center justify-center overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
                            <span className="text-4xl relative group-hover:scale-110 transition-transform drop-shadow-sm">
                              {lesson.icon}
                            </span>
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                              {lesson.title}
                            </h4>
                            <div className="flex items-center justify-between mt-3">
                              <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                                <Zap className="w-3.5 h-3.5" />
                                {lesson.xpReward} XP
                              </span>
                              <span className="text-xs bg-slate-100 dark:bg-white/[0.06] px-2 py-1 rounded-md text-slate-600 dark:text-slate-300 font-medium">
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
                      className="flex items-center justify-center bg-slate-50/50 dark:bg-white/[0.02] rounded-2xl border-2 border-dashed border-slate-200 dark:border-white/10 h-full min-h-[9rem]"
                    >
                      <p className="text-center text-slate-500 dark:text-slate-400 font-medium">
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
          className="mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 shadow-xl shadow-indigo-500/20 p-8 md:p-10 text-white text-center"
        >
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">Ready for your next lesson?</h3>
            <p className="mb-7 text-indigo-100">
              Start with Pre-Flight Briefing or jump into any unit to begin learning
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              Start Learning
            </motion.button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
