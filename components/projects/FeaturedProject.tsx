"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export interface FeaturedProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}

export default function FeaturedProject({
  title,
  description,
  image,
  tags,
  github,
  live,
}: FeaturedProjectProps) {
  return (
    <motion.section
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
        duration: 0.6,
      }}
      className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl"
    >
      {/* Background Glow */}

      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative grid items-center gap-10 lg:grid-cols-2">
        {/* Image */}

        <div className="group relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={900}
            height={650}
            className="h-full min-h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          {/* Badge */}

          <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            <Sparkles size={16} />
            Featured Project
          </div>
        </div>

        {/* Content */}

        <div className="p-8 lg:p-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Premium Project
          </span>

          <h2 className="mt-4 text-4xl font-black text-white">
            {title}
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            {description}
          </p>

          {/* Tech Stack */}

          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={github}
              target="_blank"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <FaGithub className="text-xl" />
              Source Code
            </Link>

            <Link
              href={live}
              target="_blank"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition hover:scale-105"
            >
              <ExternalLink size={20} />
              Live Demo
            </Link>
          </div>

          {/* Bottom */}

          <div className="mt-10 flex items-center gap-2 text-cyan-400">
            <ArrowUpRight size={18} />
            <span className="font-medium">
              Modern • Responsive • High Performance
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}