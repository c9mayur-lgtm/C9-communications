import React from 'react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Headphones, Activity, RefreshCw, Server, TrendingUp, Wifi, ArrowRight } from 'lucide-react';

export default function WhatYouGet() {
  const layer1 = [
    {
      icon: Headphones,
      title: "Helpdesk & user support",
      body: "Every IT problem your staff encounter — resolved by an Australian-based team that knows your environment. Remote and on-site. Defined SLAs. No offshore routing.",
      link: { text: "How our helpdesk works →", href: "/managed-it/helpdesk-support" }
    },
    {
      icon: Activity,
      title: "Proactive monitoring",
      body: "Your servers, network, and devices monitored 24/7. Issues flagged and resolved before your staff notice them. Not reactive support — prevention built in."
    },
    {
      icon: RefreshCw,
      title: "Patch & lifecycle management",
      body: "Operating systems, software, and firmware kept current. Hardware tracked on a lifecycle plan so you're never caught with unsupported infrastructure."
    }
  ];

  const layer2 = [
    {
      icon: Server,
      title: "Infrastructure management",
      body: "Servers, storage, networking, and cloud infrastructure designed, deployed, and maintained by C9. Your environment documented end-to-end from day one."
    },
    {
      icon: TrendingUp,
      title: "vCIO and IT strategy",
      body: "A virtual CIO who attends your planning discussions, builds your IT roadmap, manages your vendors, and makes sure your technology investment matches your business goals."
    },
    {
      icon: Wifi,
      title: "Telco integration",
      body: "Because C9 also manages Telco — your internet, voice, and mobile can sit under the same agreement. One bill, one contact, no gap between IT and connectivity.",
      link: { text: "Explore Telco →", href: "/telco" }
    }
  ];

  const cardStyle = "group h-full bg-white rounded-2xl border-[0.5px] border-[#7B2FBE]/15 p-8 flex flex-col items-start gap-3 hover:border-[#7B2FBE] hover:-translate-y-0.5 transition-all duration-200 shadow-sm";
  const iconStyle = "w-12 h-12 bg-[#EDE9FE] rounded-xl flex items-center justify-center shrink-0 mb-4";
  const linkStyle = "mt-auto pt-4 border-t border-[#F3F4F6] w-full flex items-center gap-1 text-[13px] text-[#7B2FBE] font-medium font-dm-sans hover:gap-2 transition-all";

  return (
    <section id="scope-section" className="bg-[#F3EEFF] py-24 px-6 md:px-8 lg:px-12 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto max-w-[1240px]">
        <div className="text-left mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7B2FBE] font-dm-sans">
            SCOPE OF SERVICE
          </span>
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#1A1A2E] mt-4 font-syne leading-tight">
            Not a helpdesk number.<br className="hidden md:block" /> A full IT department.
          </h2>
          <p className="text-[18px] text-[#6B7280] max-w-[640px] mt-3 font-dm-sans leading-relaxed">
            Here is exactly what C9 manages when you outsource your IT to us.
          </p>
        </div>

        {/* LAYER 1 */}
        <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#6B7280] mt-12 mb-5 pb-3 border-b border-[#7B2FBE]/20 font-dm-sans">
          DAY-TO-DAY OPERATIONS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layer1.map((card, i) => (
            <Card key={i} className={cardStyle}>
              <div className={iconStyle}>
                <card.icon className="w-[22px] h-[22px] text-[#7B2FBE]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#1A1A2E] font-dm-sans leading-snug">
                {card.title}
              </h3>
              <p className="text-[14px] text-[#6B7280] leading-[1.6] mt-2 font-dm-sans">
                {card.body}
              </p>
              {card.link && (
                <Link href={card.link.href} className={linkStyle}>
                  <ArrowRight className="w-3.5 h-3.5" />
                  {card.link.text}
                </Link>
              )}
            </Card>
          ))}
        </div>

        {/* LAYER 2 */}
        <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#6B7280] mt-10 mb-5 pb-3 border-b border-[#7B2FBE]/20 font-dm-sans">
          STRATEGIC AND INFRASTRUCTURE LAYER
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layer2.map((card, i) => (
            <Card key={i} className={cardStyle}>
              <div className={iconStyle}>
                <card.icon className="w-[22px] h-[22px] text-[#7B2FBE]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#1A1A2E] font-dm-sans leading-snug">
                {card.title}
              </h3>
              <p className="text-[14px] text-[#6B7280] leading-[1.6] mt-2 font-dm-sans">
                {card.body}
              </p>
              {card.link && (
                <Link href={card.link.href} className={linkStyle}>
                  <ArrowRight className="w-3.5 h-3.5" />
                  {card.link.text}
                </Link>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
