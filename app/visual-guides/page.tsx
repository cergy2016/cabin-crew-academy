'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, ImageIcon, X } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { visualGuides } from '@/lib/data/visualGuides';

export default function VisualGuidesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();
  const active = activeIndex !== null ? visualGuides[activeIndex] : null;

  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + visualGuides.length) % visualGuides.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % visualGuides.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  return (
    <main className="min-h-screen bg-[#faf6ee] dark:bg-[#0b0a08] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <PageHeader />

        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <ImageIcon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            <h1 className="font-display text-4xl text-stone-900 dark:text-amber-50">
              {t((d) => d.visualGuides.title)}
            </h1>
          </div>
          <p className="text-stone-500 dark:text-stone-400 text-lg">
            {t((d) => d.visualGuides.subtitle).replace('{count}', String(visualGuides.length))}
          </p>
        </motion.header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visualGuides.map((guide, idx) => (
            <motion.button
              key={guide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(idx * 0.04, 0.3) }}
              onClick={() => setActiveIndex(idx)}
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
                  {guide.termCount} {t((d) => d.visualGuides.terms)}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveIndex(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="hidden sm:flex absolute start-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
              aria-label={t((d) => d.common.previous)}
            >
              <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="hidden sm:flex absolute end-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
              aria-label={t((d) => d.common.next)}
            >
              <ChevronRight className="w-6 h-6 rtl:rotate-180" />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-[#0b0a08] rounded-sm overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-3 end-3 z-10 p-2 rounded-sm bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label={t((d) => d.common.close)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-3 start-3 z-10 px-3 py-1.5 rounded-sm bg-black/60 text-white text-xs font-medium tracking-wide">
                {active.title} — {activeIndex + 1} {t((d) => d.common.of)} {visualGuides.length}
              </div>

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

              <div className="sm:hidden flex items-center justify-between px-4 py-3 border-t border-white/10 bg-white dark:bg-[#0b0a08]">
                <button
                  onClick={showPrev}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 dark:text-stone-300"
                >
                  <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                  {t((d) => d.common.previous)}
                </button>
                <button
                  onClick={showNext}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 dark:text-stone-300"
                >
                  {t((d) => d.common.next)}
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
