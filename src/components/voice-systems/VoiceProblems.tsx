'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneOff, Headset, Clock } from 'lucide-react';

const PainCard = ({ icon: Icon, title, body, delay }: { icon: any, title: string, body: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className="p-8 md:p-10 flex flex-col items-start text-left relative border border-gray-100 rounded-[24px] bg-white hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all duration-500"
  >
    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-8 border border-gray-100 group-hover:bg-[#5D00D6] group-hover:text-white group-hover:border-[#5D00D6] transition-all duration-500">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-[20px] font-bold text-[#0c1024] mb-4 leading-tight tracking-tight group-hover:text-[#5D00D6] transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-500 text-[14px] leading-relaxed font-normal">
      {body}
    </p>
    <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent w-full scale-x-0 group-hover:scale-x-100 duration-500 rounded-b-[24px]" />
  </motion.div>
);

export const VoiceProblems = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">

        {/* Header Block */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-full mb-8"
          >
            <span className="c9-eyebrow !text-[#5D00D6] !text-[10px]">SOUND FAMILIAR?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="c9-section-heading !text-[32px] md:!text-[46px]"
          >
            Most businesses are patching together their phones.{' '}
            <span className="text-[#5D00D6]">C9 replaces all of it.</span>
          </motion.h2>
        </div>

        {/* 3-Column Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PainCard
            icon={PhoneOff}
            title="You're still paying for a phone line that barely works"
            body="Old copper lines, clunky PBX hardware, calls that drop when someone works from home. Sound familiar? Most businesses outgrow their phone setup years before they replace it."
            delay={0.1}
          />
          <PainCard
            icon={Headset}
            title="Three providers, three invoices, zero accountability"
            body="One company for internet. Another for phones. A third for mobiles. And when something breaks, everyone points at everyone else. C9 is one provider for all of it."
            delay={0.2}
          />
          <PainCard
            icon={Clock}
            title="Your team can't transfer a call between offices"
            body="If your Sydney team can't transfer to Melbourne without hanging up and calling again, that's not a phone problem — it's a system problem. And it's costing you clients."
            delay={0.3}
          />
        </div>

      </div>
    </section>
  );
};
