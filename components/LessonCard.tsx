'use client';

import { motion } from 'framer-motion';
import ProgressRing from './ProgressRing';

interface LessonCardProps {
  id: number;
  title: string;
  icon: string;
  progress: number;
  color: string;
}

export default function LessonCard({ id, title, icon, progress, color }: LessonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: id * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden cursor-pointer group"
    >
      <div className={`h-24 bg-gradient-to-r ${color} relative flex items-center justify-center`}>
        <span className="text-5xl filter drop-shadow-md transition-transform group-hover:scale-110">{icon}</span>
      </div>
      <div className="p-5 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{title}</h3>
          <span className="text-xs font-bold text-indigo-600">+100 XP</span>
        </div>
        <ProgressRing progress={progress} />
      </div>
    </motion.div>
  );
}
