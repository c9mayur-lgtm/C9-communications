import React from 'react';

export const OurProcess = () => {
  const steps = [
    { title: "Consultation", desc: "Cloud vs On-Premises assessment" },
    { title: "Design & Strategy", desc: "Tailored architecture for your business" },
    { title: "Installation & Mgmt", desc: "Professional deployment" },
    { title: "Provisioning & Porting", desc: "Minimal business disruption" },
    { title: "Ongoing Support", desc: "Responsive Australian-based team" }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
          <h2 className="text-text-primary text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-tight font-syne">
            How we work with you
          </h2>
        </div>
        
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 pt-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-px border-t border-dashed border-brand-purple/20 z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 group relative z-10 w-full lg:w-48">
              <div className="w-14 h-14 bg-white border-2 border-brand-purple rounded-full flex items-center justify-center text-brand-purple text-xl font-bold font-syne shadow-lg shadow-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                {i + 1}
              </div>
              
              <div className="flex flex-col gap-2">
                 <h4 className="text-text-primary text-xl font-bold font-syne tracking-tight group-hover:text-brand-purple transition-all duration-300">{step.title}</h4>
                 <p className="text-text-secondary text-sm leading-relaxed font-dm-sans opacity-80">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
