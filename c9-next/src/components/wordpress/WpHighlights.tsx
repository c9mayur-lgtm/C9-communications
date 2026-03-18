'use client';

import React from 'react';

export const WpHighlights = () => {
  return (
    <section className="bg-white border-y border-gray-100 py-12 lg:py-16 relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-nowrap md:flex-wrap lg:flex-nowrap overflow-x-auto lg:overflow-visible gap-8 md:gap-y-10 items-center justify-between no-scrollbar pb-4 md:pb-0">
          
          {/* Google review Rating */}
          <div className="flex items-center gap-5 shrink-0">
            <div className="flex flex-col">
              <div className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 leading-none">Reviewed on</div>
              <div className="flex items-center gap-4">
                <span className="font-extrabold text-[28px] tracking-tighter text-slate-800 leading-none">Google</span>
                <div className="flex flex-col gap-1">
                  <div className="flex text-[#4285F4] text-[12px] leading-none">★★★★★</div>
                  <span className="text-[12px] font-bold text-gray-500 uppercase tracking-tight leading-none whitespace-nowrap">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-10 w-[1px] bg-gray-200 shrink-0"></div>

          {/* Metric 1 */}
          <div className="flex flex-col shrink-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[32px] font-bold text-[#0c1024] leading-none tracking-tight">20</span>
              <span className="text-[16px] font-bold text-[#0c1024]">Years</span>
            </div>
            <span className="text-[12px] text-gray-500 font-bold tracking-tight uppercase">Proven Track Record</span>
          </div>

          <div className="h-10 w-[1px] bg-gray-200 shrink-0"></div>

          {/* Metric 2 */}
          <div className="flex flex-col shrink-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[32px] font-bold text-[#0c1024] leading-none tracking-tight">98</span>
              <span className="text-[16px] font-bold text-[#0c1024]">%</span>
            </div>
            <span className="text-[12px] text-gray-500 font-bold tracking-tight uppercase">Customer Satisfaction</span>
          </div>

          <div className="h-10 w-[1px] bg-gray-200 shrink-0"></div>

          {/* Metric 3 */}
          <div className="flex flex-col shrink-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[32px] font-bold text-[#0c1024] leading-none tracking-tight">1,500</span>
              <span className="text-[16px] font-bold text-[#0c1024]">Projects</span>
            </div>
            <span className="text-[12px] text-gray-500 font-bold tracking-tight uppercase">We Have Completed</span>
          </div>

          <div className="h-10 w-[1px] bg-gray-200 shrink-0"></div>

          {/* Metric 4 */}
          <div className="flex flex-col shrink-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[32px] font-bold text-[#0c1024] leading-none tracking-tight">3</span>
              <span className="text-[16px] font-bold text-[#0c1024]">Mins</span>
            </div>
            <span className="text-[12px] text-gray-500 font-bold tracking-tight uppercase">Average Answer Time</span>
          </div>

        </div>
      </div>
    </section>
  );
};
