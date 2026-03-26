import { Navbar } from "@/components/layout/Navbar"
import { WpFooter } from "@/components/layout/WpFooter"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"
import { HealthcareTestimonials as Testimonials } from "@/components/sections/healthcare/HealthcareTestimonials"
import Hero from "@/components/sections/helpdesk/Hero"
import Recognition from "@/components/sections/helpdesk/Recognition"
import WhatsCovered from "@/components/sections/helpdesk/WhatsCovered"
import HowItWorks from "@/components/sections/helpdesk/HowItWorks"
import SLACommitment from "@/components/sections/helpdesk/SLACommitment"
import C9Difference from "@/components/sections/helpdesk/C9Difference"
import DefenseBridge from "@/components/sections/helpdesk/DefenseBridge"
import SocialProof from "@/components/sections/helpdesk/SocialProof"
import FAQ from "@/components/sections/helpdesk/FAQ"
import FinalCTA from "@/components/sections/helpdesk/FinalCTA"

export const metadata = {
  title: "Helpdesk Support | Managed IT | C9 Communications",
  description: "C9 Communications provides Australian-based helpdesk support for businesses — remote and on-site, with defined SLAs, a dedicated account manager, and a team that knows your environment from day one.",
  openGraph: {
    title: "Helpdesk Support | Managed IT | C9 Communications",
    description: "Australian-based helpdesk support with defined SLAs, dedicated account management, and monthly performance reporting.",
    url: "https://c9communications.com.au/managed-it/helpdesk-support",
  },
}

export default function HelpdeskSupportPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Recognition />
      <WhatsCovered />
      <HowItWorks />
      <SLACommitment />
      <C9Difference />
      <DefenseBridge />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Testimonials />
      <WpConsultationForm showHeader={false} eyebrow="GET STARTED" title="Ready to fix your helpdesk experience?" formTitle="Request a Helpdesk Proposal" />
      <WpFooter />
    </main>
  )
}
