"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff } from "lucide-react";

import { VoiceButtonProps } from "./types";

interface SpeechRecognitionLike {
  continuous: boolean;
  interimResults: boolean;
  lang: string;

  start(): void;
  stop(): void;

  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  onresult:
    | ((event: {
        resultIndex: number;
        results: {
          length: number;
          [index: number]: {
            [index: number]: {
              transcript: string;
            };
          };
        };
      }) => void)
    | null;
}

export default function VoiceButton({
  onTranscript,
  disabled = false,
}: VoiceButtonProps) {
  const recognitionRef =
    useRef<SpeechRecognitionLike | null>(null);

  const [supported, setSupported] =
    useState(true);

  const [isListening, setIsListening] =
    useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognitionAPI =
      (
        window as Window & {
          SpeechRecognition?: new () => SpeechRecognitionLike;
          webkitSpeechRecognition?: new () => SpeechRecognitionLike;
        }
      ).SpeechRecognition ||
      (
        window as Window & {
          webkitSpeechRecognition?: new () => SpeechRecognitionLike;
        }
      ).webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognitionAPI();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onresult = (event: any) => {
      let transcript = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        transcript +=
          event.results[i][0].transcript;
      }

      transcript = transcript.trim();

      if (transcript) {
        onTranscript(transcript);
      }
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [onTranscript]);

  const handleClick = () => {
    if (
      disabled ||
      !supported ||
      !recognitionRef.current
    ) {
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  if (!supported) {
    return null;
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      aria-label={
        isListening
          ? "Stop voice input"
          : "Start voice input"
      }
      className="relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300"
      style={
        isListening
          ? {
              borderColor: "var(--accent)",
              background:
                "linear-gradient(135deg,var(--accent),var(--secondary))",
              color: "#fff",
              boxShadow:
                "0 10px 30px rgba(var(--primary-rgb),0.35)",
            }
          : {
              borderColor:
                "rgba(var(--primary-rgb),0.25)",
              background:
                "rgba(var(--primary-rgb),0.10)",
              color: "var(--primary)",
            }
      }
    >
      {isListening && (
        <motion.span
          className="absolute inset-0 rounded-full border"
          style={{
            borderColor: "var(--primary)",
          }}
          animate={{
            scale: [1, 1.6],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
        />
      )}

      {isListening ? (
        <MicOff size={20} />
      ) : (
        <Mic size={20} />
      )}
    </motion.button>
  );
}