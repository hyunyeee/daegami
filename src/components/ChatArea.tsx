"use client";

import { DaegamiChatBubble } from "@/components/DaegamiChatBubble";
import { UserChatBubble } from "@/components/UserChatBubble";
import { Intro } from "@/components/Intro";
import { ToggleSwitch } from "@/components/ToggleSwitch";
import { useTypeStore } from "../../store/type";

export const ChatArea = () => {
  const { type } = useTypeStore();

  return (
    <div className="py-24 px-6 flex flex-col gap-8">
      <div
        className={`text-2xl text-md ${type === "location" ? "text-green-subtitle" : "text-beige-button"}`}
      >
        상권분석의 중심, 터줏대감입니다. <br />
        대감이와 함께 상권을 분석해보세요!
      </div>
      <ToggleSwitch />
      <Intro type={type} />

      <DaegamiChatBubble>대감이</DaegamiChatBubble>
      <DaegamiChatBubble>대감이</DaegamiChatBubble>
      <DaegamiChatBubble>대감이</DaegamiChatBubble>
      <UserChatBubble />
      <DaegamiChatBubble>대감이</DaegamiChatBubble>
      <DaegamiChatBubble>대감이</DaegamiChatBubble>
      <DaegamiChatBubble>대감이</DaegamiChatBubble>
      <DaegamiChatBubble>대감이</DaegamiChatBubble>
    </div>
  );
};
