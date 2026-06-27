// data/chatbot.ts

export interface SuggestedQuestion {
  id: string;
  question: string;
}

export interface ChatbotKnowledge {
  name: string;
  role: string;
  description: string;

  skills: string[];
  services: string[];
  technologies: string[];
  projects: string[];
  contact: {
    email: string;
    website: string;
    github: string;
    linkedin: string;
  };
}

export const chatbotKnowledge: ChatbotKnowledge = {
  name: "Himuu AI",

  role: "AI Portfolio Assistant",

  description:
    "An intelligent AI assistant that answers questions about Himanshu's portfolio, projects, experience, skills, and services.",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Flutter",
    "Firebase",
    "Python",
    "Tailwind CSS",
    "Framer Motion",
    "REST API",
    "AI Integration",
    "Prompt Engineering",
    "Groq",
    "OpenAI",
  ],

  services: [
    "Full Stack Web Development",
    "Flutter App Development",
    "AI Chatbot Development",
    "AI Integration",
    "Admin Dashboard Development",
    "Portfolio Website Development",
    "Backend API Development",
    "UI / UX Development",
  ],

  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "Flutter",
    "Dart",
    "Groq",
    "OpenAI",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "GitHub",
    "Vercel",
    "Render",
  ],

  projects: [
    "MoneyFlow",
    "MoneyFlow Admin Dashboard",
    "Portfolio Website",
    "AI Portfolio Assistant",
    "E-Commerce Platform",
  ],

  contact: {
    email: "your@email.com",
    website: "https://your-domain.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};

export const suggestedQuestions: SuggestedQuestion[] = [
  {
    id: "1",
    question: "👋 Tell me about yourself",
  },
  {
    id: "2",
    question: "🚀 What projects have you built?",
  },
  {
    id: "3",
    question: "💼 What services do you offer?",
  },
  {
    id: "4",
    question: "⚛️ What technologies do you use?",
  },
  {
    id: "5",
    question: "🤖 Tell me about MoneyFlow",
  },
  {
    id: "6",
    question: "📱 Do you develop Flutter apps?",
  },
  {
    id: "7",
    question: "🧠 Can you build AI applications?",
  },
  {
    id: "8",
    question: "💻 What is your tech stack?",
  },
  {
    id: "9",
    question: "📂 Show your featured projects",
  },
  {
    id: "10",
    question: "📊 Tell me about your experience",
  },
  {
    id: "11",
    question: "🎓 What is your education?",
  },
  {
    id: "12",
    question: "📞 How can I contact you?",
  },
  {
    id: "13",
    question: "💰 Are you available for freelance work?",
  },
  {
    id: "14",
    question: "🌍 Where are you located?",
  },
  {
    id: "15",
    question: "📄 Can I download your resume?",
  },
];

export const quickReplies = [
  "Tell me about yourself",
  "Projects",
  "Skills",
  "Experience",
  "Services",
  "MoneyFlow",
  "Flutter",
  "Next.js",
  "AI",
  "Contact",
];

export const welcomeMessages = [
  "👋 Hello! I'm Himuu AI.",
  "How can I help you today?",
  "Ask me anything about my projects, skills, or experience.",
];

export default {
  chatbotKnowledge,
  suggestedQuestions,
  quickReplies,
  welcomeMessages,
};