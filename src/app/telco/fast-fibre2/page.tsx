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
      
      {/* 1. HERO - EXACT ORIGINAL UI RE-IMPLEMENTED WITH NEW COPY */}
      <section className="relative w-full bg-white pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F3EEFF] border border-[#5D00D6]/20 rounded-full px-4 py-1.5 mb-8">
                <Zap size={14} className="text-[#5D00D6]" />
                <span className="text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest">Telco · Fast Fibre</span>
              </div>

              <h1 className="text-[40px] md:text-[52px] font-bold text-[#1A1A2E] leading-tight mb-8">
                Stop losing productivity. <br />
                <span className="text-[#5D00D6]">Internet that never slows down.</span>
              </h1>

              <p className="text-[#6B7280] mb-10 max-w-[580px] md:text-[18px] leading-relaxed">
                Move past NBN limitations. Upgrade to dedicated Fast Fibre and experience guaranteed bandwidth, lightning-fast uploads, and zero peak-hour congestion.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                <button 
                  onClick={scrollToForm}
                  className="w-full sm:w-auto bg-[#5D00D6] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4E00AD] transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-900/20"
                >
                  Upgrade My Internet <ArrowRight size={18} />
                </button>
                <button 
                  onClick={scrollToPlans}
                  className="w-full sm:w-auto bg-white text-[#1A1A2E] border border-[#E5E7EB] px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:border-[#5D00D6] transition-all flex items-center justify-center gap-2"
                >
                  Check Availability
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Consistent Speeds 24/7',
                  'Symmetrical Up & Down',
                  'Enterprise SLA Guarantee',
                  'Zero peak-hour dropoffs'
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

            {/* RIGHT VISUAL MOCKUP - EXACT ORIGINAL */}
            <div className="relative flex justify-center lg:justify-end">
               <div className="relative w-full aspect-square max-w-[500px] bg-gradient-to-br from-[#F3EEFF] to-white rounded-3xl border border-[#5D00D6]/10 overflow-hidden shadow-[0_20px_50px_rgba(93,0,182,0.05)]">
                  <div className="absolute inset-0 opacity-20">
                     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#5D00D6_0%,transparent_50%)]" />
                     <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#5D00D6_0%,transparent_50%)]" />
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                     <div className="w-full bg-white rounded-2xl p-6 border shadow-sm mb-4">
                        <div className="flex justify-between items-center mb-4">
                           <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Network Throughput</span>
                           <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              <span className="text-[10px] text-green-600 font-bold">1.0 Gbps Link</span>
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
                           <p className="text-[11px] text-gray-400 font-bold uppercase mb-1">Security</p>
                           <p className="text-[16px] font-bold text-[#1A1A2E]">Active</p>
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

      {/* 2. WHY FAST FIBRE UI (Purple Gradient Grid) used for CORE BENEFITS */}
      <section className="relative py-14 md:py-16 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#7D38E2] to-white z-0" />

        <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
          <div className="flex flex-col mb-16 gap-4 text-center md:text-left">
            <span className="text-white opacity-80 text-[11px] font-bold tracking-[0.2em] uppercase mb-1">CORE BUSINESS IMPACT</span>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white leading-tight">
              Built to eliminate wasted hours<br />and protect your operations.
            </h2>
            <p className="text-white/85 max-w-[720px] text-[18px] md:text-[20px] font-medium leading-relaxed mt-2">
              The shift to Fast Fibre isn't just about megabits—it's about removing the friction from your daily business workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               { icon: Clock, title: "Zero Afternoon Slowdowns", desc: "Your dedicated line means you completely bypass consumer network congestion. Performance is guaranteed all day." },
               { icon: CloudUpload, title: "Lightning Fast Uploads", desc: "Symmetrical bandwidth means uploading large files to the cloud happens instantly." },
               { icon: Phone, title: "Flawless Video Conferencing", desc: "Run dozens of simultaneous HD video meetings without a single dropped frame or audio lag." },
               { icon: Users, title: "Better Team Productivity", desc: "Stop paying your staff to wait for loading screens. Keep operations moving at the speed of thought." },
               { icon: Server, title: "Cloud Compatibility", desc: "Seamlessly integrate with Microsoft Azure and AWS, ensuring your cloud tools function natively." },
               { icon: Shield, title: "Risk Mitigation", desc: "Dedicated managed hardware ensures cyber threats are managed before they reach your network." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
                <div className="mb-6"><item.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} /></div>
                <h3 className="text-[22px] font-bold mb-3 text-[#0c1024] tracking-tight leading-tight">{item.title}</h3>
                <p className="text-gray-600 text-[16px] md:text-[17px] mb-6 leading-relaxed flex-grow font-normal group-hover:text-[#1A1A2E] transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 shadow-2xl hover:gap-4 transition-all group bg-[#5D00D6] text-white rounded-full h-14 px-10 text-base font-bold"
            >
              Get Custom Quote <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. ORIGINAL PLANS COMPONENT PLACED HERE PERFECTLY */}
      <Plans />

      {/* 4. WHAT'S INCLUDED UI (Gray/White blocks) USED FOR 'WHEN NBN FAILS' & 'THE DIFFERENCE' */}
      <section className="w-full bg-[#FAFAFA] py-16 md:py-24 border-y border-gray-100">
         <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
            <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
               <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.3em] block mb-6">WHEN NBN IS NOT ENOUGH</span>
               <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A2E] mb-8 leading-tight">
                  Why you shouldn't run a business <br/>on shared infrastructure.
               </h2>
               <p className="text-[17px] md:text-[19px] text-[#6B7280] leading-relaxed">
                  Standard business NBN is a shared connection. When your neighbours download, your speeds suffer. If these issues sound familiar, you've outgrown your connection.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
               {[
                  { title: "Peak Hour Slowdowns", icon: Clock, desc: "Every afternoon, performance drops and your entire team wastes time waiting for cloud apps to load or files to save." },
                  { title: "Painfully Slow Uploads", icon: CloudUpload, desc: "Sending large files, syncing to OneDrive, or backing up data grinds your network to a halt." },
                  { title: "Video Call Dropouts", icon: Activity, desc: "Constant freezing and audio issues during critical client meetings make your business look unprofessional." }
               ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-6">
                     <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center p-3.5 shadow-sm border border-rose-100">
                        <item.icon size={28} className="text-rose-500" />
                     </div>
                     <div>
                        <h3 className="text-[20px] font-bold text-[#1A1A2E] mb-4 leading-tight">{item.title}</h3>
                        <p className="text-[16px] text-[#6B7280] leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
               <div className="bg-white border border-gray-200 shadow-sm rounded-[32px] p-10 h-full">
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8">Standard NBN</h3>
                  <ul className="space-y-6">
                     <li className="flex items-start gap-4 text-gray-600"><span className="text-rose-500 font-bold text-xl leading-none">×</span> <span><strong className="text-gray-900 block">Fluctuating Speeds</strong> Performance drops based on local traffic.</span></li>
                     <li className="flex items-start gap-4 text-gray-600"><span className="text-rose-500 font-bold text-xl leading-none">×</span> <span><strong className="text-gray-900 block">Capped Uploads</strong> Upload speeds are heavily restricted vs downloads.</span></li>
                     <li className="flex items-start gap-4 text-gray-600"><span className="text-rose-500 font-bold text-xl leading-none">×</span> <span><strong className="text-gray-900 block">Shared Line</strong> Infrastructure is shared with residential users.</span></li>
                  </ul>
               </div>
               <div className="bg-[#1A1A2E] text-white border border-[#5D00D6]/30 rounded-[32px] p-10 h-full relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/30 blur-[80px] rounded-full pointer-events-none" />
                  <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Dedicated Fast Fibre</h3>
                  <ul className="space-y-6 relative z-10">
                     <li className="flex items-start gap-4 text-gray-300"><div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-emerald-400" size={14}/></div> <span><strong className="text-white block">Consistent Speeds 24/7</strong> Performance never drops.</span></li>
                     <li className="flex items-start gap-4 text-gray-300"><div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-emerald-400" size={14}/></div> <span><strong className="text-white block">Symmetrical Speeds</strong> Uploads are just as fast as downloads.</span></li>
                     <li className="flex items-start gap-4 text-gray-300"><div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-emerald-400" size={14}/></div> <span><strong className="text-white block">Private Line</strong> A dedicated connection straight to your business.</span></li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 5. DIFFERENTIATION */}
      <section className="bg-gradient-to-br from-[#5D00D6] to-[#3a008a] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.4)_0%,transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10 text-center">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-8">THE C9 ADVANTAGE</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto tracking-tight">
              More than just an ISP. <br/>We are your IT Partner.
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Unlike generic telcos that disappear after installation, C9 provides true business-grade support. We monitor your connection proactively, hold direct wholesale agreements, and answer the phone locally when you need us.
            </p>
            <button 
               onClick={scrollToForm}
               className="inline-flex items-center justify-center gap-2 bg-white text-[#5D00D6] rounded-full h-14 px-8 font-bold text-[15px] hover:bg-gray-50 transition-colors shadow-xl"
            >
               Talk to a Fibre Expert <ArrowRight size={18}/>
            </button>
          </FadeUp>
        </div>
      </section>

      <WpFAQAndFeedback 
        showFAQ={true} 
        showTestimonials={false} 
        faqItems={[
            {
               q: "Why should I upgrade if I already have NBN?",
               a: "Business NBN is a 'best-effort' shared service, which is why performance drops in the afternoon. Dedicated Fibre gives you an exclusive connection directly to your premises, guaranteeing the speed you pay for—especially symmetrical upload speeds required for cloud operations."
            },
            {
               q: "Is Dedicated Fibre expensive?",
               a: "Pricing has scaled down significantly over the last few years. The cost difference is often drastically outweighed by the immediate recovery of lost team productivity and the removal of disruptive downtime. We can quote exact pricing during a consultation."
            },
            {
               q: "How long does installation take?",
               a: "Standard installation timelines depend on the carrier infrastructure at your specific location. However, we ensure zero disruption during the build phase by leaving your existing connection active until the new fibre is completely verified."
            },
            {
               q: "Will the installation disrupt our operations?",
               a: "No. The new fibre is installed in parallel to your existing internet. We only perform the final 'cut-over' to the new connection outside of business hours, meaning your staff arrive the next morning to an instantly faster network."
            }
        ]}
      />

      <div id="consultation-section">
        <WpConsultationForm
          eyebrow="UPGRADE COMMAND CENTER"
          title="Ready for a network that actually performs?"
          description="Submit your details, and our local team will run a quick service qualification on your address to tell you exactly what speeds are available and what it will cost."
          formTitle="Check Fibre Availability"
        />
      </div>
    </main>
  );
}
