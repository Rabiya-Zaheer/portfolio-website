import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/portfolio/contact-form";
import { personalInfo, socials } from "@/data/socials";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Rabiya Zaheer for opportunities and collaborations.",
};

const iconMap = { Github, Linkedin, Mail };

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
              Let&apos;s talk
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-foreground-secondary leading-relaxed">
              Have an opportunity, project, or question in mind? Send a message and I&apos;ll get
              back to you soon.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-border bg-card p-8 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-foreground-secondary">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              {personalInfo.location}
            </div>
            {socials.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {social.name}
                </a>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
