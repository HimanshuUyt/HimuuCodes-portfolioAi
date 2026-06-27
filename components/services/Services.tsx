"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
} from "lucide-react";

import ServiceCard, { Service } from "./ServiceCard";

const services: Service[] = [
  {
    id: 1,
    title: "Full Stack Development",
    description:
      "Modern, scalable web applications built with React, Next.js, Node.js, Express, MongoDB, and TypeScript. Optimized for speed, SEO, and performance.",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
    ],
  },
  {
    id: 2,
    title: "Flutter App Development",
    description:
      "Cross-platform Android and iOS applications with beautiful UI, clean architecture, Firebase integration, and smooth performance.",
    icon: Smartphone,
    color: "from-green-500 to-emerald-600",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "GetX",
      "REST API",
      "Hive",
    ],
  },
  {
    id: 3,
    title: "AI Solutions",
    description:
      "Custom AI chatbots, intelligent assistants, prompt engineering, automation, and AI-powered web & mobile applications.",
    icon: BrainCircuit,
    color: "from-orange-500 to-red-500",
    technologies: [
      "OpenAI",
      "Gemini",
      "Groq",
      "LangChain",
      "RAG",
      "Chatbots",
    ],
  },
  {
    id: 4,
    title: "Backend & APIs",
    description:
      "Secure backend systems, RESTful APIs, authentication, cloud integrations, databases, and scalable server architecture.",
    icon: Server,
    color: "from-purple-500 to-pink-600",
    technologies: [
      "Node.js",
      "Express",
      "JWT",
      "REST API",
      "Firebase",
      "Socket.IO",
    ],
  },
  {
    id: 5,
    title: "Database Design",
    description:
      "Well-structured databases with MongoDB, Firebase, and efficient data modeling for scalable applications.",
    icon: Database,
    color: "from-indigo-500 to-violet-600",
    technologies: [
      "MongoDB",
      "Firebase",
      "Mongoose",
      "SQL",
      "NoSQL",
    ],
  },
  {
    id: 6,
    title: "Website Deployment",
    description:
      "Deploy modern applications with CI/CD, domain configuration, SSL, cloud hosting, and production optimization.",
    icon: Globe,
    color: "from-pink-500 to-rose-600",
    technologies: [
      "Vercel",
      "Render",
      "Netlify",
      "Cloudinary",
      "GitHub",
      "Docker",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-bg relative overflow-hidden py-24 transition-colors duration-300"
    >
      {/* Background Glow */}

      <div
        className="absolute left-0 top-20 h-80 w-80 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--primary-rgb),0.12)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--accent-rgb),0.12)",
        }}
      />

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
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border px-4 py-2 text-sm font-medium"
            style={{
              borderColor: "rgba(var(--primary-rgb),0.25)",
              background: "rgba(var(--primary-rgb),0.08)",
              color: "var(--primary)",
            }}>
            My Services
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl"
            style={{
              color: "var(--foreground)",
            }}>
            What
            <span className="gradient-text">
              {" "}
              I Can Build
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8"
            style={{
              color: "var(--muted)",
            }}>
            I create modern digital products, AI-powered
            applications, mobile apps, and scalable backend
            systems with a strong focus on performance,
            security, and exceptional user experience.
          </p>
        </motion.div>

        {/* Services Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}

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
          className="glass mt-24 rounded-3xl p-10 text-center backdrop-blur-xl"
          style={{
            border: "1px solid rgba(var(--primary-rgb),0.2)",
            background: `
              linear-gradient(
                135deg,
                rgba(var(--primary-rgb),0.08),
                rgba(var(--secondary-rgb),0.06),
                rgba(var(--accent-rgb),0.08)
              )
            `,
          }}
        >
          <h3 className="text-3xl font-bold"
            style={{
              color: "var(--foreground)",
            }}>
            Have a Project in Mind? 🚀
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8"
            style={{
              color: "var(--muted)",
            }}>
            Whether it's a startup, portfolio, AI assistant,
            Flutter application, SaaS platform, or enterprise
            solution, I'm ready to help transform your ideas
            into high-quality digital products.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="btn-primary mt-8 rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(135deg,var(--gradient-from),var(--gradient-to))",
            }}
          >
            Let's Discuss Your Project
          </button>
        </motion.div>
      </div>

      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "var(--background)",
        }}
      />
    </section>
  );
}