import { IndustryTestimonials } from "@/components/sections/real-estate/IndustryTestimonials"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"
import Hero from "@/components/sections/real-estate/Hero"
import IndustryContext from "@/components/sections/real-estate/IndustryContext"
import Challenges from "@/components/sections/real-estate/Challenges"
import Services from "@/components/sections/real-estate/Services"
import ComplianceBlock from "@/components/sections/real-estate/ComplianceBlock"
import CaseStudy from "@/components/sections/real-estate/CaseStudy"
import FAQ from "@/components/sections/real-estate/FAQ"

export const metadata = {
  title: "IT & Telco for Real Estate Agencies | C9 Communications",
  description: "C9 Communications delivers managed IT and Telco for Australian real estate agencies. Reliable connectivity, client data protection, and a single technology partner for your offices and agents in the field.",
  openGraph: {
    title: "IT & Telco for Real Estate Agencies | C9 Communications",
    description: "Managed IT and Telco built for Australian real estate agencies.",
    url: "https://c9communications.com.au/industries/real-estate",
  },
}

export default function RealEstatePage() {
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
          eyebrow="REAL ESTATE IT ADVISORY"
          title="From the office to the open home. Always connected."
          description="Tell us about your offices and mobile agent workforce. We'll put together a managed IT and Telco proposal designed for real estate efficiency and client data protection."
          formTitle="Get Your Agency IT Proposal"
        />
      </section>
    </main>
  )
}
