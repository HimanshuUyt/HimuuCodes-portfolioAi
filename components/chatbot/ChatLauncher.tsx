"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageCircle, X } from "lucide-react";

import type { ChatLauncherProps } from "./types";

export default function ChatLauncher({
  isOpen,
  onToggle,
}: ChatLauncherProps) {
  return (
    <div className="fixed bottom-4 right-4 z-[100] md:bottom-6 md:right-6">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.button
            key="close"
            type="button"
            onClick={onToggle}
            initial={{
              scale: 0.7,
              rotate: -90,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1,
            }}
            exit={{
              scale: 0.7,
              rotate: 90,
              opacity: 0,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 90,
            }}
            whileTap={{
              scale: 0.94,
            }}
            transition={{
              duration: 0.25,
            }}
            aria-label="Close AI Chat"
            className="group flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl md:h-16 md:w-16"
            style={{
              background:
                "linear-gradient(135deg,var(--primary),var(--secondary))",
              boxShadow:
                "0 18px 45px rgba(var(--primary-rgb),0.35)",
            }}
          >
            <X className="h-7 w-7 transition-transform duration-300 group-hover:rotate-90" />
          </motion.button>
        ) : (
          <motion.button
            key="open"
            type="button"
            onClick={onToggle}
            initial={{
              scale: 0.7,
              rotate: 90,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1,
            }}
            exit={{
              scale: 0.7,
              rotate: -90,
              opacity: 0,
            }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.94,
            }}
            transition={{
              duration: 0.25,
            }}
            aria-label="Open AI Chat"
            className="group relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full text-white shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg,var(--primary),var(--secondary))",
              boxShadow:
                "0 18px 45px rgba(var(--primary-rgb),0.35)",
            }}
          >
            {/* Animated Ring */}

            <span
              className="absolute inset-0 animate-ping rounded-full border-2"
              style={{
                borderColor:
                  "rgba(var(--primary-rgb),0.45)",
              }}
            />

            {/* Glow */}

            <span
              className="absolute inset-0 rounded-full blur-xl"
              style={{
                background:
                  "rgba(var(--primary-rgb),0.20)",
              }}
            />

            {/* Icon */}

            <Bot className="relative h-7 w-7 transition duration-300 group-hover:scale-110 md:h-8 md:w-8" />

            {/* AI Badge */}

            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg,var(--accent),var(--secondary))",
              }}
            >
              AI
            </motion.div>

            {/* Tooltip */}

            <div
              className="pointer-events-none absolute right-20 whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium opacity-0 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:opacity-100"
              style={{
                borderColor: "var(--border)",
                background:
                  "color-mix(in srgb,var(--background) 90%, transparent)",
                color: "var(--foreground)",
              }}
            >
              Chat with AI
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Bubble */}

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
          className="absolute -left-44 bottom-4 hidden items-center gap-2 rounded-2xl border px-4 py-3 text-sm shadow-xl backdrop-blur-xl lg:flex"
          style={{
            borderColor: "var(--border)",
            background:
              "color-mix(in srgb,var(--background) 90%, transparent)",
            color: "var(--foreground)",
          }}
        >
          <MessageCircle
            className="h-4 w-4"
            style={{
              color: "var(--primary)",
            }}
          />

          Ask me anything!
        </motion.div>
      )}
    </div>
  );
}