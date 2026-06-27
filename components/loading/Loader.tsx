"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

const sizes = {
  sm: {
    spinner: "h-5 w-5 border-2",
    text: "text-sm",
  },
  md: {
    spinner: "h-8 w-8 border-[3px]",
    text: "text-base",
  },
  lg: {
    spinner: "h-12 w-12 border-4",
    text: "text-lg",
  },
};

export default function Loader({
  size = "md",
  text,
  fullScreen = false,
}: LoaderProps) {
  const current = sizes[size];

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-4 transition-colors duration-500",
        fullScreen && "fixed inset-0 z-50 backdrop-blur-xl"
      )}
      style={
        fullScreen
          ? {
              background: "rgba(var(--primary-rgb),0.04)",
            }
          : undefined
      }
    >
      <div className="relative">
        {/* Animated Glow */}

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--primary-rgb),0.45), transparent 70%)",
          }}
        />

        {/* Spinner */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className={clsx(
            current.spinner,
            "relative rounded-full border-transparent"
          )}
          style={{
            borderTopColor: "var(--primary)",
            borderRightColor: "var(--secondary)",
            borderBottomColor: "rgba(var(--primary-rgb),0.15)",
            borderLeftColor: "rgba(var(--primary-rgb),0.15)",
          }}
        />
      </div>

      {text && (
        <motion.p
          initial={{
            opacity: 0,
            y: 5,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className={clsx(
            current.text,
            "font-medium tracking-wide transition-colors duration-300"
          )}
          style={{
            color: "var(--muted)",
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}