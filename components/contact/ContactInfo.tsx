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
    value: "+91 9328097349",
    href: "tel:+919328097349",
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
    href: "https://github.com/HimanshuUyt",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "http://www.linkedin.com/in/ighimanshuu",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/himuu.codes",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/HimanshuUyt",
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
        <span className="rounded-full border px-4 py-2 text-sm font-medium transition-colors"
          style={{
            borderColor: "rgba(var(--primary-rgb),0.25)",
            background: "rgba(var(--primary-rgb),0.08)",
            color: "var(--primary)",
          }}>
          Contact Information
        </span>

        <h2 className="mt-6 text-4xl font-black"
          style={{
            color: "var(--foreground)",
          }}>
          Let's Connect
        </h2>

        <p className="mt-5 leading-8"
          style={{
            color: "var(--muted)",
          }}>
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
                className="glass group flex items-center gap-5 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} shadow-lg`}
                >
                  <Icon
                    size={28}
                    className="text-white"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold"
                    style={{
                      color: "var(--foreground)",
                    }}>
                    {item.title}
                  </h3>

                  <p className="mt-1 transition-colors group-hover:text-[var(--primary)]"
                    style={{
                      color: "var(--muted)",
                    }}>
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
        className="glass rounded-3xl p-8 transition-colors"
        style={{
          borderColor: "var(--border)",
        }}
      >
        <div className="mb-6 flex items-center gap-3">
          <MessageCircle
            style={{
              color: "var(--primary)",
            }}
          />
          <h3 className="text-2xl font-bold"
            style={{
              color: "var(--foreground)",
            }}>
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
                  boxShadow:
                    "0 10px 30px rgba(var(--primary-rgb),0.25)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="glass flex h-14 w-14 items-center justify-center rounded-2xl text-xl transition-all duration-300 hover:scale-105"
                style={{
                  color: "var(--foreground)",
                  borderColor: "var(--border)",
                }}
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
        className="glass rounded-3xl p-8"
        style={{
          borderColor: "rgba(var(--primary-rgb),0.20)",
          background: `
            linear-gradient(
              135deg,
              rgba(var(--primary-rgb),0.08),
              rgba(var(--secondary-rgb),0.06),
              rgba(var(--accent-rgb),0.08)
            )
          `,
        }}
      >
        <div className="flex items-center gap-3">
          <Send
            style={{
              color: "var(--primary)",
            }}
          />

          <h3 className="text-2xl font-bold"
            style={{
              color: "var(--foreground)",
            }}>
            Ready to Start?
          </h3>
        </div>

        <p className="mt-4 leading-8"
          style={{
            color: "var(--muted)",
          }}>
          I'm currently available for freelance work,
          startups, AI projects, Flutter apps, and full-stack
          development.
        </p>

        <Link
          href="mailto:himuucodes@gmail.com"
          className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
          style={{
            background:
              "linear-gradient(135deg,var(--gradient-from),var(--gradient-to))",
            boxShadow:
              "0 12px 35px rgba(var(--primary-rgb),0.30)",
          }}
        >
          <Mail size={18} />
          Send an Email
        </Link>
      </motion.div>
    </div>
  );
}