import { HomeSlidingHero } from "@/components/home/HomeSlidingHero";
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
import { WpCompliance } from "@/components/wordpress/WpCompliance";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <HomeSlidingHero />

      <WpClientTicker />
      <WpHighlights />
      <WpHeroProducts />
      <WpSimplifyingIT />
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
      <WpCompliance />
      <WpFAQAndFeedback />
      
      {/* 10. POSITIONING — Site-wide final statement */}
      <section className="py-20 bg-[#0c1024] text-white">
        <div className="container mx-auto px-8 max-w-[1240px] text-center">
          <p className="c9-body !text-white/80 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed">
            C9 Communications delivers enterprise-grade managed IT, network, and security services for multi-site organisations across Australia, backed by 24/7 operations, SLA-driven support, and proven large-scale deployments.
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
