import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProfile, UserStats, LessonProgress, Achievement, Badge, DailyChallenge, Lesson } from './types';
import { achievements as achievementDefs, badges as badgeDefs } from './data/achievements';

interface AppState {
  // User
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;

  // Stats
  stats: UserStats;
  updateStats: (stats: Partial<UserStats>) => void;
  addXp: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;

  // Progress
  lessonProgress: Map<string, LessonProgress>;
  updateLessonProgress: (lessonId: string, progress: LessonProgress) => void;
  getLessonProgress: (lessonId: string) => LessonProgress | undefined;

  // Achievements
  achievements: Achievement[];
  unlockAchievement: (achievementId: string) => void;
  newlyUnlocked: Achievement[];
  clearNewlyUnlocked: () => void;

  // Badges
  badges: Badge[];

  // Lesson completion (XP, progress, achievement checks all in one place)
  completeLesson: (lesson: Lesson, quizScorePercent: number) => void;

  // Log Book - personal reflection notes per lesson, not graded
  logBookEntries: Record<string, string>;
  setLogBookEntry: (lessonId: string, text: string) => void;

  // Daily Challenge
  dailyChallenge: DailyChallenge | null;
  setDailyChallenge: (challenge: DailyChallenge | null) => void;
  completeDailyChallenge: () => void;

  // Settings
  darkMode: boolean;
  toggleDarkMode: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
}

const defaultStats: UserStats = {
  totalXp: 0,
  level: 1,
  streak: 0,
  totalHoursStudied: 0,
  lessonsCompleted: 0,
  vocabularyLearned: 0,
  pronunciationScore: 0,
  grammarScore: 0,
  listeningScore: 0,
  speakingScore: 0,
  readingScore: 0,
  writingScore: 0,
  confidenceScore: 0,
  fluencyScore: 0,
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),

      stats: defaultStats,
      updateStats: (newStats) =>
        set((state) => ({
          stats: { ...state.stats, ...newStats },
        })),

      addXp: (amount) =>
        set((state) => {
          const newTotalXp = state.stats.totalXp + amount;
          const newLevel = Math.floor(newTotalXp / 1000) + 1;
          return {
            stats: {
              ...state.stats,
              totalXp: newTotalXp,
              level: newLevel,
            },
          };
        }),

      incrementStreak: () =>
        set((state) => ({
          stats: {
            ...state.stats,
            streak: state.stats.streak + 1,
          },
        })),

      resetStreak: () =>
        set((state) => ({
          stats: {
            ...state.stats,
            streak: 0,
          },
        })),

      lessonProgress: new Map(),
      updateLessonProgress: (lessonId, progress) =>
        set((state) => {
          const newProgress = new Map(state.lessonProgress);
          newProgress.set(lessonId, progress);
          return { lessonProgress: newProgress };
        }),

      getLessonProgress: (lessonId) => {
        const progress = get().lessonProgress.get(lessonId);
        return progress;
      },

      achievements: achievementDefs,
      unlockAchievement: (achievementId) =>
        set((state) => {
          const target = state.achievements.find((a) => a.id === achievementId);
          if (!target || target.unlockedAt) return state;
          const unlocked = { ...target, unlockedAt: new Date().toISOString() };
          return {
            achievements: state.achievements.map((a) =>
              a.id === achievementId ? unlocked : a
            ),
            newlyUnlocked: [...state.newlyUnlocked, unlocked],
          };
        }),
      newlyUnlocked: [],
      clearNewlyUnlocked: () => set({ newlyUnlocked: [] }),

      badges: badgeDefs,

      logBookEntries: {},
      setLogBookEntry: (lessonId, text) =>
        set((state) => ({
          logBookEntries: { ...state.logBookEntries, [lessonId]: text },
        })),

      completeLesson: (lesson, quizScorePercent) =>
        set((state) => {
          const newTotalXp = state.stats.totalXp + lesson.xpReward;
          const newLevel = Math.floor(newTotalXp / 1000) + 1;
          const newLessonsCompleted = state.stats.lessonsCompleted + 1;

          const newLessonProgress = new Map(state.lessonProgress);
          newLessonProgress.set(lesson.id, {
            lessonId: lesson.id,
            unitId: lesson.unitId,
            completedAt: new Date().toISOString(),
            progress: 100,
            xpEarned: lesson.xpReward,
            exercisesCompleted: lesson.exercises.length,
            exercisesTotal: lesson.exercises.length,
            quizScore: quizScorePercent,
            quizPassed: quizScorePercent >= lesson.quiz.passingScore,
          });

          const toUnlock: string[] = [];
          if (newLessonsCompleted === 1) toUnlock.push('first-lesson');
          if (quizScorePercent === 100) toUnlock.push('perfect-score');
          if (newLevel >= 10) toUnlock.push('level-10');
          if (state.stats.streak >= 7) toUnlock.push('seven-day-streak');

          const newlyUnlockedNow: Achievement[] = [];
          const updatedAchievements = state.achievements.map((a) => {
            if (toUnlock.includes(a.id) && !a.unlockedAt) {
              const unlocked = { ...a, unlockedAt: new Date().toISOString() };
              newlyUnlockedNow.push(unlocked);
              return unlocked;
            }
            return a;
          });

          return {
            stats: {
              ...state.stats,
              totalXp: newTotalXp,
              level: newLevel,
              lessonsCompleted: newLessonsCompleted,
            },
            lessonProgress: newLessonProgress,
            achievements: updatedAchievements,
            newlyUnlocked: [...state.newlyUnlocked, ...newlyUnlockedNow],
          };
        }),

      dailyChallenge: null,
      setDailyChallenge: (challenge) => set({ dailyChallenge: challenge }),
      completeDailyChallenge: () =>
        set((state) => {
          if (state.dailyChallenge) {
            return {
              dailyChallenge: {
                ...state.dailyChallenge,
                completed: true,
                completedAt: new Date().toISOString(),
              },
            };
          }
          return state;
        }),

      darkMode: true,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

      soundEnabled: true,
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),

      playbackSpeed: 1,
      setPlaybackSpeed: (speed) => set({ playbackSpeed: speed }),
    }),
    {
      name: 'cabin-crew-store',
      version: 1,
    }
  )
);
