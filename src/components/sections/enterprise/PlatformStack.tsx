'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MonitorCheck, ShieldAlert, History } from 'lucide-react';

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const platforms = [
  {
    title: 'Advanced RMM',
    tag: 'REMOTE MONITORING',
    icon: MonitorCheck,
    desc: 'Real-time visibility into every endpoint, server, and network node across your entire national footprint.',
    features: ['Live Health Dashboards', 'Proactive Patch Management', 'Automated Issue Triage']
  },
  {
    title: 'Enterprise SIEM',
    tag: 'SECURITY OPS',
    icon: ShieldAlert,
    desc: 'Continuous security information and event management providing a unified view of your security posture.',
    features: ['Threat Detection AI', 'Compliance Reporting', '24/7 SOC Response']
  },
  {
    title: 'Resilient Backup',
    tag: 'DATA CONTINUITY',
    icon: History,
    desc: 'Automated, off-site, and air-gapped backup solutions to ensure total business continuity and disaster recovery.',
    features: ['Immutable Snapshots', 'Rapid Recovery Testing', 'Geo-Redundant Storage']
  }
];

export default function PlatformStack() {
  return (
    <section className="py-16 lg:py-20 bg-[#0c1024] relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ 
        backgroundImage: `radial-gradient(#5D00D6 0.8px, transparent 0.8px)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <FadeIn>
            <span className="c9-eyebrow !text-[#a56eff] mb-6">
              OPERATIONAL PLATFORM
            </span>
            <h2 className="c9-section-heading !text-white mb-8">
              The Infrastructure <span className="text-[#a56eff]">Operating System.</span>
            </h2>
            <p className="c9-body !text-white/70">
              We don't rely on generic tools. Our platform is a bespoke integration of enterprise-grade RMM, SIEM, and Backup technologies designed to provide total visibility and control.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {platforms.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[32px] p-10 h-full flex flex-col hover:bg-white/10 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] mb-10 group-hover:scale-110 transition-transform duration-500">
                  <p.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="c9-eyebrow !text-[#a56eff] mb-3">
                  {p.tag}
                </span>
                <h3 className="c9-card-title !text-white mb-6">
                  {p.title}
                </h3>
                <p className="c9-body !text-white/60 !text-sm mb-10">
                  {p.desc}
                </p>
                <div className="mt-auto space-y-4">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle size={14} className="text-[#a56eff]" />
                      <span className="c9-body !text-[13px] !text-white/80">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Partners Banner */}
        <FadeIn delay={0.4}>
          <div className="bg-white/5 rounded-[40px] p-10 lg:p-16 border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5D00D6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-md text-center lg:text-left">
                <h3 className="text-white text-[24px] font-bold mb-4" style={fontStyle}>Strategic Partnerships</h3>
                <p className="text-white/40 text-[15px]" style={fontStyle}>
                  Our platform is built on the world's leading infrastructure and cloud technologies, ensuring your environment is always Tier-1 standard.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-10 lg:gap-20 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-10 w-auto bg-white/10 rounded px-4 flex items-center text-white font-black text-xl tracking-tighter">Microsoft</div>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Solutions Partner</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="h-10 w-auto bg-white/10 rounded px-4 flex items-center text-white font-black text-xl tracking-tighter">AWS</div>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Consulting Partner</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="h-10 w-auto bg-white/10 rounded px-4 flex items-center text-white font-black text-xl tracking-tighter">FORTINET</div>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Expert Partner</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
