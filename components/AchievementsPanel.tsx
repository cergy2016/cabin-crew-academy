'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export default function AchievementsPanel() {
  const achievements = useAppStore((s) => s.achievements);
  const unlockedCount = achievements.filter((a) => a.unlockedAt).length;

  return (
    <div className="mb-14">
      <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-stone-400 dark:text-stone-500 mb-6 flex items-center gap-2">
        <Award className="w-3.5 h-3.5" /> Achievements
        <span className="font-normal normal-case tracking-normal text-stone-400 dark:text-stone-600">
          {unlockedCount}/{achievements.length} unlocked
        </span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {achievements.map((a) => {
          const unlocked = !!a.unlockedAt;
          return (
            <motion.div
              key={a.id}
              whileHover={{ scale: unlocked ? 1.03 : 1 }}
              className={`flex flex-col items-center text-center p-4 rounded-sm border transition-colors ${
                unlocked
                  ? 'bg-amber-50/60 dark:bg-amber-400/[0.06] border-amber-500/40 dark:border-amber-400/30'
                  : 'bg-white dark:bg-white/[0.02] border-stone-200 dark:border-white/10 opacity-50'
              }`}
              title={a.description}
            >
              <span className="text-3xl mb-2">{unlocked ? a.icon : '🔒'}</span>
              <p className="text-xs font-semibold text-stone-900 dark:text-amber-50 line-clamp-2">
                {a.name.replace(/\p{Emoji}/gu, '').trim()}
              </p>
              <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-1 font-medium">
                +{a.xpReward} XP
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
