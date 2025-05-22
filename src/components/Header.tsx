"use client";

import { useTypeStore } from "../../store/type";

export const Header = () => {
  const { type } = useTypeStore();

  return (
    <div
      className={`bg-beige-header fixed top-0 z-10 flex w-full items-center p-4 ${type === "region" ? "bg-green-header" : "bg-beige-header"}`}
    >
      <img
        className="h-12 w-12 rounded-full"
        src="/location_icon.svg"
        alt="icon"
      />
      <span className="text-2xl font-extrabold">터줏대감</span>
    </div>
  );
};
