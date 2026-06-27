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
      className="absolute right-3 top-3 flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-1 text-xs text-white transition hover:bg-slate-700"
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
    <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-cyan-400 prose-li:text-gray-300 prose-code:text-cyan-300">
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
                <div className="relative my-6 overflow-hidden rounded-2xl border border-white/10">
                  <CopyButton code={code} />

                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      padding: "1.5rem",
                      borderRadius: "1rem",
                      background:
                        "#020617",
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
                className="rounded bg-cyan-500/10 px-1.5 py-1 text-cyan-300"
                {...props}
              >
                {children}
              </code>
            );
          },

          h1: ({ children }) => (
            <h1 className="mb-4 mt-6 text-3xl font-bold text-white">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-3 mt-6 text-2xl font-bold text-white">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-3 mt-5 text-xl font-semibold text-white">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="mb-4 leading-8 text-gray-300">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-300">
              {children}
            </ol>
          ),

          blockquote: ({
            children,
          }) => (
            <blockquote className="my-4 border-l-4 border-cyan-500 bg-cyan-500/5 py-2 pl-4 italic text-gray-300">
              {children}
            </blockquote>
          ),

          table: ({ children }) => (
            <div className="my-6 overflow-x-auto">
              <table className="w-full border border-white/10">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="bg-white/5">
              {children}
            </thead>
          ),

          th: ({ children }) => (
            <th className="border border-white/10 px-4 py-2 text-left font-semibold text-white">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="border border-white/10 px-4 py-2 text-gray-300">
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
              className="font-medium text-cyan-400 underline underline-offset-4 transition hover:text-cyan-300"
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