import { create } from 'zustand';

interface UIState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
