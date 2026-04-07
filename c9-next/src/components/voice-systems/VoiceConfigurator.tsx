'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Phone, 
  Smartphone, 
  Video, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  Headphones,
  Check
} from 'lucide-react';

const HARDWARE = [
  { id: 't54w', name: 'SIP-T54W Desktop', price: 15, desc: 'Enterprise Grade', image: '/images/yealink-t54w.png' },
  { id: 'w73p', name: 'W73P DECT Cordless', price: 12, desc: 'Mobile Mobility', image: '/images/yealink-w73p.png' },
  { id: 'bh71', name: 'BH71 Bluetooth', price: 8, desc: 'Wireless Headset', image: '/images/yealink-bh71.png' }
];

const FEATURES = [
  { id: 'teams', name: 'MS Teams Integration', icon: Video },
  { id: 'mobile', name: 'Mobile App Support', icon: Smartphone },
  { id: 'contact', name: 'Contact Centre Layer', icon: Headphones }
];

export const VoiceConfigurator = () => {
  const [users, setUsers] = useState(10);
  const [hardware, setHardware] = useState<string[]>(['t54w']);
  const [features, setFeatures] = useState<string[]>(['mobile']);

  const toggleHardware = (id: string) => {
    setHardware(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleFeature = (id: string) => {
    setFeatures(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const basePrice = 25; // per user
  const hardwarePrice = hardware.reduce((acc, id) => acc + (HARDWARE.find(h => h.id === id)?.price || 0), 0);
  const totalPerMonth = (basePrice + hardwarePrice) * users;

  return (
    <section className="py-24 bg-[#FDFDFF] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[48px] font-bold text-[#0c1024] leading-tight mb-4"
          >
            Build your <span className="text-[#5D00D6]">Voice System.</span>
          </motion.h2>
          <p className="text-slate-500 text-[16px] max-w-2xl mx-auto">
            Select what your business needs. C9 handles the configuration, deployment, and 24/7 support.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* ── SELECTION SIDE ── */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* STEP 1: USERS */}
            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6]">
                  <Users size={20} />
                </div>
                <h3 className="text-[18px] font-bold text-[#0c1024]">How many staff need calling?</h3>
              </div>
              
              <div className="px-4">
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  step="5"
                  value={users}
                  onChange={(e) => setUsers(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#5D00D6]"
                />
                <div className="flex justify-between mt-4 text-[13px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>5 Staff</span>
                  <span className="text-[#5D00D6] bg-purple-50 px-3 py-1 rounded-full">{users} Staff Members</span>
                  <span>100+ Staff</span>
                </div>
              </div>
            </div>

            {/* STEP 2: HARDWARE */}
            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6]">
                  <Phone size={20} />
                </div>
                <h3 className="text-[18px] font-bold text-[#0c1024]">Hardware requirements</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {HARDWARE.map((hw) => (
                  <button
                    key={hw.id}
                    onClick={() => toggleHardware(hw.id)}
                    className={`p-6 rounded-2xl border text-center transition-all group relative overflow-hidden ${
                      hardware.includes(hw.id) 
                        ? 'border-[#5D00D6] bg-purple-50/30' 
                        : 'border-gray-100 hover:border-[#5D00D6]/30 bg-white'
                    }`}
                  >
                    <div className="h-24 flex items-center justify-center mb-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={hw.image} alt={hw.name} className={`w-auto h-full object-contain transition-transform ${hardware.includes(hw.id) ? 'scale-110' : 'group-hover:scale-105'}`} />
                    </div>
                    <p className="text-[14px] font-bold text-[#0c1024] mb-1">{hw.name}</p>
                    <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{hw.desc}</p>
                    
                    {hardware.includes(hw.id) && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-[#5D00D6] rounded-full flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 3: CAPABILITIES */}
            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6]">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-[18px] font-bold text-[#0c1024]">Advanced features</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {FEATURES.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                        features.includes(feat.id) 
                          ? 'border-[#5D00D6] bg-purple-50/30' 
                          : 'border-gray-100 hover:border-[#5D00D6]/30 bg-white'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${features.includes(feat.id) ? 'bg-[#5D00D6] text-white' : 'bg-slate-50 text-slate-400'}`}>
                        <Icon size={20} />
                      </div>
                      <span className="text-[13px] font-bold text-[#0c1024] text-left leading-tight">{feat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ── SUMMARY STICKY ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-[#0c1024] rounded-[32px] p-10 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/20 blur-[80px] rounded-full pointer-events-none" />
              
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] mb-8">System Summary</h4>
              
              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <div>
                    <p className="text-white font-bold text-[18px]">{users} Users</p>
                    <p className="text-white/40 text-[12px]">Cloud PBX Configuration</p>
                  </div>
                  <p className="text-white font-medium">${(users * basePrice).toLocaleString()}/mo</p>
                </div>
                
                {hardware.length > 0 && (
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <div>
                      <p className="text-white font-bold text-[18px]">{hardware.length} Device Types</p>
                      <p className="text-white/40 text-[12px]">Yealink Provisioned HW</p>
                    </div>
                    <p className="text-white font-medium">${(users * hardwarePrice).toLocaleString()}/mo</p>
                  </div>
                )}

                <div className="flex justify-between items-center text-[#5D00D6]">
                  <p className="text-[13px] font-bold uppercase tracking-widest">Est. Monthly Total</p>
                  <p className="text-[32px] font-bold text-white tracking-tighter">${totalPerMonth.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('c9-open-lead-modal', { detail: { intent: `Quote for ${users} user system` } }))}
                  className="w-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-xl h-16 text-[16px] font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  Get Formal Quote <ArrowRight size={20} />
                </button>
                <button className="w-full bg-white/5 hover:bg-white/10 text-white/60 rounded-xl h-14 text-[14px] font-bold transition-all flex items-center justify-center gap-2">
                  Download Components PDF
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-[12px] text-white/50 font-medium tracking-wide">Included: Australian support & data sovereignty</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
