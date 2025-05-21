"use client";

import { getLabel } from "@/utils/utils";
import { useTypeStore } from "../../store/type";

export const ToggleSwitch = () => {
  const { type, toggleType } = useTypeStore();

  return (
    <label className="inline-flex justify-center items-center cursor-pointer sticky">
      <input
        type="checkbox"
        checked={type === "period"}
        onChange={toggleType}
        className="sr-only peer"
      />
      <div
        className={`relative w-14 h-7 rounded-full transition-colors peer-focus:outline-none 
        ${type === "location" ? "bg-green-button" : "bg-beige-accent"}`}
      >
        <div
          className={`absolute top-0.5 start-[4px] h-6 w-6 rounded-full bg-white transition-transform
          ${type === "location" ? "translate-x-full" : "translate-x-0"} 
          rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white`}
        ></div>
      </div>
      <span
        className={`ms-3 text-lg font-extrabold 
      ${type === "location" ? "text-green-subtitle" : "text-beige-accent"}
      `}
      >
        창업 {getLabel(type)} 질문하기
      </span>
    </label>
  );
};
