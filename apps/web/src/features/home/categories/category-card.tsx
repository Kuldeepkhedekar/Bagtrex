import Image from "next/image";
import Link from "next/link";

import type { Category } from "./types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/shop/${category.slug}`}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-semibold transition-transform duration-300 group-hover:-translate-y-1">
            {category.name}
          </h3>

          <p className="mt-1 text-sm text-white/80">
            {category.count} Products
          </p>
        </div>
      </div>
    </Link>
  );
}