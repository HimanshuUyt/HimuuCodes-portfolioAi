"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

import { useChat } from "@/hooks/useChat";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";

import { CHATBOT_NAME } from "./constants";

export default function ChatWindow() {
    const {
        messages,
        loading,
        sendMessage,
        clearMessages,
    } = useChat();

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);


    return (
        <div className="flex h-[700px] w-[430px] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl">

            <ChatHeader
                onClose={() => { }}
                onClear={clearMessages}
            />

            <div className="flex-1 overflow-y-auto px-5 py-6">

                {messages.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex h-full flex-col items-center justify-center"
                    >
                        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-xl">
                            <Bot className="h-10 w-10 text-white" />
                        </div>

                        <h2 className="text-3xl font-bold">
                            {CHATBOT_NAME}
                        </h2>

                        <p className="mt-3 max-w-sm text-center text-muted-foreground">
                            Ask anything about my experience,
                            projects, skills, education or how
                            we can work together.
                        </p>

                        <div className="mt-8 w-full">
                            <SuggestedQuestions
                                onSelect={sendMessage}
                            />
                        </div>
                    </motion.div>
                ) : (
                    <div className="space-y-6">
                        <AnimatePresence initial={false}>
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    layout
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                >
                                    <ChatMessage
                                        message={message}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {loading && (
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
                                    <Bot size={18} />
                                </div>

                                <div className="rounded-2xl border bg-card px-4 py-3">
                                    <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                                        <Sparkles
                                            size={16}
                                            className="text-violet-500"
                                        />
                                        Thinking...
                                    </div>

                                    <div className="flex gap-2">
                                        <span className="h-2 w-2 animate-bounce rounded-full bg-violet-500" />
                                        <span className="h-2 w-2 animate-bounce rounded-full bg-violet-500 [animation-delay:-0.15s]" />
                                        <span className="h-2 w-2 animate-bounce rounded-full bg-violet-500 [animation-delay:-0.3s]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={bottomRef} />
                    </div>
                )}
            </div>

            <ChatInput
                loading={loading}
                onSend={sendMessage}
            />
        </div>
    );
}