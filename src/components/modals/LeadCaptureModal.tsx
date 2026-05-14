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
      <DialogContent className="max-w-[900px] p-0 overflow-hidden border-none rounded-[32px] md:rounded-[40px]">
        <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
          
          {/* Left Column — Visual */}
          <div className={cn("relative w-full md:w-[45%] p-8 md:p-12 text-white flex flex-col justify-between overflow-hidden", config.leftBg)}>
            {/* Logo placeholder / Brand Name */}
            <div className="relative z-10">
              <div className="text-2xl font-black tracking-tighter flex items-center gap-1 mb-12">
                <span className="w-6 h-6 bg-white rounded-full" /> C9 Communications
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Free Whitepaper</span>
                <h2 className="text-3xl md:text-4xl font-black leading-tight italic uppercase italic">
                  {config.title}
                </h2>
                <p className="text-white/60 text-sm md:text-base font-medium">
                  {config.subtitle}
                </p>
              </div>
            </div>

            {/* CTA Button overlay like the screenshot */}
            <div className="mt-8 relative z-10">
               <div className="bg-white text-[#5D00D6] px-6 py-3 rounded-full inline-flex items-center gap-2 font-bold text-sm shadow-xl hover:scale-105 transition-transform cursor-default">
                  {config.ctaLabel} <ArrowRight size={16} />
               </div>
            </div>

            {/* Background Image / Product Mockup */}
            <div className="absolute -bottom-10 -right-10 w-[80%] aspect-[3/4] z-0 opacity-90 rotate-[-5deg]">
               <Image 
                 src={config.image || '/c9_connectivity_report_cover_1778738161821.png'}
                 alt="Report Mockup"
                 fill
                 className="object-contain"
               />
            </div>
            
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          </div>

          {/* Right Column — Form */}
          <div className="relative w-full md:w-[55%] bg-white p-8 md:p-12 flex flex-col justify-center">
            <DialogClose className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400">
              <X size={20} />
            </DialogClose>

            <div className="max-w-[400px] mx-auto w-full">
              <h3 className="text-2xl md:text-3xl font-black text-[#0c1024] mb-4">
                {config.formTitle}
              </h3>
              <p className="text-slate-500 text-sm md:text-base mb-10 leading-relaxed">
                {config.formSubtitle}
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">First Name <span className="text-red-500">*</span></Label>
                    <Input id="first-name" className="h-12 bg-slate-50 border-slate-200 rounded-xl focus:ring-[#5D00D6]/20 focus:border-[#5D00D6]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Last Name <span className="text-red-500">*</span></Label>
                    <Input id="last-name" className="h-12 bg-slate-50 border-slate-200 rounded-xl focus:ring-[#5D00D6]/20 focus:border-[#5D00D6]" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job-title" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Job Title <span className="text-red-500">*</span></Label>
                  <Input id="job-title" className="h-12 bg-slate-50 border-slate-200 rounded-xl focus:ring-[#5D00D6]/20 focus:border-[#5D00D6]" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email <span className="text-red-500">*</span></Label>
                  <Input id="email" type="email" className="h-12 bg-slate-50 border-slate-200 rounded-xl focus:ring-[#5D00D6]/20 focus:border-[#5D00D6]" required />
                </div>

                <div className="pt-4">
                  <C9Button className="w-full h-14 bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-full text-base font-black shadow-xl shadow-purple-900/20">
                    {config.ctaLabel}
                  </C9Button>
                </div>

                <p className="text-[10px] text-slate-400 text-center mt-6 uppercase tracking-widest">
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
