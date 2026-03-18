'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Wifi, Phone, Server, Shield, Cloud, Smartphone, ArrowRight, CheckCircle, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';
import { cn } from '@/lib/utils';

const SOLUTIONS_DATA = [
  {
    title: "Business NBN & Fibre",
    icon: Wifi,
    desc: "Enterprise-grade connectivity with 99.9% uptime and local Australian support.",
    features: ["Dedicated Fibre", "High-Speed NBN", "4G/5G Backup", "Managed Router"]
  },
  {
    title: "Cloud Phone System",
    icon: Phone,
    desc: "The C9X platform: a complete PBX replacement with 80+ enterprise features.",
    features: ["Unified Comms", "Softphone Apps", "CRM Integration", "Call Analytics"]
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    desc: "Multi-layered security solutions to protect your business from evolving threats.",
    features: ["Endpoint Protection", "Email Security", "Firewall Mgmt", "Security Audit"]
  },
  {
    title: "Managed IT Services",
    icon: Server,
    desc: "Proactive management of your entire IT infrastructure by Australian experts.",
    features: ["24/7 Monitoring", "Unlimited Support", "Backup Solutions", "Asset Mgmt"]
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    desc: "Scalable cloud hosting and storage solutions tailored for business needs.",
    features: ["Public/Private Cloud", "Hybrid Setup", "Azure/AWS Mgmt", "Disaster Recovery"]
  },
  {
    title: "Mobile Business",
    icon: Smartphone,
    desc: "Business-exclusive mobile plans on Australia's best 5G/4G networks.",
    features: ["Shared Data Pools", "5G Included", "No Lock-in", "Team Portal"]
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

export default function SolutionsPage() {
  return (
    <div className="pt-16 md:pt-24 bg-white">
      
      {/* ── HERO ── */}
      <Section className="text-center" bg="none">
        <FadeIn>
          <Label>Our Expertise</Label>
        </FadeIn>
        <FadeIn delay={0.1}>
          <H1 className="mb-6">
            Integrated solutions for<br />
            <span className="text-[#5D00D6]">the digital enterprise.</span>
          </H1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Body className="max-w-xl mx-auto">
            We provide a single, unified environment for your internet, voice, and IT infrastructure.
          </Body>
        </FadeIn>
      </Section>

      {/* ── SOLUTIONS GRID ── */}
      <Section bg="white" className="pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((sol, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group relative bg-[#F4F0FA]/30 border border-gray-100 rounded-[32px] p-10 h-full flex flex-col hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6] mb-8 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                  <sol.icon size={28} />
                </div>
                
                <H3 className="mb-4 text-2xl tracking-tight">{sol.title}</H3>
                <Body className="mb-10 text-[17px] leading-relaxed italic opacity-80">{sol.desc}</Body>

                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
                    {sol.features.map(f => (
                      <div key={f} className="flex items-center gap-2 group/feat">
                        <CheckCircle size={14} className="text-[#5D00D6]" strokeWidth={3} />
                        <span className="text-[13px] font-bold text-gray-500 group-hover/feat:text-[#5D00D6] transition-colors">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-[#5D00D6] font-extrabold text-[15px] group-hover:underline uppercase tracking-wide"
                  >
                    Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section className="pb-32">
        <FadeIn>
          <div className="relative overflow-hidden p-16 md:p-24 rounded-[48px] bg-[#0c1024] text-white text-center group">
            <div className="absolute top-0 right-0 p-12 text-[#5D00D6] opacity-10 group-hover:opacity-20 transition-opacity translate-x-1/4 -translate-y-1/4 scale-150">
              <Zap size={400} strokeWidth={0.5} />
            </div>
            
            <div className="relative z-10">
              <H2 className="text-white mb-6 text-4xl md:text-5xl">Not sure which solution fits?</H2>
              <Body className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
                Book a free consultation with our solutions architects. We'll map your requirements and design a custom tech stack.
              </Body>
              <C9Button variant="default" className="bg-[#5D00D6] hover:bg-[#4c00b0] py-4 px-10 h-auto rounded-full">
                Book Solutions Audit <ArrowRight size={18} className="ml-2" />
              </C9Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
