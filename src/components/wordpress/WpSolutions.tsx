'use client';

import Link from 'next/link';
import { MonitorPlay, Monitor, Camera, LayoutGrid, ShieldCheck, BadgeCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: MonitorPlay,
    title: 'Microsoft Teams Meeting Rooms',
    desc: 'Operational detail for deployment and ongoing managed support for Teams-certified meeting room hardware — cameras, audio bars, touch panels, and displays. One-touch join, always ready, always supported.',
    tags: ['Certified Hardware', 'Room Scheduling', '24/7 Support'],
    note: null,
    defense: null,
    defenseDark: null,
    url: '/modern-workplace/collaboration',
  },
  {
    icon: Monitor,
    title: 'Smart Board & Display Solutions',
    desc: 'Interactive smart boards, digital signage, and large-format displays for boardrooms, reception, and common areas — procured, installed, and fully managed by C9.',
    tags: ['Boardroom', 'Reception', 'Digital Signage'],
    note: 'Large-format display solutions available via C9 Lumina →',
    defense: null,
    defenseDark: null,
    url: null,
  },
  {
    icon: Camera,
    title: 'CCTV & Occupancy Monitoring',
    desc: 'IP camera systems with centralised monitoring dashboards, motion analytics, and people-counting intelligence — managed and maintained as part of your IT environment.',
    tags: ['IP Cameras', 'Occupancy Analytics', 'Monitoring Dashboard'],
    note: null,
    defense: null,
    defenseDark: 'For high-fidelity physical + cyber security coverage across your workplace.',
    url: '/modern-workplace/cctv-people-count',
  },
  {
    icon: LayoutGrid,
    title: 'Microsoft 365 — Fully Managed',
    desc: 'Licensing, deployment, security configuration, user onboarding, Teams governance, SharePoint architecture, and ongoing administration. Not just M365 — M365 done properly.',
    tags: ['Licensing', 'Teams Governance', 'SharePoint', 'Intune'],
    note: null,
    defense: null,
    defenseDark: null,
    url: '/modern-workplace/productivity',
  },
  {
    icon: ShieldCheck,
    title: 'Endpoint Detection & Response',
    desc: 'Every device in your organisation — laptops, phones, tablets — monitored, patched, and protected. C9 manages your endpoint fleet so threats are caught before they become incidents.',
    tags: ['All Devices', 'Patch Management', 'Threat Response'],
    note: null,
    defense: null,
    defenseDark: 'For Essential 8 compliance and continuous threat monitoring across your endpoint fleet.',
    url: '/modern-workplace/endpoint-management',
  },
  {
    icon: BadgeCheck,
    title: 'Visitor Management & Access',
    desc: 'Digital visitor sign-in, badge printing, NDA capture, host notifications, and access log reporting — all integrated into your existing IT and compliance infrastructure.',
    tags: ['Visitor Sign-in', 'Access Logs', 'Compliance Reports'],
    note: null,
    defense: null,
    defenseDark: null,
    url: '/modern-workplace/visitor-solution',
  },
];

export const WpSolutions = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Full-width purple-to-white gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#946CE2] to-white z-0" />

      <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-16 gap-4">
          <span className="c9-eyebrow !text-white mb-4 block">COMPLETE WORKPLACE MANAGEMENT</span>
          <h2 className="c9-section-heading !text-white mb-6">
            Your entire workplace.<br />Managed from one place.
          </h2>
          <p className="c9-body !text-white/85 max-w-[720px]">
            From the boardroom screen to the front-door camera — C9 manages every layer of your physical and digital workplace so your team can focus on work, not IT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((s, i) => (
            <div key={i} className="bg-white p-6 md:p-10 rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all flex flex-col h-full relative border border-transparent hover:border-gray-100 focus-within:ring-2 focus-within:ring-[#5D00D6]">
              {s.url && (
                <Link href={s.url} className="absolute inset-0 z-0" aria-label={`View details about ${s.title}`} />
              )}
              
              <div className="relative z-10 flex flex-col flex-grow pointer-events-none">
                {/* Icon */}
                <div className="mb-6">
                  <s.icon size={44} className="text-[#5D00D6]" strokeWidth={1.2} />
                </div>

                {/* Title */}
                <h3 className="c9-card-title mb-3 text-[#0c1024] group-hover:text-[#5D00D6] transition-colors">{s.title}</h3>

                {/* Description */}
                <p className="c9-body mb-6 flex-grow text-slate-600">{s.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 pointer-events-auto">
                  {s.tags.map((tag, ti) => (
                    <span key={ti} className="c9-eyebrow !text-[#5D00D6] !text-[9px] bg-[#5D00D6]/5 px-3 py-1 rounded-full border border-[#5D00D6]/10">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Optional italic note */}
                {s.note && (
                  <p className="text-[14px] text-gray-400 italic mb-4">{s.note}</p>
                )}
              </div>

              {/* Defense callout - ultra-compact stacked style */}
              {s.defenseDark && (
                <a 
                  href="https://c9defense.com.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0c1024] flex flex-col px-3 py-2.5 rounded-lg mb-4 hover:bg-[#1C223A] transition-all group/defense relative z-20 pointer-events-auto"
                >
                    <p className="c9-eyebrow !text-white !text-[8.5px] mb-0.5">Pairs with C9 Defense</p>
                    <p className="c9-body !text-[11px] !text-white/50 !leading-snug group-hover/defense:text-white transition-colors flex items-center gap-1">
                      <span className="flex-1">{s.defenseDark}</span> 
                      
                    </p>
                  </a>
              )}

              {s.url && (
                <div className="mt-auto relative z-10 pointer-events-none">
                  <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
                  <div className="flex items-center c9-eyebrow !text-[#5D00D6] !text-[10px] group-hover:underline">
                    Learn more
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Button size="lg" className="shadow-2xl hover:gap-4 transition-all px-10 h-14 rounded-full font-medium" asChild>
            <Link href="/modern-workplace" className="flex items-center gap-2">View All Workplace Solutions </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
