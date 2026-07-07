import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Bagtrex"
        width={140}
        height={48}
        priority
      />
    </Link>
  );
}