"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Trophy,
  Users,
} from "lucide-react";

interface Stat {
  title: string;
  value: number;
  suffix?: string;
  icon: React.ElementType;
  color: string;
}

const stats: Stat[] = [
  {
    title: "Projects Completed",
    value: 30,
    suffix: "+",
    icon: Briefcase,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Technologies",
    value: 20,
    suffix: "+",
    icon: Code2,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Happy Clients",
    value: 15,
    suffix: "+",
    icon: Users,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Achievements",
    value: 12,
    suffix: "+",
    icon: Trophy,
    color: "from-orange-500 to-yellow-500",
  },
];

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const increment = Math.ceil(end / 60);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 25);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="relative overflow-hidden py-24 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      {/* Background Glow */}

      <div
        className="absolute left-0 top-20 h-80 w-80 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--primary-rgb),0.12)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-[120px]"
        style={{
          background: "rgba(var(--accent-rgb),0.12)",
        }}
      />

      <div className="container-custom px-6">
        {/* Header */}

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
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--primary)] backdrop-blur-xl">
            My Numbers
          </span>

          <h2 className="mt-6 text-4xl font-black text-[var(--foreground)] md:text-5xl">
            Building Quality
            <span className="gradient-text"> Experiences</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted]">
            Every project is an opportunity to learn,
            improve, and create meaningful digital
            experiences.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group card relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[var(--primary)]">
                {/* Glow */}

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--primary),var(--secondary),var(--accent))",
                    }}
                  />
                </div>

                {/* Icon */}

                <div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--primary),var(--secondary))",
                  }}
                >
                  <Icon
                    size={30}
                    className="text-white"
                  />
                </div>

                {/* Number */}

                <h3 className="mb-2 text-5xl font-black gradient-text">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </h3>

                {/* Label */}

                <p className="text-lg text-[var(--muted)]">
                  {stat.title}
                </p>

                {/* Bottom Line */}

                <div className="mt-6 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{
                    background:
                      "linear-gradient(90deg,var(--primary),var(--secondary))",
                  }} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}

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
            delay: 0.3,
          }}
          className="card glass mt-20 rounded-3xl p-10 text-center backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(var(--primary-rgb),0.08), rgba(var(--secondary-rgb),0.06), rgba(var(--accent-rgb),0.08))",
          }}
        >
          <h3 className="text-3xl font-bold text-[var(--foreground)]">
            Passion + Consistency = Great Results 🚀
          </h3>

          <p className="mx-auto mt-5 max-w-2x text-lg leading-8 text-[var(--muted)]">
            I focus on writing clean code, designing
            beautiful interfaces, and delivering scalable
            applications that provide real value for users
            and businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}