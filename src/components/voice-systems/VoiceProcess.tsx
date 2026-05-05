'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const STEPS = [
  {
    num: "01",
    title: "We map your current setup",
    body: "A 30-minute call with a C9 voice engineer. We look at your current numbers, your team structure, and how your calls actually flow today.",
    metric: "30 min",
    metricLabel: "Discovery Call"
  },
  {
    num: "02",
    title: "We build and test your system",
    body: "Your C9 Voice system is configured, your numbers are ported, your team's devices are set up. Everything tested before go-live.",
    metric: "~2 wks",
    metricLabel: "Build & Test"
  },
  {
    num: "03",
    title: "You go live — we stay on",
    body: "Go-live day is supported by a C9 engineer on call. After that, your system is monitored, maintained, and supported by the same team — forever.",
    metric: "24/7",
    metricLabel: "Ongoing Support"
  }
];

export const VoiceProcess = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">

        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-full mb-8"
          >
            <Sparkles size={12} className="text-[#5D00D6]" />
            <span className="c9-eyebrow !text-[#5D00D6] !text-[10px]">THE PROCESS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="c9-section-heading !text-[32px] md:!text-[46px]"
          >
            Up and running in 2 weeks.{' '}
            <span className="text-[#5D00D6]">Here's how.</span>
          </motion.h2>
        </div>

        {/* Steps - matching InboundAdvantage 4-column plank style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border-y border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 w-full">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`p-8 md:p-10 lg:p-12 flex flex-col items-start text-left min-h-[340px] relative  ${i < STEPS.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}`}
              >
                {/* Step Number */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#5D00D6]/5 flex items-center justify-center border border-[#5D00D6]/10 group-hover:bg-[#5D00D6] group-hover:border-[#5D00D6] transition-all duration-300">
                    <span className="text-[14px] font-bold text-[#5D00D6] group-hover:text-white transition-colors leading-none">
                      {step.num}
                    </span>
                  </div>
                </div>

                <h3 className="text-[18px] font-bold text-[#0c1024] mb-4 leading-tight tracking-tight group-hover:text-[#5D00D6] transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-[14px] leading-relaxed font-normal mb-auto max-w-[280px]">
                  {step.body}
                </p>

                {/* Metric at bottom */}
                <div className="mt-12">
                  <span className="block text-[64px] md:text-[72px] font-medium text-[#0c1024] leading-none tracking-tighter group-hover:text-[#5D00D6] transition-colors duration-500">
                    {step.metric}
                  </span>
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                    {step.metricLabel}
                  </span>
                </div>

                {/* Bottom hover accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-[#5D00D6] scale-x-0 group-hover:scale-x-100 duration-500 origin-left" />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
