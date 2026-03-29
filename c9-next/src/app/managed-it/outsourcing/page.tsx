import { Navbar } from "@/components/layout/Navbar"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WpFooter as Footer } from "@/components/layout/WpFooter"
import Hero from "@/components/sections/outsourcing/Hero"
import SituationRecognition from "@/components/sections/outsourcing/SituationRecognition"
import WhatYouGet from "@/components/sections/outsourcing/WhatYouGet"
import StayInControl from "@/components/sections/outsourcing/StayInControl"
import TheTransition from "@/components/sections/outsourcing/TheTransition"
import Comparison from "@/components/sections/outsourcing/Comparison"
import DefenseBridge from "@/components/sections/outsourcing/DefenseBridge"
import FinalCTA from "@/components/sections/outsourcing/FinalCTA"
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"

const OUTSOURCING_FAQS = [
  {
    q: "What size businesses do you work with?",
    a: "C9 works with Australian businesses from around 10 staff through to 300+. The managed IT model works across this range because it scales with your business — you're not paying for a full-time hire when you need part-time coverage, and you're not under-resourced when you grow."
  },
  {
    q: "Can you take over from our existing IT provider?",
    a: "Yes — and this is one of the most common transitions we manage. C9 handles the documentation, knowledge transfer, and cutover directly with your existing provider. There is no gap in support coverage during the transition and your staff won't notice the change except that things work better."
  },
  {
    q: "How does pricing work — per user, per device, or fixed monthly?",
    a: "C9 proposals are typically structured as a fixed monthly fee based on the scope of your environment — number of users, devices, sites, and complexity. Fixed pricing means no surprise invoices and predictable IT costs you can budget for confidently."
  },
  {
    q: "What's the minimum contract term?",
    a: "Contract terms are discussed during the proposal stage based on the scope of your engagement. C9 does not believe in locking businesses into long contracts when the service isn't delivering — your account manager will walk you through the commercial structure during your initial consultation."
  },
  {
    q: "Can we include Telco — internet and phones — in the same agreement?",
    a: "Yes — and this is one of the most common outcomes for businesses moving to C9. Managed IT and Telco under one agreement means one invoice, one account manager, and no finger-pointing between your IT and connectivity providers when something goes wrong."
  }
];

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
    <main className="font-sans" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <SituationRecognition />
      <WhatYouGet />
      <StayInControl />
      <TheTransition />
      <Comparison />
      <DefenseBridge />
      
      <WpFAQAndFeedback faqItems={OUTSOURCING_FAQS} showTestimonials={false} />
      
      <FinalCTA />
      
      <WpConsultationForm 
        showHeader={true}
        eyebrow="STRATEGIC IT ADVISORY"
        title="Ready to outsource your IT department?"
        description="Book a strategy session with our senior Australian-based engineers. We'll review your current setup and provide a clear roadmap for improved performance and security."
        formTitle="Request Outsourcing Proposal"
      />
      
      <Footer />
    </main>
  )
}
