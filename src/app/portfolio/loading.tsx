import { Container } from "@/components/ui/container";

export default function PortfolioLoading() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="h-4 w-20 animate-pulse rounded bg-background-secondary" />
        <div className="mt-4 h-10 w-72 animate-pulse rounded bg-background-secondary" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border">
              <div className="aspect-[16/10] animate-pulse bg-background-secondary" />
              <div className="space-y-3 p-6">
                <div className="h-4 w-2/3 animate-pulse rounded bg-background-secondary" />
                <div className="h-3 w-full animate-pulse rounded bg-background-secondary" />
                <div className="h-3 w-4/5 animate-pulse rounded bg-background-secondary" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
