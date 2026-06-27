// data/services.ts

import {
  Brain,
  Globe,
  Smartphone,
  Database,
  Bot,
  LayoutDashboard,
  Palette,
  Rocket,
  LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;

  icon: LucideIcon;

  color: string;

  technologies: string[];

  features: string[];

  startingPrice?: string;

  duration?: string;

  featured: boolean;
}

export const services: Service[] = [
  {
    id: "web-development",

    title: "Full Stack Web Development",

    shortDescription:
      "Modern, scalable and responsive web applications.",

    description:
      "Build high-performance websites and full-stack applications using React, Next.js, Node.js, Express, and MongoDB.",

    icon: Globe,

    color: "#06B6D4",

    featured: true,

    startingPrice: "$300+",

    duration: "1-6 Weeks",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],

    features: [
      "Responsive Design",
      "SEO Optimized",
      "Authentication",
      "REST APIs",
      "Dashboard",
      "Performance Optimization",
    ],
  },

  {
    id: "mobile",

    title: "Flutter App Development",

    shortDescription:
      "Cross-platform Android & iOS applications.",

    description:
      "Develop beautiful Flutter applications with Firebase, REST APIs, AI integration, and clean architecture.",

    icon: Smartphone,

    color: "#3B82F6",

    featured: true,

    startingPrice: "$400+",

    duration: "2-8 Weeks",

    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Node.js",
      "REST API",
    ],

    features: [
      "Material UI",
      "Authentication",
      "Push Notifications",
      "Dark Mode",
      "Offline Storage",
      "Analytics",
    ],
  },

  {
    id: "ai",

    title: "AI Integration",

    shortDescription:
      "Integrate AI into your website or application.",

    description:
      "Build AI-powered assistants, chatbots, automation tools, and intelligent features using modern LLM APIs.",

    icon: Brain,

    color: "#8B5CF6",

    featured: true,

    startingPrice: "$250+",

    duration: "3-10 Days",

    technologies: [
      "Groq",
      "OpenAI",
      "Llama",
      "Prompt Engineering",
      "Node.js",
    ],

    features: [
      "Chatbots",
      "AI Assistants",
      "Prompt Engineering",
      "Streaming Responses",
      "Conversation Memory",
      "Voice AI",
    ],
  },

  {
    id: "dashboard",

    title: "Admin Dashboard",

    shortDescription:
      "Powerful admin panels with analytics and reports.",

    description:
      "Build secure admin dashboards for managing users, products, reports, analytics, and system monitoring.",

    icon: LayoutDashboard,

    color: "#10B981",

    featured: true,

    startingPrice: "$350+",

    duration: "2-5 Weeks",

    technologies: [
      "Next.js",
      "Charts",
      "MongoDB",
      "Authentication",
    ],

    features: [
      "Analytics",
      "User Management",
      "Reports",
      "Charts",
      "CRUD",
      "Authentication",
    ],
  },

  {
    id: "backend",

    title: "Backend Development",

    shortDescription:
      "Secure APIs and scalable backend architecture.",

    description:
      "Develop REST APIs, authentication systems, database architecture, and cloud-ready backend services.",

    icon: Database,

    color: "#F97316",

    featured: false,

    startingPrice: "$200+",

    duration: "1-4 Weeks",

    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "JWT",
    ],

    features: [
      "REST APIs",
      "Authentication",
      "Database Design",
      "Cloud Deployment",
      "API Documentation",
    ],
  },

  {
    id: "chatbot",

    title: "AI Chatbot Development",

    shortDescription:
      "Custom AI chatbot for business and portfolio.",

    description:
      "Create intelligent AI chatbots using Groq, OpenAI, and custom prompts tailored to your products and services.",

    icon: Bot,

    color: "#EC4899",

    featured: false,

    startingPrice: "$200+",

    duration: "3-7 Days",

    technologies: [
      "Groq",
      "OpenAI",
      "Next.js",
      "TypeScript",
    ],

    features: [
      "Custom Knowledge Base",
      "Markdown Support",
      "Voice Input",
      "Streaming",
      "Memory",
    ],
  },

  {
    id: "uiux",

    title: "UI / UX Design",

    shortDescription:
      "Modern interfaces focused on user experience.",

    description:
      "Design elegant, accessible, and responsive interfaces with smooth animations and modern design systems.",

    icon: Palette,

    color: "#F59E0B",

    featured: false,

    startingPrice: "$150+",

    duration: "2-10 Days",

    technologies: [
      "Figma",
      "Tailwind CSS",
      "Framer Motion",
    ],

    features: [
      "Responsive UI",
      "Dark Mode",
      "Animations",
      "Accessibility",
      "Design System",
    ],
  },

  {
    id: "deployment",

    title: "Deployment & DevOps",

    shortDescription:
      "Deploy and maintain production-ready applications.",

    description:
      "Deploy applications to Vercel, Render, Firebase, and cloud servers with CI/CD workflows and monitoring.",

    icon: Rocket,

    color: "#EF4444",

    featured: false,

    startingPrice: "$100+",

    duration: "1-3 Days",

    technologies: [
      "Vercel",
      "Render",
      "Firebase",
      "GitHub",
    ],

    features: [
      "CI/CD",
      "Domain Setup",
      "SSL",
      "Performance",
      "Monitoring",
    ],
  },
];

export const featuredServices = services.filter(
  (service) => service.featured
);

export default services;