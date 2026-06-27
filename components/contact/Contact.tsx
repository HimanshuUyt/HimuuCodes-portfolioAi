"use client";

import { motion } from "framer-motion";

import Availability from "./Availability";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-bg relative overflow-hidden py-24 transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="absolute left-0 top-20 h-72 w-72 rounded-full blur-[120px]"
          style={{
            background:
              "rgba(var(--primary-rgb),0.10)",
          }}
        />

        <div
          className="absolute right-0 bottom-20 h-80 w-80 rounded-full blur-[120px]"
          style={{
            background:
              "rgba(var(--accent-rgb),0.10)",
          }}
        />

      </div>

      <div className="container-custom relative z-10 px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
            style={{
              borderColor:
                "rgba(var(--primary-rgb),0.25)",
              background:
                "rgba(var(--primary-rgb),0.08)",
              color: "var(--primary)",
            }}>
            Contact
          </span>

          <h2
            className="mt-6 text-4xl font-bold tracking-tight md:text-5xl"
            style={{
              color: "var(--foreground)",
            }}
          >
            Let's Work Together
          </h2>

          <p
            className="mt-5 text-lg leading-8"
            style={{
              color: "var(--muted)",
            }}
          >
            Have an idea, startup, AI project, or freelance opportunity?
            I'd love to hear about it. Send me a message and let's create
            something amazing together.
          </p>
        </motion.div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Availability />
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <ContactInfo />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}