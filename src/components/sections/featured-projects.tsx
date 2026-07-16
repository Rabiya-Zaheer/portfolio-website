import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-24 sm:py-28 bg-background-secondary">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects"
          description="A mix of applied machine learning and full-stack products, from idea to deployment."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/portfolio">
            <Button variant="secondary">
              View full portfolio
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
