'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const capabilities = [
  "Inbound", "Outbound", "Omni channel", "Scripting",
  "PCI-DSS payment collection", "IVR automation", "Workforce management",
  "Business analytics", "Intelligent reporting", "Configuration management",
  "Quality assurance", "Speech analytics"
];

export default function TransformSection() {
  return (
    <section className="py-24 bg-[#0c1024] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="c9-eyebrow !text-white/60 bg-white/5 border border-white/10 px-4 py-2 rounded-full shadow-sm">BUILD YOUR CONTACT CENTRE</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="c9-section-heading !text-white mb-8"
            >
              Choose the channels, software, and scale <br className="hidden md:block"/>
              <span className="text-[#5D00D6]">that&apos;s right for your business.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="c9-body !text-white/50 mx-auto max-w-2xl font-medium"
            >
              With a dedicated consultant, C9 works with you to define a programmable, customisable contact centre solution from this suite of capabilities.
            </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
            {capabilities.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 bg-white/5 hover:bg-[#5D00D6]/20 border border-white/10 hover:border-[#5D00D6]/50 px-6 py-4 rounded-full transition-all cursor-default shadow-lg"
                >
                    <CheckCircle2 size={16} className="text-[#5D00D6]" />
                    <span className="text-white font-medium text-[14px]">{item}</span>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
