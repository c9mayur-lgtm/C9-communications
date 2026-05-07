'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, PhoneCall, ShieldCheck, Users, MapPin } from 'lucide-react';

const SUPPORT_STATS = [
  { icon: <PhoneCall />, stat: '24/7', label: 'Support Availability' },
  { icon: <ShieldCheck />, stat: '99.9%', label: 'Uptime SLA' },
  { icon: <Users />, stat: '100%', label: 'Accountable' },
  { icon: <MapPin />, stat: 'National', label: 'On-site Support' },
];

export const SupportSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="c9-eyebrow mb-6"
            >
              Beyond Launch Day
            </motion.div>
            <h2 className="c9-section-heading mb-8 leading-tight">
              Support That Matches Your Business Hours
            </h2>
            <p className="c9-body leading-relaxed mb-10">
              We don&apos;t disappear after deployment. We stay accountable for your environment with support that scales with your operations.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                '24/7 support availability',
                'Defined response times (SLA)',
                'Transparent escalation paths',
                'Remote + on-site support coverage',
                'Nationwide delivery & local coordination',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5D00D6]" />
                  <span className="font-bold text-slate-800 text-[14px]">{item}</span>
                </div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-[#5D00D6] italic"
            >
              &ldquo;We don&apos;t disappear after deployment. We stay accountable.&rdquo;
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {SUPPORT_STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group hover:bg-[#7C3AED] transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 text-[#5D00D6] flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  {React.cloneElement(s.icon as React.ReactElement, { size: 24 })}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1 group-hover:text-white transition-colors">{s.stat}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white/60 transition-colors">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
