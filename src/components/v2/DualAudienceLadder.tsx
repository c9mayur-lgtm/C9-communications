'use client';

;
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const DualAudienceLadder = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 items-stretch relative">
          
          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 -translate-x-1/2 z-0" />
          
          {/* Left Column — No IT Team */}
          <div className="flex flex-col pr-0 md:pr-14 lg:pr-24 z-10">
            <div className="min-h-[280px] md:min-h-[320px] flex flex-col">
              <div className="mb-6 h-8 flex items-center">
                <span className="bg-[#F4F0FA] text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max">
                  NO INTERNAL IT TEAM
                </span>
              </div>
              <h2 className="c9-section-heading mb-6 !text-[28px] md:!text-[38px] leading-[1.1] min-h-[2.2em] flex items-center" >
                Stop managing IT issues and start running your business.
              </h2>
              <p className="c9-body text-slate-600 leading-relaxed text-[16px] max-w-[480px]">
                Tired of troubleshooting internet dropouts and vendor silos? We act as your complete, single-owner IT department—handling everything from voice systems to security with absolute accountability.
              </p>
            </div>
            
            <div className="group/card mt-8 flex-grow flex flex-col">
              <div className="rounded-[28px] overflow-hidden aspect-[16/10] mb-8 shadow-2xl shadow-purple-900/5 relative bg-slate-100 border border-gray-100">
                <img 
                  src="/images/frustrated_worker.png" 
                  alt="Frustrated worker managing IT issues" 
                  className="w-full h-full object-cover duration-1000 group-hover/card:scale-105" 
                />
                <div className="absolute inset-0 bg-[#5D00D6]/5 opacity-60 group-hover/card:opacity-0 transition-opacity duration-700" />
              </div>
              <div className="mt-auto">
                <Button size="lg" className="rounded-full shadow-xl w-full md:w-auto h-14 px-8 text-[15px] font-bold" asChild>
                  <Link href="/greenfield">
                    Request Managed IT Setup 
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column — Internal IT Team */}
          <div className="flex flex-col pl-0 md:pl-14 lg:pl-24 z-10 mt-16 md:mt-0">
            <div className="min-h-[280px] md:min-h-[320px] flex flex-col">
              <div className="mb-6 h-8 flex items-center">
                <span className="bg-[#1D1D1D] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max">
                  INTERNAL IT TEAM? PARTNER WITH US
                </span>
              </div>
              <h2 className="c9-section-heading mb-6 !text-[28px] md:!text-[38px] leading-[1.1] min-h-[2.2em] flex items-center" >
                A command layer for IT managers and senior engineers.
              </h2>
              <p className="c9-body text-slate-600 leading-relaxed text-[16px] max-w-[480px]">
                We bridge the gaps in your infrastructure. C9 provides the escalation support, multi-site network orchestration, and visibility tools your team needs to stabilize operations across complex footprints.
              </p>
            </div>
            
            <div className="group/card mt-8 flex-grow flex flex-col">
              <div className="rounded-[28px] overflow-hidden aspect-[16/10] mb-8 shadow-2xl shadow-purple-900/5 relative bg-slate-100 border border-gray-100">
                <img 
                  src="/images/c9_support_engineer.png" 
                  alt="C9 Support Engineer in control" 
                  className="w-full h-full object-cover duration-1000 group-hover/card:scale-105" 
                />
                <div className="absolute inset-0 bg-[#5D00D6]/5 opacity-60 group-hover/card:opacity-0 transition-opacity duration-700" />
              </div>
              <div className="mt-auto">
                <Button variant="outline" size="lg" className="rounded-full border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white w-full md:w-auto h-14 px-8 text-[15px] font-bold" asChild>
                  <Link href="/managed-it">
                    Explore Co-Management Model 
                  </Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

