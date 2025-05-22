"use client";

import { getLabel } from "@/utils/utils";
import { useTypeStore } from "../../store/type";

export const ToggleSwitch = () => {
  const { type, toggleType } = useTypeStore();

  return (
    <label className="sticky inline-flex cursor-pointer items-center justify-center">
      <input
        type="checkbox"
        checked={type === "period"}
        onChange={toggleType}
        className="peer sr-only"
      />
      <div
        className={`relative h-7 w-14 rounded-full transition-colors peer-focus:outline-none ${type === "region" ? "bg-green-button" : "bg-beige-accent"}`}
      >
        <div
          className={`absolute start-[4px] top-0.5 h-6 w-6 rounded-full bg-white transition-transform ${type === "region" ? "translate-x-full" : "translate-x-0"} peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full`}
        ></div>
      </div>
      <span
        className={`ms-3 text-lg font-extrabold ${type === "region" ? "text-green-subtitle" : "text-beige-accent"} `}
      >
        창업 {getLabel(type)} 질문하기
      </span>
    </label>
  );
};
