import React from 'react';
import { Gauge, Clock, UserCheck } from 'lucide-react';

const cards = [
  {
    icon: Gauge,
    title: 'Growing Teams',
    body: 'As you add more staff, your demand for bandwidth increases. A small business nbn connection ensures everyone stays productive without slowing down.',
    tag: 'Scalable Bandwidth',
  },
  {
    icon: Clock,
    title: 'Cloud & SaaS Usage',
    body: 'From Microsoft 365 to Xero and Zoom, your business runs on the cloud. You need a stable connection that won\'t dropout during critical tasks.',
    tag: 'Cloud-Optimised',
  },
  {
    icon: UserCheck,
    title: 'Mission Critical Reliability',
    body: 'When your internet is down, your business stops. We provide the stability and support needed to keep you online and operational 24/7.',
    tag: 'Business Continuity',
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
          Is your current internet holding your business back?
        </h2>
        <p className="c9-body mt-3 max-w-[640px]">
          If your team is growing, moving to the cloud, or simply cannot afford to be offline, it's time for a dedicated small business nbn connection.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {cards.map(({ icon: Icon, title, body, tag }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 flex flex-col border transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5D00D6] hover:shadow-lg group"
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

