"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import {
  SUGGESTED_QUESTIONS,
} from "./constants";
import {
  SuggestedQuestionsProps,
} from "./types";

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
      className="border-t border-white/10 bg-slate-900/40 px-4 py-4 backdrop-blur-xl"
    >
      {/* Header */}

      <div className="mb-3 flex items-center gap-2">
        <Sparkles
          size={16}
          className="text-cyan-400"
        />

        <span className="text-sm font-semibold text-cyan-400">
          Suggested Questions
        </span>
      </div>

      {/* Questions */}

      <div className="flex flex-wrap gap-2">
        {SUGGESTED_QUESTIONS.map(
          (question, index) => (
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
              onClick={() =>
                onSelect(question.text)
              }
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              {question.text}
            </motion.button>
          )
        )}
      </div>
    </motion.div>
  );
}