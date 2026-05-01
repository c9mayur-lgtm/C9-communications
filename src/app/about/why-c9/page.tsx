'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Headphones, 
  LineChart, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert,
  BarChart3,
  Users,
  Lock,
  Activity,
  Server,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { AuthorityCta } from '@/components/sections/shared/AuthorityCta';

const FadeIn = ({ children, delay = 0, className, direction = 'up' }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' 
}) => {
  const variants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function WhyC9Page() {
  return (
    <div className="pt-0 bg-white">
      
      {/* ══ 1. HERO: DIFFERENTIATION ═══════════════════════════════ */}
      <Section className="relative overflow-hidden" bg="none">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <div>
            <FadeIn>
              <Label>The C9 Difference</Label>
            </FadeIn>
            <FadeIn delay={0.1}>
              <H1 className="mb-6 !text-left">
                The Low-Risk Choice for <span className="text-[#5D00D6]">Enterprise Operations</span>
              </H1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Body className="mb-10 text-lg md:text-xl text-left">
                Most providers focus on marketing and sales. C9 focuses on engineering, uptime, and absolute accountability. We remove the operational risk that standard MSPs leave behind.
              </Body>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <C9Button className="px-10 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full" asChild>
                   <Link href="#differentiation">See Our Differentiation</Link>
                </C9Button>
                <C9Button variant="outline" className="px-10 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white" asChild>
                   <Link href="/about/team">Meet the Engineering Team</Link>
                </C9Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="right" className="relative">
            <div className="relative rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 aspect-square">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                 alt="C9 Analytics Dashboard" 
                 className="w-full h-full object-cover grayscale opacity-90"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/20 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ══ 2. RISK MITIGATION ═══════════════════════════════════════ */}
      <Section id="differentiation" bg="gray" className="py-24">
        <div className="text-center mb-16">
          <Label className="mb-4 block text-rose-600">Risk Reduction</Label>
          <H2>Eliminating the "MSP Gap"</H2>
          <Body className="max-w-2xl mx-auto mt-4">
            C9 addresses the three primary risks enterprise buyers face when selecting a technology partner: accountability failure, technical stagnation, and vendor fragmentation.
          </Body>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: ShieldAlert, 
              title: "Accountability Failure", 
              desc: "Standard MSPs shift blame to ISPs or software vendors. C9 owns the incident from detection to resolution, regardless of where the fault lies." 
            },
            { 
              icon: Activity, 
              title: "Technical Stagnation", 
              desc: "We don't just 'maintain' systems. We proactively harden your infrastructure and optimize performance through continuous engineering reviews." 
            },
            { 
              icon: Layers, 
              title: "Vendor Fragmentation", 
              desc: "Consolidate your IT, network, and security under one operational command layer. One partner to hold accountable for every business outcome." 
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-10 rounded-[32px] bg-white border border-slate-100 hover:border-[#5D00D6]/20 transition-all group h-full shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6] mb-8 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <H3 className="mb-4 text-2xl tracking-tight">{item.title}</H3>
                <Body className="text-sm">{item.desc}</Body>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ══ 3. OPERATIONAL OWNERSHIP ════════════════════════════════ */}
      <Section bg="white" className="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <FadeIn direction="left">
              <Label className="mb-4 block">Engineered for Uptime</Label>
              <H2>Direct Infrastructure Control</H2>
              <Body className="mt-6 mb-10 text-lg">
                Unlike resellers, C9 operates its own core network infrastructure. This means we have direct control over your connectivity, routing, and performance—not just a portal to someone else's network.
              </Body>
              <div className="space-y-4">
                 {[
                   "Private, business-grade core network (not shared with residential traffic)",
                   "End-to-end visibility from your office to the cloud",
                   "Direct carrier-level escalation for nbn™ Enterprise Ethernet",
                   "SLA-backed performance targets for latency and packet loss"
                 ].map((li, i) => (
                   <div key={i} className="flex items-center gap-3 font-bold text-slate-800">
                      <CheckCircle2 className="text-[#5D00D6] shrink-0" size={18} /> {li}
                   </div>
                 ))}
              </div>
           </FadeIn>
           <FadeIn direction="right" delay={0.2} className="relative">
              <div className="bg-[#0c1024] p-12 rounded-[48px] text-white overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-8 text-[#5D00D6] opacity-10">
                   <Server size={160} />
                 </div>
                 <H3 className="text-white mb-6">Our Infrastructure Advantage</H3>
                 <Body className="text-gray-400 mb-8">
                   We bypass the standard "helpdesk" runaround by having direct engineering access to the hardware and circuits that power your business.
                 </Body>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                       <div className="text-2xl font-black text-[#5D00D6] mb-1">1:1</div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Contention Ratio</div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                       <div className="text-2xl font-black text-[#5D00D6] mb-1">4hr</div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Restoration eSLA</div>
                    </div>
                 </div>
              </div>
           </FadeIn>
        </div>
      </Section>

      {/* ══ 4. COMPARISON ═══════════════════════════════════════════ */}
      <Section bg="gray" className="py-24">
        <div className="text-center mb-16">
           <Label className="mb-4 block">Market Comparison</Label>
           <H2>Why Partners Switch to C9</H2>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-[32px] border border-slate-200 shadow-xl bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0c1024] text-white">
                <th className="p-8 font-bold uppercase tracking-widest text-[11px]">Feature</th>
                <th className="p-8 font-bold uppercase tracking-widest text-[11px]">Standard MSP</th>
                <th className="p-8 font-bold uppercase tracking-widest text-[11px] bg-[#5D00D6]">C9 Communications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { feature: 'Support Entry', std: 'Level 1 Dispatcher', c9: 'Senior Systems Engineer' },
                { feature: 'Issue Ownership', std: 'Best Effort / Ticket Closing', c9: 'Root-Cause Accountability' },
                { feature: 'Network Control', std: 'Reseller Portal Only', c9: 'Direct Infrastructure Owner' },
                { feature: 'Security', std: 'Manual / Reactive', c9: 'Policy-Driven / Automated' },
                { feature: 'Reporting', std: 'Basic Activity Log', c9: 'Operational Strategy Review' }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-8 font-bold text-slate-900">{row.feature}</td>
                  <td className="p-8 text-slate-500">{row.std}</td>
                  <td className="p-8 text-[#5D00D6] font-bold bg-[#5D00D6]/5">{row.c9}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ══ 5. CTA: TEAM (Trust Funnel Transition) ══════════════════ */}
      <AuthorityCta 
        variant="funnel"
        eyebrow="CAPABILITY PROOF"
        title="Capability Driven by People"
        description="Our infrastructure is world-class, but our engineering team is what defines our results. See the people who own your operational continuity."
        primaryText="Meet the Engineering Team"
        primaryHref="/about/team"
        bg="bg-white"
      />

      <WpConsultationForm
        eyebrow="READY TO START?"
        title="Experience the C9 Difference Firsthand"
        description="Book a technical review with our engineering team to audit your current environment and identify risk reduction opportunities."
        formTitle="Request a Technical Review"
      />
    </div>
  );
}
