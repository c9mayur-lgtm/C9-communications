'use client';

import React from 'react';
import { 
  Wifi, PhoneCall, ShieldCheck, Activity, Zap, 
  Network, Mic2, Smartphone, Globe, Check, 
  ArrowRight, Shield, Monitor, MessageSquare, 
  Server, Layers, Search, Cpu, Users
} from 'lucide-react';
import { motion } from 'framer-motion';

const StatusChip = ({ text, color = 'emerald' }: { text: string, color?: string }) => {
  const colors: Record<string, string> = {
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
  };
  return (
    <div className={`px-2 py-0.5 rounded-full border text-[9px] font-black uppercase tracking-wider ${colors[color] || colors.emerald}`}>
      {text}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   HERO VISUAL
   ───────────────────────────────────────────────────────── */
export const HeroVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/10 to-transparent rounded-full blur-3xl" />
      
      {/* Central Card: C9 Telco Platform */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-white rounded-[32px] shadow-2xl border border-slate-100 p-6 z-20 backdrop-blur-sm bg-white/90"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5D00D6] flex items-center justify-center text-white shadow-lg shadow-purple-900/20">
              <Activity size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-clash">C9 Telco Platform</h4>
              <p className="text-[10px] text-slate-500 font-medium">Unified Management active</p>
            </div>
          </div>
          <StatusChip text="Managed" color="purple" />
        </div>

        <div className="space-y-3">
          {[
            { label: 'Network Integrity', val: '99.99%', color: 'emerald' },
            { label: 'Voice Channels', val: 'Active', color: 'blue' },
            { label: 'Fibre Throughput', val: '1.2 Gbps', color: 'purple' }
          ].map((stat, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold text-slate-600">{stat.label}</span>
              <span className={`text-[11px] font-black text-${stat.color}-600 uppercase`}>{stat.val}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Service Pills */}
      {[
        { icon: <PhoneCall size={16} />, label: 'Phone System', top: '15%', left: '10%', delay: 0.2 },
        { icon: <Wifi size={16} />, label: 'Business nbn', top: '25%', right: '5%', delay: 0.3 },
        { icon: <Zap size={16} />, label: 'Fast Fibre', bottom: '20%', left: '0%', delay: 0.4 },
        { icon: <Network size={16} />, label: 'Enterprise Ethernet', bottom: '15%', right: '10%', delay: 0.5 },
        { icon: <Mic2 size={16} />, label: 'AI Voice', top: '10%', right: '25%', delay: 0.6 },
      ].map((pill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: pill.delay, duration: 0.5 }}
          style={{ top: pill.top, left: pill.left, right: pill.right, bottom: pill.bottom }}
          className="absolute z-30 flex items-center gap-2 px-4 py-2.5 bg-white rounded-full shadow-xl border border-slate-100"
        >
          <div className="text-[#5D00D6]">{pill.icon}</div>
          <span className="text-[11px] font-black text-slate-800 whitespace-nowrap">{pill.label}</span>
        </motion.div>
      ))}

      {/* Status Chips Floating */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[60%] z-10"
      >
        <StatusChip text="Connected" color="emerald" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] left-[20%] z-10"
      >
        <StatusChip text="Ready for Business" color="blue" />
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   CORE PRODUCT MINI VISUALS
   ───────────────────────────────────────────────────────── */
export const PhoneSystemVisual = () => (
  <div className="w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden p-4 mb-6">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] font-black uppercase text-slate-400">Incoming Call</span>
      </div>
      <StatusChip text="Active" />
    </div>
    <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
        <Users size={14} />
      </div>
      <div>
        <p className="text-[11px] font-bold text-slate-800">Sydney HQ Office</p>
        <p className="text-[9px] text-slate-500">Routing to Support Team...</p>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 opacity-10 text-[#5D00D6]">
      <PhoneCall size={80} />
    </div>
  </div>
);

export const InternetVisual = () => (
  <div className="w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden p-4 mb-6">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] font-black uppercase text-slate-400">Network Status</span>
      <StatusChip text="Connected" />
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span className="text-[9px] font-bold">Cloud Apps</span>
      </div>
      <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span className="text-[9px] font-bold">EFTPOS</span>
      </div>
    </div>
    <div className="mt-3 flex items-center gap-2">
       <Activity size={12} className="text-emerald-500" />
       <div className="h-1 flex-grow bg-slate-200 rounded-full overflow-hidden">
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-emerald-500"
          />
       </div>
    </div>
  </div>
);

export const FibreVisual = () => (
  <div className="w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden p-4 mb-6">
    <div className="flex items-center justify-between mb-3">
      <span className="text-[10px] font-black uppercase text-slate-400">Fibre Speed</span>
      <StatusChip text="Gigabit" color="purple" />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <span className="text-[9px] font-bold text-slate-500">Download</span>
        <span className="text-[14px] font-black text-slate-900">940 <span className="text-[8px] uppercase">Mbps</span></span>
      </div>
      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-[#5D00D6] w-[94%]" />
      </div>
      <div className="flex justify-between items-end">
        <span className="text-[9px] font-bold text-slate-500">Upload</span>
        <span className="text-[14px] font-black text-slate-900">400 <span className="text-[8px] uppercase">Mbps</span></span>
      </div>
      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-purple-400 w-[40%]" />
      </div>
    </div>
  </div>
);

export const EthernetVisual = () => (
  <div className="w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden p-4 mb-6">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] font-black uppercase text-slate-400">Enterprise Mesh</span>
      <StatusChip text="Dedicated" color="blue" />
    </div>
    <div className="relative h-12 flex items-center justify-center">
       <div className="absolute w-full h-px bg-slate-200" />
       <div className="flex justify-between w-full relative z-10">
          <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm">
             <Globe size={14} />
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#5D00D6] flex items-center justify-center text-white shadow-lg">
             <Network size={14} />
          </div>
          <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm">
             <Server size={14} />
          </div>
       </div>
    </div>
    <p className="text-center text-[9px] font-bold text-slate-500 mt-2">Zero-Congestion Connectivity Active</p>
  </div>
);

export const AIVoiceVisual = () => (
  <div className="w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden p-4 mb-6">
    <div className="flex items-center justify-between mb-3">
      <span className="text-[10px] font-black uppercase text-slate-400">AI Call Assistant</span>
      <StatusChip text="Processing" color="purple" />
    </div>
    <div className="space-y-2">
       <div className="flex items-center gap-2 bg-white/80 p-2 rounded-lg border border-[#5D00D6]/10">
          <div className="w-4 h-4 rounded-full bg-[#5D00D6] flex items-center justify-center text-white">
             <Mic2 size={8} />
          </div>
          <span className="text-[9px] font-medium text-slate-600">"How can I help with your enquiry?"</span>
       </div>
       <div className="flex items-center gap-2 justify-end">
          <span className="text-[8px] font-bold text-slate-400 uppercase">Routing to Sales</span>
          <ArrowRight size={10} className="text-slate-400" />
       </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1 flex gap-1">
       {[...Array(20)].map((_, i) => (
         <motion.div 
           key={i}
           animate={{ height: [4, Math.random() * 20 + 4, 4] }}
           transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
           className="flex-grow bg-[#5D00D6]/20 rounded-full"
         />
       ))}
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   PROBLEM / SOLUTION VISUAL
   ───────────────────────────────────────────────────────── */
export const ProblemSolutionVisual = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden">
      <div className="absolute top-4 right-4 text-red-500/10">
        <Activity size={80} />
      </div>
      <h4 className="text-red-600 font-black uppercase tracking-widest text-[10px] mb-6">Before C9</h4>
      <ul className="space-y-4 relative z-10">
        {[
          { text: 'Missed customer calls', icon: <PhoneCall size={14} className="text-red-400" /> },
          { text: 'Slow, dropping internet', icon: <Wifi size={14} className="text-red-400" /> },
          { text: 'Multiple confusing providers', icon: <Layers size={14} className="text-red-400" /> },
          { text: 'No local accountability', icon: <Shield size={14} className="text-red-400" /> }
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-500 font-medium text-sm">
            {item.icon} {item.text}
          </li>
        ))}
      </ul>
    </div>
    
    <div className="bg-[#0c1024] rounded-3xl p-8 border border-white/10 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#5D00D6]/20 blur-[60px] rounded-full" />
      <h4 className="text-[#a56eff] font-black uppercase tracking-widest text-[10px] mb-6">With C9</h4>
      <ul className="space-y-4 relative z-10">
        {[
          { text: 'Intelligent call routing', icon: <Check size={14} className="text-emerald-400" /> },
          { text: 'Managed Business Fibre', icon: <Check size={14} className="text-emerald-400" /> },
          { text: 'Single Australian partner', icon: <Check size={14} className="text-emerald-400" /> },
          { text: '24/7 Managed support', icon: <Check size={14} className="text-emerald-400" /> }
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-white/90 font-bold text-sm">
            {item.icon} {item.text}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   CONNECTIVITY DIAGRAM
   ───────────────────────────────────────────────────────── */
export const ConnectivityDiagram = () => (
  <div className="relative py-12 flex flex-col items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5D00D6]/5 to-transparent rounded-full blur-3xl" />
    
    <div className="relative z-10 flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl">
       <div className="w-32 h-32 rounded-[24px] bg-[#5D00D6] flex flex-col items-center justify-center text-white shadow-2xl shadow-purple-900/40 border border-white/20 p-4 text-center">
          <Activity size={28} className="mb-2" />
          <span className="text-[10px] font-black uppercase leading-tight">C9 Managed Telco</span>
       </div>

       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Phone System', icon: <PhoneCall size={18} /> },
            { label: 'Business nbn', icon: <Wifi size={18} /> },
            { label: 'Fast Fibre', icon: <Zap size={18} /> },
            { label: 'AI Voice', icon: <Mic2 size={18} /> },
            { label: 'Ethernet', icon: <Network size={18} /> },
            { label: 'Teams Calling', icon: <Smartphone size={18} /> },
            { label: 'Managed Router', icon: <Server size={18} /> },
            { label: '4G/5G Backup', icon: <Activity size={18} /> },
          ].map((node, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-3 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md w-24">
               <div className="text-[#a56eff]">{node.icon}</div>
               <span className="text-[8px] font-bold text-white/80 text-center uppercase tracking-wider">{node.label}</span>
            </div>
          ))}
       </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   COMPARISON VISUAL (Standard vs C9)
   ───────────────────────────────────────────────────────── */
export const ComparisonStackVisual = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div className="space-y-4 opacity-60">
       <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 flex justify-between items-center grayscale">
          <span className="text-xs font-bold text-slate-600">Internet Connection</span>
          <span className="text-[10px] uppercase font-black">Provider A</span>
       </div>
       <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 flex justify-between items-center grayscale">
          <span className="text-xs font-bold text-slate-600">Phone System</span>
          <span className="text-[10px] uppercase font-black">Provider B</span>
       </div>
       <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 flex justify-between items-center grayscale">
          <span className="text-xs font-bold text-slate-600">IT Support</span>
          <span className="text-[10px] uppercase font-black">Provider C</span>
       </div>
       <p className="text-center text-[10px] font-black uppercase text-slate-400 tracking-widest pt-4">Fragmented / Disconnected</p>
    </div>

    <div className="relative">
       <div className="absolute -inset-4 bg-[#5D00D6]/10 blur-xl rounded-[40px]" />
       <div className="relative bg-[#0c1024] rounded-3xl border border-[#5D00D6]/30 overflow-hidden shadow-2xl">
          <div className="p-4 bg-[#5D00D6] flex justify-between items-center">
             <span className="text-xs font-bold text-white">C9 Communications</span>
             <StatusChip text="Unified Stack" color="emerald" />
          </div>
          <div className="p-6 space-y-1">
             {[
               'Managed Business Internet',
               'Cloud Phone System',
               'Managed Networking',
               '24/7 Australian Support'
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                     <Check size={12} />
                  </div>
                  <span className="text-xs font-bold text-white/90">{item}</span>
               </div>
             ))}
          </div>
       </div>
       <p className="text-center text-[10px] font-black uppercase text-[#a56eff] tracking-widest pt-6">Managed / Integrated</p>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   PROCESS VISUAL (Timeline)
   ───────────────────────────────────────────────────────── */
export const ProcessTimeline = () => (
  <div className="relative pt-12 pb-8">
     <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2" />
     <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-8">
        {[
          { label: 'Review', icon: <Search size={20} />, sub: 'Audit & Checklist' },
          { label: 'Recommend', icon: <Layers size={20} />, sub: 'Product Plan' },
          { label: 'Set Up', icon: <Cpu size={20} />, sub: 'Migration/Setup' },
          { label: 'Support', icon: <Users size={20} />, sub: '24/7 Desk' }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center lg:w-1/4">
             <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-[#5D00D6] shadow-xl mb-4 relative z-20 group-hover:border-[#5D00D6] transition-all">
                {step.icon}
             </div>
             <h4 className="text-sm font-black uppercase tracking-widest mb-1">{step.label}</h4>
             <p className="text-[11px] font-bold text-slate-500">{step.sub}</p>
          </div>
        ))}
     </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   FINAL CTA VISUAL
   ───────────────────────────────────────────────────────── */
export const FinalCtaVisual = () => (
  <div className="bg-white/90 backdrop-blur-sm rounded-[32px] p-6 shadow-2xl border border-slate-100 w-full max-w-[320px] mx-auto">
     <div className="flex items-center justify-between mb-6">
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Quote Request</h4>
        <StatusChip text="Ready" color="blue" />
     </div>
     
     <div className="space-y-3 mb-6">
        {[
          { label: 'Phone System', active: true },
          { label: 'Business nbn', active: true },
          { label: 'Fast Fibre', active: false },
          { label: 'AI Voice', active: true },
        ].map((opt, i) => (
          <div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${opt.active ? 'bg-[#5D00D6]/5 border-[#5D00D6]/10' : 'bg-slate-50 border-slate-100 opacity-40'}`}>
             <span className={`text-[11px] font-bold ${opt.active ? 'text-[#5D00D6]' : 'text-slate-400'}`}>{opt.label}</span>
             {opt.active && <Check size={12} className="text-[#5D00D6]" />}
          </div>
        ))}
     </div>

     <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
           <Activity size={16} />
        </div>
        <div>
           <p className="text-[10px] font-bold text-slate-800 leading-tight">Specialist Review</p>
           <p className="text-[9px] text-slate-500 font-medium">Estimated response: 2h</p>
        </div>
     </div>
  </div>
);
