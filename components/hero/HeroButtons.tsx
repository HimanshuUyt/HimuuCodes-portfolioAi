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
        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all"
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
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all hover:border-cyan-400 hover:bg-cyan-500/10"
        >
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
        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-7 py-4 font-semibold text-cyan-300 transition-all hover:bg-cyan-500/20"
      >
        <Mail size={18} />
        Contact Me
      </motion.button>
    </motion.div>
  );
}