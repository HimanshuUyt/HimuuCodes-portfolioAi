"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, MessageCircle, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  active: string;
  onClose: () => void;
  onNavigate: (href: string, name: string) => void;
}

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu({
  isOpen,
  active,
  onClose,
  onNavigate,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md lg:hidden"
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col border-l border-[var(--border)] bg-[var(--background)] shadow-2xl lg:hidden">
            {/* Header */}

            <div className="flex items-center justify-between border-b border-[var(--border)] p-6">
              <div>
                <h2 className="text-2xl font-black">
                  <span className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,var(--primary),var(--secondary),var(--accent))",
                    }}
                  >
                    Himuu
                  </span>

                  <span className="text-[var(--foreground)]"> Codes</span>
                </h2>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  Full Stack Developer
                </p>
              </div>

              <div className="flex items-center gap-2">
                <ThemeToggle />

                <button
                  onClick={onClose}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)] p-2 text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[rgba(var(--primary-rgb),0.08)]">
                  <X size={22} />
                </button>
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-[var(--border)] bg-[var(--card)] p-2 text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[rgba(var(--primary-rgb),0.08)]">
                <X size={22} />
              </button>
            </div>

            {/* Navigation */}

            <nav className="flex-1 px-6 py-8">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => onNavigate(item.href, item.name)}
                    className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-lg font-medium transition ${active === item.name
                      ? "bg-[rgba(var(--primary-rgb),0.12)] text-[var(--primary)]"
                      : "text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--foreground)]"
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </nav>

            {/* Bottom Actions */}

            <div className="border-t border-[var(--border)] p-6">
              <div className="space-y-3">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] py-3 font-medium text-[var(--primary)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[rgba(var(--primary-rgb),0.08)]">
                  <MessageCircle size={18} />
                  AI Assistant
                </button>

                <a
                  href="/resume.pdf"
                  download
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white transition hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--primary),var(--secondary))",
                  }}
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>

              <p className="mt-6 text-center text-xs text-[var(--muted)]">
                © {new Date().getFullYear()} Himuu Codes
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}