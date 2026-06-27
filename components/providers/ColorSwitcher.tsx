"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";

import { useAccent } from "./ThemeProvider";

const accentColors = [
  {
    id: "blue",
    name: "Ocean Blue",
    from: "#06b6d4",
    to: "#2563eb",
  },
  {
    id: "purple",
    name: "Purple",
    from: "#8b5cf6",
    to: "#d946ef",
  },
  {
    id: "emerald",
    name: "Emerald",
    from: "#10b981",
    to: "#22c55e",
  },
  {
    id: "rose",
    name: "Rose",
    from: "#f43f5e",
    to: "#ec4899",
  },
  {
    id: "orange",
    name: "Orange",
    from: "#f97316",
    to: "#ef4444",
  },
  {
    id: "amber",
    name: "Amber",
    from: "#f59e0b",
    to: "#eab308",
  },
  {
    id: "cyan",
    name: "Cyan",
    from: "#22d3ee",
    to: "#0891b2",
  },
  {
    id: "pink",
    name: "Pink",
    from: "#ec4899",
    to: "#8b5cf6",
  },
] as const;

interface ColorSwitcherProps {
  onSelect?: () => void;
}

export default function ColorSwitcher({onSelect,}: ColorSwitcherProps) {
  const { accent, setAccent } = useAccent();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition hover:bg-accent"
        aria-label="Change Accent Color"
      >
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Palette className="h-5 w-5 text-[var(--primary)]" />
        </motion.div>
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
            className="absolute right-0 mt-3 w-72 rounded-3xl border border-[var(--border)] bg-[var(--card)]/95 p-5 backdrop-blur-2xl shadow-2xl"
          >
            <h3 className="mb-4 text-sm font-semibold">
              Accent Color
            </h3>

            <div className="grid grid-cols-4 gap-3">
              {accentColors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => {
                    setAccent(color.id);
                    setOpen(false);
                    onSelect?.();
                  }}
                  title={color.name}
                  className={`relative h-12 w-12 rounded-full transition hover:scale-110 ${accent === color.id
                      ? "ring-2 ring-[var(--primary)] ring-offset-2"
                      : ""
                    }`}
                  style={{
                    background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
                  }}
                >
                  {accent === color.id && (
                    <Check className="absolute inset-0 m-auto h-5 w-5 text-white" />
                  )}
                </button>
              ))}
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Your preference is saved automatically.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}