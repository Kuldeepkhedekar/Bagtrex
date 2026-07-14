import { Header } from "@/components/layout/header";
import { Hero } from "@/features/home/hero";
import { Categories } from "@/features/home/categories";
import { FeaturedProducts } from "@/features/home/featured-products/featured-products";
import { WhyChoose } from "@/features/home/why-choose/why-choose";
import { Testimonials } from "@/features/home/testimonials/testimonials";
import { Newsletter } from "@/features/home/newsletter/newsletter";
import { Footer } from "@/components/layout/footer/footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <WhyChoose />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}