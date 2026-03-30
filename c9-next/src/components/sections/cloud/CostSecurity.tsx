import React from 'react';
import { TrendingDown, Lock, CheckCircle } from 'lucide-react';

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

export default function CostSecurity() {
  return (
    <section className="bg-white py-24" style={FONT_FAMILY}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT — Cloud cost management */}
          <div className="flex flex-col items-start border-r lg:border-r border-transparent lg:border-[rgba(123,47,190,0.1)] lg:pr-12">
            <div className="w-14 h-14 bg-light-purple-bg rounded-xl flex items-center justify-center shrink-0">
              <TrendingDown size={24} className="text-brand-purple" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-purple mt-6" style={FONT_FAMILY}>
              CLOUD COST MANAGEMENT
            </span>

            <h3 className="text-[28px] font-bold text-text-primary mt-3 leading-tight tracking-tight" style={FONT_FAMILY}>
              Most businesses overspend on cloud. We find exactly where.
            </h3>

            <p className="text-[16px] text-text-secondary leading-[1.75] mt-5 font-normal" style={FONT_FAMILY}>
              Cloud spend has a habit of growing without explanation — unused licences, oversized virtual machines, forgotten storage, and services that were turned on for a project and never switched off. C9 reviews your cloud spend monthly and identifies optimisation opportunities.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {[
                "Monthly cloud spend review and report",
                "Unused resource and licence identification",
                "Right-sizing recommendations",
                "Reserved instance planning",
                "Budget alerts and anomaly detection"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-brand-purple shrink-0" />
                  <span className="text-[14px] text-text-primary font-semibold" style={FONT_FAMILY}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Cloud security */}
          <div className="flex flex-col items-start">
            <div className="w-14 h-14 bg-light-purple-bg rounded-xl flex items-center justify-center shrink-0">
              <Lock size={24} className="text-brand-purple" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-purple mt-6" style={FONT_FAMILY}>
              CLOUD SECURITY
            </span>

            <h3 className="text-[28px] font-bold text-text-primary mt-3 leading-tight tracking-tight" style={FONT_FAMILY}>
              Cloud environments need security governance. Most don't have it.
            </h3>

            <p className="text-[16px] text-text-secondary leading-[1.75] mt-5 font-normal" style={FONT_FAMILY}>
              Moving to cloud does not automatically make your environment more secure. Without proper identity management, conditional access policies, and data governance — cloud can introduce more risk than on-premise infrastructure. C9 manages cloud security as part of the ongoing engagement.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {[
                "Azure AD and identity management",
                "Conditional access policy management",
                "Data loss prevention configuration",
                "Cloud security posture monitoring",
                "Privileged identity management"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-brand-purple shrink-0" />
                  <span className="text-[14px] text-text-primary font-semibold" style={FONT_FAMILY}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
