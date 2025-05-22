import { create } from "zustand/index";

type RegionState = {
  selectedRegion: string;
  setRegion: (state: string) => void;
  resetRegion: () => void;
};

export const useRegionStore = create<RegionState>((set) => ({
  selectedRegion: "",
  setRegion: (region) => set({ selectedRegion: region }),
  resetRegion: () => set({ selectedRegion: "" }),
}));
