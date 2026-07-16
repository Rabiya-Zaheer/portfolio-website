import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 78 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "LayoutTemplate",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React", level: 88 },
      { name: "Next.js", level: 82 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    icon: "BrainCircuit",
    skills: [
      { name: "TensorFlow", level: 78 },
      { name: "Scikit-learn", level: 82 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "IntelliJ", level: 70 },
    ],
  },
];
