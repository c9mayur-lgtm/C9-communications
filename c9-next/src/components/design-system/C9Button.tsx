import React from 'react';
import { Button, buttonVariants } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface C9ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const C9Button = React.forwardRef<HTMLButtonElement, C9ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "font-medium transition-all duration-300",
          // Custom shadow for primary variant if it's the default or explicitly set
          (variant === 'default' || !variant) ? "shadow-xl shadow-purple-900/20 hover:shadow-purple-900/30 active:scale-95" : "",
          className
        )}
        variant={variant}
        size={size || "lg"}
        {...props}
      />
    );
  }
);

C9Button.displayName = "C9Button";
