'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  AlertTriangle, 
  RefreshCcw, 
  Users, 
  Lock, 
  CheckCircle2, 
  LayoutDashboard, 
  HardDrive, 
  PhoneCall, 
  ArrowRight,
  Settings,
  UserPlus,
  Headphones,
  CheckCircle,
  Smartphone,
  ChevronRight
} from 'lucide-react';

import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { Section } from "@/components/design-system/Section";
import { Button } from "@/components/ui/button";
import { ContinueJourney } from "@/components/sections/ContinueJourney";

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

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

const OrbitalVisual = () => (
  <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-transparent overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="absolute w-[180px] h-[180px] rounded-full border border-gray-300/60" />
        <div className="absolute w-[280px] h-[280px] rounded-full border border-gray-300/40" />
        <div className="absolute w-[380px] h-[380px] rounded-full border border-gray-200/50" />
    </div>
    
    <motion.div 
      className="w-24 h-24 rounded-full bg-[#0c1024] flex items-center justify-center shadow-2xl relative z-10 border-[4px] border-white"
      whileHover={{ scale: 1.05, rotate: 5 }}
    >
      <div className="grid grid-cols-2 gap-1.5 w-10 h-10">
        <div className="bg-[#f25022] w-full h-full rounded-sm" />
        <div className="bg-[#7fbb00] w-full h-full rounded-sm" />
        <div className="bg-[#00a1f1] w-full h-full rounded-sm" />
        <div className="bg-[#ffbb00] w-full h-full rounded-sm" />
      </div>
    </motion.div>

    <motion.div className="absolute inset-0 z-20 flex items-center justify-center" animate={{ rotate: [0, 360] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
      {[
        { src: 'https://api.iconify.design/vscode-icons:file-type-word.svg', label: 'Word', degree: 0 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-excel.svg', label: 'Excel', degree: 45 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-powerpoint.svg', label: 'PowerPoint', degree: 90 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-outlook.svg', label: 'Outlook', degree: 135 },
        { src: 'https://api.iconify.design/logos:microsoft-teams.svg', label: 'Teams', degree: 180 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-vscode.svg', label: 'VS Code', degree: 225 },
        { src: 'https://api.iconify.design/logos:microsoft-azure.svg', label: 'Azure', degree: 270 },
        { src: 'https://api.iconify.design/logos:microsoft-edge.svg', label: 'Edge', degree: 315 }
      ].map((app) => (
        <div key={app.label} className="absolute" style={{ transform: `rotate(${app.degree}deg) translateY(-140px)` }}>
          <motion.div className="w-12 h-12 -ml-6 -mt-6 rounded-xl bg-white shadow-xl border border-gray-100 flex items-center justify-center p-2.5 z-30 transition-all hover:scale-110" animate={{ rotate: [-app.degree, -(360 + app.degree)] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
            <img src={app.src} alt={app.label} className="w-full h-full object-contain pointer-events-none select-none" />
          </motion.div>
        </div>
      ))}
    </motion.div>
  </div>
);

export default function TeamsCallingPage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      
      {/* 1. HERO SECTION */}
      <Section bg="white" className="pt-12 pb-10 md:pt-16 md:pb-12 overflow-hidden border-b border-slate-100 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#5D00D6]/20" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#5D00D6]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-[1240px] relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="max-w-2xl">
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Managed Microsoft Teams Calling</span>
              <h1 className="c9-hero-title text-[#0c1024] mb-6">
                Move Your Business Calling Into Teams — <span className="text-[#5D00D6]">Safely & Seamlessly.</span>
              </h1>
              <p className="c9-body mb-8 max-w-xl text-slate-700">
                Transitioning to Teams Calling shouldn't be a business risk. C9 manages the full migration lifecycle — from number porting and call flow configuration to user onboarding and ongoing support. Modernise your voice environment without operational disruption.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link href="#consultation-section" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 h-14 text-[14px] font-bold rounded-full shadow-xl shadow-[#5D00D6]/20 transition-all hover:scale-[1.02]">
                    Plan My Teams Calling Migration 
                  </Button>
                </Link>
                <Link href="#consultation-section" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white px-8 h-14 text-[14px] font-bold rounded-full transition-all">
                    Move Business Numbers to Teams
                  </Button>
                </Link>
              </div>
              
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                {[
                  { label: 'Carrier-Grade Voice', icon: <PhoneCall size={16} /> },
                  { label: 'Managed Migration', icon: <RefreshCcw size={16} /> },
                  { label: 'SLA-Backed Support', icon: <ShieldCheck size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#5D00D6]">{item.icon}</span>
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-[500px]">
              <OrbitalVisual />
            </div>
          </FadeIn>
        </div>
      </Section>

      <WpClientTicker />

      {/* 2. WHAT C9 MANAGES SECTION */}
      <Section bg="white" className="py-16 md:py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Operational Excellence</span>
              <h2 className="c9-section-heading mb-6 text-[#0c1024]">What C9 Operationally Manages.</h2>
              <p className="c9-body text-slate-600">
                We don't just provide the license. We own the environment. C9 handles the technical complexity so your team can focus on communication, not troubleshooting.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Number Porting", desc: "Expert management of business number transitions to ensure zero downtime during cut-over.", icon: ArrowRight },
              { title: "Call Queues", desc: "Strategic configuration of call distribution to optimise customer service and response times.", icon: Users },
              { title: "Auto Attendants", desc: "Professional IVR and routing design to ensure every caller reaches the right department.", icon: Headphones },
              { title: "Teams Voice Policies", desc: "Custom governance and permissions to control how your business communicates.", icon: Lock },
              { title: "Remote & Mobile Calling", desc: "Enabling secure business voice across any device. Improve hybrid calling outcomes.", icon: Smartphone },
              { title: "Desk Phone Integration", desc: "Certified hardware deployment and management for office environments.", icon: HardDrive },
              { title: "User Onboarding", desc: "Structured training and support to ensure high adoption and user confidence.", icon: UserPlus },
              { title: "Ongoing Support", desc: "Direct access to Australian engineers for escalation and system management.", icon: Settings }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="c9-card-title mb-3 text-[#0c1024]">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 3. TRANSITION PAIN POINTS */}
      <Section bg="gray" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto max-w-[1240px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" 
                  alt="IT and operations team reviewing Teams Calling migration" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl">
                  <p className="text-white text-sm font-medium italic">
                    "Safe migration is a requirement, not a feature. We move business numbers and workflows with zero tolerance for downtime."
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Overcoming Migration Fear</span>
              <h2 className="c9-section-heading mb-8 text-[#0c1024]">Why Businesses Hesitate (And How We Solve It).</h2>
              <div className="space-y-8">
                {[
                  { title: "Old PBX Frustrations", desc: "Moving away from rigid legacy hardware to a flexible cloud environment without losing core features.", icon: AlertTriangle },
                  { title: "Disconnected Remote Users", desc: "Unifying mobile and office staff into a single, high-quality voice ecosystem.", icon: Smartphone },
                  { title: "Poor Teams Voice Quality", desc: "Optimising network paths and carrier connections to guarantee crystal-clear calling.", icon: CheckCircle },
                  { title: "Number Porting Anxiety", desc: "Managed porting processes that ensure you never lose contact with your customers.", icon: RefreshCcw }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0 mt-1 text-[#5D00D6]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0c1024] mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10">
                <div className="flex flex-wrap gap-4">
                  <Link href="#consultation-section">
                    <Button size="lg" className="bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 rounded-full h-14">
                      Plan a Teams Migration <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                  <Link href="#consultation-section">
                    <Button variant="ghost" className="text-[#5D00D6] hover:text-[#4d00b3] font-bold">
                      Improve Teams Voice Quality <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 4. MID-PAGE CTA BLOCK */}
      <section className="py-20 bg-[#0c1024] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6] opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5D00D6] opacity-5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10 text-center">
          <FadeIn>
            <h2 className="c9-section-heading !text-white mb-6 !text-3xl md:!text-4xl lg:max-w-4xl mx-auto">
              Move Business Calling Into Microsoft Teams Without Operational Disruption.
            </h2>
            <p className="c9-body !text-slate-400 mb-10 max-w-2xl mx-auto">
              Our specialists review your existing environment to map out a safe, staged transition path.
            </p>
            <Link href="#consultation-section">
              <Button size="lg" className="bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-10 h-16 text-[15px] font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95">
                Review My Existing Voice Environment
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 5. MIGRATION JOURNEY (ALTERNATING) */}
      <Section bg="white" className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">The Migration Framework</span>
              <h2 className="c9-section-heading mb-6 text-[#0c1024]">A Controlled Journey to Modern Voice.</h2>
              <p className="c9-body text-slate-600">
                We remove the biggest objection: the fear of change. Our battle-tested framework ensures a safe transition for enterprise voice.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="left">
                <span className="text-[12px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">PHASE 01: ASSESSMENT</span>
                <h3 className="c9-section-heading !text-2xl md:!text-3xl mb-6 text-[#0c1024]">Audit & Network Readiness.</h3>
                <p className="c9-body text-slate-700 mb-8">
                  We conduct a rigorous audit of your current call flows, hardware requirements, and network capabilities. Understanding your environment is the first step in preventing disruption.
                </p>
                <ul className="space-y-4">
                  {[
                    "Network bandwidth & latency testing",
                    "Device & hardware compatibility audit",
                    "Call flow & IVR mapping",
                    "Number porting eligibility check"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                      <CheckCircle size={16} className="text-[#5D00D6]" /> {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn direction="right">
                <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                    alt="IT team reviewing Teams Calling migration plan" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right" className="lg:order-2">
                <span className="text-[12px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">PHASE 02: PLANNING</span>
                <h3 className="c9-section-heading !text-2xl md:!text-3xl mb-6 text-[#0c1024]">Custom Logic & Contingency.</h3>
                <p className="c9-body text-slate-700 mb-8">
                  We design your Teams Voice policies and routing logic to match your operational needs. Every migration includes a strict contingency plan to protect your customer continuity.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck size={20} className="text-[#5D00D6]" />
                    <span className="font-bold text-slate-900">Safety First Strategy</span>
                  </div>
                  <p className="text-sm text-slate-600">Zero-downtime engineering ensures your existing system remains active until the new environment is fully validated.</p>
                </div>
              </FadeIn>
              <FadeIn direction="left" className="lg:order-1">
                <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
                  <Image 
                    src="/Planning.png" 
                    alt="Customer service team receiving calls through Microsoft Teams" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="left">
                <span className="text-[12px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">PHASE 03: ROLLOUT</span>
                <h3 className="c9-section-heading !text-2xl md:!text-3xl mb-6 text-[#0c1024]">Managed Cut-Over.</h3>
                <p className="c9-body text-slate-700 mb-8">
                  Our engineers manage the precise number migration and cut-over process. We handle the heavy lifting, ensuring your numbers land correctly in Teams with zero communication blackouts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xl font-black text-[#5D00D6]">100%</div>
                    <div className="text-[10px] font-bold uppercase text-slate-500">Porting Success</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xl font-black text-[#5D00D6]">ZERO</div>
                    <div className="text-[10px] font-bold uppercase text-slate-500">Service Gaps</div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Business users collaborating through Teams voice" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. SUPPORT & PROOF SECTION */}
      <Section bg="dark" className="py-20 bg-[#0c1024] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/20 to-transparent opacity-40" />
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <FadeIn>
                <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Accountable Engineering</span>
                <h2 className="c9-section-heading !text-white mb-8">Ongoing Support, Not Just Implementation.</h2>
                <p className="c9-body !text-slate-400 mb-10">
                  C9 provides a single point of truth for your voice environment. We own the escalation, the management, and the uptime — so you never have to deal with Microsoft support directly.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { title: "Escalation Ownership", desc: "We manage the carrier and Microsoft escalation path for you.", icon: ShieldCheck },
                    { title: "Network Optimisation", desc: "End-to-end path testing to ensure call quality and reliability.", icon: Activity },
                    { title: "Australian Support", desc: "Direct access to our local engineering team for all voice issues.", icon: Headphones },
                    { title: "Direct Peering", desc: "High-performance voice transit for crystal clear audio quality.", icon: Zap }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex gap-4">
                        <div className="text-[#5D00D6] shrink-0 mt-1"><Icon size={18} /></div>
                        <div>
                          <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="right">
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 shadow-2xl">
                <span className="text-[11px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-6 block">SUCCESSFUL MIGRATIONS</span>
                <h3 className="text-2xl font-bold text-white mb-6">Proven Operational Impact</h3>
                <div className="space-y-6">
                  {[
                    { label: "Successful Teams Migrations", val: "500+" },
                    { label: "Remote Users Enabled", val: "10,000+" },
                    { label: "Avg. Implementation Time", val: "2 Weeks" },
                    { label: "Support Resolution Rate", val: "98.4%" }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-0">
                      <span className="text-sm font-semibold text-white/80">{row.label}</span>
                      <span className="text-sm font-black text-[#5D00D6] bg-[#5D00D6]/10 px-3 py-1 rounded-full">{row.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                   <p className="text-xs text-slate-400 leading-relaxed italic">
                     "C9 took the complexity out of our move to Teams. We didn't lose a single call during the transition, and the ongoing support has been second to none."
                   </p>
                   <div className="mt-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800" />
                      <div>
                        <div className="text-[10px] font-bold text-white">Operations Director</div>
                        <div className="text-[10px] text-slate-500">Australian Logistics Firm</div>
                      </div>
                   </div>
                </div>
              </div>
            </FadeIn>
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
              Modernise Business Calling With Managed Teams Voice.
            </h2>
            <p className="c9-body mb-12 max-w-3xl mx-auto text-lg leading-relaxed text-slate-600">
              C9 helps Australian businesses migrate, configure, support, and manage Microsoft Teams Calling environments with minimal disruption and full operational accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#consultation-section">
                <Button size="lg" className="bg-[#5D00D6] text-white hover:bg-[#4d00b3] px-10 h-16 text-[15px] font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-none">
                  Book a Teams Voice Migration Review 
                </Button>
              </Link>
              <Link href="#consultation-section">
                <Button variant="outline" size="lg" className="border-2 border-slate-200 text-[#0c1024] hover:bg-slate-50 px-10 h-16 text-[15px] font-bold rounded-full transition-all">
                  Speak With a Teams Calling Specialist
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
               {/* Small badge style trust indicators */}
               {["Microsoft Solutions Partner", "Carrier-Grade Core", "99.99% Uptime SLA", "24/7 Managed Support"].map((badge, i) => (
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
        title="Teams Calling Is One Piece. Here's the Full Stack."
        description="Most businesses that move to Teams Calling also consolidate their broader communication infrastructure. These are the services that complete the picture."
        links={[
            { label: "C9 Phone System", path: "/telco/phone-system" },
            { label: "SIP Trunking Solutions", path: "/telco/sip-trunking" },
            { label: "Cloud Contact Centre", path: "/telco/contact-centre" },
            { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" }
        ]}
      />

      <WpFAQAndFeedback />

      {/* 9. CONSULTATION / BOTTOM CTA */}
      <div id="consultation-section" className="bg-slate-50 py-10">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="TEAMS CALLING CONTINUITY"
          title="Talk to C9 About Teams Calling Built for Business Continuity."
          description="Interested in moving your telephony to Microsoft Teams safely? Our specialists provide seamless migration and accountable engineering support."
          formTitle="Request Teams Calling Proposal"
        />
      </div>

    </main>
  );
}
