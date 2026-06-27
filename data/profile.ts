// data/profile.ts

const profile = {
  // Basic Information
  name: "Himanshu",
  nickname: "Himuu",
  lastName: "Codes",

  greeting: "Hello, I'm",

  title: "Full Stack AI Engineer",

  roles: [
    "Full Stack Developer",
    "AI Developer",
    "Flutter Developer",
    "Next.js Developer",
  ],

  availability: "Available for Freelance",

  tagline:
    "I build modern websites, AI applications, Flutter apps, and scalable full-stack solutions with beautiful UI, exceptional performance, and clean architecture.",

  bio: `
I'm a passionate Full Stack Developer specializing in
Next.js, React, Node.js, Flutter, AI Integration, and the MERN Stack.

I enjoy building scalable applications, intelligent AI assistants,
beautiful user interfaces, and high-performance backend systems.
`,

  // Hero Buttons
  buttons: {
    primary: {
      text: "View Projects",
      target: "#projects",
    },

    secondary: {
      text: "Resume",
      href: "/resume.pdf",
    },
  },

  // Images
  profileImage: "/images/hero/me.png",

  // Floating Technologies
  floatingTech: [
    {
      name: "Next.js",
      top: "5%",
      left: "-5%",
    },
    {
      name: "Flutter",
      top: "20%",
      right: "-10%",
    },
    {
      name: "React",
      bottom: "18%",
      left: "-8%",
    },
    {
      name: "AI",
      bottom: "0%",
      right: "0%",
    },
  ],

  // Contact
  location: "India",

  email: "your@email.com",

  phone: "+91 XXXXX XXXXX",

  website: "https://your-domain.com",

  resume: "/resume.pdf",

  social: {
    github: "https://github.com/yourusername",

    linkedin: "https://linkedin.com/in/yourusername",

    instagram: "https://instagram.com/yourusername",

    twitter: "https://twitter.com/yourusername",

    youtube: "https://youtube.com/@yourusername",
  },

  // Statistics
  experience: {
    years: 3,
    projects: 50,
    clients: 20,
    technologies: 25,
  },

  // Skills
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Flutter",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "AI",
    "Groq",
  ],
};

export default profile;