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
                            "group relative text-[16px] font-medium transition-colors duration-200",
                            active
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {item.label}

                        <span
                            className={cn(
                                "group relative text-[15px] font-medium tracking-wide transition-all duration-300 ease-out",
                                active
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-primary"
                            )}
                        />
                    </Link>
                );
            })}
        </nav>
    );
}