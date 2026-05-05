import React from 'react';
import { Cloud, PhoneCall, Laptop } from 'lucide-react';

const cards = [
  {
    icon: Cloud,
    title: 'Cloud Tools',
    body: 'Teams using essential cloud tools like Microsoft 365, Xero, and other applications that require consistent connectivity.',
    tag: 'Cloud-Ready',
  },
  {
    icon: PhoneCall,
    title: 'VoIP & Meetings',
    body: 'Businesses using VoIP, Microsoft Teams, or Zoom who need stable audio and video for every client call.',
    tag: 'Stable Voice',
  },
  {
    icon: Laptop,
    title: 'Multiple Users',
    body: 'Offices with multiple users and devices that need consistent performance throughout the workday.',
    tag: 'Office Capacity',
  },
];

export default function WhyBusiness() {
  return (
    <section
      className="w-full bg-[#F8F7FF] py-12 md:py-16"
      
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">

        {/* Header */}
        <span className="c9-eyebrow block">
          WHO THIS IS FOR
        </span>
        <h2 className="c9-section-heading mt-3 max-w-3xl">
          Built for small businesses that rely on stable internet
        </h2>
        <p className="c9-body mt-3 max-w-[640px]">
          If your team uses cloud apps, video calls, or multiple devices, your connection needs to be more than just "fast" — it needs to be reliable.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {cards.map(({ icon: Icon, title, body, tag }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 flex flex-col border transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5D00D6] hover:shadow-lg"
              style={{ border: '0.5px solid rgba(93,0,214,0.15)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: '#F3EEFF' }}
              >
                <Icon size={22} className="text-[#5D00D6]" />
              </div>
              <h3 className="c9-card-title mt-5">
                {title}
              </h3>
              <p className="c9-body mt-2 flex-1">
                {body}
              </p>
              <div
                className="text-[11px] text-[#5D00D6] font-semibold uppercase tracking-wider mt-4 pt-4"
                style={{ borderTop: '0.5px solid rgba(93,0,214,0.12)' }}
              >
                {tag}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

