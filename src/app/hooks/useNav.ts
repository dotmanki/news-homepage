import { create } from 'zustand'

interface State {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export const useNav = create<State>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))
