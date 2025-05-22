import { useChatStore } from "../../../store/chat";

export const ReselectButton = () => {
  const { addMessage } = useChatStore();

  const reselctRegion = () => {
    addMessage({ type: "location", from: "bot" });
  };

  return (
    <div>
      <button onClick={() => reselctRegion()} className="mt-4 cursor-pointer">
        장소 다시 선택하기 &gt;
      </button>
    </div>
  );
};
