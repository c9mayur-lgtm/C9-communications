import React from 'react';
import { Upload, Settings } from 'lucide-react';

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

export default function DualAudience() {
  return (
    <section className="bg-white py-24" style={FONT_FAMILY}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] w-full">
        <div className="text-center md:text-left">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-purple" style={FONT_FAMILY}>
            TWO SITUATIONS. SAME SOLUTION.
          </span>
          <h2 className="text-[30px] md:text-[42px] font-bold text-text-primary mt-4 leading-tight tracking-tight" style={FONT_FAMILY}>
            Whether you're migrating or managing —<br className="hidden md:block" /> C9 owns the outcome.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-10 flex flex-col border border-[rgba(123,47,190,0.15)] transition-all duration-200 hover:border-brand-purple hover:-translate-y-0.5 shadow-sm">
            <div className="w-12 h-12 bg-light-purple-bg rounded-xl flex items-center justify-center shrink-0">
              <Upload className="text-brand-purple" size={22} />
            </div>

            <span className="text-[11px] font-bold uppercase text-brand-purple mt-6 tracking-[0.08em]" style={FONT_FAMILY}>
              THE MIGRATION
            </span>

            <h3 className="text-[20px] font-bold text-text-primary mt-2 leading-tight" style={FONT_FAMILY}>
              Moving to cloud for the first time.
            </h3>

            <p className="text-[16px] text-text-secondary leading-[1.7] mt-3 font-normal" style={FONT_FAMILY}>
              On-premise infrastructure reaching end-of-life, a vendor pushing you to cloud, or a strategic decision to modernise. C9 manages the migration end-to-end — assessment, design, cutover, and ongoing management from day one.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "On-premise to cloud",
                "Server migrations",
                "M365 migrations",
                "Azure setup"
              ].map((tag, i) => (
                <span key={i} className="bg-light-purple-bg text-brand-purple px-3 py-1 rounded-full text-[11px] font-bold tracking-tight" style={FONT_FAMILY}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-10 flex flex-col border border-[rgba(123,47,190,0.15)] transition-all duration-200 hover:border-brand-purple hover:-translate-y-0.5 shadow-sm">
            <div className="w-12 h-12 bg-light-purple-bg rounded-xl flex items-center justify-center shrink-0">
              <Settings className="text-brand-purple" size={22} />
            </div>

            <span className="text-[11px] font-bold uppercase text-brand-purple mt-6 tracking-[0.08em]" style={FONT_FAMILY}>
              THE MANAGED ENVIRONMENT
            </span>

            <h3 className="text-[20px] font-bold text-text-primary mt-2 leading-tight" style={FONT_FAMILY}>
              Already in cloud but no one is managing it properly.
            </h3>

            <p className="text-[16px] text-text-secondary leading-[1.7] mt-3 font-normal" style={FONT_FAMILY}>
              Shadow IT, M365 sprawl, Azure costs growing without explanation, and no one accountable for the cloud environment. C9 takes over management of your existing infrastructure and brings it under a properly managed service.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "M365 management",
                "Azure optimisation",
                "Cost reduction",
                "Hybrid cloud"
              ].map((tag, i) => (
                <span key={i} className="bg-light-purple-bg text-brand-purple px-3 py-1 rounded-full text-[11px] font-bold tracking-tight" style={FONT_FAMILY}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
