'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, HelpCircle, Clock, Search, Handshake, Target, Monitor, Lock, Cloud, PhoneCall, Users, MessageSquare, AlertCircle, Server, Activity, Database, Shield, Globe, Cpu, FileCheck, ShieldAlert, BarChart3, RefreshCw, Network, Laptop, Layers, Share2, ClipboardCheck, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { C9Button } from '@/components/design-system/C9Button';
import { WpVendors } from '@/components/wordpress/WpVendors';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import CapabilityPack from '@/components/sections/enterprise/CapabilityPack';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import { ENTERPRISE_CAPABILITIES_DATA } from '@/data/enterprise-capabilities';

/* 
   ANIMATION HELPERS
*/
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

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* 
   1. HERO SECTION
*/
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-4 pb-0 lg:pt-8">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />

    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-14 lg:pb-20">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <ShieldCheck size={13} className="text-[#5D00D6]" aria-hidden="true" />
              <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Enterprise MSP Partner</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Enterprise Infrastructure & Managed Services Built for <br/>
              <span className="text-[#5D00D6]">Operational Continuity.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[580px] text-slate-800">
              C9 helps enterprise organizations manage, secure, monitor, and scale distributed IT and communications environments through proactive managed services and centralized operational support.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <C9Button
                  size="lg"
                  className="rounded-full shadow-lg shadow-purple-900/20"
                  onClick={() => {
                    document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Schedule Assessment
                </C9Button>
                <C9Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all"
                  onClick={() => {
                    document.getElementById('msp-positioning')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Capabilities
                </C9Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-wrap gap-x-6 gap-y-3">
                {[
                  { label: 'SLA-backed Support', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> },
                  { label: '24/7 Monitoring', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> },
                  { label: 'Multi-Site Management', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} direction="right" className="relative hidden lg:block">
          <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl max-w-[90%] ml-auto aspect-[4/3] border border-slate-100">
            <Image
              src="/images/hero/enterprise-new.png"
              alt="Enterprise Control Center"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/60 to-transparent" />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* 
   2. ENTERPRISE OPERATIONAL CHALLENGES SECTION
*/
const SectionChallenges = () => (
  <section className="py-10 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="max-w-3xl mb-10">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Operational Risk & Visibility Gaps</span>
          <h2 className="c9-section-heading">
            Enterprise Operational Challenges
          </h2>
          <p className="c9-body text-slate-800 mt-6 text-lg">
            In multi-site, compliance-driven environments, escalating operational overhead and fragmented support structures create significant risk. Distributed operations demand a unified framework.
          </p>
        </FadeIn>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Globe size={24} aria-hidden="true" />, title: 'Distributed Environments', desc: 'Managing multi-site coordination issues and infrastructure complexity across locations without unified control.' },
          { icon: <Monitor size={24} aria-hidden="true" />, title: 'Fragmented Visibility', desc: 'Limited operational visibility into hybrid cloud and legacy systems, leading to reactive troubleshooting.' },
          { icon: <ClipboardCheck size={24} aria-hidden="true" />, title: 'Compliance Pressure', desc: 'Struggling to maintain compliance readiness and governance alignment across disconnected support structures.' },
          { icon: <Users size={24} aria-hidden="true" />, title: 'Support Inconsistency', desc: 'Escalating operational overhead caused by fragmented support structures and inconsistent response times.' },
          { icon: <ShieldAlert size={24} aria-hidden="true" />, title: 'Security Risks', desc: 'Unmanaged operational risk and security vulnerabilities stemming from reactive vendor relationships.' },
          { icon: <RefreshCw size={24} aria-hidden="true" />, title: 'Infrastructure Complexity', desc: 'Balancing the demands of modernizing ecosystems while maintaining uptime for critical legacy systems.' }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="group bg-white p-8 rounded-3xl border border-slate-100 h-full hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2">
               <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(93,0,214,0.4)] group-hover:bg-[#5D00D6] group-hover:text-white bg-[#5D00D6]/5 text-[#5D00D6] mb-6">
                  {item.icon}
               </div>
               <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
               <p className="text-sm text-slate-800 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* 
   3. ENTERPRISE CAPABILITIES (REUSING SMALL BUSINESS STRUCTURE)
*/
const SectionCapabilities = () => (
  <ProblemSolutionSection 
    data={ENTERPRISE_CAPABILITIES_DATA}
    eyebrow="ENTERPRISE INFRASTRUCTURE MANAGEMENT"
    title={<>Strategic Infrastructure for <span className="text-[#5D00D6]">Enterprise Scale.</span></>}
    description="Unified, managed infrastructure with SLA-backed guarantees, compliance controls, and 24/7 accountability. Built for enterprises that cannot tolerate downtime."
  />
);

/* 
   3. ENTERPRISE MSP POSITIONING SECTION
*/
const SectionMSPPositioning = () => (
  <section id="msp-positioning" className="py-12 bg-white overflow-hidden">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn direction="left">
           <span className="c9-eyebrow mb-4">Enterprise Operational Partner</span>
           <h2 className="c9-section-heading mb-6">Centralised Management. Proactive Operations.</h2>
           <p className="c9-body text-slate-800 mb-10 leading-relaxed">
             We operationally own and manage complex enterprise environments. Our unified support structure reduces vendor overhead while providing absolute operational oversight and governance alignment.
           </p>
           <div className="space-y-8">
              {[
                { 
                  title: 'Integrated Infrastructure Management', 
                  icon: <Layers aria-hidden="true" />, 
                  desc: 'We provide ongoing managed support across your entire multi-site ecosystem, eliminating the burden of managing multiple vendors.' 
                },
                { 
                  title: 'Proactive Operations & Monitoring', 
                  icon: <Monitor aria-hidden="true" />, 
                  desc: '24/7 centralized monitoring ensures potential issues are addressed before they impact your operational continuity.' 
                },
                { 
                  title: 'Enterprise Accountability', 
                  icon: <Target aria-hidden="true" />, 
                  desc: 'We take ownership of service accountability and escalation management, delivering a single point of truth for enterprise operations.' 
                },
                {
                  title: 'Governance-Driven Support',
                  icon: <CheckCircle aria-hidden="true" />,
                  desc: 'Our support model is rooted in compliance readiness, ensuring your infrastructure meets strict enterprise governance standards.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                   <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] shrink-0">
                      {item.icon}
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-800 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </FadeIn>

        <FadeIn direction="right" className="relative">
           <div className="bg-slate-900 rounded-[32px] p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/10 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold mb-8 text-white">Centralised MSP Operations</h3>
              <div className="space-y-6">
                 {[
                   { label: 'Infrastructure Oversight', val: 'Fully Managed' },
                   { label: 'Service Accountability', val: 'C9 Ownership' },
                   { label: 'Escalation Management', val: 'SLA-Enforced' },
                   { label: 'Governance Alignment', val: 'Continuous' },
                   { label: 'Vendor Overhead', val: 'Reduced' }
                 ].map((row, i) => (
                   <div key={i} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-0">
                      <span className="text-sm font-semibold text-white/95">{row.label}</span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${row.val.includes('Reduced') ? 'bg-white/10 text-white' : 'bg-[#5D00D6] text-white'}`}>{row.val}</span>
                   </div>
                 ))}
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* 
   4. OPERATIONAL GOVERNANCE & SUPPORT FRAMEWORK
*/
const SectionGovernance = () => (
  <section className="py-12 bg-slate-50 relative overflow-hidden">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-10">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Operational Governance & Support Framework</span>
             <h2 className="c9-section-heading">Structured Operations at Enterprise Scale</h2>
             <p className="c9-body text-slate-800 mt-6">
               Our mature, process-driven framework provides centralized support operations, robust operational governance, and complete lifecycle management.
             </p>
          </FadeIn>
       </div>

       <div className="grid md:grid-cols-4 gap-6">
          {[
            { 
              title: 'Service Desk Structure', 
              icon: <MessageSquare aria-hidden="true" />, 
              desc: 'An enterprise-grade service desk built with a clear escalation hierarchy to handle complex, multi-layered IT incidents promptly.' 
            },
            { 
              title: 'Proactive Monitoring', 
              icon: <Activity aria-hidden="true" />, 
              desc: 'Continuous infrastructure oversight that monitors system health, predicts failures, and drives rapid response management.' 
            },
            { 
              title: 'Reporting & Visibility', 
              icon: <BarChart3 aria-hidden="true" />, 
              desc: 'Transparent operational reporting that provides IT leadership with immediate insight into SLA adherence and system performance.' 
            },
            {
              title: 'Maintenance Workflows',
              icon: <RefreshCw aria-hidden="true" />,
              desc: 'Strict maintenance workflows and lifecycle management processes ensuring infrastructure resilience without unexpected downtime.'
            }
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="group bg-white p-8 rounded-3xl border border-slate-100 h-full hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(93,0,214,0.4)] group-hover:bg-[#5D00D6] group-hover:text-white bg-[#5D00D6]/5 text-[#5D00D6] mb-8">
                     {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-slate-800 text-sm leading-relaxed">{card.desc}</p>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   5. SECURITY & COMPLIANCE SECTION
*/
const SectionSecurityCompliance = () => (
  <section className="py-12 bg-white overflow-hidden">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-10">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Security Posture & Resilience</span>
             <h2 className="c9-section-heading">Security & Compliance Integration</h2>
             <p className="c9-body text-slate-800 mt-6">
               Enterprise risk demands operational safeguards. We establish governance-driven environments that align with complex compliance frameworks and ensure infrastructure resilience.
             </p>
          </FadeIn>
       </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <ShieldCheck aria-hidden="true" />, title: 'Endpoint Security', desc: 'Comprehensive monitoring and protection for all devices, reducing operational risk across distributed operations.' },
            { icon: <Network aria-hidden="true" />, title: 'Network Visibility', desc: 'Centralized network visibility and strict access control to manage vulnerabilities proactively.' },
            { icon: <ShieldAlert aria-hidden="true" />, title: 'Proactive Threat Management', desc: 'Advanced threat intelligence embedded into standard operations for swift incident response.' },
            { icon: <ClipboardCheck aria-hidden="true" />, title: 'Compliance Readiness', desc: 'Continuous alignment with enterprise compliance requirements, ensuring operational safeguards are always active.' }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="group bg-white p-8 rounded-3xl border border-slate-100 h-full hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(93,0,214,0.4)] group-hover:bg-[#5D00D6] group-hover:text-white bg-[#5D00D6]/5 text-[#5D00D6] mb-6">
                     {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-800 leading-relaxed">{item.desc}</p>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   6. ENTERPRISE OFFERINGS SECTION
*/
const SectionOfferings = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className={C}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="c9-eyebrow mb-4">Operational Capabilities</span>
              <h2 className="c9-section-heading">
                Enterprise Offerings
              </h2>
              <p className="c9-body text-slate-800 mt-6 text-lg">
                Our offerings are designed as enterprise operational capabilities—delivering measurable scalability, governance, and accountability outcomes.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.1} className="shrink-0 hidden md:flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </FadeIn>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 pt-4 -mx-6 px-6 md:-mx-8 md:px-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {[
            { icon: <Globe size={20} aria-hidden="true" />, title: 'Managed Multi-Site Infrastructure', desc: 'Ensures support continuity and operational standardization across all physical locations.' },
            { icon: <PhoneCall size={20} aria-hidden="true" />, title: 'Enterprise Communications Management', desc: 'Centralized voice, unified communications, and connectivity with SLA-backed reliability.' },
            { icon: <Monitor size={20} aria-hidden="true" />, title: 'Centralized Monitoring & Support', desc: 'Unifies visibility to rapidly identify incidents and reduce ongoing support overhead.' },
            { icon: <Shield size={20} aria-hidden="true" />, title: 'Network & Security Operations', desc: 'Integrates proactive threat management and governance to secure the enterprise perimeter.' },
            { icon: <Server size={20} aria-hidden="true" />, title: 'Infrastructure Lifecycle Management', desc: 'Strategic planning and management of hardware/software to maximize operational outcomes.' },
            { icon: <FileCheck size={20} aria-hidden="true" />, title: 'Governance & Compliance Support', desc: 'Aligns daily IT operations with internal governance and regulatory compliance demands.' },
            { icon: <Network size={20} aria-hidden="true" />, title: 'Enterprise Connectivity Management', desc: 'Provides robust connectivity orchestration, ensuring uptime for complex hybrid cloud environments.' },
            { icon: <Activity size={20} aria-hidden="true" />, title: 'Business Continuity & Resilience', desc: 'Proactive safeguards and rapid recovery processes to eliminate outages during critical operations.' }
          ].map((item, i) => (
            <div key={i} className="w-[85vw] md:w-[45vw] lg:w-[320px] shrink-0 snap-start">
              <FadeIn delay={i * 0.05} className="h-full">
                <div className="group bg-white p-6 rounded-3xl border border-slate-100 h-full hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2 flex flex-col">
                   <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(93,0,214,0.4)] group-hover:bg-[#5D00D6] group-hover:text-white bg-[#5D00D6]/5 text-[#5D00D6] mb-4">
                      {item.icon}
                   </div>
                   <h3 className="text-[15px] font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                   <p className="text-sm text-slate-800 leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 
   7. MULTI-SITE & SCALABILITY SECTION
*/
const SectionMultiSiteScalability = () => (
  <section className="py-12 bg-white">
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
             <div className="relative">
                <div className="rounded-[32px] overflow-hidden shadow-2xl aspect-[16/10] relative border border-slate-100">
                   <Image 
                     src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                     alt="Distributed Operations Architecture" 
                     fill
                     className="object-cover object-center" 
                     sizes="(max-width: 1280px) 100vw, 50vw"
                   />
                </div>
                <div className="absolute bottom-4 right-4 lg:-bottom-8 lg:-right-8 bg-[#5D00D6] text-white p-6 lg:p-10 rounded-2xl lg:rounded-[32px] shadow-2xl border border-white/10">
                   <div className="text-2xl lg:text-4xl font-black mb-1">Scale</div>
                   <div className="text-[10px] lg:text-xs font-black uppercase tracking-widest opacity-95">Without Compromise</div>
                </div>
             </div>
          </FadeIn>

          <FadeIn direction="left" className="order-1 lg:order-2">
             <span className="c9-eyebrow mb-4">Multi-Site Scalability</span>
             <h2 className="c9-section-heading mb-6">Designed for Distributed Operations</h2>
             <p className="c9-body text-slate-800 mb-8">
               We support your growth by providing location consistency, operational standardization, and scalable infrastructure. Confidently expand your footprint with a managed services partner that scales with you.
             </p>
             <div className="space-y-6">
                {[
                  { title: 'Centralized Management', desc: 'Unified control over every location, eliminating regional IT silos and configuration drift.' },
                  { title: 'Support Continuity Across Locations', desc: 'Identical SLA performance and proactive support structures delivered uniformly across all sites.' },
                  { title: 'Operational Standardization', desc: 'Standardized deployments that simplify new site rollouts and reduce ongoing maintenance overhead.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0 mt-1">
                        <Check size={14} aria-hidden="true" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-700">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

/* 
   8. CASE STUDIES / OPERATIONAL PROOF
*/
const SectionOperationalProof = () => (
  <section className="py-12 bg-slate-50 border-y border-slate-100">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-10">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Operational Proof</span>
             <h2 className="c9-section-heading">Measurable Operational Outcomes</h2>
             <p className="c9-body text-slate-900 mt-6">
               Transitioning from complexity to control. We deliver proven infrastructure consolidation and improved support responsiveness.
             </p>
          </FadeIn>
       </div>

       <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              tag: 'DISTRIBUTED RETAIL', 
              title: 'Infrastructure Consolidation', 
              desc: 'Transformed a fragmented, multi-vendor environment into a centralized operational model. Achieved complete visibility and reduced support overhead across 85 locations.',
              metric: '100%',
              metricLabel: 'Centralized Visibility'
            },
            { 
              tag: 'COMPLIANCE-DRIVEN LOGISTICS', 
              title: 'Reduced Downtime & Escalation Management', 
              desc: 'Implemented structured governance and SLA-backed response pathways for a 1,200-endpoint ecosystem, dramatically improving operational efficiency and reducing downtime.',
              metric: '42%',
              metricLabel: 'Incident Reduction'
            }
          ].map((caseStudy, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="group bg-white p-10 rounded-3xl border border-slate-100 h-full hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2">
                  <span className="text-[11px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">{caseStudy.tag}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{caseStudy.title}</h3>
                  <p className="text-slate-900 text-[14px] leading-relaxed mb-10">{caseStudy.desc}</p>
                  <div className="flex items-center gap-4">
                     <div className="text-4xl font-black text-slate-900 group-hover:text-[#5D00D6] transition-colors">{caseStudy.metric}</div>
                     <div className="text-xs font-black text-slate-900 uppercase tracking-widest">{caseStudy.metricLabel}</div>
                  </div>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   9. SLA & ENTERPRISE SUPPORT CONFIDENCE SECTION
*/
const SectionSLAConfidence = () => (
  <section className="py-14 bg-white">
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
             <span className="c9-eyebrow mb-4">Enterprise Support Confidence</span>
             <h2 className="c9-section-heading mb-6">Dependable, Measurable, Operationally Safe.</h2>
             <p className="c9-body text-slate-800 mb-8">
               Our enterprise engagements are defined by SLA response commitments, clear escalation paths, and comprehensive incident response management to guarantee operational assurance.
             </p>
             <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Clock aria-hidden="true" />, title: 'SLA Response Commitments', desc: 'Strict, measurable response targets ensuring minimal disruption to business operations.' },
                  { icon: <RefreshCw aria-hidden="true" />, title: 'Escalation Paths', desc: 'Pre-defined, rapid escalation workflows engaging senior engineers when needed.' },
                  { icon: <Activity aria-hidden="true" />, title: 'Proactive Monitoring', desc: '24/7 visibility to detect, report, and remediate incidents before users are affected.' },
                  { icon: <ShieldCheck aria-hidden="true" />, title: 'Governance Visibility', desc: 'Centralized accountability and transparent reporting for executive IT stakeholders.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                     <div className="text-[#5D00D6] shrink-0 mt-1">{item.icon}</div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                        <p className="text-[14px] text-slate-800">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn direction="right">
             <div className="bg-[#0c1024] rounded-[32px] overflow-hidden shadow-2xl border border-white/5">
                <Table>
                   <TableHeader className="bg-white/5 border-b border-white/10">
                      <TableRow className="hover:bg-transparent border-none">
                         <TableHead className="text-white font-bold py-6 px-8 h-auto">Priority</TableHead>
                         <TableHead className="text-white font-bold py-6 px-8 h-auto">Response</TableHead>
                         <TableHead className="text-white font-bold py-6 px-8 h-auto">Resolution Target</TableHead>
                      </TableRow>
                   </TableHeader>
                   <TableBody>
                      {[
                        { p: 'P1 - Critical Outage', r: '< 15 mins', s: '< 4 hours' },
                        { p: 'P2 - Major Impact', r: '< 30 mins', s: '< 8 hours' },
                        { p: 'P3 - Standard Request', r: '< 2 hours', s: '< 24 hours' }
                      ].map((row, i) => (
                        <TableRow key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                           <TableCell className="py-6 px-8 font-bold text-white h-auto">{row.p}</TableCell>
                           <TableCell className="py-6 px-8 text-white/95 h-auto font-mono text-xs">{row.r}</TableCell>
                           <TableCell className="py-6 px-8 text-[#a56eff] h-auto font-mono text-xs font-bold">{row.s}</TableCell>
                        </TableRow>
                      ))}
                   </TableBody>
                </Table>
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

/* 
   10. FAQ SECTION
*/
const faqs = [
  {
    q: "How does C9 integrate with existing enterprise IT systems?",
    a: "Our architecture is designed to integrate deeply with your established enterprise ecosystems, including hybrid cloud and legacy platforms, without causing operational disruption."
  },
  {
    q: "Can you support complex multi-site environments?",
    a: "Yes. Our centralized management approach ensures location consistency and scalable infrastructure support, delivering uniform SLA performance across all your distributed operations."
  },
  {
    q: "What is your onboarding and transition planning process?",
    a: "We execute a highly structured transition plan that prioritizes operational continuity. We catalog existing assets, align governance frameworks, and establish monitoring baselines before fully assuming operational responsibility."
  },
  {
    q: "How do you handle security and compliance requirements?",
    a: "We embed security best practices and continuous monitoring into our daily operations. Our services are aligned with major compliance frameworks to maintain rigorous operational safeguards and governance visibility."
  },
  {
    q: "What are your escalation workflows for critical incidents?",
    a: "We utilize predefined escalation paths tailored to your SLA response commitments. Critical incidents immediately trigger senior engineering involvement and clear incident response management protocols."
  }
];

const SectionEnterpriseFAQ = () => (
  <WpFAQAndFeedback 
    faqItems={faqs} 
    showTestimonials={true} 
  />
);


/* 
   11. FINAL CTA SECTION
*/
const FinalCTA = () => (
  <section className="py-16 bg-[#0c1024] text-white relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/30 to-transparent opacity-50" />
     <div className={C + " relative z-10 text-center"}>
        <FadeIn>
           <h2 className="c9-section-heading !text-white mb-8 !text-4xl lg:!text-5xl">Take Control of Your <br/>Enterprise Environment.</h2>
           <p className="text-white/95 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
             Establish operational visibility, centralized management, and proven governance. Partner with an MSP that understands enterprise scalability and provides true accountability.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <C9Button 
                 size="lg"
                 className="bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/40"
                 onClick={() => {
                   document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                 }}
               >
                  Schedule Assessment
               </C9Button>
               <C9Button 
                 variant="outline"
                 size="lg"
                 className="border-2 border-white/20 text-white rounded-full hover:bg-white hover:text-[#0c1024] transition-all"
                 onClick={() => {
                   document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                 }}
               >
                  Book a Strategic Operations Assessment
               </C9Button>
           </div>
           <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                 onClick={() => {
                   document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                 }}
                 className="text-white/95 font-black hover:text-white transition-colors text-sm flex items-center gap-2"
               >
                 Speak With an Enterprise MSP Specialist <ArrowRight size={14} aria-hidden="true" />
               </button>
           </div>
        </FadeIn>
     </div>
  </section>
);

/* 
   PAGE EXPORT
*/
export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionChallenges />
      <SectionCapabilities />
      <SectionMSPPositioning />
      <SectionGovernance />
      <SectionSecurityCompliance />
      <SectionOfferings />
      <SectionMultiSiteScalability />
      <CapabilityPack />
      <WpVendors />
      <SectionOperationalProof />
      <SectionSLAConfidence />
      <SectionEnterpriseFAQ />
      <FinalCTA />

      <section id="consultation-section" className="bg-slate-50 py-12">
        <WpConsultationForm
          showHeader={false}
          eyebrow="STRATEGIC OPERATIONS ASSESSMENT"
          title="Evaluate Your Infrastructure Environment"
          description="Ready to consolidate your technology operations under a single accountable partner? Schedule an infrastructure review to discuss architecture, governance, and your multi-site strategy."
          formTitle="Request Enterprise Briefing"
        />
      </section>
    </main>
  );
}
