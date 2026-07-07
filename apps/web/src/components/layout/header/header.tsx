"use client";

import { Container } from "@/components/layout";
import {
    DesktopNav,
    HeaderActions,
    Logo,
    SearchBar,
} from "@/components/layout/header";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

export function Header() {
    const scrolled = useScroll();
    return (
        <header
            className={cn(
                "sticky top-0 z-50 transition-all duration-300",
                scrolled
                    ? "border-b bg-background/95 shadow-md backdrop-blur-lg"
                    : "bg-background/70 backdrop-blur-md"
            )}
        >
            <Container>
                <div className="flex h-19 items-center justify-between gap-6">
                    <Logo />

                    <DesktopNav />

                    <div className="flex items-center gap-4">
                        <SearchBar />
                        <HeaderActions />
                    </div>
                </div>
            </Container>
        </header>
    );
}