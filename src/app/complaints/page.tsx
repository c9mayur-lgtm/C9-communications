'use client';

import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';

const LEGAL_LINKS = [
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Complaints', href: '/complaints' },
  { label: 'Financial Hardship', href: '/financial-hardship' }
];

const COMPLAINTS_TOC = [
  { label: 'Overview', id: 'overview' },
  { label: 'How to Lodge', id: 'lodgement' },
  { label: 'Our Process', id: 'process' },
  { label: 'Timeframes', id: 'timeframes' },
  { label: 'Escalation (TIO)', id: 'escalation' },
];

export default function ComplaintsHandling() {
  return (
    <LegalLayout 
      title="Complaints Handling Process" 
      effectiveDate="05.04.2026"
      links={LEGAL_LINKS}
      toc={COMPLAINTS_TOC}
    >
      <section id="overview">
        <h2 id="overview">Overview</h2>
        <p>
          At <strong>C9 Communications</strong>, we aim to provide exceptional service. However, we understand that things don't always go as planned. We take all complaints seriously and use them as an opportunity to improve our operations and customer experience.
        </p>
        <p>
          This document outlines our process for handling complaints in accordance with the <strong>Telecommunications Consumer Protections (TCP) Code</strong>.
        </p>
      </section>

      <div className="h-12" />

      <section id="lodgement">
        <h2 id="lodgement">How to Lodge a Complaint</h2>
        <p>You can lodge a complaint with us through any of the following channels:</p>
        <ul>
          <li><strong>Phone:</strong> Call us on 1300 000 299 (9am – 5pm AEST, Mon-Fri).</li>
          <li><strong>Online:</strong> Use the contact form on our website.</li>
          <li><strong>Email:</strong> Send an email to <a href="mailto:complaints@c9communications.com.au">complaints@c9communications.com.au</a>.</li>
          <li><strong>Mail:</strong> Complaints Officer, C9 Communications, Level 1, 1-3 Moore St, Canberra ACT 2601.</li>
        </ul>
        <p className="mt-4">
          If you require assistance lodging a complaint (e.g., if English is your second language or you have a disability), please let us know so we can provide appropriate support.
        </p>
      </section>

      <div className="h-12" />

      <section id="process">
        <h2 id="process">Our Process</h2>
        <p>When we receive your complaint, we will:</p>
        <ol>
          <li><strong>Acknowledge:</strong> We will provide an acknowledgement and a unique reference number within 2 business days.</li>
          <li><strong>Investigate:</strong> A senior member of our support or engineering team will review the details of your complaint.</li>
          <li><strong>Resolution:</strong> We will propose a resolution. We aim to resolve all standard complaints within 15 business days.</li>
          <li><strong>Implementation:</strong> Once a resolution is agreed upon, we will implement it within 10 business days.</li>
        </ol>
      </section>

      <div className="h-12" />

      <section id="timeframes">
        <h2 id="timeframes">Timeframes</h2>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-slate-50">
              <th className="border border-slate-200 p-3 text-left font-bold">Action</th>
              <th className="border border-slate-200 p-3 text-left font-bold">Target Timeframe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3">Initial Acknowledgement</td>
              <td className="border border-slate-200 p-3">2 Business Days</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3">Proposed Resolution</td>
              <td className="border border-slate-200 p-3">15 Business Days</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3">Urgent Complaint Resolution</td>
              <td className="border border-slate-200 p-3">2 Business Days</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="h-12" />

      <section id="escalation">
        <h2 id="escalation">Escalation (TIO)</h2>
        <p>
          If you are not satisfied with the resolution we propose, you can ask for the complaint to be escalated to a manager for further review.
        </p>
        <p>
          If we are still unable to reach a resolution that you are satisfied with, you have the right to contact the <strong>Telecommunications Industry Ombudsman (TIO)</strong>.
        </p>
        <p className="bg-[#0c1024] text-white p-10 rounded-[2rem] shadow-xl mt-8">
          <strong>Telecommunications Industry Ombudsman</strong><br /><br />
          <strong>Web:</strong> <a href="https://www.tio.com.au" className="text-[#5D00D6]">www.tio.com.au</a><br />
          <strong>Phone:</strong> 1800 062 058<br />
          <strong>Mail:</strong> PO Box 276, Collins Street West, VIC 8007
        </p>
      </section>
    </LegalLayout>
  );
}
