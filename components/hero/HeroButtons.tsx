"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

export default function HeroButtons() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.4,
        duration: 0.6,
      }}
      className="mt-10 flex flex-wrap items-center gap-4"
    >
      {/* View Projects */}

      <motion.button
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={scrollToProjects}
        className="btn-primary group px-7 py-4"
      >
        View Projects

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </motion.button>

      {/* Resume */}

      <motion.div
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
      >
        <Link
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-4 font-semibold text-[var(--foreground)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-lg">
          <Download size={18} />
          Download Resume
        </Link>
      </motion.div>

      {/* Contact */}

      <motion.button
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={scrollToContact}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-4 font-semibold text-[var(--primary)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--primary)] hover:bg-[rgba(var(--primary-rgb),0.08)] hover:shadow-lg">
        <Mail size={18} />
        Contact Me
      </motion.button>
    </motion.div>
  );
}