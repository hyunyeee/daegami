"use client";

import { DaegamiChatBubble } from "@/components/chat/DaegamiChatBubble";
import { useRegionStore } from "../../../store/region";

export const RegionButtons = () => {
  const { selectedRegion, setRegion } = useRegionStore();

  const LocationButton = [
    "강남구",
    "강동구",
    "강서구",
    "강북구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "동대문구",
    "도봉구",
    "동작구",
    "마포구",
    "서대문구",
    "성동구",
    "성북구",
    "서초구",
    "송파구",
    "영등포구",
    "용산구",
    "양천구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];

  return (
    <DaegamiChatBubble>
      <div className="relative">
        <img
          src="/flowers.svg"
          className="absolute top-[-50px] right-[-60px]"
        />
      </div>
      <p>알아보고자 하는 지역을 선택해주세요</p>
      <div className="mt-4 flex max-w-[470px] flex-wrap justify-center gap-4">
        {LocationButton.map((region) => (
          <button
            key={region}
            onClick={() => setRegion(region)}
            className={`cursor-pointer rounded px-4 py-2 text-white transition-colors ${
              selectedRegion === region
                ? "bg-green-button"
                : "hover:bg-green-button bg-black"
            }`}
          >
            {region}
          </button>
        ))}
      </div>
    </DaegamiChatBubble>
  );
};
