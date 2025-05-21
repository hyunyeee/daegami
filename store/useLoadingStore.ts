import { create } from "zustand/index";

type LoadingState = {
  isLoading: boolean;
  setLoading: (state: boolean) => void;
};

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));
