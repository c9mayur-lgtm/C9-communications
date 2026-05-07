import React from 'react';

export const OurProcess = () => {
  const steps = [
    { title: "Consultation", desc: "Cloud vs On-Premises assessment" },
    { title: "Design & Strategy", desc: "Tailored architecture for your business" },
    { title: "Installation & Mgmt", desc: "Professional deployment" },
    { title: "Provisioning & Porting", desc: "Minimal business disruption" },
    { title: "Ongoing Support", desc: "Responsive AU-managed team" }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
          <h2 className="c9-section-heading">
            How we work with you
          </h2>
        </div>
        
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 pt-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-px border-t border-dashed border-[#5D00D6]/20 z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 relative z-10 w-full lg:w-48">
              <div className="w-14 h-14 bg-white border-2 border-[#5D00D6] rounded-full flex items-center justify-center text-[#5D00D6] text-xl font-bold shadow-lg shadow-[#5D00D6]/10 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                {i + 1}
              </div>
              
              <div className="flex flex-col gap-2">
                 <h4 className="c9-card-title !text-[18px] group-hover:text-[#5D00D6] transition-all duration-300">{step.title}</h4>
                 <p className="c9-body !text-[14px] opacity-80">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
