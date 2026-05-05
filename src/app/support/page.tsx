'use client';

import React from 'react';
import { Phone, Mail, MessageSquare, Activity, Book, HelpCircle, ShieldCheck, Zap, Lock, Users, Globe, Server, CheckCircle2, AlertTriangle, FileText, Clock, BarChart3, Headphones, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';
import { WpWhyPartner } from '@/components/wordpress/WpWhyPartner';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';

const FadeIn = ({ children, delay = 0, className, direction = 'up' }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' 
}) => {
  const variants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function SupportPage() {
  const supportFaqs = [
    { 
      q: "What happens if a vendor (like an ISP) is at fault?", 
      a: "We own the coordination. We deal with the third-party vendor until the issue is resolved, providing you with updates so you don't have to manage them yourself. Our role is to ensure they meet their eSLA obligations to you." 
    },
    { 
      q: "How do you track and report on support performance?", 
      a: "Clients receive monthly operational reports detailing ticket volume, resolution times against SLA, and proactive improvements made to the environment. This ensures full transparency and accountability." 
    },
    { 
      q: "Can I escalate a ticket if I'm not satisfied with progress?", 
      a: "Yes. Our escalation path is clearly defined in your Service Agreement, providing direct access to our Service Delivery Manager and senior engineering leadership for critical P1 events." 
    },
    { 
      q: "Do you support remote and home-based employees?", 
      a: "Absolutely. We provide secure remote support and endpoint management for your entire distributed workforce, ensuring security standards and operational performance are maintained regardless of location." 
    },
    {
      q: "Is C9's support offshore or Australian-based?",
      a: "C9 support is 100% Australian-managed. Our engineering team is based onshore, providing direct access to local expertise without the delay of call-center script-reading or offshore time-zone misalignment."
    }
  ];

  return (
    <div className="pt-0 bg-white">
      
      {/* ── HERO ── */}
      <Section className="relative overflow-hidden" bg="none">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <div>
            <FadeIn>
              <Label>Operational Accountability</Label>
            </FadeIn>
            <FadeIn delay={0.1}>
              <H1 className="mb-6 !text-left">
                Direct Ownership.<br />
                <span className="text-[#5D00D6]">Zero Escalation Loops.</span>
              </H1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Body className="mb-10 text-lg md:text-xl text-left">
                Enterprise-grade support for complex environments. We own the outcome, eliminating vendor finger-pointing and ensuring absolute operational continuity for your entire infrastructure.
              </Body>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <C9Button className="px-10 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full">
                  Request Service Overview
                </C9Button>
                <C9Button variant="outline" className="px-10 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white">
                  Contact Support
                </C9Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="right" className="relative">
            <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-purple-900/10 border border-slate-100">
              <img 
                src="/images/support/c9-support-hero.png" 
                alt="C9 Support Network Visualization" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -z-10" />
          </FadeIn>
        </div>
      </Section>

      {/* ── SUPPORT PATHWAYS ── */}
      <Section bg="white" className="pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn>
            <div className="bg-[#F4F0FA]/30 border border-gray-100 rounded-[32px] p-10 h-full flex flex-col hover:border-[#5D00D6]/20 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#5D00D6] mb-8 shadow-sm group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <H3 className="mb-4 text-2xl tracking-tight">Urgent Faults (P1)</H3>
              <Body className="mb-10 text-[16px]">
                Immediate 24/7 access to Level 3 engineers for critical network, voice, or security outages. No gatekeepers.
              </Body>
              <a href="tel:1800000299" className="mt-auto flex items-center gap-2 text-xl font-black text-[#5D00D6] hover:underline">
                1800 000 299 
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-[#F4F0FA]/30 border border-gray-100 rounded-[32px] p-10 h-full flex flex-col hover:border-[#5D00D6]/20 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#5D00D6] mb-8 shadow-sm group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                <FileText size={28} />
              </div>
              <H3 className="mb-4 text-2xl tracking-tight">Service Desk Portal</H3>
              <Body className="mb-10 text-[16px]">
                Log tickets, track real-time resolution progress, and access detailed incident reporting for compliance.
              </Body>
              <C9Button className="mt-auto rounded-full w-full">
                Log a Support Ticket
              </C9Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-[#0c1024] border border-gray-800 rounded-[32px] p-10 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-[#5D00D6] opacity-10">
                <Activity size={100} strokeWidth={1} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-[#5D00D6] mb-8">
                <Activity size={28} />
              </div>
              <H3 className="mb-4 text-2xl tracking-tight text-white">Network Status</H3>
              <Body className="mb-10 text-[16px] text-gray-400">
                Real-time visibility into core fibre, nbn™, and C9 Voice infrastructure performance across Australia.
              </Body>
              <div className="mt-auto inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                <span className="text-emerald-500 font-black text-[10px] uppercase tracking-widest">Systems Operational</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── SUPPORT COVERAGE ── */}
      <Section bg="gray" className="py-24">
        <div className="text-center mb-16">
          <Label className="mb-4 block">Unified Ownership</Label>
          <H2>What We Handle</H2>
          <Body className="max-w-2xl mx-auto mt-4">
            C9 eliminates the "MSP gap" by owning the entire technology stack. We don't refer you to third parties; we manage them.
          </Body>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "End-User Support", desc: "Full helpdesk coverage for your team, including desktop, hardware, and peripheral troubleshooting." },
            { icon: Globe, title: "Network & SD-WAN", desc: "End-to-end management of core connectivity, routing, and multi-site network performance." },
            { icon: Server, title: "Managed Infrastructure", desc: "24/7 monitoring and maintenance of on-premise and cloud server environments." },
            { icon: MessageSquare, title: "Microsoft 365 & SaaS", desc: "Identity management, licensing optimization, and application-level support for cloud suites." },
            { icon: ShieldCheck, title: "Security Incidents", desc: "Rapid response to security events, including EDR alerts, phishing attempts, and data threats." },
            { icon: Zap, title: "Vendor Coordination", desc: "We act as your single point of contact for ISPs, hardware vendors, and software providers." }
          ].map((res, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-[24px] bg-white border border-gray-100 hover:border-[#5D00D6]/20 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6] mb-6 group-hover:scale-110">
                  <res.icon size={20} />
                </div>
                <h4 className="text-[18px] font-bold text-[#0c1024] mb-2">{res.title}</h4>
                <Body className="text-sm">{res.desc}</Body>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── SLA & RESPONSE TIMES ── */}
      <Section bg="white" className="py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Label className="mb-4 block">SLA Commitment</Label>
          <H2>Response Expectations</H2>
          <Body className="mt-4">
            Our support is governed by strict, contractually-backed response times. We measure success by time-to-resolution, not just time-to-first-response.
          </Body>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              priority: "Priority 1 (Critical)", 
              time: "15 Minute Response", 
              desc: "Total site outage or critical security breach. Immediate Level 3 engineering assignment.",
              color: "border-red-100 bg-red-50/10"
            },
            { 
              priority: "Priority 2 (High)", 
              time: "2 Hour Response", 
              desc: "Significant performance degradation or individual department downtime. Business-hours resolution path.",
              color: "border-amber-100 bg-amber-50/10"
            },
            { 
              priority: "Priority 3 (Normal)", 
              time: "Next Business Day", 
              desc: "Non-critical issues, feature requests, or minor configuration changes and user adds/moves.",
              color: "border-blue-100 bg-blue-50/10"
            }
          ].map((sla, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`p-10 rounded-[32px] border ${sla.color} h-full`}>
                <H3 className="text-xl font-bold mb-2">{sla.priority}</H3>
                <div className="text-3xl font-black text-[#5D00D6] mb-6 tracking-tight">{sla.time}</div>
                <Body className="text-[15px]">{sla.desc}</Body>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── OPERATIONAL CERTAINTY ── */}
      <WpWhyPartner />

      {/* ── HOW SUPPORT WORKS ── */}
      <Section bg="dark" className="py-24 text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Label className="text-[#A855F7] mb-4 block">Operational Discipline</Label>
            <H2 className="text-white mb-8">The C9 Incident Management Protocol</H2>
            <Body className="text-gray-400 mb-12">
              We apply a disciplined engineering approach to every support request. No issue is resolved without root-cause analysis for P1 events.
            </Body>
            
            <div className="space-y-8">
              {[
                { step: "01", title: "Immediate Logging", desc: "Every request is timestamped and assigned a unique ticket ID instantly." },
                { step: "02", title: "Technical Triage", desc: "Engineers, not dispatchers, assess the impact and verify priority levels." },
                { step: "03", title: "Active Resolution", desc: "Engineers work to fix or provide a workaround within SLA parameters." },
                { step: "04", title: "Verification & Reporting", desc: "The user confirms resolution, and the case is documented for service reviews." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-[#A855F7] font-black text-xl font-mono">{item.step}</span>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 rounded-[48px] p-12 border border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#5D00D6]/20 flex items-center justify-center text-[#A855F7]">
                <ShieldAlert size={24} />
              </div>
              <H3 className="text-white text-xl">Security Incident Response</H3>
            </div>
            <Body className="text-gray-400 mb-8">
              Our Security Incident Response (SIR) team operates under a separate, high-velocity protocol for all security events.
            </Body>
            <ul className="space-y-4">
              {[
                "Immediate containment procedures",
                "Threat analysis & forensic logging",
                "Direct escalation to Onshore SOC",
                "Post-incident governance reporting"
              ].map((li, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-[#A855F7]" /> {li}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <WpFAQAndFeedback 
        showTestimonials={false}
        faqItems={supportFaqs}
      />

      {/* ── FOOTER CTA ── */}
      <Section className="pb-32 bg-white">
         <FadeIn>
            <div className="bg-[#F4F0FA] border border-[#5D00D6]/10 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 text-[#5D00D6] opacity-5 group-hover:opacity-10 transition-opacity">
                 <Zap size={350} strokeWidth={0.5} />
               </div>
               <div className="relative z-10">
                 <H2 className="mb-6 text-4xl leading-tight">Ready for Operational Certainty?</H2>
                 <Body className="max-w-xl mx-auto mb-12 text-lg">
                   Experience the difference of a support team that takes ownership. Contact us today to review our Managed Service agreements.
                 </Body>
                 <div className="flex flex-wrap gap-4 justify-center">
                    <C9Button className="px-10 py-4 h-auto rounded-full text-lg shadow-2xl">Contact Us</C9Button>
                    <C9Button variant="outline" className="px-10 py-4 h-auto rounded-full text-lg bg-white border-gray-200">Request Service Overview</C9Button>
                 </div>
               </div>
            </div>
         </FadeIn>
      </Section>
    </div>
  );
}
