'use client';

import React from 'react';
import Image from 'next/image';
import { X, ArrowRight } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogClose 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { C9Button } from '@/components/design-system/C9Button';
import { cn } from '@/lib/utils';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  config?: {
    leftBg?: string;
    title?: string;
    subtitle?: string;
    image?: string;
    formTitle?: string;
    formSubtitle?: string;
    ctaLabel?: string;
  };
}

export const LeadCaptureModal = ({ 
  isOpen, 
  onOpenChange,
  config = {
    leftBg: 'bg-[#5D00D6]',
    title: 'The 2026 Connectivity Report',
    subtitle: 'Redefining Business Uptime & Governance',
    image: '/c9_connectivity_report_cover_1778738161821.png',
    formTitle: 'Wait, before you go!',
    formSubtitle: 'Interested to learn how business connectivity is going to change in 2026? Download our new report.',
    ctaLabel: 'Download Now'
  }
}: LeadCaptureModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent 
        showCloseButton={false} 
        className="max-w-[95%] md:max-w-[900px] p-0 overflow-hidden border-none rounded-[32px] md:rounded-[40px] bg-white shadow-2xl"
      >
        <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
          
          {/* Left Column — Visual / Book Style Banner */}
          <div className={cn("relative w-full md:w-[45%] p-8 md:p-12 text-white flex flex-col justify-between overflow-hidden min-h-[250px] md:min-h-full", config.leftBg)}>
            {/* Logo placeholder / Brand Name */}
            <div className="relative z-10">
              <div className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-2 mb-8 md:mb-12">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full" /> C9 Communications
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Expert Framework</span>
                <h2 className="text-2xl md:text-4xl font-black leading-tight italic uppercase">
                  {config.title}
                </h2>
                <p className="text-white/60 text-xs md:text-sm font-medium max-w-[240px]">
                  {config.subtitle}
                </p>
              </div>
            </div>

            {/* CTA Badge overlay */}
            <div className="mt-6 md:mt-8 relative z-10 hidden md:block">
               <div className="bg-white text-[#5D00D6] px-5 py-2.5 rounded-full inline-flex items-center gap-2 font-bold text-xs shadow-xl">
                  {config.ctaLabel} <ArrowRight size={14} />
               </div>
            </div>

            {/* Background Image / Product Mockup — The "Book" Banner */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-[70%] md:w-[85%] aspect-[3/4] z-0 opacity-90 rotate-[-8deg] drop-shadow-2xl">
               <Image 
                 src={config.image || '/c9_connectivity_report_cover_1778738161821.png'}
                 alt="Report Mockup"
                 fill
                 className="object-contain"
                 priority
               />
            </div>
            
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay" />
          </div>

          {/* Right Column — Form */}
          <div className="relative w-full md:w-[55%] bg-white p-8 md:p-12 flex flex-col justify-center">
            {/* Single Close Button */}
            <DialogClose className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 transition-colors text-slate-300 hover:text-slate-500 z-50">
              <X size={24} />
              <span className="sr-only">Close</span>
            </DialogClose>

            <div className="max-w-[400px] mx-auto w-full relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-[#0c1024] mb-3 leading-tight">
                {config.formTitle}
              </h3>
              <p className="text-slate-500 text-sm md:text-base mb-8 md:mb-10 leading-relaxed">
                {config.formSubtitle}
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="first-name" className="text-[10px] font-bold uppercase tracking-wider text-slate-400">First Name <span className="text-red-500">*</span></Label>
                    <Input id="first-name" placeholder="John" className="h-11 bg-slate-50/50 border-slate-200 rounded-xl focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="last-name" className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Last Name <span className="text-red-500">*</span></Label>
                    <Input id="last-name" placeholder="Doe" className="h-11 bg-slate-50/50 border-slate-200 rounded-xl focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="job-title" className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Job Title <span className="text-red-500">*</span></Label>
                  <Input id="job-title" placeholder="Operations Manager" className="h-11 bg-slate-50/50 border-slate-200 rounded-xl focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" required />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email <span className="text-red-500">*</span></Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="h-11 bg-slate-50/50 border-slate-200 rounded-xl focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" required />
                </div>

                <div className="pt-4">
                  <C9Button className="w-full h-14 bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-full text-base font-black shadow-xl shadow-purple-900/20 flex items-center justify-center gap-2 group">
                    {config.ctaLabel}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </C9Button>
                </div>

                <p className="text-[10px] text-slate-400 text-center mt-6 uppercase tracking-[0.2em] font-medium">
                  Protected by Enterprise Governance
                </p>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
