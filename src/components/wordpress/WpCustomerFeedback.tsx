import React from 'react';

const FEEDBACK = [
  {
    logo: 'FOODWORKS',
    color: '#F47920',
    company: 'FOODWORKS',
    quote: '"The rollout was incredibly efficient. C9 communications architected a complete managed network for our multi-site expansion with zero impact to active trading hours. The seamless internet connectivity means our POS systems literally never drop a packet."',
    author: 'Sam R., IT Director'
  },
  {
    logo: 'NOV',
    color: '#E00A3F',
    company: 'NOVA ENTERTAINMENT',
    quote: '"Managing high-volume broadcast infrastructure requires partners who truly understand latency and critical redundancy. The transition to C9 gave us an immediate 30% reduction in downtime alerts and far superior proactive threat intelligence."',
    author: 'Michael T., Technology Lead'
  },
  {
    logo: 'NATIONAL STORAGE',
    color: '#FFD100',
    company: 'NATIONAL STORAGE',
    quote: '"With hundreds of locations, we needed a vendor that could consolidate complex telco feeds into one pane of glass. The Enterprise team delivered precisely that, allowing us to roll out unified access control safely and reliably across the country."',
    author: 'Sarah M., Operations'
  }
];

export const WpCustomerFeedback = () => {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.2em] mb-4 block">TESTIMONIALS</span>
          <h2 className="c9-section-heading">
            WE REALLY VALUE CUSTOMER FEEDBACK
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-[16px]">
            Here's what our largest enterprise partners are saying about their infrastructure shift.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {FEEDBACK.map((item, i) => (
            <div key={i} className="flex flex-col relative">
              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-2xl tracking-tight shadow-md mb-8 mx-auto md:mx-0 overflow-hidden"
                style={{ backgroundColor: item.color }}
              >
                {/* Simulated Logo text */}
                <span className="px-4 text-center">{item.logo}</span>
              </div>
              
              <div className="hidden md:block absolute left-[64px] top-[140px] bottom-0 w-[1px] bg-gray-200 -z-10" />

              <h3 className="text-[18px] font-bold text-[#0c1024] mb-4 text-center md:text-left tracking-wide">
                {item.company}
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed italic mb-4 text-center md:text-left">
                {item.quote}
              </p>
              <p className="text-[#0c1024] font-bold text-center md:text-left text-[14px]">
                {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
