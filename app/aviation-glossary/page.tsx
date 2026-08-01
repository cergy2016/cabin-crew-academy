'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Search } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { aviationGlossaryTerms } from '@/lib/data/aviationGlossary';

export default function AviationGlossaryPage() {
  const [query, setQuery] = useState('');
  const { t } = useTranslation();

  const filteredTerms = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return aviationGlossaryTerms;
    return aviationGlossaryTerms.filter(
      (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const groups = new Map<string, typeof aviationGlossaryTerms>();
    for (const t of filteredTerms) {
      const letter = t.term.charAt(0).toUpperCase();
      if (!groups.has(letter)) groups.set(letter, []);
      groups.get(letter)!.push(t);
    }
    return Array.from(groups.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredTerms]);

  return (
    <main className="min-h-screen bg-[#faf6ee] dark:bg-[#0b0a08] p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <PageHeader />

        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <Plane className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            <h1 className="font-display text-4xl text-stone-900 dark:text-amber-50">
              {t((d) => d.nav.aviationGlossary)}
            </h1>
          </div>
          <p className="text-stone-500 dark:text-stone-400 text-lg">
            {t((d) => d.referencePages.aviationGlossarySubtitle).replace(
              '{count}',
              String(aviationGlossaryTerms.length)
            )}
          </p>
        </motion.header>

        <div className="relative mb-10">
          <Search className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t((d) => d.referencePages.aviationGlossarySearchPlaceholder)}
            className="w-full ps-12 pe-4 py-3 rounded-sm border border-stone-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-stone-900 dark:text-amber-50 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400"
          />
        </div>

        {filteredTerms.length === 0 && (
          <p className="text-center text-stone-400 dark:text-stone-500 py-16">
            {t((d) => d.referencePages.aviationGlossaryNoResults).replace('{query}', query)}
          </p>
        )}

        <div className="space-y-8">
          {grouped.map(([letter, terms], groupIdx) => (
            <motion.section
              key={letter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(groupIdx * 0.02, 0.3) }}
            >
              <h2 className="font-display text-2xl text-amber-600 dark:text-amber-400 mb-3">
                {letter}
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {terms.map((t) => (
                  <div
                    key={t.term}
                    className="p-4 rounded-sm bg-white dark:bg-white/[0.02] border border-stone-200 dark:border-white/10"
                  >
                    <p className="font-semibold text-stone-900 dark:text-amber-50 mb-1">{t.term}</p>
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      {t.definition}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
