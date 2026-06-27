"use client";

import { useEffect, useMemo, useState } from "react";

interface UseTypingOptions {
  text: string;
  speed?: number;
  startDelay?: number;
  loop?: boolean;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function useTyping({
  text,
  speed = 35,
  startDelay = 0,
  loop = false,
  deleteSpeed = 20,
  pauseDuration = 1500,
}: UseTypingOptions) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      let index = 0;
      let deleting = false;

      setIsTyping(true);

      const animate = () => {
        if (!deleting) {
          if (index <= text.length) {
            setDisplayText(text.slice(0, index));
            index++;

            timeout = setTimeout(animate, speed);
          } else {
            setIsTyping(false);

            if (loop) {
              timeout = setTimeout(() => {
                deleting = true;
                setIsTyping(true);
                animate();
              }, pauseDuration);
            }
          }
        } else {
          if (index >= 0) {
            setDisplayText(text.slice(0, index));
            index--;

            timeout = setTimeout(
              animate,
              deleteSpeed
            );
          } else {
            deleting = false;
            index = 0;

            timeout = setTimeout(
              animate,
              speed
            );
          }
        }
      };

      animate();
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeout);
  }, [
    text,
    speed,
    startDelay,
    loop,
    deleteSpeed,
    pauseDuration,
  ]);

  const completed = useMemo(
    () => displayText === text,
    [displayText, text]
  );

  return {
    text: displayText,
    completed,
    isTyping,
  };
}