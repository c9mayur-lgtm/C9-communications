import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm"
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback"
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner"
import { HelpdeskTestimonials as Testimonials } from "@/components/sections/helpdesk-v2/HelpdeskTestimonials"
import Hero from "@/components/sections/helpdesk-v2/Hero"
import Recognition from "@/components/sections/helpdesk-v2/Recognition"
import WhatsCovered from "@/components/sections/helpdesk-v2/WhatsCovered"
import HowItWorks from "@/components/sections/helpdesk-v2/HowItWorks"
import SLACommitment from "@/components/sections/helpdesk-v2/SLACommitment"
import C9Difference from "@/components/sections/helpdesk-v2/C9Difference"

export const metadata = {
  title: "Helpdesk Support | C9 Communications",
  description: "C9 Communications provides Australian-based helpdesk support for businesses — remote and on-site, with defined SLAs, a dedicated account manager, and a team that knows your environment from day one.",
  openGraph: {
    title: "Helpdesk Support | C9 Communications",
    description: "Australian-based helpdesk support with defined SLAs, dedicated account management, and monthly performance reporting.",
    url: "https://c9communications.com.au/managed-it/helpdesk-support",
  },
}

const helpdeskFaqs = [
  { q: "Is your helpdesk based in Australia?", a: "Yes. Every single technician in our helpdesk team is based in Australia. We do not use offshore call centres or routing. When your staff call, they speak to an expert in a similar time zone who understands the Australian business landscape." },
  { q: "Do we get a dedicated account manager?", a: "Yes. Every managed IT engagement includes a named account manager. They are your point of escalation and are responsible for the overall health of your IT environment and our service delivery." },
  { q: "How do you handle on-site issues?", a: "We always try to resolve issues remotely first to ensure the fastest possible resolution. If a hardware fault or network issue requires physical attendance, we dispatch a technician to your site as part of our managed service agreement." },
  { q: "Can you support our specific industry software?", a: "We support a wide range of industry-specific applications (practice management, legal software, ERPs, etc.). While we may not be software developers, our team acts as the liaison between your staff and the software vendor to ensure issues are resolved without your staff being 'stuck in the middle'." },
  { q: "What happens if we have an emergency after hours?", a: "Standard helpdesk operates during business hours. We offer 24/7/365 critical support options for businesses that require around-the-clock coverage for outages or urgent security incidents." }
];

export default function HelpdeskSupportPage() {
  return (
    <main className="managed-it-base min-h-screen bg-white">
      <Hero />
      <Recognition />
      <WhatsCovered />
      <HowItWorks />
      <SLACommitment />
      <C9Difference />
      <WpDefenseBanner 
        title={<>Security incidents need more <span className="text-[#5D00D6]">than helpdesk.</span></>}
        description="When your team is facing a potential breach, ransomware, or active threat — C9 Defense provides continuous monitoring and incident response so helpdesk is never your only line of defence."
        buttonText="Learn About C9 Defense"
        href="/c9-defense"
      />
      <div className="-my-8"><WpFAQAndFeedback showTestimonials={false} faqItems={helpdeskFaqs} /></div>
      <Testimonials />
      <WpConsultationForm showHeader={false} eyebrow="" title="Ready to fix your helpdesk experience?" formTitle="Request a Helpdesk Proposal" />
    </main>
  )
}
