'use client';

import { motion } from 'framer-motion';
import { Zap, Flame, Trophy, BookOpen } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import LessonCard from '@/components/LessonCard';

const units = [
  { id: 1, title: 'Pre-Flight Briefing', icon: '✈️', progress: 100, color: 'from-blue-500 to-indigo-500' },
  { id: 2, title: 'Welcome On Board', icon: '🛫', progress: 82, color: 'from-emerald-500 to-teal-500' },
  { id: 3, title: 'After Take-off', icon: '☁️', progress: 64, color: 'from-sky-500 to-cyan-500' },
  { id: 4, title: 'Food and Drinks', icon: '🍽️', progress: 0, color: 'from-amber-500 to-orange-500' },
];

export default function Home() {
  const { xp, level, streak } = useAppStore();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            <span className="font-extrabold text-xl text-slate-900 dark:text-white">Cabin Crew English</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full text-sm font-bold border border-orange-100">
              <Flame className="w-4 h-4" /> {streak} Day Streak
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white shadow-sm flex items-center justify-center font-bold text-indigo-600">JD</div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4"
          >
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
              <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white">{xp.toLocaleString()}</p>
              <p className="text-xs text-slate-500 font-medium">Total XP</p>
            </div>
          </motion.div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
              <Trophy className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white">Level {level}</p>
              <p className="text-xs text-slate-500 font-medium">Captain Rank</p>
            </div>
          </div>
        </div>

        {/* Continue Learning Grid */}
        <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5" /> Continue Learning
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {units.map((unit) => (
            <LessonCard key={unit.id} {...unit} />
          ))}
        </div>

      </div>
    </main>
  );
}
