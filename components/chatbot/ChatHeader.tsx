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
    <div
      className="relative overflow-hidden border-b px-5 py-4 backdrop-blur-2xl transition-colors duration-300"
      style={{
        background:
          "linear-gradient(135deg,var(--card),color-mix(in srgb,var(--card) 85%, transparent))",
        borderColor: "var(--border)",
      }}
    >
      {/* Background Glow */}

      <div
        className="absolute -left-12 top-0 h-24 w-24 rounded-full blur-3xl opacity-20"
        style={{
          background: "var(--primary)",
        }}
      />

      <div
        className="absolute -right-12 top-0 h-24 w-24 rounded-full blur-3xl opacity-20"
        style={{
          background: "var(--secondary)",
        }}
      />

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
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg,var(--primary),var(--secondary))",
              }}
            >
              <Bot
                size={24}
                className="text-white"
              />
            </div>

            <span
              className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2"
              style={{
                background: "#22c55e",
                borderColor: "var(--card)",
              }}
            />
          </motion.div>

          <div>
            <h2
              className="text-lg font-bold"
              style={{
                color: "var(--foreground)",
              }}
            >
              Himuu AI
            </h2>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

              <p
                className="text-xs"
                style={{
                  color: "var(--muted)",
                }}
              >
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
              className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ef4444";
                e.currentTarget.style.color = "#ef4444";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              <Trash2 size={18} />
            </button>
          )}

          {onMinimize && (
            <button
              type="button"
              onClick={onMinimize}
              title="Minimize"
              className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              <Minimize2 size={18} />
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            title="Close Chat"
            className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:scale-105 hover:rotate-90"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
              color: "var(--muted)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#ef4444";
              e.currentTarget.style.color = "#ef4444";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--muted)";
            }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Bottom Accent */}

      <div
        className="absolute bottom-0 left-0 h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg,var(--primary),var(--secondary),var(--accent))",
        }}
      />
    </div>
  );
}