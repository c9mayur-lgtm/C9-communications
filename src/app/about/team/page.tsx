'use client';

import React from 'react';
import { Users, Code, Shield, Network, CheckCircle2, Cpu, Activity, Award, Globe } from 'lucide-react';
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

export default function TeamPage() {
  return (
    <div className="pt-0 bg-white">
      
      {/* ══ 1. HERO: CAPABILITY ═════════════════════════════════════ */}
      <Section className="relative overflow-hidden" bg="none">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <div>
            <FadeIn>
              <Label>Engineering Capability</Label>
            </FadeIn>
            <FadeIn delay={0.1}>
              <H1 className="mb-6 !text-left">
                Engineering-Led Delivery.<br />
                <span className="text-[#5D00D6]">Human-Scale Support.</span>
              </H1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Body className="mb-10 text-lg md:text-xl text-left">
                C9 removes the frustration of script-reading helpdesks. We provide direct access to Australian-managed senior engineers who own your technical outcomes.
              </Body>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <C9Button className="px-10 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full" asChild>
                   <Link href="#capability">Our Capability Tiers</Link>
                </C9Button>
                <C9Button variant="outline" className="px-10 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white" asChild>
                   <Link href="/about/careers">Join the Engineering Team</Link>
                </C9Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="right" className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
               <img 
                 src="/c9_engineering_team_collaboration_1777621695616.png" 
                 alt="C9 Senior Engineering" 
                 className="w-full h-full object-cover grayscale"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent" />
               <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="text-[12px] font-bold uppercase tracking-widest text-[#A855F7] mb-2">AU-Managed Delivery</div>
                  <H3 className="text-white text-2xl">AU-Managed Engineering</H3>
               </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ══ 2. CAPABILITY TIERS ═════════════════════════════════════ */}
      <Section id="capability" bg="gray" className="py-24">
        <div className="text-center mb-16">
          <Label className="mb-4 block text-rose-600">Expertise Profile</Label>
          <H2>Senior Ownership Across Every Tier</H2>
          <Body className="max-w-2xl mx-auto mt-4">
            We don't hire dispatchers. Every member of our support and implementation team is a technical specialist capable of resolving complex issues on the first engagement.
          </Body>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: Network, 
              title: "Network Architects", 
              desc: "Designing private business core infrastructure and SD-WAN fabrics for multi-site reliability." 
            },
            { 
              icon: Shield, 
              title: "Security Operations", 
              desc: "Focused on Essential 8 governance, EDR alert monitoring, and active threat containment." 
            },
            { 
              icon: Cpu, 
              title: "Infrastructure Engineers", 
              desc: "Specialists in server virtualisation, Azure cloud environments, and hybrid storage solutions." 
            },
            { 
              icon: Activity, 
              title: "L3 Support Lead", 
              desc: "Immediate access to engineers who troubleshoot root causes, not just symptoms." 
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-lg bg-white transition-all h-full">
                <div className="w-12 h-12 rounded-lg bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6] mb-6 group-hover:scale-110">
                  <item.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <Body className="text-sm">{item.desc}</Body>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ══ 3. ENGINEERING CULTURE ══════════════════════════════════ */}
      <Section bg="white" className="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <FadeIn direction="left">
              <Label className="mb-4 block">Delivery Proof</Label>
              <H2>A Culture of Absolute Accountability</H2>
              <Body className="mt-6 mb-10 text-lg">
                Engineering excellence isn't just about technical skill; it's about ownership. At C9, our engineers are incentivised to eliminate recurring issues, ensuring your infrastructure becomes more stable over time.
              </Body>
              <div className="space-y-6">
                 {[
                   { title: "No Script Reading", desc: "Our engineers assess the specific context of your environment before acting." },
                   { title: "AU-Managed Operations", desc: "Our service desk and engineering team is managed by Australian technical leads." },
                   { title: "Direct Access", desc: "No Level 1 gatekeepers. Your request goes straight to the people who can fix it." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <CheckCircle2 className="text-[#5D00D6] shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <Body className="text-sm">{item.desc}</Body>
                      </div>
                   </div>
                 ))}
              </div>
           </FadeIn>
           <FadeIn direction="right" delay={0.2}>
              <div className="p-12 rounded-[48px] bg-[#0c1024] text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 text-[#5D00D6] opacity-10">
                   <Award size={160} />
                 </div>
                 <H3 className="text-white mb-6">Validated Expertise</H3>
                 <Body className="text-gray-400 mb-8">
                   Our team maintains deep certifications with global technology leaders, ensuring we deliver best-practice solutions.
                 </Body>
                 <div className="grid grid-cols-2 gap-4">
                    {["Microsoft Solution Partner", "Fortinet Expert Tier", "nbn™ Accredited Business", "Cisco Certified Professionals"].map((cert, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                         <span className="text-[11px] font-bold text-white/80">{cert}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </FadeIn>
        </div>
      </Section>

      {/* ══ 4. INTERNAL LINK: CAREERS (Trust Funnel Transition) ═════ */}
      <AuthorityCta 
        variant="funnel"
        eyebrow="CREDIBILITY VALIDATION"
        title="Driven by an Engineering-First Culture"
        description="The best engineers choose C9 because we prioritize technical precision over corporate fluff. See what defines our team culture."
        primaryText="View Team Culture & Careers"
        primaryHref="/about/careers"
        bg="bg-gray"
      />

      <WpConsultationForm
        eyebrow="ENGINEERING CONSULTATION"
        title="Speak Directly to a Senior Engineer"
        description="Skip the sales pitch. Book a technical session with our architects to discuss your specific infrastructure or security challenges."
        formTitle="Book a Technical Session"
      />
    </div>
  );
}
