'use client';

import React from 'react';
import { Monitor, Server, Cpu, Cloud, Globe, Shield } from 'lucide-react';

const partners = [
  {
    logo: "/partners/microsoft-logo-svgrepo-com.svg",
    title: "Microsoft",
    sub: "Azure, M365, and Surface",
    customClass: "scale-[2.5] origin-center"
  },
  {
    logo: "/partners/Hewlett_Packard_Enterprise_logo.svg",
    title: "HP Enterprise",
    sub: "Servers, storage, and networking"
  },
  {
    logo: "/partners/Dell_Technologies_logo.svg",
    title: "Dell Technologies",
    sub: "Servers, workstations, and storage"
  },
  {
    logo: "/partners/Amazon_Web_Services_Logo.svg",
    title: "Amazon Web Services",
    sub: "Cloud infrastructure and hosting"
  },
  {
    logo: "/partners/Google_Cloud_logo.svg",
    title: "Google Cloud",
    sub: "Cloud platform and workspace"
  },
  {
    logo: "/partners/Veeam_logo.svg",
    title: "Veeam",
    sub: "Backup and disaster recovery"
  }
];

export default function Partners() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="text-center mb-16">
          <span className="font-['Proxima_Nova'] text-[11px] uppercase tracking-[0.1em] text-[color:var(--brand-purple)] font-semibold mb-3 block">
            TECHNOLOGY PARTNERS
          </span>
          <h2 className="font-['Proxima_Nova'] text-[36px] md:text-[44px] text-[#1A1A2E] font-bold mt-2 leading-tight">
            We partner with world-leading technology vendors.
          </h2>
          <p className="font-['Proxima_Nova'] text-[17px] text-[#6B7280] mt-4 max-w-[600px] mx-auto">
            C9 sources and deploys hardware and software from certified partnerships with the vendors your infrastructure depends on — so you get enterprise-grade technology at the right price.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, idx) => {
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border-[0.5px] border-[rgba(93,0,214,0.12)] p-10 text-center flex flex-col items-center gap-4 transition-all hover:border-[color:var(--brand-purple)] group"
              >
                <div className="w-full h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img src={partner.logo} alt={partner.title} className={`max-h-full max-w-[160px] w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all ${partner.customClass || ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 italic">
          <p className="font-['Proxima_Nova'] text-[14px] text-[#6B7280]">
            C9 is vendor-agnostic — we recommend the right technology for your business, not the technology that earns us the highest margin.
          </p>
        </div>
      </div>
    </section>
  );
}
