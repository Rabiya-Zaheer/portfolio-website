"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchX } from "lucide-react";
import { SearchBar } from "@/components/portfolio/search-bar";
import { FilterBar } from "@/components/portfolio/filter-bar";
import { ProjectCard } from "@/components/portfolio/project-card";
import type { Project } from "@/types";

interface PortfolioGridProps {
  projects: Project[];
  categories: string[];
}

export function PortfolioGrid({ projects, categories }: PortfolioGridProps) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const filtered = React.useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === "All" || project.categories.includes(category as never);
      const matchesQuery =
        query.trim() === "" ||
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()) ||
        project.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [projects, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <FilterBar categories={categories} active={category} onChange={setCategory} />
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <p className="mt-5 text-xs text-foreground-secondary">
        Showing {filtered.length} of {projects.length} projects
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-20 text-center">
          <SearchX className="h-8 w-8 text-foreground-secondary" />
          <p className="font-heading text-lg font-medium">No projects found</p>
          <p className="max-w-sm text-sm text-foreground-secondary">
            Try a different search term or clear the active filter.
          </p>
        </div>
      )}
    </div>
  );
}
