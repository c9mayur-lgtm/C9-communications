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
  ({ className, variant, size, asChild, ...props }, ref) => {
    if (asChild && React.isValidElement(props.children)) {
      return React.cloneElement(props.children as React.ReactElement<any>, {
        ...props,
        className: cn(buttonVariants({ variant, size, className }), props.children.props.className),
        // @ts-ignore
        ref,
      });
    }

    return (
      <Button
        ref={ref}
        className={className}
        variant={variant}
        size={size}
        {...props}
      />
    );
  }
);

C9Button.displayName = "C9Button";
