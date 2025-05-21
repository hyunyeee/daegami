import { Intro } from "@/components/chat/Intro";
import { DaegamiChatBubble } from "@/components/chat/DaegamiChatBubble";
import { UserChatBubble } from "@/components/chat/UserChatBubble";
import { useTypeStore } from "../../../store/type";
import { useChatStore } from "../../../store/chat";
import { useLoadingStore } from "../../../store/useLoadingStore";

export const ChatList = () => {
  const { type } = useTypeStore();
  const { isLoading } = useLoadingStore();

  const messages = useChatStore((state) => state.messages);

  return (
    <div className="flex flex-col gap-8">
      <Intro type={type} />
      {messages.map((message, index) => (
        <div key={index} className="flex flex-col gap-1">
          <>
            {message.from === "bot" && (
              <DaegamiChatBubble>{message.message}</DaegamiChatBubble>
            )}

            {message.from === "user" && (
              <UserChatBubble>{message.message}</UserChatBubble>
            )}
          </>
        </div>
      ))}
      {isLoading && (
        <p className="text-gray-500">⏳ 응답을 기다리는 중입니다...</p>
      )}
    </div>
  );
};
