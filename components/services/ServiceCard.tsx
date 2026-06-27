"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  technologies: string[];
}

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({
  service,
  index = 0,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.article
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
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="group card glass relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
      style={{
        border: "1px solid var(--border)",
      }}
    >
      {/* Background Glow */}

      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(var(--primary-rgb),0.12), transparent 70%)",
        }}
      />

      {/* Top */}

      <div className="relative z-10">
        <div
          className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
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

        <h3 className="mb-4 text-2xl font-bold transition-colors duration-300"
          style={{
            color: "var(--foreground)",
          }}>
          {service.title}
        </h3>

        <p className="leading-8 text-[var(--muted)]">
          {service.description}
        </p>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full px-3 py-1 text-xs font-medium transition-all duration-300"
              style={{
                border: "1px solid var(--border)",
                background: "rgba(var(--primary-rgb),0.08)",
                color: "var(--primary)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-wider"
            style={{
              color: "var(--muted)",
            }}>
            Professional Service
          </span>

          <motion.div
            whileHover={{
              x: 5,
            }}
            className="glass flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300"
            style={{
              color: "var(--primary)",
              border: "1px solid var(--border)",
            }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}

      <div
        className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
        style={{
          background:
            "linear-gradient(90deg,var(--gradient-from),var(--gradient-to),var(--accent))",
        }}
      />
    </motion.article>
  );
}