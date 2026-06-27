"use client";

import { motion } from "framer-motion";
import education from "@/data/education";
import { CheckCircle2 } from "lucide-react";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
  BookOpen,
  BadgeCheck,
} from "lucide-react";


const certifications = [
  "Full Stack Web Development",
  "Flutter App Development",
  "MongoDB Fundamentals",
  "Node.js & Express",
  "Firebase Development",
  "Artificial Intelligence",
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container-custom px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Education
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Learning Never
            <span className="gradient-text"> Stops</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            My academic journey and continuous learning through
            certifications help me stay up to date with modern
            technologies and best practices.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:block" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
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

                <div className="relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 md:flex">
                  <GraduationCap
                    size={18}
                    className="text-white"
                  />
                </div>

                {/* Card */}

                <div className="glass w-full rounded-3xl p-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-lg text-cyan-400">
                        {item.institution}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        {item.startYear} - {item.endYear}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-gray-400">
                    {item.description}
                  </p>

                  <div className="mt-8">
                    <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                      <BookOpen size={20} />
                      Core Subjects
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {item.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}

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
            delay: 0.2,
          }}
          className="glass mt-20 rounded-3xl p-8"
        >
          <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <Award className="text-cyan-400" />
            Certifications & Learning
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certificate) => (
              <motion.div
                whileHover={{
                  y: -5,
                }}
                key={certificate}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40"
              >
                <BadgeCheck
                  size={22}
                  className="shrink-0 text-cyan-400"
                />

                <span className="text-gray-300">
                  {certificate}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}