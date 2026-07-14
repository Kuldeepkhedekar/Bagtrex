import Image from "next/image";

export function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <Image
        src="/images/hero-bags.png"
        alt="Premium Bag"
        width={1000}
        height={1000}
        priority
        className="h-auto w-full max-w-md object-contain"
      />
    </div>
  );
}