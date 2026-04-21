'use client';

import React from 'react';
import { Rocket, Heart, Lightbulb, Coffee, ArrowRight, Zap } from 'lucide-react';
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

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-[#1A1A2E] text-white">
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10">
          <div className="max-w-3xl">
            <FadeUp>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest mb-8 border border-white/20">
                JOIN THE TEAM
              </span>
              <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-8">
                Build the future of <br />
                <span className="text-[#A855F7]">Business Connectivity.</span>
              </h1>
              <p className="text-gray-400 text-[18px] md:text-[22px] leading-relaxed mb-12">
                We're looking for architects, engineers, and visionaries who want to redefine how Australian businesses connect and grow.
              </p>
              <button className="bg-[#5D00D6] hover:bg-[#4E00AD] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-purple-900/50">
                View Open Roles
              </button>
            </FadeUp>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none gradient-mask-l">
            <Zap size={600} className="text-[#A855F7] -translate-y-1/4 translate-x-1/4" />
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-6">Why grow with C9?</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">We provide the environment for you to do your best work, with an engineering-first culture that values innovative problem solving.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Rocket, title: 'Impact', desc: 'Work on mission-critical national infrastructure that powers major Australian businesses.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Access the latest networking and security tech, with freedom to experiment and optimize.' },
              { icon: Heart, title: 'Culture', desc: 'A collaborative, engineering-led environment where your expertise is heard and respected.' },
              { icon: Coffee, title: 'Balance', desc: 'Flexible working arrangements designed for high performance and personal well-being.' }
            ].map((item, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl border border-gray-100 hover:border-[#5D00D6]/20 hover:shadow-lg transition-all text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mx-auto mb-6">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-[1240px]">
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    { title: 'Engineering & Operations', roles: 'Network Architects, Security Engineers, VoIP Specialists' },
                    { title: 'Sales & Growth', roles: 'Account Executives, Partnership Managers, Business Development' },
                    { title: 'Customer Experience', roles: 'Level 3 Engineers, Project Managers, Support Specialists' },
                    { title: 'Product & Marketing', roles: 'Product Owners, UX/UI Designers, Marketing Strategists' }
                ].map((dept, idx) => (
                    <FadeUp key={idx}>
                        <div className="bg-white p-10 rounded-[32px] border border-gray-200 group flex justify-between items-center transition-all hover:border-[#5D00D6]">
                            <div>
                                <h4 className="text-2xl font-bold text-[#1A1A2E] mb-2">{dept.title}</h4>
                                <p className="text-gray-500">{dept.roles}</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#5D00D6] transition-colors">
                                <ArrowRight size={20} className="text-gray-300 group-hover:text-white" />
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <div id="consultation-section">
        <WpConsultationForm
          eyebrow="READY TO JOIN?"
          title="Don't see the right role?"
          description="We're always looking for exceptional talent. Reach out to our team even if there isn't an active listing that fits your profile."
          formTitle="Connect with HR"
        />
      </div>
    </main>
  );
}
