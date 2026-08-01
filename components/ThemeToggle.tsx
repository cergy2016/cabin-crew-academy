'use client';

import { Sun, Moon } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const darkMode = useAppStore((s) => s.darkMode);
  const toggleDarkMode = useAppStore((s) => s.toggleDarkMode);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to day mode' : 'Switch to night mode'}
      className={`w-9 h-9 shrink-0 rounded-full border border-amber-600/30 dark:border-amber-400/30 flex items-center justify-center text-stone-500 dark:text-amber-300 hover:border-amber-500 dark:hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-200 transition-colors ${className}`}
    >
      {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
