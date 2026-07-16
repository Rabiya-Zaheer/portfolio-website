"use client";

import { cn } from "@/lib/utils";

interface FilterBarProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export function FilterBar({ categories, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          aria-pressed={active === category}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer",
            active === category
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border text-foreground-secondary hover:border-accent hover:text-accent"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
