import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sentiment-analysis-engine",
    title: "Sentiment Analysis Engine",
    description:
      "An NLP pipeline that classifies customer feedback sentiment in real time using a fine-tuned transformer model.",
    overview:
      "A machine learning service that ingests raw customer feedback and returns sentiment scores with confidence intervals, built for integration into support dashboards.",
    problemStatement:
      "Support teams were manually triaging thousands of feedback entries weekly with no reliable way to prioritize urgent, negative feedback.",
    solution:
      "Built a fine-tuned transformer-based classifier served behind a lightweight FastAPI service, with a preprocessing pipeline for cleaning and batching text.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "FastAPI"],
    features: [
      "Real-time sentiment scoring with confidence intervals",
      "Batch processing for historical feedback datasets",
      "Configurable classification thresholds",
      "REST API for dashboard integration",
    ],
    challenges: [
      "Handling class imbalance between positive and negative samples",
      "Reducing inference latency for real-time use",
    ],
    lessonsLearned: [
      "Data quality mattered more than model complexity",
      "Proper evaluation metrics prevented misleading accuracy numbers",
    ],
    categories: ["AI", "Machine Learning", "Python"],
    thumbnail: "/projects/sentiment-analysis-thumb.svg",
    heroImage: "/projects/sentiment-analysis-hero.svg",
    screenshots: ["/projects/sentiment-analysis-1.svg", "/projects/sentiment-analysis-2.svg"],
    githubUrl: "https://github.com/rabiyazaheer/sentiment-analysis-engine",
    liveUrl: "https://sentiment-demo.example.com",
    featured: true,
    year: "2025",
  },
  {
    slug: "house-price-predictor",
    title: "House Price Predictor",
    description:
      "A regression model with an interactive interface for estimating property prices from structured housing data.",
    overview:
      "An end-to-end ML project covering exploratory data analysis, feature engineering, model comparison, and a simple prediction interface.",
    problemStatement:
      "First-time buyers lacked an accessible way to sanity-check whether a listed price aligned with comparable properties.",
    solution:
      "Trained and compared multiple regression models, selected the best performer via cross-validation, and exposed it through a form-based interface.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    features: [
      "Exploratory data analysis notebooks",
      "Model comparison across linear regression, random forest, and gradient boosting",
      "Interactive price estimation form",
      "Feature importance visualization",
    ],
    challenges: ["Cleaning inconsistent categorical fields", "Avoiding overfitting on a small dataset"],
    lessonsLearned: ["Feature engineering had a larger impact than model choice", "Cross-validation caught overfitting early"],
    categories: ["AI", "Machine Learning", "Python"],
    thumbnail: "/projects/house-price-thumb.svg",
    heroImage: "/projects/house-price-hero.svg",
    screenshots: ["/projects/house-price-1.svg"],
    githubUrl: "https://github.com/rabiyazaheer/house-price-predictor",
    featured: false,
    year: "2024",
  },
  {
    slug: "taskflow-mern",
    title: "TaskFlow — Team Task Manager",
    description:
      "A full-stack MERN application for team task management with real-time updates and role-based access.",
    overview:
      "A production-style task management app built to practice full-stack architecture, authentication, and state management at scale.",
    problemStatement:
      "Small teams needed a lightweight, focused task tool without the overhead of enterprise project management software.",
    solution:
      "Built a MERN application with JWT authentication, role-based permissions, and a responsive React interface backed by a REST API.",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    features: [
      "Role-based access control for admins and members",
      "Drag-and-drop task boards",
      "Real-time task status updates",
      "Responsive design across devices",
    ],
    challenges: ["Structuring MongoDB schemas for flexible task relationships", "Managing client-side state across nested views"],
    lessonsLearned: ["Clear API contracts simplified frontend development", "Optimistic UI updates improved perceived performance"],
    categories: ["Web", "React", "MERN"],
    thumbnail: "/projects/taskflow-thumb.svg",
    heroImage: "/projects/taskflow-hero.svg",
    screenshots: ["/projects/taskflow-1.svg", "/projects/taskflow-2.svg"],
    githubUrl: "https://github.com/rabiyazaheer/taskflow-mern",
    liveUrl: "https://taskflow-demo.example.com",
    featured: true,
    year: "2025",
  },
  {
    slug: "devnotes-blog-platform",
    title: "DevNotes — Developer Blog Platform",
    description:
      "A full-stack blogging platform for developers with markdown support, tagging, and a clean reading experience.",
    overview:
      "A content platform built to explore full-stack CRUD architecture, markdown rendering, and search on the MERN stack.",
    problemStatement: "Wanted a minimal, fast writing space without the bloat of typical CMS platforms.",
    solution: "Built a MERN application with markdown editing, tag-based filtering, and a MongoDB-backed content model.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Markdown editor with live preview", "Tag-based filtering and search", "Reading time estimation"],
    challenges: ["Sanitizing and rendering markdown safely", "Designing a flexible content schema"],
    lessonsLearned: ["Schema flexibility paid off as requirements evolved"],
    categories: ["Web", "MERN", "React"],
    thumbnail: "/projects/devnotes-thumb.svg",
    heroImage: "/projects/devnotes-hero.svg",
    screenshots: ["/projects/devnotes-1.svg"],
    githubUrl: "https://github.com/rabiyazaheer/devnotes-blog-platform",
    featured: false,
    year: "2024",
  },
  {
    slug: "handwritten-digit-classifier",
    title: "Handwritten Digit Classifier",
    description:
      "A convolutional neural network trained on MNIST to classify handwritten digits with a live drawing canvas demo.",
    overview:
      "A computer vision project exploring CNN architecture design and deployment of a trained model behind an interactive canvas.",
    problemStatement: "Wanted a hands-on introduction to convolutional neural networks with a tangible, visual demo.",
    solution: "Trained a CNN on the MNIST dataset and built a canvas-based interface for real-time digit prediction.",
    technologies: ["Python", "TensorFlow", "NumPy"],
    features: ["Live drawing canvas for input", "Real-time digit prediction", "Model accuracy and confidence display"],
    challenges: ["Matching canvas input preprocessing to training data format"],
    lessonsLearned: ["Small preprocessing mismatches can silently hurt accuracy"],
    categories: ["AI", "Machine Learning", "Python"],
    thumbnail: "/projects/digit-classifier-thumb.svg",
    heroImage: "/projects/digit-classifier-hero.svg",
    screenshots: ["/projects/digit-classifier-1.svg"],
    githubUrl: "https://github.com/rabiyazaheer/handwritten-digit-classifier",
    featured: false,
    year: "2024",
  },
  {
    slug: "portfolio-cms-dashboard",
    title: "Portfolio CMS Dashboard",
    description:
      "An internal admin dashboard concept for managing portfolio content, designed as groundwork for a future CMS integration.",
    overview:
      "A React-based dashboard prototype exploring authenticated content management patterns ahead of a full backend integration.",
    problemStatement: "Manually editing portfolio content in code did not scale as content grew.",
    solution: "Prototyped an admin dashboard UI for managing projects, experience, and certificates as structured content.",
    technologies: ["React", "Next.js", "TypeScript"],
    features: ["Content table views with search and filters", "Form-based content editing UI", "Role-gated admin routes (planned)"],
    challenges: ["Designing a UI that could adapt to a future real backend without rework"],
    lessonsLearned: ["Separating UI from data early made this prototype easy to extend"],
    categories: ["Web", "React"],
    thumbnail: "/projects/cms-dashboard-thumb.svg",
    heroImage: "/projects/cms-dashboard-hero.svg",
    screenshots: ["/projects/cms-dashboard-1.svg"],
    githubUrl: "https://github.com/rabiyazaheer/portfolio-cms-dashboard",
    featured: false,
    year: "2026",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  projects.forEach((project) => project.categories.forEach((c) => categories.add(c)));
  return ["All", ...Array.from(categories)];
}
