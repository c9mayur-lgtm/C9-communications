import React from 'react';

interface BenefitSubItem {
  title: string;
  description: string;
}

interface ServiceDetailBenefitsProps {
  title: string;
  intro: string;
  bullets: string[];
  subBenefits: BenefitSubItem[];
  imageSrc: string;
}

export const ServiceDetailBenefits = ({ 
  title, 
  intro, 
  bullets, 
  subBenefits, 
  imageSrc 
}: ServiceDetailBenefitsProps) => {
  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Text Content */}
          <div className="flex flex-col">
            <h2 className="c9-section-heading mb-6" >
              {title}
            </h2>
            
            <p className="text-[18px] text-gray-500 mb-8 leading-relaxed font-normal" >
              {intro}
            </p>

            {/* Bullets List */}
            <ul className="space-y-3 mb-10">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-500 text-[16px] font-normal">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></span>
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Sub-Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {subBenefits.map((item, i) => (
                <div key={i} className="flex flex-col gap-2.5 pl-4 border-l-2 border-[#012FB7]/20 hover:border-[#012FB7] transition-colors duration-300">
                  <h4 className="text-[20px] font-bold text-[#0c1024] leading-tight" >
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-[16px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-full min-h-[400px]">
            <img 
              src={imageSrc} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover duration-700 group-hover:scale-110" 
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
};

