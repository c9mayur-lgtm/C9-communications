'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Linkedin, Twitter, ArrowLeft, ArrowRight, ChevronRight, Target, ShieldCheck, CheckCircle } from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const INSIGHTS: Record<string, any> = {
  'enterprise-governance': {
    eyebrow: 'Infrastructure Control',
    title: 'Enterprise Governance: Mastering Multi-Site Infrastructure Control',
    summary: 'As operational footprints expand, managing IT across dozens of sites becomes a liability without a centralised governance model.',
    author: 'James Wilson',
    role: 'Infrastructure Strategist @ C9',
    time: '6 Min Read',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'fragmentation', label: 'The Cost of Fragmentation' },
      { id: 'consolidation', label: 'Vendor Consolidation' },
      { id: 'sla', label: 'SLA Enforcement' },
      { id: 'visibility', label: 'Single Pane of Glass' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          Enterprise growth naturally leads to complexity. When an organisation scales from 5 to 50 locations, the infrastructure model that worked in the beginning quickly degrades into a fragmented, high-risk environment.
        </p>

        <h2 id="fragmentation" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">The Cost of Fragmentation</h2>
        <p>
          Without strict governance, multi-site enterprises end up with different network hardware, different ISPs, and different security policies at every location. This lack of standardisation means the central IT team cannot proactively manage the network—they are reduced to reactive troubleshooting, relying on non-technical site managers to report outages.
        </p>

        <div className="my-12 bg-slate-50 border-l-4 border-[#5D00D6] p-6 lg:p-8 rounded-r-2xl">
          <h4 className="flex items-center gap-2 text-[#5D00D6] font-extrabold text-[12px] uppercase tracking-widest mb-3">
             <Target size={14} className="text-[#5D00D6]" /> Core Principle
          </h4>
          <p className="text-slate-800 text-[17px] font-semibold leading-relaxed m-0">
            True enterprise governance means standardising hardware, consolidating vendors, and enforcing uniform policies across every physical location.
          </p>
        </div>

        <h2 id="consolidation" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Vendor Consolidation</h2>
        <p>
          Managing 15 different ISP contracts and 4 different managed service providers creates massive administrative overhead and critical support gaps. When an issue occurs, vendors point fingers at each other while your business remains offline. Consolidation eliminates the "blame game," creating a single point of accountability for all network, voice, and IT incidents.
        </p>

        <h2 id="sla" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">SLA Enforcement</h2>
        <p>
          Governance requires measurable outcomes. By bringing all sites under a unified managed service agreement, enterprises can enforce strict Service Level Agreements (SLAs) for uptime, latency, and incident response. If a site goes down, the SLA dictates exactly how fast the vendor must resolve it.
        </p>

        <h2 id="visibility" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Single Pane of Glass</h2>
        <p>
          A central governance model is impossible without total visibility. Technologies like SD-WAN provide a "single pane of glass"—a unified dashboard where the CIO can view the health, traffic, and security posture of the entire national network in real-time, allowing for data-driven decisions rather than guesswork.
        </p>
      </>
    )
  },
  'security-frameworks': {
    eyebrow: 'Cyber Resilience',
    title: 'Security Frameworks for Distributed Retail Footprints',
    summary: 'Retail networks are prime targets. Learn how to secure point-of-sale data across hundreds of unmanaged branch locations.',
    author: 'David Peterson',
    role: 'Head of Infrastructure @ C9',
    time: '5 Min Read',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'vulnerabilities', label: 'Edge Vulnerabilities' },
      { id: 'zero-trust', label: 'Zero Trust Architecture' },
      { id: 'segmentation', label: 'Network Segmentation' },
      { id: 'pci', label: 'PCI-DSS Compliance' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          Securing a single corporate headquarters is straightforward. Securing 150 retail stores—where staff turnover is high and physical security is low—requires a fundamentally different architectural approach.
        </p>

        <h2 id="vulnerabilities" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Edge Vulnerabilities</h2>
        <p>
          Retail environments inherently lack technical staff on-site. When edge devices (routers, switches, POS terminals) are left unpatched or are secured by basic, unmanaged hardware, they become the easiest entry point for threat actors aiming to breach the wider corporate network.
        </p>

        <h2 id="zero-trust" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Zero Trust Architecture</h2>
        <p>
          The traditional "castle and moat" security model is obsolete. In a distributed footprint, you must adopt a Zero Trust model: never trust, always verify. Every device, user, and application must be continuously authenticated and authorised before being granted access to network resources, regardless of whether they are sitting in the head office or a regional store.
        </p>

        <div className="grid grid-cols-2 gap-8 my-10">
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/20 p-6 rounded-2xl text-center">
            <div className="flex justify-center mb-3">
              <ShieldCheck size={32} className="text-[#5D00D6]" />
            </div>
            <div className="text-[14px] font-bold text-slate-900 mb-1">Identity Access</div>
            <div className="text-[12px] text-slate-500">MFA & Conditional Logic</div>
          </div>
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/20 p-6 rounded-2xl text-center">
            <div className="flex justify-center mb-3">
              <Target size={32} className="text-[#5D00D6]" />
            </div>
            <div className="text-[14px] font-bold text-slate-900 mb-1">Endpoint Protection</div>
            <div className="text-[12px] text-slate-500">Automated Isolation</div>
          </div>
        </div>

        <h2 id="segmentation" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Network Segmentation</h2>
        <p>
          A compromised digital signage display should never grant a hacker access to the Point of Sale system. Implementing strict network segmentation (via VLANs and SD-WAN policies) isolates different types of traffic. Guest WiFi, corporate devices, and POS systems must live in totally separated digital environments.
        </p>

        <h2 id="pci" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Simplifying PCI-DSS Compliance</h2>
        <p>
          Managing PCI compliance across hundreds of sites is a massive operational burden. By deploying centrally managed firewalls and unified threat management (UTM) at the edge, enterprises can automate compliance reporting and ensure that every site adheres to the same rigorous data protection standards.
        </p>
      </>
    )
  },
  'cloud-transformation': {
    eyebrow: 'Unified Communications',
    title: 'Cloud Transformation: Migrating Legacy Voice to Modern UC',
    summary: 'The ISDN switch-off is complete, yet many enterprises still rely on fragmented, on-premise PBX systems. It’s time to unify.',
    author: 'C9 Voice Solutions',
    role: 'CX Architects',
    time: '4 Min Read',
    img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'legacy', label: 'The Cost of Legacy' },
      { id: 'teams', label: 'Microsoft Teams Integration' },
      { id: 'contact-centre', label: 'Omnichannel Contact Centres' },
      { id: 'migration', label: 'Seamless Migration' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          Business communication is no longer about a plastic handset on a desk. It is about integrating voice, video, chat, and CRM data into a single, seamless workflow that follows your staff wherever they work.
        </p>

        <h2 id="legacy" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">The Cost of Legacy Hardware</h2>
        <p>
          On-premise PBX systems represent significant technical debt. They require costly maintenance contracts, manual patching, and physical site visits for simple changes. More importantly, they create data silos, separating voice traffic from the rest of your digital ecosystem.
        </p>

        <h2 id="teams" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Microsoft Teams Integration</h2>
        <p>
          For enterprises already invested in Microsoft 365, the logical step is integrating external voice directly into Teams (Direct Routing or Operator Connect). This allows staff to make and receive traditional phone calls directly from the Teams interface on their laptop or mobile, eliminating the need for separate PBX software or desk phones.
        </p>

        <div className="my-12 bg-emerald-50 border-emerald-200 border p-8 rounded-3xl">
           <div className="flex items-center gap-3 text-emerald-600 font-bold mb-4">
              <CheckCircle size={12} />
              <span>Unified Workflow</span>
           </div>
           <p className="text-emerald-900 text-[18px] font-medium leading-relaxed m-0">
              Teams integration consolidates your communication stack, reducing software licensing costs and massively simplifying IT management.
           </p>
        </div>

        <h2 id="contact-centre" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Omnichannel Contact Centres</h2>
        <p>
          Modern customer experience requires more than just answering calls. Cloud Contact Centre (CCaaS) platforms unify voice, email, web chat, and social media inquiries into a single agent interface. Coupled with AI-driven analytics, supervisors gain real-time insight into sentiment, call volumes, and resolution times.
        </p>

        <h2 id="migration" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Seamless Migration</h2>
        <p>
          Migrating enterprise voice is perceived as high-risk, but with the right architecture, it doesn't have to be. By leveraging SIP trunking to parallel-run the new cloud environment alongside the legacy PBX, businesses can test and deploy the new system before cutting over, ensuring zero disruption to inbound customer calls.
        </p>
      </>
    )
  }
};

export default function InsightArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = INSIGHTS[slug];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!article) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#5D00D6] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ARTICLE HEADER CONTEXT */}
      <section className="bg-[#0c1024] pt-32 pb-20 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6] opacity-[0.06] rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        
        <div className="container mx-auto max-w-[1000px] relative z-10">
          <FadeIn>
            <a href="/" className="inline-flex items-center text-slate-400 font-medium text-[13px] hover:text-white transition-colors mb-10 group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-[#5D00D6] text-[#A855F7] text-[11px] font-bold uppercase tracking-widest bg-[#5D00D6]/10">
                Industry Insights
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold uppercase tracking-widest">
                {article.eyebrow}
              </span>
              <span className="text-slate-400 text-[13px] font-medium ml-2">— {article.time}</span>
            </div>
            <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-bold text-white leading-[1.1] mb-8 max-w-[900px] tracking-tight whitespace-pre-line">
              {article.title}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              {article.summary}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-8 mt-12 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#5D00D6] flex items-center justify-center text-white border border-white/10 font-bold">
                C9
              </div>
              <div>
                <div className="text-white font-bold text-[15px]">{article.author}</div>
                <div className="text-slate-400 text-[13px] font-medium">{article.role}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-slate-400 text-[13px] font-bold uppercase tracking-widest mr-2">Share Insight</span>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center">
                <Linkedin size={16} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center">
                <Twitter size={16} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 md:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            
            {/* L SIDEBAR - TABLE OF CONTENTS (Sticky) */}
            <div className="hidden lg:block w-[240px] shrink-0">
              <div className="sticky top-32">
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#5D00D6] mb-6">In This Insight</h4>
                <ul className="space-y-4">
                  {article.sections.map((link: any, i: number) => (
                    <li key={i}>
                      <a 
                        href={`#${link.id}`} 
                        className={`text-[14px] font-medium transition-colors hover:text-[#5D00D6] ${i === 0 ? 'text-[#5D00D6] font-bold' : 'text-slate-500'}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {/* Visual Anchor Block */}
                <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-lg shadow-[#5D00D6]/5">
                  <div className="w-12 h-12 bg-[#5D00D6]/10 text-[#5D00D6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target size={20} />
                  </div>
                  <h5 className="font-bold text-slate-900 text-[15px] mb-2">Transform Your Business</h5>
                  <p className="text-slate-500 text-[13px] mb-5">Bring enterprise accountability to your technology stack.</p>
                  <a href="#consultation" className="block w-full py-2 bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-lg text-[13px] font-bold transition-colors">
                    Talk to an Expert
                  </a>
                </div>
              </div>
            </div>

            {/* MAIN CONTENT (Centered Reading Column) */}
            <div className="grow max-w-[700px] w-full bg-white rounded-[32px] p-8 md:p-14 lg:p-16 border border-slate-100 shadow-xl shadow-slate-200/50 lg:-mt-32 relative z-20">
              
              <div className="max-w-none text-slate-600 [&>p]:mb-6 [&>p]:text-[18px] [&>p]:leading-relaxed [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-3 [&>ul>li]:text-[18px] [&>ul>li]:leading-relaxed [&>a]:text-[#5D00D6] [&>a]:underline [&>figure>img]:rounded-[24px]">
                {article.content}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MORE INSIGHTS */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
               <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">More Industry Insights</h3>
               <p className="text-slate-500 text-[18px]">Stay ahead of infrastructure complexity.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(INSIGHTS).filter(k => k !== slug).map((key) => {
               const item = INSIGHTS[key];
               return (
                  <a href={`/insights/${key}`} key={key} className="group flex flex-col h-full bg-slate-50 rounded-[28px] overflow-hidden border border-slate-100 hover:border-[#5D00D6]/30 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all">
                     <div className="aspect-[16/10] overflow-hidden">
                        <img 
                           src={item.img} 
                           alt={item.title} 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                     </div>
                     <div className="p-8 pb-10 flex flex-col grow">
                        <span className="text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest mb-4">{item.eyebrow}</span>
                        <h4 className="text-[20px] font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#5D00D6] transition-colors">
                           {item.title}
                        </h4>
                        <p className="text-slate-500 text-[15px] mb-8 line-clamp-2">
                           {item.summary}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6">
                           <span className="text-slate-500 text-[13px] font-medium border-b border-transparent group-hover:border-[#5D00D6]">Read Insight</span>
                           <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                              <ChevronRight size={16} />
                           </div>
                        </div>
                     </div>
                  </a>
               )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="consultation">
        <WpConsultationForm
          showHeader={false}
          eyebrow="STRATEGY & EXECUTION"
          title="Ready to mature your infrastructure?"
          description="Speak with an Australian technology strategist to map out your own path to reliability and scale."
          formTitle="Book Strategy Call"
        />
      </section>
    </div>
  );
}
