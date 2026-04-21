import { Navbar } from "@/components/layout/Navbar"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WpFooter as Footer } from "@/components/layout/WpFooter"
import Hero from "@/components/sections/strategy/Hero"
import Recognition from "@/components/sections/strategy/Recognition"
import WhatItMeans from "@/components/sections/strategy/WhatItMeans"
import EngagementModel from "@/components/sections/strategy/EngagementModel"
import DefenseBridge from "@/components/sections/strategy/DefenseBridge"
import FinalCTA from "@/components/sections/strategy/FinalCTA"
import FAQ from "@/components/sections/strategy/FAQ"
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"

const STRATEGY_FAQS = [
  {
    q: "What is a virtual CIO and how is it different from a regular IT consultant?",
    a: "A virtual CIO is an ongoing strategic relationship — not a one-off engagement. Unlike a consultant who delivers a report and moves on, a C9 vCIO attends your planning meetings, manages your vendors, updates your roadmap quarterly, and is accountable for the outcomes of your technology investment over time."
  },
  {
    q: "Is this only available as part of a Managed IT agreement?",
    a: "The strategic engagement is most effective when paired with Managed IT — because C9 can both set the strategy and execute it directly. However, we can discuss standalone strategic consulting for businesses with existing IT resources who need strategic oversight only."
  },
  {
    q: "How often does the vCIO meet with our team?",
    a: "At minimum, quarterly reviews are included as standard. Most clients engage more frequently during active roadmap phases or when significant technology decisions are being made. Your account manager is available between formal reviews."
  },
  {
    q: "Will you recommend technology we don't actually need?",
    a: "No. C9's strategic advice is vendor-agnostic — we are not incentivised to recommend any specific product or vendor. Our job is to identify what your business needs and source the best-fit solution, regardless of who makes it."
  },
  {
    q: "What does a technology roadmap actually look like?",
    a: "A C9 roadmap is a prioritised 12-month plan covering: initiatives ranked by business impact and urgency, budget requirements per initiative, dependencies and sequencing, risk items requiring attention, and quick wins achievable within 90 days. It is updated every quarter to reflect your evolving business priorities."
  },
  {
    q: "Can you help us prepare for a board technology presentation?",
    a: "Yes — board-level technology reporting is included in the strategic engagement. C9 translates your IT environment into language your board understands: risk exposure, investment rationale, and roadmap progress — without technical jargon."
  }
];

export const metadata = {
  title: "IT Strategy & Consulting | Managed IT | C9 Communications",
  description: "C9 provides virtual CIO services and strategic IT consulting for Australian businesses — IT roadmaps, budget planning, vendor management, and board reporting. Strategy that gets executed.",
  openGraph: {
    title: "IT Strategy & Consulting | C9 Communications",
    description: "Virtual CIO and strategic IT consulting. Roadmaps, budget planning, and vendor management for Australian businesses.",
    url: "https://c9communications.com.au/managed-it/strategy-consulting",
  },
}

export default function StrategyConsultingPage() {
  return (
    <main className="font-sans" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                  <Hero />
      <Recognition />
      <WhatItMeans />
      <EngagementModel />
      <DefenseBridge />
      
      {/* FAQ & Testimonials Section */}
      <WpFAQAndFeedback faqItems={STRATEGY_FAQS} showTestimonials={true} />
      
      <FinalCTA />
      
      {/* Strategic Consultation Form */}
      <WpConsultationForm 
        showHeader={true}
        eyebrow="STRATEGIC IT ADVISORY"
        title="Ready to turn your IT spend into a strategic asset?"
        description="Book a strategy session with C9 — no obligation, no jargon, no product pitch. Just a clear conversation about where your technology is today and where it needs to be."
        formTitle="Schedule Strategy Session"
      />
      
      <Footer />
    </main>
  )
}
