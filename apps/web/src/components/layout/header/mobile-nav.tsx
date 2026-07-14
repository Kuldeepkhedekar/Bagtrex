"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export function MobileNav() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="lg:hidden rounded-full"
      aria-label="Open navigation menu"
    >
      <Menu className="h-6 w-6" />
    </Button>
  );
}