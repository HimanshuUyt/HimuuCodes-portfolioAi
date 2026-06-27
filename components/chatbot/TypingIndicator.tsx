"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

import { TypingIndicatorProps } from "./types";
import { QUICK_REPLIES } from "./constants";

export default function TypingIndicator({
  text = QUICK_REPLIES.loading,
}: TypingIndicatorProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 12,
      }}
      transition={{
        duration: 0.25,
      }}
      className="flex items-end gap-3"
    >
      {/* Avatar */}

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">
        <Bot
          size={20}
          className="text-white"
        />
      </div>

      {/* Bubble */}

      <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-sm font-semibold text-cyan-400">
            Himuu AI
          </span>

          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        </div>

        {/* Typing Animation */}

        <div className="flex items-center gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{
                y: [0, -5, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: dot * 0.15,
                ease: "easeInOut",
              }}
              className="h-2.5 w-2.5 rounded-full bg-cyan-400"
            />
          ))}
        </div>

        {/* Status */}

        <p className="mt-3 text-sm text-gray-400">
          {text}
        </p>
      </div>
    </motion.div>
  );
}