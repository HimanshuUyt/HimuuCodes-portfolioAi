"use client";

import {
  useRef,
  useState,
  KeyboardEvent,
  ChangeEvent,
} from "react";
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

  const [message, setMessage] = useState("");
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

    if (value.length > MAX_MESSAGE_LENGTH) return;

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
    <div
      className="border-t p-4 backdrop-blur-xl transition-colors duration-300"
      style={{
        borderColor: "var(--border)",
        background:
          "color-mix(in srgb,var(--background) 92%, transparent)",
      }}
    >
      <div
        className="rounded-2xl border transition-all duration-300"
        style={{
          borderColor: "var(--border)",
          background: "var(--card)",
        }}
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={message}
          disabled={disabled || loading || isSending}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={PLACEHOLDER}
          className="max-h-40 min-h-[48px] w-full resize-none bg-transparent px-4 py-3 text-sm outline-none"
          style={{
            color: "var(--foreground)",
          }}
        />

        <div
          className="flex items-center justify-between border-t px-3 py-3"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <span
            className="text-xs transition-colors"
            style={{
              color:
                message.length >
                MAX_MESSAGE_LENGTH * 0.9
                  ? "#f59e0b"
                  : "var(--muted)",
            }}
          >
            {message.length}/{MAX_MESSAGE_LENGTH}
          </span>

          <div className="flex items-center gap-2">
            <VoiceButton
              disabled={
                disabled ||
                loading ||
                isSending
              }
              onTranscript={
                handleTranscript
              }
            />

            <motion.button
              type="button"
              whileHover={{
                scale: 1.06,
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
              className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                background:
                  "linear-gradient(135deg,var(--primary),var(--secondary))",
                boxShadow:
                  "0 8px 24px rgba(var(--primary-rgb),0.35)",
              }}
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

      <p
        className="mt-3 text-center text-xs"
        style={{
          color: "var(--muted)",
        }}
      >
        Press{" "}
        <span
          className="font-semibold"
          style={{
            color: "var(--primary)",
          }}
        >
          Enter
        </span>{" "}
        to send •{" "}
        <span
          className="font-semibold"
          style={{
            color: "var(--primary)",
          }}
        >
          Shift + Enter
        </span>{" "}
        for a new line.
      </p>
    </div>
  );
}