import React from 'react';
import { Clock, RotateCcw } from 'lucide-react';

const F = '"Proxima Nova", sans-serif';

const cards = [
  {
    icon: Clock,
    title: 'RTO',
    subtitle: 'Recovery Time Objective',
    body: 'How long can your business be offline before the impact becomes critical? RTO defines the maximum acceptable downtime from the moment of an incident to the moment you are operational again.',
    example: 'A business with a 4-hour RTO must be fully operational within 4 hours of a disaster event — not 4 hours after someone notices the problem.',
  },
  {
    icon: RotateCcw,
    title: 'RPO',
    subtitle: 'Recovery Point Objective',
    body: 'How much data can you afford to lose? RPO defines the maximum age of data that you can recover to — meaning if your RPO is 4 hours, your backups must run at least every 4 hours.',
    example: 'A business with a 1-hour RPO and daily backups has a critical gap — they can lose up to 23 hours of data in an incident despite thinking they are protected.',
  },
];

export default function RTOExplainer() {
  return (
    <section id="rto-explainer" className="py-24" style={{ backgroundColor: '#F3EEFF', fontFamily: F }}>
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#5D00D6] block mb-3" style={{ fontFamily: F }}>
            UNDERSTANDING RECOVERY
          </span>
          <h2 className="c9-section-heading mt-3" style={{ fontFamily: F }}>
            Two numbers every business needs to know — <span className="text-[#5D00D6]">and almost none do.</span>
          </h2>
          <p className="text-[17px] text-[#6B7280] mt-4 max-w-[640px] mx-auto leading-relaxed" style={{ fontFamily: F }}>
            Before you can protect your business, you need to understand what you are actually protecting against — and what recovery looks like in a real incident.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-lg p-8 border" style={{ borderColor: 'rgba(93,0,214,0.15)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EDE9FE' }}>
                <card.icon size={22} style={{ color: '#5D00D6' }} />
              </div>
              <h3 className="c9-section-heading mt-4" style={{ fontFamily: F }}>{card.title}</h3>
              <p className="text-[14px] font-bold mt-1" style={{ fontFamily: F, color: '#5D00D6' }}>{card.subtitle}</p>
              <p className="text-[14px] text-[#6B7280] leading-[1.7] mt-4" style={{ fontFamily: F }}>{card.body}</p>
              <div className="rounded-xl p-4 mt-6" style={{ backgroundColor: '#F3EEFF' }}>
                <span className="text-[11px] font-bold uppercase tracking-wider block mb-2" style={{ fontFamily: F, color: '#5D00D6' }}>EXAMPLE</span>
                <p className="text-[14px] text-[#0c1024] leading-[1.5]" style={{ fontFamily: F }}>{card.example}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-5 text-center border mt-6" style={{ borderColor: 'rgba(93,0,214,0.15)' }}>
          <p className="text-[14px] font-bold text-[#0c1024]" style={{ fontFamily: F }}>
            C9 defines your RTO and RPO in your agreement — and tests against them on a scheduled basis. Not estimates. <span className="text-[#5D00D6]">Commitments.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
