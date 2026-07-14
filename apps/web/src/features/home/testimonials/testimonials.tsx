import { Container } from "@/components/layout";

import { TestimonialCard } from "./testimonial-card";
import { testimonials } from "./data";

export function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-muted-foreground">
            Thousands of customers trust Bagtrex for quality,
            style and reliability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}