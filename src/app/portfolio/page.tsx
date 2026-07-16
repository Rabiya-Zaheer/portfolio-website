import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/animations/reveal";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { projects, getAllCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A showcase of AI/ML and full-stack MERN projects by Rabiya Zaheer.",
};

export default function PortfolioPage() {
  const categories = getAllCategories();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Portfolio</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            Projects &amp; case studies
          </h1>
          <p className="mt-4 max-w-2xl text-foreground-secondary leading-relaxed">
            A mix of applied machine learning and full-stack products. Search or filter by
            category to find what you&apos;re looking for.
          </p>
        </Reveal>

        <div className="mt-10">
          <PortfolioGrid projects={projects} categories={categories} />
        </div>
      </Container>
    </section>
  );
}
