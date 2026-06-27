// lib/constants.ts

/* -------------------------------------------------------------------------- */
/*                                Portfolio Info                              */
/* -------------------------------------------------------------------------- */

export const SITE = {
  name: "Himuu Codes",
  title: "Himuu Codes | Full Stack AI Engineer",
  description:
    "Portfolio of Himanshu - Full Stack Developer, AI Engineer, MERN Stack & Flutter Developer.",
  url: "https://your-domain.com",
  email: "your@email.com",
  phone: "+91 XXXXX XXXXX",
  location: "India",
};

/* -------------------------------------------------------------------------- */
/*                                   Chatbot                                  */
/* -------------------------------------------------------------------------- */

export const CHATBOT = {
  name: "Himuu AI",
  description: "Your personal AI portfolio assistant.",
  endpoint: "/api/chat",
  placeholder: "Ask me anything about my projects, skills or experience...",
  maxMessageLength: 1000,
  historyKey: "himuu-ai-chat-history",
};

/* -------------------------------------------------------------------------- */
/*                                Social Links                                */
/* -------------------------------------------------------------------------- */

export const SOCIALS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
  email: "mailto:your@email.com",
};

/* -------------------------------------------------------------------------- */
/*                                Navigation                                  */
/* -------------------------------------------------------------------------- */

export const NAV_ITEMS = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Contact",
    href: "#contact",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                                Animations                                  */
/* -------------------------------------------------------------------------- */

export const ANIMATION = {
  duration: 0.4,
  stagger: 0.1,
  spring: {
    type: "spring",
    stiffness: 200,
    damping: 20,
  },
};

/* -------------------------------------------------------------------------- */
/*                                Theme                                       */
/* -------------------------------------------------------------------------- */

export const COLORS = {
  primary: "#06B6D4",
  secondary: "#3B82F6",
  accent: "#8B5CF6",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
};

/* -------------------------------------------------------------------------- */
/*                              Skills                                         */
/* -------------------------------------------------------------------------- */

export const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Flutter",
  "Firebase",
  "Tailwind CSS",
  "Framer Motion",
  "Python",
  "AI",
] as const;

/* -------------------------------------------------------------------------- */
/*                              SEO                                            */
/* -------------------------------------------------------------------------- */

export const SEO = {
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "MERN Stack",
    "Next.js Developer",
    "Flutter Developer",
    "Portfolio",
  ],

  author: "Himanshu",

  creator: "Himanshu",
};

/* -------------------------------------------------------------------------- */
/*                               Miscellaneous                                */
/* -------------------------------------------------------------------------- */

export const MAX_WIDTH = "1280px";

export const LOADER_DURATION = 3000;

export const COPYRIGHT = `© ${new Date().getFullYear()} Himuu Codes. All rights reserved.`;