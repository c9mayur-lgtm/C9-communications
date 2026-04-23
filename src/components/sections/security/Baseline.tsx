import React from 'react';
import { Shield, RefreshCw, Lock, Mail, Database, GraduationCap } from 'lucide-react';

export default function Baseline() {
  const cards = [
    {
      icon: Shield,
      title: "Endpoint Protection",
      body: "Every device — laptops, desktops, mobiles, and servers — protected with enterprise-grade endpoint security, monitored and managed by C9."
    },
    {
      icon: RefreshCw,
      title: "Patch Management",
      body: "Operating systems, software, and firmware kept current across your entire device fleet. Vulnerabilities closed before they can be exploited."
    },
    {
      icon: Lock,
      title: "MFA & Access Control",
      body: "Multi-factor authentication enforced across all systems. User access provisioned on least-privilege principles and revoked immediately on departure."
    },
    {
      icon: Mail,
      title: "Email Security",
      body: "Anti-phishing, spam filtering, and business email compromise protection — the most common attack vector covered as standard."
    },
    {
      icon: Database,
      title: "Managed Backup",
      body: "Your data backed up, replicated offsite, and tested for recovery. Not just backup — verified backup."
    },
    {
      icon: GraduationCap,
      title: "Security Awareness",
      body: "Basic security awareness for your staff — phishing recognition, password hygiene, and safe computing habits."
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Full-width purple-to-white gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#946CE2] to-white z-0" />

      <div className="container mx-auto px-6 md:px-8 relative z-10 w-full" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col mb-16 gap-4 text-left">
          <span className="c9-eyebrow !text-white opacity-80 mb-4 block">
            MANAGED IT SECURITY — WHAT'S INCLUDED
          </span>
          <h2 className="c9-section-heading !text-white">
            Security built into every<br className="hidden md:block" /> Managed IT engagement.
          </h2>
          <p className="c9-body !text-white/85 max-w-[600px] mt-2">
            You don't need to add security as an extra. Every C9 Managed IT client receives these controls as standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
              
              {/* Icon */}
              <div className="mb-6">
                <card.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="c9-card-title mb-3 !text-[20px]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="c9-body mb-6 flex-grow !text-[14px] md:!text-[16px]">
                {card.body}
              </p>

              {/* Divider and Footer */}
              <div className="w-full h-[1px] bg-gray-200 mt-auto mb-5"></div>
              <div className="flex items-center c9-eyebrow !text-[12px] group-hover:underline">
                Learn more
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
