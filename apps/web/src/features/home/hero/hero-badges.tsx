import { ShieldCheck, Truck, RotateCcw } from "lucide-react";

export function HeroBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Premium Quality",
    },
    {
      icon: Truck,
      title: "Free Shipping",
    },
    {
      icon: RotateCcw,
      title: "7 Days Return",
    },
  ];

  return (
    <div className="mt-10 flex flex-wrap gap-6">
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <div
            key={badge.title}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Icon className="h-5 w-5 text-primary" />
            <span>{badge.title}</span>
          </div>
        );
      })}
    </div>
  );
}