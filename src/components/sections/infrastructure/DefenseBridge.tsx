import { Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DefenseBridge() {
  return (
    <section className="w-full bg-white py-16 px-6 relative">
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        
        <div className="bg-[#0A0A14] rounded-[24px] p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-6 lg:gap-10 shadow-2xl shadow-purple-900/10 max-w-[1020px] mx-auto border border-white/5 relative overflow-hidden">
          
          {/* Subtle glow / gradient behind */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[color:var(--brand-purple)]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Icon */}
          <div className="w-20 h-20 md:w-[88px] md:h-[88px] bg-[#161622] rounded-[20px] flex items-center justify-center shrink-0 border border-white/5 z-10 shadow-inner">
            <Shield className="w-9 h-9 md:w-[42px] md:h-[42px] text-[#9D72FF]" strokeWidth={1.5} />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10 py-2">
            <h3 className="font-['Proxima_Nova'] text-[24px] md:text-[28px] lg:text-[34px] font-bold text-white leading-[1.1] tracking-tight mb-3">
              Protecting Australian organisations<br className="hidden md:block" /> with enterprise cybersecurity
            </h3>
            <p className="font-['Proxima_Nova'] text-[16px] md:text-[18px] text-[#A0A0B0] font-medium tracking-wide">
              Essential 8 compliance, continuous defence, and tested recovery.
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0 z-10 w-full md:w-auto flex justify-center md:justify-end pl-0 md:pl-4">
            <Link 
              href="/c9-defense" 
              className="group flex items-center justify-center gap-2 border border-[#5D00D6]/50 bg-transparent hover:bg-[#5D00D6]/10 text-white font-['Proxima_Nova'] font-bold text-[14px] h-[48px] px-8 rounded-full transition-all w-full md:w-auto shadow-[0_0_20px_rgba(93,0,214,0.15)]"
            >
              Discover C9 Defense <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
