import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navLinks } from "./nav-links";
import { socials, personalInfo } from "@/data/socials";

const iconMap = { Github, Linkedin, Mail };

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="font-heading text-lg font-semibold tracking-tight flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-bold">
                {personalInfo.initials}
              </span>
              {personalInfo.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground-secondary">
              {personalInfo.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wide">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-secondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wide">Connect</h3>
            <ul className="mt-4 space-y-3">
              {socials.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target={social.url.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-accent transition-colors"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground-secondary">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-foreground-secondary">
            Built with Next.js · Tailwind CSS · TypeScript
          </p>
        </div>
      </Container>
    </footer>
  );
}
