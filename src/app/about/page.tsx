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
import EngineeringStructure from '@/components/sections/enterprise/EngineeringStructure';
import EscalationModel from '@/components/sections/enterprise/EscalationModel';

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
              <span className="c9-eyebrow !text-white/60 mb-8 border border-white/20 px-4 py-1.5 rounded-full bg-white/10">
                SINCE 2015
              </span>
              <h1 className="c9-hero-title !text-white mb-10">
                Simplifying technology <br />
                <span className="text-[#A855F7]">for a complex world.</span>
              </h1>
              <p className="c9-body !text-gray-400 !text-[20px] md:!text-[24px] max-w-3xl">
                C9 Communications delivers enterprise-grade managed IT, network, and security services for multi-site organisations across Australia, backed by 24/7 operations, SLA-driven support, and proven large-scale deployments.
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
              { label: 'Business Endpoints', val: '25,000+' },
              { label: 'Uptime Commitment', val: '99.99%' },
              { label: 'AU Engineering Support', val: '24/7/365' },
              { label: 'National Infrastructure', val: 'Tier 1 Core' }
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="text-[42px] md:text-[56px] font-black text-[#1A1A2E] tracking-tighter leading-none mb-4">{s.val}</div>
                <div className="c9-eyebrow">{s.label}</div>
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
                        <img 
                          src="/images/c9_team_collaboration.png" 
                          alt="C9 Team" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </div>
             </FadeUp>
             
             <div>
                <FadeUp>
                    <span className="c9-eyebrow mb-6">OUR DNA</span>
                    <h2 className="c9-section-heading mb-10">
                        Born in Sydney. <br className="hidden md:block"/>
                        Engineered for Australia.
                    </h2>
                    <div className="space-y-8 mb-12">
                        <p className="c9-body !text-xl !text-gray-600 font-medium">
                            Founded in 2015, C9 was established to solve a critical gap: mid-market Australian businesses were being underserved by the marketing-heavy majors.
                        </p>
                        <p className="c9-body">
                            We built a telco that prioritises engineering over everything else. We own and operate our core network infrastructure, ensuring that whenever you connect with C9, you're on a private, optimized, and business-focused network.
                        </p>
                    </div>
                    <button 
                      onClick={() => document.getElementById('engineering-section')?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center gap-3 bg-[#5D00D6] text-white px-10 py-5 rounded-full font-bold hover:gap-5 transition-all shadow-xl shadow-purple-900/10 cursor-pointer c9-button-label"
                    >
                        See Our Engineering Model <ArrowRight size={20} />
                    </button>
                </FadeUp>
             </div>
          </div>
        </div>
      </section>

      {/* ── 4. ENGINEERING STRUCTURE ── */}
      <div id="engineering-section">
        <EngineeringStructure />
      </div>

      {/* ── 5. ESCALATION MODEL ── */}
      <EscalationModel />

      {/* ── 6. GLOBAL SCALE / TRUST (Awards & Partners Logo Strip) ── */}
      <section className="py-24 border-y border-gray-100 bg-slate-50">
        <div className="container mx-auto px-6 max-w-[1240px]">
            <div className="text-center mb-16">
                <span className="text-[#5D00D6] font-bold uppercase tracking-widest text-[11px] mb-4 block">VALIDATED BY INDUSTRY</span>
                <h3 className="text-2xl font-bold text-[#1A1A2E]">Certifications & Recognition</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                <div className="flex flex-col items-center gap-3"><Award size={42} className="text-[#5D00D6]" /><span className="font-bold text-[10px] uppercase tracking-wider">Microsoft Partner</span></div>
                <div className="flex flex-col items-center gap-3"><Globe2 size={42} className="text-[#5D00D6]" /><span className="font-bold text-[10px] uppercase tracking-wider">nbn Accredited</span></div>
                <div className="flex flex-col items-center gap-3"><ShieldCheck size={42} className="text-[#5D00D6]" /><span className="font-bold text-[10px] uppercase tracking-wider">Fortinet Expert</span></div>
                <div className="flex flex-col items-center gap-3"><Briefcase size={42} className="text-[#5D00D6]" /><span className="font-bold text-[10px] uppercase tracking-wider">ISO 27001 Ready</span></div>
                <div className="flex flex-col items-center gap-3"><Heart size={42} className="text-[#5D00D6]" /><span className="font-bold text-[10px] uppercase tracking-wider">Sydney Enterprise</span></div>
                <div className="flex flex-col items-center gap-3"><Zap size={42} className="text-[#5D00D6]" /><span className="font-bold text-[10px] uppercase tracking-wider">Innovation Leader</span></div>
            </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ── */}
      <WpConsultationForm
        eyebrow="READY TO PARTNER?"
        title="Simplifying IT for your business."
        description="Experience a more technical, more reliable, and more human technology partner."
        formTitle="Speak with an Expert"
      />
    </main>
  );
}
