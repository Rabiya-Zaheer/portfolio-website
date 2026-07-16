import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const infoBlocks = [
    { title: "Overview", body: project.overview },
    { title: "Problem Statement", body: project.problemStatement },
    { title: "Solution", body: project.solution },
  ];

  return (
    <article>
      <section className="relative overflow-hidden">
        <div className="relative aspect-[21/9] w-full">
          <Image src={project.heroImage} alt={project.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <Container className="relative -mt-24">
          <Reveal>
            <Link
              href="/portfolio"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex flex-wrap gap-1.5">
                {project.categories.map((c) => (
                  <Badge key={c} variant="accent">
                    {c}
                  </Badge>
                ))}
              </div>
              <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
                {project.title}
              </h1>
              <p className="mt-3 max-w-2xl text-foreground-secondary leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.7fr]">
            <div className="space-y-10">
              {infoBlocks.map((block, i) => (
                <Reveal key={block.title} delay={i * 0.05}>
                  <h2 className="font-heading text-xl font-semibold">{block.title}</h2>
                  <p className="mt-3 leading-relaxed text-foreground-secondary">{block.body}</p>
                </Reveal>
              ))}

              <Reveal delay={0.15}>
                <h2 className="font-heading text-xl font-semibold">Features</h2>
                <ul className="mt-3 space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-foreground-secondary">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <h2 className="font-heading text-xl font-semibold">Challenges</h2>
                <ul className="mt-3 space-y-2">
                  {project.challenges.map((c) => (
                    <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-foreground-secondary">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.25}>
                <h2 className="font-heading text-xl font-semibold">Lessons Learned</h2>
                <ul className="mt-3 space-y-2">
                  {project.lessonsLearned.map((l) => (
                    <li key={l} className="flex gap-2.5 text-sm leading-relaxed text-foreground-secondary">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {l}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {project.screenshots.length > 0 && (
                <Reveal delay={0.3}>
                  <h2 className="font-heading text-xl font-semibold">Screenshots</h2>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.screenshots.map((src) => (
                      <div key={src} className="relative aspect-video overflow-hidden rounded-xl border border-border">
                        <Image src={src} alt={`${project.title} screenshot`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>

            <Reveal direction="left" delay={0.1}>
              <div className="sticky top-24 space-y-6 rounded-2xl border border-border bg-card p-6">
                <div>
                  <p className="text-xs font-medium text-foreground-secondary">Year</p>
                  <p className="mt-1 text-sm">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground-secondary">Technologies Used</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t border-border pt-5">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="w-full">
                      <Github className="h-4 w-4" />
                      GitHub Repository
                    </Button>
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className="w-full">
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </article>
  );
}
