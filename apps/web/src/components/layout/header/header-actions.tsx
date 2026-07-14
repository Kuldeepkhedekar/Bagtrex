"use client";

import Link from "next/link";

import {
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";

import { ThemeToggle } from "@/components/common";
import { Button } from "@/components/ui/button";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Link href="/wishlist">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-red-500/10"
          aria-label="Wishlist"
        >
          <Heart className="h-5 w-5 text-red-500" />
        </Button>
      </Link>

      <Link href="/cart">
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Cart"
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </Link>

      <Link
        href="/account"
        className="hidden lg:block"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Account"
        >
          <User className="h-5 w-5" />
        </Button>
      </Link>

      <ThemeToggle />
    </div>
  );
}