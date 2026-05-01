'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, BarChart3, Calendar, Clock, Zap } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ConsultationFormCoreProps {
  formTitle: string;
  ctaText?: string;
}

const PathOption = ({ 
  id, 
  icon: Icon, 
  label, 
  isSelected, 
  onClick 
}: { 
  id: string; 
  icon: any; 
  label: string; 
  isSelected: boolean; 
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 gap-2 flex-1",
      isSelected 
        ? "bg-[#5D00D6]/5 border-[#5D00D6] shadow-sm" 
        : "bg-white border-slate-100 hover:border-slate-200"
    )}
  >
    <div className={cn(
      "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
      isSelected ? "bg-[#5D00D6] text-white" : "bg-slate-50 text-slate-400"
    )}>
      <Icon size={16} />
    </div>
    <span className={cn(
      "text-[9px] font-black uppercase tracking-widest text-center leading-tight",
      isSelected ? "text-[#5D00D6]" : "text-slate-500"
    )}>
      {label}
    </span>
  </button>
);

export const ConsultationFormCore = ({ formTitle, ctaText }: ConsultationFormCoreProps) => {
  const { inquiryMessage } = useInquiry();
  const [message, setMessage] = useState('');
  const [selectedPath, setSelectedPath] = useState<'consultation' | 'sla' | 'assessment'>('consultation');

  useEffect(() => {
    if (inquiryMessage) {
      setMessage(inquiryMessage);
    }
  }, [inquiryMessage]);

  const paths = [
    { id: 'consultation', icon: Calendar, label: 'Technical Consult', btn: 'Book Infrastructure Review' },
    { id: 'sla', icon: Shield, label: 'Governance Pack', btn: 'Request Governance Pack' },
    { id: 'assessment', icon: BarChart3, label: 'Operational Audit', btn: 'Request Operational Audit' }
  ];

  const currentPath = paths.find(p => p.id === selectedPath)!;

  return (
    <div className="bg-white rounded-none p-8 md:p-10 max-w-[500px] mx-auto lg:ml-auto">
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-[22px] font-bold text-center text-[#0c1024] mb-2 tracking-tight">
          {formTitle}
        </h3>
        <p className="text-[13px] text-slate-500 text-center">Select your preferred engagement path below.</p>
      </div>

      <div className="flex gap-3 mb-8">
        {paths.map(path => (
          <PathOption 
            key={path.id}
            id={path.id}
            icon={path.icon}
            label={path.label}
            isSelected={selectedPath === path.id}
            onClick={() => setSelectedPath(path.id as any)}
          />
        ))}
      </div>

      <form onSubmit={e => e.preventDefault()} className="grid gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">First Name</label>
            <input type="text" placeholder="John" className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[14px] font-semibold placeholder:text-slate-300" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">Last Name</label>
            <input type="text" placeholder="Doe" className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[14px] font-semibold placeholder:text-slate-300" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">Work Email</label>
          <input type="email" placeholder="john@company.com.au" className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[14px] font-semibold placeholder:text-slate-300" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">Organisation</label>
          <input type="text" placeholder="Organisation name" className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[14px] font-semibold placeholder:text-slate-300" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
            {selectedPath === 'sla' ? 'Infrastructure Footprint' : 'Current Environment'}
          </label>
          <textarea 
            placeholder={
              selectedPath === 'sla' 
                ? "Briefly describe your site count..." 
                : "Briefly describe your setup & pain points..."
            }
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[14px] font-semibold min-h-[80px] resize-none placeholder:text-slate-300"
          />
        </div>

        <div className="pt-2">
          <Button size="lg" className="w-full h-14 rounded-full bg-[#5D00D6] hover:bg-[#4c00b0] c9-button-label shadow-2xl shadow-purple-900/30 group transition-all duration-300 flex items-center justify-center gap-3">
             {ctaText || currentPath.btn} <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Button>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest opacity-80">
              <span className="flex items-center gap-1.5 whitespace-nowrap"><Shield size={12} className="text-[#5D00D6]" /> Engineer Review</span>
              <span className="flex items-center gap-1.5 whitespace-nowrap"><Clock size={12} className="text-[#5D00D6]" /> 2H Response</span>
            </div>
            <p className="text-[12px] text-slate-400 font-medium text-center">Direct Engineer Response. No Sales Pressure.</p>
          </div>
        </div>
      </form>
    </div>
  );
};

