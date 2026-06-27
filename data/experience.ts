// data/experience.ts

export interface Experience {
  id: string;

  role: string;
  company: string;

  period: string;

  location: string;

  employmentType:
    | "Full Time"
    | "Part Time"
    | "Freelance"
    | "Internship"
    | "Self Employed";

  current: boolean;

  logo?: string;

  description: string;

  technologies: string[];

  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "freelance",

    role: "Full Stack Developer",

    company: "Freelance",

    period: "2024 - Present",

    employmentType: "Self Employed",

    current: true,

    location: "Remote",

    logo: "/companies/freelance.png",

    description:
      "Building modern web applications, Flutter apps, AI-powered solutions, and scalable backend systems for clients and personal projects.",

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Flutter",
      "Firebase",
      "TypeScript",
      "AI",
    ],

    achievements: [
      "Developed responsive full-stack web applications.",
      "Built cross-platform Flutter mobile apps.",
      "Integrated AI chatbots and automation workflows.",
      "Designed scalable REST APIs and backend services.",
    ],
  },

  {
    id: "personal",

    role: "Frontend Developer",

    company: "Personal Projects",

    period: "2023 - 2024",

    employmentType: "Self Employed",

    current: false,

    location: "Remote",

    logo: "/companies/personal.png",

    description:
      "Focused on creating beautiful user interfaces, responsive websites, and improving user experiences using modern frontend technologies.",

    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],

    achievements: [
      "Created multiple portfolio and dashboard projects.",
      "Improved UI performance and accessibility.",
      "Implemented responsive mobile-first designs.",
    ],
  },
];

export const currentExperience = experiences.find(
  (experience) => experience.current
);

export const totalExperienceYears = 2;

export default experiences;