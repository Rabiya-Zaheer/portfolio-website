import type { Metadata } from "next";
import { BookOpen, GraduationCap, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background of Rabiya Zaheer — BS Computer Science at Government College University, Lahore.",
};

export default function EducationPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Education</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            Academic background
          </h1>
        </Reveal>

        <div className="mt-14 space-y-6">
          {education.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="font-heading text-xl font-semibold">
                        {item.degree} — {item.field}
                      </h2>
                      <span className="font-mono text-xs text-foreground-secondary">{item.duration}</span>
                    </div>
                    <p className="mt-1 text-accent">{item.institution}</p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-foreground-secondary">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-5">
                      <div className="rounded-lg bg-background-secondary px-4 py-2">
                        <p className="text-xs text-foreground-secondary">CGPA</p>
                        <p className="font-heading text-lg font-semibold text-accent">{item.cgpa}</p>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-border pt-5">
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground-secondary">
                        <BookOpen className="h-3.5 w-3.5" />
                        Relevant Coursework
                      </div>
                      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {item.coursework.map((sem) => (
                          <div
                            key={sem.semester}
                            className="rounded-xl border border-border bg-background-secondary p-4"
                          >
                            <p className="font-heading text-sm font-semibold text-accent">
                              {sem.semester}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {sem.courses.map((course) => (
                                <Badge key={course} variant="accent">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
