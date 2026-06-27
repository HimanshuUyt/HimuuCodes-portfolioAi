"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Smartphone,
  Globe,
  Rocket,
  Award,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    value: "2+",
    label: "Years Experience",
  },
  {
    value: "25+",
    label: "Projects Completed",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
  },
];

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building scalable web applications using Next.js, React, Node.js, Express, and MongoDB.",
  },
  {
    icon: Smartphone,
    title: "Flutter Apps",
    description:
      "Developing cross-platform Android and iOS applications with clean architecture.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Creating intelligent applications powered by AI, chatbots, automation, and modern APIs.",
  },
  {
    icon: Globe,
    title: "Modern Web",
    description:
      "Fast, responsive, SEO-friendly websites with exceptional user experiences.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="hero-bg relative overflow-hidden py-24"
    >
      {/* Background Glow */}

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
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--primary)] backdrop-blur-xl">
            About Me
          </span>

          <h2 className="mt-6 text-4xl font-black text-[var(--foreground)] md:text-5xl ">
            Passionate About Building
            <span className="gradient-text"> Digital Experiences</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            I'm <strong className="text-[var(--foreground)]">Himuu Codes</strong>,
            a Full Stack Developer specializing in modern web
            applications, Flutter development, AI integration,
            and scalable backend systems. I love turning ideas
            into beautiful, high-performance digital products.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="card glass rounded-3xl p-8">
              <h3 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
                Who I Am
              </h3>

              <p className="mb-6 leading-8 text-[var(--muted)]">
                I specialize in building modern websites,
                mobile applications, AI-powered solutions,
                and scalable backend systems using the latest
                technologies.
              </p>

              <p className="mb-8 leading-8 text-gray-400">
                My focus is on clean architecture,
                responsive UI/UX, high performance,
                and creating products that deliver
                real value to users.
              </p>

              <div className="space-y-4">
                {[
                  "Modern UI/UX Design",
                  "Responsive Web Applications",
                  "Flutter Mobile Apps",
                  "REST API Development",
                  "AI Chatbots & Automation",
                  "Cloud Deployment",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[var(--primary)]"
                    />

                    <span className="text-[var(--foreground)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  key={item.title}
                  className="card glass rounded-3xl p-6">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl "
                    style={{
                      background:
                        "linear-gradient(135deg,var(--primary),var(--secondary))",
                    }}>
                    <Icon
                      size={26}
                      className="text-white"
                    />
                  </div>

                  <h4 className="mb-3 text-xl font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h4>

                  <p className="leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Statistics */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="card glass rounded-3xl p-8 text-center">
              <div className="mb-2 text-5xl font-black gradient-text">
                {item.value}
              </div>

              <p className="text-[var(--muted)]">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Banner */}

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
          transition={{ delay: 0.4 }}
          className="card glass mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl p-8 lg:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-[var(--foreground)]">
              Ready to Build Something Amazing?
            </h3>

            <p className="mt-2 text-[var(--muted)]">
              Let's collaborate and create modern,
              scalable, and AI-powered digital solutions.
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
            className="btn-primary px-8 py-4">
            <Rocket size={20} />
            Let's Work Together
          </button>
        </motion.div>
      </div>
    </section>
  );
}