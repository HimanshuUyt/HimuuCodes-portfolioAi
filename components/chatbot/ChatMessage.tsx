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
      className={`flex gap-3 ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      {/* AI Avatar */}

      {!isUser && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">
          <Bot
            size={20}
            className="text-white"
          />
        </div>
      )}

      {/* Message */}

      <div
        className={`group relative max-w-[85%] ${
          isUser ? "order-1" : ""
        }`}
      >
        {/* Header */}

        <div
          className={`mb-2 flex items-center gap-2 ${
            isUser
              ? "justify-end"
              : "justify-start"
          }`}
        >
          <span className="text-xs font-semibold text-cyan-400">
            {isUser
              ? "You"
              : "Himuu AI"}
          </span>

          <span className="text-xs text-gray-500">
            {formatTime(
              message.timestamp
            )}
          </span>

          {!isUser && (
            <button
              onClick={handleCopy}
              className="rounded-md p-1 text-gray-500 transition hover:bg-white/10 hover:text-white"
              title="Copy message"
            >
              {copied ? (
                <Check
                  size={14}
                  className="text-emerald-400"
                />
              ) : (
                <Copy size={14} />
              )}
            </button>
          )}
        </div>

        {/* Bubble */}

        <div
          className={`rounded-2xl border px-5 py-4 backdrop-blur-xl ${
            isUser
              ? "rounded-br-md border-cyan-500/30 bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
              : "rounded-bl-md border-white/10 bg-white/5 text-gray-300"
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap break-words leading-7">
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
            <div className="mt-2 text-right text-xs text-gray-500">
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
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
          <User
            size={20}
            className="text-white"
          />
        </div>
      )}
    </motion.div>
  );
}