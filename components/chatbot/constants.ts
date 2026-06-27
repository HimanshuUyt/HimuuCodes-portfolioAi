// components/chatbot/constants.ts

import { SuggestedQuestion } from "./types";

/* -------------------------------------------------------------------------- */
/*                                Chat Config                                 */
/* -------------------------------------------------------------------------- */

export const CHATBOT_NAME = "Himuu AI";

export const CHATBOT_DESCRIPTION =
  "Your personal AI portfolio assistant.";

export const API_ENDPOINT = "/api/chat";

export const STORAGE_KEY = "himuu-ai-chat-history";

export const MAX_MESSAGE_LENGTH = 1000;

export const TYPING_DELAY = 800;

export const AUTO_SCROLL_DELAY = 100;

export const PLACEHOLDER =
  "Ask me about my skills, projects, experience...";

/* -------------------------------------------------------------------------- */
/*                              Welcome Message                               */
/* -------------------------------------------------------------------------- */

export const WELCOME_MESSAGE = `
👋 Hello! I'm Himuu AI.

I'm here to answer questions about Himuu Codes.

You can ask me about:

• 👨‍💻 My experience
• 🚀 My projects
• 🛠️ Technologies I use
• 🤖 AI & Flutter development
• 📄 Resume
• 📬 Contact information

How can I help you today?
`.trim();

/* -------------------------------------------------------------------------- */
/*                           Suggested Questions                              */
/* -------------------------------------------------------------------------- */

export const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  {
    id: "1",
    text: "Tell me about yourself",
  },
  {
    id: "2",
    text: "Show your projects",
  },
  {
    id: "3",
    text: "What technologies do you use?",
  },
  {
    id: "4",
    text: "Do you build Flutter apps?",
  },
  {
    id: "5",
    text: "Can you build AI applications?",
  },
  {
    id: "6",
    text: "What services do you offer?",
  },
  {
    id: "7",
    text: "Show your experience",
  },
  {
    id: "8",
    text: "How can I hire you?",
  },
];

/* -------------------------------------------------------------------------- */
/*                            Portfolio Knowledge                             */
/* -------------------------------------------------------------------------- */

export const PORTFOLIO_INFO = {
  name: "Himuu Codes",

  role: "Full Stack AI Developer",

  location: "India",

  email: "himuucodes@gmail.com",

  website: "https://your-domain.com",

  github: "https://github.com/yourusername",

  linkedin: "https://linkedin.com/in/yourusername",

  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Flutter",
    "Firebase",
    "AI",
    "OpenAI",
    "Gemini",
    "Groq",
    "Tailwind CSS",
    "Framer Motion",
  ],
};

/* -------------------------------------------------------------------------- */
/*                             Quick Replies                                  */
/* -------------------------------------------------------------------------- */

export const QUICK_REPLIES = {
  greeting:
    "Hello! 👋 How can I help you today?",

  thanks:
    "You're welcome! 😊",

  unknown:
    "I'm not sure about that yet. Try asking about my projects, skills, or experience.",

  loading:
    "Thinking... 🤔",
};