import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { personalInfo } from "@/data/socials";

const stats = [
  { label: "Years learning CS", value: 4, suffix: "+" },
  { label: "Projects shipped", value: 6, suffix: "" },
  { label: "Internships", value: 2, suffix: "" },
  { label: "Core technologies", value: 12, suffix: "+" },
];

export function AboutPreview() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="About" title="Engineering with curiosity" />
            <p className="text-foreground-secondary leading-relaxed">{personalInfo.objective}</p>
            <p className="mt-4 text-foreground-secondary leading-relaxed">
              Currently based in {personalInfo.location}, splitting my time between training
              machine learning models and shipping full-stack products with the MERN and Next.js
              ecosystem.
            </p>
            <Link href="/about" className="mt-6 inline-block">
              <Button variant="link">
                Read my full story
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Reveal>

          <Reveal delay={0.1} direction="left">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-accent"
                >
                  <p className="font-heading text-3xl font-semibold text-accent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
