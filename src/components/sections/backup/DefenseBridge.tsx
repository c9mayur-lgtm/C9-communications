import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

const F = '"Proxima Nova", sans-serif';

export default function DefenseBridge() {
  return (
    <section className="bg-[#0F0F1A] py-20" style={{ fontFamily: F }}>
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="bg-[#1A1A2E] border border-[#5D00D6]/30 rounded-lg p-8 md:p-12 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-[#5D00D6]/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-[680px]">
              <div className="inline-flex items-center gap-2 bg-[#5D00D6] text-white px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 rounded-lg">
                <ShieldCheck size={14} /> C9 Defense
              </div>
              <h2 className="c9-section-heading !text-white mb-4" style={{ fontFamily: F }}>
                Recovery Assurance as a formal compliance program.
              </h2>
              <p className="text-[17px] text-[#9CA3AF] leading-[1.75] font-normal" style={{ fontFamily: F }}>
                For organisations requiring tested recovery as part of a formal Essential 8 compliance program — C9 Defense provides Recovery Assurance as a dedicated service. Backup, recovery testing, and compliance evidence in a single documented program.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="https://c9defense.com.au/"
                className="inline-flex items-center gap-2 bg-[#5D00D6] hover:bg-[#4d00b3] text-white font-bold px-8 h-14 rounded-full transition-all shadow-xl shadow-purple-900/40 text-[14px] whitespace-nowrap"
                style={{ fontFamily: F }}
              >
                Learn About C9 Defense
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
