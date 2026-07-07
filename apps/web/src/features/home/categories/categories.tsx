import { Container } from "@/components/layout";

import { CategoryCard } from "./category-card";
import { categories } from "./data";

export function Categories() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Shop by Category
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Find Your Perfect Companion
          </h2>

          <p className="mt-4 text-muted-foreground">
            Explore our premium collection designed for every journey.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}