'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Server, Cpu, HardDrive, Wifi, Shield, ShieldCheck, 
  Globe, Lock, Layers, Cloud, GitMerge, LayoutGrid,
  Users, Activity, Database, RefreshCw, BarChart2,
  CheckCircle2
} from 'lucide-react';

const FF = { fontFamily: "'Proxima Nova', sans-serif" };

/** 01: Servers & Storage -> Console */
const MockupServers = () => (
  <div className="bg-[#0F0F1A] rounded-2xl shadow-sm border border-[#5D00D6]/20 w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
      <Server size={14} className="text-[#5D00D6]" />
      <span className="text-[11px] font-bold text-white/80 uppercase tracking-widest">Compute & Storage</span>
    </div>
    <div className="p-5 space-y-4">
      <div className="bg-white/5 rounded-xl p-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-[10px] font-bold text-white/40 uppercase">Cluster ID</span>
          <span className="text-[10px] font-mono text-[#5D00D6]">C9-DC-ALPHA-01</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[10px] font-bold text-white/40 uppercase">Architecture</span>
          <span className="text-[10px] font-bold text-emerald-400">Hyperconverged</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[10px] font-bold text-white/40 uppercase">SAN Capacity</span>
          <span className="text-[10px] font-bold text-white/80">64 TB NVMe</span>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { node: "HOST-NODE-01", cpu: 34, mem: 62 },
          { node: "HOST-NODE-02", cpu: 41, mem: 55 },
          { node: "HOST-NODE-03", cpu: 28, mem: 48 },
        ].map((n, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-3">
            <div className="flex justify-between mb-2">
              <span className="text-[11px] font-semibold text-white/70">{n.node}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1" />
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <div className="text-[8px] text-white/30 mb-1">CPU {n.cpu}%</div>
                <div className="h-1 bg-white/10 rounded"><motion.div initial={{ width: 0 }} animate={{ width: `${n.cpu}%` }} transition={{ duration: 1, delay: i * 0.2 }} className="h-full bg-[#5D00D6] rounded" /></div>
              </div>
              <div className="flex-1">
                <div className="text-[8px] text-white/30 mb-1">RAM {n.mem}%</div>
                <div className="h-1 bg-white/10 rounded"><motion.div initial={{ width: 0 }} animate={{ width: `${n.mem}%` }} transition={{ duration: 1, delay: i * 0.2 + 0.1 }} className="h-full bg-[#5D00D6]/60 rounded" /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/** 02: Network -> Topology */
const MockupNetwork = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[rgba(123,47,190,0.12)] w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
       <Wifi size={14} className="text-[#5D00D6]" />
       <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Network Topology</span>
    </div>
    <div className="p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-[#5D00D6] flex items-center justify-center shadow-lg shadow-[#5D00D6]/30">
          <RefreshCw className="text-white" size={28} />
        </div>
        <p className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-widest">Core Switching</p>
        <div className="w-full grid grid-cols-3 gap-3 mt-2">
          {[
            { label: "HQ LAN", icon: Layers,    color: "bg-gray-100 text-gray-600" },
            { label: "SD-WAN", icon: Globe,     color: "bg-[#F4F0FA] text-[#5D00D6]" },
            { label: "Branch", icon: Wifi,      color: "bg-gray-100 text-gray-600" },
          ].map((node, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className={cn("flex flex-col items-center gap-2 p-3 rounded-xl", node.color)}
            >
              <node.icon size={20} />
              <span className="text-[9px] font-bold text-center">{node.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="w-full space-y-2 mt-2">
          {[
            { link: "Primary Fiber", latency: "2ms", status: "Active" },
            { link: "4G/5G Failover", latency: "Standby", status: "Ready" },
          ].map((conn, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
              <span className="text-[11px] text-text-secondary font-medium">{conn.link}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-text-primary">{conn.latency}</span>
                <span className={cn("w-1.5 h-1.5 rounded-full", conn.status === "Ready" ? "bg-amber-400" : "bg-emerald-500")} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/** 03: End-User -> Endpoint Manager */
const MockupFleet = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[rgba(123,47,190,0.12)] w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
      <LayoutGrid size={14} className="text-[#5D00D6]" />
      <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Device Fleet Management</span>
    </div>
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Active PCs", value: "342", trend: "100%" },
          { label: "Compliant", value: "340", trend: "+2" },
          { label: "Updates", value: "Pending", trend: "0%" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#F4F0FA] rounded-xl p-3 text-center">
            <p className="text-[18px] font-bold text-text-primary">{stat.value}</p>
            <p className="text-[9px] text-text-secondary font-medium">{stat.label}</p>
            <p className="text-[9px] text-[#5D00D6] font-bold">{stat.trend}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { user: "Finance-Laptop-04", dept: "Intune", status: "Compliant", app: "Win 11 Pro" },
          { user: "Sales-Tablet-12",  dept: "MDM",      status: "Compliant", app: "iOS 17" },
          { user: "HR-Desktop-02",  dept: "Intune",      status: "Updating", app: "Win 11 Pro" },
        ].map((u, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg"
          >
            <div className="w-7 h-7 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[10px] font-bold text-[#5D00D6]">
              {u.user.split("-")[0][0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-text-primary">{u.user}</p>
              <p className="text-[10px] text-text-secondary truncate">{u.dept} · {u.app}</p>
            </div>
            <span className={cn("text-[9px] font-bold px-1.5 py-0.5 rounded", u.status === "Compliant" ? "text-emerald-600 bg-emerald-50" : "text-amber-600 bg-amber-50")}>{u.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

/** 04: Cloud -> Azure */
const MockupCloud = () => (
  <div className="bg-[#0F0F1A] rounded-2xl shadow-sm border border-[#5D00D6]/20 w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
      <Cloud size={14} className="text-[#5D00D6]" />
      <span className="text-[11px] font-bold text-white/80 uppercase tracking-widest">Azure Portal — C9 Tenant</span>
    </div>
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "vCPU Cores", value: "64", icon: Cpu },
          { label: "RAM (GB)",   value: "256", icon: Activity },
          { label: "Storage",    value: "8TB", icon: HardDrive },
          { label: "VMs Active", value: "12",  icon: Server },
        ].map((m, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-3 flex items-center gap-3">
            <m.icon size={16} className="text-[#5D00D6] shrink-0" />
            <div>
              <p className="text-[16px] font-bold text-white">{m.value}</p>
              <p className="text-[9px] text-white/40 font-medium">{m.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-4">
        <p className="text-[10px] font-bold text-[#5D00D6] mb-3 uppercase tracking-widest">CPU Utilisation — 7d</p>
        <div className="flex items-end gap-1 h-12">
          {[40, 55, 60, 45, 75, 65, 72].map((h, i) => (
            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex-1 bg-[#5D00D6]/60 rounded-t"
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {['M','T','W','T','F','S','S'].map((d, i) => (
            <span key={i} className="text-[8px] text-white/30 flex-1 text-center">{d}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/** 05: Security -> FWaaS */
const MockupSecurity = () => (
  <div className="bg-[#0F0F1A] rounded-2xl shadow-sm border border-[#5D00D6]/20 w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Shield size={14} className="text-[#5D00D6]" />
        <span className="text-[11px] font-bold text-white/80 uppercase tracking-widest">FWaaS Monitor</span>
      </div>
      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />ACTIVE</span>
    </div>
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Blocked Today", value: "2,841", color: "text-red-400" },
          { label: "Allowed",       value: "98.2K", color: "text-emerald-400" },
          { label: "Alerts",        value: "3",     color: "text-amber-400" },
        ].map((s, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-3 text-center">
            <p className={cn("text-[18px] font-bold", s.color)}>{s.value}</p>
            <p className="text-[8px] text-white/40 font-medium mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Recent Events</p>
        {[
          { time: "09:42", event: "Port scan blocked — 203.0.113.5",    severity: "high"   },
          { time: "09:38", event: "Brute force attempt — SSH port 22",  severity: "high"   },
          { time: "09:21", event: "Geo-blocked: CN → AU endpoint",      severity: "medium" },
        ].map((ev, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-start gap-3 p-2.5 bg-white/5 rounded-lg"
          >
            <span className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", ev.severity === "high" ? "bg-red-400" : "bg-amber-400")} />
            <span className="text-[10px] text-white/40 shrink-0 w-8">{ev.time}</span>
            <span className="text-[11px] text-white/70 font-medium leading-tight">{ev.event}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

/** 06: Backup -> BaaS Dashboard */
const MockupBackup = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[rgba(123,47,190,0.12)] w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Database size={14} className="text-[#5D00D6]" />
        <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Backup Status</span>
      </div>
      <span className="text-[10px] font-semibold text-emerald-600">All Systems OK</span>
    </div>
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#F4F0FA] rounded-xl p-3">
          <p className="text-[24px] font-bold text-[#5D00D6]">14.2TB</p>
          <p className="text-[10px] text-text-secondary font-medium">Total Protected</p>
        </div>
        <div className="bg-emerald-50 rounded-xl p-3">
          <p className="text-[24px] font-bold text-emerald-600">100%</p>
          <p className="text-[10px] text-text-secondary font-medium">Jobs Successful</p>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { name: "SQL Prod DB",       size: "4.1 GB", time: "02:00 AEST", status: "ok" },
          { name: "File Server",       size: "8.7 GB", time: "03:00 AEST", status: "ok" },
          { name: "Exchange Online",   size: "1.4 GB", time: "04:00 AEST", status: "ok" },
        ].map((job, i) => (
          <div key={i} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
            <div>
              <p className="text-[12px] font-semibold text-text-primary">{job.name}</p>
              <p className="text-[10px] text-text-secondary">{job.size} · {job.time}</p>
            </div>
            <CheckCircle2 size={16} className="text-emerald-500" />
          </div>
        ))}
      </div>
      <p className="text-[10px] text-text-secondary font-medium border-t border-gray-100 pt-3">
        📍 Data stored in Australian data centres only
      </p>
    </div>
  </div>
);

const STAGES = [
  { num: "01", title: "Core Infrastructure", desc: "Foundational infrastructure built for performance." },
  { num: "02", title: "Cloud & Security Infrastructure", desc: "Integrated cloud and perimeter defense." },
];

const ALL_ITEMS = [
  { id: 0, stageNum: "01", stageTitle: "Core Infrastructure", title: "Servers & Storage",
    body: "Physical and virtual server design, deployment, and ongoing management. Storage architecture built to your performance and capacity requirements.",
    mockup: <MockupServers /> },
  { id: 1, stageNum: "01", stageTitle: "Core Infrastructure", title: "Network Infrastructure",
    body: "LAN, WAN, and wireless infrastructure designed and managed by C9. Routing, switching, firewall, and connectivity continuously monitored.",
    mockup: <MockupNetwork /> },
  { id: 2, stageNum: "01", stageTitle: "Core Infrastructure", title: "End-User Computing",
    body: "Workstations, laptops, and device fleet management — procured, deployed, and maintained on a lifecycle plan with patch management included.",
    mockup: <MockupFleet /> },
  { id: 3, stageNum: "02", stageTitle: "Cloud & Security Infrastructure", title: "Cloud Infrastructure",
    body: "Cloud-first and hybrid infrastructure on Azure and AWS — designed, migrated, and managed by C9 with ongoing cost optimisation.",
    mockup: <MockupCloud /> },
  { id: 4, stageNum: "02", stageTitle: "Cloud & Security Infrastructure", title: "Security Infrastructure",
    body: "Firewall, endpoint protection, and network security — built into the infrastructure design from the start, not bolted on after.",
    mockup: <MockupSecurity /> },
  { id: 5, stageNum: "02", stageTitle: "Cloud & Security Infrastructure", title: "Storage & Backup",
    body: "Dedicated, robust backup systems. Offsite replication, ransomware-resistant storage, and scheduled recovery testing — managed by C9.",
    mockup: <MockupBackup /> },
];

const TIMER_MS = 6000;

export default function InfraScope() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % ALL_ITEMS.length);
      setTimerKey(prev => prev + 1);
    }, TIMER_MS);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (idx: number) => {
    setActiveIdx(idx);
    setTimerKey(prev => prev + 1);
  };

  const active = ALL_ITEMS[activeIdx];

  return (
    <section id="infra-scope" className="bg-white py-24" style={FF}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] w-full">

        {/* Section header */}
        <div className="mb-10 text-center lg:text-left">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#5D00D6] block mb-4">
            SCOPE OF SERVICE
          </span>
          <h2 className="c9-section-heading max-w-[640px]">
            Everything C9 designs, deploys, and manages.
          </h2>
          <p className="text-[18px] text-[#6B7280] mt-4 max-w-[600px] leading-[1.7] mx-auto lg:mx-0">
            A full-stack infrastructure engagement — from the physical layer through to cloud and security. All under one managed services agreement.
          </p>
        </div>

        {/* STAGE PILLS — top navigation */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center lg:justify-start">
          {STAGES.map((stage) => {
            const isActive = active.stageNum === stage.num;
            return (
              <button
                key={stage.num}
                onClick={() => {
                  const idx = ALL_ITEMS.findIndex(i => i.stageNum === stage.num);
                  handleClick(idx);
                }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 border",
                  isActive
                    ? "bg-[#5D00D6] text-white border-[#5D00D6] shadow-sm shadow-[#5D00D6]/20"
                    : "bg-white text-[#6B7280] border-gray-200 hover:border-[#5D00D6] hover:text-[#5D00D6]"
                )}
              >
                {stage.title}
              </button>
            );
          })}
        </div>

        {/* 2-COLUMN LAYOUT: Visual + List */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-14 items-start">

          {/* LEFT: STICKY VISUAL */}
          <div
            className="hidden lg:flex items-center justify-center sticky top-24 w-full h-[500px] rounded-2xl overflow-hidden border border-gray-200 relative"
            style={{ background: '#F8FAFC', backgroundImage: 'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          >
            <div className="relative z-10 w-full flex items-center justify-center p-6">
              <AnimatePresence mode="wait">
                <motion.div key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                >
                  {active.mockup}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: AUTO-CYCLING ITEM LIST */}
          <div className="flex flex-col divide-y divide-gray-100">
            {ALL_ITEMS.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button key={item.id} onClick={() => handleClick(idx)}
                  className={cn("relative text-left py-5 transition-all duration-500 flex flex-col items-start", isActive ? "opacity-100" : "opacity-20 hover:opacity-50")}
                >
                  {isActive && (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F4F0FA]" />
                      <motion.div className="absolute top-0 left-0 h-[2px] bg-[#5D00D6]"
                        initial={{ width: "0%" }} animate={{ width: "100%" }}
                        transition={{ duration: TIMER_MS / 1000, ease: "linear" }}
                        key={`progress-${idx}-${timerKey}`}
                      />
                    </>
                  )}
                  <h3 className="text-[16px] font-bold text-[#1A1A2E] tracking-tight mb-2">{item.title}</h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                        className="text-[16px] text-[#6B7280] leading-[1.6] font-normal overflow-hidden"
                      >
                         {item.body}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
