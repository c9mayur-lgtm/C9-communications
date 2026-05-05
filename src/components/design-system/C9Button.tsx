import React from 'react';
import { Button, buttonVariants } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from 'lucide-react';

export interface C9ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
}

export const C9Button = React.forwardRef<HTMLButtonElement, C9ButtonProps>(
  ({ className, variant, size, asChild, showArrow, children, ...props }, ref) => {
    // Determine if we should show the arrow by default (for default/outline/secondary variants)
    const shouldShowArrow = showArrow ?? (variant !== 'icon' && variant !== 'link' && variant !== 'ghost');

    const arrowElement = shouldShowArrow && (
      <ArrowRight className="ml-2.5 size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string; children?: React.ReactNode }>;
      return React.cloneElement(child, {
        ...props,
        className: cn(buttonVariants({ variant, size, className }), child.props.className),
        // @ts-ignore
        children: (
          <>
            {child.props.children}
            {arrowElement}
          </>
        ),
        ref,
      });
    }

    return (
      <Button
        ref={ref}
        className={cn("group/button", className)}
        variant={variant}
        size={size}
        {...props}
      >
        {children}
        {arrowElement}
      </Button>
    );
  }
);

C9Button.displayName = "C9Button";
