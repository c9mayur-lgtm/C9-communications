'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Network, PhoneForwarded, PlugZap, CheckCircle2 } from 'lucide-react';

export default function SipTrunkingCta() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0c1024]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5D00D6]/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5D00D6]/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="c9-section-heading !text-white mb-8"
        >
          Ready to move your phone system <br className="hidden md:block" />
          <span className="text-[#5D00D6]">to the cloud?</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="c9-body !text-white/60 max-w-2xl mx-auto mb-12"
        >
          Tell us what PBX system you have, how many lines you need, and whether you want to bring your existing numbers — C9 will design a SIP Trunking solution and come back within one business day.
        </motion.p>
        
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
           <Link href="#quote" className="w-full sm:w-auto bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-full px-10 h-14 flex items-center justify-center gap-2 text-[14px] font-bold shadow-xl shadow-[#5D00D6]/20 transition-all hover:scale-105 active:scale-95">
              Get a SIP Trunking Quote 
           </Link>
           <a href="tel:1800000299" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full px-10 h-14 flex items-center justify-center gap-2 text-[14px] font-bold transition-all hover:scale-105 active:scale-95">
              Call 1800 000 299 
           </a>
        </motion.div>

        {/* Trust Signals */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white/50"
        >
            {[
                { icon: Network, title: "Fully owned C9 network" },
                { icon: PlugZap, title: "Analogue PBX support" },
                { icon: PhoneForwarded, title: "Port existing numbers" },
                { icon: CheckCircle2, title: "Basic from $20/month" }
            ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                      <Icon size={18} className="text-[#5D00D6]" />
                      <span className="c9-body !text-[14px] font-medium !text-white/60">{item.title}</span>
                  </div>
                );
            })}
        </motion.div>

      </div>
    </section>
  );
}
