"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { type ProjectCategory } from "./type";
import ProjectModal from "./ProjectModal";

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  github: string;
  live: string;
  featured?: boolean;
  features?: string[];
  challenges?: string[];
  duration?: string;
  role?: string;
};

const projects: ProjectType[] = [
  {
    id: 1,
    title: "MoneyFlow",
    description:
      "AI-powered personal finance application built with Flutter, Node.js, Express, MongoDB, and Firebase.",

    longDescription:
      "MoneyFlow is a complete AI-powered personal finance management application that helps users track expenses, manage budgets, analyze spending, receive AI insights, and collaborate in groups. It includes Firebase Authentication, real-time analytics, AI Chat Assistant, Voice AI, notifications, and a powerful admin dashboard.",

    image: "/images/projects/moneyflow.png",

    category: "Mobile",

    tags: [
      "Flutter",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "GetX",
    ],

    github: "https://github.com/yourusername/moneyflow",

    live: "https://moneyflow.vercel.app",

    featured: true,

    duration: "6 Months",

    role: "Full Stack Developer",

    features: [
      "AI Financial Assistant",
      "Expense & Income Tracking",
      "Budget Planning",
      "Analytics Dashboard",
      "Voice AI",
      "Group Expense Split",
      "Push Notifications",
      "Firebase Authentication",
    ],

    challenges: [
      "Implemented AI-powered financial insights using Groq API.",
      "Built real-time expense synchronization.",
      "Designed responsive Flutter UI for Android and iOS.",
    ],
  },

  {
    id: 2,

    title: "Portfolio Website",

    description:
      "Modern animated portfolio built with Next.js, Tailwind CSS, and Framer Motion.",

    longDescription:
      "A modern personal portfolio showcasing projects, skills, experience, certifications, and contact information with smooth animations and responsive layouts.",

    image: "/projects/portfolio.webp",

    category: "Web",

    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github: "https://github.com/yourusername/portfolio",

    live: "https://portfolio.vercel.app",

    duration: "2 Months",

    role: "Frontend Developer",

    features: [
      "Dark / Light Theme",
      "Animated UI",
      "Project Showcase",
      "Responsive Design",
      "SEO Optimized",
    ],

    challenges: [
      "Created reusable animated components.",
      "Optimized performance and Lighthouse score.",
    ],
  },

  {
    id: 3,

    title: "Admin Dashboard",

    description:
      "Responsive analytics dashboard with charts, authentication, and user management.",

    longDescription:
      "A complete admin panel for managing users, transactions, reports, analytics, categories, and system settings with role-based authentication.",

    image: "/projects/dashboard.webp",

    category: "Web",

    tags: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
    ],

    github: "https://github.com/yourusername/dashboard",

    live: "https://dashboard.vercel.app",

    duration: "3 Months",

    role: "Full Stack Developer",

    features: [
      "Dashboard Analytics",
      "Charts & Reports",
      "Authentication",
      "Role Management",
      "Responsive Design",
    ],

    challenges: [
      "Created scalable dashboard architecture.",
      "Implemented secure JWT authentication.",
    ],
  },

  {
    id: 4,

    title: "AI Chat Assistant",

    description:
      "AI chatbot powered by Groq API with conversation history and smart responses.",

    longDescription:
      "An AI-powered chatbot capable of remembering conversations, answering finance-related questions, and providing intelligent recommendations using LLM APIs.",

    image: "/projects/ai-chat.webp",

    category: "AI",

    tags: [
      "Next.js",
      "Groq",
      "MongoDB",
      "Tailwind CSS",
      "AI",
    ],

    github: "https://github.com/yourusername/ai-chat",

    live: "https://ai-chat.vercel.app",

    duration: "1 Month",

    role: "AI Engineer",

    features: [
      "Conversation Memory",
      "Streaming Responses",
      "Markdown Support",
      "Authentication",
      "Dark Mode",
    ],

    challenges: [
      "Integrated Groq LLM API.",
      "Managed chat history efficiently.",
    ],
  },
];


export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const filteredProjects = useMemo(() => {
    switch (activeFilter) {
      case "All":
        return projects;

      case "Featured":
        return projects.filter(
          (project) => project.featured
        );

      default:
        return projects.filter(
          (project) =>
            project.category === activeFilter
        );
    }
  }, [activeFilter]);

  const featuredProject = projects.find((p) => p.featured);

  return (
    <section
      id="projects"
      className="relative py-24"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Portfolio
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 text-muted-foreground">
            A collection of modern web, mobile and AI applications
            focused on beautiful UI, performance and real-world
            problem solving.
          </p>
        </motion.div>

        {/* Featured */}
        {featuredProject && (
          <div className="mb-20">
            <div
              onClick={() =>
                setSelectedProject(featuredProject)
              }
              className="cursor-pointer"
            >
              <FeaturedProject
                title={featuredProject.title}
                description={featuredProject.description}
                image={featuredProject.image}
                tags={featuredProject.tags}
                github={featuredProject.github}
                live={featuredProject.live}
              />
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mb-12 flex justify-center">
          <ProjectFilter
            selected={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects
            .filter((p) => !p.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() =>
                  setSelectedProject(project)
                }
              />
            ))}
        </motion.div>

        {/* Empty */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No projects found.
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}