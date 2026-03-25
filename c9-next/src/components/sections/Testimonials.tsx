import React from 'react';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TESTIMONIALS } from '@/lib/constants';

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
          <h2 className="text-text-primary text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-tight font-syne">
            Trusted by businesses across Australia
          </h2>
        </div>
        
        {/* Testimonial Track (CSS Flex with Snap) */}
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-12 mask-fade-r no-scrollbar">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} className="min-w-[320px] md:min-w-[420px] p-10 bg-white border border-brand-purple/5 shadow-sm rounded-3xl snap-center flex flex-col group relative">
              <div className="absolute top-6 right-8 text-brand-purple/10 scale-x-[-1] pointer-events-none">
                 <Quote size={80} fill="currentColor" strokeWidth={0} />
              </div>
              
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="#FACC15" strokeWidth={0} />
                ))}
              </div>
              
              <p className="text-text-secondary text-lg leading-relaxed font-dm-sans mb-10 flex-grow relative z-10 italic">
                "{t.quote}"
              </p>
              
              <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-8 relative z-10">
                <div className="flex flex-col gap-1">
                  <h4 className="text-text-primary font-bold font-syne text-[16px] tracking-tight">{t.name}</h4>
                  <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest font-dm-sans">{t.company}</p>
                </div>
                <Badge variant="secondary" className="bg-light-purple-bg text-brand-purple font-bold px-3 py-1 font-dm-sans rounded-full text-[10px] uppercase tracking-wider">
                  {t.tag}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 pt-8 border-t border-gray-100">
          <Button variant="link" size="lg" className="text-brand-purple font-bold text-base font-dm-sans group">
             Read Our Case Studies <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
      </div>
    </section>
  );
};
