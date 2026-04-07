'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Headset, Users, ShieldCheck, Share2, Cloud, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactCentreHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0c1024] overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Cinematic Effects */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5D00D6]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Glow Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5D00D6]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

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
              <Headset size={14} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !text-white/60">Telco · Contact Centre</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[42px] md:text-[60px] lg:text-[72px] font-bold text-white leading-[1.05] tracking-tight mb-8"
            >
              C9X Omni Channel <br className="hidden md:block"/>
              <span className="text-[#5D00D6]">Contact Centre.</span>
            </motion.h1>
            
            {/* The rest of the H1 styling */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[28px] md:text-[36px] font-medium text-white/90 leading-tight mb-8"
            >
              Every channel. One platform. <br className="hidden md:block"/>
              Zero crossed wires.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[16px] md:text-[18px] text-white/50 max-w-2xl mb-12 leading-relaxed"
            >
              C9&apos;s cloud-based contact centre solution lets your agents handle calls, web chat, social media, and app interactions from anywhere — with full interaction history, advanced routing, workforce management, and real-time analytics in a single manageable platform.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.3 }}
               className="flex flex-col sm:flex-row items-center gap-6"
            >
               <Link href="#consultation" className="w-full sm:w-auto bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-full px-10 h-14 flex items-center justify-center text-[16px] font-medium shadow-xl shadow-[#5D00D6]/20 transition-all hover:scale-105 active:scale-95 leading-none">
                  Book a Contact Centre Consultation
               </Link>
               <Link href="#capabilities" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full px-10 h-14 flex items-center justify-center text-[16px] font-medium transition-all hover:scale-105 active:scale-95 leading-none">
                  See All Capabilities
               </Link>
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
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/20 blur-[60px] rounded-full pointer-events-none" />
                    
                    <h3 className="text-[20px] font-bold text-white mb-8 border-b border-white/10 pb-6">
                        Enterprise Capabilities
                    </h3>

                    <ul className="space-y-6">
                        {[
                            { icon: MessageSquare, title: "Omni channel — voice, chat, social, app" },
                            { icon: Users, title: "Agents work from anywhere" },
                            { icon: ShieldCheck, title: "PCI-DSS payment collection" },
                            { icon: Share2, title: "CRM integration — Salesforce, Teams, Zendesk" },
                            { icon: Cloud, title: "Azure-hosted — 24/7/365 availability" }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/10 border border-[#5D00D6]/20 flex items-center justify-center text-[#5D00D6] shrink-0">
                                    <item.icon size={20} />
                                </div>
                                <span className="text-white/80 font-medium text-[15px] pt-3 leading-tight">{item.title}</span>
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
