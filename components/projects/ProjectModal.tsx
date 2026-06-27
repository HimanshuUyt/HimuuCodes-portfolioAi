"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Calendar,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export interface ProjectModalData {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  features?: string[];
  challenges?: string[];
  duration?: string;
  role?: string;
}

interface ProjectModalProps {
  project: ProjectModalData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 backdrop-blur-md"
            style={{
              background: "rgba(0,0,0,.65)",
            }}
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 26,
            }}
            className="glass fixed left-1/2 top-1/2 z-[60] max-h-[90vh] w-[95%] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl shadow-2xl transition-all duration-300"
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="glass absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              style={{
                color: "var(--foreground)",
              }}
            >
              <X size={22} />
            </button>

            <div className="max-h-[90vh] overflow-y-auto">
              {/* Hero Image */}

              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={700}
                  className="h-[320px] w-full object-cover"
                />

                <div className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top,var(--background),rgba(0,0,0,.25),transparent)",
                  }} />

                <div className="absolute bottom-8 left-8">
                  <h2 className="text-4xl font-black text-[var(--foreground)]">
                    {project.title}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-sm border"
                        style={{
                          background: "rgba(var(--primary-rgb),0.08)",
                          borderColor: "var(--border)",
                          color: "var(--primary)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}

              <div className="space-y-10 p-8">
                {/* Description */}

                <div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">
                    Project Overview
                  </h3>

                  <p className="leading-8 text-[var(--muted)]">
                    {project.longDescription ??
                      project.description}
                  </p>
                </div>

                {/* Info */}

                <div className="grid gap-6 md:grid-cols-2">
                  {project.duration && (
                    <div className="glass rounded-2xl p-6 transition-all duration-300">
                      <div className="mb-3 flex items-center gap-3 text-cyan-400">
                        <Calendar size={20} />
                        <span className="font-semibold">
                          Duration
                        </span>
                      </div>

                      <p className="text-gray-300">
                        {project.duration}
                      </p>
                    </div>
                  )}

                  {project.role && (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <div className="mb-3 flex items-center gap-3"
                        style={{
                          color: "var(--primary)",
                        }}>
                        <Code2 size={20} />
                        <span className="font-semibold">
                          Role
                        </span>
                      </div>

                      <p className="text-[var(--foreground)]">
                        {project.role}
                      </p>
                    </div>
                  )}
                </div>

                {/* Features */}

                {project.features &&
                  project.features.length > 0 && (
                    <div>
                      <h3 className="mb-6 text-2xl font-bold text-white">
                        Key Features
                      </h3>

                      <div className="grid gap-4 md:grid-cols-2">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="glass flex items-start gap-3 rounded-xl p-4 transition-all duration-300"
                          >
                            <CheckCircle2
                              size={20}
                              className="mt-0.5 shrink-0"
                              style={{
                                color: "var(--primary)",
                              }}
                            />

                            <span className="text-[var(--foreground)]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Challenges */}

                {project.challenges &&
                  project.challenges.length > 0 && (
                    <div>
                      <h3 className="mb-6 text-2xl font-bold text-white">
                        Challenges & Solutions
                      </h3>

                      <div className="space-y-4">
                        {project.challenges.map((challenge) => (
                          <div
                            key={challenge}
                            className="glass rounded-xl p-5 text-[var(--foreground)]"
                          >
                            {challenge}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Buttons */}

                <div className="flex flex-wrap gap-4 pt-8"
                  style={{
                    borderTop: "1px solid var(--border)",
                  }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex items-center gap-3 rounded-xl px-6 py-4 font-semibold transition-all duration-300 hover:-translate-y-1"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    <FaGithub className="text-xl" />
                    View Source Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--gradient-from),var(--gradient-to))",
                    }}
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}