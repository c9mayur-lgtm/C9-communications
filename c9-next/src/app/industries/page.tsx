'use client';

import React from 'react';
import {
  HeartPulse, Truck, Layout, ArrowRight, Briefcase, ShoppingBag, GraduationCap, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';

const INDUSTRIES_DATA = [
  {
    title: "Healthcare",
    icon: HeartPulse,
    desc: "HIPAA-compliant voice and secure data networks for clinics and medical centres.",
    id: "health"
  },
  {
    title: "Professional Services",
    icon: Briefcase,
    desc: "High-performance connectivity for legal, accounting, and financial firms.",
    id: "pro"
  },
  {
    title: "Retail & E-commerce",
    icon: ShoppingBag,
    desc: "Reliable POS connectivity and cloud voice for multi-site retail groups.",
    id: "retail"
  },
  {
    title: "Education",
    icon: GraduationCap,
    desc: "Managed campuses networks with advanced security and content filtering.",
    id: "edu"
  },
  {
    title: "Logistics",
    icon: Truck,
    desc: "Real-time communication and robust internet for warehouses and transport hubs.",
    id: "logistics"
  },
  {
    title: "Hospitality",
    icon: Layout,
    desc: "Guest WiFi, cloud PBX, and secure networks for hotels and restaurants.",
    id: "hosp"
  }
];

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function IndustriesPage() {
  return (
    <div className="pt-16 md:pt-24 bg-white">
      
      {/* ── HERO ── */}
      <Section className="text-center" bg="none">
        <FadeIn>
          <Label>Vertical Expertise</Label>
        </FadeIn>
        <FadeIn delay={0.1}>
          <H1 className="mb-6">
            Technology designed<br />
            <span className="text-[#5D00D6]">for your sector.</span>
          </H1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Body className="max-w-xl mx-auto">
            We've developed tailored communication stacks for Australia's most demanding industries.
          </Body>
        </FadeIn>
      </Section>

      {/* ── INDUSTRIES GRID ── */}
      <Section bg="white" className="pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((ind, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group bg-[#F4F0FA]/30 border border-gray-100 rounded-[32px] p-10 h-full flex flex-col hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6] mb-8 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                  <ind.icon size={28} />
                </div>
                <H3 className="mb-4 text-2xl tracking-tight leading-tight">{ind.title}</H3>
                <Body className="mb-10 text-[17px] leading-relaxed opacity-80">{ind.desc}</Body>
                
                <C9Button variant="outline" className="mt-auto border-[#5D00D6]/20 text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white rounded-full">
                  {ind.title} Solutions <ArrowRight size={16} className="ml-2" />
                </C9Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── CASE STUDY BRIEF ── */}
      <Section bg="gray" className="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <H2 className="mb-6 text-4xl font-black tracking-tight">Proven in the field.</H2>
            <Body className="mb-10 text-lg leading-relaxed">
              See how we're helping Australian enterprises transform their communication infrastructure with C9 technology.
            </Body>
            <C9Button variant="default" className="rounded-full px-10">
              View All Case Studies <ArrowRight size={18} className="ml-2" />
            </C9Button>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-white border border-gray-100 rounded-[32px] p-10 shadow-xl shadow-purple-900/5 relative">
               <div className="absolute top-0 right-0 p-8 text-[#5D00D6] opacity-5">
                 <Zap size={120} strokeWidth={0.5} />
               </div>
               <div className="flex gap-1 text-amber-400 mb-6">
                 {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="currentColor" />)}
               </div>
               <p className="text-[20px] font-medium text-[#0c1024] leading-relaxed mb-8 italic">
                 "C9 was the only telco that understood our HIPAA compliance requirements for healthcare. Their setup was flawless and our team loves the new handsets."
               </p>
               <div>
                 <div className="font-black text-[#5D00D6] text-lg">Acacia Health Group</div>
                 <div className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-1">Medical Practice Management</div>
               </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
