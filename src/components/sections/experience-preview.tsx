import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { experiences } from "@/data/experience";

export function ExperiencePreview() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've been building" />

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.08}>
              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold">{exp.role}</h3>
                    <span className="font-mono text-xs text-foreground-secondary">{exp.duration}</span>
                  </div>
                  <p className="mt-1 text-sm text-accent">{exp.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/experience">
            <Button variant="secondary">
              See full experience timeline
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
