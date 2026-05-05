'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Background Component ---
const LinesBackground = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.3]" style={{ 
    backgroundImage: `radial-gradient(#E2E8F0 0.8px, transparent 0.8px)`,
    backgroundSize: '20px 20px',
  }} />
);

// --- Visual Components ---

const SDWANVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
    <LinesBackground />
    
    <div className="relative w-full h-full max-w-[440px] max-h-[220px] flex items-center justify-center scale-90 lg:scale-100">
      {/* Connection Paths (SVG) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 440 220" fill="none">
        {/* Animated Curved Paths */}
        {[
          { d: "M85 60 C 140 60, 160 110, 195 110", c: "#4F95FF", dur: 3 },
          { d: "M85 160 C 140 160, 160 110, 195 110", c: "#F97316", dur: 3.5 },
          { d: "M355 60 C 300 60, 280 110, 245 110", c: "#8B5CF6", dur: 4 },
          { d: "M355 160 C 300 160, 280 110, 245 110", c: "#10B981", dur: 2.5 }
        ].map((p, i) => (
          <React.Fragment key={i}>
            <motion.path 
              d={p.d} 
              stroke={p.c} strokeWidth="1.5" strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
            />
            <motion.circle r="3.5" fill={p.c} className="blur-[1px]">
              <animateMotion dur={`${p.dur}s`} repeatCount="indefinite" path={p.d} />
            </motion.circle>
            <motion.circle r="2" fill="white">
              <animateMotion dur={`${p.dur}s`} repeatCount="indefinite" path={p.d} />
            </motion.circle>
          </React.Fragment>
        ))}
      </svg>

      {/* Controller (Center) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-white border-2 border-[#5D00D6]/30 rounded-2xl flex flex-col items-center justify-center shadow-lg z-10">
        <span className="font-['Proxima_Nova'] text-[12px] font-bold text-[#5D00D6] tracking-tight">SD-WAN</span>
        <span className="font-['Proxima_Nova'] text-[10px] font-medium text-slate-400">Controller</span>
      </div>

      {/* Branch Nodes */}
      {[
        { t: 'Branch A', s: 'Melbourne', p: 'left-0 top-6' },
        { t: 'Branch B', s: 'Sydney', p: 'left-0 bottom-6' },
        { t: 'Branch C', s: 'Brisbane', p: 'right-0 top-6' },
        { t: 'HQ', s: 'Perth', p: 'right-0 bottom-6', highlight: true }
      ].map((n, i) => (
        <div key={i} className={`absolute ${n.p} w-24 h-14 bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center shadow-sm`}>
          <span className={`font-['Proxima_Nova'] text-[10px] font-bold ${n.highlight ? 'text-[#5D00D6]' : 'text-slate-500'}`}>{n.t}</span>
          <span className="font-['Proxima_Nova'] text-[9px] font-medium text-slate-400">{n.s}</span>
        </div>
      ))}
    </div>

    {/* Transport Badges */}
    <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
      {['Broadband', 'LTE', 'MPLS', 'Fibre'].map((t) => (
        <span key={t} className="px-2 py-0.5 rounded-full text-[8.5px] font-bold uppercase tracking-wider bg-slate-50 border border-slate-100 text-slate-400">
          {t}
        </span>
      ))}
      <span className="text-[9.5px] font-bold text-[#5D00D6] ml-2 tracking-tight flex items-center gap-1 opacity-80">
        <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" /> Centralised policy
      </span>
    </div>
  </div>
);

const IPTransitVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
    <LinesBackground />
    
    <div className="relative w-full h-full max-w-[440px] max-h-[200px] flex items-center justify-center scale-90 lg:scale-100">
      {/* Orbital Backgrounds */}
      <div className="absolute inset-x-8 inset-y-4 border border-slate-200 rounded-[100%] opacity-40 shadow-sm" />
      <div className="absolute inset-x-12 inset-y-8 border border-slate-100 rounded-[100%] opacity-20" />

      {/* Connection Paths */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 440 200" fill="none">
        {/* Your Network to BGP Router */}
        <motion.path 
          d="M75 100 L 195 100" 
          stroke="#8B5CF6" strokeWidth="2" strokeDasharray="6 4"
          initial={{ pathLength: 0, opacity: 0 }} 
          animate={{ pathLength: 1, opacity: 1 }}
        />
        <motion.circle r="3.5" fill="#8B5CF6" className="blur-[1px]">
          <animateMotion dur="2s" repeatCount="indefinite" path="M75 100 L 195 100" />
        </motion.circle>
        <motion.circle r="2" fill="white">
          <animateMotion dur="2s" repeatCount="indefinite" path="M75 100 L 195 100" />
        </motion.circle>

        {/* BGP Router to ISP Tier 1s */}
        {[
          "M245 100 L 355 60",
          "M245 100 L 355 100",
          "M245 100 L 355 140"
        ].map((path, i) => (
          <React.Fragment key={i}>
            <motion.path 
              d={path} 
              stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 0.8 }}
            />
            <motion.circle r="3" fill="#60A5FA" opacity="0.6">
               <animateMotion dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" path={path} />
            </motion.circle>
          </React.Fragment>
        ))}
      </svg>

      {/* Your Network Node */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center shadow-sm z-10">
        <span className="font-['Proxima_Nova'] text-[10px] font-bold text-slate-500 uppercase tracking-tight">Your</span>
        <span className="font-['Proxima_Nova'] text-[9px] font-medium text-slate-400 uppercase">Network</span>
      </div>

      {/* BGP AS PATH Badge */}
      <div className="absolute left-[85px] top-1/2 -translate-y-1/2 bg-[#F5F3FF] border border-[#DDD6FE] px-2 py-0.5 rounded-sm z-20">
        <span className="text-[7.5px] font-bold text-[#8B5CF6] uppercase whitespace-nowrap tracking-wide">BGP AS PATH</span>
      </div>

      {/* C9 BGP Router (Center) */}
      <motion.div 
        animate={{ boxShadow: ["0 4px 6px -1px rgb(0 0 0 / 0.1)", "0 10px 15px -3px rgb(93 0 214 / 0.15)", "0 4px 6px -1px rgb(0 0 0 / 0.1)"] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-white border-2 border-[#5D00D6]/40 rounded-2xl flex flex-col items-center justify-center shadow-lg z-10"
      >
        <span className="font-['Proxima_Nova'] text-[14px] font-bold text-[#5D00D6]">C9 Core</span>
        <span className="font-['Proxima_Nova'] text-[10px] font-medium text-slate-500">BGP Router</span>
        <span className="font-['Proxima_Nova'] text-[8.5px] font-medium text-[#5D00D6]/60 mt-0.5 tracking-tight">Full Routing</span>
      </motion.div>

      {/* Upstream Nodes */}
      <div className="absolute flex flex-col gap-2 right-0 top-1/2 -translate-y-1/2">
        {['A', 'B', 'C'].map(node => (
          <div key={node} className="w-28 h-12 bg-white border border-slate-200 rounded-lg flex flex-col items-center justify-center shadow-sm">
            <span className="font-['Proxima_Nova'] text-[9.5px] font-bold text-slate-500 tracking-tight">ISP Tier 1</span>
            <span className="font-['Proxima_Nova'] text-[8.5px] font-medium text-slate-400">Upstream {node}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Footer Badges */}
    <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4">
      {[
        { t: 'Multi-homed', c: 'bg-purple-50 text-purple-600' },
        { t: 'Full BGP Table', c: 'bg-blue-50 text-blue-600' },
        { t: 'Low-latency', c: 'bg-emerald-50 text-emerald-600' },
        { t: 'Traffic Control', c: 'bg-orange-50 text-orange-600' }
      ].map((badge, i) => (
        <span key={i} className={`px-2 py-0.5 rounded-full text-[8.5px] font-bold uppercase tracking-tight ${badge.c}`}>
          {badge.t}
        </span>
      ))}
    </div>
  </div>
);

const MPLSVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
    <LinesBackground />
    
    <div className="relative w-full h-full max-w-[440px] max-h-[220px] flex items-center justify-center scale-90 lg:scale-100">
      {/* Background Orbitals */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[240px] h-[160px] border border-slate-200 rounded-[100%] opacity-40" 
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[190px] border border-slate-200 opacity-20" 
      />

      {/* SVG Path Connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 440 220" fill="none">
        {/* Connection Lines with High Visibility */}
        {[
          { x1: 60, y1: 60, x2: 105, y2: 100 },
          { x1: 60, y1: 160, x2: 105, y2: 100 },
          { x1: 380, y1: 60, x2: 335, y2: 100 },
          { x1: 380, y1: 160, x2: 335, y2: 100 }
        ].map((line, i) => (
          <React.Fragment key={i}>
            <motion.line 
              x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} 
              stroke="#D1D5DB" strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* Network flow data dot */}
            <motion.circle r="2.5" fill="#5D00D6">
               <animateMotion 
                  dur="1.2s" 
                  repeatCount="indefinite" 
                  path={`M${line.x1} ${line.y1} L${line.x2} ${line.y2}`} 
                />
            </motion.circle>
          </React.Fragment>
        ))}

        {/* Ring Connections (PE to P) */}
        {[
          "M135 110 L 195 50", "M135 110 L 195 170",
          "M305 110 L 245 50", "M305 110 L 245 170",
          "M220 75 L 220 145"
        ].map((path, i) => (
          <React.Fragment key={i}>
            <motion.path 
              d={path} 
              stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 4" 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 0.6 }}
            />
            <motion.circle r="3" fill="#8B5CF6">
               <animateMotion dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" path={path} />
            </motion.circle>
          </React.Fragment>
        ))}
      </svg>

      {/* PE Routers (Edge) */}
      <motion.div 
        animate={{ y: [-1, 1, -1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[85px] top-1/2 -translate-y-1/2 w-24 h-14 bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center shadow-sm z-10"
      >
        <span className="font-['Proxima_Nova'] text-[10px] font-bold text-[#5D00D6]/70 uppercase tracking-tight">Edge</span>
        <span className="font-['Proxima_Nova'] text-[8.5px] font-medium text-slate-400">Router</span>
      </motion.div>
      <motion.div 
        animate={{ y: [1, -1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[85px] top-1/2 -translate-y-1/2 w-24 h-14 bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center shadow-sm z-10"
      >
        <span className="font-['Proxima_Nova'] text-[10px] font-bold text-[#5D00D6]/70 uppercase tracking-tight">Edge</span>
        <span className="font-['Proxima_Nova'] text-[8.5px] font-medium text-slate-400">Router</span>
      </motion.div>

      {/* P Routers (Core) */}
      <motion.div 
        animate={{ boxShadow: ["0 4px 6px -1px rgb(0 0 0 / 0.1)", "0 8px 12px -3px rgb(93 0 214 / 0.1)", "0 4px 6px -1px rgb(0 0 0 / 0.1)"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-4 -translate-x-1/2 w-24 h-14 bg-white border border-[#5D00D6]/20 rounded-xl flex flex-col items-center justify-center shadow-md z-10"
      >
        <span className="font-['Proxima_Nova'] text-[10px] font-bold text-[#5D00D6]">Core Hub</span>
        <span className="font-['Proxima_Nova'] text-[8.5px] font-medium text-slate-400">Router</span>
      </motion.div>
      <motion.div 
        animate={{ boxShadow: ["0 4px 6px -1px rgb(0 0 0 / 0.1)", "0 8px 12px -3px rgb(93 0 214 / 0.1)", "0 4px 6px -1px rgb(0 0 0 / 0.1)"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute left-1/2 bottom-4 -translate-x-1/2 w-24 h-14 bg-white border border-[#5D00D6]/20 rounded-xl flex flex-col items-center justify-center shadow-md z-10"
      >
        <span className="font-['Proxima_Nova'] text-[10px] font-bold text-[#5D00D6]">Core Hub</span>
        <span className="font-['Proxima_Nova'] text-[8.5px] font-medium text-slate-400">Router</span>
      </motion.div>

      {/* Labels In Between */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 z-20">
        <motion.div 
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="px-2 py-0.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded text-[#8B5CF6] text-[7.5px] font-bold tracking-widest text-center"
        >
          LABEL 42
        </motion.div>
        <motion.div 
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          className="px-2 py-0.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded text-[#8B5CF6] text-[7.5px] font-bold tracking-widest text-center"
        >
          LABEL 18
        </motion.div>
      </div>

      {/* Sites */}
      {[
        { t: 'Site A', p: 'left-0 top-6', d: 0 },
        { t: 'Site B', p: 'left-0 bottom-6', d: 0.5 },
        { t: 'Site C', p: 'right-0 top-6', d: 1 },
        { t: 'Site D', p: 'right-0 bottom-6', d: 1.5 }
      ].map((s, i) => (
        <motion.div 
          key={i}
          animate={{ boxShadow: ["0px 0px 0px rgba(93,0,214,0)", "0px 0px 15px rgba(93,0,214,0.4)", "0px 0px 0px rgba(93,0,214,0)"] }}
          transition={{ duration: 4, repeat: Infinity, delay: s.d }}
          className={`absolute ${s.p} w-20 h-12 bg-white border border-slate-200 rounded-lg flex flex-col items-center justify-center shadow-sm`}
        >
          <span className="font-['Proxima_Nova'] text-[9px] font-bold text-slate-500 uppercase tracking-tight">{s.t}</span>
        </motion.div>
      ))}
    </div>

    {/* Transport Badges */}
    <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
      {[
        { t: 'QoS Priority', c: 'bg-purple-50 text-purple-600' },
        { t: 'Dedicated Circuits', c: 'bg-blue-50 text-blue-600' },
        { t: 'Isolated', c: 'bg-emerald-50 text-emerald-600' },
        { t: 'SLA-backed', c: 'bg-orange-50 text-orange-600' }
      ].map((badge, i) => (
        <span key={i} className={`px-2 py-0.5 rounded-full text-[8.5px] font-bold uppercase tracking-tight ${badge.c}`}>
          {badge.t}
        </span>
      ))}
    </div>
  </div>
);

const ColoVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
    <LinesBackground />
    
    <div className="relative w-full h-full max-w-[440px] max-h-[220px] flex items-center justify-center scale-90 lg:scale-100">
      {/* SVG Path Connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 440 220" fill="none">
        {/* Flow Lines with enhanced visibility */}
        <motion.path 
          d="M275 80 C 310 80, 320 100, 345 100" 
          stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }} 
          animate={{ pathLength: 1, opacity: 0.8 }}
        />
        <motion.path 
          d="M275 85 C 310 85, 320 150, 345 150" 
          stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }} 
          animate={{ pathLength: 1, opacity: 0.8 }}
        />
        <motion.circle r="3" fill="#8B5CF6">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M275 80 C 310 80, 320 100, 345 100" />
        </motion.circle>
        <motion.circle r="3" fill="#93C5FD">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M275 85 C 310 85, 320 150, 345 150" />
        </motion.circle>
      </svg>

      <div className="flex gap-4 items-end mb-4">
        {['Rack A', 'YOUR RACK', 'Rack C'].map((type, i) => {
          const isYour = type === 'YOUR RACK';
          return (
            <motion.div 
              key={i}
              className={`w-${isYour ? '22' : '18'} h-${isYour ? '48' : '44'} bg-white border ${isYour ? 'border-[#5D00D6]/40' : 'border-slate-200'} rounded-xl p-2 flex flex-col gap-1.5 relative shadow-sm`}
            >
              {isYour && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5D00D6] text-white text-[8px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap uppercase tracking-widest shadow-md">
                  MANAGED
                </div>
              )}
              {[...Array(8)].map((_, j) => (
                <div key={j} className="h-2 w-full bg-slate-50 rounded-sm flex items-center px-1 justify-end gap-1">
                  <div className={`h-0.5 flex-1 ${isYour ? 'bg-purple-100' : 'bg-slate-100'} rounded-full`} />
                  <motion.div 
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                    className={`w-1.5 h-1.5 rounded-full ${isYour ? 'bg-emerald-400' : 'bg-slate-300'}`} 
                  />
                </div>
              ))}
              <div className="mt-auto pt-2 text-center border-t border-slate-100 flex flex-col gap-0.5">
                <span className={`text-[8px] font-bold uppercase ${isYour ? 'text-[#5D00D6]' : 'text-slate-500'}`}>{type === 'YOUR RACK' ? 'C9 MANAGED' : type}</span>
                <div className="bg-slate-50 p-1 rounded text-[7px] font-bold text-slate-400">42U Rack</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Upstreams */}
      <div className="absolute flex flex-col gap-6 right-0 top-1/2 -translate-y-1/2">
        {['INTERNET', 'CROSS-CONNECT'].map(node => (
          <div key={node} className="w-24 h-14 bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center shadow-lg">
            <span className="font-['Proxima_Nova'] text-[10px] font-bold text-slate-500 uppercase tracking-tight">{node}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Footer Badges */}
    <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
      {[
        { t: 'Climate controlled', c: 'bg-emerald-50 text-emerald-600' },
        { t: '24/7 Monitoring', c: 'bg-purple-50 text-purple-600' },
        { t: 'Redundant power', c: 'bg-blue-50 text-blue-600' },
        { t: 'Tier 3 AU DC', c: 'bg-orange-50 text-orange-600' }
      ].map((badge, i) => (
        <span key={i} className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-tight ${badge.c}`}>
           {badge.t}
        </span>
      ))}
    </div>
  </div>
);

// --- Main Logic ---

const cards = [
  {
    title: "SD-WAN",
    body: "Agile, software-defined networking with integrated security for multi-site organisations.",
    link: "View SD-WAN",
    href: "/managed-it/network-solutions/sd-wan",
    visual: <SDWANVisual />
  },
  {
    title: "IP Transit",
    body: "High-bandwidth, redundant internet connectivity with full routing control for enterprise apps.",
    link: "View IP Transit",
    href: "/managed-it/network-solutions/ip-transit",
    visual: <IPTransitVisual />
  },
  {
    title: "MPLS",
    body: "Dedicated multi-site private networks ensuring guaranteed performance and absolute traffic isolation.",
    link: "View MPLS",
    href: "/managed-it/network-solutions/mpls",
    visual: <MPLSVisual />
  },
  {
    title: "Co-Location",
    body: "Secure, climate-controlled data centre housing for your critical business infrastructure.",
    link: "View Co-Location",
    href: "/managed-it/network-solutions/co-location",
    visual: <ColoVisual />
  }
];

export default function SubServices() {
  return (
    <section id="network-scope" className="bg-white py-12 px-6 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5D00D6] mb-4 block">
          Network Solutions
        </p>
        <h2 className="c9-section-heading mt-2" style={{fontFamily:"'Proxima Nova',sans-serif"}}>
          Network solutions for every business requirement.
        </h2>
        <p className="text-[17px] text-[#6B7280] mt-5 max-w-xl font-medium leading-[1.6]">
          C9 delivers a complete range of private network and connectivity solutions — from design through to management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mt-16 max-w-[1010px] mx-auto">
          {cards.map((card, i) => (
            <div key={i} className="bg-white border border-slate-200 hover:border-[#5D00D6]/30 transition-colors duration-500 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl">
              {/* Visual Container - Mid Size */}
              <div className="h-[250px] bg-[#FDFDFD] flex items-center justify-center relative border-b border-slate-200">
                {card.visual}
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <h3 className="font-['Proxima_Nova'] text-[24px] font-bold mb-3 tracking-tight text-[#1A1A2E]"
                  style={{fontFamily:"'Proxima Nova',sans-serif"}}>
                  {card.title}
                </h3>
                <p className="font-['Proxima_Nova'] text-[15.5px] text-[#6B7280] leading-[1.65] flex-1 mb-8 font-medium">
                  {card.body}
                </p>
                <a href={card.href}
                  className="flex items-center gap-2 text-[14px] font-bold text-[#5D00D6] pt-6 border-t border-slate-200 mt-auto group/link transition-colors">
                  {card.link}
                  <svg className="w-4 h-4 group-hover/link:translate-x-1"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
