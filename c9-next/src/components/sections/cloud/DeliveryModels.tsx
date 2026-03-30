import React from 'react';
import { Globe, Lock, Layers } from 'lucide-react';

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

export default function DeliveryModels() {
  const models = [
    {
      icon: Globe,
      title: "Public Cloud",
      body: "Super easy to scale as business needs change, and even easier to set up — all necessary infrastructure, software, and ongoing management is provided and maintained by C9. The right choice for most businesses looking to modernise without complexity.",
      bestFor: "Best for: General business workloads, M365, collaboration, and scalable infrastructure"
    },
    {
      icon: Lock,
      title: "Private Cloud",
      body: "Managed and made available through an organisation's own dedicated infrastructure, private cloud serves one company alone. Geared to handle highly sensitive data — typical in banking, finance, healthcare, and government organisations where data isolation is a regulatory requirement.",
      bestFor: "Best for: Regulated industries, sensitive data, compliance-driven environments"
    },
    {
      icon: Layers,
      title: "Hybrid Cloud",
      body: "A combination of public and private cloud services based on your specific needs. If you need private cloud to store sensitive data but public cloud for day-to-day communications and collaboration — hybrid cloud managed through a single C9 interface is the right answer.",
      bestFor: "Best for: Organisations with mixed data sensitivity, legacy systems, or data sovereignty requirements"
    }
  ];

  return (
    <section className="bg-light-purple-bg py-24" style={FONT_FAMILY}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] w-full">
        <div className="mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-purple" style={FONT_FAMILY}>
            CLOUD DELIVERY MODELS
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-text-primary mt-4 leading-tight tracking-tight" style={FONT_FAMILY}>
            How C9 delivers cloud — and which model fits you.
          </h2>
          <p className="text-[16px] text-text-secondary mt-3 max-w-[640px] leading-relaxed font-normal" style={FONT_FAMILY}>
            C9 tailors every cloud solution to your organisation's unique requirements. Here are the three delivery models and when each one is the right fit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {models.map((model, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-[rgba(123,47,190,0.15)] shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-light-purple-bg rounded-xl flex items-center justify-center mb-6 shrink-0">
                <model.icon size={22} className="text-brand-purple" />
              </div>
              <h3 className="text-[20px] font-bold text-text-primary leading-tight mb-4 tracking-tight" style={FONT_FAMILY}>
                {model.title}
              </h3>
              <p className="text-[16px] text-text-secondary leading-[1.7] font-normal mb-auto" style={FONT_FAMILY}>
                {model.body}
              </p>
              <div className="mt-6 pt-4 border-t border-[rgba(123,47,190,0.1)]">
                <p className="text-[12px] text-text-secondary font-medium italic" style={FONT_FAMILY}>
                  {model.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
