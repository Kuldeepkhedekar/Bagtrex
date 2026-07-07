import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-12 md:py-16 lg:py-24",
        className
      )}
    >
      {children}
    </section>
  );
}