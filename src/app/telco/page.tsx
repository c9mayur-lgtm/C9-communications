'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle, 
  Activity, 
  Server, 
  RefreshCw, 
  Target, 
  Zap, 
  ShieldAlert, 
  Clock, 
  GitBranch, 
  Layers,
  ArrowRight,
  Shield,
  Monitor,
  Check,
  Search,
  Settings,
  Users,
  HardDrive,
  BarChart,
  ClipboardCheck,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

// Custom Components
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpCapabilityNavigator } from '@/components/wordpress/WpCapabilityNavigator';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { C9Button } from '@/components/design-system/C9Button';
import { Section } from '@/components/design-system/Section';
import { LeadCaptureModal } from '@/components/modals/LeadCaptureModal';
import { handleCtaClick } from '@/lib/utils';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";

const C = "container mx-auto px-6 md:px-8 max-w-[1240px]";

const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}) => {
  const y = direction === 'up' ? 28 : 0;
  const x = direction === 'left' ? -28 : direction === 'right' ? 28 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */
const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-32">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />

    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-8">
              <ShieldCheck size={14} className="text-[#5D00D6]" aria-hidden="true" />
              <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Enterprise Connectivity & Carrier Governance</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-8">
              Managed Connectivity Operations for Businesses That <br />
              <span className="text-[#5D00D6]">Cannot Afford Downtime.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-10 max-w-[580px] text-slate-800 text-lg leading-relaxed">
              Most providers only provision services. C9 actively manages carrier coordination, failover, escalation, and voice continuity. We are the operational control layer for your business internet and voice.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <C9Button 
                size="lg" 
                className="rounded-full shadow-xl shadow-purple-900/20 h-14 px-8"
                onClick={handleCtaClick}
              >
                Review My Connectivity Risks
              </C9Button>
              <C9Button 
                variant="outline"
                size="lg" 
                className="rounded-full border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all h-14 px-8"
                onClick={onOpenModal}
              >
                Download Connectivity Report
              </C9Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 border-t border-slate-100 pt-8 mt-4">
              {[
                { label: 'Carrier Coordination', icon: <RefreshCw size={14} className="text-[#5D00D6]" /> },
                { label: 'Failover Governance', icon: <Zap size={14} className="text-[#5D00D6]" /> },
                { label: 'SLA Escalation', icon: <TrendingUp size={14} className="text-[#5D00D6]" /> },
                { label: 'Multi-Site Continuity', icon: <Layers size={14} className="text-[#5D00D6]" /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="text-[#5D00D6]">{item.icon}</div>
                  <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} direction="right" className="relative mt-16 lg:mt-0 w-full">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] sm:aspect-[4/3] border-4 md:border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop" 
              alt="Australian operations team managing business connectivity and voice environments across multiple sites"
              className="w-full h-full object-cover grayscale-[0.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 to-transparent" />
          </div>
          
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-5 md:p-6 rounded-2xl shadow-2xl border border-slate-100 z-20 max-w-[240px] md:max-w-[280px]">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                   <Activity size={20} />
                </div>
                <div className="text-[11px] font-black text-slate-800 uppercase tracking-widest leading-tight">NOC Active Monitoring</div>
             </div>
             <p className="text-[12px] text-slate-600 font-medium">Continuous link governance and proactive carrier escalation active across all managed sites.</p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — COMMERCIAL TENSION
   ───────────────────────────────────────────────────────── */
const SectionTension = () => (
  <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="max-w-3xl mb-20 text-center mx-auto">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Why Businesses Replace Their Existing Providers</span>
          <h2 className="c9-section-heading px-4 md:px-0">Operational Vulnerability & <br className="hidden md:block" /> <span className="text-red-600">Provider Blame-Shifting.</span></h2>
          <p className="c9-body mt-6 text-lg text-slate-800">
            Standard carriers provision lines and then step back. When outages hit, you are left in the middle of a vendor dispute while your revenue stops. C9 replaces generic telcos with absolute operational accountability.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { title: "Internet outages impacting operations", icon: <Wifi className="text-red-600" size={24} /> },
          { title: "Teams and voice instability", icon: <PhoneCall className="text-red-600" size={24} /> },
          { title: "Provider blame shifting", icon: <GitBranch className="text-red-600" size={24} /> },
          { title: "Slow escalations", icon: <Clock className="text-red-600" size={24} /> },
          { title: "Failed site rollouts", icon: <ShieldAlert className="text-red-600" size={24} /> },
          { title: "Multi-site inconsistency", icon: <Layers className="text-red-600" size={24} /> },
          { title: "No failover ownership", icon: <RefreshCw className="text-red-600" size={24} /> },
          { title: "Disconnected support vendors", icon: <Shield className="text-red-600" size={24} /> }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 h-full shadow-sm hover:border-red-600/30 transition-all group flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-[15px] font-bold text-slate-900 leading-tight pt-1">{item.title}</h3>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — CAPABILITY NAVIGATOR
   ───────────────────────────────────────────────────────── */
const SectionCapabilities = () => {
  const telcoCards = [
    {
      title: 'Business Connectivity',
      descriptor: 'Problem: Carrier finger-pointing during outages. Outcome: Managed internet environments with proactive monitoring, failover governance, and carrier escalation ownership.',
      image: '/Managed IT_SMB.png',
      imageAlt: 'Business connectivity operations',
      link: '/telco/business-nbn',
      tag: 'Internet Governance',
    },
    {
      title: 'Teams Calling',
      descriptor: 'Problem: Fragmented voice quality and dropouts. Outcome: Business voice continuity across office, remote, and multi-site environments with managed SIP delivery.',
      image: '/Teams Calling_Telco.png',
      imageAlt: 'Business voice continuity',
      link: '/telco/teams-calling',
      tag: 'Voice Continuity',
    },
    {
      title: 'Fast Fibre',
      descriptor: 'Problem: Unstable or contended bandwidth causing cloud bottlenecks. Outcome: Symmetrical, uncontended business-grade fibre up to 1000Mbps with managed performance governance.',
      image: '/Fast Fibre_Telco.png',
      imageAlt: 'Fast Fibre internet connection',
      link: '/telco/fast-fibre',
      tag: 'Connectivity',
    },
    {
      title: 'AI Voice',
      descriptor: 'Problem: High operational overhead in customer triage and basic inquiries. Outcome: AI-driven voice agents that automate initial handling, improve routing, and scale operations without headcount.',
      image: '/AI Voice_Telco.png',
      imageAlt: 'AI Voice automation',
      link: '/telco/ai-voice',
      tag: 'AI Automation',
    },
    {
      title: 'Enterprise Ethernet',
      descriptor: 'Problem: Insufficient bandwidth guarantees and weak SLAs for high-execution sites. Outcome: Dedicated fibre circuits with enterprise-grade SLAs and 1:1 contention for critical workloads.',
      image: '/Enterprise Ethernet_Telco.png',
      imageAlt: 'Enterprise Ethernet infrastructure',
      link: '/telco/enterprise-ethernet',
      tag: 'Infrastructure',
    },
    {
      title: 'Contact Centre Operations',
      descriptor: 'Problem: Zero visibility into queue performance and customer wait times. Outcome: Managed customer communication visibility, queue performance, and active support operations.',
      image: '/Contact center_Telco.png',
      imageAlt: 'Operations manager reviewing contact centre performance',
      link: '/telco/contact-centre',
      tag: 'Operational Intelligence',
    },
    {
      title: 'Cybersecurity Integration',
      descriptor: 'Problem: Security gaps in connectivity layers. Outcome: Connectivity and security governed together to reduce operational risk and closing deployment gaps.',
      image: '/Cyber Security_Telco.png',
      imageAlt: 'Cybersecurity integration',
      link: '/telco/security',
      tag: 'Security Governance',
    },
  ];

  return (
    <WpCapabilityNavigator 
      eyebrow="Managed Operational Capabilities"
      headline="Connectivity, Voice, and Carrier Accountability — Unified."
      subtext="We don't just provision services; we orchestrate the entire connectivity ecosystem. Each capability is designed to solve a specific operational risk and deliver a measurable business outcome."
      cards={telcoCards}
      ctaLabel="Review My Connectivity Risks"
      ctaHref="#consultation-section"
    />
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 4 — QUALIFICATION
   ───────────────────────────────────────────────────────── */
const SectionQualification = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className={C}>
      <div className="max-w-3xl mb-12 md:mb-20">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Environment Qualification</span>
          <h2 className="c9-section-heading">Which Environment Are You Managing?</h2>
          <p className="c9-body mt-6 text-lg">
            Our managed telco framework adapts to your specific operational context, whether you are building new or modernising the existing.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
        {[
          { title: "Opening a New Site", desc: "Greenfield rollout governance from planning to opening day." },
          { title: "Replacing Existing Providers", desc: "Structured migration of internet and voice with zero downtime." },
          { title: "Managing Multi-Site Operations", desc: "Standardising connectivity and support across all locations." },
          { title: "Improving Teams & Voice Reliability", desc: "Solving voice quality issues and instability in Teams." },
          { title: "Modernising Legacy Connectivity", desc: "Transitioning from slow copper/old fibre to enterprise fibre." },
          { title: "Scaling Enterprise Operations", desc: "Managed governance for high-growth, high-execution firms." }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-slate-50 p-7 md:p-10 rounded-[24px] md:rounded-3xl border border-slate-100 hover:border-[#5D00D6]/20 transition-all h-full group flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#5D00D6] transition-colors">{item.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed flex-grow">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} className="flex justify-center">
         <C9Button 
            size="lg" 
            className="rounded-full shadow-xl shadow-purple-900/20 h-15 px-10 text-lg"
            onClick={handleCtaClick}
         >
            Review My Connectivity Environment
         </C9Button>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — HOW WE OPERATE
   ───────────────────────────────────────────────────────── */
const SectionHowItWorks = () => (
  <section className="py-16 md:py-24 bg-[#0c1024] text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6]/5 blur-[120px] rounded-full" />
    <div className={C}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-32 mb-12 lg:mb-0">
          <FadeIn>
            <span className="c9-eyebrow !text-[#a56eff] mb-4">Operational Process</span>
            <h2 className="c9-section-heading !text-white mb-8">How C9 Operates. <br /> <span className="text-white/40">Absolute Accountability.</span></h2>
            <p className="text-white/70 mb-12 text-lg">
              Most providers stop at provisioning. C9 stays operationally accountable through a continuous governance framework.
            </p>
            <C9Button 
              size="lg" 
              className="rounded-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white"
              onClick={handleCtaClick}
            >
              Plan My Connectivity Rollout
            </C9Button>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
          {[
            { 
              step: "01", 
              title: "Discovery & Risk Review", 
              desc: "We audit your current connectivity to identify single points of failure, single carrier traps, and bandwidth bottlenecks." 
            },
            { 
              step: "02", 
              title: "Carrier & Environment Assessment", 
              desc: "Strategic assessment of available carrier infrastructure at every site to ensure maximum resilience and cost-efficiency." 
            },
            { 
              step: "03", 
              title: "Architecture & Failover Planning", 
              desc: "Designing the redundant logic that protects your revenue. We plan for the failure so you never experience the outage." 
            },
            { 
              step: "04", 
              title: "Rollout & Migration Governance", 
              desc: "Active management of the transition. We coordinate carriers and on-site hardware to ensure zero opening-day failures." 
            },
            { 
              step: "05", 
              title: "Monitoring & Escalation Ownership", 
              desc: "Our NOC actively monitors link health. If a line degrades, we own the escalation to the carrier through to resolution." 
            },
            { 
              step: "06", 
              title: "Quarterly Operational Reviews", 
              desc: "Continuous refinement of your connectivity strategy based on usage data, new infrastructure availability, and business growth." 
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="relative">
                  <div className="text-4xl font-black text-white/10 absolute -top-4 -left-6 select-none" aria-hidden="true">{item.step}</div>
                  <h4 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed relative z-10">{item.desc}</p>
               </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — RESPONSIBILITY MATRIX
   ───────────────────────────────────────────────────────── */
const SectionGovernance = () => (
  <section className="py-16 md:py-24 bg-white overflow-hidden">
    <div className={C}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
           <span className="c9-eyebrow mb-4">Operational Governance</span>
           <h2 className="c9-section-heading mb-8">Most Providers Provision. <br /> <span className="text-[#5D00D6]">We Operate.</span></h2>
           <p className="c9-body text-slate-800 mb-10 text-lg leading-relaxed">
             Stop accepting vendor blame-shifting. C9 sits between you and the carriers as a single point of accountability for link health, voice quality, and failover triggers.
           </p>
           <div className="space-y-6">
              {[
                { title: 'Carrier Coordination & Escalation', val: 'C9 Managed' },
                { title: 'Failover Orchestration & Testing', val: 'C9 Managed' },
                { title: 'Voice Quality & SIP Governance', val: 'C9 Managed' },
                { title: 'Multi-Site Configuration Drift', val: 'C9 Managed' },
                { title: 'Hardware Health & Maintenance', val: 'C9 Managed' }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
                   <span className="text-[15px] font-bold text-slate-900">{row.title}</span>
                   <div className="flex items-center gap-2 text-[#5D00D6]">
                      <CheckCircle size={14} />
                      <span className="text-[11px] font-black uppercase tracking-widest">{row.val}</span>
                   </div>
                </div>
              ))}
           </div>
        </FadeIn>

        <FadeIn direction="right" className="relative">
           <div className="bg-slate-50 rounded-[32px] p-7 md:p-10 lg:p-12 border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-slate-900">Uptime SLA Targets</h3>
              <div className="space-y-8">
                 {[
                   { p: 'P1 - Critical Outage', r: '< 15 mins', s: '< 4 hours', color: 'bg-red-500' },
                   { p: 'P2 - Major Degradation', r: '< 30 mins', s: '< 8 hours', color: 'bg-orange-500' },
                   { p: 'P3 - Standard Service', r: '< 2 hours', s: '< 24 hours', color: 'bg-blue-500' }
                 ].map((row, i) => (
                   <div key={i} className="relative">
                      <div className="flex justify-between items-center mb-3">
                         <span className="font-bold text-slate-900 text-sm">{row.p}</span>
                         <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Target: {row.s}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                         <div className={`h-full ${row.color} opacity-80`} style={{ width: i === 0 ? '95%' : i === 1 ? '85%' : '75%' }} />
                      </div>
                      <div className="flex justify-between mt-2 text-[10px] font-medium text-slate-500">
                         <span>Response: {row.r}</span>
                         <span>NOC Escalation: Instant</span>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="mt-12 pt-8 border-t border-slate-200">
                 <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Historical Uptime</div>
                    <div className="text-3xl font-black text-[#5D00D6]">99.99%</div>
                 </div>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — PROOF
   ───────────────────────────────────────────────────────── */
const SectionProof = () => (
  <section className="py-16 md:py-24 bg-slate-50">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
             <span className="c9-eyebrow mb-4">IMPACT REALIZED</span>
             <h2 className="c9-section-heading">Migration Success & <br /> <span className="text-[#5D00D6]">Rollout Stability.</span></h2>
             <p className="c9-body mt-6 text-lg">We measure success by outages prevented, migration windows hit, and carrier escalations resolved. Zero-fluff operational outcomes.</p>
          </FadeIn>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {[
             { label: 'Migration Outcomes', val: '100%', sub: 'Zero-Downtime Transitions' },
             { label: 'Carrier Response', val: '-40%', sub: 'Reduction in Resolution Time' },
             { label: 'Multi-Site Governance', val: '500+', sub: 'Managed Sites Across ANZ' }
          ].map((stat, i) => (
             <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 text-center shadow-sm">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">{stat.label}</div>
                <div className="text-5xl font-semibold text-[#5D00D6] mb-2">{stat.val}</div>
                <div className="text-sm font-semibold text-slate-900">{stat.sub}</div>
             </FadeIn>
          ))}
       </div>

       <WpCaseStudies />
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const SectionFinalCTA = () => (
  <section className="py-12 md:py-24 bg-white px-4 md:px-0">
    <div className={C}>
       <div className="bg-[#0c1024] rounded-[32px] md:rounded-[40px] p-8 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6]/10 blur-[120px] rounded-full -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#a56eff]/5 blur-[100px] rounded-full -ml-48 -mb-48" />
          
          <FadeIn className="relative z-10">
             <h2 className="c9-section-heading !text-white !text-3xl md:!text-4xl lg:!text-5xl mb-10 leading-[1.1] max-w-4xl mx-auto">Bring Connectivity, Voice, Failover, and <br className="hidden md:block" /> Carrier Accountability Under One Managed Partner.</h2>
             <p className="c9-body !text-white/80 mb-12 md:mb-14 max-w-3xl mx-auto text-[16px] md:text-xl leading-relaxed px-4 md:px-0">
                C9 helps Australian businesses operate through managed connectivity environments with operational governance, proactive support, escalation ownership, and multi-site consistency. Stop accepting provider finger-pointing.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <C9Button 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full shadow-2xl shadow-purple-900/40 h-14 md:h-15 px-8 md:px-10 text-[14px] md:text-lg"
                  onClick={handleCtaClick}
                >
                  Book a Connectivity Operations Review
                </C9Button>
                <C9Button 
                  variant="outline"
                  size="lg" 
                  className="rounded-full border-2 border-white/20 text-white hover:bg-white hover:text-[#0c1024] h-14 md:h-15 px-10 text-[15px] md:text-lg transition-all"
                  onClick={handleCtaClick}
                >
                  Speak With a Connectivity Specialist
                </C9Button>
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

export default function TelcoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-white">
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      
      <div className="py-12 border-y border-slate-50">
        <WpClientTicker />
      </div>

      <SectionTension />
      <SectionCapabilities />
      
      <section className="relative py-16 md:py-28 bg-white overflow-hidden border-y border-slate-50">
         <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
               backgroundImage: 'radial-gradient(#5D00D6 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
            }} 
         />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5D00D6]/5 blur-[120px] rounded-full pointer-events-none" />
         
         <div className={`${C} relative z-10 text-center`}>
            <FadeIn>
               <span className="c9-eyebrow mb-6 inline-block">Accountability Shift</span>
               <h3 className="c9-section-heading !text-3xl md:!text-5xl mb-10 max-w-4xl mx-auto leading-tight">
                  Most Providers Stop at Provisioning. <br /> 
                  <span className="text-[#5D00D6]">C9 Stays Operationally Accountable.</span>
               </h3>
               <p className="c9-body mb-12 max-w-2xl mx-auto text-slate-700">
                  Stop accepting carrier finger-pointing as a cost of doing business. Partner with an operational leader who owns the outcome from rollout to resolution.
               </p>
               <C9Button 
                  size="lg" 
                  className="rounded-full shadow-xl shadow-purple-900/20 h-15 px-10 text-lg" 
                  onClick={handleCtaClick}
               >
                  Review My Current Environment
               </C9Button>
            </FadeIn>
         </div>
      </section>

      <SectionHowItWorks />
      <SectionQualification />
      <SectionGovernance />
      <SectionProof />
      
      <WpFAQAndFeedback />

      <section id="consultation-section" className="bg-slate-50">
        <WpConsultationForm 
          eyebrow="READY TO GOVERN YOUR CONNECTIVITY?"
          title="Connectivity Operations Review"
          description="We'll audit your current internet and voice setup, identify single points of failure, and show you exactly how to build a resilient, always-on communications ecosystem."
          formTitle="Request Connectivity Audit"
        />
      </section>

      <SectionFinalCTA />

      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </main>
  );
}
