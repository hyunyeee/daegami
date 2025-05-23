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
      <br />
      {type === "region" ? (
        <>
          어떤 업종을 창업 할 예정이신가요? 자유롭게 대답해주세요.
          <div className="text-zinc-500 italic">
            <br />

            <p>&lt; example &gt; </p>
            <p>- 강북구 상권 분석해 줘 카페 하고 싶어</p>
            <p>- 국밥집 차리고 싶어 어떻게 생각해?</p>
            <p>- 망원동에서 수학학원 하려는데 어때?</p>
          </div>
        </>
      ) : (
        <div className="text-zinc-500 italic">
          <br />
          <p>&lt; example &gt; </p>
          <p>- 지금 창업하면 잘 될까?</p>
          <p>- 내년에 창업하는 거 어때?</p>
        </div>
      )}
    </DaegamiChatBubble>
  );
};
