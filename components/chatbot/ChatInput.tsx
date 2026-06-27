"use client";

import { useRef, useState, KeyboardEvent, ChangeEvent } from "react";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

import VoiceButton from "./VoiceButton";
import { ChatInputProps } from "./types";
import {
  MAX_MESSAGE_LENGTH,
  PLACEHOLDER,
} from "./constants";
import { isValidMessage } from "./utils";

export default function ChatInput({
  onSend,
  loading = false,
  disabled = false,
}: ChatInputProps) {
  const textareaRef =
    useRef<HTMLTextAreaElement>(null);

  const [message, setMessage] =
    useState("");

  const [isSending, setIsSending] =
    useState(false);

  const resizeTextarea = () => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";

    textareaRef.current.style.height = `${Math.min(
      textareaRef.current.scrollHeight,
      160
    )}px`;
  };

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;

    if (value.length > MAX_MESSAGE_LENGTH) {
      return;
    }

    setMessage(value);

    resizeTextarea();
  };

  const sendMessage = async () => {
    const text = message.trim();

    if (
      disabled ||
      loading ||
      isSending ||
      !isValidMessage(text)
    ) {
      return;
    }

    try {
      setIsSending(true);

      onSend(text);

      setMessage("");

      if (textareaRef.current) {
        textareaRef.current.style.height = "48px";
      }
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();

      sendMessage();
    }
  };

  const handleTranscript = (
    transcript: string
  ) => {
    setMessage((previous) => {
      const next = previous
        ? `${previous} ${transcript}`
        : transcript;

      return next.slice(
        0,
        MAX_MESSAGE_LENGTH
      );
    });

    requestAnimationFrame(() => {
      resizeTextarea();

      textareaRef.current?.focus();
    });
  };

  return (
    <div className="border-t border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl">
      {/* Input */}

      <div className="rounded-2xl border border-white/10 bg-white/5 transition focus-within:border-cyan-500/40">
        <textarea
          ref={textareaRef}
          rows={1}
          value={message}
          disabled={disabled || loading || isSending}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={PLACEHOLDER}
          className="max-h-40 min-h-[48px] w-full resize-none bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none"
        />

        {/* Bottom */}

        <div className="flex items-center justify-between border-t border-white/10 px-3 py-3">
          {/* Counter */}

          <span
            className={`text-xs ${message.length >
              MAX_MESSAGE_LENGTH * 0.9
              ? "text-yellow-400"
              : "text-gray-500"
              }`}
          >
            {message.length}/
            {MAX_MESSAGE_LENGTH}
          </span>

          {/* Actions */}

          <div className="flex items-center gap-2">
            <VoiceButton
              disabled={
                disabled || loading || isSending
              }
              onTranscript={
                handleTranscript
              }
            />

            <motion.button
              type="button"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              disabled={
                disabled ||
                loading ||
                isSending ||
                !isValidMessage(message)
              }
              onClick={sendMessage}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? (
                <Loader2
                  size={18}
                  className="animate-spin"
                />
              ) : (
                <Send size={18} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Helper */}

      <p className="mt-3 text-center text-xs text-gray-500">
        Press <span className="font-semibold text-cyan-400">Enter</span> to send •{" "}
        <span className="font-semibold text-cyan-400">
          Shift + Enter
        </span>{" "}
        for a new line.
      </p>
    </div>
  );
}