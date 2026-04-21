'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle2 } from 'lucide-react';

const analyticsCapabilities = [
  "Multi-channel recording",
  "Quality assurance testing",
  "Workflow analysis and scripting",
  "Speech analytics",
  "Real-time Supervisor Wallboards",
  "Real-time and historical reporting",
  "Advanced alerting and notifications"
];

export default function Analytics() {
  return (
    <section className="py-24 bg-[#f8f9fc] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Headings & Text */}
          <div className="flex-1 lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="c9-eyebrow bg-[#5D00D6]/5 px-4 py-2 rounded-full">DATA AND ANALYTICS</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="c9-section-heading mb-8"
            >
              Harness the power of data — <br className="hidden lg:block"/>
              <span className="text-[#5D00D6]">across every channel, every interaction.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="c9-body !text-gray-600 mb-8 font-medium"
            >
              Gain important insights through intelligent, accurate, and customisable reporting across all channels. Have all the tools you need to engage your workforce and continuously improve — through multi-channel recording, quality assurance testing, workflow analysis, scripting, and more.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="c9-body !text-gray-500 mb-10"
            >
              C9 provides full and ongoing support from migration to operation, plus advanced alert technology — so you never miss a thing.
            </motion.p>

            {/* List of Capabilities */}
            <motion.ul 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {analyticsCapabilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#5D00D6] shrink-0 mt-0.5" />
                        <span className="text-[14px] text-[#0c1024] font-medium leading-snug">{item}</span>
                    </li>
                ))}
            </motion.ul>
          </div>

          {/* Right Column - Payment Block Highlight */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="flex-1 w-full mx-auto"
          >
             <div className="bg-[#0c1024] rounded-[32px] p-10 md:p-14 border border-white/5 shadow-2xl relative overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/30 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="w-16 h-16 bg-[#5D00D6] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-[#5D00D6]/30 relative z-10">
                    <CreditCard size={32} />
                </div>

                <h3 className="c9-section-heading !text-white mb-6 relative z-10">
                    Payments 24/7, 365 days a year
                </h3>

                <p className="text-[16px] text-white/70 leading-relaxed mb-8 relative z-10">
                    Collect payments through Interactive Voice Response (IVR) systems anytime — thanks to secure hosting from Microsoft Azure, giving your customers greater flexibility to pay when it suits them.
                </p>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="px-4 py-2 bg-white/10 rounded-full border border-white/10 text-white text-[12px] font-bold tracking-wider uppercase">
                        PCI-DSS Compliant
                    </div>
                </div>

             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
