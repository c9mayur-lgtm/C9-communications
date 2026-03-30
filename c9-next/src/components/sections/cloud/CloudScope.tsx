import React from 'react';
import { LayoutGrid, Cloud, GitMerge, Shield, Database, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

export default function CloudScope() {
  const layer1 = [
    {
      icon: LayoutGrid,
      title: "Microsoft 365 — Fully Managed",
      body: "Licensing, deployment, security configuration, user onboarding, Teams governance, SharePoint architecture, and ongoing administration. Not just M365 — M365 done properly.",
      tags: ["Licensing", "Teams", "SharePoint", "Intune"]
    },
    {
      icon: Cloud,
      title: "Azure Infrastructure (IaaS)",
      body: "Best-in-class infrastructure to handle all your Software as a Service needs — dedicated maintenance, virtual machines, storage, and networking without the need for on-site installations or troubleshooting.",
      tags: ["Virtual Machines", "Storage", "Networking"]
    },
    {
      icon: GitMerge,
      title: "Hybrid Cloud Management",
      body: "A combination of public and private cloud services managed through a single interface. C9 connects all your infrastructure environments — network, colocation, private, and public cloud — so you have one managed environment, not three separate ones.",
      tags: ["Public", "Private", "Colocation"]
    }
  ];

  const layer2 = [
    {
      icon: Shield,
      title: "Firewall as a Service (FWaaS)",
      body: "Maintaining security in-house is resource-intensive. C9 delivers an agile, flexible cloud security solution where we do the heavy lifting — protecting your organisation without the overhead of managing security infrastructure yourself.",
      tags: ["Cloud Firewall", "Managed Security"]
    },
    {
      icon: Database,
      title: "Backup as a Service (BaaS)",
      body: "Powered by trusted partner Veeam on the Vocus cloud platform, C9 makes it easy to back up your data securely. All data is hosted within Australian data centres — safely stored off-site while remaining on Australian soil.",
      tags: ["Veeam", "Vocus Cloud", "Australian Data Centres"],
      trigger: {
        label: "PAIRS WITH C9 DEFENSE — Recovery Assurance Program →",
        path: "/c9-defense"
      }
    },
    {
      icon: ShieldCheck,
      title: "Private Cloud",
      body: "Managed and made available through dedicated infrastructure, private cloud serves your organisation alone — geared to handle highly sensitive data typical in banking, finance, healthcare, and government. Compliant, isolated, and fully managed by C9.",
      tags: ["Banking", "Healthcare", "Finance", "Government"]
    }
  ];

  return (
    <section id="cloud-scope" className="relative py-24 overflow-hidden scroll-mt-20" style={FONT_FAMILY}>
      {/* Dynamic Purple-to-White gradient background matching Homepage Solutions */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#946CE2] to-white z-0" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] w-full relative z-10">
        <div className="mb-16">
          <span className="text-white/80 text-[11px] font-bold uppercase tracking-[0.25em] mb-4 block" style={FONT_FAMILY}>
            MANAGED CLOUD PORTFOLIO
          </span>
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mt-4 leading-[1.05] tracking-tight" style={FONT_FAMILY}>
            Your entire cloud ecosystem.<br className="hidden md:block" /> Engineered and maintained by C9.
          </h2>
          <p className="text-white/85 text-[16px] mt-6 max-w-[720px] leading-relaxed font-medium" style={FONT_FAMILY}>
            From Microsoft 365 licensing to fully isolated private cloud infrastructure — our managed services remove the complexity of day-to-day cloud administration.
          </p>
        </div>

        {/* LAYER 1 */}
        <div className="mt-20 mb-8 pb-3 border-b border-white/20">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60" style={FONT_FAMILY}>
            MANAGED CLOUD SERVICES
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {layer1.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
              <div className="mb-6">
                <item.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-bold mb-3 text-[#0c1024] tracking-tight leading-tight" style={FONT_FAMILY}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-[16px] mb-8 leading-relaxed flex-grow font-normal" style={FONT_FAMILY}>
                {item.body}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, ti) => (
                  <span key={ti} className="text-[11px] font-semibold uppercase tracking-wider text-[#5D00D6] bg-[#5D00D6]/8 px-3 py-1 rounded-full" style={FONT_FAMILY}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-full h-[1px] bg-gray-200 mt-auto mb-5"></div>
              <div className="flex items-center text-[13px] font-bold text-[#5D00D6] group-hover:underline uppercase tracking-wider" style={FONT_FAMILY}>
                Learn more
              </div>
            </div>
          ))}
        </div>

        {/* LAYER 2 */}
        <div className="mt-24 mb-8 pb-3 border-b border-gray-200">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400" style={FONT_FAMILY}>
            CLOUD SECURITY & PROTECTION
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {layer2.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
              <div className="mb-6">
                <item.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-bold mb-3 text-[#0c1024] tracking-tight leading-tight" style={FONT_FAMILY}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-[16px] mb-8 leading-relaxed flex-grow font-normal" style={FONT_FAMILY}>
                {item.body}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, ti) => (
                  <span key={ti} className="text-[11px] font-semibold uppercase tracking-wider text-[#5D00D6] bg-[#5D00D6]/8 px-3 py-1 rounded-full" style={FONT_FAMILY}>
                    {tag}
                  </span>
                ))}
              </div>

              {item.trigger && (
                <Link 
                  href={item.trigger.path} 
                  className="bg-[#0c1024] flex flex-col px-3 py-2 rounded-md mb-6 hover:bg-[#1C223A] transition-all group/defense"
                >
                  <p className="text-white text-[11px] font-medium mb-0.5" style={FONT_FAMILY}>Pairs with C9 Defense</p>
                  <p className="text-white/50 text-[10px] font-normal leading-snug group-hover/defense:text-white transition-colors" style={FONT_FAMILY}>
                    {item.trigger.label}
                  </p>
                </Link>
              )}

              <div className="w-full h-[1px] bg-gray-200 mt-auto mb-5"></div>
              <div className="flex items-center text-[13px] font-bold text-[#5D00D6] group-hover:underline uppercase tracking-wider" style={FONT_FAMILY}>
                Learn more
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
