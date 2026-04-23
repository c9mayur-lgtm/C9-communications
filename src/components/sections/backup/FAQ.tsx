'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const F = '"Proxima Nova", sans-serif';

const faqs = [
  {
    q: 'What is the difference between backup and disaster recovery?',
    a: 'Backup is the process of copying your data to a safe location. Disaster recovery is the process of restoring your business operations after an incident — using that backup. Backup without a tested recovery plan is incomplete. C9 manages both.',
  },
  {
    q: 'How do I know my backups are actually working?',
    a: "You don't — unless they are tested. C9 performs scheduled recovery tests on your backup environment and provides a written test report each time. If a backup is failing or an issue is found during testing, you know about it before an incident — not during one.",
  },
  {
    q: 'What is ransomware-resistant backup and do I need it?',
    a: 'Standard backup can be encrypted by ransomware — leaving you with no clean recovery point. Ransomware-resistant backup uses immutable storage — data that cannot be modified or deleted once written, regardless of what happens to your primary environment. C9 includes immutable backup for clients with ransomware exposure.',
  },
  {
    q: 'How long would it take to recover from a ransomware attack?',
    a: 'Recovery time depends on the scope of the attack and the state of your backup environment. With a current, tested backup and a documented DR plan, most businesses can be operational within hours. Without these, recovery can take days — or may not be possible at all. Your RTO is defined in your agreement with C9.',
  },
  {
    q: 'Is backup and DR included in Managed IT or separate?',
    a: 'Managed backup is included in every C9 Managed IT engagement. Disaster recovery planning, ransomware-resistant storage, and formal recovery testing are scoped based on your environment and risk profile. Your account manager will walk through the options.',
  },
  {
    q: 'What does C9 Defense add to backup and recovery?',
    a: 'C9 Defense adds Recovery Assurance as a formal program — tested recovery with documented evidence, aligned to the ACSC Essential 8 framework. This is specifically designed for organisations that need to demonstrate their recovery capability to auditors, insurers, or boards.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-24" style={{ fontFamily: F }}>
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '760px' }}>
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#5D00D6] block mb-3" style={{ fontFamily: F }}>
            COMMON QUESTIONS
          </span>
          <h2 className="c9-section-heading mt-3" style={{ fontFamily: F }}>
            What businesses ask about backup and <span className="text-[#5D00D6]">disaster recovery.</span>
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-start gap-4 text-left"
                style={{ fontFamily: F }}
              >
                <span className="text-[17px] font-bold text-[#0c1024] leading-snug">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className="shrink-0 mt-0.5 transition-transform duration-300"
                  style={{ color: '#5D00D6', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              {open === i && (
                <p className="text-[14px] text-[#6B7280] leading-[1.75] mt-3 font-normal" style={{ fontFamily: F }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
