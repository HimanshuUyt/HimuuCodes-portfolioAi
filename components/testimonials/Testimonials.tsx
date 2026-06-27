"use client";

import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";

import TestimonialCard, {
  Testimonial,
} from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO",
    company: "TechNova",
    image: "/images/testimonials/client1.jpg",
    rating: 5,
    review:
      "Working with Himuu Codes was an outstanding experience. The project was delivered ahead of schedule with excellent code quality and a beautiful user interface.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "StartupHub",
    image: "/images/testimonials/client2.jpg",
    rating: 5,
    review:
      "The attention to detail, communication, and technical expertise exceeded our expectations. Our web application performs flawlessly.",
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Founder",
    company: "FinCore",
    image: "/images/testimonials/client3.jpg",
    rating: 5,
    review:
      "From UI/UX to backend architecture, everything was handled professionally. I highly recommend Himuu Codes for modern web and AI solutions.",
  },
  {
    id: 4,
    name: "Emily Brown",
    role: "Marketing Director",
    company: "Creative Studio",
    image: "/images/testimonials/client4.jpg",
    rating: 5,
    review:
      "Amazing developer! Fast delivery, clean architecture, responsive design, and continuous support throughout the entire project.",
  },
  {
    id: 5,
    name: "Michael Lee",
    role: "CTO",
    company: "CloudWorks",
    image: "/images/testimonials/client5.jpg",
    rating: 5,
    review:
      "The Flutter application and backend APIs were exceptionally well built. Performance, scalability, and user experience are top-notch.",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    role: "Business Owner",
    company: "Digital Agency",
    image: "/images/testimonials/client6.jpg",
    rating: 5,
    review:
      "Professional, creative, and highly skilled. Every requirement was implemented perfectly, and the final product exceeded our expectations.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="container-custom relative z-10 px-6">
        {/* Section Header */}

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
            duration: 0.6,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            <MessageCircleHeart size={18} />
            Testimonials
          </div>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            What Clients
            <span className="gradient-text">
              {" "}
              Say About Me
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Building long-term relationships through quality
            work, modern solutions, and exceptional user
            experiences.
          </p>
        </motion.div>

        {/* Testimonials Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
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
            delay: 0.3,
          }}
          className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-10 text-center backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold text-white">
            Ready to Work Together?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            Whether you're building a startup, business
            website, AI application, SaaS platform, or mobile
            app, I'd love to help bring your ideas to life.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
          >
            Let's Start a Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}