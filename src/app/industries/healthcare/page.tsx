import { HealthcareTestimonials } from "@/components/sections/healthcare/HealthcareTestimonials"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"
import Hero from "@/components/sections/healthcare/Hero"
import IndustryContext from "@/components/sections/healthcare/IndustryContext"
import Challenges from "@/components/sections/healthcare/Challenges"
import Services from "@/components/sections/healthcare/Services"
import ComplianceBlock from "@/components/sections/healthcare/ComplianceBlock"
import CaseStudy from "@/components/sections/healthcare/CaseStudy"
import FAQ from "@/components/sections/healthcare/FAQ"

export const metadata = {
  title: "Healthcare IT & Managed Services | C9 Communications",
  description: "C9 Communications delivers managed IT, Telco, and cybersecurity for Australian healthcare providers. Essential 8 compliance, multi-site support, and a single point of contact for your entire technology environment.",
  openGraph: {
    title: "Healthcare IT & Managed Services | C9 Communications",
    description: "Managed IT and Telco built for Australian healthcare providers.",
    url: "https://c9communications.com.au/industries/healthcare",
  },
}

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <IndustryContext />
      <Challenges />
      <Services />
      <ComplianceBlock />
      <CaseStudy />
      <FAQ />
      <HealthcareTestimonials />
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
  )
}
