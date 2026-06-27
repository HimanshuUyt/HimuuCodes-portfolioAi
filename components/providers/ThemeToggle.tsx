"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Monitor, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentIcon =
    theme === "system" ? (
      <Monitor className="h-5 w-5" />
    ) : resolvedTheme === "dark" ? (
      <Moon className="h-5 w-5" />
    ) : (
      <Sun className="h-5 w-5" />
    );

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 shadow-sm transition hover:bg-accent"
      >
        {currentIcon}

        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            <button
              onClick={() => {
                setTheme("light");
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-3 transition hover:bg-accent ${
                theme === "light"
                  ? "bg-accent text-primary"
                  : ""
              }`}
            >
              <Sun className="h-5 w-5 text-yellow-500" />
              <span>Light</span>
            </button>

            <button
              onClick={() => {
                setTheme("dark");
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-3 transition hover:bg-accent ${
                theme === "dark"
                  ? "bg-accent text-primary"
                  : ""
              }`}
            >
              <Moon className="h-5 w-5 text-blue-500" />
              <span>Dark</span>
            </button>

            <button
              onClick={() => {
                setTheme("system");
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-3 transition hover:bg-accent ${
                theme === "system"
                  ? "bg-accent text-primary"
                  : ""
              }`}
            >
              <Monitor className="h-5 w-5 text-emerald-500" />
              <span>System</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}