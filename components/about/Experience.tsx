"use client";

import { motion } from "framer-motion";
import experiences from "@/data/experience";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="hero-bg relative overflow-hidden py-24"
    >
      <div
        className="absolute left-0 top-20 h-72 w-72 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--primary-rgb),0.12)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--accent-rgb),0.12)",
        }}
      />

      <div className="container-custom px-6">
        {/* Section Header */}

        <motion.div
          whileHover={{
            y: -6,
            scale: 1.01,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--primary)] backdrop-blur-xl">
            Experience
          </span>

          <h2 className="mt-6 text-4xl font-black text-[var(--foreground)] md:text-5xl">
            My Professional
            <span className="gradient-text"> Journey</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            My experience building modern applications,
            solving real-world problems, and continuously
            learning new technologies.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line */}

          <div className="absolute left-5 top-0 hidden h-full w-px md:block"
            style={{
              background:
                "linear-gradient(to bottom,var(--primary),var(--secondary),var(--accent))",
            }} />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                }}
                className="relative flex gap-8"
              >
                {/* Timeline Icon */}

                <div className="relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-lg md:flex"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--primary),var(--secondary))",
                  }}>
                  <Briefcase
                    size={18}
                    className="text-white"
                  />
                </div>

                {/* Card */}

                <div className="card glass w-full rounded-3xl p-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--foreground)]">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-lg text-[var(--primary)]">
                        {experience.company}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm text-[var(--muted)]">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        {experience.period}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-[var(--muted)]">
                    {experience.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-8 flex flex-wrap gap-3">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--primary)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--primary)] hover:bg-[rgba(var(--primary-rgb),0.08)]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}

                  <div className="mt-8 space-y-4">
                    {experience.achievements.map(
                      (achievement) => (
                        <div
                          key={achievement}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={20}
                            className="mt-1 shrink-0 text-[var(--primary)]"
                          />

                          <p className="text-[var(--foreground)]">
                            {achievement}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}