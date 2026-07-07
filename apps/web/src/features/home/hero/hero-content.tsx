import { HeroActions } from "./hero-actions";
import { HeroBadges } from "./hero-badges";

export function HeroContent() {
  return (
    <div className="max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        New Collection
      </span>

      <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7xl">
        Carry Luxury.
        <br />
        Carry Confidence.
      </h1>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        Premium handcrafted bags designed for work, travel and everyday life.
        Built with timeless style and exceptional quality.
      </p>

      <HeroActions />

      <HeroBadges />
    </div>
  );
}