import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { education } from "@/data/education";

export function EducationPreview() {
  const item = education[0];

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <Reveal>
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-heading text-xl font-semibold">
                  {item.degree} — {item.field}
                </h3>
                <span className="font-mono text-xs text-foreground-secondary">{item.duration}</span>
              </div>
              <p className="mt-1 text-sm text-accent">{item.institution}</p>
              <p className="mt-3 text-sm text-foreground-secondary">CGPA: {item.cgpa}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.coursework.slice(0, 4).map((course) => (
                  <Badge key={course}>{course}</Badge>
                ))}
                {item.coursework.length > 4 && <Badge>+{item.coursework.length - 4} more</Badge>}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <Link href="/education">
            <Button variant="secondary">
              Full academic background
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
