"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import SkillCard from "./SkillCard";

export interface SkillItem {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
}

interface SkillCategoryProps {
  title: string;
  subtitle?: string;
  items: SkillItem[];
}

export default function SkillCategory({
  title,
  subtitle,
  items,
}: SkillCategoryProps) {
  return (
    <section className="section-bg py-12 transition-colors duration-300">
      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h3
          className="text-3xl font-bold"
          style={{
            color: "var(--foreground)",
          }}
        >
          {title}
        </h3>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-4 h-1 rounded-full"
          style={{
            background:
              "linear-gradient(90deg,var(--gradient-from),var(--gradient-to))",
          }}
        />

        {subtitle && (
          <p
            className="mx-auto mt-4 max-w-2xl leading-8"
            style={{
              color: "var(--muted)",
            }}
          >
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <SkillCard
            key={item.title}
            title={item.title}
            icon={item.icon}
            color={item.color}
            skills={item.skills}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section >
  );
}