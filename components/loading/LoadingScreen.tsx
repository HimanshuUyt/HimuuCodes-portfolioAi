"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-colors duration-500"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute -left-32 -top-32 h-80 w-80 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--primary-rgb),0.18)",
        }}
      />

      <div
        className="absolute -right-32 -bottom-32 h-80 w-80 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--accent-rgb),0.18)",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Animated Ring */}
        <div className="relative flex h-32 w-32 items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: "var(--primary)",
              borderRightColor: "var(--secondary)",
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="glass flex h-20 w-20 items-center justify-center rounded-full"
          >
            <span className="text-2xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                H
              </span>
            </span>
          </motion.div>
        </div>

        {/* Brand */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-4xl font-black tracking-wide"
        >
          <motion.span
            animate={{
              rotate: [0, 8, -8, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="gradient-text text-2xl font-black"
          >
            Himuu
          </motion.span>
          <span
            style={{
              color: "var(--foreground)",
            }}
          >
            Codes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-sm tracking-[0.3em] uppercase"
          style={{
            color: "var(--muted)",
          }}
        >
          Building Amazing Experiences...
        </motion.p>

        {/* Progress Bar */}
        <div className="mt-10 h-1.5 w-72 overflow-hidden rounded-full"
          style={{
            background: "var(--border)",
          }}>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 rounded-full"
            style={{
              background:
                "linear-gradient(90deg,var(--gradient-from),var(--gradient-to),var(--accent))",
            }}
          />
        </div>

        {/* Loading Dots */}
        <div className="mt-8 flex gap-2">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -8, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="h-3 w-3 rounded-full"
              style={{
                background: "var(--primary)",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}