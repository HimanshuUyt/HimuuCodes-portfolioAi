"use client";

import { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface UseVoiceOptions {
  continuous?: boolean;
  interimResults?: boolean;
  language?: string;
}

export function useVoice(options: UseVoiceOptions = {}) {
  const {
    continuous = false,
    interimResults = true,
    language = "en-US",
  } = options;

  const recognitionRef = useRef<any>(null);

  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    setSupported(true);

    const recognition = new SpeechRecognition();

    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = language;

    recognition.onstart = () => {
      setListening(true);
      setError(null);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = (event: any) => {
      setListening(false);
      setError(event.error || "Speech recognition failed.");
    };

    recognition.onresult = (event: any) => {
      let finalText = "";
      let interimText = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        const result = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalText += result + " ";
        } else {
          interimText += result;
        }
      }

      if (finalText) {
        setTranscript((prev) =>
          `${prev} ${finalText}`.trim()
        );
      }

      setInterimTranscript(interimText);
    };

    recognitionRef.current = recognition;
  }, [continuous, interimResults, language]);

  const start = useCallback(() => {
    if (!recognitionRef.current) return;

    setTranscript("");
    setInterimTranscript("");
    setError(null);

    recognitionRef.current.start();
  }, []);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  const toggle = useCallback(() => {
    if (listening) {
      stop();
    } else {
      start();
    }
  }, [listening, start, stop]);

  const reset = useCallback(() => {
    setTranscript("");
    setInterimTranscript("");
    setError(null);
  }, []);

  return {
    supported,
    listening,
    transcript,
    interimTranscript,
    error,
    start,
    stop,
    toggle,
    reset,
  };
}