import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    id: "google-ai-fundamentals",
    title: "Google AI Fundamentals",
    issuer: "Google",
    date: "2025",
    image: "/certificates/google-ai-fundamentals.svg",
    skills: ["Artificial Intelligence", "Machine Learning Basics"],
    status: "completed",
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "/certificates/aws-cloud-foundations.svg",
    skills: ["Cloud Computing", "AWS Core Services"],
    status: "completed",
  },
  {
    id: "developershub-internship",
    title: "AI/ML Engineer Internship Certificate",
    issuer: "DevelopersHub Corporation",
    date: "2026",
    image: "/certificates/developershub-internship.svg",
    skills: ["Machine Learning", "Model Training"],
    status: "in-progress",
  },
  {
    id: "future-certificate",
    title: "Future Certification",
    issuer: "TBA",
    date: "Upcoming",
    image: "/certificates/placeholder.svg",
    skills: [],
    status: "planned",
  },
];
