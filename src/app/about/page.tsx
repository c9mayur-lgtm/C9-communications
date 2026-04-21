'use client';

import React from 'react';
import { 
  Building2, 
  Users, 
  Target, 
  ShieldCheck, 
  Globe2, 
  Briefcase,
  Zap,
  ArrowRight,
  Heart,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* ── 1. HERO: PURPOSE-DRIVEN ── */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-[#1A1A2E] text-white">
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10">
          <div className="max-w-4xl">
            <FadeUp>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest mb-8 border border-white/20">
                SINCE 2015
              </span>
              <h1 className="text-[48px] md:text-[80px] font-bold leading-[1.05] tracking-tight mb-10">
                Simplifying technology <br />
                <span className="text-[#A855F7]">for a complex world.</span>
              </h1>
              <p className="text-gray-400 text-[20px] md:text-[24px] leading-relaxed max-w-2xl">
                C9 Communications is an engineering-led telco and managed IT provider dedicated to delivering performance without compromise.
              </p>
            </FadeUp>
          </div>
        </div>
        
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-20 overflow-hidden">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="w-[800px] h-[800px] border-[1px] border-white/20 rounded-full flex items-center justify-center -translate-y-1/4 translate-x-1/4"
            >
                <div className="w-[600px] h-[600px] border-[1px] border-white/10 rounded-full" />
                <div className="w-[400px] h-[400px] border-[1px] border-white/5 rounded-full" />
            </motion.div>
        </div>
      </section>

      {/* ── 2. AT A GLANCE (Big Stats) ── */}
      <section className="py-20 bg-slate-50 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            {[
              { label: 'Business Clients', val: '5,000+' },
              { label: 'Uptime Commitment', val: '99.99%' },
              { label: 'AU Engineering Support', val: '24/7/365' },
              { label: 'National Infrastructure', val: 'Tier 1 Core' }
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="text-[42px] md:text-[56px] font-black text-[#1A1A2E] tracking-tighter leading-none mb-4">{s.val}</div>
                <div className="text-[#5D00D6] font-bold uppercase tracking-[0.2em] text-[11px]">{s.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUR STORY & DNA ── */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <FadeUp>
                <div className="relative">
                    <div className="aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden group border border-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                             <Building2 size={200} className="text-[#5D00D6]/5 group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
             </FadeUp>
             
             <div>
                <FadeUp>
                    <span className="text-[#5D00D6] font-bold uppercase tracking-widest text-[13px] mb-6 block">OUR DNA</span>
                    <h2 className="text-[36px] md:text-[52px] font-bold text-[#1A1A2E] mb-10 leading-tight">
                        Born in Sydney. <br className="hidden md:block"/>
                        Engineered for Australia.
                    </h2>
                    <div className="space-y-8 mb-12">
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            Founded in 2015, C9 was established to solve a critical gap: mid-market Australian businesses were being underserved by the marketing-heavy majors.
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            We built a telco that prioritises engineering over everything else. We own and operate our core network infrastructure, ensuring that whenever you connect with C9, you're on a private, optimized, and business-focused network.
                        </p>
                    </div>
                    <button className="flex items-center gap-3 bg-[#5D00D6] text-white px-10 py-5 rounded-full font-bold hover:gap-5 transition-all shadow-xl shadow-purple-900/10">
                        See Why C9 <ArrowRight size={20} />
                    </button>
                </FadeUp>
             </div>
          </div>
        </div>
      </section>

      {/* ── 4. VALUES GRID ── */}
      <section className="py-24 md:py-32 bg-[#F8F9FF]">
        <div className="container mx-auto px-6 max-w-[1240px]">
            <div className="text-center mb-20 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-6">Our Core Values</h2>
                <p className="text-gray-500 text-lg">The principles that guide every design, implementation, and support call.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Target, title: "Uncompromising Precision", desc: "We design networks with surgical precision, ensuring every byte is optimised for your business operations." },
                    { icon: ShieldCheck, title: "Security as Standard", desc: "Security isn't an add-on — it's baked into every connection and infrastructure layer we deliver." },
                    { icon: Users, title: "Human Engineering", desc: "No overseas support. You speak to senior AU engineers who own the problem until it's resolved." }
                ].map((v, i) => (
                    <FadeUp key={i} delay={i * 0.1}>
                        <div className="bg-white p-12 rounded-[40px] border border-gray-100 h-full hover:shadow-2xl hover:shadow-purple-900/5 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-10">
                                <v.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">{v.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">{v.desc}</p>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </div>
      </section>

      {/* ── 5. GLOBAL SCALE / TRUST (Awards & Partners Logo Strip) ── */}
      <section className="py-24 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
            <div className="text-center mb-16">
                <span className="text-[#5D00D6] font-bold uppercase tracking-widest text-[11px] mb-4 block">VALIDATED BY INDUSTRY</span>
                <h3 className="text-2xl font-bold text-[#1A1A2E]">Certifications & Recognition</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-30 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                <div className="flex flex-col items-center gap-2"><Award size={48} /><span className="font-bold text-[10px]">Microsoft Partner</span></div>
                <div className="flex flex-col items-center gap-2"><Globe2 size={48} /><span className="font-bold text-[10px]">nbn Accredited</span></div>
                <div className="flex flex-col items-center gap-2"><ShieldCheck size={48} /><span className="font-bold text-[10px]">Fortinet Expert</span></div>
                <div className="flex flex-col items-center gap-2"><Briefcase size={48} /><span className="font-bold text-[10px]">Business Award 2024</span></div>
                <div className="flex flex-col items-center gap-2"><Heart size={48} /><span className="font-bold text-[10px]">Sydney Enterprise</span></div>
                <div className="flex flex-col items-center gap-2"><Zap size={48} /><span className="font-bold text-[10px]">Innovation Leader</span></div>
            </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ── */}
      <WpConsultationForm
        eyebrow="READY TO PARTNER?"
        title="Simplifying IT for your business."
        description="Experience a more technical, more reliable, and more human technology partner."
        formTitle="Speak with an Expert"
      />
    </main>
  );
}
