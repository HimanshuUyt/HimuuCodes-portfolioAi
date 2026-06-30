"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { MarkdownRendererProps } from "./types";

function CopyButton({
  code,
}: {
  code: string;
}) {
  const [copied, setCopied] =
    useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={copy}
      className="absolute right-3 top-3 flex items-center gap-2 rounded-lg border px-3 py-1 text-xs transition-all duration-300"
      style={{
        background: "var(--card)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      {copied ? (
        <>
          <Check size={14} />
          Copied
        </>
      ) : (
        <>
          <Copy size={14} />
          Copy
        </>
      )}
    </button>
  );
}

export default function MarkdownRenderer({
  content,
}: MarkdownRendererProps) {
  return (
    <div
      className="prose dark:prose-invert max-w-none"
      style={{
        color: "var(--foreground)",
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({
            inline,
            className,
            children,
            ...props
          }: any) {
            const match =
              /language-(\w+)/.exec(
                className || ""
              );

            const code = String(
              children
            ).replace(/\n$/, "");

            if (!inline && match) {
              return (
                <div className="relative my-6 overflow-hidden rounded-2xl border"
                  style={{
                    borderColor: "var(--border)",
                  }}>
                  <CopyButton code={code} />

                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      padding: "1.5rem",
                      borderRadius: "1rem",
                      background: "var(--card)",
                    }}
                    {...props}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              );
            }

            return (
              <code
                className="rounded px-1.5 py-1"
                style={{
                  background: "rgba(var(--primary-rgb),0.12)",
                  color: "var(--primary)",
                }}
                {...props}
              >
                {children}
              </code>
            );
          },

          h1: ({ children }) => (
            <h1 className="mb-4 mt-6 text-3xl font-bold"
              style={{
                color: "var(--foreground)",
              }}>
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-3 mt-6 text-2xl font-bold"
              style={{
                color: "var(--foreground)",
              }}>
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-3 mt-5 text-xl font-semibold"
              style={{
                color: "var(--foreground)",
              }}>
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="mb-4 leading-8"
              style={{
                color: "var(--foreground)",
              }}>
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="mb-4 list-disc space-y-2 pl-6"
              style={{
                color: "var(--foreground)",
              }}>
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-4 list-decimal space-y-2 pl-6"
              style={{
                color: "var(--foreground)",
              }}>
              {children}
            </ol>
          ),

          blockquote: ({
            children,
          }) => (
            <blockquote className="my-4 border-l-4 py-2 pl-4 italic"
              style={{
                borderColor: "var(--primary)",
                background: "rgba(var(--primary-rgb),0.08)",
                color: "var(--foreground)",
              }}>
              {children}
            </blockquote>
          ),

          table: ({ children }) => (
            <div className="my-6 overflow-x-auto">
              <table
                className="w-full border"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead
              style={{
                background: "var(--card)",
              }}
            >
              {children}
            </thead>
          ),

          th: ({ children }) => (
            <th className="border px-4 py-2 text-left font-semibold"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}>
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="border px-4 py-2"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}>
              {children}
            </td>
          ),

          a: ({
            href,
            children,
          }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 transition"
              style={{
                color: "var(--primary)",
              }}
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}