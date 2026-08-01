'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { getDirection } from '@/lib/i18n';

// Keeps <html lang>/<html dir> in sync with the persisted language preference
// whenever it changes (the initial values are set synchronously in a
// blocking <head> script to avoid a flash of the wrong direction).
export default function LanguageSync() {
  const language = useAppStore((state) => state.language);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = getDirection(language);
  }, [language]);

  return null;
}
