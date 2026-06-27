"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail } from "lucide-react";

const socialLinks = [
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
  {
    name: "Email",
    href: "mailto:your@email.com",
    icon: Mail,
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6,
        duration: 0.6,
      }}
      className="mt-12 flex flex-wrap items-center gap-4"
    >
      {socialLinks.map((social, index) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={social.name}
            href={social.href}
            target={
              social.href.startsWith("mailto:")
                ? undefined
                : "_blank"
            }
            rel="noopener noreferrer"
            aria-label={social.name}
            whileHover={{
              y: -6,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="group relative"
          >
            {/* Tooltip */}
            <span className="pointer-events-none absolute -left-1/2 top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-3 whitespace-nowrap rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--foreground)] backdrop-blur-xl shadow-lg opacity-0 transition-all duration-300 group-hover:-translate-y-[calc(100%+6px)] group-hover:opacity-100">
              {social.name}
            </span>

            {/* Button */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] text-2xl text-[var(--foreground)] backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              style={{
                boxShadow:
                  "0 8px 30px rgba(var(--primary-rgb),0)",
              }}>
                
              <Icon
                size={22}
                className="relative z-10"
              />
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
}