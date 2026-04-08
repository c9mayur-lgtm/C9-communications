import React from 'react';

export default function ThreatReality() {
  return (
    <section className="bg-[#0c1024] py-24" >
      <div className="container mx-auto px-6 md:px-8 w-full text-center" style={{ maxWidth: '800px' }}>
        <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#5D00D6] block mb-6">
          THE THREAT LANDSCAPE
        </span>
        
        <h2 className="text-[32px] md:text-[42px] font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-[700px] mx-auto">
          Australian businesses are being targeted. The question is whether you are ready.
        </h2>
        
        <p className="text-[18px] md:text-[20px] text-[#9CA3AF] leading-relaxed mb-8 font-normal">
          Ransomware, business email compromise, and supply chain attacks are no longer events that happen to large enterprises. The majority of successful cyberattacks in Australia now target small and mid-sized businesses — because they have valuable data and inadequate defences.
        </p>

        <p className="text-[18px] md:text-[20px] text-[#9CA3AF] leading-relaxed font-normal">
          At the same time, regulatory pressure is increasing. Cyber insurance providers are tightening requirements. Boards are asking questions they weren't asking two years ago. The businesses that respond now will be in a significantly stronger position than those that wait for an incident.
        </p>
      </div>
    </section>
  );
}

