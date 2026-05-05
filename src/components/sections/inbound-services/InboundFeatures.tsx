'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Headset, Repeat, MapPin, Inbox, Clock, Mail, Users, Music, Printer, Mic, Volume2, Link2, ChevronRight, Sparkles, Navigation2, Palette } from 'lucide-react';

const FeatureCard = ({ title, body, icon: Icon, delay }: { title: string, body: string, icon: any, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className="relative h-full flex flex-col p-10 rounded-[32px] bg-slate-900/40 border border-white/5 hover:border-[#5D00D6]/40 hover:bg-slate-900/60 transition-all duration-500 overflow-hidden backdrop-blur-md"
  >
    {/* Inner Glow Overlay */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#5D00D6]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#5D00D6]/20 transition-all duration-700" />
    
    <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 mb-8 border border-white/10 group-hover:bg-[#5D00D6] group-hover:text-white group-hover:border-[#5D00D6] transition-all duration-500">
            <Icon size={24} strokeWidth={1.5} />
        </div>

        <h3 className="text-[20px] font-bold text-white mb-4 leading-tight tracking-tight flex items-center gap-2 group-hover:text-[#5D00D6] transition-colors">
            {title}
        </h3>

        <p className="text-slate-400 text-[14px] leading-relaxed font-normal mb-8 max-w-[260px]">
          {body}
        </p>
    </div>

    {/* Bottom Accent */}
    <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent w-full scale-x-0 group-hover:scale-x-100 duration-500" />
  </motion.div>
);

const inboundFeatures = [
  { title: "Intelligent IVR", body: "Self-service menus that qualify callers and route them to the right team instantly.", icon: Headset },
  { title: "MOLI Routing", body: "Mobile Location Routing (MOLI) ensures calls are delivered based on the caller's mobile tower proximity.", icon: Navigation2 },
  { title: "Geo & Time Logic", body: "Define automated schedules for business hours, holidays, and geographic location routing.", icon: MapPin },
  { title: "Voice Branding", body: "Professional voice artists and scriptwriters to create a premium, on-brand IVR experience.", icon: Palette },
  { title: "Call Recording", body: "Cloud-based storage and retrieval for compliance, quality assurance, and training purposes.", icon: Mic },
  { title: "Live Insights", body: "Real-time visibility into answer rates, hold times, and call volume trends via our dashboard.", icon: Volume2 },
  { title: "Voice to Inbox", body: "Missing a call? Get a high-fidelity digital copy delivered directly to your email in seconds.", icon: Mail },
  { title: "Mobile Cascading", body: "Automatic overflow to your mobile team or secondary numbers when your primary line is busy.", icon: Repeat }
];

export const InboundFeatures = () => {
  return (
    <section className="py-24 bg-[#0c1024] relative overflow-hidden">
      {/* Cinematic Overlays */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5D00D6]/20 to-transparent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#5D00D6]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Modern Header Row */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
                >
                    <Sparkles size={14} className="text-[#5D00D6]" />
                    <span className="c9-eyebrow !text-white/60 !text-[10px]">NEXT-GEN INBOUND</span>
                </motion.div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[36px] md:text-[56px] font-bold text-white leading-[1.1] tracking-tight"
                >
                    Advanced logic for <br />
                    <span className="text-[#5D00D6]">complex networks.</span>
                </motion.h2>
            </div>
            
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 max-w-sm text-[16px] leading-relaxed mb-4 text-left lg:text-right"
            >
                Over 80 standard features designed to give your staff and customers the best possible experience.
            </motion.p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inboundFeatures.map((feature, i) => (
            <FeatureCard 
              key={i}
              {...feature}
              delay={0.1 + (i % 4) * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
