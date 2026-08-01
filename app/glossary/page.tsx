'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookMarked, Search } from 'lucide-react';
import { glossaryUnits } from '@/lib/data/glossary';

export default function GlossaryPage() {
  const [query, setQuery] = useState('');

  const filteredUnits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossaryUnits;

    return glossaryUnits
      .map((unit) => {
        const categories = unit.categories
          .map((category) => {
            const categoryMatches = category.category.toLowerCase().includes(q);
            const expressions = categoryMatches
              ? category.expressions
              : category.expressions.filter((e) => e.toLowerCase().includes(q));
            return expressions.length > 0 ? { ...category, expressions } : null;
          })
          .filter((c): c is NonNullable<typeof c> => c !== null);
        return categories.length > 0 ? { ...unit, categories } : null;
      })
      .filter((u): u is NonNullable<typeof u> => u !== null);
  }, [query]);

  return (
    <main className="min-h-screen bg-[#faf6ee] dark:bg-[#0b0a08] p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 mb-6 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <BookMarked className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            <h1 className="font-display text-4xl text-stone-900 dark:text-amber-50">
              Glossary of Key Expressions
            </h1>
          </div>
          <p className="text-stone-500 dark:text-stone-400 text-lg">
            Every essential phrase from Units 1-9, organized by topic for quick review.
          </p>
        </motion.header>

        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search expressions or topics..."
            className="w-full pl-12 pr-4 py-3 rounded-sm border border-stone-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-stone-900 dark:text-amber-50 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400"
          />
        </div>

        {filteredUnits.length === 0 && (
          <p className="text-center text-stone-400 dark:text-stone-500 py-16">
            No expressions match &ldquo;{query}&rdquo;.
          </p>
        )}

        <div className="space-y-10">
          {filteredUnits.map((unit, unitIdx) => (
            <motion.section
              key={unit.unitId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: unitIdx * 0.05 }}
              className="bg-white dark:bg-white/[0.02] rounded-sm border border-stone-200 dark:border-white/10 overflow-hidden"
            >
              <div className="px-6 py-4 bg-stone-50 dark:bg-white/[0.03] border-b border-stone-200 dark:border-white/10 flex items-center gap-3">
                <span className="text-2xl">{unit.icon}</span>
                <h2 className="font-display text-xl text-stone-900 dark:text-amber-50">
                  Unit {unit.unitNumber}: {unit.unitTitle}
                </h2>
              </div>

              <div className="p-6 grid md:grid-cols-2 gap-6">
                {unit.categories.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-400 mb-2">
                      {category.category}
                    </h3>
                    <ul className="space-y-1.5">
                      {category.expressions.map((expression) => (
                        <li
                          key={expression}
                          className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed"
                        >
                          {expression}
                        </li>
                      ))}
                    </ul>
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
