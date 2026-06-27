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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Chat Window */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            transition={{
              duration: 0.25,
            }}
            className={`fixed inset-0 z-[999] md:inset-auto ${positionClass}`}
          >
            <div className="relative h-full w-full md:h-auto md:w-auto">
              {/* Close Button */}

              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-white shadow-xl transition hover:rotate-90 hover:bg-red-500 md:-right-3 md:-top-3">
                <X size={18} />
              </button>

              <ChatWindow />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}