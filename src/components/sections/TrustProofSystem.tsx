'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Users, Zap, Quote } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

interface TrustProofSystemProps {
  testimonials?: { quote: string; author: string }[];
  cases?: { title: string; desc: string }[];
}

export const TrustProofSystem = ({ 
  testimonials = [
    {
      quote: "C9 simplified our entire IT and telco setup. We no longer deal with multiple vendors — everything just works.",
      author: "Business Owner"
    },
    {
      quote: "Their responsiveness and understanding of our environment has made a huge difference to how we operate.",
      author: "Operations Manager"
    }
  ],
  cases = [
    {
      title: "Multi-Site Retail Rollout",
      desc: "Supported national rollout with consistent systems across 50+ locations."
    },
    {
      title: "Business Environment Stabilisation",
      desc: "Stabilised critical environments previously plagued by unreliable connectivity and support."
    },
    {
      title: "Multi-Vendor Integration",
      desc: "Successfully integrated and managed complex, multi-vendor enterprise environments."
    }
  ]
}: TrustProofSystemProps) => {
  return (
    <div className="flex flex-col gap-0">
      {/* SECTION 1 — TESTIMONIAL STRIP */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <FadeIn>
            <h2 className="text-center text-[24px] md:text-[28px] font-bold text-slate-900 mb-12">
              Trusted by Businesses That Rely on Performance
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full relative hover:shadow-md transition-shadow">
                  <Quote size={32} className="text-[#5D00D6]/10 absolute top-6 right-8" />
                  <p className="text-slate-600 italic mb-6 text-[14px] leading-relaxed relative z-10">
                    "{t.quote}"
                  </p>
                  <div className="mt-auto">
                    <p className="text-[#5D00D6] font-bold text-[14px] uppercase tracking-wider">— {t.author}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — CASE SNIPPETS */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-[24px] md:text-[28px] font-bold text-slate-900">
                Proven in Real Environments
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50/50 border border-slate-100 hover:border-[#5D00D6]/20 transition-colors">
                  <CheckCircle size={12} className="text-[#5D00D6] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-[14px] mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY C9 */}
      <section className="py-20 bg-[#0c1024] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #5D00D6 0%, transparent 50%)' }} />
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <h2 className="text-[28px] md:text-[36px] font-bold mb-6 text-white text-left">
                  Why C9 Communications
                </h2>
                <p className="text-slate-300 text-[17px] leading-relaxed mb-8">
                  C9 combines telco and managed IT services into a single, structured solution. We don’t just provide services — we take ownership of your environment, simplify complexity, and ensure everything works together.
                </p>
              </FadeIn>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "One partner across IT and communications", icon: <Users size={18} /> },
                  { label: "Reduced vendor complexity", icon: <ShieldCheck size={18} /> },
                  { label: "Consistent systems across locations", icon: <Zap size={18} /> },
                  { label: "Real support from people who understand", icon: <CheckCircle size={12} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="text-[#a56eff] shrink-0">{item.icon}</div>
                    <p className="text-slate-300 text-[14px] font-medium leading-tight">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <FadeIn delay={0.2} className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[32px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5D00D6]/20 blur-3xl rounded-full -mr-16 -mt-16" />
                <h3 className="text-[20px] font-bold mb-4 text-white">Accountability is our core product.</h3>
                <p className="text-white/70 text-[14px] leading-relaxed">
                  We bridge the gap between your internet connection and your business outcomes. When you partner with C9, you get an engineering-first team that takes responsibility for your entire tech stack.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

