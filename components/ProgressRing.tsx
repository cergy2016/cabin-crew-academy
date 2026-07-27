'use client';

import { motion } from 'framer-motion';

interface ProgressRingProps {
  progress: number;
  size?: number;
}

export default function ProgressRing({ progress, size = 60 }: ProgressRingProps) {
  const radius = (size / 2) - 6;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(148, 163, 184, 0.2)" strokeWidth="6" fill="none" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={radius} stroke="url(#grad)" strokeWidth="6" fill="none"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="text-xs fill-slate-700 dark:fill-white font-semibold transform rotate-90 origin-center">
        {Math.round(progress)}%
      </text>
    </svg>
  );
}
