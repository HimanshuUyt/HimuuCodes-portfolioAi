"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Heart,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: FaInstagram,
  },
  {
    name: "X",
    href: "https://x.com/yourusername",
    icon: FaXTwitter,
  },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)]">
      {/* Background Glow */}

      <div
        className="absolute left-0 top-0 h-72 w-72 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--primary-rgb),0.12)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--accent-rgb),0.12)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="mb-5 text-3xl font-black"
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,var(--primary),var(--secondary),var(--accent))",
                }}
              >
                Himuu
              </span>{" "}
              <span className="text-[var(--foreground)]">Codes</span>
            </motion.h2>

            <p className="leading-7 text-[var(--muted)]">
              Building beautiful, scalable and AI-powered web &
              mobile applications with modern technologies.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-[var(--muted)]">
              <MapPin size={16} />
              India
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-[var(--muted)]">
              <Mail size={16} />
              your@email.com
            </div>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-[var(--foreground)]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-[var(--muted)] transition-all duration-300 hover:text-[var(--primary)]">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3 text-[var(--muted)]">
              <li>Next.js Development</li>
              <li>Flutter Apps</li>
              <li>MERN Stack</li>
              <li>AI Integration</li>
              <li>REST APIs</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="flex flex-wrap gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-xl text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-lg">
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 backdrop-blur-xl">
              <div className="mb-2 flex items-center gap-2 text-[var(--primary)]">
                <Sparkles size={18} />
                Available for Freelance
              </div>

              <p className="text-sm text-[var(--muted)]">
                Let's build something amazing together.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div
          className="my-10 h-px"
          style={{
            background:
              "linear-gradient(to right,transparent,var(--border),transparent)",
          }}
        />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="flex items-center gap-2 text-center text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Himuu Codes. Made with
            <Heart
              size={16}
              className="fill-rose-500 text-rose-500"
            />
            using Next.js & Tailwind CSS.
          </p>

          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-lg">
            Back to Top

            <ArrowUp
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[var(--primary)]"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}