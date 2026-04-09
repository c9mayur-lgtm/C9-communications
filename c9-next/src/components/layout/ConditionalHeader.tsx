'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from "@/components/layout/Navbar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AudienceSwitcher } from "@/components/layout/AudienceSwitcher";

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

export function ConditionalHeader() {
  const pathname = usePathname();
  const hasSelfNavFooter = pagesWithSelfNavFooter.includes(pathname);
  const isHomepageV2 = pathname === '/homepage-v2';

  if (hasSelfNavFooter) return null;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100]">
        {isHomepageV2 && <AudienceSwitcher />}
        <Navbar />
      </div>
      <div className={isHomepageV2 ? "mt-[72px] lg:mt-[160px]" : "mt-[72px] lg:mt-[160px]"}>
        <Breadcrumbs />
      </div>
    </>
  );
}
