import { IndustryTestimonials } from "@/components/sections/professional-services/IndustryTestimonials"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"
import Hero from "@/components/sections/professional-services/Hero"
import IndustryContext from "@/components/sections/professional-services/IndustryContext"
import Challenges from "@/components/sections/professional-services/Challenges"
import Services from "@/components/sections/professional-services/Services"
import ComplianceBlock from "@/components/sections/professional-services/ComplianceBlock"
import CaseStudy from "@/components/sections/professional-services/CaseStudy"
import FAQ from "@/components/sections/professional-services/FAQ"

export const metadata = {
  title: "IT & Telco for Professional Services | C9 Communications",
  description: "C9 Communications delivers managed IT, Telco, and cybersecurity for Australian professional services firms. Secure client data, compliant infrastructure, and a single technology partner for your entire practice.",
  openGraph: {
    title: "IT & Telco for Professional Services | C9 Communications",
    description: "Managed IT and Telco built for Australian professional services firms.",
    url: "https://c9communications.com.au/industries/professional-services",
  },
}

export default function ProfessionalServicesPage() {
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
          eyebrow="PROFESSIONAL SERVICES IT ADVISORY"
          title="The IT partner your firm deserves."
          description="Book a 30-minute strategy session with our senior consultants. We'll review your current infrastructure and compliance posture — no obligation, just expert advice."
          formTitle="Schedule Strategy Session"
        />
      </section>
    </main>
  )
}
