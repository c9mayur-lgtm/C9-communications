'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, ShieldAlert, Activity, Users, CheckCircle2, Clock, Layers, ShieldCheck, Building2, TrendingUp, Server, Smartphone, PhoneCall, Monitor, CheckCircle, BarChart3, Globe } from 'lucide-react';
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

export default function FastFibrePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20">
        {/* Abstract background elements to differentiate from nbn page */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-50 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className={`${C} relative z-10`}>
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-center pb-16 lg:pb-24">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
                   <Zap size={13} className="text-[#5D00D6]" />
                   <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Performance Infrastructure</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                 <h1 className="c9-hero-title mb-6 !leading-[1.1]">
                    High-Performance Fibre Built for <span className="text-[#5D00D6]">Business-Critical Operations.</span>
                 </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                 <p className="c9-body mb-8 max-w-[600px] text-lg">
                    Speed alone does not protect your operations. Performance consistency matters more than peak claims. C9 delivers reliable business fibre backed by accountability and senior engineering support.
                 </p>
              </FadeIn>

              <FadeIn delay={0.22}>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <C9Button className="px-9 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full font-bold" asChild>
                      <Link href="#consultation-section">Check Fibre Availability</Link>
                    </C9Button>
                    <C9Button variant="outline" className="px-9 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white font-bold" asChild>
                      <Link href="#consultation-section">Request Build Costs</Link>
                    </C9Button>
                 </div>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-10">
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                   {['Dedicated 1:1 Bandwidth', '99.95% Uptime SLA', 'Managed Install', '24/7 NOC Monitoring'].map((item) => (
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
                     src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
                     alt="Head of IT managing business critical infrastructure"
                     className="w-full h-full object-cover object-top duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                     <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-[#5D00D6] flex items-center justify-center text-white">
                           <BarChart3 size={20} />
                        </div>
                        <div>
                           <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">Operational Performance</div>
                           <div className="text-[16px] font-bold text-slate-900 leading-none">1:1 Contention Ratio</div>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Latency</div>
                           <div className="text-[18px] font-bold text-slate-900 leading-none tracking-tight">&lt; 5ms</div>
                        </div>
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Accountability</div>
                           <div className="text-[18px] font-bold text-slate-900 leading-none tracking-tight">C9 Managed</div>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ══ 1.5 CARRIER DIVERSITY & STRATEGIC PARTNERS ════════════════════════════════════ */}
      <section className="py-16 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px]" style={{ background: 'radial-gradient(ellipse, rgba(93,0,214,0.05) 0%, transparent 70%)' }} />
        </div>
        <div className={`${C} relative z-10`}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] relative inline-block before:absolute before:top-1/2 before:-left-12 before:w-8 before:h-[1px] before:bg-slate-200 after:absolute after:top-1/2 after:-right-12 after:w-8 after:h-[1px] after:bg-slate-200 mb-4">
              Carrier Independence
            </span>
            <h3 className="text-2xl font-bold text-slate-900">We Source the Best Build Costs.</h3>
            <p className="text-slate-600 mt-4">
               C9 partners with all major Tier-1 carriers (Vocus, Telstra, Optus, TPG, nbn) to find the fastest deployment timeline and lowest build cost for your address. You get a single C9 bill and single C9 support, running on the best physical path.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {[
              { src: '/Vendors/NBN_Co-Logo.wine.png', alt: 'nbn', w: 'w-[100px] md:w-[120px]' },
              { src: '/Vendors/Telstra%20logo.svg', alt: 'Telstra', w: 'w-[100px] md:w-[120px]' },
              { src: '/Vendors/vocus.png', alt: 'Vocus', w: 'w-[100px] md:w-[120px]' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Optus_logo.svg', alt: 'Optus', w: 'w-[100px] md:w-[120px]' }
            ].map((logo, i) => (
              <div key={i} className="bg-white flex items-center justify-center p-8 md:p-12 hover:bg-slate-50 transition-colors duration-300">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className={`${logo.w} h-auto object-contain duration-500 group-hover:scale-105`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 2. DEMYSTIFYING 1:1 FIBRE ═════════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className={C}>
          <FadeIn className="max-w-3xl mb-16">
            <span className="c9-eyebrow mb-4">Dedicated Performance</span>
            <h2 className="c9-section-heading mb-6">
               What "1:1 Contention" Actually Means for Your Business.
            </h2>
            <p className="c9-body text-lg">
               Standard broadband is shared with the rest of your street. During peak hours, your speeds drop. 1:1 Fast Fibre means the line goes straight to your premises and is not shared with anyone else. You get exactly the speed you pay for, 24/7.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Server className="text-emerald-500" />, 
                title: "Instant File Syncing", 
                desc: "Move massive design files, databases, or backups to the cloud instantly without saturating the office network." 
              },
              { 
                icon: <Monitor className="text-emerald-500" />, 
                title: "Crystal Clear Video", 
                desc: "Symmetric upload speeds guarantee that all company Teams and Zoom meetings run flawlessly, even with dozens of active cameras." 
              },
              { 
                icon: <Smartphone className="text-emerald-500" />, 
                title: "Zero POS Lag", 
                desc: "For retail and hospitality, dedicated fibre ensures payment terminals and guest networks operate with zero transaction delay." 
              },
              { 
                icon: <Activity className="text-emerald-500" />, 
                title: "Symmetric Speeds", 
                desc: "Your upload speed is just as fast as your download speed, which is critical for cloud-heavy modern workloads." 
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="c9-card-title mb-3 text-[18px]">{item.title}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-12 bg-white border border-slate-200 p-8 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0">
                <CheckCircle2 size={12} />
              </div>
              <p className="text-slate-900 font-bold text-lg leading-snug">
                Shift your thinking from &ldquo;faster internet&rdquo; toward &ldquo;business resilience.&rdquo;
              </p>
            </div>
            <C9Button className="rounded-full h-12 px-8 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl text-white font-bold" asChild>
              <Link href="#consultation-section">Review Fibre Options</Link>
            </C9Button>
          </FadeIn>
        </div>
      </section>

      {/* ══ 3. SLA & ACCOUNTABILITY ════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Enterprise Grade SLA</span>
               <h2 className="c9-section-heading mb-6">
                  Backed by a 99.95% Operational Guarantee.
               </h2>
               <p className="c9-body mb-10">
                  When you invest in Fast Fibre, you aren't just buying speed—you're buying an insurance policy against downtime. Our Service Level Agreement (SLA) puts financial penalties on the line if we don't deliver.
               </p>
               
               <div className="space-y-6">
                  {[
                    { title: "99.95% Uptime Target", text: "Mathematically, this means no more than a few hours of downtime annually. In practice, our failover designs aim for 100%." },
                    { title: "Priority Restoration", text: "In the rare event of a physical fibre cut, your ticket jumps the queue to immediate enterprise priority." },
                    { title: "Proactive NOC Layer", text: "Our engineers monitor latency and packet loss 24/7, catching anomalies before your team notices." },
                    { title: "Absolute Ownership", text: "If there's an issue, we handle the carrier escalation. You speak to an Australian engineer, not a script." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle size={14} className="text-[#5D00D6]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-[15px] leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="relative">
              <div className="bg-slate-50 rounded-[48px] p-10 lg:p-16 border border-slate-100 relative shadow-inner">
                 <div className="absolute top-10 right-10 opacity-5">
                    <ShieldCheck size={160} className="text-[#5D00D6]" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-8">SLA Metrics</h3>
                 <div className="space-y-8 relative z-10">
                    {[
                      { label: "Target Availability", val: "99.95%", width: "99.95%" },
                      { label: "Contention", val: "1:1 Dedicated", width: "100%" },
                      { label: "Latency Target", val: "< 5ms", width: "95%" }
                    ].map((m, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                           <span className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">{m.label}</span>
                           <span className="text-[12px] font-bold text-[#5D00D6]">{m.val}</span>
                        </div>
                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: m.width }}
                             viewport={{ once: true }}
                             transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                             className="h-full bg-[#5D00D6]" 
                           />
                        </div>
                      </div>
                    ))}
                 </div>
                 <div className="mt-12 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                    <p className="text-slate-500 text-[14px] leading-relaxed italic">
                       &ldquo;We focus on outcomes, not just technical speed specs. C9 fibre is designed to perform when your business matters.&rdquo;
                    </p>
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 4. BUILT FOR GROWTH AND STABILITY ════════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <FadeIn className="text-center mb-16">
            <span className="c9-eyebrow mb-4 text-[#5D00D6]">Strategic Relevance</span>
            <h2 className="c9-section-heading">Infrastructure Built for Every Stage.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-8">
                <Building2 size={28} />
              </div>
              <h3 className="c9-card-title mb-4">Opening New Sites</h3>
              <p className="c9-body mb-6 !text-[15px]">
                Fast deployment and operational readiness. We ensure your fibre is commissioned and tested well before your doors open.
              </p>
              <ul className="space-y-3 mb-8">
                {['Day-one readiness', 'Site survey coordination', 'Project managed install'].map(t => (
                  <li key={t} className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                    <CheckCircle2 size={14} className="text-emerald-500" /> {t}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-8">
                <TrendingUp size={28} />
              </div>
              <h3 className="c9-card-title mb-4">Growing Existing Ops</h3>
              <p className="c9-body mb-6 !text-[15px]">
                Scalable infrastructure that keeps pace with demand. Transition from congested nbn™ to dedicated performance without disruption.
              </p>
              <ul className="space-y-3 mb-8">
                {['Zero-disruption migration', 'Scalable bandwidth', 'Consolidated billing'].map(t => (
                  <li key={t} className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                    <CheckCircle2 size={14} className="text-emerald-500" /> {t}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-8">
                <Server size={28} />
              </div>
              <h3 className="c9-card-title mb-4">Enterprise Scaling</h3>
              <p className="c9-body mb-6 !text-[15px]">
                Network consistency across locations. Ensure critical systems (ERP, Voice, Cloud) perform identically at every site.
              </p>
              <ul className="space-y-3 mb-8">
                {['Unified SLA model', 'Direct cloud connects', 'Multi-site governance'].map(t => (
                  <li key={t} className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                    <CheckCircle2 size={14} className="text-emerald-500" /> {t}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 5. WHAT HAPPENS DURING FAILURE OR PRESSURE ═══════════════ */}
      <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        <div className={C}>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Accountability Layer</span>
               <h2 className="c9-section-heading !text-white mb-6">
                  When Pressure is High, Support Must be Direct.
               </h2>
               <p className="c9-body text-white/70 mb-10">
                  Generic providers leave you stuck between multiple vendors. C9 removes the layer of finger-pointing by taking absolute ownership of your fibre performance.
               </p>
               
               <div className="space-y-8">
                  {[
                    { icon: <PhoneCall />, title: "Immediate Senior Response", text: "Speak directly to an Australian senior engineer. No scripts, no offshore queues." },
                    { icon: <Monitor />, title: "Absolute Incident Ownership", text: "We own the escalation with carriers. We don't hand you off; we fix the problem." },
                    { icon: <ShieldCheck />, title: "Backup Performance Assurance", text: "When primary paths fail, your backup is ready and validated for operational use." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                       <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] shrink-0 mt-1">
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
               <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" alt="Technical Excellence" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] via-[#0c1024]/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                     <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                        <p className="text-white font-bold text-lg mb-4">&ldquo;Speed is a commodity. Support and accountability are strategic assets.&rdquo;</p>
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-[#5D00D6] flex items-center justify-center text-white font-bold text-xs">C9</div>
                           <div>
                              <p className="text-white font-bold text-sm">C9 Operational Standard</p>
                              <p className="text-white/50 text-[11px] uppercase tracking-widest font-bold">Reliability Guaranteed</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 6. BUSINESS OUTCOMES / COMMERCIAL PROOF ═════════════════ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className={C}>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
             <FadeIn direction="left">
                <span className="c9-eyebrow mb-4">Predictable Continuity</span>
                <h2 className="c9-section-heading mb-6">Commercial Proof of Operational Performance.</h2>
                <p className="c9-body mb-10 text-slate-600">
                   When connectivity is managed, the business results are measurable. Shift from hoping for uptime to guaranteeing it.
                </p>

                <div className="grid grid-cols-2 gap-4">
                   {[
                     { label: "Uptime Confidence", val: "99.95%" },
                     { label: "Contention Ratio", val: "1:1 Dedicated" },
                     { label: "Deployment Speed", val: "Rapid" },
                     { label: "Support Ownership", val: "Direct" }
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
                        tag: 'FAST FIBRE SUCCESS',
                        title: 'High-Traffic Office Transformation',
                        desc: "A national distribution centre was plagued by nbn™ congestion. C9 deployed dedicated Fast Fibre with a 99.95% SLA. Result: Operational friction eliminated.",
                        img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Performance Restored'
                      },
                      {
                        tag: 'ENTERPRISE SCALE',
                        title: 'Multi-Site Warehouse Connectivity',
                        desc: "A logistics leader required symmetric speeds across 4 sites. C9 architected a private fibre network with unified governance. Result: 60% faster data syncing.",
                        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Symmetric Performance'
                      },
                      {
                        tag: 'GREENFIELD SITE',
                        title: 'Day-One Readiness for Retail',
                        desc: "A new retail flagship needed operational internet before opening. C9 managed the fibre build and commissioning in record time. Result: Live for launch.",
                        img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Operational Readiness'
                      }
                    ]}
                  />
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 7. MID-PAGE CTA ══════════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
           <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                  Ready to see if your address qualifies for $0 fibre build?
                </h3>
                <p className="c9-body mb-10 text-lg">
                  Depending on your location, carriers will often waive the physical construction costs. Let us run an address check and secure the best build pricing for you.
                </p>
                <C9Button className="px-10 h-16 bg-[#5D00D6] text-white hover:bg-[#4d00b3] shadow-xl rounded-full text-lg font-bold" asChild>
                  <Link href="#consultation-section">Request Build Costs</Link>
                </C9Button>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* ══ 8. FINAL CTA ═════════════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
        <div className={C}>
           <div className="bg-[#5D00D6] rounded-[48px] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/40 text-center">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px] -mr-64 -mt-64" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-[0.05] rounded-full blur-[80px] -ml-32 -mb-32" />
              
              <div className="relative z-10">
                <span className="c9-eyebrow !text-white/80 mb-4">Final Decision Point</span>
                <h2 className="c9-section-heading !text-white mb-6">Performance + Reliability + Accountability</h2>
                <p className="c9-body !text-white/70 mb-10 max-w-2xl mx-auto text-lg">
                  Stop settling for consumer-grade service. Partner with C9 for business fibre that performs when it matters most to your bottom line.
                </p>
                <C9Button className="px-12 h-16 bg-white text-[#5D00D6] hover:bg-slate-50 shadow-xl rounded-full text-lg font-bold" asChild>
                  <Link href="#consultation-section">Talk to a Connectivity Specialist</Link>
                </C9Button>
              </div>
           </div>
        </div>
      </section>

      {/* ══ 9. RELATED SOLUTIONS ═══════════════════════ */}
      <ContinueJourney 
        title="Speed Is Step One. Here's What Runs on It."
        description="Fibre is the foundation. Businesses that lock in their connectivity usually secure their wider environment next."
        links={[
          { label: "Business nbn™", path: "/telco/business-nbn" },
          { label: "Enterprise Ethernet", path: "/telco/enterprise-ethernet" },
          { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" },
          { label: "Cloud Contact Centre", path: "/telco/contact-centre" }
        ]}
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="FAST FIBRE ENQUIRY"
          title="Ready to upgrade your operational performance?"
          description="Book a 30-minute strategy session with our senior engineers to review your address and performance requirements."
          formTitle="Get a Fibre Performance Audit"
        />
      </section>

      <WpFAQAndFeedback 
        faqItems={[
          { q: "How is Fast Fibre different from standard business nbn™?", a: "Fast Fibre provides dedicated 1:1 bandwidth, meaning your speeds aren't shared with other businesses. It also carries a higher uptime SLA (99.95%) and lower latency, making it ideal for critical operations." },
          { q: "How long does installation take?", a: "Installation times vary based on the carrier and site readiness, but we manage the entire project end-to-end to ensure you are operational by your target date." },
          { q: "What happens if the fibre link goes down?", a: "We architect every connection with failover paths. Our NOC monitors your link 24/7, and our senior engineers own the restoration process until you are back online." }
        ]}
      />
    </main>
  );
}
