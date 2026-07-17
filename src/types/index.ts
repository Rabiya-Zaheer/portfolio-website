export interface Project {
  slug: string;
  title: string;
  description: string;
  overview: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  lessonsLearned: string[];
  categories: string[];
  thumbnail: string;
  heroImage: string;
  screenshots: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
}

export interface SemesterCoursework {
  semester: string;
  courses: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  cgpa: string;
  location: string;
  coursework: SemesterCoursework[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image: string;
  skills: string[];
  status: "completed" | "in-progress" | "planned";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
}
