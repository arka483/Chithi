import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chithi-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chithi-theme", theme);
    set({ theme });
  },
}));
