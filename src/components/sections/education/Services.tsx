'use client';

import React from 'react';
import { Wifi, Server, ShieldCheck, LayoutGrid, MonitorPlay, Phone } from 'lucide-react';
import Link from 'next/link';

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

const cards = [
  {
    icon: Wifi,
    title: 'Connectivity & Telco',
    desc: 'Campus-grade internet, Wi-Fi infrastructure, and phone systems — designed for high-density environments and managed end-to-end by C9.',
    tags: ['CAMPUS WI-FI', 'FAST FIBRE', 'SD-WAN', 'VOIP'],
    defenseDark: null,
    link: '/telco',
  },
  {
    icon: Server,
    title: 'IT Infrastructure & Helpdesk',
    desc: 'Student and staff devices, classroom technology, server infrastructure, and helpdesk — proactively managed across your entire campus.',
    tags: ['SERVERS', 'STUDENT DEVICES', 'NETWORKING', 'HELPDESK'],
    defenseDark: null,
    link: '/managed-it',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'Student data protection, endpoint security, and Essential 8 compliance — with C9 Defense for institutions requiring continuous monitoring.',
    tags: ['ESSENTIAL 8', 'ENDPOINT PROTECTION', 'DATA PRIVACY'],
    defenseDark: 'For continuous threat monitoring and Essential 8 compliance across your entire environment.',
    link: 'https://c9defense.com.au/',
  },
  {
    icon: LayoutGrid,
    title: 'Microsoft 365 — Managed',
    desc: 'M365 Education licensing, Teams for Education, SharePoint, and device management via Intune — managed end-to-end for staff and students.',
    tags: ['M365 EDUCATION', 'TEAMS FOR EDUCATION', 'INTUNE'],
    defenseDark: null,
    link: '/modern-workplace',
  },
  {
    icon: MonitorPlay,
    title: 'Classroom & Learning Tech',
    desc: 'Classroom displays, Smart Boards, and Teams-enabled meeting rooms for staff — deployed, configured, and maintained by C9.',
    tags: ['SMART BOARDS', 'DIGITAL DISPLAYS', 'VIDEO CONFERENCING'],
    defenseDark: null,
    link: '/contact',
  },
  {
    icon: Phone,
    title: 'Cloud Voice & Administration',
    desc: 'Cloud phone system and inbound services for administration — reliable, managed voice infrastructure for your entire institution.',
    tags: ['C9 phone system CLOUD', 'ADMIN VOICE', 'TEAMS DIRECT ROUTING'],
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
            WHAT C9 MANAGES FOR EDUCATION
          </span>
          <h2 className="c9-section-heading !text-white mb-6" style={fontStyle}>
            Everything under one managed services agreement.
          </h2>
          <p className="text-white text-[16px] md:text-[18px] max-w-[720px] leading-relaxed mt-2 font-normal" style={fontStyle}>
            From campus Wi-Fi infrastructure to secure student data environments — C9 manages every layer so your educators can focus on learning.
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
