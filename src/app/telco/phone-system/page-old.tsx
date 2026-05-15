'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneCall, Users, ShieldCheck, Activity, CheckCircle2, Building2, TrendingUp, Layout, Settings, Zap, RefreshCcw, ShieldAlert } from 'lucide-react';
import { Section } from '@/components/design-system/Section';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { C9Button } from '@/components/design-system/C9Button';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { ContinueJourney } from '@/components/sections/ContinueJourney';
import C9VoiceNetworkDiagram from '@/components/sections/c9-phone-system/C9VoiceNetworkDiagram';

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
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

export default function C9PhoneSystemPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20 border-b border-slate-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[120px] -mr-32 -mt-32 opacity-60" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        
        <div className={`${C} relative z-10`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center pb-16 lg:pb-24">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
                   <PhoneCall size={13} className="text-[#5D00D6]" />
                   <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Managed Business Phone System</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                 <h1 className="c9-hero-title mb-6 !leading-[1.1]">
                    If Your Phones Don’t Work, Your Business <span className="text-[#5D00D6]">Doesn’t Either.</span>
                 </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                 <p className="c9-body mb-8 max-w-[620px] text-lg">
                    C9 delivers fully managed business phone systems that ensure every call is received, routed, and handled without failure. From multi-site phone management to Teams calling and managed voice support, we ensure your customers can always reach you.
                 </p>
              </FadeIn>

              <FadeIn delay={0.22}>
                 <div className="flex flex-col sm:flex-row gap-6">
                    <C9Button className="px-8 h-12 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full text-white" asChild>
                      <Link href="#consultation-section">Review My Phone System</Link>
                    </C9Button>
                    <C9Button variant="outline" className="px-8 h-12 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white" asChild>
                      <Link href="#consultation-section">Reduce Missed Calls & Delays</Link>
                    </C9Button>
                 </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right" className="relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
                  <img
                     src="/images/yealink-phone-1.jpg"
                     alt="Australian reception and customer service team answering business calls through a modern managed phone system"
                     className="w-full h-full object-cover object-center duration-1000 group-hover:scale-105"
                  />
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WpClientTicker />

       {/* ══ 2. BUSINESS CALLING CHALLENGES ════════════════════════ */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 text-[#5D00D6]">The Revenue Risk</span>
              <h2 className="c9-section-heading">Is Your Current Phone System <br/>Slowing Down Your Business?</h2>
              <p className="c9-body text-lg mt-6">
                Most businesses treat their phone system as a utility until it fails. Outdated PBX systems and poor routing aren't just technical issues—they are barriers to customer reachability and revenue growth.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <PhoneCall />, title: "Missed Customer Calls", text: "Without automated overflow and smart queues, every missed call is a lost opportunity." },
              { icon: <TrendingUp />, title: "Poor Call Routing", text: "Customers get stuck in loops or reach the wrong department, damaging your brand experience." },
              { icon: <Users />, title: "Remote Staff Disconnected", text: "Fragmented systems make it impossible for remote teams to stay reachable under one identity." },
              { icon: <Building2 />, title: "Multiple Sites / Different Systems", text: "Managing disjointed phone environments across locations creates operational confusion." },
              { icon: <Activity />, title: "No Visibility Into Call Performance", text: "If you can't measure answered vs abandoned calls, you can't manage your customer experience." },
              { icon: <ShieldAlert />, title: "Slow Provider Support", text: "Dealing with global telcos means waiting days for simple changes. We provide local managed support." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:border-[#5D00D6]/20 transition-all hover:shadow-xl">
                 <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6">
                    {item.icon}
                 </div>
                 <h4 className="font-bold text-slate-900 text-[17px] mb-3">{item.title}</h4>
                 <p className="text-slate-500 text-[14px] leading-relaxed">{item.text}</p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 text-center">
            <FadeIn delay={0.4}>
              <div className="flex flex-col items-center gap-6">
                <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full bg-[#5D00D6]/10 text-[#5D00D6] border border-[#5D00D6]/20">
                   <CheckCircle2 size={24} />
                   <span className="font-bold text-[15px]">C9 provides the managed voice standard that Australian businesses rely on for growth.</span>
                </div>
                <C9Button className="px-8 h-12 bg-[#5D00D6] hover:bg-[#4d00b3] rounded-full text-white shadow-lg" asChild>
                  <Link href="#consultation-section">Fix Call Routing Problems</Link>
                </C9Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 3. SYSTEM STRUCTURE ═══════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={C}>
          <FadeIn className="max-w-3xl mb-16 mx-auto text-center">
            <span className="c9-eyebrow mb-4">Voice Continuity</span>
            <h2 className="c9-section-heading mb-6">Managed Business Phone System & Routing</h2>
            <p className="c9-body text-lg">
               C9 manages your entire business calling environment — ensuring every part of your system works together as a connected environment.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <PhoneCall />, title: "Voice Continuity", desc: "All inbound and outbound calling is configured and managed to ensure 100% reachability across your business." },
              { icon: <Settings />, title: "Smart Call Routing", desc: "Calls are automatically directed through structured flows — including IVR, queues, and department routing — ensuring the right person handles the call." },
              { icon: <Layout />, title: "Teams & Mobile Calling", desc: "Your team can operate from desk phones, mobile devices, or Microsoft Teams — with a consistent experience across all environments." },
              { icon: <Zap />, title: "Multi-Site Management", desc: "One system managing multiple locations, ensuring consistent call handling and internal dialling regardless of geography." },
              { icon: <Activity />, title: "Call Visibility & Reporting", desc: "Every call is tracked and measured — giving you full control over performance, response times, and missed-call prevention." },
              { icon: <RefreshCcw />, title: "Managed Voice Support", desc: "We don't just set it up; we manage it. One partner responsible for routing, devices, and ongoing support." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center text-[#5D00D6] shrink-0 group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[18px] mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="bg-[#0c1024] rounded-[32px] p-10 text-center border border-white/10 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
               <p className="text-2xl font-bold text-white relative z-10 max-w-3xl mx-auto">
                  <span className="text-[#a56eff]">We don’t just provide phones</span> — we take full responsibility for how your business communicates.
               </p>
               <FadeIn delay={0.2} className="mt-8 relative z-10">
                 <C9Button className="bg-white text-[#0c1024] hover:bg-slate-100 rounded-full px-8 h-12" asChild>
                   <Link href="#consultation-section">Improve My Business Calling</Link>
                 </C9Button>
               </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ 4. CALL FLOW ════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
            <div className="sticky top-32">
              <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Operational Clarity</span>
               <h2 className="c9-section-heading mb-6">How Your Business Calling Works</h2>
               <p className="c9-body mb-10 text-lg">
                  Every call follows a structured path — ensuring consistency, speed, and accountability. From the moment a call enters your system, it is controlled, directed, and tracked.
               </p>
               
               <div className="space-y-6">
                  {[
                    { title: "Incoming Call", text: "Entry into the managed network.", icon: <PhoneCall size={18} /> },
                    { title: "Call Routing (IVR / Queue)", text: "Automated logic to define the path.", icon: <Settings size={18} /> },
                    { title: "Assigned Team or User", text: "Delivered to the specific destination.", icon: <Users size={18} /> },
                    { title: "Device (Desk / Mobile / Application)", text: "Received on the preferred endpoint.", icon: <Layout size={18} /> },
                    { title: "Monitoring & Reporting", text: "Tracked for performance visibility.", icon: <Activity size={18} /> },
                    { title: "Ongoing Support & Optimisation", text: "Continuously improved by C9.", icon: <RefreshCcw size={18} /> }
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

            <FadeIn direction="right" delay={0.2} className="relative">
               {/* [IMAGE PLACEHOLDER: Operations manager reviewing call routing and missed-call analytics dashboard] */}
               <C9VoiceNetworkDiagram />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 4.5. COMMUNICATION LAYER ════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={C}>
          <FadeIn className="max-w-3xl mb-16 mx-auto text-center">
            <span className="c9-eyebrow mb-4">The Managed Voice Layer</span>
            <h2 className="c9-section-heading mb-6">Every Customer Interaction Flows Through C9</h2>
            <p className="c9-body text-lg text-slate-600">
               Your voice network is the central nervous system of your business. It is the managed layer that connects your customers to your team, coordinates your operations, and provide executives with total visibility.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: <PhoneCall />, 
                title: "Customer Reachability", 
                desc: "The frontline experience. Every inbound call is instantly routed, queued, and delivered to the correct team member without failure." 
              },
              { 
                icon: <Users />, 
                title: "Multi-Site Coordination", 
                desc: "Seamless connectivity across sites. Teams transfer calls, manage presence, and collaborate as a unified managed office." 
              },
              { 
                icon: <Activity />, 
                title: "Visibility & Support", 
                desc: "Total operational oversight. One managed partner responsible for call routing, performance, and ongoing support." 
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-slate-50 p-8 lg:p-10 rounded-[32px] border border-slate-100 shadow-sm text-center hover:border-[#5D00D6]/20 transition-all hover:bg-white hover:shadow-xl">
                 <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#5D00D6] mx-auto mb-6 shadow-sm">
                    {item.icon}
                 </div>
                 <h4 className="font-bold text-slate-900 text-[18px] mb-3">{item.title}</h4>
                 <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>


          <FadeIn delay={0.4} className="text-center">
             <div className="flex flex-col items-center gap-8">
               <div className="inline-block px-8 py-5 bg-slate-900 rounded-full border border-slate-800 shadow-xl">
                  <p className="text-[17px] font-bold text-white tracking-wide">
                     This is how your business communicates, responds, and operates.
                  </p>
               </div>
               <C9Button variant="outline" className="rounded-full px-8 h-12 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white" asChild>
                 <Link href="#consultation-section">Fix Call Routing Problems</Link>
               </C9Button>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ 4.7. MID-PAGE CTA ══════════════════════════════════════ */}
      <section className="py-20 bg-[#5D00D6] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className={C}>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeIn>
              <h2 className="text-3xl lg:text-5xl font-bold mb-10 leading-tight">
                Your Business Communications Should Not Be <br/>Holding Operations Back
              </h2>
              <C9Button className="bg-white text-[#0c1024] hover:bg-slate-100 rounded-full px-8 h-12 text-base font-bold shadow-2xl" asChild>
                <Link href="#consultation-section">Plan a Business Calling Upgrade</Link>
              </C9Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 5. REVENUE RISK ═════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#5D00D6]/5 rounded-full blur-[120px] opacity-40 pointer-events-none" />
        
        <div className={C}>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start relative z-10">
            <div className="sticky top-32">
              <FadeIn direction="left" className="relative">
                 <div className="relative rounded-[32px] overflow-hidden shadow-xl">
                    <img 
                      src="/images/yealink-phone-4.jpg" 
                      alt="Business professional using a modern managed desk phone" 
                      className="w-full h-auto object-cover" 
                    />
                 </div>
              </FadeIn>
            </div>
            
            <FadeIn direction="right" delay={0.2}>
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/5 border border-[#5D00D6]/10 mb-6">
                  <ShieldAlert size={14} className="text-[#5D00D6]" />
                  <span className="c9-eyebrow !mb-0 text-[#5D00D6]">The Revenue Risk</span>
               </div>
               
               <h2 className="c9-section-heading mb-6 !leading-[1.1]">
                  Is your current phone system <br className="hidden md:block"/>costing you <span className="text-[#5D00D6]">opportunities?</span>
               </h2>
               
               <p className="c9-body text-lg text-slate-600 mb-10 max-w-[540px]">
                  Most Australian businesses lose thousands in revenue due to simple communication gaps that go unnoticed. Accessibility is your brand's first impression.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { title: "No Fallback", desc: "Missed calls with no automated overflow logic." },
                    { title: "High Friction", desc: "Slow transfers and long customer hold times." },
                    { title: "Opaque Logic", desc: "No reporting on answered vs abandoned calls." },
                    { title: "Team Gaps", desc: "Remote and multi-site staff disconnected from callers." }
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#5D00D6]/20 hover:bg-[#5D00D6]/5 transition-all group/card">
                       <div className="flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0 mt-0.5 group-hover/card:bg-[#5D00D6] group-hover/card:text-white transition-colors">
                             <ShieldAlert size={12} />
                          </div>
                          <div>
                             <div className="font-bold text-slate-900 text-[15px] mb-1">{item.title}</div>
                             <div className="text-slate-500 text-[13px] leading-snug">{item.desc}</div>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="relative mb-10">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5D00D6] rounded-full" />
                  <div className="pl-8 py-2">
                    <p className="text-lg font-bold text-slate-900 italic leading-tight">
                      "If your phones don’t work, your business doesn’t either."
                    </p>
                  </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4 items-center">
                 <C9Button className="w-full sm:w-auto bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-full px-8 h-12 text-base font-bold shadow-xl shadow-purple-900/10" asChild>
                   <Link href="#consultation-section">Plan a Business Calling Upgrade</Link>
                 </C9Button>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 6. MULTI-SITE & SCALABILITY ════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Enterprise Scale</span>
               <h2 className="c9-section-heading mb-6">Built for Multi-Site and Growing Businesses.</h2>
               <p className="c9-body mb-10 text-lg">
                  C9 manages your communication as a single, unified environment across all locations. Whether you operate from one site or many, your system works the same way — with zero complexity.
               </p>
               <ul className="space-y-5">
                  {[
                    { t: 'Consistent call handling across sites', icon: <Building2 /> },
                    { t: 'Centralised control and configuration', icon: <Layout /> },
                    { t: 'Seamless expansion as your business grows', icon: <TrendingUp /> }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 text-[#5D00D6]">
                        {item.icon}
                      </div>
                      <div className="text-[16px] font-bold text-slate-900">{item.t}</div>
                    </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="relative">
               <div className="grid sm:grid-cols-2 gap-6">
                 {[
                   { label: "Internal Dialling", val: "Across Sites" },
                   { label: "Presence", val: "Global Visibility" },
                   { label: "Management", val: "Centralised" },
                   { label: "Reliability", val: "Multi-Node" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#5D00D6]/20 transition-all shadow-sm">
                       <div className="text-2xl font-bold text-[#5D00D6] mb-1 leading-none tracking-tight">{stat.val}</div>
                       <div className="text-slate-500 font-bold text-[11px] uppercase tracking-widest leading-tight mt-2">{stat.label}</div>
                   </div>
                 ))}
               </div>
               <div className="mt-8">
                 <C9Button variant="outline" className="rounded-full px-8 h-12 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white" asChild>
                   <Link href="#consultation-section">Improve Multi-Site Calling</Link>
                 </C9Button>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 7. DEVICE ECOSYSTEM ════════════════════════════════════ */}
      <section className="pt-16 pb-0 bg-slate-50 overflow-hidden border-y border-slate-100">
        <div className={C}>
           <FadeIn className="text-center mb-0 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise-Grade Managed Devices</h3>
              <p className="c9-body text-lg text-slate-600 mb-8">
                Your managed system includes reliable, business-grade devices configured and supported as part of your system — not deployed separately.
              </p>
           </FadeIn>
           <FadeIn delay={0.1} className="-mb-10 -mt-6">
             <div className="w-full rounded-[48px] overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src="/images/phone-system-fleet.png" 
                  alt="Complete Managed Hardware Ecosystem" 
                  className="w-full max-w-7xl h-auto object-contain mix-blend-multiply scale-110" 
                />
             </div>
           </FadeIn>
        </div>
      </section>

      {/* ══ 8. ACCOUNTABILITY ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Voice Strategy</span>
               <h2 className="c9-section-heading mb-6">End-to-End Voice Support & Ownership</h2>
               
               <ul className="space-y-5 mb-10">
                  {[
                    "One partner managing the entire voice environment",
                    "Clear ownership of performance and reachability",
                    "Managed support for all users and devices",
                    "Single point of accountability"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <div className="shrink-0 w-2 h-2 rounded-full bg-[#5D00D6]"></div>
                      <div className="text-[16px] font-bold text-slate-900">{item}</div>
                    </li>
                  ))}
               </ul>
               <C9Button className="rounded-full px-8 h-12 bg-[#5D00D6] hover:bg-[#4d00b3] text-white" asChild>
                 <Link href="#consultation-section">Plan a Calling Migration</Link>
               </C9Button>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="relative">
               <div className="bg-[#0c1024] rounded-[48px] p-10 lg:p-16 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
                  <div className="relative z-10 text-center">
                     <div className="w-20 h-20 rounded-3xl bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] mx-auto mb-8 border border-[#5D00D6]/40">
                        <ShieldCheck size={40} />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                        Every call, every system, every issue — fully owned and managed by C9.
                     </h3>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 9. WHY BUSINESSES CHOOSE C9 ════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="sticky top-32">
              <FadeIn direction="left" className="order-2 lg:order-1 relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl aspect-[4/3]">
                  {/* [IMAGE PLACEHOLDER: Australian business receptionist handling inbound customer calls using a modern managed phone system] */}
                  <img 
                    src="/images/yealink-phone-3.jpg" 
                    alt="Multi-site office team using desk phones, mobiles, and softphone apps under one managed voice system" 
                    className="w-full h-full object-cover object-center duration-700 group-hover:scale-105" 
                  />
               </div>
            </FadeIn>
            </div>
            
            <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4">The Standard</span>
               <h2 className="c9-section-heading mb-6">Why Businesses Choose C9 for Their Phone Systems.</h2>
               
               <ul className="space-y-5 mb-10">
                  {[
                    "Business-first call routing and control",
                    "Voice continuity and automatic failover",
                    "Full visibility into missed calls and usage",
                    "Managed support for desk and mobile calling",
                    "Single point of accountability"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <div className="shrink-0 w-2 h-2 rounded-full bg-[#5D00D6]"></div>
                      <div className="text-[16px] font-bold text-slate-900">{item}</div>
                    </li>
                  ))}
               </ul>

               <div className="p-6 bg-white border-l-4 border-[#5D00D6] rounded-r-2xl shadow-sm">
                 <p className="c9-body text-lg font-bold text-[#5D00D6]">
                   Your communication system is too critical to be treated as a basic service.
                 </p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 10. FINAL CTA ═══════════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-[#0c1024] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6] opacity-[0.1] rounded-full blur-[100px] -mr-64 -mt-64" />
        <div className={C}>
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <FadeIn>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Modernise Your Business Calling With a Managed Voice Partner
                </h3>
                <p className="text-white/80 mb-10 text-xl max-w-4xl mx-auto">
                  C9 helps Australian businesses improve call reliability, customer reachability, multi-site communication, and operational support through fully managed business phone systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <C9Button className="px-8 h-12 bg-[#5D00D6] text-white hover:bg-[#4d00b3] shadow-xl rounded-full text-base" asChild>
                    <Link href="#consultation-section">Book a Managed Phone System Review</Link>
                  </C9Button>
                  <C9Button variant="outline" className="px-8 h-12 border-white/20 text-white hover:bg-white/10 rounded-full text-base" asChild>
                    <Link href="#consultation-section">Speak With a Voice Specialist</Link>
                  </C9Button>
                </div>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* ══ 11. RELATED SOLUTIONS ═══════════════════════════════════════ */}
      <ContinueJourney 
        title="Voice Is One Piece. See the Full Stack."
        description="Unified communication requires reliable infrastructure underneath it. Explore the connected services that complete the picture."
        links={[
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "Contact Centre", path: "/telco/contact-centre" },
          { label: "SIP Trunking", path: "/telco/sip-trunking" },
          { label: "Inbound Services", path: "/telco/inbound-services" }
        ]}
      />

      <section id="consultation-section" className="bg-white">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="VOICE STRATEGY"
          title="Fix Your Call Routing & Missed Calls"
          description="Book a phone system review with our senior team to identify where you're losing calls and how to modernise your voice setup."
          formTitle="Review My Phone System"
        />
      </section>

      <WpFAQAndFeedback 
        faqItems={[
          { q: "How does C9 manage the transition of critical infrastructure?", a: "We treat every migration as a high-authority engineering project. From strategic number porting to day-one staff onboarding, our framework is designed to ensure zero operational downtime, ensuring your business stays reachable throughout the entire deployment." },
          { q: "What protocols are in place for site-level failures?", a: "Our platform includes pre-configured, automatic failover paths. Calls are immediately re-routed to secondary locations, mobile apps, or remote softphones, enforcing 100% reachability regardless of site-level internet or power outages." },
          { q: "Can the C9 System integrate with our operational tools?", a: "Yes. C9 Voice supports deep integration with leading CRM and productivity platforms, synchronising customer data and activity logs in real-time to remove team friction and improve data accuracy." }
        ]}
      />
    </main>
  );
}
