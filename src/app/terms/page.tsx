'use client';

import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';
import { FileText, ShieldAlert, BadgeInfo, ClipboardList, Phone, Globe, Smartphone, Download } from 'lucide-react';

const LEGAL_LINKS = [
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Enterprise Terms', href: '#' },
  { label: 'Subprocessors', href: '#' },
  { label: 'DPA', href: '#' },
  { label: 'Trust Site', href: '#' },
];

const TERMS_TOC = [
  { label: 'Introduction', id: 'intro' },
  { label: 'Service Agreements', id: 'service-agreements' },
  { label: 'Policies', id: 'policies' },
  { label: 'Forms', id: 'forms' },
  { label: 'CIS - Voice', id: 'cis-voice' },
  { label: 'CIS - Internet', id: 'cis-internet' },
  { label: 'CIS - Mobile', id: 'cis-mobile' },
];

const DocItem = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="group flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all duration-300 mb-4 cursor-pointer">
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#0c1024] group-hover:bg-[#5D00D6]/10 group-hover:text-[#5D00D6] transition-colors">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div>
        <h4 className="text-[16px] font-bold text-[#0c1024] mb-0.5">{title}</h4>
        <p className="text-[12px] text-gray-400 font-medium uppercase tracking-wider">PDF Document • 1.2 MB</p>
      </div>
    </div>
    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:border-[#5D00D6]/20 group-hover:text-[#5D00D6] transition-all">
      <Download size={18} />
    </div>
  </div>
);

export default function ServiceTerms() {
  return (
    <LegalLayout 
      title="Service Terms and Conditions" 
      effectiveDate="Updated: March 24, 2026"
      links={LEGAL_LINKS}
      toc={TERMS_TOC}
    >
      <section id="intro">
        <p>
          At <strong>C9 Communications</strong>, we believe it’s not just about building connections, it’s also about sustaining them. With that, our brand is committed to being there for you from Day 1 onwards.
        </p>
        <p>
          This portal provides access to all current Service Agreements, Policies, and Critical Information Summaries (CIS) relevant to your engagement with our telecommunications and IT services.
        </p>
      </section>

      <div className="h-12" />

      <section id="service-agreements">
        <h2 id="service-agreements">Service Agreements</h2>
        <p>Managed Service Agreements and Service Level Agreements (SLA) for core infrastructure services.</p>
        
        <div className="grid gap-2">
          <DocItem title="C9 Communications SFOA" icon={FileText} />
          <DocItem title="Customer Service Guarantee Waiver" icon={ShieldAlert} />
          <DocItem title="Service Schedule SLA - Voice" icon={FileText} />
          <DocItem title="Service Schedule SLA - Internet" icon={FileText} />
          <DocItem title="Service Schedule SLA - Hardware" icon={FileText} />
        </div>
      </section>

      <div className="h-12" />

      <section id="policies">
        <h2 id="policies">Policies</h2>
        <p>Internal standards and behavioral frameworks that govern our operational consistency.</p>
        
        <div className="grid gap-2">
          <DocItem title="Acceptable Use Policy" icon={BadgeInfo} />
          <DocItem title="Complaints Handling Policy" icon={ShieldAlert} />
          <DocItem title="Financial Hardship Policy" icon={ClipboardList} />
          <DocItem title="Privacy Policy" icon={ShieldAlert} />
        </div>
      </section>

      <div className="h-12" />

      <section id="forms">
        <h2 id="forms">Forms</h2>
        <p>Official documentation for account management and authorization.</p>
        
        <div className="grid gap-2">
          <DocItem title="Representative Appointment" icon={ClipboardList} />
        </div>
      </section>

      <div className="h-16" />

      <section id="cis-voice">
        <h2 id="cis-voice" className="flex items-center gap-4">
          <Phone size={32} className="text-[#5D00D6]" /> Critical Information Summary - Voice
        </h2>
        <p>Transparent cost and service breakdowns for our digital voice and SIP solutions.</p>
        
        <div className="grid gap-2">
          <DocItem title="Critical Information Summary C9 phone system" icon={Phone} />
          <DocItem title="Critical Information Summary Sip Trunk" icon={Phone} />
          <DocItem title="Critical Information Summary Inbound Services 1300 1800" icon={Phone} />
        </div>
      </section>

      <div className="h-12" />

      <section id="cis-internet">
        <h2 id="cis-internet" className="flex items-center gap-4">
          <Globe size={32} className="text-[#5D00D6]" /> Critical Information Summary - Internet
        </h2>
        <p>Detailed summaries of our high-speed internet and nbn business connectivity plans.</p>
        
        <div className="grid gap-2">
          <DocItem title="Critical Information Summary Fixed Wireless" icon={Globe} />
          <DocItem title="Critical Information Summary Fibre Internet" icon={Globe} />
          <DocItem title="Critical Information Summary nbn Fibre Plans" icon={Globe} />
          <DocItem title="Critical Information Summary Small Small Business nbn™" icon={Globe} />
          <DocItem title="Critical Information Summary 4G Backup" icon={Globe} />
        </div>
      </section>

      <div className="h-12" />

      <section id="cis-mobile">
        <h2 id="cis-mobile" className="flex items-center gap-4">
          <Smartphone size={32} className="text-[#5D00D6]" /> Critical Information Summary - Mobile
        </h2>
        <p>Key information regarding our mobile voice and data services.</p>
        
        <div className="grid gap-2">
          <DocItem title="Critical Information Summary Mobile Plans" icon={Smartphone} />
        </div>
      </section>

      <div className="h-20" />
      
      <p className="italic text-gray-400 text-[14px] text-center max-w-2xl mx-auto">
        If you require a document that is not listed here, or need assistance understanding these terms, please contact our support team at 1800 000 299.
      </p>
    </LegalLayout>
  );
}
