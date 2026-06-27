"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Glow */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
          background:
            "linear-gradient(90deg,var(--primary),var(--secondary),var(--accent))",
          boxShadow:
            "0 0 18px rgba(var(--primary-rgb),0.55), 0 0 35px rgba(var(--primary-rgb),0.35)",
        }}
        className="fixed left-0 top-0 z-[9999] h-1 w-full rounded-full"
      />

      {/* Thin Highlight */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
          background: "rgba(255,255,255,.35)",
        }}
        className="fixed left-0 top-0 z-[9998] h-[2px] w-full rounded-full opacity-60"
      />
    </>
  );
}