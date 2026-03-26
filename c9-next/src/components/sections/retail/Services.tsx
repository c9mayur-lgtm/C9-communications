'use client';

import React from 'react';
import { Wifi, Server, ShieldCheck, LayoutGrid, MonitorPlay, Phone } from "lucide-react";
import Link from 'next/link';

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

const cards = [
  {
    icon: Wifi,
    title: 'Connectivity & Telco',
    desc: 'Redundant store internet, failover connectivity, and cloud voice — keeping every location online and reachable, no matter what.',
    tags: ['BUSINESS NBN', '4G/5G FAILOVER', 'SD-WAN', 'VOIP'],
    defenseDark: null,
    link: '/telco',
  },
  {
    icon: Server,
    title: 'IT Infrastructure & Helpdesk',
    desc: 'POS-adjacent infrastructure, store networking, back-office workstations, and helpdesk — proactively managed across every location.',
    tags: ['POS SUPPORT', 'STORE NETWORKING', 'HELPDESK'],
    defenseDark: null,
    link: '/managed-it',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'PCI-DSS controls, endpoint protection, and network security — with C9 Defense for retailers requiring continuous monitoring and formal compliance evidence.',
    tags: ['PCI-DSS', 'ESSENTIAL 8', 'ENDPOINT PROTECTION'],
    defenseDark: 'For continuous threat monitoring and PCI-DSS compliance across your entire retail network.',
    link: 'https://c9defense.com.au/',
  },
  {
    icon: LayoutGrid,
    title: 'Microsoft 365 — Managed',
    desc: 'M365 licensing, Teams, and device management for store managers and back-office staff — managed end-to-end by C9.',
    tags: ['MICROSOFT 365', 'INTUNE', 'TEAMS'],
    defenseDark: null,
    link: '/modern-workplace',
  },
  {
    icon: MonitorPlay,
    title: 'In-Store Digital Displays',
    desc: 'In-store digital signage, promotional displays, and meeting room technology for head office — deployed and maintained by C9.',
    tags: ['DIGITAL SIGNAGE', 'PROMOTIONAL DISPLAYS', 'VIDEO CONFERENCING'],
    defenseDark: null,
    link: '/contact',
  },
  {
    icon: Phone,
    title: 'Cloud Voice & Contact Centre',
    desc: 'Cloud phone system, inbound 1300/1800, and Contact Centre for customer service operations — one provider for all your voice needs.',
    tags: ['C9X CLOUD', '1300/1800 NUMBERS', 'CONTACT CENTRE'],
    defenseDark: null,
    link: '/telco',
  },
];

export default function Services() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#854acb] to-[#b699e1] z-0" />
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-10 max-w-2xl px-2 text-left">
          <span className="text-white text-[13px] font-bold uppercase tracking-[0.3em] mb-4 block" style={fontStyle}>
            WHAT C9 MANAGES FOR RETAIL
          </span>
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white leading-[1.1] mb-6" style={fontStyle}>
            Everything under one managed services agreement.
          </h2>
          <p className="text-white text-[16px] md:text-[18px] max-w-[720px] leading-relaxed mt-2 font-normal" style={fontStyle}>
            From store failover connectivity to PCI-DSS payment environments — C9 manages every layer so your stores stay open and profitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((s, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/20 transition-all group flex flex-col h-full border border-transparent hover:border-gray-100">
              <div className="mb-6">
                <s.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-bold mb-4 text-[#0c1024] tracking-tight leading-tight" style={fontStyle}>{s.title}</h3>
              <p className="text-gray-600 text-[16px] mb-8 leading-relaxed flex-grow font-normal" style={fontStyle}>{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((tag, ti) => (
                  <span key={ti} className="text-[10px] font-bold uppercase tracking-widest text-[#5D00D6] bg-[#5D00D6]/10 px-3 py-1.5 rounded-full" style={fontStyle}>
                    {tag}
                  </span>
                ))}
              </div>
              {s.defenseDark && (
                <Link href="https://c9defense.com.au/" className="bg-[#0c1024] flex flex-col px-4 py-3 rounded-md mb-6 hover:bg-[#1C223A] transition-all group/defense">
                  <p className="text-[11px] font-bold text-white mb-1 tracking-wide" style={fontStyle}>Pairs with C9 Defense</p>
                  <p className="text-[11px] font-normal text-white/60 leading-snug group-hover/defense:text-white transition-colors" style={fontStyle}>{s.defenseDark} →</p>
                </Link>
              )}
              <div className="w-full h-[1px] bg-gray-200 mt-auto mb-6"></div>
              <Link href={s.link} className="flex items-center text-[12px] font-bold text-[#5D00D6] group-hover:underline uppercase tracking-[0.15em]" style={fontStyle}>
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
