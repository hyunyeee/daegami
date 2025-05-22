"use client";

import { useTypeStore } from "../../../store/type";

export const DaegamiChatBubble = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { type } = useTypeStore();

  return (
    <div>
      <div className="mb-2 flex items-center gap-2.5">
        <img
          className="h-12 w-12 rounded-full"
          src="/daegami-beige.svg"
          alt="Daegami image"
        />
        <span className="text-md font-bold text-gray-900">대감이</span>
      </div>
      <div
        className={`w-fit max-w-[50%] rounded border-6 bg-white p-4 py-2.5 text-sm font-normal whitespace-pre-wrap text-gray-900 ${type === "region" ? "border-green-stroke" : "border-beige-stroke"} `}
      >
        {children}
      </div>
    </div>
  );
};
