'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckSquare, Search } from 'lucide-react';
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
            <CheckSquare className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Answer Key
            </h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Full answers for every main-lesson exercise and Self Study section, Units 1-10.
          </p>
        </motion.header>

        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search answers or topics..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {filteredUnits.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400 py-16">
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
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden"
            >
              <div className="px-6 py-4 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/40 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <span className="text-2xl">{unit.icon}</span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Unit {unit.unitNumber}: {unit.unitTitle}
                </h2>
              </div>

              <div className="p-6 space-y-6">
                {unit.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                      {section.title}
                    </h3>
                    <div className="space-y-3">
                      {section.groups.map((group, groupIdx) => (
                        <ul
                          key={groupIdx}
                          className="space-y-1 pl-4 border-l-2 border-slate-100 dark:border-slate-800"
                        >
                          {group.map((line, lineIdx) => (
                            <li
                              key={lineIdx}
                              className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
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
