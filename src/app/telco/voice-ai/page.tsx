'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Users, 
  Clock, 
  MessageSquare, 
  Zap, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Settings,
  Database,
  Network,
  Globe,
  Play,
  Cpu,
  Layers,
  Repeat,
  Search,
  Building2,
  Briefcase,
  Smartphone,
  Headphones
} from 'lucide-react';

import { C9Button } from '@/components/design-system/C9Button';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { ContinueJourney } from '@/components/sections/ContinueJourney';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { LeadCaptureModal } from '@/components/modals/LeadCaptureModal';

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

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

/* ─────────────────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────────────────── */
export default function VoiceAiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState('qualification');

  const demos = {
    qualification: {
      title: "Lead Qualification",
      role: "Buyer Assistant",
      tags: ["Real-Time Booking", "Lead Qualification"],
      description: "Identify buyer preferences, verify budget and timeline, and book direct agent consultations — all in one conversation.",
      greeting: "Hey there! This is Paul from C9 Real Estate — how're you doing today?",
      logic: "Qualify if buyer has realistic location/budget and plans to buy within 6 months. Otherwise, provide resource links."
    },
    receptionist: {
      title: "AI Receptionist",
      role: "Front Desk Assistant",
      tags: ["24/7 Answering", "Smart Routing"],
      description: "Manage dinner reservations, handle inbound enquiries, and capture leads after hours with natural language understanding.",
      greeting: "Welcome to Gourmet Table, this is Laura. I'm here to help you with reservations today.",
      logic: "Verify party size and availability against live API. Send confirmation SMS immediately upon booking."
    },
    healthcare: {
      title: "Healthcare Intake",
      role: "Patient Coordinator",
      tags: ["HIPAA Compliant", "EHR Sync"],
      description: "Streamline patient scheduling, reschedule appointments, and handle lab-result enquiries securely and efficiently.",
      greeting: "Hello, you've reached Harmony Wellness Group. This is Jessica, how can I assist with your care today?",
      logic: "Verify identity, check provider availability across 3 locations, and update EHR records in real-time."
    }
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION — Dark, High-Tech, Aggressive */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-[#0c1024]">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c1024]/50 to-[#0c1024]" />
        
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#5D00D6]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-[#5D00D6]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto max-w-[1240px] relative z-10 px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/10 border border-[#5D00D6]/30 mb-8 backdrop-blur-sm">
                 <Bot size={14} className="text-[#5D00D6]" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5D00D6]">Enterprise Call Automation</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-[44px] md:text-[84px] font-bold leading-[1] text-white tracking-tighter mb-8 max-w-4xl">
                Enterprise-Ready <span className="text-[#5D00D6]">Voice AI Agents</span> for Automated Calls.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-medium">
                Deploy custom, low-latency AI agents to scale sales, support, and operations. Synthflow-grade performance with C9's carrier-grade reliability.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                 <C9Button 
                   size="lg" 
                   className="w-full sm:w-auto bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-10 h-16 text-base font-bold rounded-full shadow-2xl shadow-purple-900/40"
                   onClick={() => setIsModalOpen(true)}
                 >
                   Start Building For Free
                 </C9Button>
                 <Link href="#demos" className="w-full sm:w-auto">
                    <C9Button variant="outline" size="lg" className="w-full border-white/20 text-white hover:bg-white/5 px-10 h-16 text-base font-bold rounded-full backdrop-blur-sm">
                      Hear AI in Action
                    </C9Button>
                 </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. LOGO TICKER */}
      <section className="py-12 border-b border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Powering Conversations For Global Leaders</p>
          <WpClientTicker />
        </div>
      </section>

      {/* 2.5 STATS BAR — From User Screenshot */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-[1240px] px-6">
          <div className="bg-white rounded-[40px] border border-slate-100 shadow-[0_32px_64px_-12px_rgba(93,0,214,0.06)] p-10 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
             {[
               { label: '65M+', title: 'Customer Calls', desc: 'Proven voice AI performance across real, high-volume phone operations.' },
               { label: '4M+', title: 'Hours Saved', desc: 'Less time on manual calls. More time for growth, sales, and support.' },
               { label: '+35%', title: 'Answered Calls', desc: 'Voice agents respond instantly — no hold music, no missed opportunities.' },
               { label: '99.99%', title: 'Uptime', desc: 'AI voice agents your business can rely on, every minute of every day.' }
             ].map((stat, idx) => (
               <div key={idx} className="space-y-4">
                 <div className="text-[44px] md:text-[56px] font-bold text-[#5D00D6] leading-none tracking-tighter">{stat.label}</div>
                 <h4 className="text-lg font-bold text-[#0c1024]">{stat.title}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed">{stat.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE DEMO SECTION */}
      <section id="demos" className="py-24 md:py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#5D00D6] font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Interactive Showroom</span>
              <h2 className="text-[36px] md:text-[56px] font-bold text-[#0c1024] leading-[1] tracking-tighter">Hear AI Voice Agents in Action</h2>
            </div>
            <div className="flex gap-2 p-1 bg-white rounded-full border border-slate-200 shadow-sm">
              {Object.keys(demos).map((id) => (
                <button
                  key={id}
                  onClick={() => setActiveDemo(id)}
                  className={cn(
                    "px-6 py-2 rounded-full text-xs font-bold transition-all",
                    activeDemo === id ? "bg-[#5D00D6] text-white shadow-lg" : "text-slate-500 hover:bg-slate-50"
                  )}
                >
                  {demos[id as keyof typeof demos].title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo Content */}
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-wrap gap-2">
                    {demos[activeDemo as keyof typeof demos].tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[#5D00D6]/5 text-[#5D00D6] rounded-full text-[10px] font-black uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-[#0c1024] leading-tight tracking-tight">{demos[activeDemo as keyof typeof demos].title} · <span className="text-slate-400 font-medium">{demos[activeDemo as keyof typeof demos].role}</span></h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {demos[activeDemo as keyof typeof demos].description}
                  </p>
                  
                  <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#5D00D6]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#5D00D6] flex items-center justify-center text-white shadow-lg">
                        <Play size={20} fill="currentColor" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Live Preview</div>
                        <div className="text-sm font-bold text-[#0c1024]">Call the Agent Now</div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <div className="text-[10px] font-black text-[#5D00D6] uppercase tracking-widest mb-3">AI Greeting</div>
                      <p className="text-slate-800 italic font-medium leading-relaxed">"{demos[activeDemo as keyof typeof demos].greeting}"</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Visual Logic Board */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#5D00D6]/5 rounded-3xl -rotate-2 scale-105 pointer-events-none" />
              <div className="bg-[#0c1024] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Cpu size={24} className="text-[#5D00D6]" />
                    <span className="text-white font-bold tracking-tight">Agent Logic Board</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active System</div>
                </div>

                <div className="space-y-6">
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                       <span className="text-xs font-bold text-white uppercase tracking-widest">Natural Language Understanding</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Processing intent and context in real-time. Sub-100ms latency on transcription and response generation.
                    </p>
                  </div>

                  <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                    <div className="flex items-center gap-2">
                       <Repeat size={14} className="text-[#5D00D6]" />
                       <span className="text-xs font-bold text-white uppercase tracking-widest">Conditional Routing Logic</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {demos[activeDemo as keyof typeof demos].logic}
                    </p>
                  </div>

                  <div className="pt-4">
                    <C9Button className="w-full bg-white text-[#0c1024] hover:bg-slate-100 h-14 rounded-xl font-bold flex items-center justify-center gap-2 group">
                       View Visual Flow Designer <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </C9Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 END-TO-END SOLUTION — The Operating System */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
             <div className="w-full lg:w-1/2">
                <span className="text-[#5D00D6] font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Unified Infrastructure</span>
                <h2 className="text-[36px] md:text-[56px] font-bold text-[#0c1024] leading-[1] tracking-tighter mb-8">End-to-End Voice AI Operating System</h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
                  Automate, manage, and scale thousands of calls from one unified Voice AI Operating System. Design, launch, and operate Voice AI Agents with configurable workflows, enterprise telephony, and deep analytics.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                   {[
                     { icon: Smartphone, title: 'Multi-Agent System', desc: 'Architect modular voice flows where subflows act as specialized agents.' },
                     { icon: ShieldCheck, title: 'AI Sandbox', desc: 'Preview, compare, and roll back safely without downtime.' },
                     { icon: Activity, title: 'Real-Time Monitoring', desc: 'Visibility into every call, webhook, and API to debug faster.' },
                     { icon: Database, title: 'Data Fine-Tuning', desc: 'Improve model accuracy using your own conversation data.' }
                   ].map((feat, idx) => (
                     <div key={idx} className="space-y-3">
                        <feat.icon size={20} className="text-[#5D00D6]" />
                        <h4 className="font-bold text-[#0c1024] tracking-tight">{feat.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">{feat.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
             <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/20 to-transparent blur-[100px] pointer-events-none" />
                <div className="bg-slate-900 rounded-[32px] p-8 shadow-2xl border border-white/10 relative z-10">
                   <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="ml-4 text-xs font-mono text-white/40">c9-voice-os-v1.0.4</span>
                   </div>
                   <div className="space-y-6 font-mono text-[11px]">
                      <div className="text-green-400">{"// Initializing Enterprise Agent..."}</div>
                      <div className="text-white">{"[SYSTEM] Connecting to Regional PBX (Melbourne)..."}</div>
                      <div className="text-[#5D00D6] font-bold">{"[VOICE] Latency: 42ms | Transcription: Active"}</div>
                      <div className="text-white/60">{"[LOG] Intent: Reservation Enquire"}</div>
                      <div className="text-white/60">{"[LOG] Entity extraction: Date=Tomorrow, Party=4"}</div>
                      <div className="text-green-400">{"[SUCCESS] Slot found. Sending SMS Confirmation..."}</div>
                      <div className="animate-pulse text-white">_</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3.7 OMNICHANNEL CONVERSATIONAL AI */}
      <section className="py-24 md:py-32 bg-[#fcfaff]">
        <div className="container mx-auto max-w-[1240px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-[#5D00D6] font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Omnichannel Orchestration</span>
             <h2 className="text-[36px] md:text-[56px] font-bold text-[#0c1024] leading-[1] tracking-tighter mb-6">Inbound. Outbound. Follow-up.</h2>
             <p className="text-slate-500 text-lg font-medium">Scale your reach across every voice channel with native SMS integration and contextual handoffs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { 
                 title: 'Inbound Inquiries', 
                 desc: 'Handle FAQs, routing, and booking without human intervention.', 
                 icon: Headphones,
                 points: ['Smart IVR', 'Instant Verification', '24/7 Availability']
               },
               { 
                 title: 'Outbound Campaigns', 
                 desc: 'Automated lead reactivation and appointment reminders with human-like tone.', 
                 icon: PhoneCall,
                 points: ['Voicemail Detection', 'Cold Lead Re-engagement', 'Local Presence Dialing']
               },
               { 
                 title: 'SMS Flow Integration', 
                 desc: 'Automatically send links, confirmations, and follow-ups during or after calls.', 
                 icon: MessageSquare,
                 points: ['Instant Booking Links', 'Post-Call Summaries', 'WhatsApp Fallback']
               }
             ].map((box, idx) => (
               <div key={idx} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-8">
                    <box.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c1024] mb-4 tracking-tight">{box.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{box.desc}</p>
                  <ul className="space-y-3">
                    {box.points.map(p => (
                      <li key={p} className="flex items-center gap-2 text-xs font-bold text-[#0c1024]">
                        <CheckCircle2 size={14} className="text-[#5D00D6]" /> {p}
                      </li>
                    ))}
                  </ul>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. THE BELL FRAMEWORK */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-[1240px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-[#5D00D6] font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Proven Methodology</span>
             <h2 className="text-[36px] md:text-[56px] font-bold text-[#0c1024] leading-[1] tracking-tighter mb-6">Deploy Voice AI Without the Risks</h2>
             <p className="text-slate-500 text-lg font-medium">The C9 BELL Framework connects every stage of the agent lifecycle into one repeatable process.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Build', 
                desc: 'Visual Flow Designer to define logic, connect APIs, and create precise agents.',
                icon: Layers
              },
              { 
                step: '02', 
                title: 'Evaluate', 
                desc: 'Simulated calls measure accuracy and compliance against your enterprise KPIs.',
                icon: Search
              },
              { 
                step: '03', 
                title: 'Launch', 
                desc: 'Deploy via our private telephony network with sub-100ms latency.',
                icon: Zap
              },
              { 
                step: '04', 
                title: 'Learn', 
                desc: 'Auto-QA and monitoring analyze every live call to feed back into improvements.',
                icon: Repeat
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-[#5D00D6]/5 transition-all h-full">
                    <div className="text-[40px] font-black text-[#5D00D6]/10 mb-6 group-hover:text-[#5D00D6]/20 transition-colors leading-none tracking-tighter">{item.step}</div>
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0c1024] mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PERFORMANCE & TELEPHONY TECH — Dark Tech Style */}
      <section className="py-24 bg-[#0c1024] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#5D00D6]/5 blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#5D00D6] font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">Industry-Leading Telephony</span>
              <h2 className="text-[36px] md:text-[56px] font-bold leading-[1] tracking-tighter mb-8">Crystal-Clear. Carrier-Grade. <span className="text-[#5D00D6]">Global.</span></h2>
              
              <div className="space-y-10">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
                    <Network size={24} className="text-[#5D00D6]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 tracking-tight">Direct Network Peering</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">We strategically peer with major carriers globally to minimize routing hops, keeping latency below 100ms.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
                    <Globe size={24} className="text-[#5D00D6]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 tracking-tight">BYO Carrier or SIP Trunk</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">Connect through your own existing infrastructure (Cisco, Avaya, RingCentral) without replacing your setup.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
                    <ShieldCheck size={24} className="text-[#5D00D6]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 tracking-tight">Regional Compliance (GDPR/HIPAA)</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">Data stays in-region. Encryption and security protocols designed for healthcare, finance, and enterprise.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Latency', value: '<100ms', sub: 'Real-time response' },
                  { label: 'Uptime', value: '99.99%', sub: 'Carrier-grade' },
                  { label: 'Integrations', value: '500+', sub: 'CRMs & ERPs' },
                  { label: 'Automation', value: '65%', sub: 'Routine calls' }
                ].map((stat, idx) => (
                  <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm text-center">
                    <div className="text-[10px] font-black text-[#5D00D6] uppercase tracking-widest mb-3">{stat.label}</div>
                    <div className="text-3xl font-bold mb-2 tracking-tighter">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 PRODUCTION-READY AGENTS — Industry Grid */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto max-w-[1240px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-[#5D00D6] font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Vertical Specialization</span>
             <h2 className="text-[36px] md:text-[56px] font-bold text-[#0c1024] leading-[1] tracking-tighter mb-6">Production-Ready Agents for Every Industry</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: 'Real Estate', icon: Building2, desc: 'Lead qualification & property tour bookings.' },
               { title: 'Healthcare', icon: Activity, desc: 'Patient intake & appointment management.' },
               { title: 'Retail', icon: Smartphone, desc: 'Order status & customer support.' },
               { title: 'BPO', icon: Users, desc: 'Scaling high-volume inbound call handling.' },
               { title: 'Financial Services', icon: Briefcase, desc: 'Identity verification & account enquiries.' },
               { title: 'Professional Services', icon: Clock, desc: 'Meeting scheduling & lead capture.' },
               { title: 'Hospitality', icon: Play, desc: 'Reservations & concierge services.' },
               { title: 'Logistics', icon: Network, desc: 'Delivery tracking & driver coordination.' }
             ].map((ind, idx) => (
               <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#0c1024] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                    <ind.icon size={20} />
                  </div>
                  <h4 className="font-bold text-[#0c1024] mb-2 tracking-tight">{ind.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{ind.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. ROI / SUCCESS STORIES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#5D00D6] font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Proven Outcomes</span>
              <h2 className="text-[36px] md:text-[56px] font-bold text-[#0c1024] leading-[1] tracking-tighter">The ROI for Your Business</h2>
            </div>
            <C9Button variant="outline" className="rounded-full border-slate-200">Explore All Stories</C9Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Story 1 */}
            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-8">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500">BPO & Contact Center</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500">600K+ Calls / Month</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0c1024] mb-6 tracking-tight">A $230M BPO operator modernized voice operations with white-labeled AI agents.</h3>
                <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                  In just 60 days, the company deployed 40+ branded voice agents across client programs, automating 600K+ calls monthly without adding headcount.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
                <div>
                  <div className="text-2xl font-bold text-[#5D00D6] tracking-tighter">40+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">AI Agents Deployed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#5D00D6] tracking-tighter">0</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">New Hires Needed</div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="p-10 bg-[#0c1024] rounded-[40px] border border-white/5 text-white flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-8">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400">Healthcare</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400">Appointment Optimization</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">Medbelle achieved a 60% boost in scheduling efficiency with automated AI Receptionists.</h3>
                <p className="text-slate-400 mb-10 leading-relaxed font-medium">
                  By automating scheduling and follow-ups, Medbelle transformed patient experiences and operational productivity while minimizing wait times.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <div>
                  <div className="text-2xl font-bold text-[#5D00D6] tracking-tighter">+60%</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Scheduling Efficiency</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#5D00D6] tracking-tighter">2.5x</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Qualified Bookings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <WpFAQAndFeedback />

      {/* 8. CONSULTATION FORM */}
      <WpConsultationForm 
        title="Ready to Automate Your Voice Operations?"
        description="Schedule a technical deep-dive with our AI engineers. We'll map your call flows, identify automation potential, and build a proof-of-concept in days, not months."
      />

      {/* 9. JOURNEY CONTINUATION */}
      <ContinueJourney 
        links={[
          { label: 'Managed IT Services', path: '/managed-it' },
          { label: 'Cloud Phone Systems', path: '/telco/phone-system' },
          { label: 'Microsoft Teams Calling', path: '/telco/teams-calling' },
          { label: 'Cyber Security', path: 'https://c9defense.com.au/' }
        ]}
      />

      {/* MODAL INTEGRATION */}
      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen}
        config={{
          leftBg: 'bg-gradient-to-br from-[#0c1024] to-[#5D00D6]',
          title: 'The AI Voice Revolution',
          subtitle: 'Operational Guide to Automated Phone Calls in 2026',
          image: '/images/promo_business_audit.png',
          formTitle: 'Get the Blueprint',
          formSubtitle: 'Learn how enterprises are automating 65% of their voice calls with zero latency. Download our technical framework.',
          ctaLabel: 'Download Framework'
        }}
      />
    </main>
  );
}
