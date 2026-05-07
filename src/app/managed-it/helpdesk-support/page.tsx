'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap, Monitor, Lock, Activity, Users, MessageSquare, Clock, ShieldAlert, Laptop } from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { ContinueJourney } from '@/components/sections/ContinueJourney';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPERS
   ───────────────────────────────────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  id,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
  id?: string;
}) => {
  const y = direction === 'up' ? 24 : 0;
  const x = direction === 'left' ? -24 : direction === 'right' ? 24 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* ─────────────────────────────────────────────────────────
   LIVE CHAT VISUAL
   ───────────────────────────────────────────────────────── */
const MESSAGES = [
  { from: "user",    text: "Hi, my Outlook won't open. I have a client meeting in 20 min.",  delay: 0.5  },
  { from: "c9",      text: "On it, Sarah. Starting a remote session now — give me 2 minutes.", delay: 2.5  },
  { from: "user",    text: "Thank you! That was quick.",                                       delay: 6.5  },
  { from: "c9",      text: "All fixed. Corrupted profile — repaired and tested. You're good to go ✓", delay: 9 },
];

const LiveChatVisual = () => {
  const [visible, setVisible] = React.useState(0);

  React.useEffect(() => {
    if (visible >= MESSAGES.length) return;
    const t = setTimeout(
      () => setVisible((v) => v + 1),
      visible === 0 ? 800 : (MESSAGES[visible - 1]?.delay ?? 0) * 1000
    );
    return () => clearTimeout(t);
  }, [visible]);

  React.useEffect(() => {
    if (visible < MESSAGES.length) return;
    const t = setTimeout(() => setVisible(0), 4000);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-[40px] overflow-hidden shadow-[0_40px_80px_-16px_rgba(93,0,214,0.12)] border border-slate-100">
      <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-100 bg-white">
        <div className="relative shrink-0">
          <img src="https://i.pravatar.cc/100?img=12" alt="C9 Support" className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" />
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-bold text-[#0c1024] leading-none">C9 Helpdesk</p>
          <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Online · avg. reply 2 min</p>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Live</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4 justify-end">
        <AnimatePresence>
          {MESSAGES.slice(0, visible).map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className={`flex items-end gap-2.5 ${m.from === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <img src={m.from === "user" ? "https://i.pravatar.cc/100?img=33" : "https://i.pravatar.cc/100?img=12"} alt={m.from} className="w-7 h-7 rounded-full object-cover shrink-0 shadow-sm" />
              <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-[14px] leading-snug font-medium shadow-sm ${m.from === "user" ? "bg-[#5D00D6] text-white rounded-br-sm" : "bg-slate-100 text-[#0c1024] rounded-bl-sm"}`}>{m.text}</div>
            </motion.div>
          ))}
          {visible > 0 && visible < MESSAGES.length && MESSAGES[visible].from === "c9" && (
            <motion.div key="typing" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-end gap-2.5">
              <img src="https://i.pravatar.cc/100?img=12" alt="typing" className="w-7 h-7 rounded-full object-cover shrink-0 shadow-sm" />
              <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center h-10">
                {[0, 1, 2].map((i) => (
                  <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {visible >= MESSAGES.length && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mx-6 mb-4 flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-2xl px-5 py-3">
            <CheckCircle size={12} className="text-emerald-600 shrink-0" />
            <div>
              <p className="text-[14px] font-bold text-emerald-800">Issue resolved in under 10 minutes</p>
              <p className="text-[11px] text-emerald-600 font-medium">Sarah is back online before her client call.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="px-6 pb-6">
        <div className="flex items-center gap-3 bg-slate-50 rounded-full border border-slate-200 px-5 py-3">
          <span className="flex-1 text-[14px] text-slate-400 font-medium">Message C9 Helpdesk…</span>
          <div className="w-8 h-8 rounded-full bg-[#5D00D6] flex items-center justify-center shadow-md">
            
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-8 pb-0 lg:pt-12">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
    
    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pb-10 lg:pb-16">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
               <Users size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">AU-Managed Support</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Support That Stops Issues <span className="text-[#5D00D6]">Before They Reach Your Desk.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[580px]">
                Comprehensive IT support across all users, devices, and systems. No finger-pointing, no ambiguity—just fast, accountable resolution that scales with your business.
             </p>
          </FadeIn>

          <FadeIn delay={0.22}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                   '24/7 Support Coverage',
                   'Fastest Response Times',
                   'Multi-Site Operations',
                   'Single Point of Accountability'
                ].map((item) => (
                   <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={12} className="text-[#5D00D6] shrink-0" />
                      <span className="text-slate-700 font-bold text-[14px]">{item}</span>
                   </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                   <a
                      href="#consultation-section"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 whitespace-nowrap h-14 px-8 text-[15px] font-bold"
                   >
                      Set Up Support for New Sites
                      
                   </a>
                   <a
                      href="#consultation-section"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white h-14 px-8 text-[15px] font-bold"
                   >
                      Stabilize Existing IT Support
                   </a>
                </div>
                <a
                   href="#consultation-section"
                   className="inline-flex items-center gap-1.5 text-slate-400 text-[14px] font-medium hover:text-[#5D00D6] transition-colors whitespace-nowrap"
                >
                   Or talk to a support architect
                   
                </a>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <div className="relative h-[500px]">
              <LiveChatVisual />
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — PERSONAS
   ───────────────────────────────────────────────────────── */
const SectionPersonas = () => (
   <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-10">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Strategic Segmentation</span>
               <h2 className="c9-section-heading">Support Designed for Your Context</h2>
            </FadeIn>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8">
            <FadeIn id="greenfield" className="bg-white border border-slate-200 p-10 rounded-lg shadow-sm hover:shadow-xl transition-all relative overflow-hidden">

               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Zap size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Greenfield</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  Support ready from day one. We ensure your new site launches are operational and supported the moment they go live, eliminating technical friction from your expansion.
               </p>
               <ul className="space-y-3">
                  {['Day-1 Readiness', 'New Site Launches', 'Rapid Setup'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn id="brownfield" delay={0.1} className="bg-white border border-slate-200 p-10 rounded-lg shadow-sm hover:shadow-xl transition-all relative overflow-hidden">

               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Activity size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Brownfield</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  Consolidate fragmented IT. We take over complex, existing environments, removing vendor blame and stabilizing your operations under one accountable model.
               </p>
               <ul className="space-y-3">
                  {['Vendor Consolidation', 'Stability Roadmap', 'Legacy Audit'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn id="enterprise" delay={0.2} className="bg-white border border-slate-200 p-10 rounded-lg shadow-sm hover:shadow-xl transition-all relative overflow-hidden">

               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <ShieldCheck size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Enterprise IT</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  SLA-driven, structured support. We provide Tier 1-3 overflow with full visibility and escalation paths designed to extend your internal IT capacity.
               </p>
               <ul className="space-y-3">
                  {['SLA Alignment', 'Full Visibility', 'L1-L3 Support'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — SUPPORT MODEL (CORE DIFFERENTIATOR)
   ───────────────────────────────────────────────────────── */
const SectionSupportModel = () => (
   <section className="py-12 lg:py-16 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Operational Scope</span>
               <h2 className="c9-section-heading mb-6">Support Without Ambiguity</h2>
               <p className="c9-body mb-8">
                  We cover the entire technical environment. From the user's laptop to the core network infrastructure, every component is monitored and supported.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  {[
                     { label: 'Users', icon: <Users size={16} /> },
                     { label: 'Laptops/Desktops', icon: <Laptop size={16} /> },
                     { label: 'Network Hardware', icon: <Activity size={16} /> },
                     { label: 'Core Applications', icon: <Monitor size={16} /> }
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="text-[#5D00D6]">{item.icon}</div>
                        <span className="font-bold text-slate-900 text-sm">{item.label}</span>
                     </div>
                  ))}
               </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
               {[
                  { title: 'Support Channels', items: ['Direct Phone Line', 'Integrated Email', 'Customer Portal'] },
                  { title: 'Service Levels', items: ['L1: General & Triage', 'L2: Systems & Specialized', 'L3: Architecture & Advanced'] },
                  { title: 'Escalation Path', items: ['Immediate Senior Oversight', 'Dedicated Escalation Lead', 'Vendor Liaison Management'] },
                  { title: 'Operational Reporting', items: ['Monthly Ticket Trends', 'Resolution Performance', 'Risk Identification'] }
               ].map((box, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="bg-slate-50 p-8 rounded-lg border border-slate-100">
                     <h4 className="font-bold text-slate-900 text-[18px] mb-4">{box.title}</h4>
                     <ul className="space-y-3">
                        {box.items.map(item => (
                           <li key={item} className="flex items-center gap-2 text-[14px] text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]/40" /> {item}
                           </li>
                        ))}
                     </ul>
                  </FadeIn>
               ))}
            </div>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — HOW SUPPORT WORKS (PROCESS)
   ───────────────────────────────────────────────────────── */
const SectionProcess = () => (
   <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">The Process</span>
               <h2 className="c9-section-heading mb-6">How Your Support Operates</h2>
               <p className="c9-body text-slate-600">We utilize a structured classification model to ensure every incident triggers a specific operational workflow.</p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-5 gap-6">
            {[
               { step: '01', title: 'Issue Logged', desc: 'Ticket created via phone, email, or portal.' },
               { step: '02', title: 'Ticket Triaged', desc: 'Categorized by priority and scope.' },
               { step: '03', title: 'Assigned', desc: 'Sent to the correct technical level immediately.' },
               { step: '04', title: 'Resolved', desc: 'Issue fixed or escalated to senior leads.' },
               { step: '05', title: 'Reported', desc: 'Closure confirmed and root cause logged.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:border-[#5D00D6]/30 transition-all">
                  <div className="text-[40px] font-black text-slate-100 group-hover:text-[#5D00D6]/10 transition-colors absolute top-6 right-6 leading-none">
                     {s.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#5D00D6] text-white flex items-center justify-center font-bold text-[16px] mb-6 relative z-10 shadow-md">
                     {i + 1}
                  </div>
                  <h4 className="c9-card-title mb-3 relative z-10">{s.title}</h4>
                  <p className="text-slate-500 text-[15px] leading-relaxed relative z-10">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — PROOF & CREDIBILITY
   ───────────────────────────────────────────────────────── */
const SectionOutcomes = () => (
   <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Proof & Reality</span>
               <h2 className="c9-section-heading !text-white mb-6">Reliability in Action</h2>
               <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">98.2%</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">Ticket Resolution</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">&lt;2m</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">Avg Phone Answer</div>
                  </div>
               </div>
               <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                     <div className="mt-1"><CheckCircle size={12} className="text-[#a56eff]" /></div>
                     <div>
                        <p className="font-bold text-white text-[14px]">Retail site outage resolved in 18 minutes.</p>
                        <p className="text-white/60 text-sm">Critical network failure at flagship location restored during peak hours.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="mt-1"><CheckCircle size={12} className="text-[#a56eff]" /></div>
                     <div>
                        <p className="font-bold text-white text-[14px]">Centralized support for 45+ locations.</p>
                        <p className="text-white/60 text-sm">Consolidated multi-state site support into one accountable dashboard.</p>
                     </div>
                  </div>
               </div>
               <p className="c9-body text-white/80 italic border-l-2 border-[#a56eff] pl-6 mb-8">
                  "C9 handles the technical depth so our team can focus on operations. They've removed the noise from our IT support."
               </p>
            </FadeIn>

            <FadeIn direction="right" className="relative">
               <div className="relative rounded-lg overflow-hidden aspect-square border-4 border-white/10 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200" alt="Measured Success" className="w-full h-full object-cover" />
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — RISK REVERSAL / ACCOUNTABILITY
   ───────────────────────────────────────────────────────── */
const SectionAccountability = () => (
   <section className="py-12 lg:py-16 bg-white">
      <div className={C}>
         <div className="bg-slate-50 rounded-lg p-8 lg:p-14 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6] opacity-[0.02] rounded-full blur-[100px] -mr-64 -mt-64" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
               <div>
                  <span className="c9-eyebrow mb-4">Risk Reversal</span>
                  <h2 className="c9-section-heading mb-6">Total Accountability. No Vendor Blame.</h2>
                  <p className="c9-body mb-8">
                     We reduce fear by providing a single point of responsibility. If there's an issue, we own it until resolution—period.
                  </p>
                  <div className="space-y-6">
                     {[
                        { title: 'No Vendor Blame', desc: 'We manage third-party vendors on your behalf. No more finger-pointing between providers.' },
                        { title: 'Single Point of Ownership', desc: 'One accountable partner for your entire technical environment.' },
                        { title: 'Clear Resolution Ownership', desc: 'We take the lead on all technical hurdles, from ISP outages to software bugs.' }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="mt-1"><ShieldCheck size={20} className="text-[#5D00D6]" /></div>
                           <div>
                              <strong className="block text-slate-900 text-[14px]">{item.title}</strong>
                              <span className="text-slate-500 text-[14px]">{item.desc}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-xl">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                     <Clock size={20} className="text-[#5D00D6]" /> SLA & Response Structure
                  </h4>
                  <div className="space-y-4">
                     {[
                        { label: 'P1: Critical', value: '15m Response', sub: 'Immediate Resolution Focus' },
                        { label: 'P2: High', value: '1h Response', sub: 'Assigned Technical Lead' },
                        { label: 'P3: Normal', value: '4h Response', sub: 'Standard Resolution Path' },
                        { label: 'P4: Request', value: '8h Response', sub: 'Scheduled Completion' }
                     ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                           <div>
                              <div className="font-bold text-slate-900">{row.label}</div>
                              <div className="text-[11px] text-slate-400 uppercase font-bold">{row.sub}</div>
                           </div>
                           <div className="text-[#5D00D6] font-bold text-[14px]">{row.value}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — SERVICE INTEGRATION
   ───────────────────────────────────────────────────────── */


/* ─────────────────────────────────────────────────────────
   SECTION 7 — TECHNICAL DEPTH
   ───────────────────────────────────────────────────────── */
const SectionTechnical = () => (
   <section className="py-12 lg:py-16 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">For the Head of IT</span>
               <h2 className="c9-section-heading mb-6">Enterprise-Grade Architecture</h2>
               <p className="c9-body mb-8">
                  We don't just use standard tools. We've built a technical stack designed for scalability, security, and visibility.
               </p>
               <div className="space-y-4">
                  {[
                     { icon: <Monitor size={20} />, title: 'Ticketing & Visibility', desc: 'Full integration with industry-standard ticketing systems for real-time visibility.' },
                     { icon: <ShieldAlert size={20} />, title: 'Proactive Monitoring', desc: 'Real-time endpoint and network monitoring to identify issues before they impact users.' },
                     { icon: <Laptop size={20} />, title: 'System Coverage', desc: 'Comprehensive support for all Windows, macOS, and Linux endpoints.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#5D00D6]/20 transition-all">
                        <div className="text-[#5D00D6]">{item.icon}</div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[14px] mb-1">{item.title}</h4>
                           <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
            <FadeIn direction="right" className="bg-[#0c1024] rounded-lg p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6] opacity-10 rounded-full blur-[100px]" />
               <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-8">The Stack</h4>
                  <div className="space-y-6">
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-3">Management</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">ConnectWise Automate</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">ITGlue Docs</span>
                        </div>
                     </div>
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-3">Communication</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Microsoft 365 / Teams</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Dedicated Phone Extension</span>
                        </div>
                     </div>
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-3">Compliance</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Essential 8 Aligned</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Monthly Risk Audit</span>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — COMMERCIAL IMPACT
   ───────────────────────────────────────────────────────── */
const SectionImpact = () => (
   <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-10">
            <FadeIn>
               <h2 className="c9-section-heading">The Business Case for C9 Support</h2>
            </FadeIn>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {[
               { title: 'Reduced Downtime', desc: 'Minimise technical interruptions and keep your operations moving at peak efficiency.' },
               { title: 'Predictable Operations', desc: 'Fixed monthly support costs remove the uncertainty from your IT budgeting.' },
               { title: 'Lower Internal Overhead', desc: 'Eliminate the cost of recruiting, training, and managing an internal helpdesk team.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="text-center p-8 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-6">
                     <Zap size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function HelpdeskSupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionPersonas />
      <SectionSupportModel />
      <SectionProcess />
      <SectionOutcomes />
      <SectionAccountability />

      <SectionTechnical />
      <SectionImpact />

      <WpDefenseBanner 
        title={<>Security incidents need more <span className="text-[#a56eff]">than helpdesk.</span></>}
        description="When your team is facing a potential breach, ransomware, or active threat — C9 Defense provides continuous monitoring and incident response so helpdesk is never your only line of defence."
        buttonText="Learn About C9 Defense"
        href="https://c9defense.com.au/"
      />

      <ContinueJourney 
        title="Support is just the start."
        description="Great helpdesk works best when your infrastructure is governed and your cloud is managed. Explore the full stack."
        links={[
          { label: 'Managed Cloud Services', path: '/managed-it/cloud-services' },
          { label: 'Network Solutions', path: '/managed-it/network-solutions' },
          { label: 'Infrastructure Governance', path: '/managed-it/infrastructure' },
          { label: 'IT Outsourcing', path: '/managed-it/outsourcing' }
        ]}
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="READY TO FIX YOUR HELPDESK?"
          title="Get Your Support Assessment"
          description="We'll review your current ticket trends, system performance, and risk exposure to show you a better way forward."
          formTitle="Request Helpdesk Proposal"
        />

      </section>
    </main>
  );
}
