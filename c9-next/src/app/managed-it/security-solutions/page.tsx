import React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { WpFooter as Footer } from "@/components/layout/WpFooter"
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback"
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"
import Hero from "@/components/sections/security/Hero"
import ThreatReality from "@/components/sections/security/ThreatReality"
import TwoLayers from "@/components/sections/security/TwoLayers"
import Baseline from "@/components/sections/security/Baseline"
import DefenseSection from "@/components/sections/security/DefenseSection"
import FinalCTA from "@/components/sections/security/FinalCTA"

const SECURITY_FAQS = [
  {
    q: "What security is included in a standard Managed IT engagement?",
    a: "Every C9 Managed IT engagement includes endpoint protection, patch management, MFA enforcement, email security, managed backup, and basic security awareness. These controls are included in the fixed monthly fee — not billed as extras."
  },
  {
    q: "What is the difference between Managed IT security and C9 Defense?",
    a: "Managed IT security covers your baseline — the controls every business should have. C9 Defense is a dedicated enterprise cybersecurity program for organisations with elevated risk profiles or formal compliance obligations. It adds Essential 8 implementation, continuous 24/7 monitoring, incident response, and tested recovery assurance on top of the baseline."
  },
  {
    q: "Do I need C9 Defense if I am already a Managed IT client?",
    a: "Not necessarily. Most small and mid-sized businesses are well served by the Managed IT security baseline. C9 Defense is recommended for organisations in regulated industries, those that have experienced a security incident, or those facing compliance audit requirements. Your account manager will be honest about which level of coverage your organisation actually needs."
  },
  {
    q: "What is Essential 8 and do I need to comply with it?",
    a: "The Essential 8 is a set of eight cybersecurity mitigation strategies published by the Australian Cyber Security Centre. It is mandatory for Australian Government entities and increasingly required by cyber insurers and enterprise clients. C9 Defense implements and maintains Essential 8 compliance with formal evidence and reporting."
  },
  {
    q: "What happens if we have a security incident?",
    a: "Managed IT clients receive incident response support as part of their engagement — C9 will assist with containment, investigation, and recovery. C9 Defense clients additionally have continuous monitoring that detects threats before they become incidents, and a formal incident response process with defined response times."
  },
  {
    q: "Can you do a security assessment without committing to a full engagement?",
    a: "Yes. C9 offers a security posture assessment that identifies your current state against the Essential 8 framework, highlights gaps, and provides a remediation roadmap — with no obligation to proceed to a full engagement."
  }
];

export const metadata = {
  title: "Security Solutions | Managed IT | C9 Communications",
  description: "C9 manages your security baseline as part of every Managed IT engagement. For Essential 8 compliance and continuous monitoring, C9 Defense extends the coverage.",
  openGraph: {
    title: "Security Solutions | C9 Communications",
    description: "Managed IT security baseline and C9 Defense enterprise cybersecurity for Australian organisations.",
    url: "https://c9communications.com.au/managed-it/security-solutions",
  },
}

import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export default function SecuritySolutionsPage() {
  return (
    <main className="font-sans" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <ThreatReality />
      <TwoLayers />
      <Baseline />
      <DefenseSection />
      
      {/* FAQ & Testimonials Section inherited from Homepage global structural systems */}
      <WpFAQAndFeedback faqItems={SECURITY_FAQS} showTestimonials={true} />
      
      <FinalCTA />
      
      {/* Universal Consultation Form Component */}
      <WpConsultationForm 
        showHeader={false} 
        eyebrow="SECURITY ASSESSMENT"
        title="Find out where your organisation actually stands."
        description="A C9 security assessment identifies your current posture, highlights the gaps, and gives you a clear remediation roadmap. No obligation. No jargon."
        formTitle="Schedule Security Assessment"
      />
      
      <Footer />
    </main>
  )
}
