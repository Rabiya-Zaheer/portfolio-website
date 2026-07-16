import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-24">
      <Container className="text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-foreground-secondary leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link href="/" className="mt-8 inline-block">
          <Button variant="primary">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Button>
        </Link>
      </Container>
    </section>
  );
}
