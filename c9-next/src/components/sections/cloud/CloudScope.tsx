'use client';

import React from 'react';
import { LayoutGrid, Cloud, GitMerge, Shield, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  href?: string;
  badge?: string;
}

const ServiceCard = ({ icon, title, body, href, badge }: CardProps) => (
  <div className="group bg-white border-[0.5px] border-[rgba(93,0,214,0.15)] rounded-2xl p-8 hover:border-[color:var(--brand-purple)] hover:-translate-y-0.5 transition-all duration-200 ease-in-out h-full flex flex-col">
    <div className="w-12 h-12 bg-[#EDE9FE] rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
      <div className="text-[color:var(--brand-purple)] w-[22px] h-[22px]">
        {icon}
      </div>
    </div>
    <h3 className="font-['Proxima_Nova'] font-bold text-[20px] text-[#1A1A2E] mb-3">{title}</h3>
    <p className="font-['Proxima_Nova'] text-[15px] text-[#6B7280] leading-relaxed mb-6 flex-grow">{body}</p>
    
    {badge && (
      <Link href={href || "#"} className="mt-4 pt-4 border-t border-[rgba(93,0,214,0.1)] flex items-center gap-2 text-[color:var(--brand-purple)] group-hover:opacity-80 transition-opacity text-left">
        <Shield className="w-3.5 h-3.5" />
        <span className="font-['Proxima_Nova'] text-[11px] font-semibold uppercase tracking-wider">{badge}</span>
        <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" />
      </Link>
    )}
  </div>
);

export default function CloudScope() {
  return (
    <section id="cloud-scope" className="w-full bg-white py-24 px-6 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="text-center mb-16">
          <span className="font-['Proxima_Nova'] text-[11px] uppercase tracking-[0.1em] text-[color:var(--brand-purple)] font-semibold mb-4 block">
            CLOUD SERVICES OVERVIEW
          </span>
          <h2 className="font-['Proxima_Nova'] text-[36px] md:text-[44px] text-[#1A1A2E] font-bold mt-3 leading-tight">
            A complete, managed cloud ecosystem.
          </h2>
          <p className="font-['Proxima_Nova'] text-[18px] text-[#6B7280] mt-4 max-w-[700px] mx-auto leading-[1.7]">
            From Microsoft 365 licensing to fully isolated private cloud infrastructure — our managed services remove the complexity of day-to-day cloud administration.
          </p>
        </div>

        {/* Layer 1 */}
        <div className="mb-10">
          <h4 className="font-['Proxima_Nova'] text-[11px] uppercase text-[#6B7280] tracking-widest mt-10 mb-8 pb-3 border-b border-[rgba(93,0,214,0.2)]">
            MANAGED CLOUD SERVICES
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<LayoutGrid />}
              title="Microsoft 365 — Fully Managed"
              body="Licensing, deployment, security configuration, user onboarding, Teams governance, SharePoint architecture, and ongoing administration. Not just M365 — M365 done properly."
            />
            <ServiceCard 
              icon={<Cloud />}
              title="Azure Infrastructure (IaaS)"
              body="Best-in-class infrastructure to handle all your Software as a Service needs — dedicated maintenance, virtual machines, storage, and networking without the need for on-site troubleshooting."
            />
            <ServiceCard 
              icon={<GitMerge />}
              title="Hybrid Cloud Management"
              body="A combination of public and private cloud services managed through a single interface. C9 connects all your infrastructure environments — network, colocation, private, and public cloud."
            />
          </div>
        </div>

        {/* Layer 2 */}
        <div>
          <h4 className="font-['Proxima_Nova'] text-[11px] uppercase text-[#6B7280] tracking-widest mt-12 mb-8 pb-3 border-b border-[rgba(93,0,214,0.2)]">
            SECURITY & DATA PROTECTION
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<Shield />}
              title="Firewall as a Service (FWaaS)"
              body="Maintaining security in-house is resource-intensive. C9 delivers an agile, flexible cloud security solution where we do the heavy lifting — protecting your organisation without the overhead."
            />
            <ServiceCard 
              icon={<Database />}
              title="Backup as a Service (BaaS)"
              body="Powered by trusted partner Veeam on the Vocus cloud platform, C9 makes it easy to back up your data securely. All data is hosted within Australian data centres — safely stored off-site."
              badge="PAIRS WITH C9 DEFENSE →"
              href="/managed-it/c9-defense"
            />
            <ServiceCard 
              icon={<ShieldCheck />}
              title="Private Cloud"
              body="Managed and made available through dedicated infrastructure, private cloud serves your organisation alone — compliant, isolated, and fully managed by C9 for highly sensitive data."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
