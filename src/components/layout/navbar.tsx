"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/socials";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight flex items-center gap-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-bold">
            {personalInfo.initials}
          </span>
          <span className="hidden sm:inline">{personalInfo.name}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  active ? "text-accent" : "text-foreground-secondary hover:text-foreground"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-px h-[2px] bg-accent rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <a href={personalInfo.resumeUrl} download>
            <Button variant="secondary" size="sm">
              <Download className="h-3.5 w-3.5" />
              Resume
            </Button>
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-foreground"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-accent-soft text-accent"
                      : "text-foreground-secondary hover:bg-background-secondary hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a href={personalInfo.resumeUrl} download className="mt-2">
                <Button variant="primary" size="sm" className="w-full">
                  <Download className="h-3.5 w-3.5" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
