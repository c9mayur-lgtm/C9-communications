'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldAlert, Zap, MonitorCheck, Bell, ShieldCheck, Cpu, Database } from 'lucide-react';



const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const capabilities = [
  {
    title: '24/7 NOC Operations',
    desc: 'Continuous infrastructure monitoring layer detecting performance anomalies before they impact users.',
    icon: Activity,
    tag: 'AVAILABILITY'
  },
  {
    title: 'Managed SOC Layer',
    desc: 'SIEM-powered threat visibility and active response protocols for real-time security enforcement.',
    icon: ShieldAlert,
    tag: 'SECURITY'
  },
  {
    title: 'RMM Intelligence',
    desc: 'Advanced remote management and automation for patch integrity and proactive environment tuning.',
    icon: Cpu,
    tag: 'EFFICIENCY'
  }
];

export default function NOCSOCMonitoring() {
  return (
    <section className="py-16 lg:py-20 bg-[#0c1024] relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/20 to-transparent opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ 
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-20 items-center mb-24">
          <FadeIn>
            <span className="c9-eyebrow !text-[#a56eff] mb-6">
              OPERATIONAL VIGILANCE
            </span>
            <h2 className="c9-section-heading !text-white mb-8">
              24/7 NOC + SOC <br />
              <span className="text-[#a56eff]">Centralised Command.</span>
            </h2>
            <p className="c9-body !text-white/70 mb-10">
              We operate a unified command centre that integrates network operations and security oversight. Our incident workflow is triggered by system telemetry, not user complaints.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
               {[
                 { title: 'SIEM Log Analysis', icon: Database },
                 { title: 'Live Health Telemetry', icon: Activity },
                 { title: 'Automated Alerting', icon: Bell },
                 { title: 'Threat Containment', icon: ShieldCheck }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                   <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#a56eff] group-hover:bg-[#a56eff] group-hover:text-white transition-all duration-300">
                     <item.icon size={20} aria-hidden="true" />
                   </div>
                   <span className="text-[15px] font-bold text-white/80">{item.title}</span>
                 </div>
               ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
            {/* Visual Representation of NOC/SOC */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-none p-10 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/10 blur-3xl rounded-full" />
              
              <div className="relative z-10 space-y-12">
                <div className="flex items-center justify-between">
                   <h3 className="c9-card-title !text-white">Live Operations State</h3>
                   <span className="c9-eyebrow !text-emerald-400 bg-emerald-500/10 !text-[9px] px-3 py-1 rounded-none border border-emerald-500/20">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block mr-1.5" /> NOC Active
                   </span>
                </div>

                <div className="space-y-6">
                    { [
                        { label: 'Ingested Logs / Sec', val: '4,850', color: 'text-[#a56eff]' },
                        { label: 'Active RMM Agents', val: '12,402', color: 'text-[#a56eff]' },
                        { label: 'Threats Blocked (24h)', val: '1,240', color: 'text-rose-400' }
                      ].map((stat, i) => (
                        <div key={i} className="pb-6 border-b border-white/10 last:border-0">
                          <div className="flex items-center justify-between mb-2">
                            <span className="c9-eyebrow !text-white/95 !text-[9px]">{stat.label}</span>
                            <span className={`text-[18px] font-black ${stat.color}`}>{stat.val}</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/5 rounded-none overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: '70%' }}
                              transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                              className={`h-full ${stat.color.includes('rose') ? 'bg-rose-400' : 'bg-[#5D00D6]'}`}
                            />
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {capabilities.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="bg-white/5 border border-white/10 rounded-none p-10 h-full hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 rounded-none bg-[#a56eff]/10 text-[#a56eff] flex items-center justify-center mb-10 group-hover:scale-110 duration-500">
                  <c.icon size={32} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className="c9-eyebrow !text-[#a56eff] mb-3">
                  {c.tag}
                </span>
                <h3 className="c9-card-title !text-white mb-6">
                  {c.title}
                </h3>
                <p className="c9-body !text-white/95">
                  {c.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
