import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Link href="/shop">
        <Button size="lg">
          Shop Now
        </Button>
      </Link>

      <Link href="/categories">
        <Button variant="outline" size="lg">
          Explore Collection
        </Button>
      </Link>
    </div>
  );
}