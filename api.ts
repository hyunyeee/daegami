"use client";

interface ChatRequestPayload {
  category: string;
  // region: string;
  message: string;
}

interface ChatResponse {
  aiResponse: string;
}

export async function requestChatResponse(
  payload: ChatRequestPayload,
): Promise<ChatResponse> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`서버 오류: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("API 요청 실패:", error);
    throw error;
  }
}
