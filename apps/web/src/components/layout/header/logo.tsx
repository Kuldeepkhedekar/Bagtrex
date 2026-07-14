"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { useMounted } from "@/hooks/use-mounted";

export function Logo() {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();

  const logo =
    mounted && resolvedTheme === "dark"
      ? "/images/logo-dark.png"
      : "/images/light-logo.png";

  return (
    <Link
      href="/"
      aria-label="Bagtrex Home"
      className="group flex items-center"
    >
      <Image
        src={logo}
        alt="Bagtrex"
        width={160}
        height={54}
        priority
        className="h-auto w-[160px]  h-auto transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}