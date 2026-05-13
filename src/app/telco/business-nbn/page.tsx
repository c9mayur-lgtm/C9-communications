'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wifi, ShieldAlert, Activity, Users, CheckCircle2, Zap, Clock, Layers, ShieldCheck, Building2, TrendingUp, Server, Smartphone, PhoneCall, Monitor, CheckCircle } from 'lucide-react';
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

export default function BusinessNbnPage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      
      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className={`${C} relative z-10`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
                   <Activity size={13} className="text-[#5D00D6]" />
                   <span className="c9-eyebrow !mb-0 text-[#5D00D6]">SMB Connectivity Operations</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                 <h1 className="c9-hero-title mb-6">
                    Reliable Business nbn™ That Protects Your <span className="text-[#5D00D6]">Bottom Line.</span>
                 </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                 <p className="c9-body mb-8 max-w-[580px] text-lg">
                    Stop accepting downtime as a cost of business. C9 provides the internet reliability and provider accountability needed to keep your POS, cloud apps, and voice systems live consistently.
                 </p>
              </FadeIn>

              <FadeIn delay={0.22}>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                    {[
                       'Accountable provider ownership',
                       'Proactive link monitoring',
                       'Automated backup protection',
                       'Australian senior support'
                    ].map((item) => (
                       <div key={item} className="flex items-center gap-3">
                          <CheckCircle size={12} className="text-[#5D00D6] shrink-0" />
                          <span className="text-slate-700 font-bold text-[14px]">{item}</span>
                       </div>
                    ))}
                 </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <C9Button className="px-9 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full font-bold" asChild>
                      <Link href="#plans">Compare Business nbn Plans</Link>
                    </C9Button>
                    <C9Button variant="outline" className="px-9 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white font-bold" asChild>
                      <Link href="#consultation-section">Check Business nbn Availability</Link>
                    </C9Button>
                 </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
               <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
                  <img
                     src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000"
                     alt="Operational IT Center"
                     className="w-full h-full object-cover object-top duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-xl">
                     <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Network State</span>
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active & Secure
                        </span>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Visibility</div>
                           <div className="text-[14px] font-bold text-slate-900 leading-none">Full Access ✓</div>
                        </div>
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Failover</div>
                           <div className="text-[14px] font-bold text-slate-900 leading-none">Ready</div>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WpClientTicker />

      {/* ══ 2. WHY BUSINESSES LEAVE THEIR CURRENT PROVIDER ═════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1">
               <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 aspect-square max-w-md mx-auto lg:max-w-none">
                  {/* [IMAGE PLACEHOLDER: Retail business owner frustrated with EFTPOS downtime or slow POS transactions] */}
                  <img 
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2000&auto=format&fit=crop" 
                    alt="Small business owner facing operational delays due to network instability" 
                    className="w-full h-full object-cover grayscale object-center duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-rose-500/10 mix-blend-overlay" />
                  <div className="absolute top-6 right-6 bg-white/95 p-6 rounded-2xl shadow-xl border border-rose-100">
                    <div className="flex items-center gap-2 text-rose-600 font-bold text-[10px] uppercase tracking-widest mb-1">
                       <ShieldAlert size={14} /> Operational Risk
                    </div>
                    <div className="text-xl font-bold text-slate-900">Lost Sales & POS Lag</div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="right" className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4">The Standard Telco Trap</span>
               <h2 className="c9-section-heading mb-6">
                  Why Generic Internet Links Create Business Interruption.
               </h2>
               <div className="space-y-6 mb-8">
                  {[
                     { title: 'EFTPOS & Payment Downtime', desc: 'Single-link setups leave your revenue exposed. If your internet drops, you can\'t take payments.' },
                     { title: 'Disconnected Teams Calls', desc: 'Inconsistent upload speeds lead to jitter, echo, and dropped client meetings.' },
                     { title: 'Vendor Blame Shifting', desc: 'Waiting in hours-long queues just to have a provider blame your router while your business stays offline.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 mt-0.5">
                           <span className="w-2 h-2 rounded-full bg-rose-500" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
                           <p className="text-slate-500 text-[16px] leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm mb-6">
                  <p className="text-slate-900 font-bold text-[18px]">
                     Unreliable providers cost you more than just a monthly fee. C9 restores business uptime.
                  </p>
               </div>
               <C9Button className="h-14 px-8 rounded-full bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl text-white font-bold" asChild>
                 <Link href="#consultation-section">Replace My Existing Provider</Link>
               </C9Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 3. HOW C9 SOLVES IT (FAILOVER & MIGRATION) ══════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className={C}>
          <FadeIn className="text-center mb-16">
            <span className="c9-eyebrow mb-4">Failover & Migration Confidence</span>
            <h2 className="c9-section-heading">Never Rely on a Single Connection Again.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap />, title: "Automated Backup Internet", desc: "If your nbn™ drops, our 4G/5G failover kicks in instantly. Your EFTPOS and cloud apps never lose sync." },
              { icon: <Activity />, title: "Continuous Monitoring", desc: "Our Australian team monitors your line for latency and packet loss, resolving issues before they impact your staff." },
              { icon: <Users />, title: "Provider Accountability", desc: "Stop dealing with carrier call centers. We manage the escalations and coordinate with nbn™ co so you don't have to." },
              { icon: <Clock />, title: "Risk-Managed Migration", desc: "Switching to C9 is a controlled process. We plan the takeover, coordinate the cutover, and validate failover for a safe transition." },
              { icon: <ShieldCheck />, title: "Stable Business Connectivity", desc: "Business-grade nbn™ optimized for high-priority voice and data traffic, ensuring professional call quality." },
              { icon: <Layers />, title: "Centralized Management", desc: "Bring your internet, Teams calling, and support into one accountable partnership with a single local bill." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-xl transition-all text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-5 transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="c9-card-title mb-2 text-[18px]">{item.title}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. QUALIFICATION ═════════════════════════ */}
      <section id="qualification" className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Qualification Engine</span>
               <h2 className="c9-section-heading mb-6">
                  Not Sure Which Setup Your Business Needs?
               </h2>
               <div className="space-y-4 mb-8">
                 <p className="text-slate-600 font-medium">Getting the right connectivity means understanding your operational load:</p>
                  {[
                     "Staff Count: Are you managing 5, 20, or 50+ connected devices?",
                     "Upload Capacity: Do you sync large cloud backups or video files?",
                     "VoIP Quality: Is your current internet causing echo or jitter on calls?",
                     "Revenue Risk: How many sales are lost if your POS/EFTPOS goes offline?",
                     "Cloud Reliance: Does your ERP or CRM require 100% stable uptime?"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                       <CheckCircle size={18} className="text-[#5D00D6] shrink-0 mt-0.5" />
                       <span className="text-slate-700 font-bold">{item}</span>
                    </div>
                  ))}
               </div>
               <C9Button className="h-14 px-8 rounded-full bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl text-white font-bold" asChild>
                  <Link href="#plans">Compare nbn Business Plans</Link>
               </C9Button>
            </FadeIn>

            <FadeIn direction="right" className="bg-[#0c1024] p-10 lg:p-14 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
               <div className="relative z-10">
                  {/* [IMAGE PLACEHOLDER: Modern Australian office environment with staff collaborating on Teams and cloud applications] */}
                  <h2 className="c9-section-heading !text-white mb-6 leading-tight">Identify Your <br/> Connectivity Gaps.</h2>
                  <p className="c9-body !text-white/60 mb-10 text-lg">
                    Speed alone is not a strategy. Let our engineers audit your environment and architect a resilient business stack.
                  </p>
                  <C9Button className="w-full h-14 bg-white text-[#5D00D6] hover:bg-slate-100 rounded-full shadow-2xl font-bold" asChild>
                    <Link href="#consultation-section">Plan My Connectivity Upgrade</Link>
                  </C9Button>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 4.5. SMALL BUSINESS NBN PLANS ════════════════════════════ */}
      <section id="plans" className="py-16 lg:py-24 bg-white border-y border-slate-100">
        <div className={C}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4">Connectivity Options</span>
              <h2 className="c9-section-heading mb-6">Business nbn™ Plans</h2>
              <p className="c9-body text-lg mb-8 text-slate-600">
                Business-grade setups optimized for VoIP, cloud apps, and continuous uptime.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {[
              { 
                name: "Standard Business", speed: "100/40", typical: "99 Mbps", price: "99", 
                ideal: "Retail & Small Offices (1-5 staff)",
                voip: "Professional VoIP Ready",
                cloud: "Standard 365 / G-Suite",
                pos: "EFTPOS & Merchant Priority",
                use: "Daily business operations"
              },
              { 
                name: "High Performance", speed: "250/100", typical: "248 Mbps", price: "149", popular: true,
                ideal: "Growing Professional Teams (5-20 staff)",
                voip: "Microsoft Teams Optimized",
                cloud: "Heavy Cloud & File Syncing",
                pos: "POS + Staff & Guest Wi-Fi",
                use: "High-volume data & video"
              },
              { 
                name: "Enterprise nbn", speed: "1000/400", typical: "600 Mbps", price: "POA",
                ideal: "Warehousing & Large Offices (20+ staff)",
                voip: "High-Density SIP Trunks",
                cloud: "Critical Offsite Backups",
                pos: "Multi-site VPN Infrastructure",
                use: "Enterprise workloads"
              }
            ].map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`bg-white border rounded-[24px] p-8 transition-all relative flex flex-col ${plan.popular ? 'border-[#5D00D6] shadow-xl shadow-purple-900/10 ring-1 ring-[#5D00D6]' : 'border-slate-100 hover:border-[#5D00D6]/30 hover:shadow-xl'}`}>
                {plan.popular && (
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5D00D6] text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest whitespace-nowrap rounded-full">
                      Optimized for Teams
                   </div>
                )}
                
                <div className="text-[#5D00D6] font-bold uppercase tracking-widest text-[11px] mb-2">{plan.name}</div>
                <h3 className="text-[28px] font-bold text-slate-900 mb-6 leading-none tracking-tight">{plan.speed}</h3>
                
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                   {plan.price !== 'POA' && <span className="text-slate-400 font-bold">$</span>}
                   <span className="text-[32px] font-bold text-slate-900 tracking-tight leading-none">{plan.price}</span>
                   {plan.price !== 'POA' && <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest ml-1">/mo</span>}
                </div>
                
                <div className="flex-1 space-y-4 mb-8">
                   <div className="text-[12px] font-bold text-slate-800 bg-slate-50 p-3 rounded-lg text-center leading-snug">
                     Ideal for: {plan.ideal}
                   </div>
                  {[
                    `Cloud: ${plan.cloud}`,
                    `Voice: ${plan.voip}`,
                    `POS: ${plan.pos}`,
                    `Suitability: ${plan.use}`
                  ].map((feat, j) => (
                    <div key={j} className="flex items-start gap-3 text-[14px] text-slate-600 font-medium">
                      <CheckCircle2 size={16} className="text-[#5D00D6] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                
                <C9Button variant={plan.popular ? "default" : "outline"} className={`w-full justify-center rounded-full h-12 font-bold ${plan.popular ? 'bg-[#5D00D6] hover:bg-[#4d00b3] text-white border-transparent' : 'bg-white border-slate-200 text-slate-700 hover:border-[#5D00D6] hover:text-[#5D00D6]'}`} asChild>
                  <Link href="#consultation-section">Check Availability</Link>
                </C9Button>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mb-20">
             <p className="text-[13px] font-bold text-slate-500 tracking-widest uppercase">
                All plans are delivered with C9 management, monitoring, and support — ensuring performance, reliability, and fast issue resolution.
             </p>
          </FadeIn>

          {/* ── CTA AFTER PLANS ── */}
          <div className="text-center max-w-2xl mx-auto">
             <FadeIn>
                <h3 className="c9-section-heading mb-4">Want Total Continuity? Add Failover.</h3>
                <p className="c9-body text-slate-600 mb-8">
                   Pair any business nbn™ connection with our 4G/5G backup link to ensure your EFTPOS and internet never go offline.
                </p>
                <C9Button className="px-10 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-full shadow-xl shadow-purple-900/20 font-bold" asChild>
                   <Link href="#consultation-section">Add Backup Internet Protection</Link>
                </C9Button>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 5. WHEN THINGS GO WRONG ══════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        <div className={C}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <span className="c9-eyebrow !text-[#a56eff] mb-4">The Accountability Layer</span>
              <h2 className="c9-section-heading !text-white mb-6">
                When Things Go Wrong, Who Owns the Outcome?
              </h2>
              <p className="c9-body text-white/70">
                Generic providers leave you waiting in queues while vendors blame each other. C9 removes that layer entirely by taking absolute ownership.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Direct Engineer Access", text: "Speak directly to a senior Australian engineer who knows your environment. No junior scripts." },
               { title: "Proactive Response", text: "We often detect faults via our NOC before you do, initiating restoration before the business is impacted." },
               { title: "Vendor Orchestration", text: "We handle all carriers and hardware vendors. We don't hand you off; we fix the problem end-to-end." }
             ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-white/60 text-[16px] leading-relaxed">{item.text}</p>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* ══ 6. BUSINESS OUTCOMES / PROOF ═════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <FadeIn direction="left">
                <span className="c9-eyebrow mb-4">Measurable Impact</span>
                <h2 className="c9-section-heading mb-6">Predictable Connectivity. Predictable Revenue.</h2>
                <p className="c9-body mb-10 text-slate-600">
                  When you shift from a generic connection to a managed environment, the outcomes are immediate and commercially significant.
                </p>

                <div className="grid grid-cols-2 gap-4">
                   {[
                     { label: "Uptime Confidence", val: "99.9%" },
                     { label: "Install Readiness", val: "Day 1" },
                     { label: "Vendor Management", val: "Single Owner" },
                     { label: "Accountability", val: "Absolute" }
                   ].map((stat, i) => (
                     <div key={i} className="bg-slate-50/80 border border-slate-100 rounded-[32px] p-8 hover:bg-white hover:border-[#5D00D6]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#5D00D6]/10">
                        <div className="text-3xl font-bold text-[#5D00D6] mb-1 leading-none tracking-tight duration-500">{stat.val}</div>
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
                        tag: 'RETAIL & POS',
                        title: 'Fashion Boutique Restores Uptime',
                        desc: "A boutique retail group faced constant POS lag and EFTPOS failures. C9 implemented managed nbn™ with 4G failover. Result: Zero lost sales during peak periods.",
                        img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Stability Restored'
                      },
                      {
                        tag: 'WAREHOUSE OPS',
                        title: 'Logistics Center Migration',
                        desc: "A busy logistics hub was managing fragmented internet across multiple buildings. C9 coordinated a structured cutover with validated backup. Result: Zero operational disruption.",
                        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Seamless Takeover'
                      },
                      {
                        tag: 'PROFESSIONAL SERVICES',
                        title: 'Accounting Firm Voice Continuity',
                        desc: "A growing accounting practice suffered from echo and jitter on Teams calls. C9 optimized the nbn™ path for high-priority voice. Result: Professional call quality restored.",
                        img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Voice Optimized'
                      }
                    ]}
                  />
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 7. FINAL CTA ═════════════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
        <div className={C}>
           <div className="bg-[#5D00D6] rounded-[48px] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/40 text-center">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px] -mr-64 -mt-64" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-[0.05] rounded-full blur-[80px] -ml-32 -mb-32" />
              
              <div className="relative z-10">
                <span className="c9-eyebrow !text-white/80 mb-4">Operational Continuity</span>
                <h2 className="c9-section-heading !text-white mb-6">Replace Your Existing Provider <br/> With Absolute Accountability</h2>
                <p className="c9-body !text-white/70 mb-10 max-w-2xl mx-auto text-lg">
                  Stop accepting downtime as a cost of business. Partner with a communications leader who takes full ownership of your business uptime.
                </p>
                <C9Button className="px-10 h-16 bg-white text-[#5D00D6] hover:bg-slate-50 shadow-xl rounded-full text-lg font-bold" asChild>
                  <Link href="#consultation-section">Plan My Connectivity Upgrade</Link>
                </C9Button>
              </div>
           </div>
        </div>
      </section>

      {/* ══ 8. RELATED SOLUTIONS ═════════════════════════════════════ */}
      <ContinueJourney 
        title="Connectivity Is the Foundation. Here's What Runs on Top."
        description="Businesses that lock in reliable nbn™ typically consolidate their voice, mobile, and IT infrastructure next. These are the services that complete a resilient business stack."
        links={[
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "Business Mobile Fleet", path: "/telco/mobile-plans" },
          { label: "Fast Fibre", path: "/telco/fast-fibre" },
          { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" }
        ]} 
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="GET CONNECTED"
          title="Ready for internet that just works?"
          description="Speak with an expert about your business needs. We'll audit your address and recommend the most reliable connection for your team."
          formTitle="Request Connectivity Audit"
        />
      </section>

      <WpFAQAndFeedback 
        faqItems={[
          { q: "How long does a typical business nbn install take?", a: "Standard installs are usually completed in 2-5 business days. For new sites requiring nbn construction, we manage the entire process and provide interim connectivity to get you live on Day 1." },
          { q: "Do you offer backup connectivity?", a: "Yes. Every C9 business connection can be paired with an automated 4G or 5G failover link. If the primary line ever drops, your operations stay online." },
          { q: "Who provides support if my internet goes down?", a: "You call C9 directly. You'll speak to a senior Australian engineer who owns the ticket until it's resolved. We handle all carrier coordination." }
        ]}
      />
    </main>
  );
}
