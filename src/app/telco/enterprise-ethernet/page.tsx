'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Users, CheckCircle2, Clock, Layers, Building2, TrendingUp, Server, PhoneCall, Monitor, CheckCircle, BarChart3, Globe, Network, Lock, Zap, FileSearch, HardDrive, RefreshCcw, ShieldAlert } from 'lucide-react';
import { Section } from '@/components/design-system/Section';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { C9Button } from '@/components/design-system/C9Button';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { ContinueJourney } from '@/components/sections/ContinueJourney';

const FadeIn = ({ children, delay = 0, className, direction = 'up' }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}) => {
  const y = direction === 'up' ? 24 : direction === 'down' ? -24 : 0;
  const x = direction === 'left' ? -24 : direction === 'right' ? 24 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

export default function EnterpriseEthernetPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20 border-b border-slate-50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-50 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className={`${C} relative z-10`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center pb-16 lg:pb-24">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
                   <ShieldCheck size={13} className="text-[#5D00D6]" />
                   <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Governance-Led Infrastructure</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                 <h1 className="c9-hero-title mb-6 !leading-[1.1]">
                    Enterprise-Grade Connectivity Built for <span className="text-[#5D00D6]">Operational Governance.</span>
                 </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                 <p className="c9-body mb-8 max-w-[620px] text-lg">
                    Infrastructure decisions are risk management decisions. C9 Enterprise Ethernet provides the dedicated bandwidth, rigid eSLA, and escalation governance required for distributed multi-site operations.
                 </p>
              </FadeIn>

              <FadeIn delay={0.22}>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <C9Button className="px-9 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full font-bold" asChild>
                      <Link href="#consultation-section">Request Enterprise Connectivity Review</Link>
                    </C9Button>
                    <C9Button variant="outline" className="px-9 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white font-bold" asChild>
                      <Link href="#consultation-section">Discuss eSLA Requirements</Link>
                    </C9Button>
                 </div>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-10">
                <div className="flex flex-wrap gap-x-10 gap-y-3">
                   {['4-Hour Restoration eSLA', '1:1 Uncontended Capacity', 'Rollout Governance', 'Senior Escalation Ownership'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                         <CheckCircle size={14} className="text-[#5D00D6]" />
                         {item}
                      </div>
                   ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right" className="relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-slate-200 aspect-square">
                  <img
                     src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
                     alt="Enterprise technical lead analyzing network infrastructure data"
                     className="w-full h-full object-cover object-center duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-[32px] p-8 border border-white/60 shadow-xl">
                     <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                        <div className="w-12 h-12 rounded-2xl bg-[#5D00D6] flex items-center justify-center text-white shadow-lg">
                           <ShieldCheck size={24} />
                        </div>
                        <div>
                           <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">Infrastructure Governance</div>
                           <div className="text-[18px] font-bold text-slate-900 leading-none">High-Trust Architecture</div>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-8">
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Contention</div>
                           <div className="text-[20px] font-bold text-[#5D00D6] leading-none tracking-tight">1:1 Dedicated</div>
                        </div>
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Recovery</div>
                           <div className="text-[20px] font-bold text-[#5D00D6] leading-none tracking-tight">&lt; 4 Hours</div>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WpClientTicker />

      {/* ══ 2. OPERATIONAL EXPOSURE ════════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4 text-rose-600">Enterprise Risk Mitigation</span>
               <h2 className="c9-section-heading mb-6">When Network Instability Threatens Business Continuity.</h2>
               <p className="c9-body text-lg mb-8">
                  For mid-market and enterprise organizations, connectivity is a governance requirement. Fragmented infrastructure creates operational visibility gaps and unmanaged risk. C9 restores control through standardized enterprise architecture and escalation ownership.
               </p>
               <C9Button variant="outline" className="rounded-full h-12 px-8 border-slate-200 text-[#5D00D6] hover:border-[#5D00D6] font-bold" asChild>
                  <Link href="#consultation-section">Review Multi-Site Connectivity Risks</Link>
               </C9Button>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <ShieldAlert />, title: "Packet Loss Vulnerability", text: "Micro-disruptions degrade ERP performance and voice continuity across sites." },
                { icon: <Activity />, title: "SLA Ambiguity", text: "Standard telco agreements lack the rigid eSLA required for true accountability." },
                { icon: <Users />, title: "Fragmented Governance", text: "Multiple vendors mean disjointed reporting and inconsistent security policies." },
                { icon: <Clock />, title: "Escalation Friction", text: "Delays in vendor response directly extend mean-time-to-resolution (MTTR)." }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm">
                   <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4">
                      {item.icon}
                   </div>
                   <h4 className="font-bold text-slate-900 text-[15px] mb-2">{item.title}</h4>
                   <p className="text-slate-500 text-[13px] leading-relaxed">{item.text}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. SD-WAN & MULTI-SITE FOCUS ═══════════════════ */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className={C}>
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <span className="c9-eyebrow mb-4">The Connectivity Backbone</span>
            <h2 className="c9-section-heading">High-Availability Architecture for Multi-Site Operations.</h2>
            <p className="c9-body mt-4">Enterprise Ethernet is not just a fast link—it is the foundation of a resilient, secure SD-WAN topology connecting headquarters, branches, and data centers.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Network />, 
                title: "eSLA Reporting", 
                desc: "Full visibility into performance metrics and SLA compliance. We provide the reporting cadence required for enterprise IT governance." 
              },
              { 
                icon: <Lock />, 
                title: "Architecture Maturity", 
                desc: "Move beyond 'best effort' links. We design dedicated fibre paths with carrier diversity and BGP-governed failover." 
              },
              { 
                icon: <Globe />, 
                title: "Multi-Site Governance", 
                desc: "Standardise connectivity across your entire footprint. Uniform security, uniform performance, and uniform billing." 
              },
              { 
                icon: <ShieldCheck />, 
                title: "Escalation Ownership", 
                desc: "Eliminate vendor finger-pointing. C9 takes absolute ownership of carrier liaisons and restoration priority." 
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-slate-50/50 p-8 rounded-[32px] border border-slate-100 hover:bg-white hover:border-[#5D00D6]/20 transition-all hover:shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:scale-110 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="c9-card-title mb-3 text-[17px]">{item.title}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. SLA-BACKED OPERATIONAL CONFIDENCE ════════════════════ */}
      <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Operational Confidence</span>
               <h2 className="c9-section-heading !text-white mb-6">
                  Absolute SLA Ownership. No Finger-Pointing.
               </h2>
               <p className="c9-body text-white/70 mb-10 text-lg">
                  Enterprise buyers need certainty, not vague promises. C9 provides a rigorous governance framework for response, escalation, and restoration.
               </p>
               
               <div className="space-y-8">
                  {[
                    { icon: <Monitor />, title: "Response Ownership", text: "Direct access to senior Australian engineers. No call centers, no offshore script-readers." },
                    { icon: <Zap />, title: "Escalation Structure", text: "Verified escalation paths that ensure carrier compliance with your eSLA from the first minute." },
                    { icon: <ShieldCheck />, title: "Visibility & Reporting", text: "Comprehensive performance analytics and incident reporting for executive-level oversight." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                       <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] shrink-0 mt-1">
                          {item.icon}
                       </div>
                       <div>
                          <h4 className="font-bold text-white text-[18px] mb-2">{item.title}</h4>
                          <p className="text-white/60 text-[15px] leading-relaxed">{item.text}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="relative">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[48px] p-10 lg:p-16">
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[12px] font-bold text-emerald-500 uppercase tracking-widest">Active Governance Tier 1</span>
                  </div>
                  <div className="space-y-8">
                     {[
                       { label: "Restoration SLA", val: "4-Hour Guaranteed", color: "#5D00D6" },
                       { label: "Packet Loss Threshold", val: "< 0.1% Priority", color: "#5D00D6" },
                       { label: "Availability Target", val: "99.95% Annualized", color: "#5D00D6" }
                     ].map((m, i) => (
                       <div key={i}>
                          <div className="flex justify-between mb-2">
                             <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">{m.label}</span>
                             <span className="text-[11px] font-bold text-white">{m.val}</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: '100%' }}
                               viewport={{ once: true }}
                               transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                               className="h-full bg-[#5D00D6]" 
                             />
                          </div>
                       </div>
                     ))}
                  </div>
                  <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/10">
                     <p className="text-white/60 text-[13px] leading-relaxed italic">
                        &ldquo;We own the escalation with carriers so your IT team doesn&apos;t have to. Absolute accountability is our standard.&rdquo;
                     </p>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 5. REDUNDANCY ARCHITECTURE ═══════ */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Fail-Safe Engineering</span>
               <h2 className="c9-section-heading mb-6">Guaranteed Uptime via <br/>Redundancy Architecture.</h2>
               <p className="c9-body mb-10 text-lg">
                  A single physical fibre, no matter how fast, remains a single point of failure. We design high-availability networks utilizing BGP routing and diverse secondary paths to ensure seamless failover.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { title: "BGP Routing", text: "Automated protocol shifting ensures traffic instantly reroutes without dropping active sessions." },
                    { title: "5G & LEO Backup", text: "Integration with high-speed 5G or Starlink arrays for resilient, out-of-band redundancy." },
                    { title: "Carrier Diversity", text: "Secondary fibre links sourced from entirely different carriers to prevent localized outages." },
                    { title: "Automated Failover", text: "Zero-touch failover mechanics governed by strict SD-WAN policies." }
                  ].map((item, i) => (
                    <div key={i}>
                       <h4 className="font-bold text-slate-900 text-[16px] mb-2">{item.title}</h4>
                       <p className="text-slate-500 text-[14px] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="relative">
               <div className="bg-slate-50 rounded-[48px] p-10 lg:p-16 border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-8">Architectural Resilience</h3>
                  <div className="space-y-4">
                     {['No Single Point of Failure (SPoF)', 'Automated Traffic Steering', 'Constant Latency Monitoring', 'Seamless Packet Recovery'].map(t => (
                       <div key={t} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                          <CheckCircle2 size={12} className="text-[#5D00D6]" />
                          <span className="text-[14px] font-bold text-slate-800">{t}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 6. MIGRATION WITHOUT BUSINESS DISRUPTION ═══════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1">
               <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                  {/* [IMAGE PLACEHOLDER: Professional enterprise NOC environment showing real-time network governance and reporting] */}
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" alt="Enterprise Network Governance" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5D00D6]/40 to-transparent" />
               </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4">Enterprise Operating Model</span>
               <h2 className="c9-section-heading mb-6">Structured Rollout Governance.</h2>
               <p className="c9-body mb-10">
                  Large-scale infrastructure transitions require procurement-grade planning. C9 follows a mature operational model to ensure zero-disruption migrations and long-term SLA monitoring.
               </p>
               
               <div className="space-y-6">
                  {[
                    { icon: <FileSearch />, title: "Discovery & Architecture Review", text: "Deep-dive audit of legacy multi-site topologies and carrier validation." },
                    { icon: <RefreshCcw />, title: "Implementation & Governance", text: "Phased rollout planning with dedicated project management and testing." },
                    { icon: <Users />, title: "SLA Monitoring & Reporting", text: "Ongoing performance reviews and transparent incident reporting cadence." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                       <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#5D00D6] shrink-0 mt-1 shadow-sm">
                          {item.icon}
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
                          <p className="text-slate-500 text-[14px] leading-relaxed">{item.text}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 7. COMMERCIAL OUTCOMES ══════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className={C}>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
             <FadeIn direction="left">
                <span className="c9-eyebrow mb-4">Governance Proof</span>
                <h2 className="c9-section-heading mb-6">Measured Enterprise Outcomes.</h2>
                <p className="c9-body mb-10 text-slate-600">
                   Outcome-driven connectivity for distributed operations. We connect technical eSLA performance to commercial risk reduction and business continuity.
                </p>

                <div className="grid grid-cols-2 gap-4">
                   {[
                     { label: "Restoration SLA", val: "4-Hour Max", icon: <TrendingUp size={20} /> },
                     { label: "Throughput Guarantee", val: "100%", icon: <ShieldCheck size={20} /> },
                     { label: "Governance Reporting", val: "Executive", icon: <Zap size={20} /> },
                     { label: "Accountability Tier", val: "Absolute", icon: <ShieldAlert size={20} /> }
                   ].map((stat, i) => (
                     <div key={i} className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 hover:bg-white hover:border-[#5D00D6]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#5D00D6]/10">
                        <div className="text-3xl font-bold text-[#5D00D6] mb-1 leading-none tracking-tight">{stat.val}</div>
                        <div className="text-slate-500 font-bold text-[12px] uppercase tracking-widest leading-tight">{stat.label}</div>
                     </div>
                   ))}
                </div>
             </FadeIn>

             <FadeIn direction="right" delay={0.1}>
               <div className="bg-white p-6 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50">
                 <WpCaseStudies 
                    articles={[
                      {
                        tag: 'DISTRIBUTED RETAIL',
                        title: 'National Footprint Ethernet Rollout',
                        desc: "A major retail group required uniform connectivity governance across 50+ locations. C9 managed the national rollout with centralized reporting and proactive eSLA monitoring. Result: 99.95% uptime achieved.",
                        img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Governance Secured'
                      },
                      {
                        tag: 'HEALTHCARE GROUPS',
                        title: 'Critical Patient Record Syncing',
                        desc: "A healthcare provider required absolute path diversity for ERP-dependent operations. C9 architected a dual-carrier Ethernet solution with BGP-managed failover. Result: Zero data interruptions.",
                        img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Operational Continuity'
                      },
                      {
                        tag: 'WAREHOUSE LOGISTICS',
                        title: 'Supply Chain Connectivity Audit',
                        desc: "A logistics leader faced hidden productivity losses due to packet loss on standard fibre. C9 upgraded them to symmetric 1000/1000 Enterprise Ethernet with direct engineering support. Result: 40% efficiency gain.",
                        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Performance Validated'
                      }
                    ]}
                  />
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 8. MID-PAGE CTA ══════════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
           <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                   Procurement-grade infrastructure requires governance-led planning.
                </h3>
                <p className="c9-body mb-10 text-lg">
                   Partner with a communications leader who takes absolute ownership of your eSLA and multi-site rollout performance.
                </p>
                <C9Button className="px-10 h-16 bg-[#5D00D6] text-white hover:bg-[#4d00b3] shadow-xl rounded-full text-lg font-bold" asChild>
                  <Link href="#consultation-section">Plan an Enterprise Rollout</Link>
                </C9Button>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* ══ 9. FINAL CTA ═════════════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
        <div className={C}>
           <div className="bg-[#5D00D6] rounded-[48px] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/40 text-center">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px] -mr-64 -mt-64" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-[0.05] rounded-full blur-[80px] -ml-32 -mb-32" />
              
              <div className="relative z-10">
                <span className="c9-eyebrow !text-white/80 mb-4">Enterprise Governance</span>
                <h2 className="c9-section-heading !text-white mb-6">Governance + Architecture + Absolute Accountability</h2>
                <p className="c9-body !text-white/70 mb-10 max-w-2xl mx-auto text-lg">
                   Stop settling for consumer-grade infrastructure. Talk to C9 about Enterprise Ethernet built for operational continuity and national scale.
                </p>
                <C9Button className="px-12 h-16 bg-white text-[#5D00D6] hover:bg-slate-50 shadow-xl rounded-full text-lg font-bold" asChild>
                   <Link href="#consultation-section">Audit Enterprise Connectivity Performance</Link>
                </C9Button>
              </div>
           </div>
        </div>
      </section>

      {/* ══ 10. RELATED SOLUTIONS ══════════════════════ */}
      <ContinueJourney 
        title="Connectivity is the Backbone. Here's What Runs on Top."
        description="High-performance Ethernet is usually the first step. Leaders then secure their perimeter and consolidate their voice operations."
        links={[
          { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" },
          { label: "Cybersecurity", path: "/managed-it/cyber-security" },
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "Contact Centre", path: "/telco/contact-centre" }
        ]}
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="ENTERPRISE INFRASTRUCTURE AUDIT"
          title="Ready to remove network risk from your operations?"
          description="Book an executive strategy session with our senior network architects to review your national infrastructure and SLA governance requirements."
          formTitle="Get an Enterprise Connectivity Audit"
        />
      </section>

      <WpFAQAndFeedback 
        faqItems={[
          { q: "How does C9 ensure zero-disruption migration?", a: "We manage migrations through a risk-managed, phased approach. We conduct a deep-dive audit of legacy systems, architect validated fallback paths, and coordinate all onsite trades to ensure your operational continuity remains protected throughout the transition." },
          { q: "What defines C9's 'Senior Engineering' support?", a: "Our support model removes call centers and script-readers. Enterprise clients have direct access to AU-managed senior engineers who own the incident from detection to resolution, managing all carrier liaisons on your behalf." },
          { q: "How is Enterprise Ethernet commercially different from business nbn™?", a: "Enterprise Ethernet is a dedicated, private fibre path with a 1:1 contention ratio and professional eSLA (from 4 hours). It is designed specifically for operations where network instability creates significant financial risk, providing guaranteed performance that nbn™ cannot match." }
        ]}
      />
    </main>
  );
}
