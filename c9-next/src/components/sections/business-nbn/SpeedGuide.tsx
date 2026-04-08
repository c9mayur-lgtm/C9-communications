import React from 'react';

const speedRows = [
  {
    speed: '50/50',
    title: 'Entry level — up to 10 users',
    pills: ['Email', 'Web browsing', 'VoIP calls', 'Basic cloud apps'],
  },
  {
    speed: '250/250',
    title: 'Business standard — 10–30 users',
    pills: ['Video conferencing', 'Cloud storage sync', 'VoIP fleet', 'Microsoft 365', 'Remote desktop'],
  },
  {
    speed: '500/500',
    title: 'Enterprise — 30–80 users',
    pills: ['HD video calls', 'Large file transfers', 'Multi-site VPN', 'Hosted PBX', 'Backup & DR', 'Multiple offices'],
  },
  {
    speed: '1000/1000',
    title: 'Premium — 80+ users, data-intensive',
    pills: ['4K video conferencing', 'Data centre connectivity', 'High-volume cloud migration', 'Media and broadcast', 'Enterprise ERP', 'Colocation connectivity'],
  },
];

export default function SpeedGuide() {
  return (
    <section
      className="w-full bg-[#F8F7FF] py-24"
      
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">

        {/* Header */}
        <span className="text-[11px] uppercase tracking-widest text-[#5D00D6] font-semibold block">
          SPEED GUIDE
        </span>
        <h2 className="text-[36px] md:text-[44px] text-[#1A1A2E] font-bold mt-3 leading-[1.25]">
          What does your speed tier mean in real business terms?
        </h2>
        <p className="text-[17px] text-[#6B7280] mt-3 max-w-[680px] leading-[1.7]">
          Speed numbers mean nothing without context. Here's what each tier actually supports in a typical
          business environment.
        </p>

        {/* Speed Rows */}
        <div className="flex flex-col gap-4 mt-10 max-w-[860px] mx-auto">
          {speedRows.map(({ speed, title, pills }) => (
            <div
              key={speed}
              className="bg-white rounded-2xl p-5 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start sm:items-center"
              style={{ border: '0.5px solid rgba(93,0,214,0.15)' }}
            >
              {/* Speed Badge */}
              <div
                className="rounded-xl p-4 text-center shrink-0 min-w-[100px]"
                style={{ background: '#F8F7FF' }}
              >
                <div className="text-[22px] text-[#5D00D6] font-bold leading-none">{speed}</div>
                <div className="text-[10px] text-[#9CA3AF] mt-1">Mbps</div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <span className="text-[16px] text-[#1A1A2E] font-semibold leading-snug">{title}</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {pills.map((pill) => (
                    <span
                      key={pill}
                      className="bg-white rounded-full px-2.5 py-1 text-[11px] text-[#6B7280]"
                      style={{ border: '0.5px solid rgba(93,0,214,0.15)' }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-[12px] text-[#9CA3AF] italic text-center mt-6 leading-[1.7]">
          Speeds above 100/40 Mbps available on FTTP (Fibre to the Premises) only. FTTN/B actual speeds confirmed
          upon connection. Contact C9 to check your site's available technology type.
        </p>

      </div>
    </section>
  );
}

