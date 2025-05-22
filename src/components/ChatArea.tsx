"use client";

import { ToggleSwitch } from "@/components/ToggleSwitch";
import { useTypeStore } from "../../store/type";
import { ChatList } from "@/components/chat/ChatList";

export const ChatArea = () => {
  const { type } = useTypeStore();

  return (
    <div className="flex flex-col px-6 py-24">
      <div
        className={`text-md text-2xl ${type === "region" ? "text-green-subtitle" : "text-beige-button"}`}
      >
        상권분석의 중심, 터줏대감입니다. <br />
        대감이와 함께 상권을 분석해보세요!
      </div>
      <ToggleSwitch />
      <ChatList />
    </div>
  );
};
