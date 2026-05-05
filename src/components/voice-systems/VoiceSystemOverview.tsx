'use client';

import React from 'react';
import { Phone, PhoneIncoming, Video, Smartphone, Network, Headphones } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const CAPABILITIES = [
  {
    icon: Phone,
    title: "Cloud calling for your whole team",
    desc: "HD voice calls, auto-attendant, voicemail-to-email, call recording, and 80+ features — all in the cloud. No hardware, no maintenance, no on-site PBX.",
    tags: ["Powered by C9 phone system"],
    link: "/telco/cloud-phone"
  },
  {
    icon: PhoneIncoming,
    title: "1300, 1800 & smart call routing",
    desc: "Your inbound numbers, professionally managed. IVR menus, hunt groups, time-based routing, and overflow handling — so every caller reaches the right person.",
    tags: ["Inbound Services"],
    link: "/telco/inbound-services"
  },
  {
    icon: Video,
    title: "Make calls directly from Microsoft Teams",
    desc: "Your team already lives in Teams. C9 connects your phone system directly to it — so you can call any number in the world without leaving Teams.",
    tags: ["Teams Direct Routing"],
    link: "/telco/teams-calling"
  },
  {
    icon: Smartphone,
    title: "Your office number, on any device",
    desc: "Take and make calls from your mobile, laptop, or desk phone — all under the same number, same system, same bill. Perfect for hybrid and remote teams.",
    tags: ["Mobile + Softphone", "Hybrid Work"],
    link: "/telco/cloud-phone"
  },
  {
    icon: Network,
    title: "Business-grade lines, always on",
    desc: "SIP trunking and failover routing means your phones keep working even if one connection goes down. No single point of failure.",
    tags: ["SIP Trunking"],
    link: "/telco/sip-trunking"
  },
  {
    icon: Headphones,
    title: "Ready for a contact centre? We've got that too.",
    desc: "When your business grows beyond a phone system, C9's contact centre layer adds queuing, agent management, reporting, and omnichannel — no new vendor required.",
    tags: ["Contact Centre Expansion"],
    link: "/telco/contact-centre"
  }
];

export const VoiceSystemOverview = () => {
  return (
    <section id="whats-included" className="relative py-12 md:py-16 overflow-hidden">
      {/* Full-width purple-to-white gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#946CE2] to-white z-0" />

      <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-16 gap-4">
          <span className="c9-eyebrow !text-white mb-4 block">THE COMPLETE SYSTEM</span>
          <h2 className="c9-section-heading !text-white mb-6">
            Not a phone plan.<br />
            A managed communication system.
          </h2>
          <p className="c9-body !text-white/85 max-w-[720px]">
            Every capability below is included, configured, and supported by C9. Not sold separately. Not left for you to figure out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap, i) => (
            <Link 
              key={i} 
              href={cap.link}
              className="bg-white p-6 md:p-10 rounded-[32px] shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100"
            >
              {/* Icon */}
              <div className="mb-6">
                <cap.icon size={44} className="text-[#5D00D6]" strokeWidth={1.2} />
              </div>

              {/* Title */}
              <h3 className="c9-card-title mb-3 text-[#0c1024] group-hover:text-[#5D00D6] transition-colors">{cap.title}</h3>

              {/* Description */}
              <p className="c9-body mb-6 flex-grow">{cap.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cap.tags.map((tag, ti) => (
                  <span key={ti} className="c9-eyebrow !text-[#5D00D6] !text-[9px] bg-[#5D00D6]/5 px-3 py-1 rounded-full border border-[#5D00D6]/10">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-full h-[1px] bg-gray-100 mt-auto mb-6"></div>
              <div className="flex items-center c9-eyebrow !text-[#5D00D6] !text-[10px] group-hover:underline">
                Explore feature
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Button 
            size="lg" 
            onClick={() => window.dispatchEvent(new CustomEvent('c9-open-lead-modal', { detail: { interest: 'voice system overview' } }))}
            className="shadow-2xl hover:gap-4 transition-all px-10 h-14 rounded-full font-medium"
          >
            Get a tailored voice quote 
          </Button>
        </div>
      </div>
    </section>
  );
};
