import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProfile, UserStats, LessonProgress, Achievement, DailyChallenge } from './types';

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

      achievements: [],
      unlockAchievement: (achievementId) =>
        set((state) => ({
          achievements: state.achievements.map((a) =>
            a.id === achievementId ? { ...a, unlockedAt: new Date().toISOString() } : a
          ),
        })),

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
