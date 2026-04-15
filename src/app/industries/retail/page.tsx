import { IndustryTestimonials } from "@/components/sections/retail/IndustryTestimonials"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"
import Hero from "@/components/sections/retail/Hero"
import IndustryContext from "@/components/sections/retail/IndustryContext"
import Challenges from "@/components/sections/retail/Challenges"
import Services from "@/components/sections/retail/Services"
import ComplianceBlock from "@/components/sections/retail/ComplianceBlock"
import CaseStudy from "@/components/sections/retail/CaseStudy"
import FAQ from "@/components/sections/retail/FAQ"

export const metadata = {
  title: "IT & Telco for Retail Businesses | C9 Communications",
  description: "C9 Communications delivers managed IT and Telco for Australian retail businesses. Reliable connectivity, POS support, and a single technology partner across all your locations.",
  openGraph: {
    title: "IT & Telco for Retail Businesses | C9 Communications",
    description: "Managed IT and Telco built for Australian retail businesses.",
    url: "https://c9communications.com.au/industries/retail",
  },
}

export default function RetailPage() {
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
          eyebrow="RETAIL IT ADVISORY"
          title="Keep your stores open. Keep your revenue flowing."
          description="Tell us about your retail network. We'll put together a managed IT and connectivity proposal designed for multi-store reliability and PCI-DSS compliance."
          formTitle="Get Your Retail IT Proposal"
        />
      </section>
    </main>
  )
}
