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
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40"
    >
      {/* Background Glow */}

      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
      />

      {/* Top */}

      <div className="relative z-10">
        <div
          className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}
        >
          <Icon
            size={30}
            className="text-white"
          />
        </div>

        <h3 className="mb-4 text-2xl font-bold text-white transition group-hover:text-cyan-400">
          {service.title}
        </h3>

        <p className="leading-8 text-gray-400">
          {service.description}
        </p>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Professional Service
          </span>

          <motion.div
            whileHover={{
              x: 5,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
          >
            <ArrowRight size={18} />
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}