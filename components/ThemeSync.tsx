'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/lib/store';

// Keeps the <html> class in sync with the persisted darkMode preference
// whenever it changes (the initial class is set synchronously in a
// blocking <head> script to avoid a flash of the wrong theme).
export default function ThemeSync() {
  const darkMode = useAppStore((state) => state.darkMode);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
    root.classList.toggle('light', !darkMode);
  }, [darkMode]);

  return null;
}
