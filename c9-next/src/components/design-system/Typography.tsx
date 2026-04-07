import React from 'react';
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const H1 = ({ children, className, as: Component = 'h1' }: TypographyProps) => (
  <Component className={cn(
    "c9-section-heading",
    className
  )}>
    {children}
  </Component>
);

export const H2 = ({ children, className, as: Component = 'h2' }: TypographyProps) => (
  <Component className={cn(
    "c9-section-heading",
    className
  )}>
    {children}
  </Component>
);

export const H3 = ({ children, className, as: Component = 'h3' }: TypographyProps) => (
  <Component className={cn(
    "c9-card-title",
    className
  )}>
    {children}
  </Component>
);

export const Body = ({ children, className, as: Component = 'p' }: TypographyProps) => (
  <Component className={cn(
    "c9-body",
    className
  )}>
    {children}
  </Component>
);

export const Label = ({ children, className, as: Component = 'span' }: TypographyProps) => (
  <Component className={cn(
    "c9-eyebrow",
    className
  )}>
    {children}
  </Component>
);
