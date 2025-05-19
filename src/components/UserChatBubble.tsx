"use client";

import { useTypeStore } from "../../store/type";

export const UserChatBubble = () => {
  const { type } = useTypeStore();

  return (
    <div
      className={`self-end max-w-[50%] p-4 border-6   rounded text-sm font-normal py-2.5 text-gray-900
    ${type === "location" ? "bg-green-stroke border-green-stroke" : "bg-beige-stroke border-beige-stroke"}
      `}
    >
      나 창업할래
    </div>
  );
};
