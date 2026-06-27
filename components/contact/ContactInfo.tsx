"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  MessageCircle,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "himuucodes@gmail.com",
    href: "mailto:himuucodes@gmail.com",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Surat, Gujarat, India",
    href: "https://maps.google.com/?q=Surat,Gujarat",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat • 9:00 AM - 7:00 PM",
    href: "#",
    color: "from-purple-500 to-pink-600",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/yourusername",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/yourusername",
    label: "X",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
      >
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          Contact Information
        </span>

        <h2 className="mt-6 text-4xl font-black text-white">
          Let's Connect
        </h2>

        <p className="mt-5 leading-8 text-gray-400">
          Have an idea, project, or collaboration in mind?
          Feel free to reach out. I'm always excited to build
          modern web applications, AI solutions, and mobile
          experiences.
        </p>
      </motion.div>

      {/* Contact Cards */}

      <div className="space-y-5">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <Link
                href={item.href}
                target={
                  item.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-cyan-500/40"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
                >
                  <Icon
                    size={28}
                    className="text-white"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-gray-400 transition group-hover:text-cyan-300">
                    {item.value}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Social */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
        }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <div className="mb-6 flex items-center gap-3">
          <MessageCircle className="text-cyan-400" />
          <h3 className="text-2xl font-bold text-white">
            Follow Me
          </h3>
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-white transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* CTA */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
        }}
        className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <Send className="text-cyan-400" />

          <h3 className="text-2xl font-bold text-white">
            Ready to Start?
          </h3>
        </div>

        <p className="mt-4 leading-8 text-gray-400">
          I'm currently available for freelance work,
          startups, AI projects, Flutter apps, and full-stack
          development.
        </p>

        <Link
          href="mailto:himuucodes@gmail.com"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white transition hover:scale-105"
        >
          <Mail size={18} />
          Send an Email
        </Link>
      </motion.div>
    </div>
  );
}