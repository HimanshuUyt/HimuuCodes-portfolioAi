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
      className="glass group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
      style={{
        borderColor: "var(--border)",
      }}
    >
      {/* Hover Glow */}

      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(var(--primary-rgb),0.12),
              transparent 70%
            )
          `,
        }}
      />

      {/* Icon */}

      <div
        className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
        style={{
          background:
            "linear-gradient(135deg,var(--gradient-from),var(--gradient-to))",
        }}
      >
        <Icon
          size={30}
          className="text-white"
        />
      </div>

      {/* Title */}

      <h3 className="relative mb-6 text-2xl font-bold"
        style={{
          color: "var(--foreground)",
        }}>
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
            className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
            style={{
              border: "1px solid var(--border)",
              background: "var(--glass)",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--primary)";
              e.currentTarget.style.background =
                "rgba(var(--primary-rgb),0.10)";
              e.currentTarget.style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "var(--glass)";
              e.currentTarget.style.color = "var(--foreground)";
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Bottom Accent */}

      <div className="relative mt-8 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{
          background:
            "linear-gradient(90deg,var(--gradient-from),var(--gradient-to))",
        }} />
    </motion.div>
  );
}