import { ArrowRight } from "lucide-react";
import { HomeSlidingHero } from "@/components/home/HomeSlidingHero";
;
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { DualAudienceLadder } from "@/components/v2/DualAudienceLadder";
import { WpITDepartmentOptions } from "@/components/wordpress/WpITDepartmentOptions";
import { WpIndustryTabs } from "@/components/wordpress/WpIndustryTabs";
import { WpWhyPartner } from "@/components/wordpress/WpWhyPartner";
import { WpCaseStudies } from "@/components/wordpress/WpCaseStudies";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { WpUnifiedClassification } from "@/components/wordpress/WpUnifiedClassification";
import { WpPromoBanner } from "@/components/wordpress/WpPromoBanner";
import { WpSupport } from "@/components/wordpress/WpSupport";
import { WpHighlights } from "@/components/wordpress/WpHighlights";
import { WpHeroProducts } from "@/components/wordpress/WpHeroProducts";
import { WpSimplifyingIT } from "@/components/wordpress/WpSimplifyingIT";
import { WpServices } from "@/components/wordpress/WpServices";
import { WpSolutions } from "@/components/wordpress/WpSolutions";
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { WpVendors } from "@/components/wordpress/WpVendors";
import { WpCapabilityCarousel } from "@/components/wordpress/WpCapabilityCarousel";
import { WpCapabilityNavigator } from "@/components/wordpress/WpCapabilityNavigator";
import { TrustArchitecture } from "@/components/sections/shared/TrustArchitecture";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";


export default function Homepage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <HomeSlidingHero />

      <WpClientTicker />
      <WpHighlights />

      {/* <WpHeroProducts /> */}
      {/* <WpCapabilityCarousel /> */}
      <WpCapabilityNavigator />
      
      <WpSimplifyingIT />

      {/* ── CAPABILITY PILLARS — Direct links to the 3 major hubs ── */}
      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="text-center mb-10">
            <span className="c9-eyebrow mb-3 block">WHAT WE DO</span>
            <h2 className="c9-section-heading">Three Pillars. One Accountable Partner.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                label: 'Managed IT',
                desc: 'Helpdesk, infrastructure, cloud, and strategy — all under one managed service model with full accountability.',
                href: '/managed-it',
                bg: 'bg-[#5D00D6]',
                pill: 'IT Solutions',
              },
              {
                label: 'Telco & Connectivity',
                desc: 'Business nbn™, fast fibre, cloud voice, mobile fleet, and contact centre — one provider, no finger-pointing.',
                href: '/telco',
                bg: 'bg-[#0c1024]',
                pill: 'Telco',
              },
              {
                label: 'Modern Workplace',
                desc: 'Microsoft 365, device management, security training, collaboration tools — your entire digital workplace, managed.',
                href: '/modern-workplace',
                isLight: true,
                pill: 'Workplace',
              }
            ].map((pillar: any, i) => (
              <a
                key={i}
                href={pillar.href}
                aria-label={`Explore our ${pillar.label} solutions`}
                className={`group relative rounded-[28px] p-8 md:p-10 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col min-h-[240px] border ${
                  pillar.isLight
                    ? 'bg-white border-slate-200 hover:border-[#5D00D6]/30'
                    : `${pillar.bg} text-white border-transparent`
                }`}
              >
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: `radial-gradient(${pillar.isLight ? '#5D00D6' : 'white'} 1.5px, transparent 1.5px)`,
                    backgroundSize: '28px 28px'
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <span className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${pillar.isLight ? 'text-[#5D00D6]' : 'text-white/80'}`}>{pillar.pill}</span>
                  <h3 className={`text-[22px] md:text-[26px] font-bold leading-tight mb-3 ${pillar.isLight ? 'text-slate-900' : 'text-white'}`}>{pillar.label}</h3>
                  <p className={`text-[14px] leading-relaxed flex-1 ${pillar.isLight ? 'text-slate-700' : 'text-white/80'}`}>{pillar.desc}</p>
                  <div className={`mt-auto pt-6 flex items-center gap-2 font-bold text-[14px] group-hover:gap-3 transition-all ${pillar.isLight ? 'text-[#5D00D6]' : 'text-white'}`}>
                    Explore {pillar.pill} <ArrowRight className="size-4" aria-hidden="true" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <DualAudienceLadder />
      
      {/* Promo Offer — Business Voice Switch */}
      <WpPromoBanner 
        eyebrow="ENTERPRISE RISK MANAGEMENT"
        title="Migration Readiness Review"
        description="Planning a transition from multiple legacy vendors? Our senior engineers perform a deep-dive audit of your system dependencies to ensure zero-disruption cutover."
        ctaText="Request Readiness Review"
        ctaHref="#consultation-section"
        imageSrc="/images/promo_business_audit.png"
        disclaimer="*Available for qualifying Australian businesses with 10+ locations."
      />


      <WpServices />
      <WpSolutions />

      <WpDefenseBanner 
        title="Security Built Into Everything"
        description="Protection across endpoints, networks, and users—continuously monitored and actively managed."
        buttonText="Book a Security Review"
        href="https://c9defense.com.au/"
      />

      {/* 7. INDUSTRY EXPERTISE — "We've solved this in your sector before" */}
      <WpIndustryTabs />

      {/* 8. TRUST METRICS — Hard numbers that justify switching to C9 */}
      <WpWhyPartner />
      <WpSupport />

      <WpVendors />
      {/* 9. CASE STUDIES — Real proof to eliminate last-mile doubt */}
      <div className="pt-12 bg-white">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <h2 className="c9-section-heading mb-4">Operational Proof Across Complex Environments</h2>
          <p className="c9-body mb-2">Multi-site rollouts and infrastructure consolidations completed for national footprints. Thousands of endpoints under single-owner control.</p>
        </div>
      </div>
      <WpCaseStudies 
        articles={[
          {
            tag: 'RETAIL',
            title: '85-site deployment completed with near-zero downtime',
            desc: 'How we unified communications and Internet across a national retail footprint, reducing incidents by consolidation.',
            img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
            videoText: 'National Retail Consolidation',
            href: '/case-studies/multi-site-retail-stabilisation'
          },
          {
            tag: 'HEALTHCARE',
            title: 'Migrating Arthritis Australia to Agile Cloud Voice',
            desc: 'Replacing end-of-life on-premise systems with a flexible cloud phone system, enabling their team to field critical calls remotely and securely.',
            img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
            videoText: 'Arthritis Foundation Voice',
            href: '/case-studies/healthcare-uptime-stabilisation'
          },
          {
            tag: 'EDUCATION',
            title: 'Enterprise Ethernet for Baxter Institute',
            desc: 'Delivering direct 1Gbps/1Gbps fibre connectivity to support hundreds of concurrent students and cloud-hosted learning environments without latency.',
            img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
            videoText: 'Baxter Institute Network',
            href: '/case-studies/enterprise-migration-success'
          }
        ]}
      />
      <TrustArchitecture />
      <WpFAQAndFeedback />
      
      {/* 10. POSITIONING — Site-wide final statement */}
      <section className="py-20 bg-[#0c1024] text-white">
        <div className="container mx-auto px-8 max-w-[1240px] text-center">
          <p className="c9-body !text-white/95 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed">
            C9 Communications delivers enterprise-grade managed IT, network, and security services for multi-site organisations across Australia, backed by continuous operations, SLA-driven support, and proven large-scale deployments.
          </p>
        </div>
      </section>

      {/* 10. LEAD CAPTURE — Final CTA */}
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="CONSOLIDATE CONTROL"
          title="Request Infrastructure Assessment"
          description="If your infrastructure depends on multiple vendors, your operational risk is already distributed. We help you consolidate control before failure becomes visible."
          ctaText="Request My Assessment"
          formTitle="Schedule Risk Audit"
        />
      </section>

    </main>
  );
}
