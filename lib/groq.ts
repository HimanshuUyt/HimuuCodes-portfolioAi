import Groq from "groq-sdk";

const apiKey = process.env.GROQ_API_KEY;

if (!apiKey) {
  throw new Error("Missing GROQ_API_KEY environment variable.");
}

export const groq = new Groq({
  apiKey,
});

export const DEFAULT_MODEL = "llama-3.3-70b-versatile";

export async function generateAIResponse(
  prompt: string,
  systemPrompt?: string
): Promise<string> {
  const completion = await groq.chat.completions.create({
    model: DEFAULT_MODEL,
    temperature: 0.7,
    max_tokens: 1024,
    messages: [
      {
        role: "system",
        content:
          systemPrompt ??
          `You are Himuu AI, the AI assistant for a personal portfolio.

Answer only questions related to:
- Portfolio
- Skills
- Experience
- Projects
- Technologies
- Education
- Contact
- Freelancing
- Career

If someone asks unrelated questions, politely say you are a portfolio assistant.`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return (
    completion.choices[0]?.message?.content ??
    "Sorry, I couldn't generate a response."
  );
}