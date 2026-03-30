import { Navbar } from "@/components/layout/Navbar"
import { WpFooter as Footer } from "@/components/layout/WpFooter"
import { WpConsultationForm as ContactSection } from "@/components/wordpress/WpConsultationForm"
import { WpFAQAndFeedback as Testimonials } from "@/components/wordpress/WpFAQAndFeedback"
import Hero from "@/components/sections/cloud/Hero"
import DualAudience from "@/components/sections/cloud/DualAudience"
import BlandExplorer from "@/components/sections/cloud/BlandExplorer"
import MigrationPath from "@/components/sections/cloud/MigrationPath"
import AustralianData from "@/components/sections/cloud/AustralianData"
import CostSecurity from "@/components/sections/cloud/CostSecurity"
import DefenseBridge from "@/components/sections/cloud/DefenseBridge"
import FAQ from "@/components/sections/cloud/FAQ"
import FinalCTA from "@/components/sections/cloud/FinalCTA"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export const metadata = {
  title: "Cloud Services | Managed IT | C9 Communications",
  description: "C9 migrates Australian businesses to cloud and manages the environment ongoing — Microsoft 365, Azure, IaaS, private and hybrid cloud. Australian data centres. Migration and managed service in one engagement.",
  openGraph: {
    title: "Cloud Services | C9 Communications",
    description: "Cloud migration and ongoing managed cloud services for Australian businesses. M365, Azure, IaaS, BaaS, FWaaS. Australian data centres. One managed engagement.",
    url: "https://c9communications.com.au/managed-it/cloud-services",
  },
}

export default function CloudServicesPage() {
  return (
    <main className="min-h-screen bg-white font-sans" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <DualAudience />
      <BlandExplorer />
      <MigrationPath />
      <AustralianData />
      <CostSecurity />
      <DefenseBridge />
      <FAQ />
      <FinalCTA />
      {/* 
        Note: The user requested <Testimonials /> and <ContactSection />.
        Based on the current project's high-fidelity architecture:
        - ContactSection is rendered via WpConsultationForm
        - Testimonials is rendered via WpFAQAndFeedback (with showFAQ={false})
      */}
      <Testimonials showFAQ={false} showTestimonials={true} />
      <ContactSection 
        eyebrow="CLOUD STRATEGY"
        title="Ready to talk cloud?"
        description="Discuss your migration, management, or cost optimization needs with a C9 engineer. No obligation."
        formTitle="Request a Cloud Consultation"
      />
      <Footer />
    </main>
  )
}
