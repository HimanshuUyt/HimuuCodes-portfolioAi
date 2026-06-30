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

    github: "https://github.com/HimanshuUyt/moneyflow-website",

    live: "https://moneyflow-website.vercel.app",

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

    title: "Old Portfolio Website",

    description:
      "Modern animated portfolio built with Next.js, Tailwind CSS, and Framer Motion.",

    longDescription:
      "A modern personal portfolio showcasing projects, skills, experience, certifications, and contact information with smooth animations and responsive layouts.",

    image: "/images/projects/oldportfolio.png",

    category: "Web",

    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github: "https://github.com/HimanshuUyt/portfolio",

    live: "https://portfolio-six-sand-mncruc6fu7.vercel.app/",

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

    title: "Voyage Venture Travel Website",

    description:
      "A modern travel booking platform for exploring destinations, booking tours, hotels, and vacation packages with a responsive user experience.",

    longDescription:
      "A full-stack travel booking website that allows users to browse destinations, search hotels and tour packages, make bookings, manage reservations, and securely authenticate. The platform features an intuitive interface, responsive design, and an admin panel for managing destinations, bookings, and customers.",

    image: "/images/projects/voyageventure.png",

    category: "Web",

    tags: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],

    github: "https://github.com/HimanshuUyt/MiniorProject",

    live: "https://voyageventure.onrender.com/",

    duration: "3 Months",

    role: "Full Stack Developer",

    features: [
      "Destination Search",
      "Hotel & Tour Booking",
      "Secure User Authentication",
      "Booking Management",
      "Responsive UI",
      "Admin Dashboard",
      "Wishlist & Favorites",
      "Contact & Inquiry System",
    ],

    challenges: [
      "Designed a scalable booking workflow for tours and hotels.",
      "Implemented secure authentication and booking management.",
      "Optimized MongoDB queries for faster destination searches.",
      "Built a fully responsive interface across all devices.",
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
      className="relative overflow-hidden py-24 transition-colors duration-500"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div
        className="absolute left-0 top-24 h-80 w-80 rounded-full blur-[140px]"
        style={{
          background: "rgba(var(--primary-rgb),0.10)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-[140px]"
        style={{
          background: "rgba(var(--accent-rgb),0.10)",
        }}
      />

      <div className="container-custom relative px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span
            className="rounded-full px-4 py-1 text-sm font-semibold"
            style={{
              border: "1px solid rgba(var(--primary-rgb),0.25)",
              background: "rgba(var(--primary-rgb),0.08)",
              color: "var(--primary)",
            }}
          >
            Portfolio
          </span>

          <h2
            className="mt-5 text-4xl font-black md:text-5xl"
            style={{
              color: "var(--foreground)",
            }}
          >
            Featured{" "}
            <span className="gradient-text">
              Projects
            </span>
          </h2>

          <p
            className="mt-5 text-lg leading-8"
            style={{
              color: "var(--muted)",
            }}
          >
            A collection of modern web, mobile and AI applications
            focused on beautiful UI, performance and real-world
            problem solving.
          </p>
        </motion.div>

        {/* Featured */}
        {featuredProject && (
          <div className="mb-20 transition-all duration-300">
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
          transition={{
            layout: {
              duration: 0.4,
            },
          }}
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
          <div
            className="py-20 text-center text-lg"
            style={{
              color: "var(--muted)",
            }}
          >
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

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(var(--primary-rgb),0.04), transparent)",
        }}
      />
    </section>

  );
}