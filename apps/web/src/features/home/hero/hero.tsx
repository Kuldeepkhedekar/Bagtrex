import { Container } from "@/components/layout";

import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}