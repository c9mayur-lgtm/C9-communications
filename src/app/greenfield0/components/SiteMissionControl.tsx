'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Wifi, 
  Phone, 
  Activity, 
  CheckCircle2, 
  AlertCircle,
  BarChart3,
  Globe,
  Settings,
  ChevronRight
} from 'lucide-react';

const STATUS_ITEMS = [
  { name: 'Enterprise Fibre', status: 'Active', color: 'bg-emerald-500', icon: <Globe size={14} /> },
  { name: 'CCTV Surveillance', status: 'Monitoring', color: 'bg-emerald-500', icon: <Shield size={14} /> },
  { name: 'VoIP Network', status: 'Online', color: 'bg-emerald-500', icon: <Phone size={14} /> },
  { name: 'Guest WiFi', status: 'High Traffic', color: 'bg-amber-500', icon: <Wifi size={14} /> },
];

export const SiteMissionControl = () => {
  return (
    <section className="py-8 md:py-12 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div>
            <span className="c9-eyebrow mb-4 block">TOTAL VISIBILITY</span>
            <h2 className="c9-section-heading mb-8">
              Your site&apos;s mission control.
            </h2>
            <p className="c9-body text-slate-500 mb-10 text-lg leading-relaxed">
              Stop chasing multiple vendors. C9 provides a single point of accountability with real-time visibility over your entire technical stack. From NBN health to CCTV uptime, we own the outcome so you can own the business.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                'Real-time infrastructure health monitoring',
                '24/7 proactive security alerts',
                'Unified billing for all site services',
                'Single-click engineering support'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6]">
                    <CheckCircle2 size={12} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-[#5D00D6] font-black uppercase tracking-widest text-[11px] group">
              Explore the Dashboard Experience 
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mockup Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:scale-95 xl:scale-90 origin-left"
          >
            {/* The "Dashboard" Card */}
            <div className="bg-white border border-slate-200 rounded-[32px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
              {/* Sidebar Header */}
              <div className="bg-[#0c1024] p-6 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#5D00D6] flex items-center justify-center">
                    <Activity size={18} />
                  </div>
                  <span className="font-black text-[12px] uppercase tracking-widest">Site Hub v2.0</span>
                </div>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">System Live</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 md:p-6 grid grid-cols-2 gap-4 bg-slate-50/50">
                {/* Stats Grid */}
                {STATUS_ITEMS.map((item, i) => (
                  <div key={i} className="bg-white p-3 md:p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${item.color.replace('bg-', 'text-')} ${item.color.replace('bg-', 'bg-')}/10`}>
                        {item.status}
                      </div>
                    </div>
                    <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                  </div>
                ))}

                {/* Large Activity Chart Mockup */}
                <div className="col-span-2 bg-white p-4 md:p-5 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-[12px] font-black text-slate-400 uppercase tracking-widest">Network Performance</div>
                    <div className="flex gap-1">
                       <div className="w-1.5 h-1.5 rounded-full bg-slate-100" />
                       <div className="w-1.5 h-1.5 rounded-full bg-slate-100" />
                       <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-16 md:h-20">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 40, 60, 95, 75, 50, 80].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 0.8 }}
                        className={`flex-1 rounded-t-sm ${i === 10 ? 'bg-[#5D00D6]' : 'bg-slate-100'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="col-span-2 flex items-center justify-between pt-2">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-[#5D00D6] flex items-center justify-center text-[10px] text-white font-bold">
                         +2
                      </div>
                   </div>
                   <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Engineering Team Online</div>
                </div>
              </div>
            </div>

            {/* Floating Alert Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-10 bg-white p-5 rounded-2xl border-l-4 border-amber-500 shadow-2xl flex items-center gap-4 max-w-[280px]"
            >
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                <AlertCircle size={24} />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Hardware Sync</div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">Floor 2 Access Points detected. Auto-provisioning started.</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
