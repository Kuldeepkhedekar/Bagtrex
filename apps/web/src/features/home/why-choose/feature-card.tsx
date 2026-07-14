import type { Feature } from "./types";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div className="rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
        <Icon className="h-7 w-7 text-primary" />
      </div>

      <h3 className="text-xl font-semibold">
        {feature.title}
      </h3>

      <p className="mt-3 text-muted-foreground">
        {feature.description}
      </p>
    </div>
  );
}