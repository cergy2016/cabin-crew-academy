'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Zap, BookOpen, Mic, Volume2, Pen } from 'lucide-react';

interface ProgressChartsProps {
  stats: {
    speakingScore: number;
    listeningScore: number;
    grammarScore: number;
    pronunciationScore: number;
    readingScore: number;
    writingScore: number;
  };
}

export default function ProgressCharts({ stats }: ProgressChartsProps) {
  const skills = [
    { label: 'Speaking', score: stats.speakingScore, icon: Mic, color: 'from-red-500 to-pink-500' },
    { label: 'Listening', score: stats.listeningScore, icon: Volume2, color: 'from-blue-500 to-cyan-500' },
    { label: 'Grammar', score: stats.grammarScore, icon: BookOpen, color: 'from-emerald-500 to-teal-500' },
    { label: 'Pronunciation', score: stats.pronunciationScore, icon: Mic, color: 'from-purple-500 to-pink-500' },
    { label: 'Reading', score: stats.readingScore, icon: BookOpen, color: 'from-orange-500 to-red-500' },
    { label: 'Writing', score: stats.writingScore, icon: Pen, color: 'from-indigo-500 to-blue-500' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
        <TrendingUp className="w-6 h-6" /> Skills Progress
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">
                      {skill.label}
                    </p>
                  </div>
                </div>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {skill.score}%
                </p>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.score}%` }}
                  transition={{ duration: 1.5, delay: idx * 0.1, ease: 'easeOut' }}
                />
              </div>

              {/* Score Indicator */}
              <div className="mt-3 text-sm">
                {skill.score >= 90 ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    🌟 Excellent
                  </span>
                ) : skill.score >= 75 ? (
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    ✓ Good
                  </span>
                ) : skill.score >= 60 ? (
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">
                    → Keep improving
                  </span>
                ) : (
                  <span className="text-slate-600 dark:text-slate-400 font-semibold">
                    Practice more
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800 p-6"
      >
        <h3 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">
          💡 Personalized Insights
        </h3>
        <ul className="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
          <li>• Your strongest skill is Grammar. Keep maintaining this excellence!</li>
          <li>• Focus on Speaking practice to reach your 90% goal.</li>
          <li>• Schedule 15-minute daily pronunciation drills for better results.</li>
          <li>• You're on track to reach Level 8 in 2 weeks at your current pace.</li>
        </ul>
      </motion.div>
    </div>
  );
}
