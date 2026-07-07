"use client";

import Link from "next/link";
import { Heart, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/common";
import { ThemeToggle } from "@/components/common";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <Link href="/wishlist">
        <Button variant="ghost" size="icon" aria-label="Wishlist">
          <Heart className="h-5 w-5" />
        </Button>
      </Link>

      <Link href="/cart">
        <Button variant="ghost" size="icon" aria-label="Cart">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </Link>

      <Link href="/account">
        <Button variant="ghost" size="icon" aria-label="Account">
          <User className="h-5 w-5" />
        </Button>
      </Link>
      <ThemeToggle />
    </div>
  );
}