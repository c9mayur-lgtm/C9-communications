'use client';

import React from 'react';
import { ArrowRight, Phone, CheckCircle2, Shield, Clock, Zap } from 'lucide-react';

const trustSignals = [
  { icon: Clock, text: "Site qualification within 1 business day" },
  { icon: Shield, text: "No obligation to proceed" },
  { icon: CheckCircle2, text: "Australian team" }
];

export default function FinalCTA() {
  return (
    <section 
      className="w-full bg-[#FAFAFA] py-10 md:py-16 border-y border-gray-100 overflow-hidden" 
      style={{ fontFamily: '"Proxima Nova", sans-serif' }}
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-12 w-full max-w-[1240px]">
        <div className="bg-[#5D00D6] rounded-[2rem] p-6 md:p-10 relative overflow-hidden shadow-[0_40px_100px_rgba(93,0,182,0.15)]">
           {/* Abstract Background Accents */}
           <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-[100px]" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-black rounded-full blur-[120px]" />
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-center relative z-10">
              <div className="text-left">
                 <h2 className="text-[24px] md:text-[32px] font-bold text-white leading-[1.1] mb-4">
                     Ready to future-proof your business connectivity?
                 </h2>
                 <p className="text-[14px] md:text-[15px] text-white/80 leading-relaxed mb-6 max-w-[560px]">
                     Tell us your address and bandwidth requirements — C9 will qualify your site and respond within one business day. No obligation.
                  </p>
                 
                 <div className="flex flex-col sm:flex-row items-center gap-4">
                     <button 
                        onClick={() => {
                           const el = document.getElementById('consultation-section');
                           if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full sm:w-auto bg-white text-[#5D00D6] px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-[14px] shadow-lg"
                     >
                        Get a Fibre Quote <ArrowRight size={16} />
                     </button>
                     <a 
                        href="tel:1800000299"
                        className="w-full sm:w-auto bg-[#5D00D6] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4B00AD] transition-all shadow-xl shadow-[#5D00D6]/20 flex items-center justify-center gap-3 text-[14px]"
                     >
                        <Phone size={16} className="text-[#5D00D6]" /> Call 1800 000 299
                     </a>
                 </div>
              </div>

              <div className="grid grid-cols-1 gap-3 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
                 {trustSignals.map((sig, idx) => (
                     <div key={idx} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#5D00D6] group-hover:text-white transition-all shrink-0">
                           <sig.icon size={15} className="text-white" />
                        </div>
                        <span className="text-[13px] font-semibold text-white">{sig.text}</span>
                     </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
