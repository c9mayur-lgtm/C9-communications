import IndustriesHero from "@/components/sections/industries/IndustriesHero"
import IndustryGrid from "@/components/sections/industries/IndustryGrid"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"

export const metadata = {
  title: "Industry Specific IT & Telco Solutions | C9 Communications",
  description: "Explore C9's managed IT and Telco stacks designed for Australian industries including Healthcare, Education, Retail, Real Estate, and more.",
}

export default function IndustriesIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustriesHero />
      <IndustryGrid />
      
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="READY TO TRANSFORM?"
          title="Looking for a partner that understands your sector?"
          description="Tell us about your organization and we'll match you with a specialist who understands your industry's unique technology requirements."
          formTitle="Speak to an Industry Specialist"
        />
      </section>
    </main>
  )
}
