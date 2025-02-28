import { create } from "zustand";

interface ISidebarStore {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<ISidebarStore>((set) => ({
  isCollapsed: false,
  toggleSidebar: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
