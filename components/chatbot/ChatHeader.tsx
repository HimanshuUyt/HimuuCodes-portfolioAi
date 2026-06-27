"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Trash2,
  Minimize2,
  X,
} from "lucide-react";

export interface ChatHeaderProps {
  onClose?: () => void;
  onClear?: () => void;
  onMinimize?: () => void;
}

export default function ChatHeader({
  onClose,
  onClear,
  onMinimize,
}: ChatHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 px-5 py-4 backdrop-blur-xl">
      {/* Background Glow */}

      <div className="absolute -left-12 top-0 h-24 w-24 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute -right-12 top-0 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative flex items-center justify-between">
        {/* Left */}

        <div className="flex items-center gap-4">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="relative"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
              <Bot
                size={24}
                className="text-white"
              />
            </div>

            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-slate-900 bg-emerald-400" />
          </motion.div>

          <div>
            <h2 className="text-lg font-bold text-white">
              Himuu AI
            </h2>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              <p className="text-xs text-gray-400">
                Online • AI Portfolio Assistant
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-2">
          {onClear && (
            <button
              type="button"
              onClick={onClear}
              title="Clear Conversation"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
            >
              <Trash2 size={18} />
            </button>
          )}

          {onMinimize && (
            <button
              type="button"
              onClick={onMinimize}
              title="Minimize"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              <Minimize2 size={18} />
            </button>
          )}

          <button
            type="button"
            onClick={() => onClose?.()}
            title="Close Chat"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
    </div>
  );
}