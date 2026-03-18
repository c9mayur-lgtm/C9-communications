'use client';

import React from 'react';
import { Building2, Users, Target, ShieldCheck, Globe2, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { cn } from '@/lib/utils';

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

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-24 bg-white">
      
      {/* ── HERO ── */}
      <Section className="text-center" bg="none">
        <FadeIn>
          <Label>Our Mission</Label>
        </FadeIn>
        <FadeIn delay={0.1}>
          <H1 className="mb-6">
            More than a telco.<br />
            <span className="text-[#5D00D6]">A technology partner.</span>
          </H1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Body className="max-w-xl mx-auto">
            We're on a mission to simplify enterprise connectivity for Australian businesses through innovation and human-first support.
          </Body>
        </FadeIn>
      </Section>

      {/* ── VALUES ── */}
      <Section bg="white">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Precision", desc: "We design networks with surgical precision, ensuring every byte is optimised for your business." },
            { icon: Users, title: "Human First", desc: "No overseas call centres. When you call C9, you speak to an Australian engineer who actually knows your site." },
            { icon: ShieldCheck, title: "Security Obsessed", desc: "In an era of evolving threats, security isn't an add-on — it's baked into every connection we deliver." }
          ].map((v, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-gray-50/50 border border-gray-100 rounded-[24px] p-10 h-full hover:border-[#5D00D6]/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6] mb-8 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                  <v.icon size={24} />
                </div>
                <H3 className="mb-4">{v.title}</H3>
                <Body>{v.desc}</Body>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── STATS SECTION ── */}
      <Section bg="gray" className="py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Founded', val: '2015' },
            { label: 'Active Users', val: '50k+' },
            { label: 'Uptime', val: '99.99%' },
            { label: 'Locations', val: 'AU Wide' }
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="text-[40px] md:text-[48px] font-black text-[#0c1024] tracking-tighter leading-none mb-2">{s.val}</div>
              <div className="text-[#5D00D6] font-bold uppercase tracking-widest text-[12px]">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── TEAM / STORY ── */}
      <Section bg="white" className="pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative p-12 md:p-16 rounded-[32px] bg-[#F4F0FA] border border-[#5D00D6]/10 overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-[#5D00D6] opacity-5 group-hover:opacity-10 transition-opacity translate-x-1/4 -translate-y-1/4">
                <Building2 size={300} strokeWidth={0.5} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#5D00D6] flex items-center justify-center text-white mb-8">
                  <Building2 size={32} />
                </div>
                <H3 className="text-3xl mb-6">Born in Sydney</H3>
                <div className="space-y-6">
                  <Body>
                    C9 Communications started with a simple observation: mid-market Australian businesses was being underserved by the major telcos.
                  </Body>
                  <Body>
                    We built a telco that prioritises engineering over marketing, ensuring that when you connect with C9, you're getting the most reliable tech in the country.
                  </Body>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <H2 className="mb-10 text-4xl leading-tight">A team of Australian experts.</H2>
            <div className="space-y-10">
              {[
                { icon: Globe2, title: "AU Wide Core", text: "We own and operate our own core network infrastructure across all AU capitals." },
                { icon: Briefcase, title: "Level 3 Support", text: "Your first point of contact is a senior network engineer, not a script reader." }
              ].map((f, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#5D00D6] shrink-0 group-hover:scale-110 transition-transform">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold text-[#0c1024] mb-2">{f.title}</h4>
                    <Body className="text-[17px]">{f.text}</Body>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
