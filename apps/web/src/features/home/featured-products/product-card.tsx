import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "./types";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addItem } = useCart();
    return (
        <div className="group overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Link href={`/shop/${product.slug}`}>
                <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                    />

                    <button
                        className="absolute right-4 top-4 rounded-full bg-background p-2 shadow"
                        aria-label="Add to wishlist"
                    >
                        <Heart className="h-4 w-4" />
                    </button>

                    {product.badge && (
                        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                            {product.badge}
                        </span>
                    )}
                </div>
            </Link>

            <div className="space-y-3 p-5">
                <Link href={`/shop/${product.slug}`}>
                    <h3 className="line-clamp-2 text-lg font-semibold hover:text-primary">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{product.rating}</span>
                    <span className="text-muted-foreground">
                        ({product.reviews} reviews)
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-xl font-bold">
                        ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                </div>

                <Button
                    className="w-full"
                    onClick={() =>
                        addItem({
                            id: product.id,
                            name: product.name,
                            image: product.image,
                            price: product.price,
                        })
                    }
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}