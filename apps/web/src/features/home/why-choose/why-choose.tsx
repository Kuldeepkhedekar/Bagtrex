import { Container } from "@/components/layout";

import { FeatureCard } from "./feature-card";
import { features } from "./data";

export function WhyChoose() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Why Choose Bagtrex
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Crafted for Every Journey
          </h2>

          <p className="mt-4 text-muted-foreground">
            Every Bagtrex product is designed with premium craftsmanship,
            modern functionality, and timeless style.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}