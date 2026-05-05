'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const VoiceDualAudience = () => {
  return (
    <section className="pt-12 pb-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-full mb-8"
          >
            <span className="c9-eyebrow !text-[#5D00D6] !text-[10px]">BUILT FOR EVERY TEAM SIZE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="c9-section-heading !text-[32px] md:!text-[46px]"
          >
            Designed to grow with you —{' '}
            <span className="text-[#5D00D6]">from first phone to full contact centre.</span>
          </motion.h2>
        </div>

        {/* Two-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* SMB Card - White/Light */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[32px] border border-gray-100 overflow-hidden bg-white hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-[#5D00D6]/5 transition-all duration-500"
          >
            <div className="relative h-[220px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200"
                alt="Small business owner"
                className="w-full h-full object-cover duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute top-6 left-6 bg-[#5D00D6] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                5–50 STAFF
              </span>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="c9-section-heading mb-4">
                Simple, reliable phones for your whole team —{' '}
                <span className="text-[#5D00D6]">set up in days, not weeks.</span>
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-8">
                You tell us how many people, what numbers you want to keep, and where your team works. We set up everything, port your numbers, and hand you a system that just works. You call us if anything needs changing.
              </p>
              <ul className="space-y-3 mb-10">
                {['Keep your existing numbers', 'Works on desk phones and mobiles', 'One monthly bill, no surprises', 'Australian support team included'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#0c1024] font-medium text-[14px]">
                    <CheckCircle2 size={12} className="text-[#5D00D6] shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[14px] hover:gap-3 transition-all">
                Get a simple quote 
              </Link>
            </div>
          </motion.div>

          {/* Enterprise Card - Dark */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[32px] overflow-hidden bg-[#0c1024] border border-white/5 hover:border-[#5D00D6]/30 hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all duration-500"
          >
            <div className="relative h-[220px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
                alt="Enterprise professional"
                className="w-full h-full object-cover object-[center_20%] duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/70 to-[#0c1024]/20" />
              <span className="absolute top-6 left-6 bg-white text-[#0c1024] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                50–500+ STAFF
              </span>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="c9-section-heading !text-white mb-4">
                Multi-site. Microsoft Teams integrated.{' '}
                <span className="text-[#5D00D6]">Contact centre ready.</span>
              </h3>
              <p className="text-slate-400 text-[14px] leading-relaxed mb-8">
                C9 Voice scales across every office, every country, every device. SLAs with teeth, 99.95% uptime guarantee, full Teams Direct Routing, and a dedicated account manager who knows your infrastructure.
              </p>
              <ul className="space-y-3 mb-10">
                {['Multi-site & multi-country', 'Microsoft Teams Direct Routing', 'Contact centre layer available', 'Dedicated account manager', 'SLA-backed uptime guarantee'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium text-[14px]">
                    <CheckCircle2 size={12} className="text-[#5D00D6] shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/telco/phone-system" className="inline-flex items-center gap-2 text-white font-bold text-[14px] hover:gap-3 transition-all group/link">
                Talk to an enterprise specialist 
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
