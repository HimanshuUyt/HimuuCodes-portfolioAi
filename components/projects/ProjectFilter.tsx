"use client";

import { motion } from "framer-motion";
import { Grid3X3, Sparkles } from "lucide-react";

import {
  projectCategories,
  type ProjectCategory,
} from "./type";

interface ProjectFilterProps {
  selected: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
}

export default function ProjectFilter({
  selected,
  onChange,
}: ProjectFilterProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="mb-14 flex flex-wrap items-center justify-center gap-4"
    >
      {projectCategories.map((category) => {
        const isActive = selected === category;

        return (
          <motion.button
            key={category}
            type="button"
            whileHover={{
              y: -3,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => onChange(category)}
            className="group relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold backdrop-blur-xl transition-all duration-300"
            style={{
              border: isActive
                ? "1px solid var(--primary)"
                : "1px solid var(--border)",

              background: isActive
                ? "linear-gradient(135deg,var(--gradient-from),var(--gradient-to))"
                : "var(--glass)",

              color: isActive
                ? "#ffffff"
                : "var(--foreground)",

              boxShadow: isActive
                ? "0 10px 30px rgba(var(--primary-rgb),0.28)"
                : "var(--shadow)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {category === "All" && (
                <Grid3X3 size={16} />
              )}

              {category === "Featured" && (
                <Sparkles size={16} />
              )}

              {category}
            </span>

            {!isActive && (
              <motion.span
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "rgba(var(--primary-rgb),0.08)",
                }}
              />
            )}

            {isActive && (
              <motion.div
                layoutId="activeProjectFilter"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
                className="absolute inset-0 -z-10 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg,var(--gradient-from),var(--gradient-to))",
                }}
              />
            )}
          </motion.button>
        );
      })}
    </motion.div>
  );
}