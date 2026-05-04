'use client';

import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';

const LEGAL_LINKS = [
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Accessibility', href: '/accessibility-statement' },
  { label: 'Cookie Policy', href: '/cookie-policy' }
];

const ACCESSIBILITY_TOC = [
  { label: 'Our Commitment', id: 'commitment' },
  { label: 'Standards Followed', id: 'standards' },
  { label: 'Key Features', id: 'features' },
  { label: 'Testing Process', id: 'testing' },
  { label: 'Feedback & Contact', id: 'feedback' },
];

export default function AccessibilityStatement() {
  return (
    <LegalLayout 
      title="Accessibility Statement" 
      effectiveDate="05.04.2026"
      links={LEGAL_LINKS}
      toc={ACCESSIBILITY_TOC}
    >
      <section id="commitment">
        <h2 id="commitment">Our Commitment</h2>
        <p>
          <strong>C9 Communications</strong> is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure our services are inclusive and easy to use.
        </p>
        <p>
          As a managed service provider delivering critical infrastructure, we understand that accessibility is not just a feature, but a fundamental requirement for the modern digital workplace.
        </p>
      </section>

      <div className="h-12" />

      <section id="standards">
        <h2 id="standards">Standards Followed</h2>
        <p>
          We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>. These guidelines explain how to make web content more accessible for people with a wide array of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.
        </p>
        <p>
          Conformance with these guidelines also helps make web content more usable for all people, regardless of ability or device.
        </p>
      </section>

      <div className="h-12" />

      <section id="features">
        <h2 id="features">Key Accessibility Features</h2>
        <p>Our website incorporates several features designed to improve accessibility, including:</p>
        <ul>
          <li><strong>Semantic HTML:</strong> We use appropriate HTML tags to ensure screen readers can navigate our site structure correctly.</li>
          <li><strong>Keyboard Navigation:</strong> All interactive elements are reachable and usable via a keyboard.</li>
          <li><strong>Color Contrast:</strong> We maintain a high contrast ratio between text and backgrounds to ensure readability for users with low vision.</li>
          <li><strong>Responsive Design:</strong> Our site is designed to be fully functional on various devices and screen sizes, supporting text resizing without loss of functionality.</li>
          <li><strong>ARIA Attributes:</strong> We use Accessible Rich Internet Applications (ARIA) attributes where necessary to provide additional context to assistive technologies.</li>
        </ul>
      </section>

      <div className="h-12" />

      <section id="testing">
        <h2 id="testing">Testing Process</h2>
        <p>
          To maintain our standards, we employ a multi-layered testing approach:
        </p>
        <ul>
          <li><strong>Automated Testing:</strong> Regular scans using industry-standard tools to identify common accessibility issues.</li>
          <li><strong>Manual Reviews:</strong> Periodic manual audits by our engineering team to verify keyboard interactions and focus management.</li>
          <li><strong>Browser Compatibility:</strong> Testing across modern browsers (Chrome, Firefox, Safari, Edge) to ensure consistent behavior.</li>
        </ul>
      </section>

      <div className="h-12" />

      <section id="feedback">
        <h2 id="feedback">Feedback & Contact</h2>
        <p>
          We welcome your feedback on the accessibility of the C9 Communications website. Please let us know if you encounter any accessibility barriers:
        </p>
        <p className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 shadow-sm leading-relaxed">
          <strong>C9 Accessibility Officer</strong><br /><br />
          <strong>Telephone:</strong> 1300 000 299<br />
          <strong>Email:</strong> <a href="mailto:support@c9communications.com.au">support@c9communications.com.au</a><br />
          <strong>Postal:</strong> Level 1, 1-3 Moore St, Canberra ACT 2601
        </p>
        <p className="mt-6 text-sm text-slate-500 italic">
          We try to respond to feedback within 5 business days.
        </p>
      </section>
    </LegalLayout>
  );
}
