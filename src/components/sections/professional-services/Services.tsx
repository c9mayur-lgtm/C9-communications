'use client';

import React from 'react';
import { Wifi, Server, ShieldCheck, LayoutGrid, MonitorPlay, Phone } from 'lucide-react';
import Link from 'next/link';

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

const cards = [
  {
    icon: Wifi,
    title: 'Connectivity & Telco',
    desc: 'Redundant internet, Fast Fibre, and cloud voice — keeping your offices and remote staff connected and reachable at all times.',
    tags: ['Small Business nbn™', 'FAST FIBRE', 'FAILOVER', 'VOIP'],
    defenseDark: null,
    link: '/telco',
  },
  {
    icon: Server,
    title: 'IT Infrastructure & Helpdesk',
    desc: 'Secure document environments, workstations, networking, and helpdesk — proactively managed so your fee earners are never blocked by technology.',
    tags: ['SERVERS', 'WORKSTATIONS', 'NETWORKING', 'HELPDESK'],
    defenseDark: null,
    link: '/managed-it',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'Essential 8 implementation, encrypted storage, access control, and endpoint protection — with C9 Defense for firms requiring continuous monitoring and formal compliance.',
    tags: ['ESSENTIAL 8', 'ENDPOINT PROTECTION', 'ACCESS CONTROL'],
    defenseDark: 'For continuous monitoring and documented compliance across your firm.',
    link: 'https://c9defense.com.au/',
  },
  {
    icon: LayoutGrid,
    title: 'Microsoft 365 — Managed',
    desc: 'M365 licensing, Teams, SharePoint document libraries, and secure client portal configuration — managed end-to-end so your practice environment is always current and secure.',
    tags: ['LICENSING', 'TEAMS GOVERNANCE', 'SHAREPOINT'],
    defenseDark: null,
    link: '/modern-workplace',
  },
  {
    icon: MonitorPlay,
    title: 'Meeting Rooms & Workspaces',
    desc: 'Teams-certified meeting rooms and video conferencing for client-facing spaces — professional, reliable, and fully managed by C9.',
    tags: ['TEAMS-CERTIFIED', 'VIDEO CONFERENCING', 'DIGITAL DISPLAYS'],
    defenseDark: null,
    link: '/contact',
  },
  {
    icon: Phone,
    title: 'Cloud Voice & Inbound',
    desc: 'C9 phone system cloud phone system, inbound 1300/1800, and direct routing through Teams — one provider for all your voice needs across every office.',
    tags: ['C9 phone system CLOUD', '1300/1800 NUMBERS', 'TEAMS DIRECT ROUTING'],
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
          <span className="text-white text-[14px] font-bold uppercase tracking-[0.3em] mb-4 block" style={fontStyle}>
            WHAT C9 MANAGES FOR PROFESSIONAL SERVICES
          </span>
          <h2 className="c9-section-heading !text-white mb-6" style={fontStyle}>
            Everything under one managed services agreement.
          </h2>
          <p className="text-white text-[16px] md:text-[18px] max-w-[720px] leading-relaxed mt-2 font-normal" style={fontStyle}>
            From secure document environments to client-facing meeting rooms — C9 manages every layer so your fee earners can focus on clients, not technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white p-8 md:p-10 rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/20 transition-all flex flex-col h-full border border-transparent hover:border-gray-100">
                <div className="mb-6">
                  <Icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
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
