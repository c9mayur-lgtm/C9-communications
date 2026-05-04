'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInquiry } from '@/components/context/InquiryContext';

const F = '"Proxima Nova", sans-serif';

export default function Hero() {
  const { setInquiryMessage } = useInquiry();

  const handleAssessmentRequest = () => {
    setInquiryMessage("I'm interested in a professional backup and disaster recovery assessment for my business.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRTO = () => {
    document.getElementById('rto-explainer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-28" style={{ fontFamily: F }}>
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#5D00D6]/4 blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-8 relative z-10 w-full" style={{ maxWidth: '1240px' }}>
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start max-w-[640px]">
            <Badge variant="outline" className="bg-[#5D00D6]/10 text-[#5D00D6] border-none mb-6 rounded-lg px-4 py-1.5 font-bold tracking-widest text-[11px] uppercase">
              Managed IT · Backup & Disaster Recovery
            </Badge>
            <h1 className="text-[38px] md:text-[52px] lg:text-[62px] tracking-tight font-bold text-[#0c1024] leading-[1.08] mb-6" style={{ fontFamily: F }}>
              A backup that's never been tested isn't a backup. It's a <span className="text-[#5D00D6]">hope.</span>
            </h1>
            <p className="text-[18px] text-[#6B7280] leading-[1.7] max-w-[560px] font-normal mb-8" style={{ fontFamily: F }}>
              C9 manages backup, disaster recovery, and business continuity for Australian businesses — with tested recovery procedures, defined RTOs, and a team that owns the outcome if something goes wrong.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto">
              <Button onClick={handleAssessmentRequest} className="flex-1 sm:flex-none bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 h-14 rounded-full font-bold transition-all text-[14px] shadow-lg shadow-purple-900/20 border-none" style={{ fontFamily: F }}>
                Assess My Backup Environment <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <button onClick={scrollToRTO} className="flex-1 sm:flex-none flex items-center justify-center text-[#1A1A2E] border border-[#5D00D6]/20 hover:bg-slate-50 px-8 h-14 rounded-full font-bold transition-all text-[14px]" style={{ fontFamily: F }}>
                What is RTO and RPO? <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-[#5D00D6]/20 pl-4 mt-6">
              {['Tested recovery — not assumed', 'Defined RTO in your agreement', 'Ransomware-resistant storage'].map((t, i) => (
                <p key={i} className="text-[14px] font-bold text-[#1A1A2E] tracking-tight" style={{ fontFamily: F }}>· {t}</p>
              ))}
            </div>
          </div>

          <div className="w-full bg-[#1A1A2E] rounded-2xl p-6 shadow-2xl shadow-purple-900/10">
            <p className="text-[12px] uppercase tracking-[0.12em] text-[#6B7280] font-bold mb-4" style={{ fontFamily: F }}>YOUR RECOVERY COMMITMENTS</p>
            {[
              { label: 'RTO', value: 'Defined', sub: 'Recovery Time Objective', tag: 'In your agreement', tagBg: '#1F1135', tagText: '#946CE2' },
              { label: 'RPO', value: 'Defined', sub: 'Recovery Point Objective', tag: 'In your agreement', tagBg: '#1F1135', tagText: '#946CE2' },
              { label: 'TESTING', value: 'Scheduled', sub: 'Recovery verification', tag: 'Not assumed', tagBg: '#065F46', tagText: '#D1FAE5', last: true },
            ].map((row, i) => (
              <div key={i} className={`flex justify-between items-center py-4 ${!row.last ? 'border-b border-[#374151]' : ''}`}>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.06em] text-[#6B7280] font-bold" style={{ fontFamily: F }}>{row.label}</p>
                  <p className="text-[22px] font-bold text-white mt-1 leading-none" style={{ fontFamily: F }}>{row.value}</p>
                </div>
                <div className="text-right">
                  <p className="text-[12px] text-[#9CA3AF]" style={{ fontFamily: F }}>{row.sub}</p>
                  <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded mt-1" style={{ fontFamily: F, backgroundColor: row.tagBg, color: row.tagText }}>{row.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
