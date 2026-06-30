"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import ChatWindow from "./ChatWindow";

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "bottom-right" | "bottom-left";
}

export default function AIChat({
  isOpen,
  onClose,
  position = "bottom-right",
}: AIChatProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const positionClass =
    position === "bottom-left"
      ? "md:left-6 md:bottom-6"
      : "md:right-6 md:bottom-6";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-md dark:bg-black/60"
          />

          {/* Chat */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className={`fixed inset-0 z-[999] md:inset-auto ${positionClass}`}
          >
            <div className="relative h-full w-full md:h-auto md:w-auto transition-all duration-300">
              {/* Close */}

              <button
                onClick={onClose}
                aria-label="Close AI Chat"
                className="
                  absolute
                  right-4
                  top-4
                  md:-right-3
                  md:-top-3
                  z-50
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  shadow-xl
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:rotate-90
                  hover:scale-105
                "
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <X size={18} />
              </button>

              {/* Accent Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-10
                  -top-10
                  h-40
                  w-40
                  rounded-full
                  blur-3xl
                  opacity-20
                "
                style={{
                  background:
                    "radial-gradient(circle,var(--primary),transparent)",
                }}
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-10
                  -right-10
                  h-40
                  w-40
                  rounded-full
                  blur-3xl
                  opacity-20
                "
                style={{
                  background:
                    "radial-gradient(circle,var(--secondary),transparent)",
                }}
              />

              <ChatWindow onClose={onClose} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}