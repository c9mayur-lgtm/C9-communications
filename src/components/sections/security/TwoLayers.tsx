import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TwoLayers() {
  return (
    <section className="bg-white py-24" >
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="mb-16">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#5D00D6] block mb-6">
            UNDERSTANDING YOUR SECURITY OPTIONS
          </span>
          <h2 className="c9-section-heading mb-6 max-w-2xl">
            Security baseline versus enterprise defence. Here's the difference.
          </h2>
          <p className="text-[18px] text-[#6B7280] leading-relaxed max-w-[640px] font-normal">
            C9 provides two levels of security coverage. Understanding which one your organisation needs starts with an honest assessment of your risk profile and compliance obligations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT CARD */}
          <div className="bg-white rounded-lg border border-[#5D00D6]/15 p-8 md:p-12 shadow-2xl shadow-[#5D00D6]/5 flex flex-col items-start transition-all hover:-translate-y-1">
            <div className="bg-[#F3EEFF] text-[#5D00D6] text-[11px] uppercase font-bold tracking-widest px-4 py-2 rounded-lg mb-8 inline-block shadow-sm">
              Managed IT — Security Baseline
            </div>

            <h3 className="c9-section-heading mb-4">
              Included with every<br/>Managed IT engagement.
            </h3>

            <p className="text-[16px] text-[#6B7280] leading-relaxed mb-10 font-normal">
              Every C9 Managed IT client receives a security baseline as standard — no additional cost, no separate engagement required.
            </p>

            <div className="flex flex-col gap-5 mt-auto w-full">
              {[
                "Endpoint protection on all devices",
                "Patch management and vulnerability scanning",
                "Multi-factor authentication enforcement",
                "Email filtering and anti-phishing",
                "Managed backup with recovery testing",
                "User access controls and offboarding",
                "Security awareness basics"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle size={12} className="text-[#5D00D6] shrink-0 mt-0.5" />
                  <span className="text-[16px] text-[#1A1A2E] font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#0c1024] rounded-lg border border-[#5D00D6] p-8 md:p-12 shadow-2xl shadow-purple-900/40 flex flex-col items-start transition-all hover:-translate-y-1 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#5D00D6]/10 blur-[80px] pointer-events-none rounded-lg" />

            <div className="bg-[#5D00D6] text-white text-[11px] uppercase font-bold tracking-widest px-4 py-2 rounded-lg mb-8 inline-block shadow-lg relative z-10">
              C9 Defense — Enterprise Layer
            </div>

            <h3 className="c9-section-heading !text-white mb-4 relative z-10">
              For organisations with elevated<br/>risk or compliance obligations.
            </h3>

            <p className="text-[16px] text-[#9CA3AF] leading-relaxed mb-10 font-normal relative z-10">
              C9 Defense is a dedicated cybersecurity program — not a feature of Managed IT. It is purpose-built for organisations that need formal compliance, continuous monitoring, and tested recovery assurance.
            </p>

            <div className="flex flex-col gap-5 mt-auto w-full relative z-10">
              {[
                "ACSC Essential 8 implementation",
                "Continuous 24/7 threat monitoring",
                "Incident detection and response",
                "Penetration testing and red team exercises",
                "Formal compliance reporting and evidence",
                "Tested recovery — not assumed",
                "Board-ready security posture reporting"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle size={12} className="text-[#946CE2] shrink-0 mt-0.5" />
                  <span className="text-[16px] text-white font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <Link href="https://c9defense.com.au/" className="w-full mt-10 relative z-10">
              <button className="w-full bg-[#5D00D6] hover:bg-[#4d00b3] text-white text-[16px] font-bold h-14 rounded-full transition-all shadow-xl shadow-purple-900/30 flex items-center justify-center gap-2 group">
                Learn About C9 Defense <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

