'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '@/lib/i18n/useTranslation';

// Shared header for reference/utility pages (Glossary, Answer Key,
// Aviation Glossary, Visual Guides): a back link plus the language and
// theme toggles.
export default function PageHeader() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between mb-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
        {t((d) => d.common.backToDashboard)}
      </Link>
      <div className="flex items-center gap-3">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}
