import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { Timeline } from "@/components/common/timeline";
import { personalInfo } from "@/data/socials";
import { education } from "@/data/education";
import { journeyTimeline } from "@/data/education";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Rabiya Zaheer's background, education, and journey into software engineering and AI.",
};

export default function AboutPage() {
  const item = education[0];

  return (
    <>
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
              Building intelligent, reliable software
            </h1>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr]">
            <Reveal delay={0.05}>
              <div className="space-y-5 text-foreground-secondary leading-relaxed">
                <p>{personalInfo.objective}</p>
                <p>
                  My work sits at the intersection of two things I care about: making machine
                  learning models genuinely useful, and building interfaces people enjoy using.
                  As an AI/ML Engineer Intern at DevelopersHub Corporation, I work on real
                  datasets — cleaning, training, and evaluating models end to end. As a MERN
                  Stack Intern at Dafi Labs, I ship production features across the stack, from
                  MongoDB schemas to polished React interfaces.
                </p>
                <p>
                  I&apos;m based in {personalInfo.location}, currently finishing my Computer
                  Science degree while continuing to deepen my full-stack and AI engineering
                  skills. I care about clean architecture, thoughtful UX, and code that&apos;s
                  built to be extended, not just shipped once.
                </p>
              </div>

              <a href={personalInfo.resumeUrl} download className="mt-8 inline-block">
                <Button variant="primary">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </Reveal>

            <Reveal delay={0.1} direction="left">
              <div className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-heading text-base font-semibold">Education</h3>
                <p className="mt-3 text-sm font-medium">
                  {item.degree} — {item.field}
                </p>
                <p className="text-sm text-accent">{item.institution}</p>
                <p className="mt-1 font-mono text-xs text-foreground-secondary">
                  {item.duration} · CGPA {item.cgpa}
                </p>
                <div className="mt-5 border-t border-border pt-5">
                  <p className="text-xs font-medium text-foreground-secondary">Currently</p>
                  <ul className="mt-2 space-y-1.5">
                    {personalInfo.currentRoles.map((r) => (
                      <li key={r.role} className="text-sm">
                        {r.role} <span className="text-foreground-secondary">— {r.company}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                  {["Python", "React", "Next.js", "TensorFlow", "Node.js"].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 bg-background-secondary">
        <Container>
          <SectionHeading
            eyebrow="Journey"
            title="How I got here"
            description="A timeline of the milestones that shaped my path into AI and full-stack development."
          />
          <Timeline events={journeyTimeline} />
        </Container>
      </section>
    </>
  );
}
