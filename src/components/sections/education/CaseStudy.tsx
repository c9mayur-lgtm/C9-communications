import React from 'react';
import Link from 'next/link';

export default function CaseStudy() {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-[1100px]">
        <div className="mb-10 text-center">
          <span className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.3em]" >Client Success</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-3 h-auto md:h-[380px]">
          <div className="relative w-full h-[300px] md:h-full rounded-xl md:rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
              alt="Education Provider"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
          <div className="bg-[#343331] rounded-xl md:rounded-2xl p-8 md:p-10 flex flex-col justify-center shadow-md relative">
            <p className="text-[#FDFDFD] text-[20px] md:text-[24px] lg:text-[28px] leading-[1.35] font-bold mb-8 tracking-tight" >
              "Managing campus-wide Wi-Fi and a massive student device fleet was a struggle until C9 stepped in. Their understanding of the education environment and commitment to data privacy is exceptional."
            </p>
            <div className="mt-auto">
              <div className="flex items-center gap-2.5 mb-5 opacity-90">
                <div className="grid grid-cols-3 gap-0.5 w-6 h-6 rotate-45 opacity-80">
                  <div className="bg-white rounded-full"></div><div className="bg-white rounded-full"></div><div className="bg-transparent rounded-full"></div>
                  <div className="bg-white rounded-full"></div><div className="bg-white rounded-full"></div><div className="bg-white rounded-full"></div>
                  <div className="bg-white rounded-full"></div><div className="bg-white rounded-full"></div><div className="bg-white rounded-full"></div>
                </div>
                <span className="text-white text-[16px] font-bold tracking-tight" >EDUCATION PROVIDER CLIENT</span>
              </div>
              <div className="text-white/80 text-[14px] md:text-[15px] font-medium tracking-wide" >
                Principal — Australian Education Provider
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/about/case-studies" className="inline-flex items-center gap-2 text-[#5D00D6] text-[13px] font-bold uppercase tracking-wider hover:opacity-70 transition-opacity" >
            Read more case studies <span className="text-[16px]">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

