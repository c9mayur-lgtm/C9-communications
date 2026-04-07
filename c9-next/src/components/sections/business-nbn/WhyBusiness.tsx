import React from 'react';
import { Gauge, Clock, UserCheck } from 'lucide-react';

const cards = [
  {
    icon: Gauge,
    title: 'Guaranteed bandwidth available',
    body: 'Business NBN™ Enterprise Ethernet offers High CoS — 100% committed, guaranteed bandwidth. Consumer plans are best-effort only. When the network is congested, your speed drops. With High CoS, it doesn\'t.',
    tag: 'High CoS option available',
  },
  {
    icon: Clock,
    title: 'Enhanced SLA — not a consumer helpline',
    body: 'Business NBN™ Enterprise Ethernet includes a 12-hour enhanced SLA as standard — with options to upgrade to 8-hour or 4-hour restoration targets. Consumer NBN™ has no guaranteed restoration time. When your internet goes down, ours has a commitment behind it.',
    tag: 'eSLA from 4 hours',
  },
  {
    icon: UserCheck,
    title: 'Dedicated engineer and account manager',
    body: 'Every C9 Business NBN™ client gets a dedicated account manager who knows your environment. Not a call centre. Not a ticketing system. A named person who is accountable for your connection and picks up the phone when you call.',
    tag: 'Named account manager',
  },
];

export default function WhyBusiness() {
  return (
    <section
      className="w-full bg-[#F8F7FF] py-12 md:py-16"
      style={{ fontFamily: '"Proxima Nova", sans-serif' }}
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">

        {/* Header */}
        <span className="c9-eyebrow block">
          BUSINESS GRADE VS CONSUMER
        </span>
        <h2 className="c9-section-heading mt-3 max-w-3xl">
          Not all NBN™ is created equal. Business NBN™ is different — here's how.
        </h2>
        <p className="c9-body mt-3 max-w-[640px]">
          Consumer NBN™ is designed for households. Business NBN™ is designed for businesses that depend on
          their connection. These are the differences that matter.
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
