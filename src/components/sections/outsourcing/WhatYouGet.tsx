import React from 'react';
import { Card } from "@/components/ui/card";
import { Headphones, Activity, RefreshCw, Server, TrendingUp, Wifi, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Headphones,
    title: "Helpdesk & user support",
    body: "Every IT problem your staff encounter — resolved by an Australian-based team that knows your environment. Remote and on-site. Defined SLAs. No offshore routing.",
    tags: ['AU Support', 'Defined SLAs', 'Remote & On-site'],
    link: "/managed-it/helpdesk-support"
  },
  {
    icon: Activity,
    title: "Proactive monitoring",
    body: "Your servers, network, and devices monitored 24/7. Issues flagged and resolved before your staff notice them. Not reactive support — prevention built in.",
    tags: ['24/7 Monitoring', 'Issue Detection', 'Network Health'],
    link: null
  },
  {
    icon: RefreshCw,
    title: "Patch & lifecycle management",
    body: "Operating systems, software, and firmware kept current. Hardware tracked on a lifecycle plan so you're never caught with unsupported infrastructure.",
    tags: ['Security Patches', 'Firmware Updates', 'Hardware Lifecycle'],
    link: null
  },
  {
    icon: Server,
    title: "Infrastructure management",
    body: "Servers, storage, networking, and cloud infrastructure designed, deployed, and maintained by C9. Your environment documented end-to-end from day one.",
    tags: ['Server Hosting', 'Cloud Management', 'Architecture'],
    link: null
  },
  {
    icon: TrendingUp,
    title: "vCIO and IT strategy",
    body: "A virtual CIO who attends your planning discussions, builds your IT roadmap, manages your vendors, and makes sure your technology investment matches your business goals.",
    tags: ['Strategic Planning', 'Vendor Management', 'Reporting'],
    link: null
  },
  {
    icon: Wifi,
    title: "Telco integration",
    body: "Because C9 also manages Telco — your internet, voice, and mobile can sit under the same agreement. One bill, one contact, no gap between IT and connectivity.",
    tags: ['Internet & Voice', 'Mobile Fleet', 'One Bill'],
    link: "/telco"
  }
];

export default function WhatYouGet() {
  return (
    <section id="scope-section" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Background Gradient matching WpSolutions */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#7B2FBE] to-white z-0" />

      <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-16 gap-4 font-sans">
          <span className="text-white text-[14px] font-bold uppercase tracking-[0.25em] mb-6 block" >
            SCOPE OF SERVICE
          </span>
          <h2 className="c9-section-heading !text-white" >
            Not a helpdesk number.<br />A full IT department.
          </h2>
          <p className="text-white/85 text-[16px] max-w-[720px] leading-relaxed mt-2 font-normal" >
            Here is exactly what C9 manages when you outsource your IT to us. A consolidated service layer that covers every aspect of your business technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
              <div className="mb-6">
                <s.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
              </div>

              <h3 className="text-[22px] font-bold mb-3 text-[#0c1024] tracking-tight leading-tight" >
                {s.title}
              </h3>

              <p className="text-[#4B5563] text-[16px] mb-6 leading-relaxed flex-grow font-normal" >
                {s.body}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((tag, ti) => (
                  <span key={ti} className="text-[11px] font-semibold uppercase tracking-wider text-[#5D00D6] bg-[#5D00D6]/10 px-3 py-1 rounded-none font-sans">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-full h-[1px] bg-gray-100 mt-auto mb-5"></div>
              
              <div className="flex items-center text-[14px] font-bold text-[#5D00D6] group-hover:underline uppercase tracking-wider font-sans">
                {s.link ? 'Learn more' : 'Full Scope Details'}
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

