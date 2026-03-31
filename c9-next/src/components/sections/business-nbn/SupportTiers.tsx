import React from 'react';
import { Shield, ShieldCheck, ShieldPlus, CheckCircle } from 'lucide-react';

const tiers = [
  {
    icon: Shield,
    title: 'C9 Standard',
    esla: '12-hour eSLA',
    eslaBg: 'bg-[#F3F4F6]',
    eslaText: 'text-[#374151]',
    body: 'NBN™ 12-hour enhanced SLA with enterprise support. If your service develops a fault, C9 commits to restoration within 12 hours — backed by the NBN™ eSLA program.',
    features: [
      '12-hour restoration commitment',
      'Enterprise-grade support team',
      'Fault escalation management',
      '24/7 monitoring',
    ],
    bottom: 'Included with all plans',
    bottomColor: 'text-[#9CA3AF]',
    dark: false,
    featured: false,
    cardStyle: { border: '0.5px solid rgba(93,0,214,0.15)' } as React.CSSProperties,
  },
  {
    icon: ShieldCheck,
    title: 'C9 Essential',
    esla: '8-hour eSLA',
    eslaBg: 'bg-[#F8F7FF]',
    eslaText: 'text-[#5D00D6]',
    eslaBorder: 'border border-[#5D00D6]',
    body: 'Upgraded to an 8-hour enhanced SLA with enterprise support. Faster fault restoration for businesses where every hour of downtime has a measurable cost on operations and staff productivity.',
    features: [
      '8-hour restoration commitment',
      'Priority fault escalation',
      'Enterprise support team',
      'Proactive fault monitoring',
      'Named account manager',
    ],
    bottom: 'Upgrade from Standard',
    bottomColor: 'text-[#5D00D6] font-semibold',
    dark: false,
    featured: true,
    cardStyle: { border: '1.5px solid #5D00D6' } as React.CSSProperties,
  },
  {
    icon: ShieldPlus,
    title: 'C9 Ultimate',
    esla: '4-hour eSLA',
    eslaBg: 'bg-[rgba(93,0,214,0.2)]',
    eslaText: 'text-[#A855F7]',
    body: 'The fastest available restoration commitment on the NBN™ eSLA program. 4-hour fault restoration for organisations where internet downtime means immediate revenue loss or operational shutdown.',
    features: [
      '4-hour restoration commitment',
      'Fastest available NBN™ eSLA',
      'Priority network escalation',
      'Dedicated fault management',
      'Real-time status notifications',
    ],
    bottom: 'Maximum protection available',
    bottomColor: 'text-[#5D00D6] font-semibold',
    dark: true,
    featured: false,
    cardStyle: { background: '#0F0F1A', border: '0.5px solid rgba(93,0,214,0.3)' } as React.CSSProperties,
  },
];

export default function SupportTiers() {
  return (
    <section
      className="w-full bg-[#F8F7FF] py-24"
      style={{ fontFamily: '"Proxima Nova", sans-serif' }}
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">

        {/* Header */}
        <span className="text-[11px] uppercase tracking-widest text-[#5D00D6] font-semibold block">
          SUPPORT PACKAGES
        </span>
        <h2 className="text-[36px] md:text-[44px] text-[#1A1A2E] font-bold mt-3 leading-[1.25]">
          Choose your support tier.
        </h2>
        <p className="text-[17px] text-[#6B7280] mt-3 max-w-[680px] leading-[1.7]">
          Every Business NBN™ plan includes a support package with an enhanced SLA commitment. eSLA refers to
          Enhanced Service Levels on the NBN™ broadband access network — a defined restoration time C9 commits
          to if your service has a fault.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {tiers.map(({ icon: Icon, title, esla, eslaBg, eslaText, eslaBorder, body, features, bottom, bottomColor, dark, featured, cardStyle }) => (
            <div
              key={title}
              className="rounded-2xl p-7 flex flex-col"
              style={cardStyle}
            >
              {featured && (
                <div className="bg-[#5D00D6] text-white rounded-full px-3 py-1.5 text-[10px] font-semibold w-fit mb-3">
                  Recommended
                </div>
              )}
              <div
                className="w-[52px] h-[52px] rounded-xl flex items-center justify-center shrink-0"
                style={{ background: '#F3EEFF' }}
              >
                <Icon size={24} className="text-[#5D00D6]" />
              </div>
              <h3 className={`text-[22px] font-bold mt-4 ${dark ? 'text-white' : 'text-[#1A1A2E]'}`}>
                {title}
              </h3>
              <span
                className={`text-[11px] font-semibold rounded-full px-3 py-1 mt-2 w-fit ${eslaBg} ${eslaText} ${eslaBorder || ''}`}
              >
                {esla}
              </span>
              <p className={`text-[14px] leading-[1.65] mt-4 ${dark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                {body}
              </p>
              <div className="flex flex-col gap-2.5 mt-5 flex-1">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#5D00D6] shrink-0" />
                    <span className={`text-[13px] ${dark ? 'text-white' : 'text-[#1A1A2E]'}`}>{f}</span>
                  </div>
                ))}
              </div>
              <div
                className={`text-[12px] mt-5 pt-5 ${bottomColor}`}
                style={{ borderTop: '0.5px solid rgba(93,0,214,0.1)' }}
              >
                {bottom}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-[12px] text-[#9CA3AF] italic text-center mt-8 max-w-[600px] mx-auto leading-[1.7]">
          eSLA refers to Enhanced Service Levels on the nbn™ broadband access network. Restoration times apply to
          NBN™ network faults. C9 manages all fault lodgement and escalation on your behalf.
        </p>

      </div>
    </section>
  );
}
