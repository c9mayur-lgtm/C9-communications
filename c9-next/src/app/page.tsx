import { WpHero } from "@/components/layout/WpHero";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpHighlights } from "@/components/wordpress/WpHighlights";
import { WpServices } from "@/components/wordpress/WpServices";
import { WpSolutions } from "@/components/wordpress/WpSolutions";
import { WpWhyPartner } from "@/components/wordpress/WpWhyPartner";
import { WpVendors } from "@/components/wordpress/WpVendors";
import { WpCaseStudies } from "@/components/wordpress/WpCaseStudies";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { WpFooter } from "@/components/layout/WpFooter";

export default function Home() {
  return (
    <>
      <WpHero />
      <WpClientTicker />
      <WpHighlights />
      <WpServices />
      <WpSolutions />
      <WpWhyPartner />
      <WpVendors />
      <WpCaseStudies />
      <WpFAQAndFeedback />
      <section id="consultation-section">
        <WpConsultationForm showHeader={false} />
      </section>
      <WpFooter />
    </>
  );
}
