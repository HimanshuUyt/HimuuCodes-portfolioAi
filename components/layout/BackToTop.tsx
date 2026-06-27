"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white shadow-2xl backdrop-blur-xl transition-all hover:border-cyan-400/50"
        >
          {/* Glow */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />

          {/* Button Background */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <ArrowUp
            size={22}
            className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}