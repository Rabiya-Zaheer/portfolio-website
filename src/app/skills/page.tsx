import type { Metadata } from "next";
import { BrainCircuit, Code2, Database, LayoutTemplate, Server, Wrench } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/animations/reveal";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Programming languages, frameworks, and tools used by Rabiya Zaheer.",
};

const iconMap = { Code2, LayoutTemplate, Server, BrainCircuit, Database, Wrench };

export default function SkillsPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Skills</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            Technical toolkit
          </h1>
          <p className="mt-4 max-w-2xl text-foreground-secondary leading-relaxed">
            A categorized view of the languages, frameworks, and tools I use to build and ship
            software.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <Reveal key={category.id} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <h2 className="font-heading text-base font-semibold">{category.title}</h2>
                  </div>

                  <div className="mt-6 space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span>{skill.name}</span>
                          <span className="font-mono text-xs text-foreground-secondary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-background-secondary">
                          <div
                            className="h-full rounded-full bg-accent transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
