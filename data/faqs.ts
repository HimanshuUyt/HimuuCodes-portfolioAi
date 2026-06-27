// data/faqs.ts

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Services" | "Projects" | "Pricing" | "AI";
}

export const faqs: FAQ[] = [
  {
    id: "1",
    category: "General",
    question: "Who are you?",
    answer:
      "I'm Himanshu, a Full Stack AI Engineer specializing in Next.js, React, Flutter, Node.js, MongoDB, AI integrations, and modern web technologies.",
  },

  {
    id: "2",
    category: "General",
    question: "Are you available for freelance work?",
    answer:
      "Yes! I'm available for freelance projects, long-term collaborations, startup development, and consulting.",
  },

  {
    id: "3",
    category: "Services",
    question: "What services do you provide?",
    answer:
      "I provide Full Stack Web Development, Flutter App Development, AI Integration, AI Chatbots, Admin Dashboards, Backend APIs, UI/UX Development, and Deployment services.",
  },

  {
    id: "4",
    category: "Projects",
    question: "What technologies do you specialize in?",
    answer:
      "My core stack includes React, Next.js, TypeScript, Node.js, Express, MongoDB, Flutter, Firebase, Tailwind CSS, Framer Motion, Python, and Groq/OpenAI APIs.",
  },

  {
    id: "5",
    category: "Projects",
    question: "Can I see your previous work?",
    answer:
      "Absolutely! You can explore my portfolio projects, including MoneyFlow, AI Portfolio Assistant, Admin Dashboard, and several full-stack applications in the Projects section.",
  },

  {
    id: "6",
    category: "Pricing",
    question: "How much do your services cost?",
    answer:
      "Pricing depends on project scope, features, timeline, and complexity. Contact me with your requirements for a custom quotation.",
  },

  {
    id: "7",
    category: "Pricing",
    question: "Do you work with startups?",
    answer:
      "Yes. I enjoy collaborating with startups to build MVPs, SaaS platforms, AI products, dashboards, and mobile applications.",
  },

  {
    id: "8",
    category: "AI",
    question: "Can you build AI-powered applications?",
    answer:
      "Yes. I build AI chatbots, AI assistants, voice-enabled applications, prompt engineering solutions, and LLM integrations using Groq and OpenAI APIs.",
  },

  {
    id: "9",
    category: "AI",
    question: "Which AI models have you worked with?",
    answer:
      "I've integrated Groq (Llama models), OpenAI GPT models, and AI-powered assistants into web and mobile applications.",
  },

  {
    id: "10",
    category: "Services",
    question: "Do you provide post-launch support?",
    answer:
      "Yes. I provide maintenance, bug fixes, feature enhancements, optimization, and ongoing technical support after project delivery.",
  },

  {
    id: "11",
    category: "General",
    question: "How can I contact you?",
    answer:
      "You can reach me using the Contact section of this portfolio or through my email and LinkedIn profile.",
  },

  {
    id: "12",
    category: "Projects",
    question: "What is MoneyFlow?",
    answer:
      "MoneyFlow is my AI-powered personal finance application featuring expense tracking, budgeting, analytics, voice AI, notifications, and an admin dashboard.",
  },
];

export const faqCategories = [
  "All",
  "General",
  "Services",
  "Projects",
  "Pricing",
  "AI",
] as const;

export type FAQCategory = (typeof faqCategories)[number];

export const featuredFAQs = faqs.slice(0, 6);

export default faqs;