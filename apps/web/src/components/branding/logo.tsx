import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image
        src="/images/logo.png"
        alt="Bagtrex"
        width={180}
        height={50}
        priority
      />
    </Link>
  );
}