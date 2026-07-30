'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export default function AchievementsPanel() {
  const achievements = useAppStore((s) => s.achievements);
  const unlockedCount = achievements.filter((a) => a.unlockedAt).length;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
        <Award className="w-6 h-6" /> Achievements
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-2">
          {unlockedCount}/{achievements.length} unlocked
        </span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {achievements.map((a) => {
          const unlocked = !!a.unlockedAt;
          return (
            <motion.div
              key={a.id}
              whileHover={{ scale: unlocked ? 1.05 : 1 }}
              className={`flex flex-col items-center text-center p-4 rounded-xl border-2 transition-colors ${
                unlocked
                  ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-50'
              }`}
              title={a.description}
            >
              <span className="text-3xl mb-2">{unlocked ? a.icon : '🔒'}</span>
              <p className="text-xs font-semibold text-slate-900 dark:text-white line-clamp-2">
                {a.name.replace(/\p{Emoji}/gu, '').trim()}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                +{a.xpReward} XP
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
