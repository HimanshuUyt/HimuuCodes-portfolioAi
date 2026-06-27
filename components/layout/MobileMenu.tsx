"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, MessageCircle, X } from "lucide-react";

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
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
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
            className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col border-l border-white/10 bg-[#050816] shadow-2xl lg:hidden"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div>
                <h2 className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Himuu
                  </span>

                  <span className="text-white"> Codes</span>
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  Full Stack Developer
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
              >
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
                    className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-lg font-medium transition ${
                      active === item.name
                        ? "bg-cyan-500/15 text-cyan-400"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </nav>

            {/* Bottom Actions */}

            <div className="border-t border-white/10 p-6">
              <div className="space-y-3">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-3 font-medium text-cyan-300 transition hover:bg-cyan-500/20">
                  <MessageCircle size={18} />
                  AI Assistant
                </button>

                <a
                  href="/resume.pdf"
                  download
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-[1.02]"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>

              <p className="mt-6 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Himuu Codes
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}