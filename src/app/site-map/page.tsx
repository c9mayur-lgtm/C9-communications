'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, PhoneCall, ShieldCheck, Activity, 
  Building2, Users, Layers, Zap, ArrowRight,
  Headphones, BarChart3, Cloud, Network,
  Lock, HardDrive, HelpCircle, Briefcase,
  MapPin, Mail, Phone, ExternalLink
} from 'lucide-react';

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

const Section = ({ title, links, icon: Icon }: { title: string, links: { label: string, path: string }[], icon: any }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6]">
        <Icon size={20} />
      </div>
      <h2 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h2>
    </div>
    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
      {links.map((link) => (
        <Link 
          key={link.path} 
          href={link.path}
          className="group flex items-center justify-between py-2 text-slate-500 hover:text-[#5D00D6] transition-colors border-b border-slate-50"
        >
          <span className="text-[15px] font-medium">{link.label}</span>
          <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </Link>
      ))}
    </div>
  </div>
);

export default function SitemapPage() {
  const sections = [
    {
      title: "Core Infrastructure",
      icon: Layers,
      links: [
        { label: "Managed IT Services", path: "/managed-it" },
        { label: "Managed Infrastructure", path: "/managed-it/infrastructure" },
        { label: "Cloud Services", path: "/managed-it/cloud-services" },
        { label: "Network Solutions", path: "/managed-it/network-solutions" },
        { label: "Cyber Security Solutions", path: "/managed-it/security-solutions" },
        { label: "Backup & Disaster Recovery", path: "/managed-it/backup-disaster-recovery" },
      ]
    },
    {
      title: "Telecoms & Connectivity",
      icon: PhoneCall,
      links: [
        { label: "Telco Solutions", path: "/telco" },
        { label: "C9 Phone System", path: "/telco/phone-system" },
        { label: "Contact Centre Solutions", path: "/telco/contact-centre" },
        { label: "SIP Trunking", path: "/telco/sip-trunking" },
        { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
        { label: "Business nbn™", path: "/telco/business-nbn" },
        { label: "Enterprise Ethernet", path: "/telco/enterprise-ethernet" },
        { label: "Fast Fibre", path: "/telco/fast-fibre" },
      ]
    },
    {
      title: "Industry Expertise",
      icon: Building2,
      links: [
        { label: "Industries Overview", path: "/industries" },
        { label: "Retail & Commerce", path: "/industries/retail" },
        { label: "Healthcare & Medical", path: "/industries/healthcare" },
        { label: "Hospitality & Tourism", path: "/industries/hospitality" },
        { label: "Education & Learning", path: "/industries/education" },
        { label: "Professional Services", path: "/industries/professional-services" },
        { label: "Real Estate & Construction", path: "/industries/real-estate" },
      ]
    },
    {
      title: "Company & Legal",
      icon: Briefcase,
      links: [
        { label: "About C9 Communications", path: "/about" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Why Choose C9", path: "/why-c9" },
        { label: "Contact Us", path: "/contact" },
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Terms of Use", path: "/terms" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-100 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className={C}>
          <div className="max-w-3xl">
            <span className="c9-eyebrow mb-4">Structural Directory</span>
            <h1 className="c9-hero-title !text-5xl lg:!text-6xl mb-6">Website Sitemap.</h1>
            <p className="c9-body text-lg">
              A comprehensive directory of all services, solutions, and infrastructure governance paths within the C9 Communications digital environment.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-32">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-x-24 gap-y-8">
            {sections.map((section, idx) => (
              <Section key={idx} {...section} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0c1024] py-16 text-white text-center">
        <div className={C}>
          <h2 className="text-2xl font-bold mb-4">Need help finding something?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Our team is available 24/7 to discuss your infrastructure requirements or technical support needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[#5D00D6] px-8 py-4 rounded-full font-bold hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/40"
          >
            Contact Engineering Team <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
