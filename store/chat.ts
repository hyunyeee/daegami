import { create } from "zustand";

type Chat = {
  from: "user" | "bot";
  message: string;
  loading?: boolean;
};

type ChatState = {
  messages: Chat[];
  addMessage: (chat: Chat) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (chat) =>
    set((state) => ({ messages: [...state.messages, chat] })),
}));
