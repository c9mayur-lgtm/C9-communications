import React from 'react';

interface ServiceImageTextProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
}

export const ServiceImageText = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt = "Service Image",
  reverse = false 
}: ServiceImageTextProps) => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'direction-rtl' : ''}`}>
          
          {/* Image Column */}
          <div className={`relative rounded-[32px] overflow-hidden shadow-2xl shadow-purple-900/10 aspect-[4/3] lg:aspect-[16/9]  ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="absolute inset-0 w-full h-full object-cover duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Content Column */}
          <div className={`flex flex-col ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <h2 className="c9-section-heading mb-6" >
              {title}
            </h2>
            <div className="space-y-6">
              <p className="text-[18px] text-gray-500 leading-relaxed font-normal" >
                {description}
              </p>
              {/* Added a subtle detail to make it feel premium */}
              <div className="pt-4">
                <div className="h-1 w-20 bg-[#012FB7] rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

