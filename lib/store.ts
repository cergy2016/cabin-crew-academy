import { create } from 'zustand';

interface AppState {
  xp: number;
  level: number;
  streak: number;
  addXp: (amount: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  xp: 3200,
  level: 7,
  streak: 16,
  addXp: (amount) => set((state) => ({ xp: state.xp + amount })),
}));
