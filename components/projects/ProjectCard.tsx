"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Star,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa6";



export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  onClick?: () => void;
}

export default function ProjectCard({
  project,
  index = 0,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.article onClick={onClick}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: {
          duration: 0.3,
        },
      }}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group card glass overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]"
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        {project.featured && (
          <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg"
            style={{
              background:
                "linear-gradient(135deg,var(--gradient-from),var(--gradient-to))",
            }}>
            <Star size={14} className="fill-current" />
            Featured
          </div>
        )}

        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100"
          style={{
            background: "rgba(0,0,0,.55)",
          }}>
          <Link
            href={project.github}
            target="_blank"
            className="glass flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
            style={{
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--glass)";
            }}
          >
            <FaGithub className="text-[22px] text-white" />
          </Link>

          <Link
            href={project.live}
            target="_blank"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl transition hover:bg-cyan-500"
          >
            <ExternalLink
              size={22}
              className="text-white"
            />
          </Link>
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold transition-colors duration-300"
            style={{
              color: "var(--foreground)",
            }}>
            {project.title}
          </h3>

          <ArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{
              color: "var(--primary)",
            }} />
        </div>

        <p className="mt-4 line-clamp-3 leading-7 text-[var(--muted)]">
          {project.description}
        </p>

        {/* Tags */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-xs font-medium transition-all duration-300"
              style={{
                border: "1px solid var(--border)",
                background: "rgba(var(--primary-rgb),0.08)",
                color: "var(--primary)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-3">
          <Link
            href={project.github}
            target="_blank"
            className="glass flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
            style={{
              color: "var(--foreground)",
            }}
          >
            <FaGithub className="text-lg" />
            GitHub
          </Link>

          <Link
            href={project.live}
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
            style={{
              background:
                "linear-gradient(135deg,var(--gradient-from),var(--gradient-to))",
            }}
          >
            <ExternalLink size={18} />
            Live Demo
          </Link>
        </div>
      </div>

      {/* Bottom Gradient */}

      <div
        className="h-1 w-0 transition-all duration-500 group-hover:w-full"
        style={{
          background:
            "linear-gradient(90deg,var(--gradient-from),var(--gradient-to),var(--accent))",
        }}
      />

    </motion.article>
  );
}