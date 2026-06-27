"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageCircle, X } from "lucide-react";

import type { ChatLauncherProps } from "./types";

export default function ChatLauncher({
  isOpen,
  onToggle,
}: ChatLauncherProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.button
            key="close"
            type="button"
            onClick={onToggle}
            initial={{ scale: 0.7, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.7, rotate: 90, opacity: 0 }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.94,
            }}
            transition={{
              duration: 0.25,
            }}
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-2xl shadow-red-500/30"
            aria-label="Close AI Chat"
          >
            <X className="h-7 w-7 transition-transform duration-300 group-hover:rotate-90" />
          </motion.button>
        ) : (
          <motion.button
            key="open"
            type="button"
            onClick={onToggle}
            initial={{ scale: 0.7, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.7, rotate: -90, opacity: 0 }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.94,
            }}
            transition={{
              duration: 0.25,
            }}
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/30"
            aria-label="Open AI Chat"
          >
            {/* Animated Ring */}
            <span className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-ping" />

            {/* Glow */}
            <span className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl" />

            {/* Icon */}
            <Bot className="relative h-8 w-8 transition-transform duration-300 group-hover:scale-110" />

            {/* Notification Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.4,
              }}
              className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-lg"
            >
              AI
            </motion.div>

            {/* Tooltip */}
            <div className="pointer-events-none absolute right-20 whitespace-nowrap rounded-xl border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100">
              Chat with AI
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Message Bubble */}
      {!isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
          className="absolute -left-44 bottom-4 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-md lg:flex lg:items-center lg:gap-2"
        >
          <MessageCircle className="h-4 w-4 text-cyan-400" />
          Ask me anything!
        </motion.div>
      )}
    </div>
  );
}