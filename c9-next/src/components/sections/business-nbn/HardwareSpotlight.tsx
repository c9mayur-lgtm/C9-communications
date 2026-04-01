'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, Radio, Check, Smartphone, Shield, Wifi, Zap, Activity, Cpu, Server, Lock, Layers } from 'lucide-react';

const hardwareSections = [
  {
    icon: Zap,
    title: 'Symmetrical Enterprise Port',
    subtitle: '1000/1000 MBPS READY',
    desc: 'Our managed core units feature high-concurrency LAN/WAN ports designed for zero-congestion throughput. Unlike residential routers, these units handle simultaneous 1Gbps streams without thermal throttling.',
    features: ['Symmetrical Load Balancing', 'Gigabit RJ45/SFP+ Support', 'Low-Latency Pathing']
  },
  {
    icon: Lock,
    title: 'Integrated Next-Gen Firewall',
    subtitle: 'ALWAYS-ON SECURITY',
    desc: 'Every C9 managed unit comes pre-hardened with a built-in SPI hardware firewall and encrypted IPsec VPN termination. Protect your office LAN from the edge without needing expensive secondary appliances.',
    features: ['Stateful Packet Inspection', 'Zero-Trust Edge Protocol', 'Intrusion Prevention (IPS)']
  },
  {
    icon: Smartphone,
    title: '4G LTE Hot-Swap Failover',
    subtitle: 'ZERO-DOWNTIME CONTINUITY',
    desc: 'The integrated 4G/5G module monitors your primary fibre link heartbeat. If a drop is detected, the core unit automatically hot-swaps to the mobile backup in <2 seconds, keeping your active sessions alive.',
    features: ['Automatic Handoff', 'LTE Cat-12 High Speed', 'External Antenna Support']
  },
  {
    icon: Activity,
    title: 'Proactive Node Monitoring',
    subtitle: '24/7 NETWORK TELEMETRY',
    desc: 'Our Network Engineering Pods receive real-time telemetry from your unit. We monitor latency, jitter, and hardware thermals, often identifying and fixing line issues before your staff even notice them.',
    features: ['Real-time Latency Tracking', 'Proactive Fault Detection', 'Over-the-air (OTA) Updates']
  }
];

export default function HardwareSpotlight() {
  return (
    <section className="w-full bg-white py-14 md:py-20 overflow-visible" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-[50%_45%] gap-16 lg:gap-24 items-start">
          
          {/* STICKY VISUAL COLUMN */}
          <div className="lg:sticky lg:top-32 relative order-1 lg:order-1 h-fit">
             {/* Mobile-Only Header - Shows first on mobile */}
             <div className="lg:hidden mb-12">
               <span className="text-[11px] uppercase tracking-[0.2em] text-[#5D00D6] font-bold block mb-4">
                 MANAGED HARDWARE KIT
               </span>
               <h2 className="text-[34px] font-bold text-[#1A1A2E] leading-[1.1] tracking-tight">
                 Hardware designed for <br /> zero-fail business.
               </h2>
             </div>
             
             <div className="relative w-full aspect-square max-w-[540px] mx-auto">
                
                {/* 1. LAYER: TECHNICAL INFRASTRUCTURE GRID */}
                <div className="absolute inset-0 bg-[radial-gradient(#5D00D6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />

                {/* 2. LAYER: PATHS & NODES */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 540 540">
                   {/* Main Fibre Path (Backbone) */}
                   <path d="M 60,270 L 220,270" stroke="#F1F5F9" strokeWidth="8" strokeLinecap="round" fill="none" />
                   <motion.path 
                     d="M 60,270 L 220,270" 
                     stroke="#5D00D6" strokeWidth="2" strokeDasharray="5 5" fill="none"
                     animate={{ strokeDashoffset: [-20, 0] }}
                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                   />

                   {/* Main LAN Path (Office) */}
                   <path d="M 320,270 L 480,270" stroke="#F1F5F9" strokeWidth="8" strokeLinecap="round" fill="none" />
                   <motion.path 
                     d="M 320,270 L 480,270" 
                     stroke="#5D00D6" strokeWidth="2" strokeDasharray="5 5" fill="none"
                     animate={{ strokeDashoffset: [-20, 0] }}
                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                   />
                </svg>

                {/* 3. LAYER: CENTRAL HARDWARE NODE (STICKY CENTER) */}
                <motion.div 
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                   {/* High-Fidelity Router Chassis */}
                   <div className="relative w-64 h-40 bg-[#0c1024] rounded-[32px] shadow-[0_50px_120px_rgba(93,0,214,0.22)] border border-white/10 p-6 flex flex-col justify-between group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[32px] pointer-events-none" />
                      
                      {/* Port Layout Labels */}
                      <div className="flex justify-between items-start relative z-10">
                         <div className="flex gap-2.5">
                            {[1, 2, 3, 4].map(idx => (
                               <div key={idx} className="flex flex-col items-center gap-1.5">
                                  <div className="w-4.5 h-4.5 rounded-b-sm bg-white/5 border border-white/10 flex items-center justify-center">
                                     <motion.div 
                                       animate={{ opacity: [0.3, 1, 0.3] }}
                                       transition={{ duration: 0.15, delay: idx * 0.1, repeat: Infinity }}
                                       className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" 
                                     />
                                  </div>
                                  <span className="text-[7px] text-gray-500 font-bold">L{idx}</span>
                               </div>
                            ))}
                         </div>
                         <div className="flex flex-col items-center gap-1.5">
                            <div className="w-5.5 h-4.5 rounded-b-sm bg-[#5D00D6]/20 border border-[#5D00D6]/30 flex items-center justify-center">
                               <motion.div 
                                 animate={{ scale: [1, 1.2, 1], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
                                 transition={{ duration: 0.8, repeat: Infinity }}
                                 className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] shadow-[0_0_12px_#5D00D6]" 
                               />
                            </div>
                            <span className="text-[7px] text-[#5D00D6] font-extrabold">WAN</span>
                         </div>
                      </div>

                      {/* Router Decals */}
                      <div className="relative z-10">
                         <div className="flex items-center gap-2 mb-3">
                            <Cpu size={12} className="text-[#5D00D6]" />
                            <span className="text-[11px] font-extrabold text-white tracking-[0.1em] uppercase">C9 Managed Hub</span>
                         </div>
                         <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent" 
                            />
                         </div>
                         <div className="flex justify-between mt-2">
                            <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">THROUGHPUT: 1.2 GBPS peak</span>
                            <span className="text-[8px] font-bold text-green-500 uppercase">SYNC-ACTIVE</span>
                         </div>
                      </div>

                      {/* Vector Antennas */}
                      <div className="absolute -top-14 left-8 w-1 h-16 bg-[#0c1024] rounded-full origin-bottom rotate-[-5deg] shadow-lg border border-white/5" />
                      <div className="absolute -top-14 right-12 w-1 h-16 bg-[#0c1024] rounded-full origin-bottom rotate-[8deg] shadow-lg border border-white/5" />
                   </div>
                </motion.div>

                {/* 4. LAYER: PACKET DATA SYMMETRY (BI-DIRECTIONAL) */}
                {[1, 2, 3].map(i => (
                  <motion.div
                    key={`dl-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-[#5D00D6] z-30"
                    animate={{ x: [60, 270, 480], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 }}
                  />
                ))}
                {[1, 2, 3].map(i => (
                  <motion.div
                    key={`ul-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-purple-400 z-30"
                    animate={{ x: [480, 270, 60], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 + 1.25 }}
                  />
                ))}

                {/* 5. LAYER: TERMINAL NODES */}
                <div className="absolute top-[270px] left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                   <div className="w-16 h-16 rounded-[24px] bg-white border border-gray-100 shadow-xl flex items-center justify-center text-[#5D00D6]">
                      <Globe size={24} />
                   </div>
                   <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Global Core</span>
                </div>
                <div className="absolute top-[270px] right-8 translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                   <div className="w-16 h-16 rounded-[24px] bg-[#5D00D6] shadow-[0_20px_50px_rgba(93,0,214,0.3)] flex items-center justify-center text-white">
                      <Layers size={24} />
                   </div>
                   <span className="text-[9px] font-bold text-[#5D00D6] uppercase tracking-widest">Office LAN</span>
                </div>
             </div>

             <div className="mt-8 flex items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#5D00D6] shadow-[0_0_8px_#5D00D6]" />
                   <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center">Bi-Directional Stream Active</span>
                </div>
             </div>
          </div>

          {/* SCROLLABLE DETAIL COLUMN */}
          <div className="order-2 lg:order-2">
            <div className="mb-16 hidden lg:block">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#5D00D6] font-bold block mb-4">
                MANAGED HARDWARE KIT
              </span>
              <h2 className="text-[34px] md:text-[52px] font-bold text-[#1A1A2E] leading-[1.05] tracking-tight">
                Hardware designed for <br /> zero-fail business.
              </h2>
              <p className="text-[18px] text-[#6B7280] mt-8 leading-relaxed">
                C9 NBN™ isn’t just a raw line—it’s a managed ecosystem. We engineer the path, 
                provide the hardware, and proactively monitor the connectivity to ensure your 
                business infrastructure remains impenetrable.
              </p>
            </div>

            <div className="flex flex-col gap-24">
              {hardwareSections.map((section, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0.3, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  className="flex flex-col gap-6"
                >
                   <div className="w-14 h-14 rounded-2xl bg-[#F8F7FF] border border-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shadow-sm">
                      <section.icon size={28} strokeWidth={1.5} />
                   </div>
                   <div>
                      <p className="text-[11px] font-bold text-[#5D00D6] tracking-[0.15em] mb-2">{section.subtitle}</p>
                      <h3 className="text-[26px] font-bold text-[#1A1A2E] leading-tight mb-4 tracking-tight">{section.title}</h3>
                      <p className="text-[16px] text-[#6B7280] leading-relaxed mb-6">{section.desc}</p>
                      <ul className="space-y-3">
                         {section.features.map((feat, fi) => (
                           <li key={fi} className="flex items-center gap-3 text-[14px] font-bold text-[#1A1A2E]">
                              <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                                 <Check size={12} className="text-green-500" />
                              </div>
                              {feat}
                           </li>
                         ))}
                      </ul>
                   </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 pt-10 border-t border-gray-100 italic text-gray-400 text-[12px] leading-relaxed">
               * Hardware specifications may vary based on site technology. C9 provides Cisco, Fortinet, or custom C9-Engineered managed gateways depending on organization scale and throughput requirements.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
