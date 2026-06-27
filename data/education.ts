// data/education.ts

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;

  startYear: string;
  endYear: string;

  grade?: string;
  current: boolean;

  location: string;

  logo?: string;

  description: string;

  achievements: string[];

  subjects: string[];

  technologies?: string[];
}

export const education: Education[] = [
  {
    id: "bca",

    institution: "Your University Name",

    degree: "Bachelor of Computer Applications (BCA)",

    field: "Computer Applications",

    startYear: "2022",

    endYear: "2025",

    current: false,

    location: "India",

    logo: "/education/university.png",

    grade: "First Class",

    description:
      "Studied computer science fundamentals, software engineering, programming, database management, networking, and modern web technologies.",

    achievements: [
      "Built multiple Full Stack projects.",
      "Specialized in MERN Stack Development.",
      "Developed Flutter mobile applications.",
      "Worked on AI-powered applications.",
      "Completed academic software projects.",
    ],

    subjects: [
      "Data Structures",
      "Operating Systems",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Object-Oriented Programming",
      "Web Technologies",
      "Cloud Computing",
    ],

    technologies: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
    ],
  },

  {
    id: "higher-secondary",

    institution: "Your Higher Secondary School",

    degree: "Higher Secondary (12th)",

    field: "Science / Commerce",

    startYear: "2020",

    endYear: "2022",

    current: false,

    location: "India",

    logo: "/education/school.png",

    grade: "A Grade",

    description:
      "Completed higher secondary education while building a strong foundation in mathematics, computer science, and logical thinking.",

    achievements: [
      "Excellent academic performance.",
      "Started learning programming.",
      "Built first websites.",
    ],

    subjects: [
      "Mathematics",
      "Computer Science",
      "English",
      "Physics",
      "Chemistry",
    ],
  },

  {
    id: "self-learning",

    institution: "Self Learning",

    degree: "Professional Development",

    field: "Web Development & Artificial Intelligence",

    startYear: "2022",

    endYear: "Present",

    current: true,

    location: "Online",

    logo: "/education/self-learning.png",

    description:
      "Continuously learning modern technologies through documentation, open-source projects, online courses, and real-world development.",

    achievements: [
      "Built AI-powered applications.",
      "Developed production-ready Flutter apps.",
      "Created full-stack MERN projects.",
      "Designed responsive UI with Tailwind CSS.",
      "Integrated Groq and OpenAI APIs.",
    ],

    subjects: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Flutter",
      "MongoDB",
      "Firebase",
      "Artificial Intelligence",
      "Prompt Engineering",
      "System Design",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Groq",
      "OpenAI",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
];

export const latestEducation = education[0];

export const educationTimeline = education.sort(
  (a, b) => Number(b.startYear) - Number(a.startYear)
);

export default education;