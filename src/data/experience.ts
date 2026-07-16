import type { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "developershub",
    company: "DevelopersHub Corporation",
    role: "AI/ML Engineer Intern",
    duration: "2025 — Present",
    location: "Remote",
    type: "Internship",
    description:
      "Working on applied machine learning projects, from raw data to trained, evaluated models.",
    responsibilities: [
      "Preprocessing and cleaning real-world datasets for model readiness",
      "Training and fine-tuning machine learning models",
      "Evaluating model performance and iterating on results",
      "Collaborating on end-to-end ML pipelines",
    ],
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    id: "dafi-labs",
    company: "Dafi Labs",
    role: "MERN Stack Intern",
    duration: "2024 — 2025",
    location: "Remote",
    type: "Internship",
    description:
      "Built and shipped features across the stack using the MERN ecosystem and modern React tooling.",
    responsibilities: [
      "Developed responsive UI components with React and Next.js",
      "Built REST APIs with Node.js and Express",
      "Designed and queried MongoDB data models",
      "Collaborated in an agile, code-reviewed workflow",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
];
