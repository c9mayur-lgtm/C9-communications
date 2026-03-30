import React from 'react';
import { TrendingUp, DollarSign, Sliders } from 'lucide-react';

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

export default function WhyCloud() {
  const points = [
    {
      icon: TrendingUp,
      title: "Scale without the infrastructure headache",
      body: "There's no need to allocate additional resources, staff, or licences to cope with business growth. C9 provides the infrastructure and management layer — and scales it as your business needs change. You focus on growth, we handle the underlying platform."
    },
    {
      icon: DollarSign,
      title: "Predictable costs, no capital expenditure",
      body: "Forget on-premises software licences and expensive infrastructure investments. C9 delivers cloud as a fixed monthly managed service — full access, known cost, no surprise capital spend at renewal time."
    },
    {
      icon: Sliders,
      title: "Adjust as your business changes — on demand",
      body: "You are not locked into a platform. Cloud managed by C9 gives you the ability to expand, contract, or change your environment as your business evolves — on demand, without penalty."
    }
  ];

  return (
    <section className="bg-light-purple-bg py-24" style={FONT_FAMILY}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] w-full">
        <div className="mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-purple" style={FONT_FAMILY}>
            WHY CLOUD WITH C9
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-text-primary mt-4 leading-tight tracking-tight" style={FONT_FAMILY}>
            Built for optimum speed, agility, and managed simplicity.
          </h2>
          <p className="text-[16px] text-text-secondary mt-3 max-w-[640px] leading-relaxed font-normal" style={FONT_FAMILY}>
            Cloud done right removes complexity — not just hardware. Here's what businesses experience when C9 manages their cloud environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {points.map((point, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-8 border border-[rgba(123,47,190,0.15)] transition-all duration-200 hover:border-brand-purple hover:-translate-y-0.5 shadow-sm"
            >
              <div className="w-12 h-12 bg-light-purple-bg rounded-xl flex items-center justify-center mb-6">
                <point.icon size={22} className="text-brand-purple" />
              </div>
              <h3 className="text-[18px] font-bold text-text-primary leading-tight mb-4 tracking-tight" style={FONT_FAMILY}>
                {point.title}
              </h3>
              <p className="text-[16px] text-text-secondary leading-[1.7] font-normal" style={FONT_FAMILY}>
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
