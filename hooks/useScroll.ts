"use client";

import { useCallback, useEffect, useState } from "react";

interface UseScrollOptions {
  threshold?: number;
  sections?: string[];
}

export function useScroll(options: UseScrollOptions = {}) {
  const {
    threshold = 80,
    sections = [],
  } = options;

  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrollY(currentScroll);
      setIsScrolled(currentScroll > threshold);

      if (sections.length > 0) {
        let current = sections[0] ?? "";

        for (const section of sections) {
          const element = document.getElementById(section);

          if (!element) continue;

          const rect = element.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section;
            break;
          }
        }

        setActiveSection(current);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [threshold, sections]);

  const scrollTo = useCallback(
    (id: string, offset = 80) => {
      const element = document.getElementById(id);

      if (!element) return;

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    },
    []
  );

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return {
    scrollY,
    isScrolled,
    activeSection,
    scrollTo,
    scrollToTop,
  };
}