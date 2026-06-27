"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiOpenai,
} from "react-icons/si";

const technologies = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#ffffff",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#47C5FB",
  },
  {
    name: "Dart",
    icon: SiDart,
    color: "#0175C2",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#ffffff",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#ffffff",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#ffffff",
  },
  {
    name: "OpenAI",
    icon: SiOpenai,
    color: "#10A37F",
  },
];

export default function TechStack() {
  const items = [...technologies, ...technologies];

  return (
    <section
      className="section-bg relative overflow-hidden py-20 transition-colors duration-300"
    >
      {/* Header */}

      <motion.div
        whileHover={{
          scale: 1.08,
          y: -6,
          borderColor: "var(--primary)",
        }}
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <span className="rounded-full border px-4 py-2 text-sm font-medium"
          style={{
            borderColor: "rgba(var(--primary-rgb),0.25)",
            background: "rgba(var(--primary-rgb),0.08)",
            color: "var(--primary)",
          }}>
          Tech Stack
        </span>

        <h2 className="mt-6 text-4xl font-black md:text-5xl"
          style={{
            color: "var(--foreground)",
          }}>
          Tools &
          <span className="gradient-text"> Technologies</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8"
          style={{
            color: "var(--muted)",
          }}>
          These are the technologies I use to build modern,
          scalable, high-performance web, mobile, and AI
          applications.
        </p>
      </motion.div>

      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32"
        style={{
          background:
            "linear-gradient(to right,var(--background),transparent)",
        }} />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32"
        style={{
          background:
            "linear-gradient(to left,var(--background),transparent)",
        }} />

      {/* Marquee */}

      <div className="overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-6 py-2"
        >
          {items.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{
                  scale: 1.08,
                  y: -6,
                }}
                className="glass group flex items-center gap-4 rounded-2xl px-6 py-4 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <Icon
                  size={32}
                  style={{
                    color: tech.color,
                  }}
                />

                <span className="whitespace-nowrap text-lg font-semibold"
                  style={{
                    color: "var(--foreground)",
                  }}>
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}