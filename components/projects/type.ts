export const projectCategories = [
  "All",
  "Featured",
  "Web",
  "Mobile",
  "AI",
  "Full Stack",
  "Backend",
  "Open Source",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];