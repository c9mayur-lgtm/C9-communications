'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cable } from 'lucide-react';

const integrations = [
  "Salesforce", "Microsoft Teams", "Microsoft Dynamics", "Zendesk",
  "Power BI", "ServiceNow", "Yellowfin", "Payments integration", "Speech analytics platforms"
];

export default function Integrations() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-full mb-8"
            >
              <span className="text-[#5D00D6] font-bold text-[10px] tracking-widest uppercase">INFINITE INTEGRATION CAPABILITIES</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[36px] md:text-[46px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-8"
            >
              Connects to the tools your <br className="hidden md:block"/>
              <span className="text-[#5D00D6]">business already uses.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[18px] text-gray-600 leading-relaxed font-medium mx-auto max-w-2xl"
            >
              C9&apos;s Omni Channel Contact Centre Solution easily connects to your CRM and company software — integrating through the CRM SDK for access to CRM accounts, contacts, leads, Caller ID detection, call logs, and recording, with unwavering support from dedicated voice technicians.
            </motion.p>
        </div>

        {/* Integration Grid */}
        <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-wrap justify-center gap-4">
                {integrations.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3 bg-white hover:bg-slate-50 border border-gray-200 px-6 py-4 rounded-xl transition-all shadow-sm"
                    >
                        <Cable size={18} className="text-[#5D00D6]" />
                        <span className="text-[#0c1024] font-bold text-[15px]">{item}</span>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Note */}
        <div className="max-w-2xl mx-auto text-center bg-slate-50 rounded-2xl p-6 border border-gray-100">
            <p className="text-[14px] text-gray-500 font-medium leading-relaxed italic">
                Don&apos;t see your platform? C9 phone system integrates with any CRM through its CRM SDK. Contact us to discuss your specific integration requirements.
            </p>
        </div>

      </div>
    </section>
  );
}
