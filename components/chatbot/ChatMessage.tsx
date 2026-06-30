"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Check,
  Copy,
  User,
} from "lucide-react";

import MarkdownRenderer from "./MarkdownRenderer";
import { ChatMessageProps } from "./types";
import {
  copyToClipboard,
  formatTime,
} from "./utils";

export default function ChatMessage({
  message,
}: ChatMessageProps) {
  const isUser = message.role === "user";

  const [copied, setCopied] =
    useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(
      message.content
    );

    if (!success) return;

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex gap-3 ${isUser
        ? "justify-end"
        : "justify-start"
        }`}
    >
      {/* AI Avatar */}

      {!isUser && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-lg"
          style={{
            background:
              "linear-gradient(135deg,var(--primary),var(--secondary))",
            boxShadow:
              "0 8px 25px rgba(var(--primary-rgb),0.35)",
          }}>
          <Bot
            size={20}
            className="text-white"
          />
        </div>
      )}

      {/* Message */}

      <div
        className={`group relative max-w-[85%] ${isUser ? "order-1" : ""
          }`}
      >
        {/* Header */}

        <div
          className={`mb-2 flex items-center gap-2 ${isUser
            ? "justify-end"
            : "justify-start"
            }`}
        >
          <span className="text-xs font-semibold"
            style={{
              color: "var(--primary)",
            }}>
            {isUser
              ? "You"
              : "Himuu AI"}
          </span>

          <span className="text-xs text-[var(--muted)]">
            {formatTime(
              message.timestamp
            )}
          </span>

          {!isUser && (
            <button
              onClick={handleCopy}
              className="rounded-md p-1 transition"
              style={{
                color: "var(--muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(var(--primary-rgb),0.10)";
                e.currentTarget.style.color = "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--muted)";
              }}
              title="Copy message"
            >
              {copied ? (
                <Check
                  size={14}
                  style={{
                    color: "var(--primary)",
                  }}
                />
              ) : (
                <Copy size={14} />
              )}
            </button>
          )}
        </div>

        {/* Bubble */}

        <div
          className={`rounded-2xl border px-5 py-4 backdrop-blur-xl ${isUser ? "rounded-br-md text-white" : "rounded-bl-md"
            }`}
          style={
            isUser
              ? {
                borderColor: "rgba(var(--primary-rgb),0.35)",
                background:
                  "linear-gradient(135deg,var(--primary),var(--secondary))",
              }
              : {
                borderColor: "var(--border)",
                background: "var(--card)",
                color: "var(--foreground)",
              }
          }
        >
          {isUser ? (
            <p className="whitespace-pre-wrap break-words leading-7 text-white">
              {message.content}
            </p>
          ) : (
            <MarkdownRenderer
              content={message.content}
            />
          )}
        </div>

        {/* Status */}

        {isUser &&
          message.status && (
            <div className="mt-2 text-right text-xs text-[var(--muted)]">
              {message.status ===
                "sending" &&
                "Sending..."}

              {message.status ===
                "sent" &&
                "Sent"}

              {message.status ===
                "error" &&
                "Failed"}
            </div>
          )}
      </div>

      {/* User Avatar */}

      {isUser && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-lg"
          style={{
            background:
              "linear-gradient(135deg,var(--secondary),var(--accent))",
            boxShadow:
              "0 8px 25px rgba(var(--secondary-rgb),0.35)",
          }}>
          <User
            size={20}
            className="text-white"
          />
        </div>
      )}
    </motion.div>
  );
}