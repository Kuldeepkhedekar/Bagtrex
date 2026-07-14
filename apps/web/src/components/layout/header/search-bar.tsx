"use client";

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative hidden md:block">
      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        type="search"
        placeholder="Search premium bags..."
        className="
          h-11
          w-64
          xl:w-80
          rounded-full
          border
          border-border/60
          bg-background
          pl-11
          pr-4
          text-sm
          outline-none
          transition-all
          duration-300
          hover:border-primary/40
          focus:border-primary
          focus:ring-2
          focus:ring-primary/20
        "
      />
    </div>
  );
}