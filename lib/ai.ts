// components/lib/ai.ts

export interface AIRequest {
  message: string;
  history?: {
    role: "user" | "assistant";
    content: string;
  }[];
}

export interface AIResponse {
  message: string;
}

const API_ENDPOINT = "/api/chat";

export async function askAI({
  message,
  history = [],
}: AIRequest): Promise<AIResponse> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        history,
      }),
    });

    if (!response.ok) {
      const error = await response.text();

      throw new Error(
        error || "Failed to communicate with AI."
      );
    }

    const data = await response.json();

    return {
      message:
        data.message ??
        "Sorry, I couldn't generate a response.",
    };
  } catch (error) {
    console.error("AI Error:", error);

    return {
      message:
        "⚠️ Sorry, something went wrong while contacting the AI. Please try again later.",
    };
  }
}