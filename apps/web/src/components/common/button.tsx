import * as React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ComponentProps<typeof ShadcnButton> {
  loading?: boolean;
}

export function Button({
  children,
  loading,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <ShadcnButton
      disabled={disabled || loading}
      className={cn(className)}
      {...props}
    >
      {loading ? "Loading..." : children}
    </ShadcnButton>
  );
}