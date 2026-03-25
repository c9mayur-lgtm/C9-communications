import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
}

interface ServiceFeatureScrollProps {
  title: string;
  description: string;
  features: FeatureItem[];
}

export const ServiceFeatureScroll = ({ 
  title, 
  description, 
  features 
}: ServiceFeatureScrollProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Content */}
          <div className="lg:sticky lg:top-32 flex flex-col pt-4">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              {title}
            </h2>
            <p className="text-gray-500 text-[16px] md:text-[18px] leading-relaxed max-w-[440px] mb-8">
              {description}
            </p>
          </div>

          {/* Right Column: List of Features */}
          <div className="flex flex-col">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className={`py-8 flex items-start gap-8 ${i !== features.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#012FB7] flex items-center justify-center p-2.5 mt-1.5 shadow-[0_4px_10px_rgba(1,47,183,0.3)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-[20px] md:text-[22px] font-bold text-[#0c1024]" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed max-w-[400px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
