"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "himuu-theme";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  const getSystemTheme = useCallback((): "light" | "dark" => {
    if (typeof window === "undefined") return "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  const applyTheme = useCallback(
    (selectedTheme: Theme) => {
      if (typeof document === "undefined") return;

      const html = document.documentElement;

      html.classList.remove("light", "dark");

      const activeTheme =
        selectedTheme === "system"
          ? getSystemTheme()
          : selectedTheme;

      html.classList.add(activeTheme);

      setResolvedTheme(activeTheme);
    },
    [getSystemTheme]
  );

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);

      localStorage.setItem(STORAGE_KEY, newTheme);

      applyTheme(newTheme);
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    const next =
      resolvedTheme === "dark" ? "light" : "dark";

    setTheme(next);
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    setMounted(true);

    const saved =
      (localStorage.getItem(STORAGE_KEY) as Theme) ??
      "system";

    setThemeState(saved);

    applyTheme(saved);

    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const listener = () => {
      if (saved === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", listener);

    return () =>
      media.removeEventListener("change", listener);
  }, [applyTheme]);

  return {
    mounted,
    theme,
    resolvedTheme,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    setTheme,
    toggleTheme,
  };
}