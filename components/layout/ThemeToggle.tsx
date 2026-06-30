"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-11 w-11 animate-pulse rounded-full border"
        style={{
          borderColor: "var(--border)",
          background: "var(--card)",
        }}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      aria-label="Toggle Theme"
      whileHover={{
        scale: 1.08,
        rotate: 8,
      }}
      whileTap={{
        scale: 0.9,
        rotate: -8,
      }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border backdrop-blur-xl shadow-lg transition-all duration-300"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      {/* Hover Glow */}

      <motion.span
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "rgba(var(--primary-rgb),0.12)",
        }}
      />

      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{
              rotate: -180,
              opacity: 0,
              scale: 0.3,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              rotate: 180,
              opacity: 0,
              scale: 0.3,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative z-10"
          >
            <Sun
              size={20}
              style={{
                color: "var(--primary)",
                fill: "var(--primary)",
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{
              rotate: 180,
              opacity: 0,
              scale: 0.3,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              rotate: -180,
              opacity: 0,
              scale: 0.3,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative z-10"
          >
            <Moon
              size={20}
              style={{
                color: "var(--primary)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}