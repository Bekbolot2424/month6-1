import { create } from "zustand";

export const useStore = create((set) => ({
  value: [],
  increment: (text) => set((state) => ({
    value: [...state.value, text]
  })),
  decrement: (index) => set((state) => ({
    value: state.value.filter((_, i) => i !== index)
  }))
}));