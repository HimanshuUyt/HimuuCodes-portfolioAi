"use client";

import { useEffect, useState } from "react";

import LoadingScreen from "@/components/loading/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Statistics from "@/components/about/Statistics";
import Experience from "@/components/about/Experience";
import Education from "@/components/about/Education";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

import AIChat from "@/components/chatbot/AIChat";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar
        onOpenChat={() => setChatOpen(true)}
      />

      <Hero />
      <About />
      <Statistics />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />

      <AIChat
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
      />
    </main>
  );
}