'use client';

import React from 'react';
import { 
  Rocket, 
  Target,
  ShieldCheck,
  Cpu,
  Globe,
  Plus,
  Zap
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

export default function CareersPage() {
  return (
    <div className="pt-0 bg-white">
      
      {/* ══ 1. HERO: CULTURE ════════════════════════════════════════ */}
      <Section className="relative overflow-hidden" bg="none">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <div>
            <FadeIn>
              <Label>C9 Careers</Label>
            </FadeIn>
            <FadeIn delay={0.1}>
              <H1 className="mb-6 !text-left">
                A Career Defined by <span className="text-[#5D00D6]">Technical Excellence.</span>
              </H1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Body className="mb-10 text-lg md:text-xl text-left">
                The best engineers choose C9 because we prioritize precision over corporate fluff. We provide the high-stakes environments and engineering freedom required to do your best work.
              </Body>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <C9Button className="px-10 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full" asChild>
                   <Link href="#values">Our Values & Culture</Link>
                </C9Button>
                <C9Button variant="outline" className="px-10 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white" asChild>
                   <Link href="/about">Back to About C9</Link>
                </C9Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="right" className="relative">
            <div className="relative rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 aspect-square">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                 alt="C9 Collaborative Engineering" 
                 className="w-full h-full object-cover grayscale"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/20 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ══ 2. VALUES: CREDIBILITY ══════════════════════════════════ */}
      <Section id="values" bg="gray" className="py-24">
        <div className="text-center mb-16">
          <Label className="mb-4 block text-rose-600">The C9 Code</Label>
          <H2>Precision. Ownership. Accountability.</H2>
          <Body className="max-w-2xl mx-auto mt-4">
            Our culture is built on a shared commitment to technical results. We remove the noise so you can focus on solving complex infrastructure challenges.
          </Body>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: Target, 
              title: "Extreme Ownership", 
              desc: "We own the results of our engineering. No blame-shifting, just root-cause resolution." 
            },
            { 
              icon: Zap, 
              title: "Operational Speed", 
              desc: "We move fast but with precision. We value engineers who can deliver high-velocity stability." 
            },
            { 
              icon: ShieldCheck, 
              title: "Security Baseline", 
              desc: "Security isn't a task—it's how we think about everything we build and manage." 
            },
            { 
              icon: Cpu, 
              title: "Engineering Freedom", 
              desc: "The freedom to design, optimize, and deploy best-practice solutions without corporate bureaucracy." 
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-[32px] bg-white border border-slate-100 hover:border-[#5D00D6]/20 transition-all group h-full shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6] mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <Body className="text-sm">{item.desc}</Body>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ══ 3. WHY JOIN: ENVIRONMENT ════════════════════════════════ */}
      <Section bg="white" className="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <FadeIn direction="left">
              <Label className="mb-4 block">The Environment</Label>
              <H2>High-Stakes Projects. Low-Friction Culture.</H2>
              <Body className="mt-6 mb-10 text-lg">
                At C9, you'll work on mission-critical national infrastructure that powers major Australian healthcare, logistics, and retail groups. This is where your expertise has a measurable impact.
              </Body>
              <ul className="space-y-6">
                {[
                  { title: "Onshore Senior Team", desc: "Collaborate with high-calibre specialists who respect technical precision." },
                  { title: "Direct Infrastructure Control", desc: "Work on our own core network, not just resold portals." },
                  { title: "Rigorous Standards", desc: "We align with ISO 27001 and Essential Eight across all operations." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#5D00D6] flex items-center justify-center text-white shrink-0 mt-0.5">
                       <Plus size={14} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900">{item.title}</h4>
                       <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
           </FadeIn>
           <FadeIn direction="right" delay={0.2} className="relative">
              <div className="bg-[#0c1024] p-12 rounded-[48px] text-white overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-8 text-[#5D00D6] opacity-10">
                   <Rocket size={160} />
                 </div>
                 <H3 className="text-white mb-6">Growth Path</H3>
                 <Body className="text-gray-400 mb-8">
                   We invest in your capability through formal certifications and hands-on exposure to complex enterprise environments.
                 </Body>
                 <div className="flex flex-wrap gap-3">
                    {["Network Architect", "Security Lead", "Solution Engineer", "Service Manager"].map((role, i) => (
                      <div key={i} className="px-4 py-2 bg-white/10 rounded-full text-[12px] font-bold">
                         {role}
                      </div>
                    ))}
                 </div>
              </div>
           </FadeIn>
        </div>
      </Section>

      {/* ══ 4. LOOP CLOSURE: ABOUT (Trust Funnel Transition) ════════ */}
      <AuthorityCta 
        variant="funnel"
        eyebrow="ECOSYSTEM VALIDATION"
        title="Ready to Impact Enterprise IT?"
        description="We're always looking for exceptional engineers who value technical accountability. Start by learning more about our operational model."
        primaryText="About C9 Operations"
        primaryHref="/about"
        secondaryText="Submit Your Interest"
        secondaryHref="#consultation"
        bg="bg-gray"
      />

      <div id="consultation">
        <WpConsultationForm
          eyebrow="TALENT ACQUISITION"
          title="Connect with Our Talent Team"
          description="Don't see a specific role? We're always looking for senior engineers and network architects who fit our engineering-first culture."
          formTitle="Express Interest"
        />
      </div>
    </div>
  );
}
