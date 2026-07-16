"use client";

import * as React from "react";
import {
  BrainCircuit,
  Code2,
  GraduationCap,
  Layers,
  LucideIcon,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import type { TimelineEvent } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Code2,
  BrainCircuit,
  Sparkles,
  Layers,
  Rocket,
};

export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-2 bottom-2 w-px bg-border sm:left-6" aria-hidden="true" />
      <div className="space-y-10">
        {events.map((event, i) => {
          const Icon = iconMap[event.icon] ?? Sparkles;
          return (
            <Reveal key={event.id} delay={i * 0.06}>
              <div className="relative flex gap-5 sm:gap-6">
                <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border bg-card text-accent sm:h-12 sm:w-12">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-accent">{event.year}</span>
                  </div>
                  <h3 className="mt-1 font-heading text-lg font-semibold">{event.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground-secondary">
                    {event.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
