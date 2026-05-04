'use client';

import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';

const LEGAL_LINKS = [
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' }
];

const COOKIE_TOC = [
  { label: 'What are Cookies?', id: 'what-are-cookies' },
  { label: 'How We Use Them', id: 'how-we-use' },
  { label: 'Types of Cookies', id: 'types' },
  { label: 'Your Choices', id: 'choices' },
  { label: 'Updates', id: 'updates' },
];

export default function CookiePolicy() {
  return (
    <LegalLayout 
      title="Cookie Policy" 
      effectiveDate="05.04.2026"
      links={LEGAL_LINKS}
      toc={COOKIE_TOC}
    >
      <section id="what-are-cookies">
        <h2 id="what-are-cookies">What are Cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
        </p>
      </section>

      <div className="h-12" />

      <section id="how-we-use">
        <h2 id="how-use">How We Use Cookies</h2>
        <p>
          <strong>C9 Communications</strong> uses cookies to improve your browsing experience by:
        </p>
        <ul>
          <li>Remembering your preferences and settings.</li>
          <li>Understanding how you use our website (e.g., which pages you visit).</li>
          <li>Ensuring our website is secure and performing correctly.</li>
          <li>Measuring the effectiveness of our marketing campaigns.</li>
        </ul>
      </section>

      <div className="h-12" />

      <section id="types">
        <h2 id="types">Types of Cookies We Use</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-[#0c1024] mb-2">Strictly Necessary Cookies</h3>
            <p>These cookies are essential for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#0c1024] mb-2">Performance & Analytics Cookies</h3>
            <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#0c1024] mb-2">Functional Cookies</h3>
            <p>These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#0c1024] mb-2">Targeting Cookies</h3>
            <p>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</p>
          </div>
        </div>
      </section>

      <div className="h-12" />

      <section id="choices">
        <h2 id="choices">Your Choices</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the "Settings" button in our cookie consent banner.
        </p>
        <p>
          Most web browsers also allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a>.
        </p>
      </section>

      <div className="h-12" />

      <section id="updates">
        <h2 id="updates">Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </p>
      </section>
    </LegalLayout>
  );
}
