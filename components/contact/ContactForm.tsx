"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      setSuccess(false);

      // Replace with your API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1800));

      console.log(data);

      setSuccess(true);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
    >
      <div className="mb-8">
        <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          Contact Form
        </span>

        <h2 className="mt-5 text-3xl font-bold">
          Let's Build Something Amazing
        </h2>

        <p className="mt-3 text-muted-foreground">
          Have an idea or project? Fill out the form below and I'll reply as
          soon as possible.
        </p>
      </div>

      {success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-500"
        >
          <CheckCircle2 className="h-5 w-5" />

          <span>Your message has been sent successfully.</span>
        </motion.div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Name */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <div className="relative">
            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <input
              {...register("name")}
              placeholder="John Doe"
              className="h-14 w-full rounded-xl border border-border bg-background pl-12 pr-4 outline-none transition-all focus:border-primary"
            />
          </div>

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <input
              {...register("email")}
              type="email"
              placeholder="hello@example.com"
              className="h-14 w-full rounded-xl border border-border bg-background pl-12 pr-4 outline-none transition-all focus:border-primary"
            />
          </div>

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Subject
          </label>

          <div className="relative">
            <MessageSquare className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <input
              {...register("subject")}
              placeholder="Project Discussion"
              className="h-14 w-full rounded-xl border border-border bg-background pl-12 pr-4 outline-none transition-all focus:border-primary"
            />
          </div>

          {errors.subject && (
            <p className="mt-2 text-sm text-red-500">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Message
          </label>

          <textarea
            {...register("message")}
            rows={6}
            placeholder="Tell me about your project..."
            className="w-full rounded-xl border border-border bg-background p-4 outline-none transition-all focus:border-primary"
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          disabled={isSubmitting}
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-primary font-semibold text-primary-foreground transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}