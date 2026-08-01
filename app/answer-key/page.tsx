'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckSquare, Search } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { answerKeyUnits } from '@/lib/data/answerKey';

export default function AnswerKeyPage() {
  const [query, setQuery] = useState('');

  const filteredUnits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return answerKeyUnits;

    return answerKeyUnits
      .map((unit) => {
        const sections = unit.sections
          .map((section) => {
            const sectionMatches = section.title.toLowerCase().includes(q);
            const groups = sectionMatches
              ? section.groups
              : section.groups
                  .map((group) => group.filter((line) => line.toLowerCase().includes(q)))
                  .filter((group) => group.length > 0);
            return groups.length > 0 ? { ...section, groups } : null;
          })
          .filter((s): s is NonNullable<typeof s> => s !== null);
        return sections.length > 0 ? { ...unit, sections } : null;
      })
      .filter((u): u is NonNullable<typeof u> => u !== null);
  }, [query]);

  return (
    <main className="min-h-screen bg-[#faf6ee] dark:bg-[#0b0a08] p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <ThemeToggle />
        </div>

        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <CheckSquare className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            <h1 className="font-display text-4xl text-stone-900 dark:text-amber-50">
              Answer Key
            </h1>
          </div>
          <p className="text-stone-500 dark:text-stone-400 text-lg">
            Full answers for every main-lesson exercise and Self Study section, Units 1-10.
          </p>
        </motion.header>

        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search answers or topics..."
            className="w-full pl-12 pr-4 py-3 rounded-sm border border-stone-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-stone-900 dark:text-amber-50 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400"
          />
        </div>

        {filteredUnits.length === 0 && (
          <p className="text-center text-stone-400 dark:text-stone-500 py-16">
            No answers match &ldquo;{query}&rdquo;.
          </p>
        )}

        <div className="space-y-10">
          {filteredUnits.map((unit, unitIdx) => (
            <motion.section
              key={unit.unitNumber}
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

              <div className="p-6 space-y-6">
                {unit.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-400 mb-3">
                      {section.title}
                    </h3>
                    <div className="space-y-3">
                      {section.groups.map((group, groupIdx) => (
                        <ul
                          key={groupIdx}
                          className="space-y-1 pl-4 border-l-2 border-stone-200 dark:border-white/10"
                        >
                          {group.map((line, lineIdx) => (
                            <li
                              key={lineIdx}
                              className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed"
                            >
                              {line}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
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
