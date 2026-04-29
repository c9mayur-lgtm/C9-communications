import React from 'react';
import { Building2, AlertTriangle, FileCheck, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DefenseSection() {
  const scenarios = [
    {
      icon: Building2,
      title: "Regulated industry",
      body: "Healthcare, finance, legal, and government organisations with compliance obligations that require formal Essential 8 evidence."
    },
    {
      icon: AlertTriangle,
      title: "Post-incident or near-miss",
      body: "Organisations that have experienced ransomware, data breach, or a significant security event and need to rebuild with a verified security posture."
    },
    {
      icon: FileCheck,
      title: "Compliance audit requirement",
      body: "Businesses facing cyber insurance renewals, board scrutiny, or regulatory audit that require documented security controls and evidence."
    }
  ];

  return (
    <section className="bg-[#0F0F1A] py-24" >
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
          
          {/* LEFT */}
          <div className="flex flex-col items-start max-w-[640px]">
            <div className="bg-[#5D00D6] text-white px-4 py-1.5 rounded-none text-[11px] font-bold tracking-[0.2em] uppercase mb-8 inline-flex items-center">
              C9 Defense
            </div>
            
            <h2 className="c9-section-heading !text-white mb-8">
              Some organisations need more than a baseline. C9 Defense is built for them.
            </h2>
            
            <p className="text-[17px] text-[#9CA3AF] leading-[1.75] mb-12 font-normal">
              If your organisation operates in a regulated industry, has experienced a security incident, or has been told by your board, insurer, or auditor that your current posture is insufficient — the Managed IT security baseline is a starting point, not a destination.
            </p>

            <div className="flex flex-col gap-4 w-full">
              {scenarios.map((sc, idx) => (
                <div key={idx} className="bg-[#1A1A2E] rounded-none p-5 flex gap-5 items-start transition-all hover:-translate-y-1 hover:bg-[#1A1A2E]/80 border border-white/5">
                  <div className="shrink-0 mt-0.5 w-10 h-10 bg-[#5D00D6]/10 rounded-none flex items-center justify-center">
                    <sc.icon size={20} className="text-[#5D00D6]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[17px] font-bold text-white md:text-[18px] tracking-tight">{sc.title}</span>
                    <span className="text-[14px] text-[#9CA3AF] leading-relaxed mt-1.5 font-normal">{sc.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#1A1A2E] border border-purple-700/50 rounded-none p-8 md:p-12 shadow-2xl flex flex-col relative overflow-hidden transition-all hover:border-purple-600">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[#5D00D6]/10 blur-[90px] pointer-events-none" />

            <h3 className="c9-section-heading !text-white mb-8 relative z-10">
              C9 Defense includes:
            </h3>

            <div className="flex flex-col gap-5 mt-auto w-full relative z-10">
              {[
                "ACSC Essential 8 implementation",
                "Continuous 24/7 threat monitoring",
                "Incident detection and response",
                "Tested recovery assurance",
                "Formal compliance reporting",
                "Board-ready security posture reports"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle size={12} className="text-[#946CE2] shrink-0 mt-0.5" />
                  <span className="text-[16px] text-white font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/c9-defense" className="w-full bg-[#5D00D6] hover:bg-[#4d00b3] text-white text-[16px] font-bold h-14 rounded-full mt-10 transition-all shadow-xl shadow-purple-900/40 flex items-center justify-center gap-2 relative z-10 group px-0">
                Assess My Organisation with C9 Defense <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            
            <p className="text-[12px] text-[#6B7280] text-center mt-5 font-bold uppercase tracking-widest relative z-10">
              No obligation assessment available
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

