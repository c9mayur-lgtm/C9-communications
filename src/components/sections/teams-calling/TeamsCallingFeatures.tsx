'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneForwarded, Layout, Smartphone, Volume2, 
  Headset, Repeat, ListOrdered, Globe, 
  ChevronRight, Sparkles 
} from 'lucide-react';

const FeatureCard = ({ title, body, icon: Icon, delay }: { title: string, body: string, icon: any, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className="group relative h-full flex flex-col p-10 rounded-[32px] bg-slate-900/40 border border-white/5 hover:border-[#5D00D6]/40 hover:bg-slate-900/60 transition-all duration-500 overflow-hidden backdrop-blur-md"
  >
    {/* Inner Glow Overlay */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#5D00D6]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#5D00D6]/20 transition-all duration-700" />
    
    <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 mb-8 border border-white/10 group-hover:bg-[#5D00D6] group-hover:text-white group-hover:border-[#5D00D6] transition-all duration-500">
            <Icon size={24} strokeWidth={1.5} />
        </div>

        <h3 className="c9-card-title !text-white !text-[20px] mb-4 group-hover:text-[#5D00D6] transition-colors">
            {title}
        </h3>

        <p className="c9-body !text-slate-400 !text-[14px] mb-8 max-w-[260px]">
          {body}
        </p>
    </div>

    {/* Bottom Accent */}
    <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  </motion.div>
);

const teamsFeatures = [
  { title: "Direct Routing", body: "Connect your Teams app directly to our carrier-grade voice network for PSTN access.", icon: PhoneForwarded },
  { title: "Unified Interface", body: "Manage voice, chat, and meetings in one single workspace without toggling apps.", icon: Layout },
  { title: "Cross-Device Voice", body: "Start a call on your desk and flip it to your mobile Teams app instantly.", icon: Smartphone },
  { title: "PSTN Clear-Voice", body: "Crystal clear call quality delivered via our high-performance SIP infrastructure.", icon: Volume2 },
  { title: "Teams Attendant", body: "Configure intelligent voice menus and call routing directly inside Teams.", icon: Headset },
  { title: "Number Portability", body: "Retain all your existing business numbers during your migration to Teams.", icon: Repeat },
  { title: "Real-time Queues", body: "Distribute workload with professional call queing rules managed natively.", icon: ListOrdered },
  { title: "Global Reach", body: "Make and receive calls from anywhere in the world with local number presence.", icon: Globe }
];

export const TeamsCallingFeatures = () => {
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
                    <span className="c9-eyebrow !text-white/60">POWERED BY TEAMS</span>
                </motion.div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="c9-section-heading !text-white"
                >
                    Seamless telephony <br className="hidden md:block" />
                    <span className="text-[#5D00D6]">inside your workspace.</span>
                </motion.h2>
            </div>
            
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="c9-body !text-slate-400 max-w-sm mb-4 text-left lg:text-right"
            >
                Professional calling features fully integrated into the Microsoft Teams experience you already know.
            </motion.p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamsFeatures.map((feature, i) => (
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
