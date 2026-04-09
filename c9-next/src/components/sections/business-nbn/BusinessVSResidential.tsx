'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Clock, Users, Globe, Zap, Cpu, Activity } from 'lucide-react';

const upgradeFeatures = [
  {
    feature: 'Work-Day Optimization',
    res: 'Peak 7pm-11pm congestion',
    biz: '9am-5pm Priority Protocol',
    icon: Zap,
    short: 'Priority Routing'
  },
  {
    feature: 'Fault Restoration',
    res: 'Best effort (No fixed ETA)',
    biz: 'eSLA (4h / 8h / 12h Targets)',
    icon: Clock,
    short: 'SLA Guaranteed'
  },
  {
    feature: 'Tech Support',
    res: 'Scripted Global Centres',
    biz: '100% AU-Based Engineers',
    icon: Users,
    short: 'Local Experts'
  },
  {
    feature: 'IP Config',
    res: 'Dynamic (Always changes)',
    biz: 'Free Static IP Included',
    icon: Globe,
    short: 'Permanent IP'
  },
  {
    feature: 'Network Logic',
    res: 'Shared neighborhood pool',
    biz: 'Tier-1 Priority Backhaul',
    icon: Activity,
    short: 'Lower Contention'
  },
  {
    feature: 'Hardware Build',
    res: 'Consumer Wi-Fi Router',
    biz: 'Managed 4G Failover Kit',
    icon: Cpu,
    short: 'Managed Kit'
  },
];

export default function BusinessVSResidential() {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-y border-gray-50" >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#5D00D6] font-bold block mb-3">
              The Business Upgrade
            </span>
            <h2 className="c9-section-heading">
              A connection designed for enterprise, <span className="text-[#5D00D6]">not Netflix.</span>
            </h2>
          </div>
          <p className="text-[14px] text-[#6B7280] max-w-[360px] leading-relaxed mb-1">
            When connectivity is revenue-critical, a standard residential line isn’t enough. 
            C9 Small Business nbn™ bridges the gap with a professional-grade tech stack.
          </p>
        </div>

        {/* Compact Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upgradeFeatures.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#FAFAFA] rounded-2xl p-5 border border-gray-100 hover:border-[#5D00D6]/20 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#5D00D6] group-hover:scale-110 transition-transform">
                  <f.icon size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[9px] font-bold text-[#5D00D6] uppercase tracking-wider bg-[#F3EEFF] px-2 py-1 rounded-full border border-[#5D00D6]/5">
                  {f.short}
                </span>
              </div>

              <h3 className="text-[16px] font-bold text-[#1A1A2E] mb-4">{f.feature}</h3>

              <div className="space-y-3">
                {/* Residential */}
                <div className="flex items-start gap-3 opacity-50 group-hover:opacity-70 transition-opacity">
                  <X size={14} className="text-red-500 mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-0.5">RESIDENTIAL</p>
                    <p className="text-[12px] text-gray-500 font-medium leading-tight">{f.res}</p>
                  </div>
                </div>

                {/* Business */}
                <div className="flex items-start gap-3">
                  <Check size={14} className="text-[#5D00D6] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-extrabold text-[#5D00D6] uppercase tracking-widest mb-0.5">BUSINESS UPGRADE</p>
                    <p className="text-[13px] text-[#1A1A2E] font-bold leading-tight">{f.biz}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dense footer summary */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-gray-100">
           <div className="flex items-center gap-2 group cursor-help">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[11px] text-[#6B7280] font-medium">
                Optimized for High-Throughput Technology (FTTP/Ethernet)
              </p>
           </div>
           <p className="text-[11px] text-[#9CA3AF] italic max-w-[500px] text-center md:text-right leading-snug">
             * Restore targets (eSLA) based on Gold support tiers. Check availability to confirm the specific service levels possible at your business address.
           </p>
        </div>

      </div>
    </section>
  );
}

