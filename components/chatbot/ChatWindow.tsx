"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

import { useChat } from "@/hooks/useChat";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";

import { CHATBOT_NAME } from "./constants";

interface ChatWindowProps {
  onClose?: () => void;
}

export default function ChatWindow({
  onClose,
}: ChatWindowProps) {
  const {
    messages,
    loading,
    sendMessage,
    clearMessages,
  } = useChat();

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[var(--background)] md:h-[700px] md:w-[430px] md:rounded-3xl md:border md:shadow-2xl"
      style={{
        borderColor: "var(--border)",
      }}>
      <ChatHeader
        onClose={onClose}
        onClear={clearMessages}
      />

      <div className="flex-1 overflow-y-auto px-4 py-4 md:px-5 md:py-6">
        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-full flex-col items-center justify-center"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl md:h-20 md:w-20"
              style={{
                background:
                  "linear-gradient(135deg,var(--primary),var(--secondary))",
                boxShadow:
                  "0 15px 40px rgba(var(--primary-rgb),0.35)",
              }}>
              <Bot className="h-8 w-8 text-white md:h-10 md:w-10" />
            </div>

            <h2
              className="text-2xl font-bold md:text-3xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              {CHATBOT_NAME}
            </h2>

            <p className="mt-3 max-w-sm px-4 text-center text-sm md:px-0 md:text-base"
              style={{
                color: "var(--muted)",
              }}>
              Ask anything about my experience, projects, skills,
              education or how we can work together.
            </p>

            <div className="mt-8 w-full">
              <SuggestedQuestions
                onSelect={sendMessage}
              />
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  <ChatMessage message={message} />
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && (
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--primary),var(--secondary))",
                  }}>
                  <Bot size={18} />
                </div>

                <div className="max-w-[80%] rounded-2xl border px-4 py-3"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                  }}>
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium"
                    style={{
                      color: "var(--foreground)",
                    }}>
                    <Sparkles
                      size={16}
                      style={{
                        color: "var(--primary)",
                      }}
                    />
                    Thinking...
                  </div>

                  <div className="flex gap-2">
                    <span
                      className="h-2 w-2 animate-bounce rounded-full"
                      style={{
                        background: "var(--primary)",
                      }}
                    />

                    <span
                      className="h-2 w-2 animate-bounce rounded-full [animation-delay:-0.15s]"
                      style={{
                        background: "var(--primary)",
                      }}
                    />

                    <span
                      className="h-2 w-2 animate-bounce rounded-full [animation-delay:-0.3s]"
                      style={{
                        background: "var(--primary)",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        )}
      </div>

      <div
        className="border-t bg-[var(--background)]"
        style={{
          borderColor: "var(--border)",
        }}
      >
        <ChatInput
          loading={loading}
          onSend={sendMessage}
        />
      </div>
    </div>
  );
}