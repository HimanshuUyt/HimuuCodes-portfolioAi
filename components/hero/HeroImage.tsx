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
      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[100px]" />

      {/* Decorative Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[440px] w-[440px] rounded-full border border-cyan-500/20 border-dashed"
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
        <div className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 shadow-[0_0_80px_rgba(6,182,212,.25)]">
          <div className="rounded-full bg-[#030712] p-2">
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
          <div className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-xl">
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
        <div className="absolute left-0 top-1/2 h-3 w-3 rounded-full bg-cyan-400" />
        <div className="absolute right-0 top-1/2 h-3 w-3 rounded-full bg-blue-500" />
        <div className="absolute left-1/2 top-0 h-3 w-3 rounded-full bg-purple-500" />
        <div className="absolute bottom-0 left-1/2 h-3 w-3 rounded-full bg-cyan-300" />
      </motion.div>
    </div>
  );
}