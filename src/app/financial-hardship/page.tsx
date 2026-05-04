'use client';

import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';

const LEGAL_LINKS = [
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Complaints', href: '/complaints' },
  { label: 'Financial Hardship', href: '/financial-hardship' }
];

const HARDSHIP_TOC = [
  { label: 'Our Policy', id: 'policy' },
  { label: 'Eligibility', id: 'eligibility' },
  { label: 'How to Apply', id: 'application' },
  { label: 'Available Support', id: 'support' },
  { label: 'Contact Us', id: 'contact' },
];

export default function FinancialHardship() {
  return (
    <LegalLayout 
      title="Financial Hardship Policy" 
      effectiveDate="05.04.2026"
      links={LEGAL_LINKS}
      toc={HARDSHIP_TOC}
    >
      <section id="policy">
        <h2 id="policy">Our Policy</h2>
        <p>
          At <strong>C9 Communications</strong>, we understand that sometimes events beyond your control can make it difficult to pay your bills. We are committed to working with our customers to help them manage their financial obligations and maintain their essential communication services.
        </p>
        <p>
          This policy is designed to provide a framework for assisting customers who are experiencing genuine financial hardship.
        </p>
      </section>

      <div className="h-12" />

      <section id="eligibility">
        <h2 id="eligibility">Eligibility</h2>
        <p>
          Financial hardship involves a situation where a customer is unable to meet their financial obligations to C9 Communications, but expects to be able to do so if a flexible payment arrangement is implemented.
        </p>
        <p>Hardship can be caused by various factors, including:</p>
        <ul>
          <li>Loss of employment or business downturn.</li>
          <li>Illness or family breakdown.</li>
          <li>Natural disasters (fire, flood, etc.).</li>
          <li>Other unexpected life events.</li>
        </ul>
      </section>

      <div className="h-12" />

      <section id="application">
        <h2 id="application">How to Apply</h2>
        <p>
          If you are experiencing financial hardship, we encourage you to contact us as soon as possible. To assess your application, we may ask for some information, such as:
        </p>
        <ul>
          <li>Details of your current financial situation.</li>
          <li>The amount you can afford to pay toward your balance.</li>
          <li>The expected duration of the hardship.</li>
        </ul>
        <p className="mt-4">
          You can apply by calling our Billing Team or by emailing <a href="mailto:billing@c9communications.com.au">billing@c9communications.com.au</a> with "Financial Hardship Application" in the subject line.
        </p>
      </section>

      <div className="h-12" />

      <section id="support">
        <h2 id="support">Available Support Options</h2>
        <p>We offer several options to help customers manage their accounts during difficult times:</p>
        <ul>
          <li><strong>Payment Plans:</strong> Agreeing on a schedule of smaller, more frequent payments.</li>
          <li><strong>Spend Limits:</strong> Placing limits on certain services to prevent further debt.</li>
          <li><strong>Service Downscaling:</strong> Moving to a lower-cost plan temporarily.</li>
          <li><strong>Late Fee Waivers:</strong> Waiving late payment fees for eligible customers.</li>
        </ul>
      </section>

      <div className="h-12" />

      <section id="contact">
        <h2 id="contact">Contact Our Support Team</h2>
        <p>
          Our team is trained to handle hardship applications with sensitivity and confidentiality.
        </p>
        <p className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 shadow-sm leading-relaxed">
          <strong>C9 Billing & Hardship Team</strong><br /><br />
          <strong>Telephone:</strong> 1300 000 299<br />
          <strong>Email:</strong> <a href="mailto:billing@c9communications.com.au">billing@c9communications.com.au</a><br />
          <strong>Hours:</strong> 9:00 AM – 5:00 PM AEST (Monday to Friday)
        </p>
      </section>
    </LegalLayout>
  );
}
