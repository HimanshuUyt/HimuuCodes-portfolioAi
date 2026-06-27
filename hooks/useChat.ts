"use client";

import { useCallback, useMemo, useState } from "react";

import { askAI } from "@/lib/ai";
import type { ChatMessage } from "@/components/chatbot/types";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || loading) return;

      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content,
        timestamp: new Date(),
      };

      const updatedMessages = [...messages, userMessage];

      setMessages(updatedMessages);
      setLoading(true);

      try {
        const response = await askAI({
          message: content,
          history: updatedMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        });

        const assistantMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: response.message,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        console.error(error);

        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              "Sorry, something went wrong. Please try again.",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  const addAssistantMessage = useCallback((content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content,
        timestamp: new Date(),
      },
    ]);
  }, []);

  const addUserMessage = useCallback((content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        content,
        timestamp: new Date(),
      },
    ]);
  }, []);

  return useMemo(
    () => ({
      messages,
      loading,
      sendMessage,
      clearMessages,
      addAssistantMessage,
      addUserMessage,
      setMessages,
    }),
    [
      messages,
      loading,
      sendMessage,
      clearMessages,
      addAssistantMessage,
      addUserMessage,
    ]
  );
}