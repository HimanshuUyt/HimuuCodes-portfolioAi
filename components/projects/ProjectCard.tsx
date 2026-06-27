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
      whileHover={{
        y: -10,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        {project.featured && (
          <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 text-xs font-semibold text-black">
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

        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <Link
            href={project.github}
            target="_blank"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl transition hover:bg-cyan-500"
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
          <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-400">
            {project.title}
          </h3>

          <ArrowUpRight className="text-cyan-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        <p className="mt-4 line-clamp-3 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Tags */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
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
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <FaGithub className="text-lg" />
            GitHub
          </Link>

          <Link
            href={project.live}
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
          >
            <ExternalLink size={18} />
            Live Demo
          </Link>
        </div>
      </div>

      {/* Bottom Gradient */}

      <div className="h-1 w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}