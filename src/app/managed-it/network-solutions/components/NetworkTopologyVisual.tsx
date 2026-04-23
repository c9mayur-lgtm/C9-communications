'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Globe, Server, Activity, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const P = '#5D00D6';
const ease = [0.22, 1, 0.36, 1];

interface Node {
  id: number;
  x: number;
  y: number;
  label: string;
  type: 'hq' | 'branch' | 'cloud';
}

const NODES: Node[] = [
  { id: 1, x: 50, y: 50, label: 'Headquarters', type: 'hq' },
  { id: 2, x: 80, y: 30, label: 'Cloud Gateway', type: 'cloud' },
  { id: 3, x: 20, y: 70, label: 'Regional Site A', type: 'branch' },
  { id: 4, x: 85, y: 75, label: 'Regional Site B', type: 'branch' },
  { id: 5, x: 15, y: 25, label: 'Remote Office', type: 'branch' },
];

const CONNECTIONS = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 1, to: 5 },
  { from: 3, to: 5 },
  { from: 2, to: 4 },
];

export const NetworkTopologyVisual = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseKey(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[540px] bg-[#0c1024] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} 
      />

      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={P} stopOpacity="0" />
            <stop offset="50%" stopColor={P} stopOpacity="0.8" />
            <stop offset="100%" stopColor={P} stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {CONNECTIONS.map((conn, i) => {
          const from = NODES.find(n => n.id === conn.from)!;
          const to = NODES.find(n => n.id === conn.to)!;
          const isActive = activeNode === from.id || activeNode === to.id;
          
          return (
            <React.Fragment key={i}>
              {/* Static Line */}
              <line 
                x1={`${from.x}%`} y1={`${from.y}%`} 
                x2={`${to.x}%`} y2={`${to.y}%`} 
                stroke="white" 
                strokeOpacity={isActive ? 0.3 : 0.08} 
                strokeWidth={isActive ? 2 : 1}
                className="transition-all duration-500"
              />
              
              {/* Pulsing Data Packet */}
              <motion.circle
                r="3"
                fill={P}
                initial={{ opacity: 0 }}
                animate={{ 
                  cx: [`${from.x}%`, `${to.x}%`],
                  cy: [`${from.y}%`, `${to.y}%`],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2, 
                  repeat: Infinity, 
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            </React.Fragment>
          );
        })}
      </svg>

      {/* Nodes */}
      {NODES.map((node) => (
        <motion.div
          key={node.id}
          className="absolute cursor-pointer z-20"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          onMouseEnter={() => setActiveNode(node.id)}
          onMouseLeave={() => setActiveNode(null)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: node.id * 0.1, duration: 0.6, ease }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2 group/node">
            {/* Outer Glow */}
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-white/20 blur-md"
            />
            
            {/* Core Node */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${activeNode === node.id ? 'bg-[#5D00D6] border-white scale-110 shadow-[0_0_20px_rgba(93,0,214,0.6)]' : 'bg-[#0c1024] border-white/30'}`}>
              {node.type === 'hq' && <Server size={16} className="text-white" />}
              {node.type === 'cloud' && <Globe size={16} className="text-white" />}
              {node.type === 'branch' && <Activity size={16} className="text-white" />}
            </div>

            {/* Label */}
            <div className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${activeNode === node.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
               <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl border border-white/20">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#0c1024]">{node.label}</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[9px] font-bold text-slate-500 uppercase">Latency: 12ms</span>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Hero Stats Overlay */}
      <div className="absolute top-8 left-8 z-30">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#5D00D6] flex items-center justify-center shadow-lg shadow-[#5D00D6]/20">
                 <Shield size={20} className="text-white" />
              </div>
              <div>
                 <span className="block text-[10px] font-black text-white/40 uppercase tracking-widest">Network Health</span>
                 <span className="block text-[14px] font-black text-white">OPTIMIZED</span>
              </div>
           </div>
           <div className="space-y-3">
              {[
                { label: 'Uptime', val: '99.999%', color: 'text-emerald-400' },
                { label: 'Active Sites', val: '12', color: 'text-white' },
                { label: 'Security', val: 'Active', color: 'text-emerald-400' }
              ].map(s => (
                <div key={s.label} className="flex items-center justify-between gap-8 border-t border-white/5 pt-2">
                   <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{s.label}</span>
                   <span className={`text-[12px] font-black uppercase ${s.color}`}>{s.val}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Live Feed Simulator */}
      <div className="absolute bottom-8 right-8 z-30 max-w-[240px]">
        <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-4">
           <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.2em]">Live Traffic Feed</span>
           </div>
           <div className="space-y-2">
              <div className="text-[10px] font-mono text-emerald-400/80">&gt; Packet routing optimized [HQ-SYD]</div>
              <div className="text-[10px] font-mono text-purple-400/80">&gt; Failover link verified [Node-04]</div>
              <div className="text-[10px] font-mono text-blue-400/80">&gt; Encryption handshake [Site-A]</div>
           </div>
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="absolute bottom-8 left-8 opacity-40 group-hover:opacity-100 transition-opacity">
         <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white">
               <ArrowUpRight size={14} />
            </div>
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Hover Nodes for Site Intel</span>
         </div>
      </div>
    </div>
  );
};
