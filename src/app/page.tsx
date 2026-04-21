import { HomeSlidingHero } from "@/components/home/HomeSlidingHero";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
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
      <WpITDepartmentOptions />
      
      {/* Promo Offer — Business Voice Switch */}
      <WpPromoBanner 
        eyebrow="BUSINESS EXCLUSIVE"
        title="Get a Free IT & Telco Cost Analysis"
        description="Stop paying for inefficient setups and disjointed vendors. Let our senior engineers map out a consolidated infrastructure plan that cuts costs and boosts productivity."
        ctaText="Book a Strategy Session"
        ctaHref="#consultation-section"
        imageSrc="/images/promo_business_audit.png"
        disclaimer="*Available for qualifying Australian businesses with 10+ employees."
      />


      <WpServices />
      <WpSolutions />
      <WpDefenseBanner 
        title="Security Built Into Everything"
        description="Protection across endpoints, networks, and users—continuously monitored and actively managed."
        buttonText="Book a Security Review"
      />

      {/* 7. INDUSTRY EXPERTISE — "We've solved this in your sector before" */}
      <WpIndustryTabs />

      {/* 8. TRUST METRICS — Hard numbers that justify switching to C9 */}
      <WpWhyPartner />
      <WpSupport />

      <WpVendors />
      {/* 9. CASE STUDIES — Real proof to eliminate last-mile doubt */}
      <div className="pt-20 bg-white">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <h2 className="c9-section-heading mb-4">Proven Across Real-World Environments</h2>
          <p className="c9-body mb-2">Multi-site rollouts completed across retail and logistics. Thousands of endpoints actively managed.</p>
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
            href: '/case-studies/retail-pos-stabilisation'
          },
          {
            tag: 'HEALTHCARE',
            title: 'Migrating Arthritis Australia to Agile Cloud Voice',
            desc: 'Replacing end-of-life on-premise systems with a flexible cloud phone system, enabling their team to field critical calls remotely and securely.',
            img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
            videoText: 'Arthritis Foundation Voice',
            href: '/case-studies/legal-firm-takeover'
          },
          {
            tag: 'EDUCATION',
            title: 'Enterprise Ethernet for Baxter Institute',
            desc: 'Delivering direct 1Gbps/1Gbps fibre connectivity to support hundreds of concurrent students and cloud-hosted learning environments without latency.',
            img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
            videoText: 'Baxter Institute Network',
            href: '/case-studies/greenfield-site-rollout'
          }
        ]}
      />
      <WpCompliance />
      <WpFAQAndFeedback />

      {/* 10. LEAD CAPTURE — Final CTA */}
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="Take Control of Your IT Environment"
          title="Take Control of Your IT Environment"
          description="Whether you're opening new locations, stabilising existing systems, or scaling enterprise operations—C9 delivers complete ownership and reliable performance."
          ctaText="Book a Consultation"
          formTitle="Speak to an Expert"
        />
      </section>

    </main>
  );
}
