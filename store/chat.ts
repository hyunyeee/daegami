import { create } from "zustand";

type TextChat = {
  type: "text";
  from: "user" | "bot";
  message: string;
  loading?: boolean;
};

type LocationButton = {
  type: "location";
  from: "bot";
};

type ChatItem = TextChat | LocationButton;

type ChatState = {
  messages: ChatItem[];
  addMessage: (chat: ChatItem) => void;
  clearMessages: () => void;
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (chat) =>
    set((state) => ({ messages: [...state.messages, chat] })),
  clearMessages: () => set({ messages: [] }),
}));
