"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export type Accent =
  | "blue"
  | "purple"
  | "emerald"
  | "rose"
  | "orange"
  | "amber"
  | "cyan"
  | "pink";

interface ThemeContextType {
  accent: Accent;
  setAccent: (accent: Accent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function useAccent() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useAccent must be used inside ThemeProvider."
    );
  }

  return context;
}

const accentColors: Record<
  Accent,
  {
    primary: string;
    secondary: string;
    accent: string;
  }
> = {
  blue: {
    primary: "#06b6d4",
    secondary: "#2563eb",
    accent: "#3b82f6",
  },

  purple: {
    primary: "#8b5cf6",
    secondary: "#7c3aed",
    accent: "#d946ef",
  },

  emerald: {
    primary: "#10b981",
    secondary: "#22c55e",
    accent: "#16a34a",
  },

  rose: {
    primary: "#f43f5e",
    secondary: "#ec4899",
    accent: "#fb7185",
  },

  orange: {
    primary: "#f97316",
    secondary: "#ea580c",
    accent: "#ef4444",
  },

  amber: {
    primary: "#f59e0b",
    secondary: "#eab308",
    accent: "#ca8a04",
  },

  cyan: {
    primary: "#22d3ee",
    secondary: "#0891b2",
    accent: "#06b6d4",
  },

  pink: {
    primary: "#ec4899",
    secondary: "#db2777",
    accent: "#8b5cf6",
  },
};

const STORAGE_KEY = "portfolio-accent";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accent, setAccent] =
    useState<Accent>("cyan");

  useEffect(() => {
    const saved = localStorage.getItem(
      STORAGE_KEY
    ) as Accent | null;

    if (saved && accentColors[saved]) {
      setAccent(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, accent);

    const root = document.documentElement;

    const color = accentColors[accent];

    function hexToRgb(hex: string) {
      const c = hex.replace("#", "");

      const bigint = parseInt(c, 16);

      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;

      return `${r},${g},${b}`;
    }

    const meta = document.querySelector(
      'meta[name="theme-color"]'
    );

    if (meta) {
      meta.setAttribute("content", color.primary);
    }
  }, [accent]);

  const value = useMemo(
    () => ({
      accent,
      setAccent,
    }),
    [accent]
  );

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    </NextThemesProvider>
  );
}