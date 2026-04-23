'use client';

import React from 'react';
import { Users, Code, Shield, Network, ArrowRight } from 'lucide-react';
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

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10 text-center">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5D00D6]/10 text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest mb-8">
              OUR TEAM
            </span>
            <h1 className="text-[40px] md:text-[64px] font-bold text-[#1A1A2E] leading-tight mb-8">
              Australian Engineering.<br />
              <span className="text-[#5D00D6]">Global Standards.</span>
            </h1>
            <p className="text-[#6B7280] text-[18px] md:text-[22px] leading-relaxed max-w-2xl mx-auto mb-12">
              We've assembled a team of network architects, security specialists, and support engineers dedicated to one goal: keeping your business online.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Expertise Sections */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Network, title: 'Network Architects', desc: 'Designing the high-performance core infrastructure that powers your business.' },
              { icon: Shield, title: 'Security Specialists', desc: 'Focused on Essential 8 compliance and proactive threat mitigation.' },
              { icon: Code, title: 'Solutions Engineering', desc: 'Crafting custom integrations and cloud-first migrations for complex environments.' },
              { icon: Users, title: 'Level 3 Support', desc: 'Senior engineers who solve problems on the first call, not just follow a script.' }
            ].map((item, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[14px]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <FadeUp>
                <div className="aspect-video bg-gray-100 rounded-[32px] overflow-hidden relative group border border-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Users size={80} className="text-[#5D00D6]/10" />
                    </div>
                </div>
             </FadeUp>
             
             <div>
                <FadeUp>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-8 leading-tight">
                        Engineering at our core. Human in our support.
                    </h2>
                    <div className="space-y-6">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            C9 Communications was founded by engineers who believed the Australian business market deserved better than generic helpdesks and shared infrastructure.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Every team member at C9 is carefully selected for both their technical proficiency and their commitment to customer success. When you work with us, you're working with experts who take ownership of your uptime.
                        </p>
                        <button className="flex items-center gap-2 text-[#5D00D6] font-bold hover:gap-3 transition-all mt-8">
                            Learn more about our values <ArrowRight size={18} />
                        </button>
                    </div>
                </FadeUp>
             </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <WpConsultationForm
        eyebrow="WANT TO WORK WITH US?"
        title="Experience our expertise firsthand"
        description="Speak with our team today and see why Australian businesses trust C9 for their critical connectivity."
        formTitle="Contact the Experts"
      />
    </main>
  );
}
