 import React from 'react';
import { CheckCircle, MapPin, Shield } from 'lucide-react';

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

export default function AustralianData() {
  return (
    <section className="bg-dark-surface py-24" style={FONT_FAMILY}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 lg:gap-24 items-center">
          
          {/* LEFT */}
          <div className="flex flex-col items-start">
            <span className="bg-brand-purple text-white rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em]" style={FONT_FAMILY}>
              Australian Data Centres
            </span>

            <h2 className="c9-section-heading !text-white mt-6" style={FONT_FAMILY}>
              Your data stays in Australia.<br className="hidden md:block" /> No exceptions.
            </h2>

            <p className="text-[16px] text-[#9CA3AF] leading-[1.75] mt-6 font-normal" style={FONT_FAMILY}>
              For Australian businesses in regulated industries — healthcare, finance, government, and legal — data sovereignty is not a preference. It is a requirement. C9's cloud infrastructure is hosted within Australian data centres, meaning your data never leaves the country.
            </p>

            <p className="text-[16px] text-[#9CA3AF] leading-[1.75] mt-4 font-normal" style={FONT_FAMILY}>
              C9's Backup as a Service is powered by Veeam on the Vocus cloud platform — all data stored in local Australian data centres. Your backups are off-site for resilience and on Australian soil for compliance.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {[
                "All data hosted in Australian data centres",
                "Veeam BaaS on Vocus cloud — local storage",
                "Data sovereignty compliance for regulated industries",
                "Relevant for healthcare, finance, government, and legal"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={12} className="text-brand-purple shrink-0" />
                  <span className="text-[14px] text-white font-medium" style={FONT_FAMILY}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#1A1A2E] rounded-2xl p-7 border border-brand-purple shadow-2xl shadow-purple-900/20">
              <div className="w-10 h-10 bg-brand-purple/10 rounded-xl flex items-center justify-center">
                <MapPin size={20} className="text-brand-purple" />
              </div>
              <h3 className="text-[18px] font-bold text-white mt-5 leading-tight" style={FONT_FAMILY}>
                Backup as a Service
              </h3>
              <p className="text-[16px] text-[#9CA3AF] leading-[1.6] mt-3 font-normal" style={FONT_FAMILY}>
                Veeam-powered backup on the Vocus cloud platform. All backup data hosted within Australian data centres.
              </p>
              <div className="mt-5 pt-5 border-t border-[#374151]">
                <span className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider" style={FONT_FAMILY}>
                  Powered by Veeam · Hosted by Vocus
                </span>
              </div>
            </div>

            <div className="bg-[#1A1A2E] rounded-2xl p-7 border border-[#374151] shadow-xl">
              <div className="w-10 h-10 bg-brand-purple/10 rounded-xl flex items-center justify-center">
                <Shield size={20} className="text-brand-purple" />
              </div>
              <h3 className="text-[18px] font-bold text-white mt-5 leading-tight" style={FONT_FAMILY}>
                Data Sovereignty Compliance
              </h3>
              <p className="text-[16px] text-[#9CA3AF] leading-[1.6] mt-3 font-normal" style={FONT_FAMILY}>
                Healthcare, finance, and government organisations can meet data residency obligations — your data never crosses the Australian border.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
