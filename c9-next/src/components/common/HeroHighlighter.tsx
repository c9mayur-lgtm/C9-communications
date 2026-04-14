import React from 'react';

export const HeroHighlighter = () => {
  const points = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#A3E635]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      text: "ISO 27001 & 9001 Accredited & Certified Managed IT Partner"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#A3E635]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      text: "231+ Local Australian Clients & Counting Since 2004"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#A3E635]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "97% of Technical Incidents Resolved Within 30 Minutes"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#A3E635]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: "24/7 AU Support Team 95% of Issues Resolved First Call"
    }
  ];

  return (
    <div className="w-full bg-white border-b border-slate-100 py-4 relative z-20">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center group-hover:bg-[#5D00D6]/10 transition-colors">
                {React.cloneElement(point.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-[#5D00D6]" })}
              </div>
              <p className="text-slate-900 text-[13px] font-bold leading-tight max-w-[200px] tracking-tight">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
