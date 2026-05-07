import React from 'react';

export const WpHighlights = () => {
  return (
    <section className="bg-white border-y border-gray-100 py-12 lg:py-16 relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Google review Rating */}
          <div className="w-full lg:w-auto flex items-center justify-center lg:justify-start gap-5 shrink-0 border-b border-gray-100 lg:border-none pb-8 lg:pb-0">
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2.5 leading-none">Reviewed on</div>
              <div className="flex items-center gap-4">
                <span className="font-extrabold text-[26px] tracking-tighter text-slate-800 leading-none">Google</span>
                <div className="flex flex-col gap-1">
                  <div className="flex text-[#4285F4] text-[10px] leading-none">★★★★★</div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight leading-none whitespace-nowrap">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-10 w-[1px] bg-gray-200 shrink-0 hidden lg:block"></div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap gap-x-10 md:gap-x-16 gap-y-12 lg:gap-8 w-full lg:w-auto">
            {/* Metric 1 */}
            <div className="flex flex-col items-center lg:items-start shrink-0">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[32px] md:text-[36px] font-medium text-[#0c1024] leading-none tracking-tight">1.2M+</span>
              </div>
              <span className="c9-eyebrow !text-[10px] !text-[#5D00D6] text-center lg:text-left">Successful PBX Calls</span>
            </div>

            <div className="h-10 w-[1px] bg-gray-200 shrink-0 hidden lg:block"></div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center lg:items-start shrink-0">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[32px] md:text-[36px] font-medium text-[#0c1024] leading-none tracking-tight">99.99%</span>
              </div>
              <span className="c9-eyebrow !text-[10px] !text-[#5D00D6] text-center lg:text-left">System Uptime Achieved</span>
            </div>

            <div className="h-10 w-[1px] bg-gray-200 shrink-0 hidden lg:block"></div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center lg:items-start shrink-0">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[32px] md:text-[36px] font-medium text-[#0c1024] leading-none tracking-tight">&lt;15m</span>
              </div>
              <span className="c9-eyebrow !text-[10px] !text-[#5D00D6] text-center lg:text-left">Support Response Time</span>
            </div>

            <div className="h-10 w-[1px] bg-gray-200 shrink-0 hidden lg:block"></div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center lg:items-start shrink-0">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[32px] md:text-[36px] font-medium text-[#0c1024] leading-none tracking-tight">500+</span>
              </div>
              <span className="c9-eyebrow !text-[10px] !text-[#5D00D6] text-center lg:text-left">Enterprise Sites Live</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
