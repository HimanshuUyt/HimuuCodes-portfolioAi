// data/testimonials.ts

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;

  image: string;

  rating: number;

  message: string;

  project: string;

  location: string;

  featured: boolean;

  linkedin?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",

    name: "Rahul Sharma",

    role: "Startup Founder",

    company: "TechNova",

    image: "/testimonials/rahul.jpg",

    rating: 5,

    project: "AI Portfolio Website",

    location: "India",

    featured: true,

    message:
      "Himanshu delivered an outstanding portfolio website with a modern UI and AI assistant. Communication was excellent, the project was completed on time, and the final product exceeded our expectations.",

    linkedin: "https://linkedin.com/in/rahulsharma",
  },

  {
    id: "2",

    name: "Priya Patel",

    role: "Business Owner",

    company: "Growth Hub",

    image: "/testimonials/priya.jpg",

    rating: 5,

    project: "Business Website",

    location: "India",

    featured: true,

    message:
      "Professional, fast, and highly skilled. The website is responsive, beautiful, and performs extremely well. I would definitely recommend Himanshu for web development projects.",
  },

  {
    id: "3",

    name: "Aman Verma",

    role: "Product Manager",

    company: "Digital Solutions",

    image: "/testimonials/aman.jpg",

    rating: 5,

    project: "Admin Dashboard",

    location: "India",

    featured: true,

    message:
      "Excellent dashboard implementation with analytics, authentication, and a clean UI. The attention to detail and code quality were impressive.",
  },

  {
    id: "4",

    name: "Sneha Gupta",

    role: "Entrepreneur",

    company: "FinTech Startup",

    image: "/testimonials/sneha.jpg",

    rating: 5,

    project: "MoneyFlow App",

    location: "India",

    featured: true,

    message:
      "The MoneyFlow application is intuitive, fast, and beautifully designed. AI insights and analytics make it stand out from similar finance apps.",
  },

  {
    id: "5",

    name: "Michael Johnson",

    role: "Software Engineer",

    company: "Freelance Client",

    image: "/testimonials/michael.jpg",

    rating: 5,

    project: "AI Chatbot",

    location: "USA",

    featured: false,

    message:
      "The AI chatbot integration works flawlessly. Responses are fast, accurate, and the user experience is excellent.",
  },

  {
    id: "6",

    name: "Emily Davis",

    role: "Marketing Manager",

    company: "Creative Studio",

    image: "/testimonials/emily.jpg",

    rating: 5,

    project: "Landing Page",

    location: "Canada",

    featured: false,

    message:
      "Amazing work! The landing page is visually stunning, optimized for performance, and helped improve our conversion rate significantly.",
  },
];

export const featuredTestimonials = testimonials.filter(
  (testimonial) => testimonial.featured
);

export const averageRating =
  testimonials.reduce(
    (sum, testimonial) => sum + testimonial.rating,
    0
  ) / testimonials.length;

export const totalReviews = testimonials.length;

export default testimonials;