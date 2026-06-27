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
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="mb-5 text-3xl font-black"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Himuu
              </span>{" "}
              <span className="text-white">Codes</span>
            </motion.h2>

            <p className="leading-7 text-gray-400">
              Building beautiful, scalable and AI-powered web &
              mobile applications with modern technologies.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={16} />
              India
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
              <Mail size={16} />
              your@email.com
            </div>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 transition hover:text-cyan-400"
                  >
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

            <ul className="space-y-3 text-gray-400">
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
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-xl text-white transition hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
              <div className="mb-2 flex items-center gap-2 text-cyan-400">
                <Sparkles size={18} />
                Available for Freelance
              </div>

              <p className="text-sm text-gray-300">
                Let's build something amazing together.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="flex items-center gap-2 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Himuu Codes. Made with
            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />
            using Next.js & Tailwind CSS.
          </p>

          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-cyan-500 hover:bg-cyan-500/10"
          >
            Back to Top

            <ArrowUp
              size={18}
              className="transition group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}