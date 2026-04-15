import React from 'react';
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  bg?: 'white' | 'gray' | 'dark' | 'purple' | 'none';
}

export const Section = ({ 
  children, 
  className, 
  containerClassName, 
  id,
  bg = 'white'
}: SectionProps) => {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50/50',
    dark: 'bg-[#0c1024]',
    purple: 'bg-[#5D00D6]',
    none: ''
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-14 md:py-20 overflow-hidden",
        bgStyles[bg],
        className
      )}
    >
      <div className={cn(
        "c9-container",
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
};
