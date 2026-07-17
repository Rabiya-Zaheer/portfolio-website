import type { EducationItem, TimelineEvent } from "@/types";

export const education: EducationItem[] = [
  {
    id: "gcu-lahore",
    institution: "Government College University, Lahore",
    degree: "Bachelor of Science",
    field: "Computer Science",
    duration: "2023 — 2027",
    cgpa: "2.96 / 4.0",
    location: "Lahore, Pakistan",
    coursework: [
      {
        semester: "Semester 1",
        courses: ["Applications of ICT","Discrete Structures", "Applied Physics"],
      },
      {
        semester: "Semester 2",
        courses: ["Programming Fundamentals","Digital Logic Design"],
      },
      {
        semester: "Semester 3",
        courses: ["Object Oriented Programming","Software Engineering"],
      },
      {
        semester: "Semester 4",
        courses: ["Artificial Intelligence","Database Systems", "Data Structures and Algorithms", "Operating Systems"],
      },
      {
        semester: "Semester 5",
        courses: [ "Machine Learning", "Advanced Database Systems", "Design and Analysis of Algorithms","Computer Organization and Assembly Language"],
      },
      {
        semester: "Semester 6",
        courses: ["Web Engineering", "Natural Language Processing", "Compiler Construction","Computer Architecture", "Human Computer Interaction"],
      },
    ],
  },
];

export const journeyTimeline: TimelineEvent[] = [
  {
    id: "started-cs",
    year: "2023",
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
    year: "2024",
    title: "Built ML Projects",
    description: "Built first machine learning projects covering classification, regression, and NLP basics.",
    icon: "BrainCircuit",
  },
  {
    id: "ai-internship",
    year: "2026",
    title: "AI Internship",
    description: "Joined DevelopersHub Corporation as an AI/ML Engineer Intern, working on real datasets and models.",
    icon: "Sparkles",
  },
  {
    id: "mern-internship",
    year: "2026",
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
