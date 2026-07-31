'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Clock, CheckCircle2, Lock, Trophy, ArrowLeft, PlayCircle, StopCircle } from 'lucide-react';
import type { Lesson } from '@/lib/types';
import { useAppStore } from '@/lib/store';
import { getAudioUrl } from '@/lib/config/audioUrls';
import AudioPlayer from './AudioPlayer';
import ExerciseCard from './ExerciseCard';
import VoiceRecorder from './VoiceRecorder';

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

  const sectionTabs: { id: LessonSection; label: string; icon: string }[] = [
    { id: 'objectives', label: 'Objectives', icon: '🎯' },
    { id: 'scenario', label: 'Scenario', icon: '🎬' },
    { id: 'theory', label: 'Theory', icon: '📚' },
    { id: 'phraseology', label: 'Phraseology', icon: '✈️' },
    { id: 'vocabulary', label: 'Vocabulary', icon: '📖' },
    { id: 'exercises', label: 'Exercises', icon: '💪' },
    { id: 'quiz', label: 'Quiz', icon: '✅' },
    ...(lesson.logBookPrompts && lesson.logBookPrompts.length > 0
      ? [{ id: 'logbook' as LessonSection, label: 'Log Book', icon: '📓' }]
      : []),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{lesson.icon}</span>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {lesson.title}
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  ICAO Level {lesson.icaoLevel} • {lesson.difficulty}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-1 text-orange-600 font-bold">
                  <Zap className="w-4 h-4" />
                  {lesson.xpReward} XP
                </div>
                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-sm">
                  <Clock className="w-4 h-4" />
                  {lesson.estimatedDurationMinutes} min
                </div>
              </div>
            </div>
          </div>

          {/* Section Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {sectionTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeSection === tab.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.icon} {tab.label}
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
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                  🎯 Learning Objectives
                </h2>
                <div className="grid gap-4">
                  {lesson.objectives.map((objective) => (
                    <motion.div
                      key={objective.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800"
                    >
                      <CheckCircle2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {objective.description}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
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
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  {lesson.scenario.title}
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {lesson.scenario.description}
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    <strong>Context:</strong> {lesson.scenario.context}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Dialogue Audio
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={playAllIndex === null ? handlePlayAll : handleStopAll}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
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
                      className={`p-4 rounded-lg transition-colors ${
                        playAllIndex === segIdx
                          ? 'bg-indigo-50 dark:bg-indigo-900/30 ring-2 ring-indigo-500'
                          : 'bg-slate-50 dark:bg-slate-800'
                      }`}
                    >
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        <span className="font-semibold capitalize">{segment.speaker}</span>:
                      </p>
                      <p className="text-slate-900 dark:text-white mb-3">{segment.text}</p>
                      <AudioPlayer audioUrl={segment.audioUrl} />
                    </div>
                  ))}
                </div>

                {lesson.scenario.vocabulary.length > 0 && (
                  <>
                    <h3 className="text-lg font-bold mt-8 mb-4 text-slate-900 dark:text-white">
                      Key Vocabulary
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {lesson.scenario.vocabulary.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg"
                        >
                          <p className="font-bold text-emerald-900 dark:text-emerald-100">
                            {item.word}
                          </p>
                          {item.pronunciation && (
                            <p className="text-sm text-emerald-700 dark:text-emerald-300 italic">
                              /{item.pronunciation}/
                            </p>
                          )}
                          <p className="text-sm text-emerald-800 dark:text-emerald-200 mt-1">
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
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  {lesson.theory.title}
                </h2>
                <div className="prose dark:prose-invert max-w-none mb-6">
                  <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {lesson.theory.content}
                  </p>
                </div>
                {lesson.theory.audioExplanation && (
                  <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100 mb-3">
                      📖 Audio Explanation
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
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  💬 {lesson.cabinCrewPhraseoology.category}
                </h2>
                <div className="space-y-4">
                  {lesson.cabinCrewPhraseoology.phrases.map((phrase, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold text-indigo-900 dark:text-indigo-100">
                            {phrase.phrase}
                          </p>
                          {phrase.pronunciation && (
                            <p className="text-sm text-indigo-700 dark:text-indigo-300 italic">
                              /{phrase.pronunciation}/
                            </p>
                          )}
                        </div>
                        <span className="text-xs bg-indigo-200 dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100 px-2 py-1 rounded">
                          {phrase.situation}
                        </span>
                      </div>
                      <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-2">
                        <strong>Meaning:</strong> {phrase.meaning}
                      </p>
                      {phrase.example && (
                        <p className="text-sm text-indigo-800 dark:text-indigo-200 italic">
                          Example: {phrase.example}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  ✈️ {lesson.icaoPhraseoology.category}
                </h2>
                <div className="space-y-4">
                  {lesson.icaoPhraseoology.phrases.map((phrase, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold text-sky-900 dark:text-sky-100">
                            {phrase.phrase}
                          </p>
                          {phrase.pronunciation && (
                            <p className="text-sm text-sky-700 dark:text-sky-300 italic">
                              /{phrase.pronunciation}/
                            </p>
                          )}
                        </div>
                        <span className="text-xs bg-sky-200 dark:bg-sky-800 text-sky-900 dark:text-sky-100 px-2 py-1 rounded">
                          {phrase.situation}
                        </span>
                      </div>
                      <p className="text-sm text-sky-800 dark:text-sky-200 mb-2">
                        <strong>Meaning:</strong> {phrase.meaning}
                      </p>
                      {phrase.example && (
                        <p className="text-sm text-sky-800 dark:text-sky-200 italic">
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
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  📖 Vocabulary
                </h2>
                <div className="space-y-6">
                  {lesson.airlineVocabulary.map((vocab, vIdx) => (
                    <div key={vIdx}>
                      <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">
                        {vocab.category}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {vocab.terms.map((term, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg"
                          >
                            <p className="font-bold text-emerald-900 dark:text-emerald-100">
                              {term.term}
                            </p>
                            {term.pronunciation && (
                              <p className="text-sm text-emerald-700 dark:text-emerald-300 italic">
                                /{term.pronunciation}/
                              </p>
                            )}
                            <p className="text-sm text-emerald-800 dark:text-emerald-200 mt-1">
                              {term.definition}
                            </p>
                            {term.example && (
                              <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-2">
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
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                  📓 Log Book
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Personal reflection - not graded. Use these questions for ideas, then write your own notes below.
                </p>
                <ul className="space-y-2 mb-6 list-disc list-inside text-slate-700 dark:text-slate-300">
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
                  className="w-full p-4 rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white resize-none"
                />
                <div className="flex items-center gap-4 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setLogBookEntry(lesson.id, logBookDraft);
                      setLogBookSaved(true);
                    }}
                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors"
                  >
                    Save Notes
                  </motion.button>
                  {logBookSaved && (
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                      Saved ✓
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
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  ✅ {lesson.quiz.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Passing Score: <span className="font-bold">{lesson.quiz.passingScore}%</span>
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
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
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
            className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Lesson Complete!</h3>
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
                <>
                  <p className="opacity-90 mb-1">
                    Quiz score (first attempt): <span className="font-bold">{quizScorePercent}%</span>
                  </p>
                  <p className="opacity-90 mb-4">+{lesson.xpReward} XP earned</p>
                  <p className="opacity-90">{message}</p>
                </>
              );
            })()}
          </motion.div>
        )}

        {/* Newly Unlocked Achievements Toast */}
        {newlyUnlocked.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6 z-50 bg-white dark:bg-slate-900 border-2 border-amber-400 rounded-xl shadow-xl p-4 max-w-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-amber-600 dark:text-amber-400 mb-1">
                  🏆 Achievement Unlocked!
                </p>
                {newlyUnlocked.map((a) => (
                  <p key={a.id} className="text-sm text-slate-700 dark:text-slate-300">
                    {a.icon} <span className="font-semibold">{a.name}</span> (+{a.xpReward} XP)
                  </p>
                ))}
              </div>
              <button
                onClick={clearNewlyUnlocked}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
