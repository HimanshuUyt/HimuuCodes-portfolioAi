"use client";

import SkillCategory from "./SkillCategory";
import TechStack from "./TechStack";

import {
  Brain,
  Cloud,
  Code2,
  Database,
  Palette,
  Smartphone,
} from "lucide-react";

const developmentSkills = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-purple-500 to-pink-600",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
    ],
  },
];

const mobileSkills = [
  {
    title: "Flutter",
    icon: Smartphone,
    color: "from-green-500 to-emerald-600",
    skills: [
      "Flutter",
      "Dart",
      "GetX",
      "Firebase",
    ],
  },
];

const aiSkills = [
  {
    title: "Artificial Intelligence",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    skills: [
      "OpenAI",
      "Gemini",
      "Groq",
      "LangChain",
      "RAG",
    ],
  },
];

const cloudSkills = [
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-indigo-500 to-violet-600",
    skills: [
      "Docker",
      "Git",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "UI / UX",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    skills: [
      "Figma",
      "Responsive Design",
      "Glassmorphism",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container-custom px-6">

        <SkillCategory
          title="Full Stack Development"
          subtitle="Modern frontend and backend technologies."
          items={developmentSkills}
        />

        <SkillCategory
          title="Mobile Development"
          subtitle="Cross-platform Flutter development."
          items={mobileSkills}
        />

        <SkillCategory
          title="Artificial Intelligence"
          subtitle="Building intelligent applications."
          items={aiSkills}
        />

        <SkillCategory
          title="Cloud & Design"
          subtitle="Deployment and UI/UX tools."
          items={cloudSkills}
        />

        <TechStack />

      </div>
    </section>
  );
}