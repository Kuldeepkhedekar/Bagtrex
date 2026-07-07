import { Container } from "@/components/layout";

import { ProductCard } from "./product-card";
import { products } from "./data";

export function FeaturedProducts() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Featured Collection
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Best Selling Bags
          </h2>

          <p className="mt-4 text-muted-foreground">
            Crafted with premium materials for every journey.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}