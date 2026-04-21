'use client';

import React from 'react';
import { ShieldCheck, Zap, Headphones, LineChart, CheckCircle2, ArrowRight } from 'lucide-react';
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

export default function WhyC9Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-[#F4F0FA]">
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10 text-center">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5D00D6]/10 text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest mb-8">
              THE C9 DIFFERENCE
            </span>
            <h1 className="text-[40px] md:text-[64px] font-bold text-[#1A1A2E] leading-tight mb-8">
              Built for Performance.<br />
              <span className="text-[#5D00D6]">Validated by Results.</span>
            </h1>
            <p className="text-[#6B7280] text-[18px] md:text-[22px] leading-relaxed max-w-2xl mx-auto mb-12">
              Most providers focus on the lowest price. We focus on the highest uptime and the most stable connectivity for Australian businesses.
            </p>
          </FadeUp>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#5D00D6] to-transparent rounded-full blur-3xl" />
        </div>
      </section>

      {/* Core Differentiation */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Engineering Over Marketing',
                desc: 'We are an engineering-led organisation. We invest in our core network and technical capability first, ensuring your connection is built on a solid foundation.'
              },
              {
                icon: ShieldCheck,
                title: 'Security-First Architecture',
                desc: 'Security isn\'t an afterthought at C9. We integrate threat protection, compliance controls, and robust failover into every solution we design.'
              },
              {
                icon: Headphones,
                title: 'Local Specialist Support',
                desc: 'No script readers. Your first point of contact is an Australian-based specialist who understands your infrastructure and can solve problems in real-time.'
              },
              {
                icon: LineChart,
                title: 'Proactive Monitoring',
                desc: 'We detect and resolve most potential issues before they ever impact your operations. Our team monitors your connection 24/7/365.'
              },
              {
                icon: CheckCircle2,
                title: 'Dedicated Throughput',
                desc: 'Unlike residential-grade connections, our business solutions provide dedicated bandwidth that doesn\'t drop during peak local traffic hours.'
              },
              {
                icon: ArrowRight,
                title: 'Transparency & Uptime',
                desc: 'We provide clear, business-grade SLAs and real-time status reporting, so you always know the health of your critical infrastructure.'
              }
            ].map((item, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="p-10 rounded-3xl bg-white border border-gray-100 hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-8">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-[22px] font-bold text-[#1A1A2E] mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[16px]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">How C9 Compares</h2>
            <p className="text-gray-500 text-lg">The difference between a standard provider and a true technology partner.</p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1A1A2E] text-white">
                  <th className="p-6 font-bold uppercase tracking-widest text-[12px]">Feature</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-[12px]">Standard Provider</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-[12px] bg-[#5D00D6]">C9 Communications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: 'Support Level', std: 'Overseas Call Centre', c9: 'AU Senior Engineers' },
                  { feature: 'Infrastructure', std: 'Resold Shared Network', c9: 'Private Business Core' },
                  { feature: 'Monitoring', std: 'Reactive (Report it first)', c9: 'Proactive 24/7/365' },
                  { feature: 'Setup', std: 'DIY / Generic', c9: 'Strategic Design & Managed' },
                  { feature: 'Security', std: 'Optional Add-on', c9: 'Inherent at Core' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-[#1A1A2E]">{row.feature}</td>
                    <td className="p-6 text-gray-500">{row.std}</td>
                    <td className="p-6 text-[#5D00D6] font-bold bg-[#5D00D6]/5">{row.c9}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <WpConsultationForm
        eyebrow="READY TO LEVEL UP?"
        title="Experience the C9 difference"
        description="Speak with our engineering team to see how we can optimise your business connectivity."
        formTitle="Get Started"
      />
    </main>
  );
}
