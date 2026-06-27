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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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
            className={`relative overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "border-cyan-400 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                : "border-white/10 bg-white/5 text-gray-300 backdrop-blur-xl hover:border-cyan-400/40 hover:text-white"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {category === "All" && <Grid3X3 size={16} />}
              {category === "Featured" && <Sparkles size={16} />}
              <span>{category}</span>
            </span>

            {isActive && (
              <motion.div
                layoutId="activeProjectFilter"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
              />
            )}
          </motion.button>
        );
      })}
    </motion.div>
  );
}