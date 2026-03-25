import { WpHero } from "@/components/layout/WpHero";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpHighlights } from "@/components/wordpress/WpHighlights";
import { WpSimplifyingIT } from "@/components/wordpress/WpSimplifyingIT";
import { WpServices } from "@/components/wordpress/WpServices";
import { WpSolutions } from "@/components/wordpress/WpSolutions";
import { WpIndustryGrid } from "@/components/landing/WpIndustryGrid";
import { WpSupport } from "@/components/wordpress/WpSupport";
import { WpVendors } from "@/components/wordpress/WpVendors";
import { WpCaseStudies } from "@/components/wordpress/WpCaseStudies";
import { WpCompliance } from "@/components/wordpress/WpCompliance";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { WpITDepartmentOptions } from "@/components/wordpress/WpITDepartmentOptions";
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { WpHeroProducts } from "@/components/wordpress/WpHeroProducts";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <WpHero />
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
