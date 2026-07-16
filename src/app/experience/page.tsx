import type { Metadata } from "next";
import { Briefcase, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience as an AI/ML Engineer Intern and MERN Stack Intern.",
};

export default function ExperiencePage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Experience</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            Where I&apos;ve worked
          </h1>
          <p className="mt-4 max-w-2xl text-foreground-secondary leading-relaxed">
            Hands-on experience across machine learning and full-stack web development.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border" aria-hidden="true" />
          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.08}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-border bg-card text-accent">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="flex-1 rounded-2xl border border-border bg-card p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h2 className="font-heading text-xl font-semibold">{exp.role}</h2>
                        <p className="mt-1 text-accent">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-xs text-foreground-secondary">{exp.duration}</span>
                        <div className="mt-1 flex items-center justify-end gap-1 text-xs text-foreground-secondary">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                      {exp.description}
                    </p>

                    <p className="mt-5 text-xs font-medium text-foreground-secondary">Responsibilities</p>
                    <ul className="mt-2 space-y-2">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-foreground-secondary">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
