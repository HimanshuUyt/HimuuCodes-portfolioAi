"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-11 w-11 rounded-full border border-white/10 bg-white/5" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
    >
      <motion.div
        key={resolvedTheme}
        initial={{ rotate: -180, opacity: 0, scale: 0.4 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 180 }}
        transition={{
          duration: 0.35,
        }}
      >
        {isDark ? (
          <Sun
            size={20}
            className="text-yellow-400"
          />
        ) : (
          <Moon
            size={20}
            className="text-slate-800 dark:text-slate-200"
          />
        )}
      </motion.div>

      <span className="absolute inset-0 rounded-full bg-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.button>
  );
}