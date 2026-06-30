"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/layout/ThemeToggle";
import ColorSwitcher from "@/components/providers/ColorSwitcher";
import {
  Menu,
  X,
  Download,
  MessageCircle,
  Settings2,
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

    handleScroll();

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
        ? "border-b border-[var(--border)] bg-[color:var(--background)]/80 backdrop-blur-2xl shadow-lg"
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
            <span className="gradient-text bg-clip-text text-transparent" style={{
              backgroundImage:
                "linear-gradient(90deg,var(--primary),var(--secondary),var(--accent))",
            }}>
              Himuu
            </span>

            <span className="text-[var(--foreground)]"> Codes</span>
          </motion.h1>
        </Link>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href, item.name)}
              className={`relative text-sm font-medium transition ${active === item.name
                ? "text-[var(--primary)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
            >
              {item.name}

              {active === item.name && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute -bottom-2 left-0 h-[2px] w-full rounded bg-[var(--primary)]"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Actions */}

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenChat}
            className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2 text-sm font-medium text-[var(--primary)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[rgba(var(--primary-rgb),0.08)]">
            <MessageCircle size={18} />
            AI Chat
          </button>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg,var(--primary),var(--secondary))",
            }}
          >
            <Download size={18} />
            Resume
          </a>

          <ThemeToggle />

          <ColorSwitcher />
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[var(--foreground)]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {/* <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-[var(--border)] bg-[color:var(--background)]/95 backdrop-blur-2xl">

            <div className="flex flex-col gap-5 p-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() =>
                    scrollToSection(item.href, item.name)
                  }
                  className={`text-left text-lg transition ${active === item.name
                    ? "text-[var(--primary)]"
                    : "text-[var(--muted)]"
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
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] py-3 font-medium text-[var(--primary)] transition-all hover:border-[var(--primary)] hover:bg-[rgba(var(--primary-rgb),0.08)]">

                  <MessageCircle size={18} />
                  AI Chat
                </button>

                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--primary),var(--secondary))",
                  }}
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      <MobileMenu
        isOpen={open}
        active={active}
        onClose={() => setOpen(false)}
        onNavigate={(href, name) => {
          scrollToSection(href, name);
        }}
        onOpenChat={onOpenChat}
      />
    </header>
  );
}