"use client";

import { Container } from "@/components/layout";
import {
  DesktopNav,
  HeaderActions,
  Logo,
  MobileNav,
  SearchBar,
} from "@/components/layout/header";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Header() {
  const scrolled = useScroll();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/60 bg-background/80 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "border-transparent bg-background/70 backdrop-blur-md"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <DesktopNav />

          <div className="ml-auto flex items-center gap-2 md:gap-3 lg:gap-4">
            <SearchBar />

            <HeaderActions />

            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}