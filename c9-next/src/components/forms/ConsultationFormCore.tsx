'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ConsultationFormCoreProps {
  formTitle: string;
}

export const ConsultationFormCore = ({ formTitle }: ConsultationFormCoreProps) => {
  return (
    <div className="bg-white rounded-none shadow-[0_30px_70px_-15px_rgba(0,0,0,0.08)] p-8 md:p-10 border border-white max-w-[500px] mx-auto lg:ml-auto">
      <h3 className="text-[28px] md:text-[32px] font-bold text-center text-[#0c1024] mb-8 tracking-tight">
        {formTitle}
      </h3>

      <form onSubmit={e => e.preventDefault()} className="grid gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">FIRST NAME</label>
            <input type="text" placeholder="John" className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[15px] font-semibold placeholder:text-slate-300" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">LAST NAME</label>
            <input type="text" placeholder="Doe" className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[15px] font-semibold placeholder:text-slate-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">COMPANY</label>
            <input type="text" placeholder="Acme Pty Ltd" className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[15px] font-semibold placeholder:text-slate-300" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">PHONE</label>
            <input type="tel" placeholder="1800 000 299" className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[15px] font-semibold placeholder:text-slate-300" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">WORK EMAIL</label>
          <input type="email" placeholder="john@company.com" className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[15px] font-semibold placeholder:text-slate-300" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">CURRENT PROVIDER</label>
          <div className="relative">
            <select className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[15px] font-semibold cursor-pointer appearance-none text-slate-800">
              <option className="text-slate-400">Select provider...</option>
              <option>Telstra</option>
              <option>Optus</option>
              <option>TPG / Vodafone</option>
              <option>Other</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
              <ArrowRight size={16} className="rotate-90" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">MESSAGE</label>
          <textarea 
            placeholder="Briefly describe your requirements..."
            className="w-full px-5 py-3.5 rounded-none bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-[15px] font-semibold min-h-[90px] resize-none placeholder:text-slate-300"
          />
        </div>

        <div className="pt-2">
          <Button size="lg" className="w-full h-14 rounded-none bg-[#5D00D6] hover:bg-[#4c00b0] text-[16px] font-bold shadow-2xl shadow-purple-900/30 group transition-all duration-300 flex items-center justify-center gap-3">
            {formTitle.includes("Schedule") ? "Schedule My Strategy Session" : "Request Free Audit"} <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-[11px] text-zinc-400 mt-6 font-medium text-center opacity-70">
            Typical response: 2 business hours • No lock-in • Your details stay private
          </p>
        </div>
      </form>
    </div>
  );
};
