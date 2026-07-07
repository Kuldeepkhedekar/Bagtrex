import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  children: React.ReactNode;
  level?: HeadingLevel;
  className?: string;
}

const styles = {
  1: "text-5xl lg:text-6xl font-bold tracking-tight",
  2: "text-4xl font-bold tracking-tight",
  3: "text-3xl font-semibold",
  4: "text-2xl font-semibold",
  5: "text-xl font-medium",
  6: "text-lg font-medium",
};

export function Heading({
  children,
  level = 1,
  className,
}: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <Tag className={cn(styles[level], className)}>
      {children}
    </Tag>
  );
}