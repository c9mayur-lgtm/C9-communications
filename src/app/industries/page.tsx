import IndustriesHero from "@/components/sections/industries/IndustriesHero"
import IndustryGrid from "@/components/sections/industries/IndustryGrid"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"
import { TrustProofSystem } from "@/components/sections/TrustProofSystem"

export const metadata = {
  title: "Industry IT & Telco Solutions | C9 Communications",
  description: "C9 delivers reliable IT and communications solutions built for retail, healthcare, professional services, real estate, hospitality, and education environments across Australia.",
  openGraph: {
    title: "Industry IT & Telco Solutions | C9 Communications",
    description: "Technology solutions built for the way your industry operates.",
    url: "https://c9-communications.vercel.app/industries",
  },
}

export default function IndustriesIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustriesHero />
      <IndustryGrid />

      <TrustProofSystem />

      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GET IN TOUCH"
          title="Not Sure What Fits Your Business?"
          description="Talk to our team and we'll help map the right solution for your environment. No commitment required — just a clear conversation about what you need. No obligation. Just clear, practical advice."
          formTitle="Talk to an Expert"
        />
      </section>
    </main>
  )
}
