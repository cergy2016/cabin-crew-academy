'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Flame, Trophy, TrendingUp, BookMarked, CheckSquare, ArrowRight, PlayCircle, Sun, Moon } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import ProgressRing from '@/components/ProgressRing';
import AchievementsPanel from '@/components/AchievementsPanel';
import UnitIllustration from '@/components/UnitIllustration';
import { iCAOUnits } from '@/lib/data/icao-curriculum';

export default function DashboardPage() {
  const { stats, user, lessonProgress, darkMode, toggleDarkMode } = useAppStore();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Find the first lesson that isn't complete, to feature as "Continue Learning"
  const nextLesson = iCAOUnits
    .flatMap((unit) => unit.lessons.map((lesson) => ({ unit, lesson })))
    .find(({ lesson }) => (lessonProgress.get(lesson.id)?.progress ?? 0) < 100) ?? {
    unit: iCAOUnits[0],
    lesson: iCAOUnits[0]?.lessons[0],
  };
  const nextUnitNumber = parseInt(nextLesson.unit?.id?.split('-')[1] ?? '1', 10);

  return (
    <main className="min-h-screen bg-[#faf6ee] dark:bg-[#0b0a08] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-10 pb-5 border-b border-amber-900/10 dark:border-amber-400/15"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border border-amber-600/40 dark:border-amber-400/40 flex items-center justify-center">
              <span className="text-sm">✈️</span>
            </div>
            <span className="font-display text-lg text-stone-900 dark:text-amber-50 tracking-wide">
              Cabin Crew Academy
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/glossary"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              <BookMarked className="w-3.5 h-3.5" />
              Glossary
            </Link>
            <Link
              href="/answer-key"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              <CheckSquare className="w-3.5 h-3.5" />
              Answer Key
            </Link>
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to day mode' : 'Switch to night mode'}
              className="w-9 h-9 rounded-full border border-amber-600/30 dark:border-amber-400/30 flex items-center justify-center text-stone-500 dark:text-amber-300 hover:border-amber-500 dark:hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-200 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-[#0b0a08] text-sm font-bold shadow-[0_0_0_1px_rgba(217,180,90,0.4)]">
              {user?.name?.charAt(0) || 'C'}
            </div>
          </div>
        </motion.div>

        {/* Hero title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400 mb-3">
            ICAO Level 4-6 &middot; Cabin Crew English
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-stone-900 dark:text-amber-50 leading-[1.1]">
            Master aviation English,
            <br />
            <span className="italic text-amber-700 dark:text-amber-400">fluently.</span>
          </h1>
          <p className="mt-5 text-lg text-stone-500 dark:text-stone-400 max-w-xl font-light">
            Complete ICAO-aligned training, crafted for your dream airline career.
          </p>
        </motion.div>

        {/* Boarding-pass style status strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 rounded-none md:rounded-sm border border-amber-900/15 dark:border-amber-400/20 bg-white dark:bg-white/[0.02] shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-dashed divide-amber-900/15 dark:divide-amber-400/15">
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-1.5 text-stone-400 dark:text-stone-500 mb-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">XP</span>
              </div>
              <p className="font-display text-3xl text-amber-600 dark:text-amber-400 tabular-nums">
                {stats.totalXp.toLocaleString()}
              </p>
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-1.5 text-stone-400 dark:text-stone-500 mb-1.5">
                <Trophy className="w-3.5 h-3.5" />
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Level</span>
              </div>
              <p className="font-display text-3xl text-stone-900 dark:text-amber-50 tabular-nums">
                {stats.level}
              </p>
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-1.5 text-stone-400 dark:text-stone-500 mb-1.5">
                <Flame className="w-3.5 h-3.5" />
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Streak</span>
              </div>
              <p className="font-display text-3xl text-stone-900 dark:text-amber-50 tabular-nums">
                {stats.streak}<span className="text-sm font-sans text-stone-400 ml-1">days</span>
              </p>
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-1.5 text-stone-400 dark:text-stone-500 mb-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Studied</span>
              </div>
              <p className="font-display text-3xl text-stone-900 dark:text-amber-50 tabular-nums">
                {stats.totalHoursStudied}<span className="text-sm font-sans text-stone-400 ml-1">h</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Continue Learning - featured card */}
        {nextLesson.lesson && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-14"
          >
            <Link href={`/lessons/${nextLesson.lesson.id}`}>
              <div className="group relative overflow-hidden rounded-sm bg-[#14120e] border border-amber-400/25 p-8 md:p-10 cursor-pointer">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,180,90,0.16),transparent_55%)]" />
                <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
                <div className="absolute -right-4 -bottom-4 w-40 h-40 text-amber-400/10 pointer-events-none">
                  <UnitIllustration unit={nextUnitNumber} />
                </div>
                <div className="relative flex items-center justify-between gap-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-3">
                      <PlayCircle className="w-3.5 h-3.5" />
                      Continue Learning
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl text-amber-50 mb-2">
                      {nextLesson.lesson.title}
                    </h2>
                    <p className="text-stone-400 text-sm">
                      {nextLesson.unit.title} &middot; {nextLesson.lesson.estimatedDurationMinutes} min &middot; +{nextLesson.lesson.xpReward} XP
                    </p>
                  </div>
                  <div className="shrink-0 w-14 h-14 rounded-full border border-amber-400/40 flex items-center justify-center group-hover:bg-amber-400 transition-all">
                    <ArrowRight className="w-5 h-5 text-amber-300 group-hover:text-[#14120e] transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Skills Overview */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-14"
        >
          <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-stone-400 dark:text-stone-500 mb-6">
            Your Progress
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Speaking', score: stats.speakingScore },
              { label: 'Listening', score: stats.listeningScore },
              { label: 'Grammar', score: stats.grammarScore },
              { label: 'Vocabulary', score: stats.vocabularyLearned },
            ].map((skill) => (
              <div key={skill.label} className="flex flex-col items-center">
                <ProgressRing progress={skill.score} size={92} />
                <p className="mt-3 text-sm font-medium text-stone-600 dark:text-stone-300">
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
          <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-stone-400 dark:text-stone-500 mb-6">
            Your Learning Path
          </h2>

          <div className="relative">
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-amber-900/15 dark:bg-amber-400/15 hidden sm:block" />
            <div className="space-y-12">
              {iCAOUnits.map((unit, unitIdx) => (
                <motion.div
                  key={unit.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: unitIdx * 0.07 }}
                  className="relative sm:pl-14"
                >
                  <div className="absolute left-0 top-0 hidden sm:flex w-10 h-10 rounded-full bg-[#faf6ee] dark:bg-[#0b0a08] border border-amber-600/40 dark:border-amber-400/40 items-center justify-center text-xs font-display text-amber-700 dark:text-amber-400 tabular-nums">
                    {String(unitIdx + 1).padStart(2, '0')}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2.5">
                      <h3 className="font-display text-xl text-stone-900 dark:text-amber-50 flex items-center gap-3">
                        <span className="w-7 h-7 shrink-0 text-amber-600 dark:text-amber-400">
                          <UnitIllustration unit={unitIdx + 1} />
                        </span>
                        {unit.title}
                      </h3>
                      <p className="text-sm font-medium text-stone-400 dark:text-stone-500 tabular-nums">
                        {unit.progress}%
                      </p>
                    </div>
                    <div className="w-full bg-stone-200/60 dark:bg-white/[0.06] rounded-full h-[3px] overflow-hidden">
                      <motion.div
                        className="bg-amber-500 h-[3px] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${unit.progress}%` }}
                        transition={{ duration: 1, delay: unitIdx * 0.07 }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {unit.lessons.slice(0, 3).map((lesson, lessonIdx) => (
                      <motion.div
                        key={lesson.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: unitIdx * 0.07 + lessonIdx * 0.04 }}
                      >
                        <Link href={`/lessons/${lesson.id}`}>
                          <div className="group flex items-start gap-4 p-4 rounded-sm border border-stone-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-amber-500/50 dark:hover:border-amber-400/40 hover:shadow-[0_4px_20px_rgba(180,140,50,0.08)] transition-all cursor-pointer h-full">
                            <div className="shrink-0 w-11 h-11 rounded-full bg-stone-50 dark:bg-white/[0.04] border border-stone-200 dark:border-white/5 flex items-center justify-center text-xl group-hover:border-amber-400/50 transition-colors">
                              {lesson.icon}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-semibold text-sm text-stone-900 dark:text-amber-50 line-clamp-2 leading-snug mb-1.5">
                                {lesson.title}
                              </h4>
                              <div className="flex items-center gap-2.5 text-xs text-stone-400 dark:text-stone-500">
                                <span className="font-semibold text-amber-600 dark:text-amber-400">+{lesson.xpReward} XP</span>
                                <span>&middot;</span>
                                <span>{lesson.estimatedDurationMinutes}m</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}

                    {unit.lessons.length > 3 && (
                      <div className="flex items-center justify-center rounded-sm border border-dashed border-stone-200 dark:border-white/10 h-full min-h-[5rem]">
                        <p className="text-center text-sm text-stone-400 dark:text-stone-500 font-medium">
                          +{unit.lessons.length - 3} more
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
