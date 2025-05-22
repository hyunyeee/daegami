"use client";

import { useState } from "react";
import { requestChatResponse } from "../../api";
import { useChatStore } from "../../store/chat";
import { useTypeStore } from "../../store/type";
import { useLoadingStore } from "../../store/loading";

import { AutoResizingTextarea } from "@/components/AutoResizingTextarea";
import { TypeLabels } from "@/types";
import { useRegionStore } from "../../store/region";

export default function Form() {
  const [input, setInput] = useState("");

  const { addMessage } = useChatStore();
  const { isLoading, setLoading } = useLoadingStore();
  const { type } = useTypeStore();
  const { selectedRegion } = useRegionStore();

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setInput("");
      await handleSubmit(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userMessage = input.trim();
    if (!userMessage) return;
    if (type === "region" && selectedRegion == "") return;

    addMessage({ type: "text", from: "user", message: userMessage });
    setInput("");

    try {
      setLoading(true);

      const data = await requestChatResponse({
        category: TypeLabels[type],
        message: userMessage,
        ...(type === "region" && { region: selectedRegion }),
      });

      addMessage({ type: "text", from: "bot", message: data.aiResponse });
    } catch (error) {
      console.error(error);
      addMessage({ type: "text", from: "bot", message: "⚠️ 서버 에러 발생" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="scrollbar-hide fixed bottom-3 left-1/2 flex w-[50%] flex-grow-0 -translate-x-1/2 transform items-center justify-between gap-2 rounded-xl bg-white px-5 py-3"
    >
      <AutoResizingTextarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="대감이에게 궁금한 점을 질문해보세요!"
      />

      <button disabled={isLoading}>
        <img src="/send.svg" alt="전송 버튼" />
      </button>
    </form>
  );
}
