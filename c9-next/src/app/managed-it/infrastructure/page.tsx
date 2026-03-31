import { Navbar } from "@/components/layout/Navbar"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WpFooter } from "@/components/layout/WpFooter"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"
import { ServiceTestimonialKajabi } from "@/components/wordpress/ServiceTestimonialKajabi"
import Hero from "@/components/sections/infrastructure/Hero"
import Credibility from "@/components/sections/infrastructure/Credibility"
import InfraScope from "@/components/sections/infrastructure/InfraScope"
import HowWeWork from "@/components/sections/infrastructure/HowWeWork"
import MonitoringBlock from "@/components/sections/infrastructure/MonitoringBlock"
import Partners from "@/components/sections/infrastructure/Partners"
import DefenseBridge from "@/components/sections/infrastructure/DefenseBridge"
import FAQ from "@/components/sections/infrastructure/FAQ"
import FinalCTA from "@/components/sections/infrastructure/FinalCTA"

export const metadata = {
  title: "IT Infrastructure Services | Managed IT | C9 Communications",
  description: "C9 designs, deploys, and manages IT infrastructure for Australian businesses — servers, storage, networking, cloud, security, and backup. One managed services agreement.",
  openGraph: {
    title: "IT Infrastructure Services | C9 Communications",
    description: "Managed IT infrastructure for Australian businesses. Design, deployment, migration, and 24/7 monitoring.",
    url: "https://c9communications.com.au/managed-it/infrastructure",
  },
}

export default function InfrastructurePage() {
  return (
    <main className="bg-white text-[#1A1A2E] font-['Proxima_Nova']">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <Credibility />
      <InfraScope />
      <HowWeWork />
      <MonitoringBlock />
      <Partners />
      <DefenseBridge />
      <FAQ />
      <FinalCTA />
      <ServiceTestimonialKajabi />
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="STRATEGIC IT ADVISORY"
          title="The IT partner your business deserves."
          description="Book a 30-minute strategy session with our senior consultants. We'll review your current infrastructure and security posture — no obligation, just expert advice."
          formTitle="Schedule Strategy Session"
        />
      </section>
      <WpFooter />
    </main>
  )
}
