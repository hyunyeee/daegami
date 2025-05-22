import { create } from "zustand";
import { TypeKey } from "@/types";
import { useChatStore } from "./chat";
import { useRegionStore } from "./region";

type State = {
  type: Partial<TypeKey>;
};

type Action = {
  toggleType: () => void;
};

const useTypeStore = create<State & Action>((set) => ({
  type: "period",
  toggleType: () => {
    if (confirm("채팅 내역이 초기화 됩니다. 진행할까요?")) {
      useChatStore.getState().clearMessages();
      useRegionStore.getState().resetRegion();
      set((state) => ({
        type: state.type === "period" ? "region" : "period",
      }));
    }
  },
}));

export { useTypeStore };
