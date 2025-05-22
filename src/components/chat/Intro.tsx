import { TypeKey } from "@/types";
import { getLabel } from "@/utils/utils";
import { DaegamiChatBubble } from "@/components/chat/DaegamiChatBubble";

interface IntroProps {
  type: TypeKey;
}

export const Intro = ({ type }: IntroProps) => {
  return (
    <DaegamiChatBubble>
      안녕하세요!{" "}
      <b
        className={`${type === "region" ? "text-green-button" : "text-beige-accent"}`}
      >
        {getLabel(type)}
      </b>{" "}
      상담을 도와드리겠습니다.
    </DaegamiChatBubble>
  );
};
