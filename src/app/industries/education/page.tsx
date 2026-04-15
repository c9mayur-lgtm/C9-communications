import { IndustryTestimonials } from "@/components/sections/education/IndustryTestimonials"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"
import Hero from "@/components/sections/education/Hero"
import IndustryContext from "@/components/sections/education/IndustryContext"
import Challenges from "@/components/sections/education/Challenges"
import Services from "@/components/sections/education/Services"
import ComplianceBlock from "@/components/sections/education/ComplianceBlock"
import CaseStudy from "@/components/sections/education/CaseStudy"
import FAQ from "@/components/sections/education/FAQ"

export const metadata = {
  title: "IT & Telco for Education Providers | C9 Communications",
  description: "C9 Communications delivers managed IT, Telco, and cybersecurity for Australian education providers. Reliable infrastructure, student data protection, and a single technology partner for your campus.",
  openGraph: {
    title: "IT & Telco for Education Providers | C9 Communications",
    description: "Managed IT and Telco built for Australian education providers.",
    url: "https://c9communications.com.au/industries/education",
  },
}

export default function EducationPage() {
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
          eyebrow="EDUCATION IT ADVISORY"
          title="The technology partner your campus deserves."
          description="Book a campus IT audit with our senior education consultants. We'll review your network infrastructure, student data security, and device management — no obligation."
          formTitle="Schedule Campus Audit"
        />
      </section>
    </main>
  )
}
