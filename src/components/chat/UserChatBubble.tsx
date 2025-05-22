"use client";

import { useTypeStore } from "../../../store/type";

export const UserChatBubble = ({ children }: { children: React.ReactNode }) => {
  const { type } = useTypeStore();

  return (
    <div
      className={`max-w-[50%] self-end rounded border-6 p-4 py-2.5 text-sm font-normal whitespace-pre-wrap text-gray-900 ${type === "region" ? "bg-green-stroke border-green-stroke" : "bg-beige-stroke border-beige-stroke"} `}
    >
      {children}
    </div>
  );
};
