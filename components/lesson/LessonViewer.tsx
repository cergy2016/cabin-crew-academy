'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Clock, CheckCircle2, Lock } from 'lucide-react';
import type { Lesson } from '@/lib/types';
import AudioPlayer from './AudioPlayer';
import ExerciseCard from './ExerciseCard';
import VoiceRecorder from './VoiceRecorder';

interface LessonViewerProps {
  lesson: Lesson;
  onComplete?: () => void;
}

type LessonSection = 'objectives' | 'scenario' | 'theory' | 'phraseology' | 'vocabulary' | 'exercises' | 'quiz';

export default function LessonViewer({ lesson, onComplete }: LessonViewerProps) {
  const [activeSection, setActiveSection] = useState<LessonSection>('objectives');
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const sectionTabs: { id: LessonSection; label: string; icon: string }[] = [
    { id: 'objectives', label: 'Objectives', icon: '🎯' },
    { id: 'scenario', label: 'Scenario', icon: '🎬' },
    { id: 'theory', label: 'Theory', icon: '📚' },
    { id: 'phraseology', label: 'Phraseology', icon: '✈️' },
    { id: 'vocabulary', label: 'Vocabulary', icon: '📖' },
    { id: 'exercises', label: 'Exercises', icon: '💪' },
    { id: 'quiz', label: 'Quiz', icon: '✅' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6">
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

                <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">
                  Dialogue Audio
                </h3>
                <div className="space-y-4">
                  {lesson.scenario.audioSegments.map((segment) => (
                    <div key={segment.id} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
                      onComplete={(id) =>
                        setCompletedExercises(
                          (prev) => new Set([...prev, id])
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
