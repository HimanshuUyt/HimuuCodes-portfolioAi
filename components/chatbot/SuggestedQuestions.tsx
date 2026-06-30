"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { SUGGESTED_QUESTIONS } from "./constants";
import { SuggestedQuestionsProps } from "./types";

export default function SuggestedQuestions({
  onSelect,
}: SuggestedQuestionsProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="border-t px-4 py-4 backdrop-blur-xl"
      style={{
        borderColor: "var(--border)",
        background:
          "color-mix(in srgb, var(--background) 85%, transparent)",
      }}
    >
      {/* Header */}

      <div className="mb-3 flex items-center gap-2">
        <Sparkles
          size={16}
          style={{
            color: "var(--primary)",
          }}
        />

        <span
          className="text-sm font-semibold"
          style={{
            color: "var(--primary)",
          }}
        >
          Suggested Questions
        </span>
      </div>

      {/* Questions */}

      <div className="flex flex-wrap gap-2">
        {SUGGESTED_QUESTIONS.map((question, index) => (
          <motion.button
            key={question.id}
            type="button"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => onSelect(question.text)}
            className="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300"
            style={{
              borderColor:
                "rgba(var(--primary-rgb),0.25)",
              background:
                "rgba(var(--primary-rgb),0.10)",
              color: "var(--primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg,var(--primary),var(--secondary))";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor =
                "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "rgba(var(--primary-rgb),0.10)";
              e.currentTarget.style.color =
                "var(--primary)";
              e.currentTarget.style.borderColor =
                "rgba(var(--primary-rgb),0.25)";
            }}
          >
            {question.text}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}