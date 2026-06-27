import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // Replace with your real domain

  title: {
    default: "Himuu Codes | Full Stack Developer",
    template: "%s | Himuu Codes",
  },

  description:
    "Himuu Codes is a Full Stack Developer specializing in Next.js, React, Flutter, Node.js, AI integration, and modern web applications.",

  keywords: [
    "Himuu Codes",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Flutter",
    "Node.js",
    "MongoDB",
    "Firebase",
    "AI",
    "MERN Stack",
    "Full Stack Developer",
  ],

  authors: [
    {
      name: "Himuu Codes",
    },
  ],

  creator: "Himuu Codes",
  applicationName: "Himuu Codes Portfolio",

  openGraph: {
    title: "Himuu Codes | Full Stack Developer",
    description:
      "Explore my portfolio featuring modern web apps, Flutter apps, AI projects, and full-stack development.",
    url: "https://your-domain.com",
    siteName: "Himuu Codes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Himuu Codes Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Himuu Codes | Full Stack Developer",
    description:
      "Modern Portfolio built with Next.js, Tailwind CSS, TypeScript, and AI.",
    images: ["/og-image.png"],
    creator: "@yourusername", // Optional
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans bg-black text-white antialiased`}
      >

        <main className="min-h-screen pt-20">{children}</main>
      </body>
    </html>
  );
}