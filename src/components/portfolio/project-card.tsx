import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/5">
      <Link href={`/portfolio/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.categories.slice(0, 3).map((category) => (
            <Badge key={category} variant="accent">
              {category}
            </Badge>
          ))}
        </div>

        <Link href={`/portfolio/${project.slug}`}>
          <h3 className="font-heading text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-secondary line-clamp-3">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-background-secondary px-2 py-1 font-mono text-[11px] text-foreground-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-foreground-secondary transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-foreground-secondary transition-colors hover:text-accent"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
          <Link href={`/portfolio/${project.slug}`}>
            <Button variant="link" size="sm">
              Read more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
