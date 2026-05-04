'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Shield, Zap, 
  Monitor, Lock, Activity, Users, 
  Network, Wifi, Globe, Share2, Server,
  AlertTriangle, RefreshCw, BarChart3, Radio
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { ContinueJourney } from '@/components/sections/ContinueJourney';
import { NetworkTopologyVisual } from './components/NetworkTopologyVisual';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPERS
   ───────────────────────────────────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}) => {
  const y = direction === 'up' ? 24 : 0;
  const x = direction === 'left' ? -24 : direction === 'right' ? 24 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */

const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
    
    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
               <Network size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Network Environment Management</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                We Don't Just Provide Connectivity — We Design and Manage Your <span className="text-[#5D00D6]">Entire Network Environment</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[620px]">
                Stop managing connectivity gaps and hardware fragments. C9 owns your entire network architecture—from carrier-grade links and firewall security layers to internal switching and endpoint visibility.
             </p>
          </FadeIn>

          <FadeIn delay={0.22}>
             <div className="flex flex-wrap gap-y-3 gap-x-8 mb-10">
                {[
                   'Architecture Design',
                   'Operational Ownership',
                   'Integrated Security'
                ].map((item) => (
                   <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                      <span className="text-slate-900 font-bold uppercase tracking-wider text-[11px]">{item}</span>
                   </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
                   >
                      Request Architecture Review
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                   </a>
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-8 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
                   >
                       Audit Your Environment
                   </a>
                </div>
                <a href="#consultation" className="text-slate-500 hover:text-[#5D00D6] font-bold text-[14px] flex items-center gap-2 transition-colors group whitespace-nowrap">
                   Speak with a principal network architect
                   <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <NetworkTopologyVisual />
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — THE MANAGED STACK
   ───────────────────────────────────────────────────────── */
const SectionManagedStack = () => (
   <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className={C}>
         <div className="max-w-3xl mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">The Complete Environment</span>
               <h2 className="c9-section-heading mb-6">Everything Your Network Needs — Fully Managed</h2>
               <p className="c9-body text-slate-600 mb-6">
                  We don’t just provide connectivity — we design and manage your entire network environment. Built on enterprise-grade platforms including Ubiquiti and Fortinet, and fully governed by C9 operations.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               {
                  icon: <Globe size={24} />,
                  title: "1. Connectivity Layer",
                  points: ["Business Internet (Fiber/NBN)", "WAN / SD-WAN Architecture", "Carrier Management & Support"]
               },
               {
                  icon: <Network size={24} />,
                  title: "2. Internal Network (LAN)",
                  points: ["Switching & Core Infrastructure", "Advanced Network Design", "Traffic & VLAN Segmentation"]
               },
               {
                  icon: <Wifi size={24} />,
                  title: "3. Wireless Environment",
                  points: ["Enterprise Wi-Fi 6/7 Deployment", "Radio Frequency Coverage Planning", "Mobile Device Optimisation"]
               },
               {
                  icon: <Lock size={24} />,
                  title: "4. Network Security",
                  points: ["Managed Next-Gen Firewalls", "Inbound/Outbound Traffic Control", "Granular Access Policies"]
               },
               {
                  icon: <RefreshCw size={24} />,
                  title: "5. Redundancy & Continuity",
                  points: ["Automatic Link Failover", "Redundant Hardware Configs", "High Availability Design"]
               },
               {
                  icon: <Activity size={24} />,
                  title: "6. Monitoring & Visibility",
                  points: ["Real-time Environment Oversight", "SLA Performance Tracking", "Proactive Issue Detection"]
               },
               {
                  icon: <Share2 size={24} />,
                  title: "7. Multi-Site Networking",
                  points: ["Site-to-Site VPN Mesh", "Centralised Governance Control", "Policy & Performance Consistency"]
               }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.05} className="p-8 bg-slate-50 border border-slate-100 rounded-lg hover:border-[#5D00D6]/20 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#5D00D6] mb-8 shadow-sm group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                     {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-6 text-slate-900 uppercase tracking-tight">{item.title}</h4>
                  <ul className="space-y-3">
                     {item.points.map((p, pi) => (
                        <li key={pi} className="flex items-center gap-3 text-slate-600 text-[13px] font-medium">
                           <div className="w-1 h-1 rounded-full bg-[#5D00D6]" />
                           {p}
                        </li>
                     ))}
                  </ul>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2.5 — NETWORK HARDWARE
   ───────────────────────────────────────────────────────── */
const SectionNetworkHardware = () => (
   <section className="pt-8 pb-0 bg-white overflow-hidden border-b border-slate-100">
      <div className={C}>
         <FadeIn className="text-center mb-0 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise-Grade Network Infrastructure</h3>
            <p className="c9-body text-lg text-slate-600">
              We design, deploy, and manage your entire network fleet end-to-end. From carrier-grade firewalls and core switching to high-density wireless access points, C9 owns the hardware, the implementation, and the ongoing support—eliminating vendor fragmentation.
            </p>
         </FadeIn>
         <FadeIn delay={0.1} className="-mb-16 -mt-10">
           <div className="w-full rounded-lg overflow-hidden bg-white flex items-center justify-center">
              <img 
                src="/images/network-system-fleet.png" 
                alt="Complete Managed Network Ecosystem" 
                className="w-full max-w-7xl h-auto object-contain mix-blend-multiply scale-110" 
              />
           </div>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — ARCHITECTURE FLOW
   ───────────────────────────────────────────────────────── */
const SectionArchitectureFlow = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">The Integrated System</span>
               <h2 className="c9-section-heading mb-8">How Your Network Works — End to End</h2>
               
               <div className="space-y-10">
                  {[
                     { 
                        title: "1. Connectivity & Security Layer", 
                        desc: "External traffic enters via encrypted carrier links. Every packet is instantly inspected by Fortinet-grade security policies before reaching your internal stack." 
                     },
                     { 
                        title: "2. LAN & Switching Fabric", 
                        desc: "Data is routed through high-performance switching environments, segmented into VLANs to ensure critical business systems have dedicated, zero-latency pathways." 
                     },
                     { 
                        title: "3. Wireless & Endpoint Access", 
                        desc: "Ubiquiti-managed wireless fabrics provide seamless coverage, dynamically balancing user density and ensuring endpoints connect securely from any location." 
                     },
                     { 
                        title: "4. Continuous Monitoring & Oversight", 
                        desc: "The entire environment is mapped and monitored in real-time. C9 identifies performance dips or circuit issues before they escalate into user-facing problems." 
                     }
                  ].map((item, i) => (
                     <div key={i} className="relative pl-10 border-l-2 border-slate-200">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-[#5D00D6]" />
                        <h4 className="font-bold text-slate-900 text-[18px] mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-[15px] leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" className="relative">
               <div className="bg-[#0c1024] rounded-lg p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl min-h-[500px] flex flex-col justify-center">
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
                  
                  <div className="relative z-10 space-y-8">
                     <div className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-lg group hover:bg-white/10 transition-all">
                        <Globe className="text-[#a56eff] mb-4" size={32} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Entry</span>
                        <h5 className="font-bold">Encrypted External Links</h5>
                     </div>
                     
                     <div className="flex justify-center">
                        <ArrowRight className="rotate-90 text-white/20" size={24} />
                     </div>

                     <div className="flex flex-col items-center text-center p-6 bg-[#5D00D6]/20 border border-[#5D00D6]/40 rounded-lg shadow-xl shadow-purple-900/40">
                        <Shield className="text-[#a56eff] mb-4" size={32} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-1">Active Filter</span>
                        <h5 className="font-bold">Managed Security Layer</h5>
                     </div>

                     <div className="flex justify-center">
                        <ArrowRight className="rotate-90 text-white/20" size={24} />
                     </div>

                     <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col items-center text-center p-4 bg-white/5 border border-white/10 rounded-lg">
                           <Network className="text-[#a56eff] mb-3" size={24} />
                           <h6 className="text-[12px] font-bold">Switching Fabric</h6>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-white/5 border border-white/10 rounded-lg">
                           <Wifi className="text-[#a56eff] mb-3" size={24} />
                           <h6 className="text-[12px] font-bold">Wireless Core</h6>
                        </div>
                     </div>

                     <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40">Real-time C9 Monitoring Active</span>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — SYSTEM OWNERSHIP
   ───────────────────────────────────────────────────────── */
const SectionSystemOwnership = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Operational Discipline</span>
               <h2 className="c9-section-heading">Absolute System Ownership</h2>
               <p className="c9-body text-slate-600 mt-4">
                  C9 eliminates the operational drag of managing fragmented vendors. We take responsibility for the entire infrastructure lifecycle, ensuring your systems work as a single, unified environment.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               {
                  icon: <Globe className="text-[#5D00D6]" />,
                  title: "Carrier & WAN Control",
                  desc: "We manage the carrier relationships and high-speed links to ensure your external connectivity is never a bottleneck."
               },
               {
                  icon: <Network className="text-[#5D00D6]" />,
                  title: "Infrastructure Governance",
                  desc: "Strategic management of the physical switching and core design that powers your local operations."
               },
               {
                  icon: <Radio className="text-[#5D00D6]" />,
                  title: "Wireless Performance",
                  desc: "Engineering-grade Wi-Fi solutions designed for density, security, and consistent user experience."
               },
               {
                  icon: <ShieldCheck className="text-[#5D00D6]" />,
                  title: "Standardisation & Scale",
                  desc: "Strict adherence to configuration baselines across all sites to ensure reliability and rapid scaling."
               }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6">
                     {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>

         <FadeIn delay={0.4} className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-lg bg-[#0c1024] text-white">
               <Activity className="text-emerald-400" size={24} />
               <span className="font-bold text-[14px]">Operational Standard: C9 maintains 24/7 engineering oversight on every core link.</span>
            </div>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — STRATEGIC CONTROL
   ───────────────────────────────────────────────────────── */
const SectionStrategicControl = () => (
   <section className="py-16 lg:py-24 bg-white relative">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Strategic Value</span>
               <h2 className="c9-section-heading mb-6">Network Reliability as a Business Strategy</h2>
               <p className="c9-body mb-6">
                  In an enterprise environment, the network is not an utility—it is a strategic asset. C9 ensures your fabric is tuned for high-stakes operational results.
               </p>
               
               <div className="space-y-5 mb-8">
                  {[
                     { title: "Point-of-Sale (POS) Priority", desc: "Hardened configurations that ensure transaction environments never lose connection during peak trade." },
                     { title: "SaaS & Cloud Optimization", desc: "Prioritising business-critical application traffic to eliminate latency in ERP, CRM, and Voice systems." },
                     { title: "Operational Continuity", desc: "Seamless, high-speed backbone management that makes distributed offices feel like a single HQ." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="mt-1 flex-shrink-0"><CheckCircle size={12} className="text-[#5D00D6]" /></div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[16px]">{item.title}</h4>
                           <p className="text-slate-500 text-[14px]">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="p-6 rounded-lg bg-slate-50 border border-slate-100">
                  <p className="text-slate-600 italic text-[14px]">
                     "We don't manage connections; we manage business continuity. If your network stops, your revenue stops. We exist to prevent that."
                  </p>
               </div>
            </FadeIn>

            <FadeIn direction="right" className="relative">
               <div className="bg-[#0c1024] rounded-lg p-12 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6] opacity-10 rounded-full blur-[100px]" />
                  
                  <div className="relative z-10">
                     <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                        <RefreshCw className="text-[#a56eff]" /> Integrated Control Fabric
                     </h3>
                     
                     <div className="space-y-12">
                        <div className="relative">
                           <div className="absolute left-[20px] top-[40px] bottom-[-40px] w-0.5 bg-dashed border-l border-white/20" />
                           <div className="flex items-center gap-6 mb-2">
                              <div className="w-10 h-10 rounded-lg bg-[#5D00D6] flex items-center justify-center font-bold">1</div>
                              <div className="font-bold text-lg">External Layer</div>
                           </div>
                           <p className="pl-16 text-white/60 text-sm">Fiber, SD-WAN Mesh, 4G/5G Failover and Carrier Management</p>
                        </div>
                        
                        <div className="relative">
                           <div className="flex items-center gap-6 mb-2">
                              <div className="w-10 h-10 rounded-lg bg-[#5D00D6] flex items-center justify-center font-bold">2</div>
                              <div className="font-bold text-lg">Internal Layer</div>
                           </div>
                           <p className="pl-16 text-white/60 text-sm">Managed Core Switching, Wireless Fabric, and Access Control</p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-white/10">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                 <ShieldCheck size={24} />
                              </div>
                              <div>
                                 <div className="font-bold uppercase tracking-widest text-[10px] text-emerald-400 mb-1">MANAGED STATUS</div>
                                 <div className="font-bold">Total Environment Accountability</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — NETWORK ARCHITECTURE
   ───────────────────────────────────────────────────────── */
const SectionArchitecture = () => (
   <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">24/7 Support</span>
               <h2 className="c9-section-heading">High-Level Network Support & Oversight</h2>
               <p className="c9-body text-slate-600 mt-4">
                  We provide the continuous monitoring and proactive maintenance required to keep your infrastructure stable.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-3 gap-6">
            {[
               {
                  icon: <Monitor className="text-white" size={28} />,
                  title: "Monitoring",
                  desc: "24/7 oversight of circuit health and hardware performance across all locations.",
                  features: ["Circuit Health", "Uptime Monitoring", "Performance Tracking"],
                  color: "bg-[#5D00D6]"
               },
               {
                  icon: <Activity className="text-[#5D00D6]" size={28} />,
                  title: "Proactive Detection",
                  desc: "Identifying potential failures and performance bottlenecks before they impact operations.",
                  features: ["Latency Alerts", "Threat Detection", "Anomaly Identification"],
                  color: "bg-white"
               },
               {
                  icon: <Users className="text-[#5D00D6]" size={28} />,
                  title: "Support & Maintenance",
                  desc: "Rapid incident resolution and regular configuration tuning to maintain peak performance.",
                  features: ["Engineer Access", "Firmware Updates", "Patch Management"],
                  color: "bg-white"
               }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className={`${item.color === 'bg-[#5D00D6]' ? 'bg-[#5D00D6] text-white shadow-2xl shadow-[#5D00D6]/20' : 'bg-white border-slate-200'} p-8 lg:p-10 rounded-lg border shadow-sm relative group hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full`}>
                  <div className={`mb-8 w-16 h-16 rounded-[24px] ${item.color === 'bg-[#5D00D6]' ? 'bg-white/10 border border-white/20' : 'bg-[#5D00D6]/5 border border-[#5D00D6]/10'} flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                     {item.icon}
                  </div>
                  <h4 className={`text-2xl font-bold mb-4 tracking-tight ${item.color === 'bg-[#5D00D6]' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                  <p className={`text-[14px] leading-relaxed mb-8 flex-grow ${item.color === 'bg-[#5D00D6]' ? 'text-white/80' : 'text-slate-500'}`}>{item.desc}</p>
                  
                  <div className={`pt-8 border-t ${item.color === 'bg-[#5D00D6]' ? 'border-white/10' : 'border-slate-50'}`}>
                     <ul className="space-y-4">
                        {item.features.map(f => (
                           <li key={f} className={`flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.1em] ${item.color === 'bg-[#5D00D6]' ? 'text-white' : 'text-slate-700'}`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${item.color === 'bg-[#5D00D6]' ? 'bg-white' : 'bg-[#5D00D6]'}`} /> {f}
                           </li>
                        ))}
                     </ul>
                  </div>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — REDUNDANCY & FAILOVER (DARK SECTION)
   ───────────────────────────────────────────────────────── */
const SectionRedundancy = () => (
   <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Continuity Planning</span>
               <h2 className="c9-section-heading !text-white mb-6">Failures Are Anticipated. Handled. Resolved.</h2>
               <p className="c9-body text-white/80 mb-8">
                  Reliability isn't just about good hardware—it's about building a system that expects failure and stays online anyway.
               </p>

               <div className="grid sm:grid-cols-2 gap-6">
                  {[
                     { icon: <RefreshCw size={20} />, title: "Automatic Failover", desc: "Instant transition to backup links (4G/5G/Fiber) if your primary connection drops." },
                     { icon: <Zap size={20} />, title: "Load Balancing", desc: "Utilize all available bandwidth simultaneously for maximum performance." },
                     { icon: <Activity size={20} />, title: "Continuity Audits", desc: "Regular testing of failover mechanisms to ensure they work when you need them." },
                     { icon: <Server size={20} />, title: "Redundant Hardware", desc: "Dual-router and dual-firewall configurations for hardware-level resilience." }
                  ].map((item, i) => (
                     <div key={i} className="bg-white/5 p-6 rounded-lg border border-white/10">
                        <div className="text-[#a56eff] mb-4">{item.icon}</div>
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" className="relative">
               <div className="relative rounded-lg overflow-hidden aspect-square border-4 border-white/10 shadow-2xl">
                  <img 
                     src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                     alt="Network Redundancy" 
                     className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-[#0c1024]/40" />
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px]">
                     <div className="bg-white/95 backdrop-blur-md rounded-lg p-8 border border-white/60 shadow-2xl text-slate-900">
                        <div className="flex items-center justify-between mb-6">
                           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Simulation</span>
                           <span className="text-red-500 font-bold text-[10px] uppercase">Link Failure Detected</span>
                        </div>
                        
                        <div className="space-y-6">
                           <div className="flex items-center justify-between">
                               <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-red-500" />
                                  <span className="font-bold text-sm">Primary Fiber</span>
                               </div>
                               <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Offline</span>
                            </div>
                            
                            <div className="flex items-center justify-center">
                               <ArrowRight className="text-slate-300 rotate-90" />
                            </div>

                            <div className="flex items-center justify-between">
                               <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                  <span className="font-bold text-sm">Secondary 5G</span>
                               </div>
                               <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Active</span>
                            </div>

                            <div className="pt-4 border-t border-slate-100 text-center">
                               <span className="font-bold text-[10px] text-slate-400 uppercase tracking-[0.3em]">Operational Uptime: 100%</span>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — MULTI-SITE MANAGEMENT
   ───────────────────────────────────────────────────────── */
const SectionMultiSite = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
            <FadeIn direction="left" className="relative">
               <div className="bg-slate-50 rounded-lg p-10 border border-slate-100 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6] opacity-[0.03] rounded-full blur-[100px]" />
                  <div className="relative z-10">
                     <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Globe className="text-[#5D00D6]" /> Unified Multi-Site
                     </h3>
                     
                     <div className="space-y-3">
                        {[
                           { label: "Managing multiple locations", value: "Identical Performance Across All Locations" },
                           { label: "Consistent configurations", value: "Push Security Updates Globally in Seconds" },
                           { label: "Centralised visibility", value: "Optimized Traffic via Private Backbones" },
                           { label: "Scalability for new sites", value: "New Sites Online Without IT Travel" }
                        ].map((row, i) => (
                           <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">{row.label}</div>
                              <div className="font-bold text-slate-900 text-[14px]">{row.value}</div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="right">
               <span className="c9-eyebrow mb-4">Location Continuity</span>
               <h2 className="c9-section-heading mb-6">Optimised for Multi-Site Operations</h2>
               <p className="c9-body mb-8">
                  C9 specialises in managing network infrastructure across multiple sites, ensuring consistency and centralised visibility for your entire organisation.
               </p>
               
               <div className="grid gap-5">
                  {[
                     { 
                        title: "Seamless Connectivity", 
                        desc: "Secure site-to-site tunnels that make the entire organization feel like it's on a single LAN." 
                     },
                     { 
                        title: "Global Visibility", 
                        desc: "A single dashboard to monitor the health and throughput of every branch in real-time." 
                     },
                     { 
                        title: "Standardized Security", 
                        desc: "Consistent firewall policies and threat protection enforced across every edge device." 
                     }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-6 rounded-lg bg-slate-50 border border-slate-100 hover:border-[#5D00D6]/20 transition-all group">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-all shadow-sm">
                           <Share2 size={20} />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
                           <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — MONITORING & CONTROL
   ───────────────────────────────────────────────────────── */
const SectionMonitoring = () => (
   <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">24/7 Oversight</span>
               <h2 className="c9-section-heading mb-6">Detect. Predict. Prevent.</h2>
               <p className="c9-body mb-8">
                  We don't wait for your staff to report a problem. Our monitoring systems identify performance degradation and circuit issues before they impact your operations.
               </p>

               <div className="space-y-5">
                  {[
                     { icon: <Monitor size={20} />, title: "Real-time Traffic Visibility", desc: "Deep packet inspection showing exactly what applications are using your bandwidth." },
                     { icon: <Lock size={20} />, title: "Security Threat Detection", desc: "Immediate alerting and automated blocking of malicious network-level activity." },
                     { icon: <BarChart3 size={20} />, title: "Executive Reporting", desc: "Monthly insights into uptime, performance stability, and infrastructure health." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="text-[#5D00D6] mt-1">{item.icon}</div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[16px]">{item.title}</h4>
                           <p className="text-slate-500 text-[14px]">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" className="bg-[#0c1024] rounded-lg p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6] opacity-10 rounded-full blur-[100px]" />
               
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                     <h4 className="text-lg font-bold">Network Performance Hub</h4>
                     <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
                        Live Monitoring
                     </div>
                  </div>
                  
                  <div className="space-y-8">
                     <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                           <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Latency</div>
                           <div className="text-xl font-bold">12ms <span className="text-[10px] text-emerald-400">Stable</span></div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                           <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Packet Loss</div>
                           <div className="text-xl font-bold">0.01% <span className="text-[10px] text-emerald-400">Ideal</span></div>
                        </div>
                     </div>

                     <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                        <div className="flex justify-between items-end mb-6">
                           <div className="text-[10px] text-white/40 uppercase tracking-widest">Traffic Load (24h)</div>
                           <div className="text-[10px] text-emerald-400 font-bold uppercase">Within Capacity</div>
                        </div>
                        <div className="flex items-end justify-between h-24 gap-1">
                           {[40, 60, 45, 70, 85, 40, 50, 65, 90, 45, 55, 60, 40, 75, 50].map((h, i) => (
                              <motion.div 
                                 key={i}
                                 initial={{ height: 0 }}
                                 whileInView={{ height: `${h}%` }}
                                 transition={{ delay: i * 0.05, duration: 1 }}
                                 className="flex-1 bg-[#5D00D6]/40 rounded-t-sm"
                              />
                           ))}
                        </div>
                     </div>

                     <div className="flex items-center gap-4 text-xs text-white/60">
                        <div className="flex items-center gap-1.5">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> NOC Active
                        </div>
                        <div className="flex items-center gap-1.5">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> SIEM Integrated
                        </div>
                        <div className="flex items-center gap-1.5">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Auto-Scaling Ready
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — HOW IT WORKS (PROCESS)
   ───────────────────────────────────────────────────────── */
const SectionHowItWorks = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Our Methodology</span>
               <h2 className="c9-section-heading mb-6">From Assessment to 24/7 Oversight</h2>
               <p className="c9-body text-slate-600">A rigorous approach to building networks that never stop.</p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-5 gap-5">
            {[
               { step: '01', title: 'Network Assessment', desc: 'Audit of current circuits, latency, and gaps.' },
               { step: '02', title: 'Design & Planning', desc: 'Architecting for redundancy and performance.' },
               { step: '03', title: 'Deployment', desc: 'Seamless rollout with zero unplanned disruption.' },
               { step: '04', title: 'Optimization', desc: 'Tuning traffic flow for business-critical apps.' },
               { step: '05', title: 'Monitoring & Support', desc: 'Active 24/7 oversight and proactive resolution.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-white p-8 rounded-lg border border-slate-200 shadow-sm group hover:border-[#5D00D6]/30 transition-all">
                  <div className="text-[40px] font-black text-slate-100 group-hover:text-[#5D00D6]/10 transition-colors absolute top-6 right-6 leading-none">
                     {s.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#5D00D6] text-white flex items-center justify-center font-bold text-[16px] mb-6 relative z-10 shadow-md">
                     {i + 1}
                  </div>
                  <h4 className="c9-card-title mb-3 relative z-10">{s.title}</h4>
                  <p className="text-slate-500 text-[15px] leading-relaxed relative z-10">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — PROOF & REALITY
   ───────────────────────────────────────────────────────── */
const SectionOutcomes = () => (
   <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Measured Stability</span>
               <h2 className="c9-section-heading !text-white mb-6">Reliability That Scales</h2>
               <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">99.9%</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">Guaranteed Uptime</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">10ms</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">Inter-Site Latency</div>
                  </div>
               </div>
               <p className="c9-body text-white/80 mb-6 italic">
                  "Since C9 took over our multi-site network, connectivity has become something we simply don't have to think about. They maintained 100% stability even through carrier-level regional outages."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" alt="Client" />
                  </div>
                  <div>
                     <div className="font-bold">Head of IT</div>
                     <div className="text-xs text-white/40">National Retail Group</div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="right" className="relative">
               <div className="relative rounded-lg overflow-hidden aspect-[4/3] border-4 border-white/10">
                  <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200" alt="Network Operations" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] to-transparent opacity-60" />
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — IMPACT & VALUE
   ───────────────────────────────────────────────────────── */
const SectionImpact = () => (
   <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Commercial Impact</span>
               <h2 className="c9-section-heading">Translating Uptime to Profit</h2>
            </FadeIn>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            {[
               { title: 'Reduced Downtime Risk', desc: 'Eliminate the direct and indirect costs of operational halts due to network failure.' },
               { title: 'Operational Continuity', desc: 'Staff remain productive regardless of carrier issues or site-level connectivity challenges.' },
               { title: 'Predictable Performance', desc: 'Ensure your business-critical systems always have the bandwidth they need to function at peak speed.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="p-8 lg:p-10 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center">
                  <div className="w-14 h-14 bg-[#5D00D6]/5 rounded-2xl flex items-center justify-center text-[#5D00D6] mx-auto mb-6">
                     <Activity size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 11 — SERVICE INTEGRATION
   ───────────────────────────────────────────────────────── */


/* ─────────────────────────────────────────────────────────
   SECTION 12 — SERVICE INTERCONNECT
   ───────────────────────────────────────────────────────── */
const SectionServiceInterconnect = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">The Integrated Foundation</span>
               <h2 className="c9-section-heading mb-6">The Network Connects Everything</h2>
               <p className="c9-body text-slate-600">
                  Your network environment is the bridge between your security, your infrastructure, and your digital workplace. We manage the interconnectivity to ensure zero friction.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {[
               {
                  title: "Cybersecurity",
                  desc: "The network is your first line of defense. We embed traffic inspection and access control directly into the hardware layer.",
                  link: "https://c9defense.com.au/"
               },
               {
                  title: "Managed Infrastructure",
                  desc: "Whether cloud or on-prem, server performance is limited by network speed. We design pathways that eliminate latency.",
                  link: "/managed-it"
               },
               {
                  title: "Modern Workplace",
                  desc: "Collaboration and voice tools depend on quality of service. We prioritise unified communications at the packet level.",
                  link: "/modern-workplace"
               }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-10 border border-slate-200 rounded-lg flex flex-col h-full shadow-sm hover:shadow-xl transition-all group">
                  <h4 className="text-xl font-bold mb-4 text-[#0c1024]">{item.title}</h4>
                  <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-grow">{item.desc}</p>
                  <a href={item.link} className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[13px] uppercase tracking-widest group-hover:gap-3 transition-all">
                     Explore Integration <ArrowRight size={16} />
                  </a>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function NetworkSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionNetworkHardware />
      <SectionArchitectureFlow />
      <SectionManagedStack />
      <SectionServiceInterconnect />
      <SectionSystemOwnership />
      <SectionStrategicControl />
      <SectionArchitecture />
      <SectionRedundancy />
      <SectionMultiSite />
      <SectionMonitoring />
      <SectionHowItWorks />
      <SectionOutcomes />
      <SectionImpact />


      <WpDefenseBanner 
        title={<>Network-Level <span className="text-[#5D00D6]">Protection.</span></>}
        description="Every connection is a potential entry point. We embed security directly into your network fabric with active threat monitoring and secure access."
        buttonText="View Security Solutions"
        href="https://c9defense.com.au/"
      />

      <ContinueJourney 
        title="Connectivity is the Pulse."
        description="Your network powers your apps and your team. Discover how we manage the systems that travel across your links."
        links={[
          { label: 'Managed Cloud Services', path: '/managed-it/cloud-services' },
          { label: 'Infrastructure Governance', path: '/managed-it/infrastructure' },
          { label: 'Helpdesk Support', path: '/managed-it/helpdesk-support' },
          { label: 'IT Outsourcing', path: '/managed-it/outsourcing' }
        ]}
      />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="READY FOR STABLE INFRASTRUCTURE?"
          title="Get Clarity on Your Network Before Issues Impact Operations"
          description="Schedule an assessment to identify gaps in your current setup and plan for a more reliable future."
          formTitle="Request Infrastructure Assessment"
        />
      </section>
    </main>
  );
}
