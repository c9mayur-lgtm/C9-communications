'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, BookOpen, ShieldCheck } from 'lucide-react';
import { C9Button } from '@/components/design-system/C9Button';



const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function CapabilityPack() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="bg-white rounded-none p-8 lg:p-20 shadow-2xl shadow-purple-900/5 border border-slate-100 relative">
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5D00D6]/5 to-transparent rounded-none pointer-events-none" />

          <div className="grid lg:grid-cols-[60%_40%] gap-16 items-center">
            <div>
              <FadeIn>
                <span className="c9-eyebrow mb-6">
                  ENTERPRISE RESOURCES
                </span>
                <h2 className="c9-section-heading mb-8">
                  Enterprise <br />
                  <span className="text-[#5D00D6]">Capability Pack.</span>
                </h2>
                <p className="c9-body mb-12 text-slate-800">
                  Download our complete service catalogue, SLA definitions, and multi-site case studies to assist in your vendor selection process.
                </p>
              </FadeIn>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  { title: 'Service Catalogue', icon: BookOpen, desc: 'Full breakdown of managed IT, telco, and cloud services.' },
                  { title: 'SLA Framework', icon: ShieldCheck, desc: 'Detailed response and resolution time commitments.' },
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.1 + i * 0.1}>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-none bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0">
                        <item.icon size={20} strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="c9-card-title !text-sm mb-1">{item.title}</h4>
                        <p className="c9-body !text-[13px] text-slate-800">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.3}>
                <C9Button
                  size="lg"
                  className="rounded-none shadow-xl shadow-purple-900/20"
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                >
                  Download Capability Pack (PDF)
                  <Download size={20} className="ml-2" aria-hidden="true" />
                </C9Button>
              </FadeIn>
            </div>

            <FadeIn delay={0.2}>
              <div className="relative">
                {/* Visual Representation of the Pack */}
                <div className="aspect-[3/4] bg-slate-900 rounded-none p-10 text-white relative overflow-hidden shadow-2xl lg:rotate-3 group-hover:rotate-0 duration-700 border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/20 to-transparent" />
                  <FileText size={48} className="text-[#a56eff] mb-8" aria-hidden="true" />
                  <h3 className="text-3xl font-black mb-4 leading-tight text-white">
                    C9 <br/>
                    Capability <br/>
                    Catalogue
                  </h3>
                  <div className="w-12 h-1 bg-[#5D00D6] mb-8" />
                  <div className="space-y-4 opacity-60">
                    <div className="h-2 bg-white/20 rounded w-full" />
                    <div className="h-2 bg-white/20 rounded w-[80%]" />
                    <div className="h-2 bg-white/20 rounded w-full" />
                    <div className="h-2 bg-white/20 rounded w-[60%]" />
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest uppercase text-white/60">v2.4 | 2024</span>
                    <ShieldCheck size={24} className="text-white/20" aria-hidden="true" />
                  </div>
                </div>
                {/* Secondary Page Peeking Out */}
                <div className="absolute inset-0 -z-10 bg-slate-200 rounded-none -rotate-3 translate-x-4" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
