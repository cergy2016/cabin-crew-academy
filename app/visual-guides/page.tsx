'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Expand, ImageIcon, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { visualGuides, type VisualGuide } from '@/lib/data/visualGuides';

export default function VisualGuidesPage() {
  const [active, setActive] = useState<VisualGuide | null>(null);

  return (
    <main className="min-h-screen bg-[#faf6ee] dark:bg-[#0b0a08] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
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
            <ImageIcon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            <h1 className="font-display text-4xl text-stone-900 dark:text-amber-50">
              Visual Guides
            </h1>
          </div>
          <p className="text-stone-500 dark:text-stone-400 text-lg">
            {visualGuides.length} labeled reference posters covering aircraft, cabin, and airport
            vocabulary. Tap any poster to view it full-screen.
          </p>
        </motion.header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visualGuides.map((guide, idx) => (
            <motion.button
              key={guide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(idx * 0.04, 0.3) }}
              onClick={() => setActive(guide)}
              className="group text-left rounded-sm border border-stone-200 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden hover:border-amber-400 dark:hover:border-amber-500/50 transition-colors"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-stone-100 dark:bg-white/[0.03]">
                {guide.type === 'image' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={guide.src}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <iframe
                    src={guide.src}
                    title={guide.title}
                    className="absolute top-0 left-0 w-[400%] h-[400%] scale-[0.25] origin-top-left pointer-events-none"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <Expand className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
                </div>
              </div>
              <div className="p-4">
                <p className="font-display text-lg text-stone-900 dark:text-amber-50 mb-1">
                  {guide.title}
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-2">
                  {guide.description}
                </p>
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-400">
                  {guide.termCount} terms
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-[#0b0a08] rounded-sm overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-sm bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              {active.type === 'image' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full max-h-[90vh] object-contain"
                />
              ) : (
                <iframe src={active.src} title={active.title} className="w-full h-[90vh]" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
