import type { EducationItem, TimelineEvent } from "@/types";

export const education: EducationItem[] = [
  {
    id: "gcu-lahore",
    institution: "Government College University, Lahore",
    degree: "Bachelor of Science",
    field: "Computer Science",
    duration: "2022 — 2026",
    cgpa: "3.7 / 4.0",
    location: "Lahore, Pakistan",
    coursework: [
      "Machine Learning",
      "Natural Language Processing",
      "Web Engineering",
      "Compiler Construction",
      "Computer Architecture",
      "Human Computer Interaction",
    ],
  },
];

export const journeyTimeline: TimelineEvent[] = [
  {
    id: "started-cs",
    year: "2022",
    title: "Started Computer Science",
    description:
      "Began a Bachelor's degree in Computer Science at Government College University, Lahore.",
    icon: "GraduationCap",
  },
  {
    id: "learned-python",
    year: "2023",
    title: "Learned Python",
    description: "Picked up Python as a primary language and started building small automation and data tools.",
    icon: "Code2",
  },
  {
    id: "ml-projects",
    year: "2023",
    title: "Built ML Projects",
    description: "Built first machine learning projects covering classification, regression, and NLP basics.",
    icon: "BrainCircuit",
  },
  {
    id: "ai-internship",
    year: "2025",
    title: "AI Internship",
    description: "Joined DevelopersHub Corporation as an AI/ML Engineer Intern, working on real datasets and models.",
    icon: "Sparkles",
  },
  {
    id: "mern-internship",
    year: "2024",
    title: "MERN Internship",
    description: "Joined Dafi Labs as a MERN Stack Intern, shipping full-stack features in production.",
    icon: "Layers",
  },
  {
    id: "modern-fullstack",
    year: "2026",
    title: "Currently Learning Modern Full Stack Development",
    description: "Deepening expertise in Next.js, TypeScript, and scalable full-stack architecture.",
    icon: "Rocket",
  },
];
