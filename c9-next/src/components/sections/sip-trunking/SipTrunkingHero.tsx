'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Network, PhoneForwarded, PlugZap, Wifi } from 'lucide-react';
import Link from 'next/link';

export default function SipTrunkingHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0c1024] overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Cinematic Effects */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5D00D6]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#5D00D6]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#5D00D6]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern-light.svg')] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* TEXT CONTENT */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 shadow-sm backdrop-blur-md"
            >
              <Network size={14} className="text-[#5D00D6] drop-shadow-[0_0_8px_rgba(93,0,214,0.8)]" />
              <span className="c9-eyebrow !text-white/60">Telco · SIP Trunking</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="c9-hero-title !text-white mb-8"
            >
              Take your existing phone system <br className="hidden md:block" />
              <span className="text-[#5D00D6] drop-shadow-[0_0_30px_rgba(93,0,214,0.3)]">into the cloud —</span><br />
              at a fraction of the cost.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="c9-body !text-white/50 max-w-2xl mb-12"
            >
              C9 delivers Australia&apos;s best SIP Trunk solutions — connecting your on-premises PBX to the cloud via public internet or private IP connections, with full support from configuration to installation. Crystal-clear calls. nbn-ready. Fully owned network.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.3 }}
               className="flex flex-col sm:flex-row items-center gap-6"
            >
               <Link href="#quote" className="w-full sm:w-auto bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-full px-10 h-14 flex items-center justify-center text-[16px] font-medium shadow-xl shadow-[#5D00D6]/20 transition-all hover:scale-105 active:scale-95 leading-none">
                  Get a SIP Trunking Quote
               </Link>
               <Link href="#plans" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full px-10 h-14 flex items-center justify-center text-[16px] font-medium transition-all hover:scale-105 active:scale-95 leading-none">
                  Compare Plans
               </Link>
            </motion.div>

            {/* Offer Strip */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="mt-10 border-t border-white/10 pt-6 flex items-center"
            >
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[13px] text-white/60 font-medium">
                        Basic from <strong className="text-white">$20/month per line</strong> · Ultimate with free local & mobile from <strong className="text-white">$45/month per line</strong>
                    </p>
                </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE VISUAL / TRUST SIGNALS */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex-1 w-full max-w-lg mx-auto"
          >
            <div className="relative">
                {/* 3D Glassmorphism Card */}
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/20 blur-[60px] rounded-full pointer-events-none" />
                    
                    <h3 className="c9-card-title !text-white mb-8 border-b border-white/10 pb-6">
                        Enterprise-Grade SIP Trunking
                    </h3>

                    <ul className="space-y-6">
                        {[
                            { icon: Network, title: "Fully owned C9 network" },
                            { icon: Wifi, title: "Public internet or private IP" },
                            { icon: PhoneForwarded, title: "Port existing numbers" },
                            { icon: PlugZap, title: "Analogue PBX support available" },
                            { icon: ShieldCheck, title: "nbn ready & heavily encrypted" }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#5D00D6] group-hover:bg-[#5D00D6] transition-colors">
                                    <item.icon size={20} />
                                </div>
                                <span className="text-white/80 font-medium text-[15px]">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
