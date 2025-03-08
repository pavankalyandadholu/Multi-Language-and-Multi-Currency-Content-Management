import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme } from '../types';

interface AppState {
  language: string;
  currency: string;
  theme: Theme;
  setLanguage: (language: string) => void;
  setCurrency: (currency: string) => void;
  setTheme: (theme: Theme) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'en',
      currency: 'USD',
      theme: 'light',
      setLanguage: (language) => set({ language }),
      setCurrency: (currency) => set({ currency }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'app-storage',
    }
  )
);