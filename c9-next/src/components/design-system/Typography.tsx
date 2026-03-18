import React from 'react';
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const H1 = ({ children, className, as: Component = 'h1' }: TypographyProps) => (
  <Component className={cn(
    "text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-[#0c1024] leading-[1.1]",
    "font-proxima",
    className
  )}>
    {children}
  </Component>
);

export const H2 = ({ children, className, as: Component = 'h2' }: TypographyProps) => (
  <Component className={cn(
    "text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#0c1024] tracking-tight leading-tight",
    "font-proxima",
    className
  )}>
    {children}
  </Component>
);

export const H3 = ({ children, className, as: Component = 'h3' }: TypographyProps) => (
  <Component className={cn(
    "text-[20px] md:text-[24px] lg:text-[28px] font-bold text-[#0c1024] tracking-tight",
    "font-proxima",
    className
  )}>
    {children}
  </Component>
);

export const Body = ({ children, className, as: Component = 'p' }: TypographyProps) => (
  <Component className={cn(
    "text-[16px] md:text-[18px] text-gray-600 leading-relaxed font-normal",
    "font-proxima",
    className
  )}>
    {children}
  </Component>
);

export const Label = ({ children, className, as: Component = 'span' }: TypographyProps) => (
  <Component className={cn(
    "text-[#5D00D6] text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] block mb-4",
    "font-proxima",
    className
  )}>
    {children}
  </Component>
);
