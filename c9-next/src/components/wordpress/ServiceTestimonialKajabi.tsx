'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id?: number | string;
  name: string;
  role: string | React.ReactNode;
  content: string;
  image?: string;
  avatar?: string | React.ReactNode;
  metric?: string;
  metricLabel?: string;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "David Chen",
    role: "Operations Director",
    content: "Consolidating our nationwide connectivity and IT infrastructure under C9 Communications was the best strategic move we made. Their enterprise Fibre nbn eliminated our downtime, and having a single, proactive Australian support team means zero IT headaches.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    metric: "99.99%",
    metricLabel: "Network Uptime"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    content: "C9 executed a flawless migration of our staff to Microsoft 365 while completely hardening our security posture. Their zero-touch device deployment via Intune saved our IT team hundreds of setup hours and standardized our hybrid workforce seamlessly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    metric: "300+",
    metricLabel: "Hours Saved"
  },
  {
    id: 3,
    name: "Michael Ross",
    role: "Managing Director",
    content: "The strategic roadmap provided by C9 aligned our technology stack perfectly with our aggressive growth targets. They don't just fix issues; they engineer sophisticated, centralized infrastructure that scales dynamically. Truly unmatched enterprise consultancy.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    metric: "4X",
    metricLabel: "Capacity Growth"
  }
];

interface ServiceTestimonialKajabiProps {
  testimonials?: Testimonial[];
}

export const ServiceTestimonialKajabi = ({ testimonials = DEFAULT_TESTIMONIALS }: ServiceTestimonialKajabiProps) => {
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const [current, setCurrent] = useState(testimonials.length); 
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [winWidth, setWinWidth] = useState(1240);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => setWinWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardWidth = winWidth < 1024 ? winWidth * 0.8 : 900;
  const gap = 24;
  const slideUnit = cardWidth + gap;

  // Infinite loop wrap logic
  useEffect(() => {
    if (current === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(testimonials.length);
      }, 700);
    } else if (current === infiniteTestimonials.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(testimonials.length * 2 - 1);
      }, 700);
    } else {
      setIsTransitioning(true);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current, testimonials.length, infiniteTestimonials.length]);

  const next = () => {
    if (current < infiniteTestimonials.length - 1) {
      setCurrent(c => c + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(c => c - 1);
    }
  };

  // Center alignment offset
  const initialOffset = (winWidth - cardWidth) / 2;
  const xTranslate = initialOffset - (current * slideUnit);

  const realIndex = current % testimonials.length;

  return (
    <section className="py-16 bg-[#000000] overflow-hidden text-white">
      <div className="container mx-auto max-w-full px-0">
        <h2 className="c9-section-heading text-center mb-10 px-6" >
          Why leaders trust C9 Communications
        </h2>

        <div className="relative">
          {/* Carousel Track Container */}
          <div className="relative">
            <motion.div 
              className="flex gap-[24px]"
              animate={{ x: xTranslate }}
              transition={isTransitioning ? { duration: 0.7, ease: [0.32, 0.72, 0, 1] } : { duration: 0 }}
            >
              {infiniteTestimonials.map((t: Testimonial, i: number) => {
                const isActive = i === current;
                return (
                  <motion.div 
                    key={i} 
                    animate={{ 
                      opacity: isActive ? 1 : 0.1, 
                      scale: isActive ? 1 : 0.98,
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ width: cardWidth }}
                    className="bg-[#111111] rounded-[16px] overflow-hidden border border-white/5 shrink-0"
                  >
                    <div className="grid md:grid-cols-[0.7fr_1.3fr] items-stretch min-h-[350px] lg:min-h-[420px]">
                      {/* Left side: Image or Avatar Fallback */}
                      <div className="relative h-[200px] md:h-auto overflow-hidden bg-white/5 flex items-center justify-center">
                        {t.image ? (
                          <img 
                            src={t.image} 
                            alt={t.name}
                            className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
                          />
                        ) : (
                          <div className="text-[64px] font-bold text-white/20 select-none">
                            {t.avatar || t.name.charAt(0)}
                          </div>
                        )}
                      </div>

                      {/* Right side: Content */}
                      <div className="p-6 md:p-8 lg:p-10 flex flex-col">
                        <div className="text-white/20 mb-4 scale-x-[-1] inline-block">
                          <Quote size={28} fill="currentColor" />
                        </div>

                        <p className="text-[15px] md:text-[17px] lg:text-[19px] text-gray-300 leading-relaxed mb-6 font-normal italic" >
                          "{t.content}"
                        </p>

                        <div className="flex items-end justify-between mt-auto border-t border-white/5 pt-6">
                          <div>
                            <h4 className="text-[16px] md:text-[18px] font-bold mb-0.5 tracking-tight">{t.name}</h4>
                            <p className="text-gray-500 text-[12px] font-medium uppercase tracking-wider">{t.role}</p>
                          </div>
                          
                          {t.metric && (
                            <div className="text-right">
                              <span className="text-[32px] md:text-[40px] font-bold tracking-tighter leading-none mb-1 block">
                                {t.metric}
                              </span>
                              <span className="text-gray-600 text-[11px] uppercase tracking-widest font-bold">
                                {t.metricLabel}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="container mx-auto max-w-[900px] px-6">
            {/* Controls Bar */}
            <div className="flex items-center justify-between mt-8">
              {/* Progress/Dots */}
              <div className="flex gap-3">
                {testimonials.map((_: any, i: number) => (
                  <button 
                    key={i}
                    onClick={() => {
                        setIsTransitioning(true);
                        setCurrent(i + testimonials.length);
                    }}
                    className={`h-0.5 transition-all duration-500 rounded-full cursor-pointer ${i === realIndex ? 'w-10 bg-white' : 'w-5 bg-white/10 hover:bg-white/20'}`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button 
                  onClick={prev}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <ChevronLeft size={20} className="text-gray-500 group-hover:text-white transition-all" />
                </button>
                <button 
                  onClick={next}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <ChevronRight size={20} className="text-gray-500 group-hover:text-white transition-all" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

