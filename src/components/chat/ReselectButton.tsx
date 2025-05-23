import { useChatStore } from "../../../store/chat";

export const ReselectButton = () => {

  const { addMessage } = useChatStore();

  const reselctRegion = () => {
    addMessage({ type: "location", from: "bot" });
  };

  return (
    <div>
      <button
        onClick={() => reselctRegion()}
        className={`text-md text-green-button mt-4 cursor-pointer font-extrabold`}
      >
        장소 다시 선택하기 &gt;
      </button>
    </div>
  );
};
