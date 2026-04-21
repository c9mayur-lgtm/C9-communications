'use client';

import React from 'react';
import { Phone, Mail, MessageSquare, ArrowRight, Activity, Book, HelpCircle, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';

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

export default function SupportPage() {
  return (
    <div className="pt-16 md:pt-24 bg-white">
      
      {/* ── HERO ── */}
      <Section className="text-center" bg="none">
        <FadeIn>
          <Label>Support Hub</Label>
        </FadeIn>
        <FadeIn delay={0.1}>
          <H1 className="mb-6">
            Expert assistance,<br />
            <span className="text-[#5D00D6]">whenever you need it.</span>
          </H1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Body className="max-w-xl mx-auto">
            Access our 24/7 technical support, knowledge base, and live network status.
          </Body>
        </FadeIn>
      </Section>

      {/* ── CHANNELS ── */}
      <Section bg="white" className="pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn>
            <div className="bg-[#F4F0FA]/30 border border-gray-100 rounded-[32px] p-10 h-full flex flex-col hover:border-[#5D00D6]/20 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#5D00D6] mb-8 shadow-sm group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <H3 className="mb-4 text-2xl tracking-tight">Phone Support</H3>
              <Body className="mb-10 text-[17px]">
                24/7/365 assistance for critical network faults and enterprise voice issues.
              </Body>
              <a href="tel:1800000299" className="mt-auto flex items-center gap-2 text-xl font-black text-[#5D00D6] hover:underline">
                1800 000 299 <ArrowRight size={20} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-[#F4F0FA]/30 border border-gray-100 rounded-[32px] p-10 h-full flex flex-col hover:border-[#5D00D6]/20 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#5D00D6] mb-8 shadow-sm group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                <MessageSquare size={28} />
              </div>
              <H3 className="mb-4 text-2xl tracking-tight">Live Chat</H3>
              <Body className="mb-10 text-[17px]">
                Quick technical queries and billing assistance. Available 8am–6pm AEDT.
              </Body>
              <C9Button className="mt-auto rounded-full w-full">
                Launch Live Chat
              </C9Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-[#0c1024] border border-gray-800 rounded-[32px] p-10 h-full flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-[#5D00D6] opacity-10">
                <Activity size={100} strokeWidth={1} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-[#5D00D6] mb-8">
                <Activity size={28} />
              </div>
              <H3 className="mb-4 text-2xl tracking-tight text-white">Network Status</H3>
              <Body className="mb-10 text-[17px] text-gray-400">
                Live monitoring of our core fibre, nbn, and C9 phone system voice infrastructure.
              </Body>
              <div className="mt-auto inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                <span className="text-emerald-500 font-black text-sm uppercase tracking-widest">Systems Operational</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── RESOURCES ── */}
      <Section bg="gray" className="py-24">
        <div className="text-center mb-16">
          <H2>Self-Service Resources</H2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Book, title: "Knowledge Base", desc: "Detailed guides for C9 phone system and network setup." },
            { icon: HelpCircle, title: "FAQ", desc: "Common questions about billing and service." },
            { icon: ShieldCheck, title: "Trust Centre", desc: "Compliance, security, and data privacy info." },
            { icon: Mail, title: "Submit a Ticket", desc: "Open a case with our engineering team." }
          ].map((res, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-[24px] bg-white border border-gray-100 hover:border-[#5D00D6]/20 transition-all cursor-pointer group shadow-sm hover:shadow-xl hover:shadow-purple-900/5">
                <div className="w-10 h-10 rounded-lg bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6] mb-6 group-hover:scale-110 transition-transform">
                  <res.icon size={20} />
                </div>
                <h4 className="text-[18px] font-bold text-[#0c1024] mb-2">{res.title}</h4>
                <Body className="text-sm">{res.desc}</Body>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── FOOTER CTA ── */}
      <Section className="pb-32 bg-white">
         <FadeIn>
           <div className="bg-[#F4F0FA] border border-[#5D00D6]/10 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 text-[#5D00D6] opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap size={350} strokeWidth={0.5} />
              </div>
              <div className="relative z-10">
                <H2 className="mb-6 text-4xl leading-tight">Can't find what you're looking for?</H2>
                <Body className="max-w-xl mx-auto mb-12 text-lg">
                  Our team is available 24/7. Don't waste time with bots when you can talk to an expert.
                </Body>
                <div className="flex flex-wrap gap-4 justify-center">
                   <C9Button className="px-10 py-4 h-auto rounded-full text-lg shadow-2xl">Call Us Now</C9Button>
                   <C9Button variant="outline" className="px-10 py-4 h-auto rounded-full text-lg bg-white border-gray-200">Email Support</C9Button>
                </div>
              </div>
           </div>
         </FadeIn>
      </Section>
    </div>
  );
}
