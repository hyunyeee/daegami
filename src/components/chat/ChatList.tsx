import { Intro } from "@/components/chat/Intro";
import { DaegamiChatBubble } from "@/components/chat/DaegamiChatBubble";
import { UserChatBubble } from "@/components/chat/UserChatBubble";
import { RegionButtons } from "@/components/chat/RegionButtons";
import { useTypeStore } from "../../../store/type";
import { useChatStore } from "../../../store/chat";
import { useLoadingStore } from "../../../store/loading";
import { ReselectButton } from "@/components/chat/ReselectButton";

export const ChatList = () => {
  const { type } = useTypeStore();
  const { isLoading } = useLoadingStore();

  const messages = useChatStore((state) => state.messages);

  return (
    <div className="flex flex-col gap-8">
      <Intro type={type} />
      {type === "region" && <RegionButtons />}

      {messages.map((message, index) => {
        if (message.type === "text") {
          return (
            <div key={index} className="flex flex-col gap-1">
              {message.from === "bot" ? (
                <DaegamiChatBubble>
                  {message.message}
                  {type === "region" && <ReselectButton />}
                </DaegamiChatBubble>
              ) : (
                <UserChatBubble>{message.message}</UserChatBubble>
              )}
            </div>
          );
        }

        if (message.type === "location") {
          return <RegionButtons key={index} />;
        }
        return null;
      })}
      {isLoading && (
        <p className="text-gray-500">⏳ 응답을 기다리는 중입니다...</p>
      )}
    </div>
  );
};
