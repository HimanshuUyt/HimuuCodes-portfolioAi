// data/skills.ts

export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Building beautiful, responsive and interactive user interfaces.",
    skills: [
      {
        name: "React",
        level: 95,
        icon: "⚛️",
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        level: 95,
        icon: "▲",
        color: "#FFFFFF",
      },
      {
        name: "TypeScript",
        level: 92,
        icon: "TS",
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        level: 95,
        icon: "JS",
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        level: 96,
        icon: "🎨",
        color: "#38BDF8",
      },
      {
        name: "HTML5",
        level: 98,
        icon: "🌐",
        color: "#E34F26",
      },
      {
        name: "CSS3",
        level: 96,
        icon: "🎯",
        color: "#1572B6",
      },
      {
        name: "Framer Motion",
        level: 90,
        icon: "🎬",
        color: "#FF0080",
      },
    ],
  },

  {
    id: "backend",
    title: "Backend Development",
    description:
      "Developing secure, scalable and high-performance APIs.",
    skills: [
      {
        name: "Node.js",
        level: 93,
        icon: "🟢",
        color: "#339933",
      },
      {
        name: "Express.js",
        level: 92,
        icon: "🚀",
        color: "#FFFFFF",
      },
      {
        name: "MongoDB",
        level: 90,
        icon: "🍃",
        color: "#47A248",
      },
      {
        name: "Firebase",
        level: 90,
        icon: "🔥",
        color: "#FFCA28",
      },
      {
        name: "REST API",
        level: 95,
        icon: "🔗",
        color: "#2563EB",
      },
      {
        name: "JWT",
        level: 88,
        icon: "🔐",
        color: "#F59E0B",
      },
    ],
  },

  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Building modern Android and cross-platform applications.",
    skills: [
      {
        name: "Flutter",
        level: 94,
        icon: "💙",
        color: "#02569B",
      },
      {
        name: "Dart",
        level: 92,
        icon: "🎯",
        color: "#0175C2",
      },
      {
        name: "Android",
        level: 85,
        icon: "🤖",
        color: "#3DDC84",
      },
    ],
  },

  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "Integrating modern AI models into real-world applications.",
    skills: [
      {
        name: "OpenAI API",
        level: 90,
        icon: "🤖",
        color: "#10A37F",
      },
      {
        name: "Groq API",
        level: 92,
        icon: "⚡",
        color: "#8B5CF6",
      },
      {
        name: "Prompt Engineering",
        level: 95,
        icon: "🧠",
        color: "#06B6D4",
      },
      {
        name: "AI Chatbots",
        level: 92,
        icon: "💬",
        color: "#6366F1",
      },
      {
        name: "Python",
        level: 88,
        icon: "🐍",
        color: "#3776AB",
      },
    ],
  },

  {
    id: "tools",
    title: "Tools & DevOps",
    description:
      "Development workflow, deployment and collaboration tools.",
    skills: [
      {
        name: "Git",
        level: 95,
        icon: "📦",
        color: "#F05032",
      },
      {
        name: "GitHub",
        level: 95,
        icon: "🐙",
        color: "#FFFFFF",
      },
      {
        name: "Vercel",
        level: 90,
        icon: "▲",
        color: "#FFFFFF",
      },
      {
        name: "Render",
        level: 88,
        icon: "☁️",
        color: "#7C3AED",
      },
      {
        name: "Postman",
        level: 92,
        icon: "📮",
        color: "#FF6C37",
      },
      {
        name: "VS Code",
        level: 99,
        icon: "💻",
        color: "#007ACC",
      },
    ],
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Flutter",
  "Dart",
  "Tailwind CSS",
  "Framer Motion",
  "Groq",
  "OpenAI",
  "Python",
  "Git",
  "GitHub",
  "Vercel",
];

export default skillCategories;