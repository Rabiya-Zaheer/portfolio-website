import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/animations/reveal";
import { CertificateCard } from "@/components/portfolio/certificate-card";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Certifications and credentials earned by Rabiya Zaheer.",
};

export default function CertificatesPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Certificates</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            Certifications
          </h1>
          <p className="mt-4 max-w-2xl text-foreground-secondary leading-relaxed">
            A record of continuous learning. Click any certificate to preview it up close.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.06}>
              <CertificateCard certificate={cert} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
