'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { WpFooter } from "@/components/layout/WpFooter";

const pagesWithSelfNavFooter = [
  '/managed-it/helpdesk-support',
  '/managed-it/outsourcing',
  '/managed-it/strategy-consulting',
  '/managed-it/security-solutions',
  '/managed-it/backup-disaster-recovery',
  '/managed-it/cloud-services',
  '/managed-it/network-solutions',
  '/managed-it/infrastructure',
  '/telco/business-nbn',
  '/telco/fast-fibre',
  '/telco/enterprise-ethernet',
  '/telco/mobile-plans',
  '/telco/c9-phone-system',
  '/telco/c9voice',
  '/telco/inbound-services',
  '/telco/teams-calling',
  '/telco/sip-trunking',
  '/telco/contact-centre',
  '/telco/voice-systems',
];

export function ConditionalFooter() {
  const pathname = usePathname();
  const hasSelfNavFooter = pagesWithSelfNavFooter.includes(pathname);

  if (hasSelfNavFooter) return null;

  return <WpFooter />;
}
