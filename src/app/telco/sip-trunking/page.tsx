'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Monitor, 
  RefreshCcw, 
  ShieldAlert, 
  PhoneCall, 
  AlertTriangle, 
  PhoneOff, 
  Scale, 
  ServerCog, 
  BarChart3, 
  ArrowRight,
  ChevronRight,
  Database,
  Globe,
  Settings,
  HardDrive
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { ContinueJourney } from '@/components/sections/ContinueJourney';
import { Section } from '@/components/design-system/Section';
import { Button } from '@/components/ui/button';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPER
   ───────────────────────────────────────────────────────── */
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

export default function SipTrunkingPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <Section bg="white" className="pt-12 pb-10 md:pt-16 md:pb-12 overflow-hidden border-b border-slate-100 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[120px] -mr-32 -mt-32 opacity-60 pointer-events-none" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        
        <div className="container mx-auto max-w-[1240px] relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
                 <ServerCog size={13} className="text-[#5D00D6]" />
                 <span className="c9-eyebrow !mb-0 !text-[#5D00D6]">Business Voice Connectivity</span>
              </div>

              <h1 className="c9-hero-title mb-6 !leading-[1.1] text-[#0c1024]">
                 Modernise Your Business Calling Without <span className="text-[#5D00D6]">Operational Disruption.</span>
              </h1>

              <p className="c9-body mb-8 max-w-[620px] text-lg text-slate-700">
                 Replace legacy ISDN and copper phone services with modern managed SIP connectivity. C9 handles the migration of your existing PBX, cloud voice, or Microsoft Teams environment with full number continuity and failover protection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                 <Link href="#consultation-section" className="w-full sm:w-auto">
                   <Button size="lg" className="w-full bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 h-14 text-[14px] font-bold rounded-full shadow-xl shadow-purple-900/20 transition-all hover:scale-[1.02]">
                     Review My SIP Requirements 
                   </Button>
                 </Link>
                 <Link href="#consultation-section" className="w-full sm:w-auto">
                   <Button variant="outline" size="lg" className="w-full border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white px-8 h-14 text-[14px] font-bold rounded-full transition-all">
                     Replace Legacy Voice Services
                   </Button>
                 </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
                 {['Business Continuity', 'Number Continuity', 'Voice Reliability', 'Managed Migration'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                       <CheckCircle2 size={14} className="text-[#5D00D6]" />
                       {item}
                    </div>
                 ))}
              </div>
              
              <div className="mt-8 p-5 bg-slate-50 border border-slate-100 rounded-2xl max-w-[500px]">
                <div className="flex gap-3 items-start">
                   <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mt-0.5 text-[#5D00D6]">
                      <AlertTriangle size={18} />
                   </div>
                   <p className="c9-body !text-[13px] !mb-0 font-bold !text-slate-700">
                     Aging ISDN systems and unreliable providers create hidden business risk. Safely modernise your voice delivery today.
                   </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5] border border-slate-100">
                  <Image
                     src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop"
                     alt="Australian office using existing PBX connected to modern SIP voice services"
                     fill
                     className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                     <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                              <ShieldCheck size={20} />
                           </div>
                           <div>
                              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">Managed Connectivity</div>
                              <div className="text-[16px] font-bold text-slate-900 leading-none">Voice Failover Active</div>
                           </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Voice Core</div>
                           <div className="text-[18px] font-bold text-[#5D00D6] leading-none tracking-tight">Geo-Redundant</div>
                        </div>
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Number Status</div>
                           <div className="text-[18px] font-bold text-emerald-600 leading-none tracking-tight">Protected</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <WpClientTicker />

      {/* 2. IS SIP RIGHT FOR YOU? SECTION */}
      <Section bg="white" className="py-16 md:py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Operational Fit</span>
              <h2 className="c9-section-heading mb-6 text-[#0c1024]">Is SIP Trunking Right for Your Business?</h2>
              <p className="c9-body text-slate-600">
                Replace legacy constraints with modern voice reliability. Identify the strategic drivers for modernising your calling environment.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "You Still Use ISDN", 
                challenge: "Aging ISDN/Copper systems are end-of-life and increasingly unreliable.", 
                impact: "Unexpected outages and high maintenance costs.", 
                solution: "Transition to resilient IP-based voice with C9 managed SIP.",
                icon: AlertTriangle 
              },
              { 
                title: "You Need to Keep Numbers", 
                challenge: "Fear of losing established business phone numbers during migration.", 
                impact: "Loss of customer contact and brand disruption.", 
                solution: "Expert managed number porting ensures full continuity.",
                icon: BarChart3 
              },
              { 
                title: "You Have an Existing PBX", 
                challenge: "Legacy PBX hardware that isn't ready to be fully retired.", 
                impact: "Fragmented systems and limited cloud capability.", 
                solution: "Connect your current PBX to the modern voice core via SIP.",
                icon: Layers 
              },
              { 
                title: "You Need Voice Failover", 
                challenge: "Lack of redundancy in case of local network or provider failure.", 
                impact: "Total communication blackout during an incident.", 
                solution: "Built-in automated failover routing for constant uptime.",
                icon: RefreshCcw 
              },
              { 
                title: "Moving to Teams/Cloud", 
                challenge: "Disconnected systems while transitioning to modern workplace apps.", 
                impact: "Inefficient workflows and user frustration.", 
                solution: "Seamlessly bridge your voice services into Microsoft Teams.",
                icon: Globe 
              },
              { 
                title: "Need Better Call Capacity", 
                challenge: "Scaling limitations with legacy line-based systems.", 
                impact: "Busy signals and lost sales opportunities.", 
                solution: "Instantly scale call capacity to match your business growth.",
                icon: TrendingUp 
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="group bg-slate-50 p-8 rounded-[32px] border border-slate-100 h-full hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="c9-card-title mb-4 text-[#0c1024]">{item.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Operational Challenge</div>
                        <p className="text-[13px] text-slate-600 leading-relaxed">{item.challenge}</p>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Business Impact</div>
                        <p className="text-[13px] text-slate-600 leading-relaxed font-bold">{item.impact}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-100">
                        <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">The SIP Solution</div>
                        <p className="text-[13px] text-slate-700 leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 3. RISK & CONTINUITY BREAK */}
      <section className="relative min-h-[450px] py-20 flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2000&auto=format&fit=crop" 
            alt="Operations manager reviewing voice continuity and call capacity dashboard" 
            fill 
            className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-[3s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="c9-eyebrow !text-[#5D00D6] mb-4 block">Migration Confidence</span>
              <h2 className="c9-section-heading !text-white mb-6">
                Modernising voice delivery shouldn't induce operational anxiety.
              </h2>
              <p className="c9-body !text-slate-300 !text-[18px] border-l-4 border-[#5D00D6] pl-6 max-w-2xl">
                "We execute rigorous migration plans to ensure that your business stays connected at every phase. From number porting to system failover, we own the transition so you can focus on growth."
              </p>
              <div className="mt-10 flex gap-4">
                 <Link href="#consultation-section">
                    <Button className="bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-full px-8 h-14 font-bold">
                       Plan My SIP Migration <ArrowRight size={16} className="ml-2" />
                    </Button>
                 </Link>
                 <Link href="#consultation-section">
                    <Button variant="ghost" className="text-white hover:text-[#a56eff] font-bold h-14">
                       Upgrade My Business Calling <ChevronRight size={16} className="ml-1" />
                    </Button>
                 </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. MIGRATION JOURNEY (ALTERNATING) */}
      <Section bg="gray" className="py-16 md:py-24 border-y border-slate-100 bg-slate-50">
        <div className="container mx-auto max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Voice Modernisation Journey</span>
              <h2 className="c9-section-heading mb-6 text-[#0c1024]">Replacing ISDN Safely.</h2>
              <p className="c9-body text-slate-600">
                A structured path from legacy constraints to modern voice reliability. We manage every step to protect your business continuity.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="left">
                <span className="text-[12px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">PHASE 01: ASSESSMENT</span>
                <h3 className="c9-section-heading !text-2xl md:!text-3xl mb-6 text-[#0c1024]">PBX & Number Audit.</h3>
                <p className="c9-body text-slate-700 mb-8">
                  We conduct a thorough audit of your current PBX hardware, line types, and phone number ranges. Identifying every dependency is critical for a safe migration.
                </p>
                <div className="space-y-4">
                  {[
                    "Legacy PBX compatibility check",
                    "Complete phone number range audit",
                    "Network capacity & latency testing",
                    "Existing contract & porting review"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                      <CheckCircle2 size={16} className="text-[#5D00D6]" /> {item}
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-slate-200">
                  <Image 
                    src="/SIP Failover.png" 
                    alt="Engineer reviewing SIP failover and business voice routing" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 to-transparent" />
                </div>
              </FadeIn>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right" className="lg:order-2">
                <span className="text-[12px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">PHASE 02: FAILOVER PLANNING</span>
                <h3 className="c9-section-heading !text-2xl md:!text-3xl mb-6 text-[#0c1024]">Ensuring Voice Reliability.</h3>
                <p className="c9-body text-slate-700 mb-8">
                  We design redundant voice pathways so your calls never drop. If your primary network fails, our managed SIP core automatically reroutes calls to secondary paths.
                </p>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck size={20} className="text-[#5D00D6]" />
                    <span className="font-bold text-[#0c1024]">Failover Protection</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Automated failover ensures your inbound customer calls reach your team even during local site disasters or internet outages.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="left" className="lg:order-1">
                <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-slate-200">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Business team making reliable customer calls through managed SIP connectivity" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="left">
                <span className="text-[12px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">PHASE 03: MANAGED CUTOVER</span>
                <h3 className="c9-section-heading !text-2xl md:!text-3xl mb-6 text-[#0c1024]">Number Continuity & Go-Live.</h3>
                <p className="c9-body text-slate-700 mb-8">
                  We manage the porting of your existing numbers from legacy ISDN into the SIP core. Our engineers own the go-live process, ensuring a zero-disruption cutover.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 text-center shadow-sm">
                    <div className="text-2xl font-black text-[#5D00D6]">100%</div>
                    <div className="text-[10px] font-bold uppercase text-slate-400">Number Retention</div>
                  </div>
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 text-center shadow-sm">
                    <div className="text-2xl font-black text-[#5D00D6]">ZERO</div>
                    <div className="text-[10px] font-bold uppercase text-slate-400">Migration Downtime</div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-slate-200">
                  <Image 
                    src="/Managed Cutover.png" 
                    alt="Operations manager reviewing voice continuity and call capacity dashboard" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. MID-PAGE CTA BLOCK */}
      <section className="py-20 bg-[#0c1024] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6] opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5D00D6] opacity-5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10 text-center">
          <FadeIn>
            <h2 className="c9-section-heading !text-white mb-6 !text-3xl md:!text-4xl lg:max-w-4xl mx-auto">
              Modernise Business Calling Without Disrupting Operations.
            </h2>
            <p className="c9-body !text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              C9 helps businesses transition from legacy voice services into managed SIP connectivity environments with migration planning, failover support, and operational continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#consultation-section">
                <Button size="lg" className="bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-10 h-16 text-[15px] font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95">
                  Plan My SIP Migration
                </Button>
              </Link>
              <Link href="#consultation-section">
                <Button variant="outline" className="border-2 border-white/20 text-white hover:bg-white hover:text-[#0c1024] px-10 h-16 text-[15px] font-bold rounded-full transition-all">
                   Keep My Existing Business Numbers
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. SUPPORT & VISIBILITY */}
      <Section bg="white" className="py-16 md:py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-[1240px]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-6">
                {[
                  { label: "Accountability", val: "Unified Support", icon: <ShieldCheck /> },
                  { label: "Operations", val: "Full Visibility", icon: <Monitor /> },
                  { label: "Legacy ISDN", val: "Safely Retired", icon: <Layers /> },
                  { label: "Continuity", val: "99.99% Assured", icon: <Activity /> }
                ].map((stat, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-[#5D00D6]/20 transition-all hover:bg-white hover:shadow-xl group">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#5D00D6] mb-5 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300">
                           {stat.icon}
                        </div>
                        <div className="text-xl font-bold text-slate-900 mb-1 leading-none tracking-tight">{stat.val}</div>
                        <div className="text-slate-500 font-bold text-[11px] uppercase tracking-widest leading-tight">{stat.label}</div>
                    </div>
                  </FadeIn>
                ))}
            </div>

            <div className="order-1 lg:order-2">
              <FadeIn direction="right">
                <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Managed Voice Control</span>
                <h2 className="c9-section-heading mb-6 text-[#0c1024]">Accountable Support. No Generic Queues.</h2>
                <p className="c9-body mb-6 text-lg text-[#0c1024] font-bold italic">
                   "We replace executive uncertainty with technical clarity. When voice delivery is managed correctly, it simply works."
                </p>
                <p className="c9-body mb-10 text-slate-600">
                   Stop juggling hardware vendors and carriers. C9 provides a single point of accountability for your entire calling environment — from the core network to your desktop.
                </p>
                <div className="space-y-6">
                  {[
                    { t: 'Improve Voice Reliability', d: 'Carrier-grade voice core with geo-redundant pathways to eliminate single points of failure.' },
                    { t: 'Plan SIP Failover', d: 'Strategic automated routing to secondary networks or mobile devices during local outages.' },
                    { t: 'Replace ISDN Safely', d: 'Expert management of the transition from legacy copper to high-performance IP voice.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                       <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                         <CheckCircle2 size={12} className="text-emerald-600" />
                       </div>
                       <div>
                         <div className="text-[16px] font-bold text-[#0c1024] mb-1">{item.t}</div>
                         <div className="text-[14px] text-slate-500 leading-relaxed">{item.d}</div>
                       </div>
                     </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-slate-100" />
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] text-center relative z-10">
          <FadeIn>
            <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Ready to Modernise?</span>
            <h2 className="c9-section-heading mb-6 !text-4xl lg:!text-5xl text-[#0c1024]">
              Upgrade Legacy Voice Systems With Managed SIP Connectivity.
            </h2>
            <p className="c9-body mb-12 max-w-3xl mx-auto text-lg leading-relaxed text-slate-600">
              C9 helps Australian businesses modernise voice environments while protecting number continuity, business uptime, and operational communication reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#consultation-section">
                <Button size="lg" className="bg-[#5D00D6] text-white hover:bg-[#4d00b3] px-10 h-16 text-[15px] font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-none">
                  Book a SIP Voice Review 
                </Button>
              </Link>
              <Link href="#consultation-section">
                <Button variant="outline" size="lg" className="border-2 border-slate-200 text-[#0c1024] hover:bg-slate-50 px-10 h-16 text-[15px] font-bold rounded-full transition-all">
                  Speak With a SIP Specialist
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60">
               {["ISDN Replacement", "PBX-to-SIP Migration", "Failover Protection", "Number Continuity"].map((badge, i) => (
                 <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900">
                   <CheckCircle2 size={12} className="text-[#5D00D6]" /> {badge}
                 </div>
               ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. RELATED SOLUTIONS */}
      <ContinueJourney 
        title="Voice is Just the Foundation. See the Full Stack."
        description="Reliable communication requires complete infrastructure control. Explore the solutions that integrate seamlessly."
        links={[
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "C9 Phone System", path: "/telco/phone-system" },
          { label: "Inbound Services", path: "/telco/inbound-services" },
          { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" }
        ]}
      />

      {/* 9. CONSULTATION / BOTTOM CTA */}
      <div id="consultation-section" className="bg-slate-50 py-10 border-t border-slate-100">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="SIP VOICE REVIEW"
          title="Talk to C9 About Modernising Your Business Calling."
          description="Interested in replacing legacy ISDN or improving your PBX reliability? Our specialists provide technical strategy and managed migration support."
          formTitle="Request a SIP Voice Proposal"
        />
      </div>

      <WpFAQAndFeedback 
        faqItems={[
          { q: "Can we keep our existing phone numbers?", a: "Yes. We manage the entire number porting process, ensuring you maintain complete continuity with your customers without interruption." },
          { q: "How do you guarantee zero downtime during migration?", a: "We build and test your new SIP pathways alongside your existing infrastructure. Cutover only happens once everything is verified, with active fallback protocols in place." },
          { q: "Does this mean we can get rid of our ISDN lines?", a: "Absolutely. Migrating to SIP Trunking allows you to retire costly legacy ISDN hardware and run your communications over high-performance IP networks." },
          { q: "What happens if our internet goes down?", a: "Our SIP core features automated failover. We can instantly reroute your calls to secondary internet connections, mobile devices, or other offices to ensure your business stays online." }
        ]}
      />
    </main>
  );
}
