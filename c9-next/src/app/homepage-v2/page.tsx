import { Navbar } from "@/components/layout/Navbar";
import { WpFooter } from "@/components/layout/WpFooter";
import { WpHeroV2 } from "@/components/v2/WpHeroV2";
import { WpClientTickerV2 } from "@/components/v2/WpClientTickerV2";
import { WpHighlights } from "@/components/wordpress/WpHighlights";
import { WpSimplifyingIT } from "@/components/wordpress/WpSimplifyingIT";
import { DualAudienceLadder } from "@/components/v2/DualAudienceLadder";
import { WpITDepartmentOptions } from "@/components/wordpress/WpITDepartmentOptions";
import { WpServices } from "@/components/wordpress/WpServices";
import { WpSolutions } from "@/components/wordpress/WpSolutions";
import { WpIndustryGridV2 } from "@/components/v2/WpIndustryGridV2";
import { HumanDifference } from "@/components/v2/HumanDifference";
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { WpSupport } from "@/components/wordpress/WpSupport";
import { WpVendorsV2 } from "@/components/v2/WpVendorsV2";
import { WpCaseStudies } from "@/components/wordpress/WpCaseStudies";
import { WpCompliance } from "@/components/wordpress/WpCompliance";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpHeroProducts } from "@/components/wordpress/WpHeroProducts";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";

const v2Testimonials = [
  {
    content: "C9 sorted our phones, internet, and IT support in one go. I used to spend half my day dealing with tech issues — now I just get on with running the business.",
    name: "Mark T.",
    role: "Director, Stockdale & Leggo | Real Estate",
    metric: "3 vendors → 1",
    metricLabel: "Consolidated to C9",
    image: "/images/clients/stockdale & leggo.png"
  },
  {
    content: "Their team had our new office set up — internet, phones, devices — before we even moved in. The migration was invisible to our staff.",
    name: "Operations Team",
    role: "Baxter Institute | Education",
    metric: "0",
    metricLabel: "Downtime during migration",
    image: "/images/clients/Baxter Institute.png"
  },
  {
    content: "As a non-profit, every dollar counts. C9 got us onto Microsoft nonprofit licensing and managed NBN at a price that made sense for us.",
    name: "IT Coordinator",
    role: "Arthritis Australia | Non-Profit",
    metric: "40%",
    metricLabel: "Reduction in IT spend",
    image: "/images/clients/Arthritis.png"
  }
];

export default function HomepageV2() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <WpHeroV2 />
      <WpClientTickerV2 />
      <WpHighlights />
      
      {/* Sales Journey: Empathy & Qualification */}
      <DualAudienceLadder />
      <WpITDepartmentOptions />
      
      {/* Sales Journey: High-Level Solution Philosophy (not just products) */}
      <WpSolutions />
      <WpVendorsV2 />
      
      {/* Sales Journey: Industry Understanding & Human Touch */}
      <WpIndustryGridV2 />
      <HumanDifference />
      
      {/* Sales Journey: Proof & Conviction */}
      <WpCaseStudies />
      <WpDefenseBanner />
      <WpCompliance />
      <WpFAQAndFeedback 
        testimonials={v2Testimonials.map(t => ({
          name: t.name,
          role: t.role,
          content: t.content,
          metric: t.metric,
          metricLabel: t.metricLabel,
          image: t.image
        }))}
      />

      {/* Sales Journey: The Close */}
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
