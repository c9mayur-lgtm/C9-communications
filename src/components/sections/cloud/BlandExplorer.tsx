'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, CheckCircle2, AlertCircle, Server, Cpu, HardDrive, Wifi, Shield, ShieldCheck, Globe, Lock, Layers, Cloud, GitMerge, LayoutGrid, Users, Activity, Database, RefreshCw, Monitor, Zap, BarChart2 } from 'lucide-react';

const FF = { fontFamily: "'Proxima Nova', sans-serif" };
// Official C9 Communications purple
const P = '#5D00D6';
const PL = '#F4F0FA'; // light tint

/* ─────────────────────────────── MOCKUPS ─────────────────────────────── */

/** 01-A  Scale Without Headache — Auto-scaling dashboard */
const MockupScale = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[rgba(123,47,190,0.12)] w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
      <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Infrastructure Overview</span>
      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />LIVE</span>
    </div>
    <div className="p-5 space-y-4">
      {[
        { label: "Web Servers", used: 8, total: 8, status: "scaling", pct: 100 },
        { label: "DB Cluster",  used: 3, total: 6, status: "healthy",  pct: 50  },
        { label: "CDN Nodes",   used: 12, total: 16, status: "healthy", pct: 75 },
      ].map((row, i) => (
        <div key={i}>
          <div className="flex justify-between items-center mb-1.5">
            <div className="flex items-center gap-2">
              <Server size={12} className="text-text-secondary" />
              <span className="text-[12px] font-semibold text-text-primary">{row.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-text-secondary font-medium">{row.used}/{row.total} nodes</span>
              {row.status === "scaling" ? (
                <span className="text-[9px] font-bold text-[#5D00D6] bg-[#F4F0FA] px-1.5 py-0.5 rounded uppercase">Scaling ↑</span>
              ) : (
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded uppercase">Healthy</span>
              )}
            </div>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${row.pct}%` }}
              transition={{ duration: 1.2, delay: i * 0.2 }}
              className={cn("h-full rounded-full", row.status === "scaling" ? "bg-[#5D00D6]" : "bg-emerald-500")}
            />
          </div>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="text-left">
          <p className="text-[10px] text-text-secondary font-medium">Auto-scaled today</p>
          <p className="text-[18px] font-bold text-[#5D00D6]">+4 nodes</p>
        </div>
        <div className="text-left">
          <p className="text-[10px] text-text-secondary font-medium">Uptime SLA</p>
          <p className="text-[18px] font-bold text-emerald-600">99.99%</p>
        </div>
        <div className="text-left">
          <p className="text-[10px] text-text-secondary font-medium">Incidents</p>
          <p className="text-[18px] font-bold text-text-primary">0</p>
        </div>
      </div>
    </div>
  </div>
);

/** 01-B  Predictable Costs — Billing & cost breakdown */
const MockupCost = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[rgba(123,47,190,0.12)] w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
      <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Monthly Billing</span>
      <span className="text-[10px] font-semibold text-text-secondary">March 2025</span>
    </div>
    <div className="p-5">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="text-[10px] text-text-secondary font-medium mb-1">Total this month</p>
          <p className="text-[32px] font-bold text-text-primary leading-none">$2,340</p>
          <div className="flex items-center gap-1 mt-2">
            <TrendingDown size={12} className="text-emerald-600" />
            <span className="text-[11px] font-semibold text-emerald-600">12% vs last month</span>
          </div>
        </div>
        <div className="flex items-end gap-1 h-16">
          {[60, 75, 55, 80, 65, 48].map((h, i) => (
            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={cn("w-5 rounded-t", i === 5 ? "bg-[#5D00D6]" : "bg-[#F4F0FA]")}
            />
          ))}
        </div>
      </div>
      <div className="space-y-3">
        {[
          { name: "Compute",   amount: "$980",  pct: 42 },
          { name: "Storage",   amount: "$520",  pct: 22 },
          { name: "Licensing", amount: "$840",  pct: 36 },
        ].map((line, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[12px] text-text-secondary font-medium w-20">{line.name}</span>
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${line.pct}%` }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="h-full bg-[#5D00D6]/60 rounded-full"
              />
            </div>
            <span className="text-[12px] font-bold text-text-primary w-12 text-right">{line.amount}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 p-3 bg-[#F4F0FA] rounded-xl">
        <p className="text-[11px] font-semibold text-[#5D00D6]">Fixed monthly managed service — no surprise invoices.</p>
      </div>
    </div>
  </div>
);

/** 01-C  On-Demand Flexibility — Environment control panel */
const MockupFlex = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[rgba(123,47,190,0.12)] w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-gray-100">
      <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Environment Control</span>
    </div>
    <div className="p-5 space-y-4">
      {[
        { env: "Production AU-EAST", status: "Running", nodes: 8, color: "emerald" },
        { env: "Staging",            status: "Paused",  nodes: 2, color: "amber"   },
        { env: "Dev / Testing",      status: "Running", nodes: 3, color: "emerald" },
      ].map((row, i) => (
        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
          <div>
            <p className="text-[14px] font-semibold text-text-primary">{row.env}</p>
            <p className="text-[11px] text-text-secondary font-medium">{row.nodes} nodes active</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded uppercase",
              row.color === "emerald" ? "text-emerald-600 bg-emerald-50" : "text-amber-600 bg-amber-50"
            )}>{row.status}</span>
            <RefreshCw size={12} className="text-text-secondary" />
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <span className="text-[11px] text-text-secondary">Scale on demand</span>
        <button className="text-[11px] font-bold text-[#5D00D6] bg-[#F4F0FA] px-3 py-1.5 rounded-lg">+ Add Environment</button>
      </div>
    </div>
  </div>
);

/** 02-A  Microsoft 365 Admin Dashboard */
const MockupM365 = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[rgba(123,47,190,0.12)] w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
      <LayoutGrid size={14} className="text-[#5D00D6]" />
      <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest">M365 Admin Centre</span>
    </div>
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Users", value: "142", trend: "+3" },
          { label: "Licenses", value: "150", trend: "100%" },
          { label: "Storage", value: "2.4TB", trend: "54%" },
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
          { user: "Sarah M.", dept: "Finance", status: "Active", app: "Teams, Excel" },
          { user: "Jake R.",  dept: "IT",      status: "Active", app: "Azure Portal" },
          { user: "Anna K.",  dept: "HR",      status: "Active", app: "SharePoint" },
        ].map((u, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg"
          >
            <div className="w-7 h-7 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[10px] font-bold text-[#5D00D6]">
              {u.user.split(" ")[0][0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-text-primary">{u.user}</p>
              <p className="text-[10px] text-text-secondary truncate">{u.app}</p>
            </div>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">{u.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

/** 02-B  Azure Infrastructure Portal */
const MockupAzure = () => (
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

/** 02-C  Hybrid Integration — Network topology */
const MockupHybrid = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[rgba(123,47,190,0.12)] w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-gray-100">
      <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Hybrid Network Topology</span>
    </div>
    <div className="p-6">
      {/* Centre hub */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-[#5D00D6] flex items-center justify-center shadow-lg shadow-[#5D00D6]/30">
          <GitMerge className="text-white" size={28} />
        </div>
        <p className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-widest">C9 Unified Fabric</p>
        <div className="w-full grid grid-cols-3 gap-3 mt-2">
          {[
            { label: "On-Premise", icon: Server,    color: "bg-gray-100 text-gray-600" },
            { label: "Azure IaaS", icon: Cloud,     color: "bg-[#F4F0FA] text-[#5D00D6]" },
            { label: "Private DC", icon: Lock,      color: "bg-gray-100 text-gray-600" },
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
            { link: "On-Premise ↔ Azure", latency: "2ms", status: "Connected" },
            { link: "Azure ↔ Private DC", latency: "1ms", status: "Connected" },
          ].map((conn, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
              <span className="text-[11px] text-text-secondary font-medium">{conn.link}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-text-primary">{conn.latency}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/** 03-A  Firewall as a Service — Security event monitor */
const MockupFW = () => (
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

/** 03-B  Backup as a Service — Backup status dashboard */
const MockupBaaS = () => (
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
            <CheckCircle2 size={12} className="text-emerald-500" />
          </div>
        ))}
      </div>
      <p className="text-[10px] text-text-secondary font-medium border-t border-gray-100 pt-3">
        📍 Data stored in Australian data centres only
      </p>
    </div>
  </div>
);

/** 03-C  Private Cloud Isolation — Compliance dashboard */
const MockupPrivateCloud = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[rgba(123,47,190,0.12)] w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <ShieldCheck size={14} className="text-[#5D00D6]" />
        <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Compliance Report</span>
      </div>
      <span className="text-[9px] font-bold text-[#5D00D6] bg-[#F4F0FA] px-2 py-0.5 rounded uppercase">Essential 8</span>
    </div>
    <div className="p-5 space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 shrink-0">
          <svg viewBox="0 0 36 36" className="w-20 h-20 rotate-[-90deg]">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#F3EEFF" strokeWidth="4" />
            <motion.circle cx="18" cy="18" r="15.9" fill="none" stroke="#5D00D6" strokeWidth="4"
              strokeDasharray="100" strokeDashoffset={10}
              initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 10 }}
              transition={{ duration: 1.5 }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[16px] font-bold text-[#5D00D6]">90%</span>
        </div>
        <div>
          <p className="text-[14px] font-bold text-text-primary">Security Posture</p>
          <p className="text-[11px] text-text-secondary">8/8 controls assessed</p>
          <p className="text-[11px] font-semibold text-emerald-600 mt-1">↑ Maturity Level 3</p>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { control: "Patch Applications",        level: 3, max: 3 },
          { control: "Multi-Factor Auth",          level: 3, max: 3 },
          { control: "App Control",                level: 2, max: 3 },
          { control: "User App Hardening",         level: 3, max: 3 },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[11px] text-text-secondary flex-1">{c.control}</span>
            <div className="flex gap-1">
              {[1,2,3].map(n => (
                <div key={n} className={cn("w-4 h-2 rounded", n <= c.level ? "bg-[#5D00D6]" : "bg-gray-100")} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/** 04-A  Public Cloud — Global region map with latency */
const MockupPublic = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[rgba(123,47,190,0.12)] w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-gray-100">
      <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Public Cloud Regions</span>
    </div>
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {[
          { region: "AU-EAST",  latency: "12ms", load: 62, primary: true },
          { region: "AU-SOUTH", latency: "18ms", load: 38, primary: false },
          { region: "US-WEST",  latency: "142ms", load: 15, primary: false },
        ].map((r, i) => (
          <div key={i} className={cn("rounded-xl p-3 text-center border", r.primary ? "border-[#5D00D6] bg-[#F4F0FA]" : "border-gray-100 bg-gray-50")}>
            <Globe size={16} className={cn("mx-auto mb-2", r.primary ? "text-[#5D00D6]" : "text-text-secondary")} />
            <p className="text-[10px] font-bold text-text-primary">{r.region}</p>
            <p className="text-[9px] text-text-secondary">{r.latency}</p>
            {r.primary && <span className="text-[8px] font-bold text-[#5D00D6] uppercase">Primary</span>}
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Live Metrics</p>
        {[
          { label: "Requests / sec", value: "4,821" },
          { label: "Active sessions", value: "1,204" },
          { label: "Data transfer today", value: "2.8TB" },
        ].map((m, i) => (
          <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-[12px] text-text-secondary">{m.label}</span>
            <span className="text-[14px] font-bold text-text-primary">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/** 04-B  Private Infrastructure — Dedicated server console */
const MockupPrivateInfra = () => (
  <div className="bg-[#0F0F1A] rounded-2xl shadow-sm border border-[#5D00D6]/20 w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
      <Lock size={14} className="text-[#5D00D6]" />
      <span className="text-[11px] font-bold text-white/80 uppercase tracking-widest">Private Infra Console</span>
    </div>
    <div className="p-5 space-y-4">
      <div className="bg-white/5 rounded-xl p-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-[10px] font-bold text-white/40 uppercase">Tenant ID</span>
          <span className="text-[10px] font-mono text-[#5D00D6]">C9-AU-PRIV-0042</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[10px] font-bold text-white/40 uppercase">Isolation</span>
          <span className="text-[10px] font-bold text-emerald-400">Dedicated VLAN</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[10px] font-bold text-white/40 uppercase">Data Residency</span>
          <span className="text-[10px] font-bold text-white/80">AU Only</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[10px] font-bold text-white/40 uppercase">Encryption</span>
          <span className="text-[10px] font-bold text-white/80">AES-256</span>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { node: "PRIV-NODE-01", cpu: 34, mem: 62 },
          { node: "PRIV-NODE-02", cpu: 41, mem: 55 },
          { node: "PRIV-NODE-03", cpu: 28, mem: 48 },
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
                <div className="text-[8px] text-white/30 mb-1">MEM {n.mem}%</div>
                <div className="h-1 bg-white/10 rounded"><motion.div initial={{ width: 0 }} animate={{ width: `${n.mem}%` }} transition={{ duration: 1, delay: i * 0.2 + 0.1 }} className="h-full bg-[#5D00D6]/60 rounded" /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/** 04-C  Hybrid Integration — Unified management screen */
const MockupHybridModel = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[rgba(123,47,190,0.12)] w-full max-w-[380px] overflow-hidden" style={FF}>
    <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
      <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Unified Management</span>
      <span className="text-[9px] font-bold text-[#5D00D6] bg-[#F4F0FA] px-2 py-0.5 rounded">C9 Hybrid Fabric</span>
    </div>
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#F4F0FA] rounded-xl p-4 text-center border border-[#5D00D6]/10">
          <Globe size={24} className="text-[#5D00D6] mx-auto mb-2" />
          <p className="text-[12px] font-bold text-text-primary">Public Cloud</p>
          <p className="text-[10px] text-text-secondary">8 workloads</p>
          <div className="mt-2 h-1 bg-[#5D00D6]/20 rounded"><div className="h-full bg-[#5D00D6] rounded w-3/4" /></div>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 text-center">
          <Lock size={24} className="text-[#5D00D6] mx-auto mb-2" />
          <p className="text-[12px] font-bold text-white">Private Infra</p>
          <p className="text-[10px] text-white/50">3 workloads</p>
          <div className="mt-2 h-1 bg-white/10 rounded"><div className="h-full bg-[#5D00D6] rounded w-1/3" /></div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-4">
        <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">Traffic Routing</p>
        <div className="space-y-2">
          {[
            { src: "Email / Collab → Public",  active: true },
            { src: "Patient Records → Private", active: true },
            { src: "Finance DB → Private",      active: true },
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
              <span className="text-[11px] text-text-secondary">{r.src}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────── DATA ─────────────────────────────── */

const ALL_ITEMS = [
  { id: 0,  stageNum: "01", stageTitle: "Why Cloud", stageDesc: "Built for speed, agility, and managed simplicity.",
    title: "Scale Without Headache",
    body: "C9 provides the infrastructure and management layer — and scales it as your business needs change. You focus on growth, we handle the underlying platform.",
    mockup: <MockupScale /> },
  { id: 1,  stageNum: "01", stageTitle: "Why Cloud", stageDesc: "Built for speed, agility, and managed simplicity.",
    title: "Predictable Costs",
    body: "C9 delivers cloud as a fixed monthly managed service — full access, known cost, no surprise capital spend at renewal time.",
    mockup: <MockupCost /> },
  { id: 2,  stageNum: "01", stageTitle: "Why Cloud", stageDesc: "Built for speed, agility, and managed simplicity.",
    title: "On-Demand Flexibility",
    body: "Expand, contract, or change your environment as your business evolves — on demand, without penalty or lock-in.",
    mockup: <MockupFlex /> },
  { id: 3,  stageNum: "02", stageTitle: "Managed", stageDesc: "Operational excellence as a managed service.",
    title: "Microsoft 365",
    body: "Licensing, governance, security configuration, and ongoing administration — fully managed by C9 engineering teams.",
    mockup: <MockupM365 /> },
  { id: 4,  stageNum: "02", stageTitle: "Managed", stageDesc: "Operational excellence as a managed service.",
    title: "Azure Infrastructure",
    body: "Best-in-class virtual machines, storage, and networking. Fully monitored server environments engineered for reliability.",
    mockup: <MockupAzure /> },
  { id: 5,  stageNum: "02", stageTitle: "Managed", stageDesc: "Operational excellence as a managed service.",
    title: "Hybrid Integration",
    body: "Connect on-premise and public cloud environments into one managed layer — one environment, not three separate ones.",
    mockup: <MockupHybrid /> },
  { id: 6,  stageNum: "03", stageTitle: "Security", stageDesc: "Governance and protection for your cloud.",
    title: "Firewall as a Service",
    body: "Cloud-based network security managed entirely by C9 — protecting your organisation without hardware management overhead.",
    mockup: <MockupFW /> },
  { id: 7,  stageNum: "03", stageTitle: "Security", stageDesc: "Governance and protection for your cloud.",
    title: "Backup as a Service",
    body: "Veeam-powered backup hosted on the Vocus cloud platform. All data stays in Australian data centres.",
    mockup: <MockupBaaS /> },
  { id: 8,  stageNum: "03", stageTitle: "Security", stageDesc: "Governance and protection for your cloud.",
    title: "Private Cloud Isolation",
    body: "Dedicated infrastructure for highly sensitive data — banking, finance, healthcare, and government compliant.",
    mockup: <MockupPrivateCloud /> },
  { id: 9,  stageNum: "04", stageTitle: "Models", stageDesc: "Tailored delivery for your requirements.",
    title: "Public Cloud",
    body: "All necessary infrastructure, software, and ongoing management provided by C9. Easy to scale as business needs change.",
    mockup: <MockupPublic /> },
  { id: 10, stageNum: "04", stageTitle: "Models", stageDesc: "Tailored delivery for your requirements.",
    title: "Private Infrastructure",
    body: "Managed through an organisation's own dedicated infrastructure, serving one company alone — for data-sensitive environments.",
    mockup: <MockupPrivateInfra /> },
  { id: 11, stageNum: "04", stageTitle: "Models", stageDesc: "Tailored delivery for your requirements.",
    title: "Hybrid Integration",
    body: "Sensitive data in private cloud, daily operations in public cloud — managed through a single unified C9 interface.",
    mockup: <MockupHybridModel /> },
];

const STAGES = [
  { num: "01", title: "Why Cloud", desc: "Built for speed, agility, and managed simplicity." },
  { num: "02", title: "Managed",   desc: "Operational excellence as a managed service." },
  { num: "03", title: "Security",  desc: "Governance and protection for your cloud." },
  { num: "04", title: "Models",    desc: "Tailored delivery for your requirements." },
];

const TIMER_MS = 6000;

export default function BlandExplorer() {
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
    <section className="bg-white py-24" style={FF}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] w-full">

        {/* Section header */}
        <div className="mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#5D00D6] block mb-4">
            CLOUD SERVICES OVERVIEW
          </span>
          <h2 className="c9-section-heading text-text-primary max-w-[640px]">
            Everything you need — managed, secured, and delivered.
          </h2>
        </div>

        {/* STAGE PILLS — top navigation */}
        <div className="flex flex-wrap gap-2 mb-12">
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
                  "flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 border",
                  isActive
                    ? "bg-[#5D00D6] text-white border-[#5D00D6] shadow-sm shadow-[#5D00D6]/20"
                    : "bg-white text-text-secondary border-gray-200 hover:border-[#5D00D6] hover:text-[#5D00D6]"
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
                  <h3 className="text-[16px] font-bold text-text-primary tracking-tight mb-2">{item.title}</h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                        className="text-[16px] text-text-secondary leading-[1.6] font-normal overflow-hidden"
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
