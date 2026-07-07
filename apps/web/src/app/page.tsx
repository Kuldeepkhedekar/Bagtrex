import { Header } from "@/components/layout/header";
import { Hero } from "@/features/home/hero";
import { Categories } from "@/features/categories";
import { FeaturedProducts } from "@/features/featured-products/featured-products";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
      </main>
    </>
  );
}