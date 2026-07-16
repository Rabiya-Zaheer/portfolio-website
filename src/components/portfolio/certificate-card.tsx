"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Certificate } from "@/types";

const statusLabel: Record<Certificate["status"], string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
};

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:border-accent cursor-pointer"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={cn(
              "absolute top-3 right-3 rounded-full px-2.5 py-1 text-[11px] font-medium",
              certificate.status === "completed" && "bg-emerald-500/90 text-white",
              certificate.status === "in-progress" && "bg-amber-500/90 text-white",
              certificate.status === "planned" && "bg-foreground-secondary/80 text-white"
            )}
          >
            {statusLabel[certificate.status]}
          </span>
        </div>
        <div className="p-5">
          <p className="font-heading text-sm font-semibold">{certificate.title}</p>
          <p className="mt-1 text-xs text-foreground-secondary">
            {certificate.issuer} · {certificate.date}
          </p>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={certificate.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close preview"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[16/10] w-full">
                <Image src={certificate.image} alt={certificate.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold">{certificate.title}</h3>
                <p className="mt-1 text-sm text-foreground-secondary">
                  {certificate.issuer} · {certificate.date}
                </p>
                {certificate.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <Badge key={skill} variant="accent">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                  >
                    View credential
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
