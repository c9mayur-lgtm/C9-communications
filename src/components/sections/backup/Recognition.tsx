import React from 'react';

const F = '"Proxima Nova", sans-serif';

const pains = [
  'We have backup running but no one has ever actually tried to restore from it.',
  'We got hit by ransomware and our backups were encrypted too — we lost everything.',
  'We recovered eventually but it took 3 days and cost us more than the backup ever would have.',
];

export default function Recognition() {
  return (
    <section className="bg-white py-24" style={{ fontFamily: F }}>
      <div className="container mx-auto px-6 md:px-8 text-center" style={{ maxWidth: '760px' }}>
        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#5D00D6] block mb-3" style={{ fontFamily: F }}>
          THE UNTESTED BACKUP PROBLEM
        </span>
        <h2 className="c9-section-heading mt-3 mb-10" style={{ fontFamily: F }}>
          Most businesses think they have backup. Very few have <span className="text-[#5D00D6]">tested recovery.</span>
        </h2>

        <div className="flex flex-col gap-4 text-left">
          {pains.map((pain, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 rounded-lg p-6 flex gap-5 items-start">
              <span className="text-[#5D00D6] font-bold text-[20px] shrink-0 leading-none mt-0.5">"</span>
              <p className="text-[17px] text-[#0c1024] leading-[1.7] font-normal italic" style={{ fontFamily: F }}>{pain}</p>
            </div>
          ))}
        </div>

        <p className="text-[17px] text-[#6B7280] leading-[1.75] mt-8 text-center" style={{ fontFamily: F }}>
          These are not edge cases. They are the most common backup failure patterns C9 sees when auditing new clients. All three are preventable.
        </p>
      </div>
    </section>
  );
}
