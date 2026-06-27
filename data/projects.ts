// data/projects.ts

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;

  category:
    | "Featured"
    | "Web"
    | "Mobile"
    | "AI"
    | "Full Stack";

  image: string;
  gallery: string[];

  technologies: string[];

  features: string[];

  github?: string;
  live?: string;
  apk?: string;

  featured: boolean;

  status:
    | "Completed"
    | "In Progress"
    | "Production";

  year: string;
}

export const projects: Project[] = [
  {
    id: "moneyflow",

    title: "MoneyFlow",

    slug: "moneyflow",

    description:
      "AI-powered personal finance and expense tracking application.",

    longDescription:
      "MoneyFlow is a modern Flutter application that helps users manage income, expenses, budgets, analytics, and AI-powered financial insights. It includes Voice AI, smart budgeting, group expenses, notifications, reports, and an admin dashboard.",

    category: "Mobile",

    featured: true,

    status: "Production",

    year: "2025",

    image: "/projects/moneyflow/cover.png",

    gallery: [
      "/projects/moneyflow/1.png",
      "/projects/moneyflow/2.png",
      "/projects/moneyflow/3.png",
      "/projects/moneyflow/4.png",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "Groq AI",
      "REST API",
    ],

    features: [
      "AI Financial Assistant",
      "Voice AI",
      "Expense Tracking",
      "Income Tracking",
      "Analytics Dashboard",
      "Budget Planner",
      "Group Expenses",
      "Notifications",
      "Dark Mode",
    ],

    github: "https://github.com/yourusername/moneyflow",

    live: "https://moneyflow.vercel.app",

    apk: "https://your-domain.com/apk/moneyflow.apk",
  },

  {
    id: "portfolio",

    title: "Portfolio Website",

    slug: "portfolio",

    description:
      "Modern animated portfolio built with Next.js and AI.",

    longDescription:
      "A fully responsive developer portfolio showcasing projects, services, skills, blogs, and an AI assistant powered by Groq.",

    category: "Web",

    featured: true,

    status: "Production",

    year: "2025",

    image: "/projects/portfolio/cover.png",

    gallery: [
      "/projects/portfolio/1.png",
      "/projects/portfolio/2.png",
      "/projects/portfolio/3.png",
    ],

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Groq AI",
    ],

    features: [
      "Responsive UI",
      "Dark Mode",
      "AI Portfolio Assistant",
      "Animations",
      "SEO",
      "Performance Optimized",
    ],

    github: "https://github.com/yourusername/portfolio",

    live: "https://your-domain.com",
  },

  {
    id: "admin-dashboard",

    title: "MoneyFlow Admin",

    slug: "moneyflow-admin",

    description:
      "Complete admin dashboard for managing MoneyFlow.",

    longDescription:
      "An analytics dashboard built with Next.js for managing users, categories, expenses, reports, AI insights, and system monitoring.",

    category: "Full Stack",

    featured: true,

    status: "Completed",

    year: "2025",

    image: "/projects/admin/cover.png",

    gallery: [
      "/projects/admin/1.png",
      "/projects/admin/2.png",
      "/projects/admin/3.png",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "Charts",
    ],

    features: [
      "Dashboard",
      "User Management",
      "Reports",
      "Analytics",
      "Charts",
      "Authentication",
      "CRUD",
    ],

    github: "https://github.com/yourusername/moneyflow-admin",
  },

  {
    id: "ai-chatbot",

    title: "AI Portfolio Assistant",

    slug: "portfolio-ai",

    description:
      "AI chatbot trained on portfolio information.",

    longDescription:
      "A conversational AI assistant that answers questions about projects, experience, services, skills, and contact information using Groq Llama 3.3.",

    category: "AI",

    featured: false,

    status: "Production",

    year: "2025",

    image: "/projects/ai/cover.png",

    gallery: [
      "/projects/ai/1.png",
      "/projects/ai/2.png",
    ],

    technologies: [
      "Groq",
      "Llama 3",
      "Next.js",
      "TypeScript",
    ],

    features: [
      "Conversation Memory",
      "Markdown Support",
      "Voice Input",
      "Typing Indicator",
      "Suggested Questions",
    ],

    github: "https://github.com/yourusername/portfolio-ai",
  },

  {
    id: "ecommerce",

    title: "E-Commerce Platform",

    slug: "ecommerce",

    description:
      "Modern MERN stack shopping platform.",

    longDescription:
      "A complete e-commerce application featuring authentication, payments, orders, products, admin dashboard, and analytics.",

    category: "Full Stack",

    featured: false,

    status: "Completed",

    year: "2024",

    image: "/projects/ecommerce/cover.png",

    gallery: [
      "/projects/ecommerce/1.png",
      "/projects/ecommerce/2.png",
    ],

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe",
    ],

    features: [
      "Authentication",
      "Shopping Cart",
      "Payments",
      "Orders",
      "Admin Dashboard",
    ],

    github: "https://github.com/yourusername/ecommerce",
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);

export const projectCategories = [
  "All",
  "Featured",
  "Web",
  "Mobile",
  "AI",
  "Full Stack",
] as const;

export type ProjectCategory =
  (typeof projectCategories)[number];

export default projects;