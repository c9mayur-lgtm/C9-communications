'use client';

import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';

const LEGAL_LINKS = [
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' }
];

const PRIVACY_TOC = [
  { label: 'Introduction', id: 'intro' },
  { label: 'COLLECTION STATEMENT', id: 'collection-statement' },
  { label: 'Who we are & Contact', id: 'who-we-are' },
  { label: 'Third-party sources', id: 'collection-sources' },
  { label: 'Telecommunications Law', id: 'collection-under-law' },
  { label: 'Why we collect info', id: 'why-collect' },
  { label: 'PRIVACY POLICY', id: 'privacy-policy' },
  { label: 'Kinds of personal info', id: 'kinds-of-info' },
  { label: 'Collecting & Holding', id: 'collecting-holding' },
  { label: 'Our business use cases', id: 'using-info' },
  { label: 'Disclosing to others', id: 'disclosing-info' },
  { label: 'Direct marketing', id: 'direct-marketing' },
  { label: 'Accessing your data', id: 'access-complaints' },
  { label: 'Contact us', id: 'contact' },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout 
      title="Privacy Policy" 
      effectiveDate="10.31.2023"
      links={LEGAL_LINKS}
      toc={PRIVACY_TOC}
    >
      <section id="intro">
        <p>
          At <strong>C9 Communications</strong>, we are committed to providing you with the highest level of service and protecting your privacy. This statement explains our practices regarding the collection, use, and management of your personal information.
        </p>
        
        <p className="font-bold">This statement includes:</p>
        
        <ul>
          <li><strong>Collection Statement:</strong> Explaining key aspects of our collection and use of personal information.</li>
          <li><strong>Privacy Policy:</strong> Further explaining how we manage and protect the personal information we hold about you.</li>
        </ul>
      </section>

      <div className="h-12" />

      <section id="collection-statement">
        <h2 id="collection-statement">COLLECTION STATEMENT</h2>
        
        <h3 id="who-we-are">Who we are</h3>
        <p>
          <strong>CLOUD NINE COMMUNICATIONS PTY LTD</strong> trading as <strong>C9 COMMUNICATIONS</strong> (ACN: 624 145 080).
        </p>

        <div className="h-6" />

        <h3 id="contact-details">Our contact details</h3>
        <p>
          <strong>Phone:</strong> 1800 000 299
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:office@c9communications.com.au">office@c9communications.com.au</a>
        </p>
        <p>
          <strong>Website:</strong> <a href="https://www.c9-communications.vercel.app">www.c9-communications.vercel.app</a>
        </p>

        <div className="h-8" />

        <h3 id="collection-sources">Collection from third party sources</h3>
        <p>
          We may collect personal information from someone other than you, when it is not reasonable or practicable to collect it from you, including:
        </p>
        <ul>
          <li><strong>Public Sources:</strong> Information available via phone books and public record databases.</li>
          <li><strong>Affiliates:</strong> Other companies within the C9 Group that you have dealt with previously.</li>
          <li><strong>Partners & Wholesalers:</strong> Our business partners, authorized representatives, and infrastructure wholesalers (e.g., nbn Co).</li>
          <li><strong>Agents:</strong> Our dealers, contractors, and other representatives performing specialist tasks.</li>
          <li><strong>Information Brokers:</strong> Specialized fraud checking and credit reporting agencies.</li>
        </ul>

        <div className="h-8" />

        <h3 id="collection-under-law">Collection under law</h3>
        <p>
          We may be required to collect personal information under the <strong>Telecommunications Act 1997</strong> and laws made under it (e.g., mandatory identity checks for pre-paid mobile services).
        </p>
        <p>
          We are also strictly subject to the ‘data retention’ provisions of the <strong>Telecommunications (Interception and Access) Act 1979</strong> (“Data Retention Law”).
        </p>

        <div className="h-8" />

        <h3 id="why-collect">Why we collect and hold personal information</h3>
        <p>
          We collect and hold personal information strictly for the following reasons:
        </p>
        <ul>
          <li>To <strong>operate our business</strong> and provide modern IT/Telco services seamlessly.</li>
          <li>To share with <strong>third-party infrastructure providers</strong> specifically in connection with your service.</li>
          <li>To comply with <strong>Australian law</strong>, including the specific Data Retention Law.</li>
        </ul>
      </section>

      <div className="h-12" />

      <section id="privacy-policy">
        <h2 id="privacy-policy">PRIVACY POLICY</h2>
        
        <h3>Personal information</h3>
        <p>
          This refers to information or an opinion about a living person who is identified or reasonably identifiable, whether or not true and whether or not recorded in material form.
        </p>
        <p>
          For the purposes of the Data Retention Law, it also refers to information retained for the purposes of that law, if it relates to an individual or a communication to which the individual is a party.
        </p>

        <div className="h-8" />

        <h3 id="kinds-of-info">Kinds of personal information we collect and hold</h3>
        <p>
          Broadly, we may collect and hold the following types of information:
        </p>
        <ul>
          <li><strong>Personal Details:</strong> Legal name, date of birth, gender, and occupation.</li>
          <li><strong>Identifiers:</strong> Driver licence numbers and other government-issued IDs for verification.</li>
          <li><strong>Contact Details:</strong> Physical, postal, work, and email addresses.</li>
          <li><strong>Financial Details:</strong> Bank account, credit card numbers, and billing history.</li>
          <li><strong>Service Details:</strong> Username, encrypted passwords, usage history, and support records.</li>
          <li><strong>Data Retention Logs:</strong> Subscriber details, communication timestamps, and connection logs.</li>
        </ul>

        <div className="h-8" />

        <h3 id="collecting-holding">Collecting & Holding personal information</h3>
        <p>
          Unless it is not reasonable or practicable, we will collect personal information about you <strong>directly from you</strong> (e.g., when you fill in an application form or fill in an online enquiry).
        </p>
        <p>
          <strong>Security:</strong> We hold information in both hard and soft copy at our offices and secure data centers. We take extreme care to protect it from unauthorized access, use, or alteration through encryption.
        </p>

        <div className="h-8" />

        <h3 id="using-info">Using personal information</h3>
        <p>
          We use your information effectively to:
        </p>
        <ul>
          <li><strong>Identify you</strong> accurately and prevent fraud.</li>
          <li><strong>Supply products</strong> and services that you have requested from us.</li>
          <li><strong>Provide support</strong> through our Australian-based engineering team.</li>
          <li><strong>Bill and collect payment</strong> for your communication services.</li>
          <li><strong>Monitor and improve</strong> our network and facilities.</li>
        </ul>

        <div className="h-8" />

        <h3 id="disclosing-info">Disclosing personal information to others</h3>
        <p>
          We disclose information only as reasonably required to:
        </p>
        <ul>
          <li><strong>Service Partners:</strong> Contractors for installation, maintenance, repairs, and billing support.</li>
          <li><strong>Wholesale Suppliers:</strong> Infrastructure owners necessary for your connectivity services.</li>
          <li><strong>Authorities:</strong> ACMA, police, and law enforcement agencies specifically as required by law.</li>
          <li><strong>Agents & Dealers:</strong> Members of our corporate  and authorized business partners.</li>
        </ul>

        <div className="h-8" />

        <h3 id="direct-marketing">Direct marketing</h3>
        <p>
          We may use your information to notify you about new products or offers from the C9 Group that we believe will benefit your business operations.
        </p>
        <p>
          <strong>Opt-Out Policy:</strong> Marketing may continue even after your service ends. You can opt-out at any time by contacting us directly.
        </p>

        <div className="h-8" />

        <h3 id="access-complaints">Accessing and correcting personal information</h3>
        <p>
          Under <strong>Australian Privacy Principle 12</strong>, you have the right to access and seek correction of the personal information we hold.
        </p>
        <p>
          Please contact us for these purposes using the details below. We shall process and respond to your request as soon as we reasonably can.
        </p>

        <div className="h-12" />

        <h3 id="contact">Contacting us</h3>
        <p>
          If you have questions, requests, or complaints regarding this Privacy Statement, please reach out to our team:
        </p>
        <p className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 shadow-sm leading-relaxed">
          <strong>C9 Communications Compliance Officer</strong><br /><br />
          <strong>Telephone:</strong> 1800 000 299<br />
          <strong>Email:</strong> <a href="mailto:office@c9communications.com.au">office@c9communications.com.au</a>
        </p>
      </section>
    </LegalLayout>
  );
}
