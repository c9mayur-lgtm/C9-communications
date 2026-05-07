'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const GUARANTEES = [
  { label: 'Network Deployment', desc: 'Core infrastructure fully deployed, patched, and tested for performance.' },
  { label: 'Internet & Failover', desc: 'Primary and secondary connections live and validated with automatic failover.' },
  { label: 'Wi-Fi Configuration', desc: 'Secure, high-density Wi-Fi for both staff and guest segments.' },
  { label: 'Device Installation', desc: 'All workstations, tablets, and peripherals installed and operational.' },
  { label: 'Technical Validation', desc: 'Cross-system communication and architecture verified for Day One.' },
  { label: 'Documentation', desc: 'Complete "As-Built" diagrams and handover documentation provided.' },
];

export const GuaranteeSection = () => {
  return (
    <section className="py-24 bg-white font-dm-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="c9-eyebrow mb-4"
          >
            The C9 Difference
          </motion.div>
          <h2 className="c9-section-heading mb-6 font-clash">
            Day One Operational Guarantee
          </h2>
          <p className="c9-body max-w-2xl mx-auto text-slate-500">
            Before your site opens, we ensure every technical layer is fully operational. We don&apos;t leave until your business can run.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {GUARANTEES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:bg-white hover:shadow-xl hover:shadow-purple-100/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                <CheckCircle2 size={24} className="text-[#5D00D6] group-hover:text-white transition-colors" />
              </div>
              <h3 className="c9-card-title mb-3 font-clash text-[#0c1024]">{item.label}</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#5D00D6] rounded-[32px] p-8 md:p-12 text-center shadow-2xl shadow-purple-200"
        >
          <p className="text-2xl md:text-3xl font-bold text-white italic leading-tight font-clash">
            &ldquo;If your doors open, your systems work. No exceptions.&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-white/30 rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Our Deployment Mandate</span>
            <div className="h-1 w-12 bg-white/30 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
