'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plug, Cloud } from 'lucide-react';

export default function AnalogueSupport() {
  return (
    <section className="py-24 bg-[#f8f9fc] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#5D00D6]/5 [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]" />
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Concept */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-lg mx-auto"
          >
            <div className="relative">
                <div className="bg-white rounded-[32px] p-8 shadow-xl border border-gray-100 flex flex-col items-center gap-6">
                    
                    {/* The Analogue side */}
                    <div className="w-full bg-slate-50 rounded-2xl p-6 border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="c9-eyebrow !text-gray-400 mb-1">Legacy System</p>
                            <p className="c9-card-title !text-[18px]">Analogue PBX</p>
                        </div>
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                            <Plug size={20} />
                        </div>
                    </div>

                    {/* The Bridge */}
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                        <div className="w-10 h-10 bg-[#5D00D6] rounded-full flex items-center justify-center shadow-lg shadow-[#5D00D6]/30 text-white z-10">
                            
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                    </div>

                    {/* The Cloud side */}
                    <div className="w-full bg-[#5D00D6]/5 border border-[#5D00D6]/20 rounded-2xl p-6 flex items-center justify-between">
                        <div>
                            <p className="c9-eyebrow !text-[#5D00D6] mb-1">C9 Network</p>
                            <p className="c9-card-title !text-[18px]">Cloud SIP</p>
                        </div>
                        <div className="w-12 h-12 bg-[#5D00D6] rounded-full flex items-center justify-center text-white shadow-md shadow-[#5D00D6]/20">
                            <Cloud size={20} />
                        </div>
                    </div>
                    
                    {/* Label */}
                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#0c1024] text-white px-4 py-2 rounded-xl shadow-xl">
                        <span className="c9-body !text-white !text-[12px] font-bold">IP Gateway Device</span>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#5D00D6]/10 px-4 py-2 rounded-full mb-8"
            >
              <span className="c9-eyebrow !text-[#5D00D6]">INVESTED IN ANALOGUE?</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="c9-section-heading mb-8"
            >
              Already invested in an analogue PBX? <span className="text-[#5D00D6]">We can still connect you.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="c9-body max-w-xl mb-12"
            >
              C9 understands that many businesses have invested in analogue PBX systems and are not ready to replace them. C9 provides full assistance and helps you configure and install an analogue-to-IP gateway device to connect your existing business phone system to SIP Trunking — getting you to the cloud without scrapping your existing investment.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
                <p className="c9-eyebrow !text-gray-400 mb-4">Supported PBX Brands:</p>
                <div className="flex flex-wrap gap-3 mb-6">
                    {['Panasonic', 'NEC', 'Avaya', 'Ericsson-LG'].map((brand, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-50 border border-gray-100 rounded-full c9-body !text-[14px] !text-[#0c1024] font-bold">
                            {brand}
                        </span>
                    ))}
                </div>
                <p className="c9-body !text-[14px] !text-gray-500 italic">
                    Don&apos;t see your PBX brand? Contact C9 — we support a wide range of analogue and legacy PBX systems.
                </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
