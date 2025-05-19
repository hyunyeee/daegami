import { create } from "zustand";
import { TypeKey } from "@/types";

type State = {
  type: Partial<TypeKey>;
};

type Action = {
  toggleType: () => void;
};

const useTypeStore = create<State & Action>((set) => ({
  type: "period",
  toggleType: () =>
    set((state) => ({
      type: state.type === "period" ? "location" : "period",
    })),
}));

export { useTypeStore };
