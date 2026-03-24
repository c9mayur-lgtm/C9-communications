'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, Stethoscope, ShoppingBag, HardHat, ArrowRight, X, Star, 
  CheckCircle2, PhoneCall, Scale, GraduationCap, Briefcase 
} from 'lucide-react';

const INDUSTRIES = [
  { 
    id: 'medical', 
    icon: Stethoscope, 
    label: 'Medical Clinic', 
    desc: 'Patient care & data protection',
    recommend: [
      { name: 'Enterprise Security', href: '/modern-workplace#security' },
      { name: 'Modern Workplace', href: '/modern-workplace' }
    ],
    benefit: 'HIPAA/Australian Privacy compliant workflows with zero-touch device setup.'
  },
  { 
    id: 'legal', 
    icon: Scale, 
    label: 'Legal Firm', 
    desc: 'Document security & billable time',
    recommend: [
      { name: 'SaaS Backup', href: '/modern-workplace#infra' },
      { name: 'Managed IT', href: '/managed-it' }
    ],
    benefit: 'Unlimited cloud backup and < 2 min engineering support for uninterrupted billing.'
  },
  { 
    id: 'retail', 
    icon: ShoppingBag, 
    label: 'Retail / F&B', 
    desc: 'Customer flow & connectivity',
    recommend: [
      { name: 'CCTV & People Count', href: '/modern-workplace#other-solutions' },
      { name: 'Fibre NBN', href: '/telco' }
    ],
    benefit: 'Real-time occupancy analytics plus guest WiFi that actually works.'
  },
  { 
    id: 'education', 
    icon: GraduationCap, 
    label: 'Education', 
    desc: 'Safe & connected learning',
    recommend: [
      { name: 'Device Management', href: '/modern-workplace#infra' },
      { name: 'Visitor Management', href: '/modern-workplace#other-solutions' }
    ],
    benefit: 'Automatically enrol 1,000+ student tablets with zero-touch deployment.'
  },
  { 
    id: 'professional', 
    icon: Briefcase, 
    label: 'Professional Services', 
    desc: 'Hybrid team collaboration',
    recommend: [
      { name: 'Cloud Phone System', href: '/telco' },
      { name: 'Microsoft 365', href: '/modern-workplace' }
    ],
    benefit: 'Move your desktop to the cloud. Work from anywhere with Teams Phone.'
  },
  { 
    id: 'construction', 
    icon: HardHat, 
    label: 'Construction', 
    desc: 'On-site connectivity',
    recommend: [
      { name: '4G Failover', href: '/telco#nbn' },
      { name: 'Mobile Data', href: '/telco#mobile' }
    ],
    benefit: 'Stay connected on site with failover connectivity and shared data pools.'
  }
];

export const BusinessAdvisor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<typeof INDUSTRIES[0] | null>(null);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[92%] md:max-w-3xl px-4 pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-center">
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 w-full bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-[0_32px_92px_rgba(12,16,36,0.14)] border border-white overflow-hidden shadow-2xl"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-50 to-white flex items-center justify-center border border-purple-100/50">
                      <Star size={20} className="text-[#5D00D6]" fill="rgba(93,0,214,0.1)" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-semibold text-[#0c1024] tracking-tight">C9 Advisor</h3>
                      <p className="text-[13px] font-medium text-gray-400">Personalised solutions for your industry.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setIsOpen(false); setSelected(null); }}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <X size={20} className="text-gray-300" />
                  </button>
                </div>

                {!selected ? (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {INDUSTRIES.map((ind) => {
                      const Icon = ind.icon;
                      return (
                        <motion.button
                          key={ind.id}
                          whileHover={{ y: -3, background: 'rgba(93,0,214,0.02)', borderColor: 'rgba(93,0,214,0.1)' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelected(ind)}
                          className="flex flex-col items-center gap-2 p-6 rounded-[28px] border border-gray-100 transition-all text-center group"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-1 group-hover:bg-purple-100/50 transition-colors">
                            <Icon size={24} className="text-gray-400 transition-colors group-hover:text-[#5D00D6] group-hover:opacity-100 opacity-60" />
                          </div>
                          <span className="text-[15px] font-semibold text-[#0c1024] tracking-tight">{ind.label}</span>
                          <span className="text-[11px] font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{ind.desc}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="grid md:grid-cols-[1fr_260px] gap-10 items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-6">
                          <button 
                            onClick={() => setSelected(null)}
                            className="text-[12px] font-semibold text-[#5D00D6] flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
                          >
                            <ArrowRight size={12} className="rotate-180" /> Change industry
                          </button>
                        </div>
                        <h4 className="text-[24px] font-semibold text-[#0c1024] mb-6 tracking-tight">Best options for <span style={{ color: '#5D00D6' }}>{selected.label}</span></h4>
                        <div className="space-y-3">
                          {selected.recommend.map(rec => (
                            <Link 
                              key={rec.name} 
                              href={rec.href}
                              onClick={() => setIsOpen(false)}
                              className="group flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:border-purple-100 hover:bg-purple-50/20 transition-all"
                            >
                                <div className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                                    <CheckCircle2 size={13} className="text-green-500" />
                                  </div>
                                  <span className="text-[16px] font-medium text-[#0c1024]">{rec.name}</span>
                                </div>
                                <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300">
                                   <span className="text-[11px] font-semibold text-[#5D00D6] uppercase tracking-[0.1em]">View Solution</span>
                                   <ArrowRight size={12} className="text-[#5D00D6]" />
                                </div>
                            </Link>
                          ))}
                        </div>
                        <p className="mt-8 text-[15px] leading-relaxed text-gray-400 font-medium border-l-3 border-purple-200 pl-5">
                          {selected.benefit}
                        </p>
                      </div>
                      
                      <div className="w-full bg-slate-50/50 rounded-[32px] p-8 border border-slate-100">
                        <div className="w-12 h-12 rounded-2xl bg-[#5D00D6] flex items-center justify-center mb-6 shadow-xl shadow-purple-500/20">
                          <PhoneCall size={22} className="text-white" />
                        </div>
                        <h5 className="text-[16px] font-semibold text-[#0c1024] mb-3 leading-snug tracking-tight">Speak with an Engineer.</h5>
                        <p className="text-[13px] text-gray-400 font-medium mb-8 leading-relaxed">Book a 15-minute tailored assessment for your {selected.label.toLowerCase()} team.</p>
                        <Link href="/contact" className="block w-full py-4 text-center rounded-2xl bg-white border border-slate-200 text-[#5D00D6] font-semibold text-[13px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                          Book Free Session
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Main Pill */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="flex items-center gap-5 px-9 py-5 h-17 bg-white shadow-[0_20px_60px_rgba(12,16,36,0.12)] rounded-full border border-black/5 hover:border-[#5D00D6]/15 hover:shadow-[0_24px_80px_rgba(93,0,214,0.12)] transition-all duration-500 group"
        >
          <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#5D00D6]' : 'bg-gray-50 group-hover:bg-purple-100/50'}`}>
            <Building2 size={16} className={`transition-colors duration-500 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-[#5D00D6]'}`} />
          </div>
          <span className="text-[16px] font-medium text-gray-400 font-proxima tracking-tight group-hover:text-gray-700 transition-colors">
            What type of business are you building?
          </span>
          <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-gray-100 text-[#5D00D6] rotate-90' : 'bg-[#5D00D6]/5 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white group-hover:scale-110 ml-5'}`}>
            <ArrowRight size={14} className="stroke-[2.5px]" />
          </div>
        </motion.button>

      </div>
    </div>
  );
};
