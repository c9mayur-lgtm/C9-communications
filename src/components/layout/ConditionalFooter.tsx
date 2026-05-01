'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { WpFooter } from "@/components/layout/WpFooter";

const pagesWithSelfNavFooter: string[] = ['/managed', '/defense', '/lumina'];

export function ConditionalFooter() {
  const pathname = usePathname();
  const isExcluded = pagesWithSelfNavFooter.some(p => pathname?.startsWith(p));

  if (isExcluded) return null;

  return <WpFooter />;
}
