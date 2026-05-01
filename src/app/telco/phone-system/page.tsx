'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  PhoneCall, Users, ShieldCheck, Activity, ArrowRight, CheckCircle2, 
  Building2, TrendingUp, Layout, Settings, Zap, RefreshCcw, ShieldAlert
} from 'lucide-react';
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
                   <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Business Communication Infrastructure</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                 <h1 className="c9-hero-title mb-6 !leading-[1.1]">
                    If Your Phones Don’t Work, Your Business <span className="text-[#5D00D6]">Doesn’t Either.</span>
                 </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                 <p className="c9-body mb-8 max-w-[620px] text-lg">
                    C9 delivers fully managed business communication systems that ensure every call is received, routed, and handled without failure. No missed opportunities, no confusion, no downtime impacting your operations.
                 </p>
              </FadeIn>

              <FadeIn delay={0.22}>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <C9Button className="px-9 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full text-white" asChild>
                      <Link href="#consultation">Speak to a Specialist</Link>
                    </C9Button>
                    <C9Button variant="outline" className="px-9 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white" asChild>
                      <Link href="#consultation">Review Your Current Setup</Link>
                    </C9Button>
                 </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right" className="relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group">
                  <img
                     src="/images/yealink-phone-1.jpg"
                     alt="Professional using a modern business phone system"
                     className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WpClientTicker />

       {/* ══ 2. CATEGORY DEFINITION ════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 text-[#5D00D6]">The Reality</span>
              <h2 className="c9-section-heading">This Is Not Just a <br/>Phone System.</h2>
              <p className="c9-body text-lg mt-6">
                A modern business phone system is not just about making and receiving calls. It controls how your business communicates — how calls are routed, how customers reach the right team, how quickly responses happen, and how consistently your operations run.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp />, title: "Lost Revenue", text: "Without a properly structured system, calls go unanswered." },
              { icon: <Users />, title: "Customer Frustration", text: "Without a properly structured system, customers are misrouted." },
              { icon: <Activity />, title: "Operational Blind Spots", text: "Without a properly structured system, teams lose visibility." },
              { icon: <ShieldAlert />, title: "Missed Opportunities", text: "Without a properly structured system, revenue opportunities are missed." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                 <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 mb-6">
                    {item.icon}
                 </div>
                 <h4 className="font-bold text-slate-900 text-[17px] mb-3">{item.title}</h4>
                 <p className="text-slate-500 text-[14px] leading-relaxed">{item.text}</p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 text-center">
            <FadeIn delay={0.4}>
              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full bg-[#5D00D6]/10 text-[#5D00D6] border border-[#5D00D6]/20">
                 <CheckCircle2 size={24} />
                 <span className="font-bold text-[15px]">C9 delivers a complete communication system that ensures every call is handled the way your business expects.</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 3. SYSTEM STRUCTURE ═══════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={C}>
          <FadeIn className="max-w-3xl mb-16 mx-auto text-center">
            <span className="c9-eyebrow mb-4">Core Architecture</span>
            <h2 className="c9-section-heading mb-6">Your Complete Communication System</h2>
            <p className="c9-body text-lg">
               Every part of your phone system is designed and managed as a connected environment — not separate tools.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <PhoneCall />, title: "Calling Infrastructure", desc: "All inbound and outbound calling is configured, controlled, and managed to ensure consistent performance across your business." },
              { icon: <Settings />, title: "Call Routing & Control", desc: "Calls are automatically directed through structured flows — including IVR, queues, and department routing — ensuring the right person handles the call every time." },
              { icon: <Layout />, title: "Devices & User Access", desc: "Your team can operate from desk phones, mobile devices, or desktop applications — with a consistent experience across all environments." },
              { icon: <Zap />, title: "Continuity & Failover", desc: "If something fails, calls are automatically redirected to backup paths, ensuring your business remains reachable at all times." },
              { icon: <Activity />, title: "Monitoring & Visibility", desc: "Every call is tracked, measured, and visible — giving you full control over performance, response times, and usage." },
              { icon: <RefreshCcw />, title: "Integration with Business Systems", desc: "Your phone system connects with your internal tools — ensuring communication is aligned with your operations, not isolated from them." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
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
                  <span className="text-[#a56eff]">We don’t provide phones</span> — we take responsibility for how your business communicates.
               </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ 4. CALL FLOW ════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Operational Clarity</span>
               <h2 className="c9-section-heading mb-6">How Your Communication System Works</h2>
               <p className="c9-body mb-10 text-lg">
                  Every call follows a structured path — ensuring consistency, speed, and accountability. From the moment a call enters your system, it is controlled, directed, and tracked — ensuring no gaps, no confusion, and no lost communication.
               </p>
               
               <div className="space-y-6">
                  {[
                    { title: "Incoming Call", text: "Entry into the managed network." },
                    { title: "Call Routing (IVR / Queue)", text: "Automated logic to define the path." },
                    { title: "Assigned Team or User", text: "Delivered to the specific destination." },
                    { title: "Device (Desk / Mobile / Application)", text: "Received on the preferred endpoint." },
                    { title: "Monitoring & Reporting", text: "Tracked for performance visibility." },
                    { title: "Ongoing Support & Optimisation", text: "Continuously improved by C9." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                       <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#5D00D6] shrink-0 mt-1 shadow-sm">
                          <ArrowRight size={14} />
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
                          <p className="text-slate-500 text-[14px] leading-relaxed">{item.text}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="relative">
               <C9VoiceNetworkDiagram />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 4.5. COMMUNICATION LAYER ════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={C}>
          <FadeIn className="max-w-3xl mb-16 mx-auto text-center">
            <span className="c9-eyebrow mb-4">The Communication Layer</span>
            <h2 className="c9-section-heading mb-6">Every Conversation Flows Through Your System</h2>
            <p className="c9-body text-lg text-slate-600">
               Your voice infrastructure is the central nervous system of your business. It is the invisible layer that connects your customers to your team, coordinates your internal operations, and provides executives with measurable visibility.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: <PhoneCall />, 
                title: "Customer Communication", 
                desc: "The frontline experience. Every inbound call is instantly routed, queued, and delivered to the correct team member without friction or delay." 
              },
              { 
                icon: <Users />, 
                title: "Internal Coordination", 
                desc: "Seamless connectivity across sites and departments. Teams transfer calls, manage presence, and collaborate as if they are in the same room." 
              },
              { 
                icon: <Activity />, 
                title: "Visibility & Control", 
                desc: "Total operational oversight. Call volumes, response times, and system health are tracked and presented in clear executive dashboards." 
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
             <div className="inline-block px-8 py-5 bg-slate-900 rounded-full border border-slate-800 shadow-xl">
                <p className="text-[17px] font-bold text-white tracking-wide">
                   This is how your business communicates, responds, and operates.
                </p>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ 5. BUSINESS IMPACT ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1 relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl aspect-[4/3] group">
                  <img src="/images/yealink-phone-4.jpg" alt="Business Impact of Systems" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 to-transparent" />
               </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4 text-rose-600">The Real Impact</span>
               <h2 className="c9-section-heading mb-6">When Your Phone System Fails, It Affects Everything.</h2>
               <p className="c9-body text-lg text-slate-600 mb-8">
                  Your phone system is not just a communication tool — it directly impacts how your business performs.
               </p>
               
               <ul className="space-y-5 mb-10">
                  {[
                    "Missed calls lead to lost revenue.",
                    "Poor routing creates customer frustration.",
                    "Delays reduce team efficiency.",
                    "Downtime disrupts operations."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center">
                        <span className="text-rose-600 text-[14px] font-bold">!</span>
                      </div>
                      <div className="text-[16px] font-bold text-slate-900">{item}</div>
                    </li>
                  ))}
               </ul>

               <div className="p-6 bg-slate-50 border-l-4 border-rose-600 rounded-r-2xl">
                 <p className="text-xl font-bold text-slate-900 italic">
                   "If your communication system is not reliable, your business isn’t either."
                 </p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 6. MULTI-SITE & SCALABILITY ════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Enterprise Scale</span>
               <h2 className="c9-section-heading mb-6">Built for Multi-Site and Growing Businesses.</h2>
               <p className="c9-body mb-10 text-lg">
                  Your communication system operates as a single, unified environment across all locations. Whether you operate from one location or many, your system works the same way — without complexity.
               </p>
               <ul className="space-y-5">
                  {[
                    { t: 'Consistent call handling across sites', icon: <Building2 /> },
                    { t: 'Centralised control and configuration', icon: <Layout /> },
                    { t: 'Seamless expansion as your business grows', icon: <TrendingUp /> }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 text-[#5D00D6]">
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
                   <div key={i} className="bg-white border border-slate-100 rounded-3xl p-8 hover:border-[#5D00D6]/20 transition-all hover:shadow-2xl group shadow-sm">
                       <div className="text-2xl font-bold text-[#5D00D6] mb-1 leading-none tracking-tight">{stat.val}</div>
                       <div className="text-slate-500 font-bold text-[11px] uppercase tracking-widest leading-tight mt-2">{stat.label}</div>
                   </div>
                 ))}
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 7. DEVICE ECOSYSTEM ════════════════════════════════════ */}
      <section className="pt-16 pb-0 bg-white overflow-hidden border-b border-slate-100">
        <div className={C}>
           <FadeIn className="text-center mb-0 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Built on Enterprise-Grade Communication Devices</h3>
              <p className="c9-body text-lg text-slate-600 mb-8">
                Your communication system includes reliable, enterprise-grade devices across all working environments. Devices are fully configured, integrated, and managed as part of your system — not deployed separately.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  "Desk phones for office teams",
                  "Conference devices for collaboration",
                  "Wireless and mobile access for flexibility",
                  "Application-based calling for remote work"
                ].map((item, i) => (
                  <div key={i} className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-full text-[14px] font-bold text-slate-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
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
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Total System Ownership</span>
               <h2 className="c9-section-heading mb-6">One Partner Responsible for Your Communication System.</h2>
               <p className="c9-body mb-6 text-lg">
                  Most businesses deal with multiple vendors for telephony, devices, and support. When issues occur, responsibility becomes unclear.
               </p>
               <p className="c9-body mb-10 text-lg font-bold text-[#5D00D6]">
                  C9 removes that risk.
               </p>
               
               <ul className="space-y-5 mb-10">
                  {[
                    "One provider managing the entire system",
                    "Clear ownership of performance and uptime",
                    "No vendor confusion during incidents"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-[#5D00D6] flex items-center justify-center text-white">
                        <CheckCircle2 size={14} />
                      </div>
                      <div className="text-[16px] font-bold text-slate-900">{item}</div>
                    </li>
                  ))}
               </ul>
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
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1 relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl aspect-[4/3] group">
                  <img 
                    src="/images/yealink-phone-3.jpg" 
                    alt="Stable business communication infrastructure" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                  />
               </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4">The Standard</span>
               <h2 className="c9-section-heading mb-6">Why Businesses Choose C9 for Their Phone Systems.</h2>
               
               <ul className="space-y-5 mb-10">
                  {[
                    "Structured and reliable communication systems",
                    "Clear call routing and control",
                    "Built-in continuity and failover",
                    "Full system visibility and reporting",
                    "Single point of accountability"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <div className="shrink-0 w-2 h-2 rounded-full bg-[#5D00D6]"></div>
                      <div className="text-[16px] font-bold text-slate-900">{item}</div>
                    </li>
                  ))}
               </ul>

               <div className="p-6 bg-[#5D00D6]/5 border-l-4 border-[#5D00D6] rounded-r-2xl">
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
                  Not Sure If Your Phone System Is Working As It Should?
                </h3>
                <p className="text-white/80 mb-10 text-xl max-w-2xl mx-auto">
                  We’ll review your current setup and identify where calls are being missed, delayed, or impacting your operations.
                </p>
                <C9Button className="px-10 h-16 bg-[#5D00D6] text-white hover:bg-[#4d00b3] shadow-xl rounded-full text-lg" asChild>
                  <Link href="#consultation">Request a System Review</Link>
                </C9Button>
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

      <section id="consultation" className="bg-white">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="COMMUNICATION AUDIT"
          title="Ready to eliminate communication risk?"
          description="Book a technical strategy session with our senior engineers to review your national infrastructure and identify missed-call vulnerabilities."
          formTitle="Request an Operational Review"
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
