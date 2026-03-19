import { WpHero } from "@/components/layout/WpHero";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpHighlights } from "@/components/wordpress/WpHighlights";
import { WpSimplifyingIT } from "@/components/wordpress/WpSimplifyingIT";
import { WpServices } from "@/components/wordpress/WpServices";
import { WpSolutions } from "@/components/wordpress/WpSolutions";
import { WpIndustryMarquee } from "@/components/landing/WpIndustryMarquee";
import { WpSupport } from "@/components/wordpress/WpSupport";
import { WpVendors } from "@/components/wordpress/WpVendors";
import { WpCaseStudies } from "@/components/wordpress/WpCaseStudies";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <WpHero />
      <WpClientTicker />
      <WpHighlights />
      <WpSimplifyingIT />
      <WpServices />
      <WpSolutions />
      <WpIndustryMarquee />
      <WpSupport />
      <WpVendors />
      <WpCaseStudies />
      <WpFAQAndFeedback />

      <section id="consultation-section">
        <WpConsultationForm showHeader={false} />
      </section>
    </main>
  );
}
