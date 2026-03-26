import { IndustryTestimonials } from "@/components/sections/non-profit/IndustryTestimonials"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"
import Hero from "@/components/sections/non-profit/Hero"
import IndustryContext from "@/components/sections/non-profit/IndustryContext"
import Challenges from "@/components/sections/non-profit/Challenges"
import Services from "@/components/sections/non-profit/Services"
import ComplianceBlock from "@/components/sections/non-profit/ComplianceBlock"
import CaseStudy from "@/components/sections/non-profit/CaseStudy"
import FAQ from "@/components/sections/non-profit/FAQ"

export const metadata = {
  title: "IT & Telco for Non-Profit Organisations | C9 Communications",
  description: "C9 Communications delivers managed IT and Telco for Australian non-profit organisations. Stretch your technology budget further with a single managed services partner.",
  openGraph: {
    title: "IT & Telco for Non-Profit Organisations | C9 Communications",
    description: "Managed IT and Telco that stretches your technology budget further.",
    url: "https://c9communications.com.au/industries/non-profit",
  },
}

export default function NonProfitPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <IndustryContext />
      <Challenges />
      <Services />
      <ComplianceBlock />
      <CaseStudy />
      <FAQ />
      <IndustryTestimonials />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="NON-PROFIT IT ADVISORY"
          title="More mission. Less IT overhead."
          description="Tell us about your organisation. We'll put together a managed IT proposal built around your mission and your budget — no jargon, no obligation."
          formTitle="Get Your NFP IT Proposal"
        />
      </section>
    </main>
  )
}
