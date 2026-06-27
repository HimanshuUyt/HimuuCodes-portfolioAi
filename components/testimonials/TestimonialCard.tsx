"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  review: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({
  testimonial,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.article
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
        duration: 0.5,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40"
    >
      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Quote */}

      <div className="relative mb-6 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600">
          <Quote
            size={26}
            className="text-white"
          />
        </div>

        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>

      {/* Review */}

      <p className="relative min-h-[170px] leading-8 text-gray-400">
        “{testimonial.review}”
      </p>

      {/* Divider */}

      <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* User */}

      <div className="relative flex items-center gap-4">
        <div className="overflow-hidden rounded-full border-2 border-cyan-500/20">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={60}
            height={60}
            className="h-15 w-15 object-cover"
          />
        </div>

        <div>
          <h3 className="font-bold text-white">
            {testimonial.name}
          </h3>

          <p className="text-sm text-gray-400">
            {testimonial.role}
          </p>

          <span className="text-sm font-medium text-cyan-400">
            {testimonial.company}
          </span>
        </div>
      </div>

      {/* Bottom Border */}

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}