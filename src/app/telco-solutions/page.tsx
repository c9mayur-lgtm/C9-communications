import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Smartphone, Laptop, Building2, ShieldCheck, Zap, Network } from 'lucide-react';
import { ServiceHero } from "@/components/layout/ServiceHero";
import { Section } from "@/components/design-system/Section";
import { H2, H3, Body, Label } from "@/components/design-system/Typography";
import { C9Button } from "@/components/design-system/C9Button";
import { WpUnifiedClassification } from "@/components/wordpress/WpUnifiedClassification";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { WpIndustryGrid } from "@/components/landing/WpIndustryGrid";
import { OurProcess } from "@/components/sections/OurProcess";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Telco Solutions | Managed Technology Partner | C9 Communications',
  description: 'Solution-focused telco and Managed IT for Australian SMEs and Enterprise. One provider for internet, voice, and modern workplace.',
};

// --- DATA STRUCTURES ---

const HERO_DATA = {
  eyebrow: "MANAGED TECHNOLOGY PARTNER",
  headline: "Your Business Technology. Fully Managed.",
  subheadline: "From your first internet connection to your final security audit, C9 manages the entire stack so your team can focus on growth.",
  primaryCTA: { label: "Get a Free Consultation", href: "/#getstarted" },
  secondaryCTA: { label: "Download Our Solutions Guide", href: "/telco-solutions-guide" }
};

const POSITIONING_DATA = {
  boldStatement: "Eliminate the finger-pointing. C9 delivers the full-stack connectivity, voice, and IT support your business actually needs.",
};

const VISITOR_PATHS = [
  {
    title: "New Business Setups",
    description: "Launch with confidence. We handle the nbn™, phone systems, and network design before you walk through the door.",
    icon: Zap,
    cta: "Start Scaling",
    href: "/startups"
  },
  {
    title: "Optimising Existing Teams",
    description: "Upgrade your productivity. Transition to Microsoft Teams calling, secure your endpoints, and boost your bandwidth.",
    icon: Smartphone,
    cta: "Optimise Now",
    href: "/business"
  },
  {
    title: "Enterprise & Multi-Site",
    description: "Complex infrastructure simplified. Managed SD-WAN, private fibre, and AU-managed engineering support.",
    icon: Building2,
    cta: "Enterprise Solutions",
    href: "/enterprise"
  }
];

const SOLUTION_TIERS = [
  {
    title: "Business Connectivity",
    points: ["Enterprise nbn™ & Fast Fibre", "4G/5G Failover as standard", "Managed Networking & SD-WAN"]
  },
  {
    title: "Unified Communications",
    points: ["MS Teams PSTN Calling", "C9 phone system Cloud Voice", "Contact Centre Solutions"]
  },
  {
    title: "Managed Support",
    points: ["24/7 AU-managed engineering", "Zero-Touch Hardware Mgmt", "Cyber-Security Audits"]
  }
];

export default function TelcoSolutionsPage() {
  return (
    <main className="min-h-screen">
      {/* SECTION 1 — HERO */}
      <ServiceHero 
        eyebrow={HERO_DATA.eyebrow}
        title={HERO_DATA.headline}
        description={HERO_DATA.subheadline}
        ctaText={HERO_DATA.primaryCTA.label}
      />

      {/* SECTION 2 — POSITIONING STATEMENT */}
      <Section bg="dark" className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <H2 className="!text-white !text-[28px] md:!text-[40px] leading-tight font-medium">
            {POSITIONING_DATA.boldStatement}
          </H2>
        </div>
      </Section>

      {/* SECTION 3 — THREE VISITOR PATHS */}
      <Section bg="white" className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VISITOR_PATHS.map((path, i) => (
            <Card key={i} className="rounded-[32px] border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full bg-white">
              <CardContent className="p-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-brand-purple/5 rounded-2xl flex items-center justify-center text-[#5D00D6] mb-8 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300">
                  <path.icon size={28} />
                </div>
                <H3 className="mb-4">{path.title}</H3>
                <Body className="mb-8 flex-grow">{path.description}</Body>
                <C9Button variant="outline" className="w-full rounded-full border-brand-purple/20 text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white" asChild>
                  <Link href={path.href}>
                    {path.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </C9Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* SECTION 4 — FULL SOLUTIONS STACK (Browse Ecosystem) */}
      <WpUnifiedClassification />

      {/* SECTION 5 — THE C9 DIFFERENCE */}
      <AuthoritySection />

      {/* SECTION 6 — INDUSTRIES WE UNDERSTAND */}
      <WpIndustryGrid />

      {/* SECTION 7 — HOW WE WORK */}
      <OurProcess />

      {/* SECTION 8 — RECAP BANNER (Manual Implementation using Design System) */}
      <Section bg="purple" className="py-20 !text-white">
        <div className="grid lg:grid-cols-3 gap-12">
          {SOLUTION_TIERS.map((tier, i) => (
            <div key={i} className="flex flex-col gap-6">
              <H3 className="!text-white !text-[24px]">{tier.title}</H3>
              <div className="flex flex-col gap-4">
                {tier.points.map((point, pi) => (
                  <div key={pi} className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 opacity-80" />
                    <Body className="!text-white/90 !text-[16px]">{point}</Body>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 9 — FINAL CONVERTING CTA */}
      <section id="getstarted" className="bg-gray-50">
        <WpConsultationForm 
           showHeader={true}
           eyebrow="READY TO START?"
           title="Let’s build your technology roadmap."
           description="Speak with an AU-managed engineer about your connectivity, voice, and IT needs."
           formTitle="Book Your Strategy Session"
        />
      </section>
    </main>
  );
}
