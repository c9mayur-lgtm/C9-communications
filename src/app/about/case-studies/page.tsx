'use client';

import React from 'react';
import { Target, TrendingUp, Shield, Activity, ArrowRight, ExternalLink } from 'lucide-react';
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

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-[#1A1A2E] text-white">
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10 text-center">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest mb-8 border border-white/20">
              RESULTS DELIVERED
            </span>
            <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-8">
              Real Impact for <br />
              <span className="text-[#A855F7]">Real Businesses.</span>
            </h1>
            <p className="text-gray-400 text-[18px] md:text-[22px] leading-relaxed max-w-2xl mx-auto mb-12">
              Explore how we've helped Australian organisations solve complex connectivity challenges, secure their operations, and scale with confidence.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="space-y-16">
            {[
              {
                icon: Activity,
                category: 'Retail & Multi-site',
                title: 'Eliminating Downtime Across 50 Locations',
                challenge: 'Frequent dropouts at store locations causing payment processing failures and lost revenue.',
                solution: 'Deployed redundant Business NBN links with 4G failover, managed through a centralised SD-WAN controller.',
                outcome: '99.99% uptime achieved across the entire network. No payment-related downtime recorded in 12 months.'
              },
              {
                icon: Shield,
                category: 'Professional Services',
                title: 'Securing Remote Access & Compliance',
                challenge: 'Insecure remote working setup with no VPN encryption and outdated server infrastructure.',
                solution: 'Implemented a Zero Trust network architecture with Microsoft Teams integration and cloud-hosted servers.',
                outcome: 'Full Essential 8 compliance achieved. Team productivity increased by 25% through seamless internal collaboration.'
              },
              {
                icon: TrendingUp,
                category: 'Tech Startup',
                title: 'Scaling Connectivity for Rapid Growth',
                challenge: 'Standard office internet unable to support a growing team of developers and high video-conferencing load.',
                solution: 'Migrated to 1Gbps Dedicated Fast Fibre with symmetrical speeds and proactive monitoring.',
                outcome: 'Zero peak-hour slowdowns. Bandwidth to support 10x growth without further infrastructure changes.'
              }
            ].map((study, idx) => (
              <FadeUp key={idx}>
                <div className="group bg-white rounded-[48px] border border-gray-100 p-8 md:p-12 shadow-sm hover:shadow-2xl hover:shadow-purple-900/5 transition-all">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6]">
                          <study.icon size={20} />
                        </div>
                        <span className="text-[#5D00D6] font-bold uppercase tracking-widest text-[11px]">{study.category}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-8 leading-tight">{study.title}</h3>
                      
                      <div className="space-y-6 mb-10">
                        <div>
                          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Challenge</p>
                          <p className="text-gray-600 text-lg">{study.challenge}</p>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Solution</p>
                          <p className="text-gray-600 text-lg">{study.solution}</p>
                        </div>
                      </div>
                      
                      <button className="flex items-center gap-2 text-[#5D00D6] font-bold hover:gap-4 transition-all">
                        Read Full Case Study <ExternalLink size={16} />
                      </button>
                    </div>
                    
                    <div className="bg-slate-50 rounded-[32px] p-10 border border-gray-200">
                      <div className="flex items-center gap-2 mb-8">
                        <Target size={24} className="text-[#5D00D6]" />
                        <span className="font-bold text-[#1A1A2E] uppercase tracking-widest text-[13px]">Key Outcome</span>
                      </div>
                      <p className="text-2xl md:text-3xl font-medium text-[#1A1A2E] leading-tight mb-6">
                        "{study.outcome}"
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <WpConsultationForm
        eyebrow="SEE THE RESULTS FOR YOURSELF"
        title="Ready to transform your operations?"
        description="Let's build your success story together. Speak with an engineer about your specific business challenges."
        formTitle="Get a Custom Strategy"
      />
    </main>
  );
}
