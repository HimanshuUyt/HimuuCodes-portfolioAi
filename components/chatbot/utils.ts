// components/chatbot/utils.ts

import {
  ChatMessage,
  MessageRole,
} from "./types";

import {
  STORAGE_KEY,
} from "./constants";

/* -------------------------------------------------------------------------- */
/*                            Generate Unique ID                              */
/* -------------------------------------------------------------------------- */

export function generateMessageId(): string {
  return (
    Date.now().toString(36) +
    Math.random().toString(36).substring(2, 9)
  );
}

/* -------------------------------------------------------------------------- */
/*                              Current Timestamp                             */
/* -------------------------------------------------------------------------- */

export function getCurrentTime(): Date {
  return new Date();
}

/* -------------------------------------------------------------------------- */
/*                            Format Message Time                             */
/* -------------------------------------------------------------------------- */

export function formatTime(
  date?: Date | string
): string {
  if (!date) return "";

  const d = date instanceof Date ? date : new Date(date);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
}

/* -------------------------------------------------------------------------- */
/*                             Create New Message                             */
/* -------------------------------------------------------------------------- */

export function createMessage(
  role: ChatMessage["role"],
  content: string
): ChatMessage {
  return {
    id: generateMessageId(),
    role,
    content: content.trim(),
    timestamp: getCurrentTime(),
    status: "sent",
  };
}

/* -------------------------------------------------------------------------- */
/*                             Validate Message                               */
/* -------------------------------------------------------------------------- */

export function isValidMessage(
  message: string
): boolean {
  return message.trim().length > 0;
}

/* -------------------------------------------------------------------------- */
/*                           Save Chat History                                */
/* -------------------------------------------------------------------------- */

export function saveChatHistory(
  messages: ChatMessage[]
): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(messages)
    );
  } catch (error) {
    console.error(
      "Failed to save chat history:",
      error
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                           Load Chat History                                */
/* -------------------------------------------------------------------------- */

export function loadChatHistory(): ChatMessage[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) return [];

    const parsed = JSON.parse(stored);

    return parsed.map((message: ChatMessage) => ({
      ...message,
      timestamp: new Date(message.timestamp),
    }));
  } catch (error) {
    console.error(
      "Failed to load chat history:",
      error
    );

    return [];
  }
}

/* -------------------------------------------------------------------------- */
/*                            Clear Chat History                              */
/* -------------------------------------------------------------------------- */

export function clearChatHistory(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);
}

/* -------------------------------------------------------------------------- */
/*                               Auto Scroll                                  */
/* -------------------------------------------------------------------------- */

export function scrollToBottom(
  element: HTMLDivElement | null
): void {
  if (!element) return;

  requestAnimationFrame(() => {
    element.scrollTop = element.scrollHeight;
  });
}

/* -------------------------------------------------------------------------- */
/*                             Copy To Clipboard                              */
/* -------------------------------------------------------------------------- */

export async function copyToClipboard(
  text: string
): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error(
      "Clipboard copy failed:",
      error
    );
    return false;
  }
}

/* -------------------------------------------------------------------------- */
/*                             Download Chat                                  */
/* -------------------------------------------------------------------------- */

export function exportChat(
  messages: ChatMessage[]
): void {
  const content = messages
    .map(
      (msg) =>
        `[${formatTime(msg.timestamp)}] ${msg.role.toUpperCase()}\n${msg.content}\n`
    )
    .join("\n");

  const blob = new Blob([content], {
    type: "text/plain",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "himuu-ai-chat.txt";

  link.click();

  URL.revokeObjectURL(url);
}

/* -------------------------------------------------------------------------- */
/*                              Delay Utility                                 */
/* -------------------------------------------------------------------------- */

export function delay(
  ms: number
): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

/* -------------------------------------------------------------------------- */
/*                             Message Preview                                */
/* -------------------------------------------------------------------------- */

export function truncateMessage(
  text: string,
  maxLength = 80
): string {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength)}...`;
}