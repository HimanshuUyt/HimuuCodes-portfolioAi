"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  {
    name: "Next.js",
    className: "top-8 -left-8",
    duration: 4,
  },
  {
    name: "React",
    className: "top-28 -right-10",
    duration: 5,
  },
  {
    name: "Flutter",
    className: "bottom-24 -left-10",
    duration: 4.5,
  },
  {
    name: "Node.js",
    className: "bottom-8 right-0",
    duration: 5.5,
  },
  {
    name: "AI",
    className: "top-1/2 -right-16",
    duration: 4.8,
  },
];

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background Glow */}
      <div
        className="absolute h-[420px] w-[420px] rounded-full blur-[100px]"
        style={{
          background: "rgba(var(--primary-rgb),0.18)",
        }}
      />

      {/* Decorative Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[440px] w-[440px] rounded-full border border-dashed"
        style={{
          borderColor: "rgba(var(--primary-rgb),0.25)",
        }}
      />

      {/* Floating Profile */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Gradient Border */}
        <div
          className="rounded-full p-1"
          style={{
            background:
              "linear-gradient(135deg,var(--primary),var(--secondary),var(--accent))",
            boxShadow:
              "0 0 80px rgba(var(--primary-rgb),0.25)",
          }}
        >
          <div className="rounded-full border border-[var(--border)] bg-[var(--card)] p-2 backdrop-blur-xl">
            <Image
              src="/images/hero/profile.png"
              alt="Himuu Codes"
              width={420}
              height={420}
              priority
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating Tech Badges */}
      {techStack.map((tech) => (
        <motion.div
          key={tech.name}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: tech.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${tech.className}`}
        >
          <div className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2 text-sm font-medium text-[var(--foreground)] backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]">
            {tech.name}
          </div>
        </motion.div>
      ))}

      {/* Decorative Dots */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[500px] w-[500px]"
      >
        <div
          className="absolute left-0 top-1/2 h-3 w-3 rounded-full"
          style={{
            background: "var(--primary)",
          }}
        />

        <div
          className="absolute right-0 top-1/2 h-3 w-3 rounded-full"
          style={{
            background: "var(--secondary)",
          }}
        />

        <div
          className="absolute left-1/2 top-0 h-3 w-3 rounded-full"
          style={{
            background: "var(--accent)",
          }}
        />

        <div
          className="absolute bottom-0 left-1/2 h-3 w-3 rounded-full"
          style={{
            background: "var(--primary)",
          }}
        />
      </motion.div>
    </div>
  );
}