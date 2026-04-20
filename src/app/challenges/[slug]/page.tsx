'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { 
  Cpu, 
  ShieldAlert, 
  RefreshCcw, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Activity
} from 'lucide-react';
import { motion } from 'framer-motion';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

const CHALLENGE_DATA: Record<string, any> = {
  'digital-transformation': {
    icon: Cpu,
    title: 'Digital Transformation',
    eyebrow: 'MODERNISE & OPTIMISE',
    description: 'Modernise your infrastructure and unlock team productivity with cloud-first architecture and seamless Microsoft 365 integration.',
    impacts: [
      { title: 'Cloud-First Operations', desc: 'Secure, accessible data for your entire team, anywhere in the world.' },
      { title: 'Automated Workflows', desc: 'Remove manual bottlenecks with intelligent digital processes.' },
      { title: 'Legacy Migration', desc: 'Safe, managed transition from outdated hardware to modern cloud platforms.' },
      { title: 'Improved Collaboration', desc: 'Real-time sync and communication across all business units.' }
    ],
    outcome: 'A modern, flexible business that scales without IT complexity holding you back.'
  },
  'security-compliance': {
    icon: ShieldAlert,
    title: 'Security & Compliance',
    eyebrow: 'PROTECT & COMPLY',
    description: 'Protect your organisation with Essential 8 compliance, continuous threat monitoring, and rigorously tested recovery systems.',
    impacts: [
      { title: 'Essential 8 Compliance', desc: 'Adherence to the leading Australian cybersecurity standards.' },
      { title: '24/7 Threat Monitoring', desc: 'Proactive detection of vulnerabilities before they become breaches.' },
      { title: 'Employee Awareness', desc: 'Cybersecurity training to turn your team into a human firewall.' },
      { title: 'Compliance Reporting', desc: 'Clear, audit-ready data for stakeholders and regulators.' }
    ],
    outcome: 'Absolute confidence that your data, reputation, and operations are fully protected.'
  },
  'business-continuity': {
    icon: RefreshCcw,
    title: 'Business Continuity',
    eyebrow: 'REDUNDANCY & RECOVERY',
    description: 'Backup, disaster recovery, and automated failover — designed to keep your business running no matter what occurs.',
    impacts: [
      { title: 'Automated Backups', desc: 'Frequent, verified backups of all critical business data.' },
      { title: 'Disaster Recovery', desc: 'Clearly defined protocols to restore operations within minutes, not days.' },
      { title: 'Network Redundancy', desc: 'Multiple internet links ensures you stay online during provider outages.' },
      { title: 'Offsite Integrity', desc: 'Encrypted offsite storage ensuring safety from physical or site-wide issues.' }
    ],
    outcome: 'Zero-fear operations where downtime is a thing of the past.'
  },
  'growth-scalability': {
    icon: TrendingUp,
    title: 'Growth & Scalability',
    eyebrow: 'SCALE WITHOUT FRICTION',
    description: 'Scale your connectivity, workforce tools, and IT capability as your business expands across departments or locations.',
    impacts: [
      { title: 'Multi-Site Rollouts', desc: 'Standardised IT and Telco setups for rapid new location opening.' },
      { title: 'On-Demand Capacity', desc: 'Easily add users, data, and bandwidth as your requirements increase.' },
      { title: 'Scalable Voice', desc: 'Cloud phone systems that grow from 5 to 500 users instantly.' },
      { title: 'Managed IT Strategy', desc: 'Expert vCIO guidance to align technology with your 3-year growth plan.' }
    ],
    outcome: 'Technology that acts as a growth accelerator, not a bottleneck.'
  }
};

export default function ChallengeDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = CHALLENGE_DATA[slug] || CHALLENGE_DATA['digital-transformation'];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#5D00D6]/5 border border-[#5D00D6]/10 rounded-full px-4 py-1.5 mb-8">
              <Zap size={14} className="text-[#5D00D6]" />
              <span className="text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest">{data.eyebrow}</span>
            </div>
            
            <h1 className="text-[40px] md:text-[60px] font-bold text-[#1A1A2E] leading-[1.1] mb-8">
              {data.title}
            </h1>
            
            <p className="text-[#6B7280] text-[20px] md:text-[22px] leading-relaxed mb-12 max-w-2xl">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-8">What this means for your operations</h2>
              <p className="text-gray-600 text-lg mb-12">
                We don't just fix problems; we create foundations for long-term stability and growth.
              </p>
              
              <div className="space-y-8">
                {data.impacts.map((impact: any, idx: number) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center shrink-0 group-hover:bg-[#5D00D6] transition-colors duration-300">
                      <CheckCircle2 size={24} className="text-[#5D00D6] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#1A1A2E] mb-2">{impact.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{impact.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-[40px] overflow-hidden border border-slate-200 p-8 flex flex-col justify-center items-center text-center">
                 <div className="w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-10">
                    <data.icon size={48} className="text-[#5D00D6]" />
                 </div>
                 <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">The Outcome</h3>
                 <p className="text-xl font-medium text-[#5D00D6] leading-relaxed italic">
                    "{data.outcome}"
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leads / Form Section */}
      <div id="consultation-section">
        <WpConsultationForm
          eyebrow="READY TO START?"
          title={`Solve your ${data.title} challenges today`}
          description="Speak with our engineering team to determine the right path for your business requirements."
          formTitle="Start Your Consultation"
        />
      </div>
    </main>
  );
}
