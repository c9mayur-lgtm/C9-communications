'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, Wifi, ShieldCheck, Monitor, Zap } from 'lucide-react';

const SYSTEMS = [
  { label: 'Localised Support', desc: 'Australia-wide expert technical team.', icon: <Users /> },
  { label: 'Infrastructure Management', desc: 'Full ownership of your technical stack.', icon: <Settings /> },
  { label: 'Active Guest Wi-Fi', desc: 'Secure, high-bandwidth paths.', icon: <Wifi /> },
  { label: 'Network Segments', desc: 'Isolated staff and guest paths.', icon: <ShieldCheck /> },
  { label: 'Back-Office', desc: 'Core systems ready for use.', icon: <Monitor /> },
  { label: 'Multi-Site Sync', desc: 'Consistent operational stack.', icon: <Zap /> },
];

export const OperationalReadiness = () => {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="c9-eyebrow !text-blue-600 mb-6"
            >
              Beyond Hardware
            </motion.div>
            <h2 className="c9-section-heading mb-8">
              Built for Real Operations — Not Just Infrastructure
            </h2>
            <p className="c9-body leading-relaxed mb-10">
              We don&apos;t just install hardware; we make your business operational. Our deployment covers the critical systems that keep your site running:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {SYSTEMS.map((sys, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-[#5D00D6]">
                    {React.cloneElement(sys.icon as React.ReactElement, { size: 20 } as any)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[14px] uppercase tracking-tight mb-1">{sys.label}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-tight">{sys.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl border-l-4 border-[#5D00D6] shadow-sm"
            >
              <p className="text-slate-800 font-bold italic">
                &ldquo;We don&apos;t just install infrastructure — we make your business operational.&rdquo;
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-slate-200">
              <img 
                src="/images/greenfield_commissioning_new_1.png" 
                alt="Operational Readiness" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-12">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-green-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">System Live</div>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest rounded-full">Sync Active</div>
                  </div>
                  <p className="text-2xl font-black text-white">100% Launch Ready</p>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-10 -left-10 bg-white rounded-3xl p-6 shadow-xl border border-slate-100 hidden md:block">
              <div className="text-3xl font-black text-[#5D00D6] mb-1">Zero</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Day-One<br/>Operational Gaps</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
