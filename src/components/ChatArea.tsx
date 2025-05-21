"use client";

import { ToggleSwitch } from "@/components/ToggleSwitch";
import { useTypeStore } from "../../store/type";
import { ChatList } from "@/components/chat/ChatList";

export const ChatArea = () => {
  const { type } = useTypeStore();

  return (
    <div className="py-24 px-6 flex flex-col">
      <div
        className={`text-2xl text-md ${type === "location" ? "text-green-subtitle" : "text-beige-button"}`}
      >
        상권분석의 중심, 터줏대감입니다. <br />
        대감이와 함께 상권을 분석해보세요!
      </div>
      <ToggleSwitch />
      <ChatList />
    </div>
  );
};
