"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
  delay?: number;
}

export default function SkillCard({
  title,
  icon: Icon,
  color,
  skills,
  delay = 0,
}: SkillCardProps) {
  return (
    <motion.div
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
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
    >
      {/* Hover Glow */}

      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
      />

      {/* Icon */}

      <div
        className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${color} shadow-lg`}
      >
        <Icon
          size={30}
          className="text-white"
        />
      </div>

      {/* Title */}

      <h3 className="relative mb-6 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Skills */}

      <div className="relative flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{
              scale: 1.08,
            }}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Bottom Accent */}

      <div className="relative mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}