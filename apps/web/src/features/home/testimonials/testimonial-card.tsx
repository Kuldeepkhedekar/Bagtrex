import Image from "next/image";
import { Star } from "lucide-react";

import type { Testimonial } from "./types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mb-8 text-muted-foreground">
        “{testimonial.review}”
      </p>

      <div className="flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={52}
          height={52}
          className="rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}