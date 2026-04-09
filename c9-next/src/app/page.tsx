import { WpHero } from "@/components/layout/WpHero";
import { AudienceSolutions } from "@/components/sections/AudienceSolutions";
import { ResponsibilityBuckets } from "@/components/sections/ResponsibilityBuckets";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WpWhyPartner } from "@/components/wordpress/WpWhyPartner";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpCompliance } from "@/components/wordpress/WpCompliance";
import { WpCaseStudies } from "@/components/wordpress/WpCaseStudies";
import { WpVendors } from "@/components/wordpress/WpVendors";
import { WpSupport } from "@/components/wordpress/WpSupport";
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { WpIndustryGrid } from "@/components/landing/WpIndustryGrid";
import { WpITDepartmentOptions } from "@/components/wordpress/WpITDepartmentOptions";
import { WpSimplifyingIT } from "@/components/wordpress/WpSimplifyingIT";
import { WpHeroProducts } from "@/components/wordpress/WpHeroProducts";
import { WpHighlights } from "@/components/wordpress/WpHighlights";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpUnifiedClassification } from "@/components/wordpress/WpUnifiedClassification";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <WpHero />
      <AudienceSolutions />
      <ResponsibilityBuckets />
      <ProcessSection />
      <WpWhyPartner />
      
      {/* Supporting Content */}
      <WpClientTicker />
      <WpITDepartmentOptions />
      <WpHighlights />
      <WpHeroProducts />
      <WpSimplifyingIT />
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
