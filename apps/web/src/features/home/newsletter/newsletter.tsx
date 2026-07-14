import { Container } from "@/components/layout";
import { NewsletterForm } from "./newsletter-form";

export function Newsletter() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl border bg-card px-8 py-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Newsletter
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Stay Updated
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Subscribe to receive new arrivals, exclusive offers,
            and premium travel inspiration.
          </p>

          <NewsletterForm />
        </div>
      </Container>
    </section>
  );
}