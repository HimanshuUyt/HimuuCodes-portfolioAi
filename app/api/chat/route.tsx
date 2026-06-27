import { NextRequest, NextResponse } from "next/server";

import { generateAIResponse } from "@/lib/groq";
import { buildPrompt } from "@/lib/prompts";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      message,
      history = [],
    }: {
      message: string;
      history?: {
        role: "user" | "assistant";
        content: string;
      }[];
    } = body;

    if (!message || !message.trim()) {
      return NextResponse.json(
        {
          message: "Message is required.",
        },
        {
          status: 400,
        }
      );
    }

    const prompt = buildPrompt(
      message,
      history
    );

    const response = await generateAIResponse(
      prompt
    );

    return NextResponse.json({
      success: true,
      message: response,
    });
  } catch (error) {
    console.error("Chat API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Sorry, something went wrong while processing your request.",
      },
      {
        status: 500,
      }
    );
  }
}