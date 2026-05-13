import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

interface ServiceBenefitsProps {
  eyebrow: string;
  title: string;
  benefits: BenefitItem[];
}

export const ServiceBenefits = ({ 
  eyebrow, 
  title, 
  benefits 
}: ServiceBenefitsProps) => {
  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-block bg-[#F4F0FA] border border-[#5D00D6]/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.2em]">
              {eyebrow}
            </span>
          </div>
          <h2 className="c9-section-heading" >
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={i} 
                className="bg-white p-10 md:p-12 rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100/50"
              >
                <div className="mb-10 w-16 h-16 rounded-2xl bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-all transform group-hover:scale-110 duration-500">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
              
              <h3 className="text-[20px] font-bold mb-5 text-[#0c1024] tracking-tight leading-tight" >
                {benefit.title}
              </h3>
              
              <p className="text-gray-500 text-[16px] md:text-[18px] mb-10 leading-relaxed flex-grow font-normal" >
                {benefit.description}
              </p>
              
              <div className="pt-8 border-t border-gray-100 mt-auto flex items-center justify-between group-hover:text-[#5D00D6] transition-colors">
                <span className="text-[14px] font-bold uppercase tracking-wider">
                  Learn more
                </span>
                
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

