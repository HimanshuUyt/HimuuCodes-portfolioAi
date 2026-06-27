"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  Download,
  MessageCircle,
} from "lucide-react";

interface NavbarProps {
  onOpenChat: () => void;
}

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({
  onOpenChat,
}: NavbarProps) {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => ({
        id: item.href.replace("#", ""),
        name: item.name,
      }));

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string, name: string) => {
    setOpen(false);
    setActive(name);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-wide cursor-pointer"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Himuu
            </span>

            <span className="text-white"> Codes</span>
          </motion.h1>
        </Link>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href, item.name)}
              className={`relative text-sm font-medium transition ${active === item.name
                ? "text-cyan-400"
                : "text-gray-300 hover:text-white"
                }`}
            >
              {item.name}

              {active === item.name && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute -bottom-2 left-0 h-[2px] w-full rounded bg-cyan-400"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Actions */}

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenChat}
            className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
          >
            <MessageCircle size={18} />
            AI Chat
          </button>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
          >
            <Download size={18} />
            Resume
          </a>

          <button className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition">
            <Sparkles className="text-yellow-400" size={20} />
          </button>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-5 p-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() =>
                    scrollToSection(item.href, item.name)
                  }
                  className={`text-left text-lg transition ${active === item.name
                    ? "text-cyan-400"
                    : "text-gray-300"
                    }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="mt-5 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setOpen(false);
                    onOpenChat();
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-3 text-cyan-300"
                >
                  <MessageCircle size={18} />
                  AI Chat
                </button>

                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}