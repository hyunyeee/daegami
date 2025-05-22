"use client";

import { useTypeStore } from "../../../store/type";

export const UserChatBubble = ({ children }: { children: React.ReactNode }) => {
  const { type } = useTypeStore();

  return (
    <div
      className={`whitespace-pre-wrap self-end max-w-[50%] p-4 border-6 rounded text-sm font-normal py-2.5 text-gray-900
    ${type === "region" ? "bg-green-stroke border-green-stroke" : "bg-beige-stroke border-beige-stroke"}
      `}
    >
      {children}
    </div>
  );
};
