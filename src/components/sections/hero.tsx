"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/animations/rotating-text";
import { personalInfo, socials } from "@/data/socials";

const iconMap = { Github, Linkedin, Mail };

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-float-slow" />
      <div className="absolute top-40 -left-40 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background-secondary px-3.5 py-1.5 font-mono text-xs text-foreground-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to AI/ML &amp; Full Stack opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-accent">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 font-heading text-2xl font-medium text-foreground-secondary sm:text-3xl"
          >
            {personalInfo.title}
            <br />
            <span className="text-foreground">
              I build&nbsp;
              <RotatingText words={personalInfo.roles} className="text-accent" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-foreground-secondary"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href={personalInfo.resumeUrl} download>
              <Button variant="primary" size="lg">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="lg">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-9 flex items-center gap-4"
          >
            {socials.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors hover:border-accent hover:text-accent"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-accent/5">
            <div className="flex items-center gap-1.5 border-b border-border bg-background-secondary px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-xs text-foreground-secondary">whoami.sh</span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-relaxed">
              <p className="text-foreground-secondary">
                <span className="text-accent">rabiya@portfolio</span>:~$ whoami
              </p>
              <p className="mt-2 text-foreground">{personalInfo.name}</p>
              <p className="mt-4 text-foreground-secondary">
                <span className="text-accent">rabiya@portfolio</span>:~$ cat status.json
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-foreground-secondary">
{`{
  "role": "AI/ML Engineer Intern",
  "company": "DevelopersHub Corp.",
  "role_2": "MERN Stack Intern",
  "company_2": "Dafi Labs",
  "location": "Lahore, PK",
  "status": "shipping"
}`}
              </pre>
              <p className="mt-4 text-foreground-secondary">
                <span className="text-accent">rabiya@portfolio</span>:~$
                <span className="ml-2 inline-block h-4 w-2 bg-accent align-middle animate-blink" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
