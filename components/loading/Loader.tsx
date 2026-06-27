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
        "flex flex-col items-center justify-center gap-4",
        fullScreen && "fixed inset-0 z-50 bg-[#030712]/80 backdrop-blur-md"
      )}
    >
      <div className="relative">
        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full bg-cyan-500 blur-xl"
        />

        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className={clsx(
            current.spinner,
            "relative rounded-full border-cyan-400 border-t-transparent border-r-blue-500"
          )}
        />
      </div>

      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={clsx(
            current.text,
            "font-medium tracking-wide text-gray-300"
          )}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}