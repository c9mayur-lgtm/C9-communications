import React from 'react';

const accreditations = [
  'NBN™ Accredited Business Adviser',
  'APNIC Member',
  'TIO Member',
  'CommCom Compliant',
];

export default function AccreditationBar() {
  return (
    <section
      className="w-full bg-white py-16"
      style={{
        fontFamily: '"Proxima Nova", sans-serif',
        borderTop: '0.5px solid rgba(93,0,214,0.1)',
        borderBottom: '0.5px solid rgba(93,0,214,0.1)',
      }}
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <span className="text-[11px] uppercase tracking-widest text-[#9CA3AF] text-center block mb-8">
          IN COMPLIANCE WITH AND ACCREDITED BY
        </span>
        <div className="flex items-center justify-center flex-wrap gap-5 md:gap-10">
          {accreditations.map((label) => (
            <div
              key={label}
              className="text-[13px] text-[#374151] font-semibold bg-[#F9F9F9] rounded-lg px-5 py-3"
              style={{ border: '0.5px solid #E5E7EB' }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
