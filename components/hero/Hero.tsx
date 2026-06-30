"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/data/profile";
import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";


export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(
        (prev) => (prev + 1) % profile.roles.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)] transition-colors duration-300">
      {/* Background Glow */}

      <div
        className="absolute left-0 top-20 h-96 w-96 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--primary-rgb),0.15)",
        }}
      />

      <div
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--accent-rgb),0.15)",
        }}
      />

      {/* Grid */}

      <div className="absolute inset-0 grid-bg" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2 text-sm text-[var(--primary)] backdrop-blur-xl">
            <Sparkles size={16} />
            {profile.availability}
          </div>

          <h2 className="text-lg font-medium text-[var(--muted)]">
            {profile.greeting}
          </h2>

          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">
            <span className="gradient-text bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,var(--primary),var(--secondary),var(--accent))",
              }}>
              {profile.nickname}
            </span>

            <br />

            <span className="text-[var(--foreground)]">{profile.lastName}</span>
          </h1>

          <div className="mt-6 h-10 gradient-text">
            <motion.h3
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-2xl font-semibold text-[var(--primary)]"
            >
              {profile.roles[roleIndex]}
            </motion.h3>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={scrollToProjects}
              className="btn-primary group px-7 py-4"
            >
              View Projects

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <Link
              href={profile.resume}
              className="btn-outline px-7 py-4 backdrop-blur-xl">
              <Download size={18} />
              Resume
            </Link>
          </div>

          <div className="mt-12 flex gap-5">
            {[
              {
                icon: <FaGithub />,
                link: profile.social.github,
              },
              {
                icon: <FaLinkedin />,
                link: profile.social.linkedin,
              },
              {
                icon: <FaInstagram />,
                link: profile.social.instagram,
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                whileHover={{
                  y: -6,
                  scale: 1.1,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-2xl text-[var(--foreground)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-lg">
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg,var(--primary),var(--accent))",
              }} />

            <div className="relative overflow-hidden rounded-full border border-[var(--border)] bg-[var(--card)] p-3 backdrop-blur-xl shadow-xl">
              <Image
                src={profile.profileImage}
                alt="Himuu Codes"
                width={420}
                height={420}
                priority
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Tech */}

          {profile.floatingTech.map((tech, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
              }}
              style={{
                top: tech.top,
                bottom: tech.bottom,
                left: tech.left,
                right: tech.right,
              }}
              className="absolute rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2 text-sm font-medium text-[var(--foreground)] backdrop-blur-xl shadow-lg">
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}