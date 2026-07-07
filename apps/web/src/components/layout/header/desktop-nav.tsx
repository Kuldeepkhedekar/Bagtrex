"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { navigation } from "./navigation";

export function DesktopNav() {
    const pathname = usePathname();

    return (
        <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "group relative text-sm font-medium transition-colors duration-200",
                            active
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {item.label}

                        <span
                            className={cn(
                                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                                active ? "w-full" : "w-0 group-hover:w-full"
                            )}
                        />
                    </Link>
                );
            })}
        </nav>
    );
}