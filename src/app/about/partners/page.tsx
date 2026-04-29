'use client';

import React from 'react';
import { ShieldCheck, Cloud, LayoutGrid, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-50 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10 text-center">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5D00D6]/10 text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest mb-8">
              OUR PARTNERS
            </span>
            <h1 className="text-[40px] md:text-[64px] font-bold text-[#1A1A2E] leading-tight mb-8">
              Strategic Alliances.<br />
              <span className="text-[#5D00D6]">Certified Expertise.</span>
            </h1>
            <p className="text-[#6B7280] text-[18px] md:text-[22px] leading-relaxed max-w-2xl mx-auto mb-12">
              We partner with global technology leaders to deliver integrated, business-critical solutions that keep your operations running at peak performance.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: LayoutGrid,
                title: 'Microsoft Solutions Partner',
                desc: 'Specialising in Modern Workplace, Security, and Azure infrastructure. We help you leverage the full power of Microsoft 365 and Teams Calling.',
                points: ['Teams Voice Integration', 'M365 Security Compliance', 'Azure Cloud Migration']
              },
              {
                icon: Cloud,
                title: 'AWS & Google Cloud',
                desc: 'Strategic cloud partnerships ensuring low-latency, high-performance links between your premises and your cloud-hosted workloads.',
                points: ['Direct Connect Services', 'Hybrid Cloud Architecture', 'SaaS Optimisation']
              },
              {
                icon: Smartphone,
                title: 'Carrier Partnerships',
                desc: 'Deep integration with Australia\'s primary fibre and mobile infrastructure providers, ensuring rapid provisioning and prioritized support.',
                points: ['nbn® Business Accredited', 'Tier 1 Fibre Access', 'Multi-Carrier Redundancy']
              },
              {
                icon: ShieldCheck,
                title: 'Security Ecosystem',
                desc: 'Collaborating with leading cybersecurity vendors to integrate threat intelligence and hardware-based protection into your network.',
                points: ['Fortinet & Cisco Managed', 'Essential 8 Compliance', 'EDR & XDR Solutions']
              }
            ].map((partner, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="p-10 rounded-[40px] border border-gray-100 bg-white hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-purple-900/5 transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-8">
                    <partner.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">{partner.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-8 text-lg">{partner.desc}</p>
                  <ul className="space-y-4">
                    {partner.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#1A1A2E] font-medium">
                        <CheckCircle2 size={12} className="text-[#5D00D6]" /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Badge Strip */}
      <section className="py-20 bg-[#1A1A2E] text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px]">
            <div className="flex flex-col md:flex-row items-center gap-12 opacity-50 justify-center flex-wrap">
                <span className="font-bold text-2xl tracking-tighter">Microsoft Partner</span>
                <span className="font-bold text-2xl tracking-tighter">nbn® Accredited</span>
                <span className="font-bold text-2xl tracking-tighter">AWS Partner</span>
                <span className="font-bold text-2xl tracking-tighter">Google Cloud</span>
                <span className="font-bold text-2xl tracking-tighter">Fortinet Expert</span>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <WpConsultationForm
        eyebrow="LEVERAGE OUR NETWORK"
        title="Solutions built on world-class technology"
        description="Our strategic partnerships mean better pricing, faster delivery, and superior support for your business."
        formTitle="Consult with an Expert"
      />
    </main>
  );
}
