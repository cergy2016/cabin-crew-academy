'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { languageMeta, type Language } from '@/lib/i18n';
import { useTranslation } from '@/lib/i18n/useTranslation';

const languageOrder: Language[] = ['en', 'fr', 'ar'];

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const language = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);
  const { t } = useTranslation();

  return (
    <div className={`relative shrink-0 ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t((d) => d.languageToggle.ariaLabel)}
        aria-expanded={open}
        className="w-9 h-9 rounded-full border border-amber-600/30 dark:border-amber-400/30 flex items-center justify-center text-stone-500 dark:text-amber-300 hover:border-amber-500 dark:hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-200 transition-colors"
      >
        <Globe className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute end-0 top-11 z-50 w-44 rounded-sm border border-amber-900/15 dark:border-amber-400/20 bg-white dark:bg-[#14120e] shadow-lg overflow-hidden"
            >
              {languageOrder.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => {
                    setLanguage(lang);
                    setOpen(false);
                  }}
                  className="w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-stone-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-amber-400/10 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                >
                  <span>{languageMeta[lang].nativeLabel}</span>
                  {language === lang && <Check className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
