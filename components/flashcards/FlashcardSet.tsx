'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, RotateCw } from 'lucide-react';
import { useAudio } from '@/lib/services/audioService';
import { useTranslation } from '@/lib/i18n/useTranslation';

interface Flashcard {
  id: string;
  front: string;
  back: string;
  audioFront?: string;
  audioBack?: string;
}

interface FlashcardSetProps {
  cards: Flashcard[];
  title?: string;
  onComplete?: () => void;
}

export default function FlashcardSet({ cards, title, onComplete }: FlashcardSetProps) {
  const { t, language } = useTranslation();
  const isRtl = language === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<Set<string>>(new Set());
  const { textToSpeech, playAudio } = useAudio();

  const currentCard = cards[currentIndex];
  const progress = ((masteredCards.size + (isFlipped ? 0.5 : 0)) / cards.length) * 100;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMastered = () => {
    setMasteredCards((prev) => new Set([...prev, currentCard.id]));
    handleNext();
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else if (onComplete) {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handlePlayAudio = async (audioUrl?: string, text?: string) => {
    try {
      if (audioUrl) {
        await playAudio(audioUrl);
      } else if (text) {
        await textToSpeech(text, { voice: 'native-female' });
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setMasteredCards(new Set());
  };

  return (
    <div className="max-w-2xl mx-auto">
      {title && (
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          {title}
        </h2>
      )}

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {t((d) => d.flashcards.progress)}
          </span>
          <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
            {masteredCards.size} / {cards.length} {t((d) => d.flashcards.mastered)}
          </span>
        </div>
        <div className="relative h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 start-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full rtl:bg-gradient-to-l"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: isRtl ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isRtl ? 100 : -100 }}
          transition={{ duration: 0.3 }}
          onClick={handleFlip}
          className="relative h-64 cursor-pointer mb-8"
        >
          <motion.div
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
            style={{ perspective: '1000px' }}
          >
            {/* Front */}
            <motion.div
              animate={{ opacity: isFlipped ? 0 : 1 }}
              className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-white"
            >
              <p className="text-center text-2xl font-bold mb-4">
                {currentCard.front}
              </p>
              {currentCard.audioFront && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayAudio(currentCard.audioFront);
                  }}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                </motion.button>
              )}
              <p className="absolute bottom-4 text-sm text-white/70">
                {t((d) => d.flashcards.clickToReveal)}
              </p>
            </motion.div>

            {/* Back */}
            <motion.div
              animate={{ opacity: isFlipped ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-white"
            >
              <p className="text-center text-xl font-bold mb-4">
                {currentCard.back}
              </p>
              {currentCard.audioBack && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayAudio(currentCard.audioBack);
                  }}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
          {t((d) => d.common.previous)}
        </motion.button>

        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          {currentIndex + 1} / {cards.length}
        </span>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1 && masteredCards.has(currentCard.id)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {t((d) => d.common.next)}
          <ChevronRight className="w-5 h-5 rtl:rotate-180" />
        </motion.button>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleMastered}
          disabled={masteredCards.has(currentCard.id)}
          className="py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white font-bold rounded-lg transition-colors disabled:cursor-not-allowed"
        >
          {masteredCards.has(currentCard.id) ? t((d) => d.flashcards.masteredBadge) : t((d) => d.flashcards.gotIt)}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleReset}
          className="py-3 bg-slate-600 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <RotateCw className="w-4 h-4" />
          {t((d) => d.flashcards.reset)}
        </motion.button>
      </div>

      {/* Completion Message */}
      {masteredCards.size === cards.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-300 dark:border-emerald-700 rounded-xl text-center"
        >
          <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
            {t((d) => d.flashcards.allMasteredTitle)}
          </p>
          <p className="text-emerald-800 dark:text-emerald-200">
            {t((d) => d.flashcards.allMasteredSubtitle)}
          </p>
        </motion.div>
      )}
    </div>
  );
}
