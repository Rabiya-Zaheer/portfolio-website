import Link from "next/link";
import { ArrowRight, BrainCircuit, Code2, Database, LayoutTemplate, Server, Wrench } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { skillCategories } from "@/data/skills";

const iconMap = { Code2, LayoutTemplate, Server, BrainCircuit, Database, Wrench };

export function SkillsPreview() {
  return (
    <section className="py-24 sm:py-28 bg-background-secondary">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack, AI-leaning toolkit"
          description="From training models to shipping production interfaces — here's what I build with."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <Reveal key={category.id} delay={i * 0.05}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-accent">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <p className="text-sm font-medium">{category.title}</p>
                  <p className="text-xs text-foreground-secondary">{category.skills.length} skills</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/skills">
            <Button variant="secondary">
              View all skills
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
