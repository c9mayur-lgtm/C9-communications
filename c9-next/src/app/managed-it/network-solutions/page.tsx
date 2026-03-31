import { Navbar } from "@/components/layout/Navbar"
import { WpFooter } from "@/components/layout/WpFooter"
import { WpConsultationForm as ContactSection } from "@/components/wordpress/WpConsultationForm"
import { WpFAQAndFeedback as Testimonials } from "@/components/wordpress/WpFAQAndFeedback"
import Hero from "@/components/sections/network/Hero"
import PrivateNetworks from "@/components/sections/network/PrivateNetworks"
import TechComparison from "@/components/sections/network/TechComparison"
import SubServices from "@/components/sections/network/SubServices"
import MonitoringBlock from "@/components/sections/network/MonitoringBlock"
import VendorPartners from "@/components/sections/network/VendorPartners"
import DefenseBridge from "@/components/sections/network/DefenseBridge"
import FinalCTA from "@/components/sections/network/FinalCTA"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export const metadata = {
  title: "Network Solutions | Managed IT | C9 Communications",
  description: "C9 designs, deploys and manages private network solutions for Australian businesses — MPLS, SD-WAN, hybrid, co-location, IP transit. 24/7 monitoring.",
  openGraph: {
    title: "Network Solutions | C9 Communications",
    description: "Total private network solutions for Australian businesses. MPLS, SD-WAN, hybrid, and co-location. Design, deployment, and 24/7 managed monitoring.",
    url: "https://c9communications.com.au/managed-it/network-solutions",
  },
}

const NETWORK_FAQS = [
  {
    q: "What is a private network and why do I need one?",
    a: "A private network is a dedicated network infrastructure for your organisation — not shared with other businesses or the public internet. It gives you secure, reliable connectivity between your sites, control over how traffic flows, and the ability to prioritise applications like voice and video. If you have multiple sites, remote staff, or sensitive data that needs to move between locations securely — a private network is the answer."
  },
  {
    q: "What is the difference between MPLS and SD-WAN?",
    a: "MPLS delivers high-performance connectivity using dedicated circuits — reliable and consistent, but not encrypted by default. SD-WAN is software-defined, aggregates multiple connection types, includes integrated security and encryption, and is faster to deploy and change. Most enterprise clients end up on a hybrid — MPLS for critical traffic, SD-WAN for flexibility and overflow. C9 will diagnose which approach is right for your environment."
  },
  {
    q: "Can you manage our existing network or only new builds?",
    a: "Both. C9 regularly takes over management of existing private networks — MPLS, SD-WAN, or hybrid — from other providers or internal teams. We start with a full network audit, document the existing configuration, identify gaps, and move to managed operations. Usually within two to four weeks."
  },
  {
    q: "What is co-location and do we need it?",
    a: "Co-location means housing your own servers and infrastructure in a shared, professionally managed data centre — rather than in your own office. You benefit from enterprise-grade power, cooling, physical security, and high-bandwidth connectivity without building your own data centre. C9 manages your co-location environment as part of the network engagement."
  },
  {
    q: "How does continuous network monitoring work?",
    a: "C9 monitors your network infrastructure continuously — traffic flows, interface health, performance metrics, and security events. When an anomaly is detected, our team diagnoses and responds proactively. You receive a monthly network health report, and every configuration change is documented in the audit history."
  },
  {
    q: "Can you handle geo-scaling and virtual circuits?",
    a: "Yes. C9 provides flexibility with geo-scaling via virtual circuits depending on your business needs. Whether you're expanding to new sites, scaling bandwidth on existing circuits, or connecting remote locations — we design the network architecture to accommodate your growth."
  },
  {
    q: "Do you manage network security as part of the engagement?",
    a: "Network security is built into the managed network engagement — firewall configuration, access controls, and continuous monitoring. For organisations requiring Essential 8 compliance, 24/7 threat monitoring, and formal security assurance — C9 Defense provides a dedicated security layer on top of the managed network."
  }
];

export default function NetworkSolutionsPage() {
  return (
    <main className="min-h-screen bg-white font-['Proxima_Nova']">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <PrivateNetworks />
      <TechComparison />
      <SubServices />
      <MonitoringBlock />
      <VendorPartners />
      <DefenseBridge />
      <FinalCTA />
      
      {/* Reusing common High-Fidelity sections with Network content */}
      <Testimonials 
        showFAQ={true} 
        showTestimonials={true} 
        faqItems={NETWORK_FAQS}
      />
      
      <section id="consultation-section">
        <ContactSection 
          showHeader={false} 
          eyebrow="NETWORK STRATEGY"
          title="The network partner your business deserves."
          description="Book a 30-minute strategy session with our senior network engineers. We'll review your current architecture and performance — no obligation, just expert advice."
          formTitle="Schedule Network Consultation"
        />
      </section>

      <WpFooter />
    </main>
  )
}
