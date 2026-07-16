import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { certificates } from "@/data/certificates";

export function CertificatesPreview() {
  return (
    <section className="py-24 sm:py-28 bg-background-secondary">
      <Container>
        <SectionHeading eyebrow="Certificates" title="Continuous learning" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.06}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent">
                <div className="relative aspect-[4/3]">
                  <Image src={cert.image} alt={cert.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-medium">{cert.title}</p>
                  <p className="mt-1 text-xs text-foreground-secondary">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/certificates">
            <Button variant="secondary">
              View all certificates
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
