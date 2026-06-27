"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck2,
  Clock3,
  Globe2,
  CheckCircle2,
  Zap,
} from "lucide-react";

const availability = [
  {
    icon: CheckCircle2,
    title: "Available for Freelance",
    description:
      "Open to freelance projects, startup collaborations, and long-term partnerships.",
  },
  {
    icon: Clock3,
    title: "Fast Response",
    description:
      "I usually reply to emails and messages within 24 hours.",
  },
  {
    icon: Globe2,
    title: "Remote Worldwide",
    description:
      "Working remotely with clients across different countries and time zones.",
  },
];

export default function Availability() {
  return (
    <section
      id="availability"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="container-custom relative z-10 px-6">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            <CalendarCheck2 size={18} />
            Availability
          </div>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Let's Build Something
            <span className="gradient-text"> Amazing</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I'm always interested in exciting opportunities,
            innovative ideas, AI projects, and modern web &
            mobile applications.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-3">
          {availability.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600">
                  <Icon
                    size={30}
                    className="text-white"
                  />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}

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
            delay: 0.3,
          }}
          className="mt-20 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-400">
                <Zap size={16} />
                Currently Accepting New Projects
              </div>

              <h3 className="text-3xl font-black text-white">
                Have an idea?
              </h3>

              <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                Whether you need a portfolio, SaaS platform,
                AI chatbot, Flutter application, business
                website, or a complete full-stack solution,
                let's discuss how we can build it together.
              </p>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}