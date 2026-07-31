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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6 font-medium transition-colors"
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
            <BookMarked className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Glossary of Key Expressions
            </h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Every essential phrase from Units 1-9, organized by topic for quick review.
          </p>
        </motion.header>

        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search expressions or topics..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {filteredUnits.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400 py-16">
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
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden"
            >
              <div className="px-6 py-4 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/40 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <span className="text-2xl">{unit.icon}</span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Unit {unit.unitNumber}: {unit.unitTitle}
                </h2>
              </div>

              <div className="p-6 grid md:grid-cols-2 gap-6">
                {unit.categories.map((category) => (
                  <div key={category.category}>
                    <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                      {category.category}
                    </h3>
                    <ul className="space-y-1.5">
                      {category.expressions.map((expression) => (
                        <li
                          key={expression}
                          className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
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
