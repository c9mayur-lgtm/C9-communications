import React from 'react';
import { ManagedNavbar } from "@/components/layout/ManagedNavbar";
import { ManagedFooter } from "@/components/layout/ManagedFooter";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { SegmentSelector } from "@/components/sections/SegmentSelector";
import { ManagedIT } from "@/components/sections/ManagedIT";
import { TelcoSection } from "@/components/sections/TelcoSection";
import { ModernWorkplace } from "@/components/sections/ModernWorkplace";
import { BusinessChallenges } from "@/components/sections/BusinessChallenges";
import { DefenseSection } from "@/components/sections/DefenseSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { OurProcess } from "@/components/sections/OurProcess";
import { ContactSection } from "@/components/sections/ContactSection";

export default function ManagedPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ManagedNavbar />
      <main className="flex-grow">
        <Hero />
        <LogoStrip />
        <SegmentSelector />
        <ManagedIT />
        <TelcoSection />
        <ModernWorkplace />
        <BusinessChallenges />
        <DefenseSection />
        <Testimonials />
        <OurProcess />
        <ContactSection />
      </main>
      <ManagedFooter />
    </div>
  );
}
