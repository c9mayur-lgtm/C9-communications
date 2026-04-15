'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { WpFooter } from "@/components/layout/WpFooter";

const pagesWithSelfNavFooter: string[] = ['/managed'];

export function ConditionalFooter() {
  const pathname = usePathname();
  const hasSelfNavFooter = pagesWithSelfNavFooter.includes(pathname);

  if (hasSelfNavFooter) return null;

  return <WpFooter />;
}
