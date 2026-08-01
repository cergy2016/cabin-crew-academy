'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Clock, CheckCircle2, Trophy, ArrowLeft, PlayCircle, StopCircle } from 'lucide-react';
import type { Lesson } from '@/lib/types';
import { useAppStore } from '@/lib/store';
import { getAudioUrl } from '@/lib/config/audioUrls';
import AudioPlayer from './AudioPlayer';
import ExerciseCard from './ExerciseCard';

interface LessonViewerProps {
  lesson: Lesson;
  onComplete?: () => void;
}

type LessonSection = 'objectives' | 'scenario' | 'theory' | 'phraseology' | 'vocabulary' | 'exercises' | 'quiz' | 'logbook';

export default function LessonViewer({ lesson, onComplete }: LessonViewerProps) {
  const [activeSection, setActiveSection] = useState<LessonSection>('objectives');
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());
  const [quizFirstTry, setQuizFirstTry] = useState<Map<string, boolean>>(new Map());

  const addXp = useAppStore((s) => s.addXp);
  const completeLesson = useAppStore((s) => s.completeLesson);
  const newlyUnlocked = useAppStore((s) => s.newlyUnlocked);
  const clearNewlyUnlocked = useAppStore((s) => s.clearNewlyUnlocked);
  const logBookEntries = useAppStore((s) => s.logBookEntries);
  const setLogBookEntry = useAppStore((s) => s.setLogBookEntry);
  const hasFinalizedRef = useRef(false);
  const [logBookDraft, setLogBookDraft] = useState(logBookEntries[lesson.id] || '');
  const [logBookSaved, setLogBookSaved] = useState(false);

  // "Listen to full conversation" - plays all scenario audio segments in order
  const [playAllIndex, setPlayAllIndex] = useState<number | null>(null);
  const playAllAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = playAllAudioRef.current;
    if (!audio || playAllIndex === null) return;
    const segment = lesson.scenario.audioSegments[playAllIndex];
    if (!segment) {
      setPlayAllIndex(null);
      return;
    }
    audio.src = getAudioUrl(segment.audioUrl);
    audio.play();
    const handleEnded = () => {
      setPlayAllIndex((idx) =>
        idx !== null && idx + 1 < lesson.scenario.audioSegments.length ? idx + 1 : null
      );
    };
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [playAllIndex, lesson.scenario.audioSegments]);

  const handlePlayAll = () => setPlayAllIndex(0);
  const handleStopAll = () => {
    playAllAudioRef.current?.pause();
    setPlayAllIndex(null);
  };

  const allExercisesDone = lesson.exercises.every((e) => completedExercises.has(e.id));
  const allQuizDone = lesson.quiz.exercises.every((e) => completedExercises.has(e.id));
  const lessonFullyComplete = allExercisesDone && allQuizDone;

  const handleExerciseComplete = (exerciseId: string, firstTry: boolean, points: number, isQuiz: boolean) => {
    setCompletedExercises((prev) => {
      if (prev.has(exerciseId)) return prev;
      addXp(points);
      const next = new Set(prev);
      next.add(exerciseId);
      return next;
    });
    if (isQuiz) {
      setQuizFirstTry((prev) => new Map(prev).set(exerciseId, firstTry));
    }
  };

  useEffect(() => {
    if (lessonFullyComplete && !hasFinalizedRef.current) {
      hasFinalizedRef.current = true;
      const correctFirstTry = lesson.quiz.exercises.filter((e) => quizFirstTry.get(e.id)).length;
      const quizScorePercent = Math.round((correctFirstTry / lesson.quiz.exercises.length) * 100);
      completeLesson(lesson, quizScorePercent);
      onComplete?.();
    }
  }, [lessonFullyComplete, lesson, quizFirstTry, completeLesson, onComplete]);

  const sectionTabs: { id: LessonSection; label: string }[] = [
    { id: 'objectives', label: 'Objectives' },
    { id: 'scenario', label: 'Scenario' },
    { id: 'theory', label: 'Theory' },
    { id: 'phraseology', label: 'Phraseology' },
    { id: 'vocabulary', label: 'Vocabulary' },
    { id: 'exercises', label: 'Exercises' },
    { id: 'quiz', label: 'Quiz' },
    ...(lesson.logBookPrompts && lesson.logBookPrompts.length > 0
      ? [{ id: 'logbook' as LessonSection, label: 'Log Book' }]
      : []),
  ];

  const cardClass = 'bg-white dark:bg-white/[0.02] rounded-sm border border-stone-200 dark:border-white/10 p-8';
  const infoBoxClass = 'p-4 rounded-sm bg-stone-50 dark:bg-white/[0.03] border border-stone-200 dark:border-white/10';

  return (
    <div className="min-h-screen bg-[#faf6ee] dark:bg-[#0b0a08]">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-amber-900/10 dark:border-amber-400/15 bg-[#faf6ee]/90 dark:bg-[#0b0a08]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{lesson.icon}</span>
              <div>
                <h1 className="font-display text-3xl text-stone-900 dark:text-amber-50">
                  {lesson.title}
                </h1>
                <p className="text-stone-500 dark:text-stone-400 text-sm">
                  ICAO Level {lesson.icaoLevel} &middot; {lesson.difficulty}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold">
                  <Zap className="w-4 h-4" />
                  {lesson.xpReward} XP
                </div>
                <div className="flex items-center gap-1 text-stone-500 dark:text-stone-400 text-sm">
                  <Clock className="w-4 h-4" />
                  {lesson.estimatedDurationMinutes} min
                </div>
              </div>
            </div>
          </div>

          {/* Section Tabs */}
          <div className="flex gap-6 overflow-x-auto border-b border-stone-200 dark:border-white/10">
            {sectionTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`relative pb-3 text-xs font-semibold tracking-[0.15em] uppercase whitespace-nowrap transition-colors ${
                  activeSection === tab.id
                    ? 'text-amber-700 dark:text-amber-400'
                    : 'text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
                }`}
              >
                {tab.label}
                {activeSection === tab.id && (
                  <motion.div layoutId="lesson-tab-underline" className="absolute left-0 right-0 -bottom-px h-0.5 bg-amber-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <AnimatePresence mode="wait">
          {/* Objectives Section */}
          {activeSection === 'objectives' && (
            <motion.div
              key="objectives"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className={cardClass}>
                <h2 className="font-display text-2xl mb-6 text-stone-900 dark:text-amber-50">
                  Learning Objectives
                </h2>
                <div className="grid gap-4">
                  {lesson.objectives.map((objective) => (
                    <motion.div
                      key={objective.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-4 p-4 rounded-sm bg-amber-50/60 dark:bg-amber-400/[0.06] border border-amber-500/30 dark:border-amber-400/20"
                    >
                      <CheckCircle2 className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-stone-900 dark:text-amber-50">
                          {objective.description}
                        </p>
                        <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                          Type: <span className="font-medium capitalize">{objective.type}</span>
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Scenario Section */}
          {activeSection === 'scenario' && (
            <motion.div
              key="scenario"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className={cardClass}>
                <h2 className="font-display text-2xl mb-4 text-stone-900 dark:text-amber-50">
                  {lesson.scenario.title}
                </h2>
                <p className="text-stone-600 dark:text-stone-300 mb-6 leading-relaxed">
                  {lesson.scenario.description}
                </p>
                <div className={`${infoBoxClass} mb-6`}>
                  <p className="text-sm text-stone-700 dark:text-stone-300">
                    <strong className="text-amber-700 dark:text-amber-400">Context:</strong> {lesson.scenario.context}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg text-stone-900 dark:text-amber-50">
                    Dialogue Audio
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={playAllIndex === null ? handlePlayAll : handleStopAll}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-amber-500 hover:bg-amber-600 text-[#0b0a08] text-sm font-semibold transition-colors"
                  >
                    {playAllIndex === null ? (
                      <>
                        <PlayCircle className="w-4 h-4" /> Listen to Full Conversation
                      </>
                    ) : (
                      <>
                        <StopCircle className="w-4 h-4" /> Stop
                      </>
                    )}
                  </motion.button>
                </div>
                <audio ref={playAllAudioRef} className="hidden" />
                <div className="space-y-4">
                  {lesson.scenario.audioSegments.map((segment, segIdx) => (
                    <div
                      key={segment.id}
                      className={`p-4 rounded-sm transition-colors border ${
                        playAllIndex === segIdx
                          ? 'bg-amber-50/60 dark:bg-amber-400/[0.08] border-amber-500/50 dark:border-amber-400/40'
                          : 'bg-stone-50 dark:bg-white/[0.03] border-stone-200 dark:border-white/10'
                      }`}
                    >
                      <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">
                        <span className="font-semibold capitalize">{segment.speaker}</span>:
                      </p>
                      <p className="text-stone-900 dark:text-amber-50 mb-3">{segment.text}</p>
                      <AudioPlayer audioUrl={segment.audioUrl} />
                    </div>
                  ))}
                </div>

                {lesson.scenario.vocabulary.length > 0 && (
                  <>
                    <h3 className="font-display text-lg mt-8 mb-4 text-stone-900 dark:text-amber-50">
                      Key Vocabulary
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {lesson.scenario.vocabulary.map((item, idx) => (
                        <div key={idx} className={infoBoxClass}>
                          <p className="font-bold text-stone-900 dark:text-amber-50">
                            {item.word}
                          </p>
                          {item.pronunciation && (
                            <p className="text-sm text-amber-700 dark:text-amber-400 italic">
                              /{item.pronunciation}/
                            </p>
                          )}
                          <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                            {item.definition}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* Theory Section */}
          {activeSection === 'theory' && (
            <motion.div
              key="theory"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className={cardClass}>
                <h2 className="font-display text-2xl mb-4 text-stone-900 dark:text-amber-50">
                  {lesson.theory.title}
                </h2>
                <div className="prose dark:prose-invert max-w-none mb-6">
                  <p className="text-stone-600 dark:text-stone-300 whitespace-pre-wrap leading-relaxed">
                    {lesson.theory.content}
                  </p>
                </div>
                {lesson.theory.audioExplanation && (
                  <div className={`mt-6 ${infoBoxClass}`}>
                    <p className="text-sm font-medium text-amber-700 dark:text-amber-400 mb-3">
                      Audio Explanation
                    </p>
                    <AudioPlayer audioUrl={lesson.theory.audioExplanation.audioUrl} />
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Phraseology Section */}
          {activeSection === 'phraseology' && (
            <motion.div
              key="phraseology"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className={cardClass}>
                <h2 className="font-display text-2xl mb-6 text-stone-900 dark:text-amber-50">
                  {lesson.cabinCrewPhraseoology.category}
                </h2>
                <div className="space-y-4">
                  {lesson.cabinCrewPhraseoology.phrases.map((phrase, idx) => (
                    <div key={idx} className={infoBoxClass}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold text-stone-900 dark:text-amber-50">
                            {phrase.phrase}
                          </p>
                          {phrase.pronunciation && (
                            <p className="text-sm text-amber-700 dark:text-amber-400 italic">
                              /{phrase.pronunciation}/
                            </p>
                          )}
                        </div>
                        <span className="text-[10px] font-semibold tracking-wide uppercase bg-amber-100 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-sm">
                          {phrase.situation}
                        </span>
                      </div>
                      <p className="text-sm text-stone-600 dark:text-stone-300 mb-2">
                        <strong>Meaning:</strong> {phrase.meaning}
                      </p>
                      {phrase.example && (
                        <p className="text-sm text-stone-500 dark:text-stone-400 italic">
                          Example: {phrase.example}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className={cardClass}>
                <h2 className="font-display text-2xl mb-6 text-stone-900 dark:text-amber-50">
                  {lesson.icaoPhraseoology.category}
                </h2>
                <div className="space-y-4">
                  {lesson.icaoPhraseoology.phrases.map((phrase, idx) => (
                    <div key={idx} className={infoBoxClass}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold text-stone-900 dark:text-amber-50">
                            {phrase.phrase}
                          </p>
                          {phrase.pronunciation && (
                            <p className="text-sm text-amber-700 dark:text-amber-400 italic">
                              /{phrase.pronunciation}/
                            </p>
                          )}
                        </div>
                        <span className="text-[10px] font-semibold tracking-wide uppercase bg-amber-100 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-sm">
                          {phrase.situation}
                        </span>
                      </div>
                      <p className="text-sm text-stone-600 dark:text-stone-300 mb-2">
                        <strong>Meaning:</strong> {phrase.meaning}
                      </p>
                      {phrase.example && (
                        <p className="text-sm text-stone-500 dark:text-stone-400 italic">
                          Example: {phrase.example}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Vocabulary Section */}
          {activeSection === 'vocabulary' && (
            <motion.div
              key="vocabulary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className={cardClass}>
                <h2 className="font-display text-2xl mb-6 text-stone-900 dark:text-amber-50">
                  Vocabulary
                </h2>
                <div className="space-y-6">
                  {lesson.airlineVocabulary.map((vocab, vIdx) => (
                    <div key={vIdx}>
                      <h3 className="font-display text-lg mb-3 text-stone-900 dark:text-amber-50">
                        {vocab.category}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {vocab.terms.map((term, idx) => (
                          <div key={idx} className={infoBoxClass}>
                            <p className="font-bold text-stone-900 dark:text-amber-50">
                              {term.term}
                            </p>
                            {term.pronunciation && (
                              <p className="text-sm text-amber-700 dark:text-amber-400 italic">
                                /{term.pronunciation}/
                              </p>
                            )}
                            <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                              {term.definition}
                            </p>
                            {term.example && (
                              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                                Example: {term.example}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Log Book Section */}
          {activeSection === 'logbook' && lesson.logBookPrompts && (
            <motion.div
              key="logbook"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className={cardClass}>
                <h2 className="font-display text-2xl mb-2 text-stone-900 dark:text-amber-50">
                  Log Book
                </h2>
                <p className="text-stone-500 dark:text-stone-400 mb-6">
                  Personal reflection - not graded. Use these questions for ideas, then write your own notes below.
                </p>
                <ul className="space-y-2 mb-6 list-disc list-inside text-stone-600 dark:text-stone-300">
                  {lesson.logBookPrompts.map((prompt, idx) => (
                    <li key={idx}>{prompt}</li>
                  ))}
                </ul>
                <textarea
                  value={logBookDraft}
                  onChange={(e) => {
                    setLogBookDraft(e.target.value);
                    setLogBookSaved(false);
                  }}
                  placeholder="Write your thoughts here..."
                  rows={8}
                  className="w-full p-4 rounded-sm border border-stone-300 dark:border-white/15 bg-white dark:bg-white/[0.02] text-stone-900 dark:text-amber-50 resize-none focus:outline-none focus:border-amber-500 dark:focus:border-amber-400"
                />
                <div className="flex items-center gap-4 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setLogBookEntry(lesson.id, logBookDraft);
                      setLogBookSaved(true);
                    }}
                    className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-[#0b0a08] font-bold rounded-sm transition-colors"
                  >
                    Save Notes
                  </motion.button>
                  {logBookSaved && (
                    <span className="text-amber-600 dark:text-amber-400 text-sm font-medium">
                      Saved &#10003;
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Quiz Section */}
          {activeSection === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className={cardClass}>
                <h2 className="font-display text-2xl mb-4 text-stone-900 dark:text-amber-50">
                  {lesson.quiz.title}
                </h2>
                <p className="text-stone-500 dark:text-stone-400 mb-6">
                  Passing Score: <span className="font-bold text-amber-700 dark:text-amber-400">{lesson.quiz.passingScore}%</span>
                </p>
                <div className="space-y-6">
                  {lesson.quiz.exercises.map((exercise, idx) => (
                    <ExerciseCard
                      key={exercise.id}
                      exercise={exercise}
                      number={idx + 1}
                      onComplete={(id, firstTry) =>
                        handleExerciseComplete(id, firstTry, exercise.points, true)
                      }
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Exercises Section */}
          {activeSection === 'exercises' && (
            <motion.div
              key="exercises"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className={cardClass}>
                <h2 className="font-display text-2xl mb-6 text-stone-900 dark:text-amber-50">
                  Practice Exercises
                </h2>
                <div className="space-y-6">
                  {lesson.exercises.map((exercise, idx) => (
                    <ExerciseCard
                      key={exercise.id}
                      exercise={exercise}
                      number={idx + 1}
                      onComplete={(id, firstTry) =>
                        handleExerciseComplete(id, firstTry, exercise.points, false)
                      }
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lesson Completion Summary */}
        {lessonFullyComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 relative overflow-hidden rounded-sm bg-[#14120e] border border-amber-400/25 p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,180,90,0.16),transparent_55%)]" />
            <div className="relative flex items-center gap-3 mb-3">
              <Trophy className="w-8 h-8 text-amber-400" />
              <h3 className="font-display text-2xl text-amber-50">Lesson Complete!</h3>
            </div>
            {(() => {
              const correctFirstTry = lesson.quiz.exercises.filter((e) => quizFirstTry.get(e.id)).length;
              const quizScorePercent = Math.round((correctFirstTry / lesson.quiz.exercises.length) * 100);
              const message =
                quizScorePercent >= 90
                  ? "Outstanding work! You've mastered this lesson."
                  : quizScorePercent >= 70
                  ? 'Good progress! A quick review of the trickier exercises will help it stick.'
                  : 'You made it through - consider revisiting the Theory and Vocabulary tabs before moving on.';
              return (
                <div className="relative">
                  <p className="text-stone-300 mb-1">
                    Quiz score (first attempt): <span className="font-bold text-amber-400">{quizScorePercent}%</span>
                  </p>
                  <p className="text-stone-300 mb-4">+{lesson.xpReward} XP earned</p>
                  <p className="text-stone-400">{message}</p>
                </div>
              );
            })()}
          </motion.div>
        )}

        {/* Newly Unlocked Achievements Toast */}
        {newlyUnlocked.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6 z-50 bg-[#14120e] border border-amber-400/40 rounded-sm shadow-xl p-4 max-w-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-amber-400 mb-1">
                  Achievement Unlocked!
                </p>
                {newlyUnlocked.map((a) => (
                  <p key={a.id} className="text-sm text-stone-300">
                    {a.icon} <span className="font-semibold text-amber-50">{a.name}</span> (+{a.xpReward} XP)
                  </p>
                ))}
              </div>
              <button
                onClick={clearNewlyUnlocked}
                className="text-stone-500 hover:text-stone-300"
              >
                &#10005;
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
