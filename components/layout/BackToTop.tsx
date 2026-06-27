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
          type="button"
          aria-label="Back to Top"
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
            y: -5,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
            group
            fixed
            bottom-6
            right-6
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--card)]
            text-[var(--foreground)]
            shadow-xl
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-[var(--primary)]
            hover:shadow-2xl
          "
        >
          {/* Glow */}

          <span
            className="
              absolute
              inset-0
              rounded-full
              opacity-0
              blur-2xl
              transition-opacity
              duration-300
              group-hover:opacity-60
            "
            style={{
              background:
                "linear-gradient(135deg,var(--primary),var(--secondary))",
            }}
          />

          {/* Hover Background */}

          <span
            className="
              absolute
              inset-0
              rounded-full
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
            style={{
              background:
                "linear-gradient(135deg, rgba(var(--primary-rgb),0.12), rgba(var(--secondary-rgb),0.12))",
            }}
          />

          {/* Border Glow */}

          <span
            className="
              absolute
              inset-0
              rounded-full
              border
              border-transparent
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
            style={{
              borderColor: "rgba(var(--primary-rgb),0.35)",
            }}
          />

          <ArrowUp
            size={22}
            className="
              relative
              z-10
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:text-[var(--primary)]
            "
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}