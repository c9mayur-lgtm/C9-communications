import { Navbar } from "@/components/layout/Navbar"
import { WpFooter as Footer } from "@/components/layout/WpFooter"
import { ContactSection } from "@/components/sections/ContactSection"
import { Testimonials } from "@/components/sections/Testimonials"
import Hero from "@/components/sections/outsourcing/Hero"
import SituationRecognition from "@/components/sections/outsourcing/SituationRecognition"
import WhatYouGet from "@/components/sections/outsourcing/WhatYouGet"
import StayInControl from "@/components/sections/outsourcing/StayInControl"
import TheTransition from "@/components/sections/outsourcing/TheTransition"
import Comparison from "@/components/sections/outsourcing/Comparison"
import DefenseBridge from "@/components/sections/outsourcing/DefenseBridge"
import SocialProof from "@/components/sections/outsourcing/SocialProof"
import FAQ from "@/components/sections/outsourcing/FAQ"
import FinalCTA from "@/components/sections/outsourcing/FinalCTA"

export const metadata = {
  title: "IT Outsourcing | Managed IT | C9 Communications",
  description: "C9 Communications becomes your IT department — or replaces the one that's letting you down. Helpdesk, infrastructure, strategy, and security. All managed under one agreement.",
  openGraph: {
    title: "IT Outsourcing | Managed IT | C9 Communications",
    description: "Full IT department from day one. Helpdesk, infrastructure, vCIO, and security under one managed services agreement.",
    url: "https://c9communications.com.au/managed-it/outsourcing",
  },
}

export default function ITOutsourcingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SituationRecognition />
      <WhatYouGet />
      <StayInControl />
      <TheTransition />
      <Comparison />
      <DefenseBridge />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
}
