'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, PhoneCall, ShieldCheck, Activity, Building2, Users, Layers, Zap, Headphones, BarChart3, Cloud, Network, Lock, HardDrive, HelpCircle, Briefcase, MapPin, Mail, Phone, ExternalLink, Rocket, Lightbulb, Scale } from 'lucide-react';

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
          className="flex items-center justify-between py-2 text-slate-500 hover:text-[#5D00D6] transition-colors border-b border-slate-50"
        >
          <span className="text-[15px] font-medium">{link.label}</span>
          
        </Link>
      ))}
    </div>
  </div>
);

export default function SitemapPage() {
  const sections = [
    {
      title: "Core Infrastructure & Managed IT",
      icon: Layers,
      links: [
        { label: "Managed IT Services Overview", path: "/managed-it" },
        { label: "Infrastructure Governance", path: "/managed-it/infrastructure" },
        { label: "Cyber Security & Protection", path: "https://c9defense.com.au/" },
        { label: "Cloud Systems & Migration", path: "/managed-it/cloud-services" },
        { label: "Network Connectivity", path: "/managed-it/network-solutions" },
        { label: "Helpdesk & Engineering Support", path: "/managed-it/helpdesk-support" },
        { label: "Backup & Disaster Recovery", path: "https://c9defense.com.au/" },
        { label: "Strategic IT Outsourcing", path: "/managed-it/outsourcing" },
        { label: "IT Strategy & Consulting", path: "/managed-it/strategy-consulting" },
      ]
    },
    {
      title: "Telecoms & Global Connectivity",
      icon: PhoneCall,
      links: [
        { label: "Telco Solutions Hub", path: "/telco" },
        { label: "Unified Phone Systems", path: "/telco/phone-system" },
        { label: "Contact Centre Operations", path: "/telco/contact-centre" },
        { label: "SIP Trunking & Voice", path: "/telco/sip-trunking" },
        { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
        { label: "Business nbn™ Fiber", path: "/telco/business-nbn" },
        { label: "Enterprise Ethernet", path: "/telco/enterprise-ethernet" },
        { label: "Ultra-Fast Fibre", path: "/telco/fast-fibre" },
        { label: "Inbound & 1300 Services", path: "/telco/inbound-services" },
        { label: "Business Mobile Plans", path: "/telco/mobile-plans" },
      ]
    },
    {
      title: "Industry Verticals",
      icon: Building2,
      links: [
        { label: "Industries Overview", path: "/industries" },
        { label: "Retail & Multi-site Commerce", path: "/industries/retail" },
        { label: "Healthcare & Critical Systems", path: "/industries/healthcare" },
        { label: "Hospitality & Guest Networks", path: "/industries/hospitality" },
        { label: "Education & Campus IT", path: "/industries/education" },
        { label: "Professional Service Firms", path: "/industries/professional-services" },
        { label: "Real Estate & Property Tech", path: "/industries/real-estate" },
        { label: "Non-Profit & Social Impact", path: "/industries/non-profit" },
      ]
    },
    {
      title: "Modern Workplace Solutions",
      icon: Zap,
      links: [
        { label: "Modern Workplace Overview", path: "/modern-workplace" },
        { label: "Business Productivity", path: "/modern-workplace/productivity" },
        { label: "Team Collaboration Tools", path: "/modern-workplace/collaboration" },
        { label: "Communication Infrastructure", path: "/modern-workplace/communication-tools" },
        { label: "Modern Endpoint Management", path: "/modern-workplace/endpoint-management" },
        { label: "CCTV & People Count Intelligence", path: "/modern-workplace/cctv-people-count" },
        { label: "Visitor & Print Solutions", path: "/modern-workplace/productivity" },
      ]
    },
    {
      title: "Strategic Entry Points",
      icon: Globe,
      links: [
        { label: "Greenfield Infrastructure", path: "/greenfield" },
        { label: "Business Transformation", path: "/business" },
        { label: "Enterprise Operations", path: "/enterprise" },
        { label: "Pricing & Models", path: "/pricing" },
        { label: "New Office Setup", path: "/help/new-office-setup" },
        { label: "Secure WiFi Deployment", path: "/help/secure-wifi" },
      ]
    },
    {
      title: "Company & Support",
      icon: Briefcase,
      links: [
        { label: "About C9 Communications", path: "/about" },
        { label: "Why Partner with C9", path: "/about/why-c9" },
        { label: "Case Study Portfolio", path: "/case-studies" },
        { label: "Strategic Partners", path: "/about/partners" },
        { label: "Engineering Careers", path: "/about/careers" },
        { label: "Executive & Support Team", path: "/about/team" },
        { label: "Client Success Reviews", path: "/about/reviews" },
        { label: "Technical Support", path: "/support" },
        { label: "Contact Us", path: "/contact" },
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Terms of Service", path: "/terms" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-100 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className={C}>
          <div className="max-w-3xl">
            <span className="c9-eyebrow mb-4">Structural Directory</span>
            <h1 className="c9-hero-title !text-5xl lg:!text-6xl mb-6">Master Sitemap.</h1>
            <p className="c9-body text-lg">
              A verified directory of every active functional path within the C9 Communications infrastructure.
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
          <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Our engineering team is available 24/7 to discuss your specific infrastructure requirements.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[#5D00D6] px-8 py-4 rounded-full font-bold hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/40"
          >
            Contact Engineering 
          </Link>
        </div>
      </div>
    </main>
  );
}
