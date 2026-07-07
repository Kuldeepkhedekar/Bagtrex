"use client";

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative hidden w-full max-w-xs lg:block">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        type="text"
        placeholder="Search bags..."
        className="h-10 w-full rounded-full border bg-background pl-10 pr-4 text-sm outline-none transition-all focus:border-primary"
      />
    </div>
  );
}