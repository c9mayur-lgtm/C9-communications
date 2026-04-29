import React from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

const F = '"Proxima Nova", sans-serif';

const features = [
  'Scheduled recovery tests on defined cadence',
  'Written test report provided after each test',
  'Issues identified and remediated before an incident — not during one',
  'RTO verified against your agreement',
  'Results shared directly with your team',
];

const reportItems = [
  'Systems and data sets tested',
  'Recovery time achieved vs RTO target',
  'Data recovery point vs RPO target',
  'Issues identified during test',
  'Remediation actions and timeline',
  'Sign-off from C9 engineer',
];

export default function TestingCommitment() {
  return (
    <section className="py-24" style={{ backgroundColor: '#F3EEFF', fontFamily: F }}>
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div
          className="bg-white rounded-none p-8 md:p-10 border max-w-4xl mx-auto"
          style={{ borderColor: 'rgba(93,0,214,0.15)' }}
        >
          <div className="grid lg:grid-cols-[55%_45%] gap-10 items-start">

            {/* LEFT */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#5D00D6] block mb-3" style={{ fontFamily: F }}>
                THE TESTING COMMITMENT
              </span>
              <h3 className="c9-section-heading mt-3" style={{ fontFamily: F }}>
                We test your recovery. Every time. <span className="text-[#5D00D6]">On a schedule.</span>
              </h3>
              <p className="text-[16px] text-[#6B7280] leading-[1.75] mt-4" style={{ fontFamily: F }}>
                Anyone can sell backup software. Almost no one tests whether it actually works. C9 performs scheduled recovery tests on your backup environment — and provides a written test report every time.
              </p>
              <div className="flex flex-col gap-3 mt-6">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle size={12} className="shrink-0 mt-0.5" style={{ color: '#5D00D6' }} />
                    <span className="text-[14px] text-[#0c1024] font-normal leading-relaxed" style={{ fontFamily: F }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#1A1A2E] rounded-xl p-6">
              <p className="text-[12px] uppercase tracking-[0.12em] text-[#6B7280] font-bold mb-4" style={{ fontFamily: F }}>
                WHAT A TEST REPORT INCLUDES
              </p>
              <div className="flex flex-col gap-3">
                {reportItems.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <ChevronRight size={14} className="shrink-0 mt-0.5" style={{ color: '#5D00D6' }} />
                    <span className="text-[14px] text-white leading-[1.5] font-normal" style={{ fontFamily: F }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#374151' }}>
                <p className="text-[14px] text-[#9CA3AF]" style={{ fontFamily: F }}>
                  Reports retained for audit and compliance evidence
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
