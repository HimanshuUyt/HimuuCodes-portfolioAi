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
      whileHover={{
        y: -6,
        scale: 1.01,
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
        duration: 0.6,
      }}
      className="card glass relative overflow-hidden rounded-3xl transition-all duration-300 hover:border-[var(--primary)]"
    >
      {/* Background Glow */}

      <div
        className="absolute -left-20 -top-20 h-72 w-72 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--primary-rgb),0.12)",
        }}
      />

      <div
        className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--accent-rgb),0.12)",
        }}
      />

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

          <div className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,.45), transparent)",
            }} />

          {/* Badge */}

          <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg"
            style={{
              background:
                "linear-gradient(135deg,var(--gradient-from),var(--gradient-to))",
            }}>
            <Sparkles size={16} />
            Featured Project
          </div>
        </div>

        {/* Content */}

        <div className="p-8 lg:p-10">
          <span className="text-sm font-semibold uppercase tracking-widest"
            style={{
              color: "var(--primary)",
            }}>
            Premium Project
          </span>

          <h2 className="mt-4 text-4xl font-black text-[var(--foreground)]">
            {title}
          </h2>

          <p className="mt-6 leading-8 text-[var(--muted)]">
            {description}
          </p>

          {/* Tech Stack */}

          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:border-[var(--primary)]"
                style={{
                  color: "var(--primary)",
                }}
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
              className="glass inline-flex items-center gap-3 rounded-xl px-6 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
              style={{
                color: "var(--foreground)",
              }}
            >
              <FaGithub className="text-xl" />
              Source Code
            </Link>

            <Link
              href={live}
              target="_blank"
              className="inline-flex items-center gap-3 rounded-xl px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg,var(--gradient-from),var(--gradient-to))",
              }}
            >
              <ExternalLink size={20} />
              Live Demo
            </Link>
          </div>

          {/* Bottom */}

          <div className="mt-10 flex items-center gap-2"
            style={{
              color: "var(--primary)",
            }}>
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