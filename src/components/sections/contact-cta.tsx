import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";

export function ContactCta() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center sm:px-16">
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]" />
            <div className="relative">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
                Let&apos;s build something intelligent together
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-foreground-secondary leading-relaxed">
                Open to AI/ML and full-stack roles, collaborations, and interesting problems.
                I usually reply within a day.
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
