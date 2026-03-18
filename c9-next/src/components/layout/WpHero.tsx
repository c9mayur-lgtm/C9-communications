import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const WpHero = () => {
  return (
    <section className="pt-16 pb-10 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20 bg-white overflow-hidden min-h-[450px] lg:min-h-[580px] flex items-center">
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-4 xl:gap-6 items-center relative z-10 w-full">
          <div className="py-4 pr-0 xl:pr-6">
            <h1 className="text-[36px] sm:text-[42px] md:text-[52px] lg:text-[56px] font-bold tracking-tight mb-6 text-[#0c1024] leading-[1.1]" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              We manage your IT, so you can manage your business.
            </h1>
            <p className="text-[17px] md:text-[18px] lg:text-[20px] text-slate-600 mb-8 max-w-[500px] leading-relaxed font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              Take charge of your business continuity with innovative IT solutions designed for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button size="lg" className="w-full sm:w-auto shadow-2xl hover:gap-4 transition-all group px-8">
                Schedule a Free Consultation <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-gray-200">
                Services
              </Button>
            </div>

            {/* Uptime, Support, No Lock-In marks */}
            <div className="flex items-center gap-5 md:gap-8 mt-10 md:mt-12 flex-wrap pb-4">
              {['99.99% Uptime', '24/7 AU Support', 'No Lock-In'].map((t, i) => (
                <span key={i} className="flex items-center gap-2 text-[14px] font-bold text-slate-500 tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                  <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right side rectangular image */}
          <div className="hidden xl:block w-full h-[400px] lg:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2850" 
               alt="Office Team" 
               className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
