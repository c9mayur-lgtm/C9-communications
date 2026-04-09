import { WpHero } from "@/components/layout/WpHero";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpHighlights } from "@/components/wordpress/WpHighlights";
import { WpSimplifyingIT } from "@/components/wordpress/WpSimplifyingIT";
import { WpServices } from "@/components/wordpress/WpServices";
import { WpBentoSolutions } from "@/components/wordpress/WpBentoSolutions";
import { WpIndustryGrid } from "@/components/landing/WpIndustryGrid";
import { WpSupport } from "@/components/wordpress/WpSupport";
import { WpVendors } from "@/components/wordpress/WpVendors";
import { WpCaseStudies } from "@/components/wordpress/WpCaseStudies";
import { WpCompliance } from "@/components/wordpress/WpCompliance";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { WpITDepartmentOptions } from "@/components/wordpress/WpITDepartmentOptions";
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { WpPromoBanner } from "@/components/wordpress/WpPromoBanner";
import { WpHeroProducts } from "@/components/wordpress/WpHeroProducts";
import { WpUnifiedClassification } from "@/components/wordpress/WpUnifiedClassification";

export default function ManagedIT() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <WpHero />
      <WpClientTicker />
      <WpITDepartmentOptions />
      <WpUnifiedClassification />
      <WpHighlights />
      <WpHeroProducts />
      <WpSimplifyingIT />
      <WpIndustryGrid />
      <WpDefenseBanner />

      {/* Promo Offer — Managed IT Audit */}
      <WpPromoBanner 
        eyebrow="STRATEGIC ADVISORY"
        title="Get a free Cybersecurity & IT Audit"
        description="Identify vulnerabilities and optimize your performance with a comprehensive 25-point technology review by our senior engineers. No strings attached."
        ctaText="Book my free audit"
        ctaHref="#consultation-section"
        imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1500"
        disclaimer="*Audit subject to qualification based on team size and infrastructure complexity."
      />
      <WpSupport />
      <WpVendors />
      <WpCaseStudies />
      <WpCompliance />
      <WpFAQAndFeedback />

      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="Strategic IT advisory"
          title="The IT partner your business deserves."
          description="Book a 30-minute strategy session with our senior consultants. We'll review your current infrastructure and security posture — no obligation, just expert advice."
          formTitle="Schedule Strategy Session"
        />
      </section>
    </main>
  );
}
