import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes safely.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate a unique ID.
 */
export function generateId(prefix = "id"): string {
  return `${prefix}_${crypto.randomUUID()}`;
}

/**
 * Format a date into a readable string.
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {}
): string {
  const value = new Date(date);

  return value.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  });
}

/**
 * Format a time.
 */
export function formatTime(
  date: Date | string | number
): string {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Sleep helper.
 */
export function sleep(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

/**
 * Truncate long text.
 */
export function truncate(
  text: string,
  length = 120
): string {
  if (text.length <= length) return text;

  return text.slice(0, length) + "...";
}

/**
 * Capitalize first letter.
 */
export function capitalize(text: string): string {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Copy text to clipboard.
 */
export async function copyToClipboard(
  text: string
): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if running in browser.
 */
export const isBrowser =
  typeof window !== "undefined";

/**
 * Debounce function.
 */
export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  let timer: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

/**
 * Clamp a number.
 */
export function clamp(
  value: number,
  min: number,
  max: number
) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Random integer.
 */
export function random(
  min: number,
  max: number
) {
  return Math.floor(
    Math.random() * (max - min + 1)
  ) + min;
}