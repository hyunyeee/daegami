"use client";

import { useTypeStore } from "../../store/type";

export const DaegamiChatBubble = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { type } = useTypeStore();

  return (
    <div>
      <div className="flex items-center gap-2.5 mb-2">
        <img
          className="w-12 h-12 rounded-full"
          src="/daegami-beige.svg"
          alt="Daegami image"
        />
        <span className="text-md font-bold text-gray-900">대감이</span>
      </div>
      <div
        className={`max-w-[50%] p-4 border-6  bg-white rounded text-sm font-normal py-2.5 text-gray-900
    ${type === "location" ? "border-green-stroke" : "border-beige-stroke"}
    `}
      >
        {children}
      </div>
    </div>
  );
};
