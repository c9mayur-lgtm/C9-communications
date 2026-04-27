'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CloudUpload,
  Clock,
  Users,
  Activity,
  CheckCircle2,
  Zap,
  Phone,
  Server,
  Shield,
  Wifi,
  Globe,
  Check,
  X
} from 'lucide-react';

import Plans from '@/components/sections/fast-fibre/Plans';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';

const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function FastFibrePage() {
  const scrollToForm = () => {
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlans = () => {
    const el = document.getElementById('fast-fibre-plans');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO - COMPLETELY REWRITTEN */}
      <section className="relative w-full bg-white pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F3EEFF] border border-[#5D00D6]/20 rounded-full px-4 py-1.5 mb-8">
                <Zap size={14} className="text-[#5D00D6]" />
                <span className="text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest">Connect · Reliable Business Fibre</span>
              </div>

              <h1 className="text-[40px] md:text-[52px] font-bold text-[#1A1A2E] leading-tight mb-8">
                Dedicated fibre internet built for <br />
                <span className="text-[#5D00D6]">businesses that cannot afford downtime</span>
              </h1>

              <p className="text-[#6B7280] mb-10 max-w-[580px] md:text-[18px] leading-relaxed">
                Get consistent performance, reliable connectivity, and a connection designed to support critical business operations.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                <button 
                  onClick={scrollToPlans}
                  className="w-full sm:w-auto bg-[#5D00D6] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4E00AD] transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-900/20"
                >
                  Get the Right Fibre Plan <ArrowRight size={18} />
                </button>
                <button 
                  onClick={scrollToForm}
                  className="w-full sm:w-auto bg-white text-[#1A1A2E] border border-[#E5E7EB] px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:border-[#5D00D6] transition-all flex items-center justify-center gap-2"
                >
                  Check Availability <ArrowRight size={16} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Consistent Performance 24/7',
                  'Symmetrical Up & Down',
                  'Business-grade SLA Guarantee',
                  'No peak-hour slowdowns'
                ].map((signal, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
                      <Zap size={10} className="text-[#5D00D6]" />
                    </div>
                    <span className="text-[14px] text-[#374151] font-medium">{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
               <div className="relative w-full aspect-square max-w-[500px] bg-gradient-to-br from-[#F3EEFF] to-white rounded-3xl border border-[#5D00D6]/10 overflow-hidden shadow-[0_20px_50px_rgba(93,0,182,0.05)]">
                  <div className="absolute inset-0 opacity-20">
                     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#5D00D6_0%,transparent_50%)]" />
                     <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#5D00D6_0%,transparent_50%)]" />
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                     <div className="w-full bg-white rounded-2xl p-6 border shadow-sm mb-4">
                        <div className="flex justify-between items-center mb-4">
                           <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Connection Load</span>
                           <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              <span className="text-[10px] text-green-600 font-bold">Dedicated 1.0 Gbps</span>
                           </div>
                        </div>
                        <div className="h-24 flex items-end gap-1">
                           {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
                              <motion.div 
                                 key={i}
                                 className="flex-1 bg-[#5D00D6]/20 rounded-t-sm"
                                 initial={{ height: 0 }}
                                 animate={{ height: `${h}%` }}
                                 transition={{ duration: 1, delay: i * 0.05, repeat: Infinity, repeatType: 'reverse' }}
                              />
                           ))}
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-white rounded-xl p-4 border shadow-sm">
                           <Shield className="text-[#5D00D6] mb-2" size={20} />
                           <p className="text-[11px] text-gray-400 font-bold uppercase mb-1">Reliability</p>
                           <p className="text-[16px] font-bold text-[#1A1A2E]">99.95% SLA</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border shadow-sm">
                           <Wifi className="text-[#5D00D6] mb-2" size={20} />
                           <p className="text-[11px] text-gray-400 font-bold uppercase mb-1">Latency</p>
                           <p className="text-[16px] font-bold text-green-600">2ms</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 border-y border-gray-100 py-6">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <WpClientTicker />
        </div>
      </div>

      {/* 2. PROBLEM SECTION - HIGH IMPACT */}
      <section className="w-full bg-[#FAFAFA] py-16 md:py-24 border-b border-gray-100">
         <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
            <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
               <span className="text-[11px] font-bold text-rose-500 uppercase tracking-[0.3em] block mb-6">THE PROBLEM</span>
               <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A2E] mb-8 leading-tight">
                  When business internet fails, operations slow down
               </h2>
               <p className="text-[17px] md:text-[19px] text-[#6B7280] leading-relaxed">
                  Your business relies on the internet for every operation. When your connection falls short, your productivity stops.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
               {[
                  { title: "Video Calls Drop or Lag", icon: Activity, desc: "Interrupt-free video conferencing and crystal clear VoIP audio for every staff member." },
                  { title: "Cloud Applications Slow Down", icon: CloudUpload, desc: "No more spinning wheels. Microsoft 365, Xero, and CRM tools respond instantly." },
                  { title: "Teams Lose Productivity", icon: Users, desc: "Your team stays in the flow, completing tasks faster without network-related delays." },
                  { title: "Shared Connections Struggle", icon: Clock, desc: "Maintain full speed even during peak afternoon hours when standard connections fail." }
               ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                     <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center p-3">
                        <item.icon size={24} className="text-rose-500" />
                     </div>
                     <div>
                        <h3 className="text-[18px] font-bold text-[#1A1A2E] mb-3">{item.title}</h3>
                        <p className="text-[14px] text-[#6B7280] leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
            <p className="text-center text-[17px] font-medium text-gray-500 italic">"For growing businesses, standard connections are often not enough."</p>
         </div>
      </section>

      {/* 3. SOLUTION POSITIONING */}
      <section className="w-full bg-white py-16 md:py-24">
         <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
            <div className="text-center max-w-[800px] mx-auto mb-16">
               <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.3em] block mb-6">THE SOLUTION</span>
               <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A2E] mb-8 leading-tight">
                  How dedicated fibre solves this
               </h2>
               <p className="text-[17px] md:text-[19px] text-[#6B7280] leading-relaxed">
                  Unlike standard connections, dedicated fibre provides a private line built for business-critical operations.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
               <div className="bg-white border border-gray-200 shadow-sm rounded-[32px] p-10 h-full">
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8">Standard Business nbn</h3>
                  <ul className="space-y-6">
                     <li className="flex items-start gap-4 text-gray-600"><span className="text-rose-500 font-bold text-xl leading-none">×</span> <span><strong className="text-gray-900 block font-bold">Fluctuating performance</strong> Speeds drop based on local traffic and peak hours.</span></li>
                     <li className="flex items-start gap-4 text-gray-600"><span className="text-rose-500 font-bold text-xl leading-none">×</span> <span><strong className="text-gray-900 block font-bold">Shared infrastructure</strong> Performance is shared with residential users.</span></li>
                     <li className="flex items-start gap-4 text-gray-600"><span className="text-rose-500 font-bold text-xl leading-none">×</span> <span><strong className="text-gray-900 block font-bold">Limited Uploads</strong> Slower uploads make cloud apps and backups difficult.</span></li>
                  </ul>
               </div>
               <div className="bg-[#1A1A2E] text-white border border-[#5D00D6]/30 rounded-[32px] p-10 h-full relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/30 blur-[80px] rounded-full pointer-events-none" />
                  <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Dedicated Fast Fibre</h3>
                  <ul className="space-y-6 relative z-10">
                     <li className="flex items-start gap-4 text-gray-300"><div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-emerald-400" size={14}/></div> <span><strong className="text-white block font-bold">Dedicated bandwidth</strong> Not shared with others, ensuring full speed 24/7.</span></li>
                     <li className="flex items-start gap-4 text-gray-300"><div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-emerald-400" size={14}/></div> <span><strong className="text-white block font-bold">Consistent speeds</strong> Reliable performance throughout the day.</span></li>
                     <li className="flex items-start gap-4 text-gray-300"><div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-emerald-400" size={14}/></div> <span><strong className="text-white block font-bold">Better cloud & VoIP</strong> Designed for business-critical performance.</span></li>
                  </ul>
               </div>
            </div>
            <p className="text-center mt-12 text-[17px] font-bold text-[#1A1A2E]">"This is a connection your business can depend on."</p>
         </div>
      </section>

      {/* 4. DECISION FRAMEWORK */}
      <Plans 
        eyebrow="CHOOSE THE RIGHT PLAN"
        title="Choosing the right fibre plan for your business"
        subtitle="Focused on use cases and operational needs. No technical overload, just consistent performance."
      />

      <div className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-4xl grid md:grid-cols-2 gap-8">
            <div className="bg-[#F3EEFF] p-8 rounded-2xl border border-[#5D00D6]/10">
                <h4 className="text-xl font-bold text-[#1A1A2E] mb-4">Option 1: Fibre 400</h4>
                <p className="text-gray-600 font-bold mb-4">Best for:</p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 size={16} className="text-[#5D00D6]" /> Small to mid teams</li>
                    <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 size={16} className="text-[#5D00D6]" /> Daily cloud usage</li>
                    <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 size={16} className="text-[#5D00D6]" /> Stable operations</li>
                </ul>
            </div>
            <div className="bg-[#1A1A2E] p-8 rounded-2xl border border-white/10 text-white">
                <h4 className="text-xl font-bold mb-4">Option 2: Fibre 1000</h4>
                <p className="text-gray-400 font-bold mb-4">Best for:</p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 size={16} className="text-[#5D00D6]" /> High-demand environments</li>
                    <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 size={16} className="text-[#5D00D6]" /> Heavy cloud, video, and VoIP</li>
                    <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 size={16} className="text-[#5D00D6]" /> Growing or multi-location teams</li>
                </ul>
            </div>
        </div>
      </div>

      {/* 5. BUSINESS IMPACT SECTION */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#7D38E2] to-white z-0" />

        <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
          <div className="flex flex-col mb-16 gap-4 text-center md:text-left">
            <span className="text-white opacity-80 text-[11px] font-bold tracking-[0.2em] uppercase mb-1">BUSINESS IMPACT</span>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white leading-tight">
              What this means for your business
            </h2>
            <p className="text-white/85 max-w-[720px] text-[18px] md:text-[20px] font-medium leading-relaxed mt-2">
              Replacing unstable internet with dedicated fibre transforms your team's daily experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
               { icon: Phone, title: "Stable video calls and communication", desc: "Interrupt-free video conferencing and crystal clear VoIP audio for every staff member." },
               { icon: CloudUpload, title: "Faster and more reliable cloud access", desc: "No more spinning wheels. Microsoft 365, Xero, and CRM tools respond instantly." },
               { icon: Clock, title: "No slowdowns during busy periods", desc: "Maintain full speed even during peak afternoon hours when other connections fail." },
               { icon: Users, title: "Improved operational efficiency", desc: "Your team stays in the flow, completing tasks faster without network-related delays." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
                <div className="mb-6"><item.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} /></div>
                <h3 className="text-[20px] font-bold mb-4 text-[#0c1024] tracking-tight leading-tight">{item.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed flex-grow font-normal group-hover:text-[#1A1A2E] transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELIABILITY / TRUST LAYER */}
      <section className="bg-gradient-to-br from-[#1A1A2E] to-[#0c1024] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(93,0,214,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10 text-center">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-8">RELIABILITY & TRUST</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto tracking-tight">
               Built for reliability and uptime
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left">
                {[
                    { title: "Business-grade reliability", desc: "Dedicated connectivity with a focused commitment on business uptime and reliability." },
                    { title: "Consistent connection performance", desc: "Dedicated bandwidth ensuring you get the performance you pay for throughout the day." },
                    { title: "Redundancy & optional backup", desc: "Optional automated backup and redundancy for absolute connection security." },
                    { title: "Managed support from C9", desc: "Proactive monitoring and local support whenever your business needs it." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                        <h4 className="text-white font-bold mb-3">{item.title}</h4>
                        <p className="text-gray-400 text-[14px] leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
            <p className="text-[#A855F7] font-bold text-[18px] mb-10">"This is a connection your business can depend on."</p>
            <button 
               onClick={scrollToPlans}
               className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[14px] hover:bg-[#4E00AD] transition-colors shadow-xl"
            >
               Get the Right Fibre Plan <ArrowRight size={18}/>
            </button>
          </FadeUp>
        </div>
      </section>

      {/* 7. SETUP CLARITY */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.3em] block mb-6">SETUP & DELIVERY</span>
                <h2 className="text-3xl md:text-[40px] font-bold text-[#1A1A2E] mb-6">Managed from start to finish</h2>
                <p className="text-gray-600 text-lg">We handle the technical complexity so you can focus on your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                {[
                    { step: "01", title: "Assess business requirements", desc: "We learn how your business operates, how many staff rely on connectivity, and what applications you run daily." },
                    { step: "02", title: "Confirm fibre availability", desc: "We check fibre availability at your exact location and identify the right service tier for your requirements." },
                    { step: "03", title: "Coordinate installation", desc: "C9 coordinates the entire installation process — no technical involvement needed from your team." },
                    { step: "04", title: "Configure and test", desc: "We configure your connection and perform rigorous testing. Provide ongoing support to ensure your operation stays online." }
                ].map((item, idx) => (
                    <div key={idx} className="relative group">
                        <div className="text-[60px] font-bold text-[#5D00D6]/5 absolute -top-8 -left-2 select-none group-hover:text-[#5D00D6]/10 transition-colors">{item.step}</div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold text-[#1A1A2E] mb-4">{item.title}</h4>
                            <p className="text-gray-500 text-[14px] leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 8. REAL USE CASE */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 max-w-[1240px]">
            <div className="bg-white rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-sm overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3EEFF] rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
                <div className="grid md:grid-cols-5 gap-12 items-center relative z-10">
                    <div className="md:col-span-2">
                        <div className="inline-block px-4 py-1 rounded-full bg-[#5D00D6]/10 text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest mb-6">REAL USE CASE</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] leading-tight">
                            Growing company with 20+ users experiencing slow NBN and unstable performance.
                        </h3>
                    </div>
                    <div className="md:col-span-3 grid sm:grid-cols-2 gap-8">
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">What C9 Did</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-emerald-500" size={12} /></div>
                                    <span className="text-[14px] text-gray-700">Migrated to dedicated fibre</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-emerald-500" size={12} /></div>
                                    <span className="text-[14px] text-gray-700">Optimised network setup</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Outcome</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-emerald-500" size={12} /></div>
                                    <span className="text-[14px] text-emerald-600 font-bold">Stable Performance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-emerald-500" size={12} /></div>
                                    <span className="text-[14px] text-emerald-600 font-bold">No Call Interruptions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-emerald-500" size={12} /></div>
                                    <span className="text-[14px] text-emerald-600 font-bold">Improved Productivity</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 9. SERVICE LINKING */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-[1240px] flex flex-wrap justify-center gap-x-12 gap-y-6">
            <a href="/telco/business-nbn" className="text-gray-400 hover:text-[#5D00D6] font-bold text-[14px] flex items-center gap-2 transition-colors">Explore Business NBN <ArrowRight size={14}/></a>
            <a href="/telco/c9-phone-system" className="text-gray-400 hover:text-[#5D00D6] font-bold text-[14px] flex items-center gap-2 transition-colors">See Business Phone Systems <ArrowRight size={14}/></a>
            <a href="/managed-it" className="text-gray-400 hover:text-[#5D00D6] font-bold text-[14px] flex items-center gap-2 transition-colors">View Managed IT Services <ArrowRight size={14}/></a>
        </div>
      </div>

      <WpFAQAndFeedback 
        showFAQ={true} 
        showTestimonials={false} 
        faqItems={[
            {
               q: "Why should I upgrade if I already have nbn?",
               a: "Standard business nbn is a 'best-effort' shared service, which is why performance drops when others consume bandwidth. Dedicated Fibre gives you an exclusive connection directly to your premises, guaranteeing the speed you pay for — especially the symmetrical upload speeds required for modern business operations."
            },
            {
               q: "Is Dedicated Fibre expensive?",
               a: "While the initial investment is higher than standard nbn, the cost is often drastically outweighed by the recovery of lost team productivity and the removal of disruptive downtime. We provide exact pricing based on a site qualification at your address."
            },
            {
               q: "How long does installation take?",
               a: "Timelines depend on the carrier infrastructure at your specific location. We manage the entire process and ensure zero disruption by keeping your existing connection active until the new fibre is completely verified."
            },
            {
               q: "Will the installation disrupt our operations?",
               a: "No. The new fibre is installed in parallel to your existing internet. We only perform the final cut-over outside of business hours, ensuring your team has an instantly faster network when they arrive the next morning."
            }
        ]}
      />

      <div id="consultation-section">
        <WpConsultationForm
          eyebrow="READY TO UPGRADE?"
          title="Upgrade to a connection your business can rely on"
          description="Speak with our team to determine if fibre is the right fit for your business."
          formTitle="Get the Right Fibre Plan"
        />
      </div>
    </main>
  );
}
