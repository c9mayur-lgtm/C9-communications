import { WpHero } from "@/components/layout/WpHero";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { AudienceSolutions } from "@/components/sections/AudienceSolutions";
import { ResponsibilityBuckets } from "@/components/sections/ResponsibilityBuckets";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpCompliance } from "@/components/wordpress/WpCompliance";
import { WpCaseStudies } from "@/components/wordpress/WpCaseStudies";
import { WpVendors } from "@/components/wordpress/WpVendors";
import { WpSupport } from "@/components/wordpress/WpSupport";
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { WpIndustryGrid } from "@/components/landing/WpIndustryGrid";
import { WpSolutions } from "@/components/wordpress/WpSolutions";
import { WpServices } from "@/components/wordpress/WpServices";
import { WpITDepartmentOptions } from "@/components/wordpress/WpITDepartmentOptions";
import { WpSimplifyingIT } from "@/components/wordpress/WpSimplifyingIT";
import { WpHeroProducts } from "@/components/wordpress/WpHeroProducts";
import { WpHighlights } from "@/components/wordpress/WpHighlights";
import { WpWhyPartner } from "@/components/wordpress/WpWhyPartner";

export default function HomepageV2() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <WpHero />
      <AudienceSolutions />
      <ResponsibilityBuckets />
      <ProcessSection />
      <WpWhyPartner />
      
      {/* Supporting Content */}
      <WpClientTicker />
      <WpHighlights />
      <WpHeroProducts />
      <WpSimplifyingIT />
      <WpITDepartmentOptions />
      <WpServices />
      <WpSolutions />
      <WpIndustryGrid />
      <WpDefenseBanner />
      <WpSupport />
      <WpVendors />
      <WpCaseStudies />
      <WpCompliance />
      <WpFAQAndFeedback />

      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="STRATEGIC IT ADVISORY"
          title="The IT partner your business deserves."
          description="Book a 30-minute strategy session with our senior consultants. We'll review your current infrastructure and security posture — no obligation, just expert advice."
          formTitle="Schedule Strategy Session"
        />
      </section>
    </main>
  );
}
