'use client';

import React from 'react';
import { 
  ArrowRight, 
  UserPlus, 
  Cloud, 
  ShieldCheck, 
  Monitor, 
  Users, 
  Smartphone 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

export const WpSolutions = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Full-width purple-to-white gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#946CE2] to-white z-0" />

      <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-10 gap-4">
          <span className="text-white text-[13px] font-bold uppercase tracking-[0.3em] mb-2 block" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>What we do</span>
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-white leading-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>Solutions</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { icon: UserPlus, title: 'Managed Services', desc: 'Free your team from day-to-day IT issues with fully managed support, monitoring, and maintenance designed to keep your systems running smoothly.' },
            { icon: Cloud, title: 'Infrastructure & Cloud', desc: 'Modernize your IT environment with scalable cloud solutions and robust infrastructure services that support your business today and tomorrow.' },
            { icon: ShieldCheck, title: 'Cyber Security & Risk Management', desc: 'Protect your data, systems, and users with layered security solutions, compliance services, and proactive risk management strategies.' },
            { icon: Monitor, title: 'Internet', desc: 'Deliver fast, reliable internet across all locations with business-grade NBN™, fibre, and enterprise Ethernet tailored for high performance.' },
            { icon: Users, title: 'Voice', desc: 'Streamline communication with VoIP, SIP, Teams Calling, and unified solutions that connect teams, customers, and contact centers effortlessly.' },
            { icon: Smartphone, title: 'Mobile', desc: 'Empower a mobile workforce with business mobile plans and secure access to data and apps anytime, anywhere.' }
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 md:p-10 lg:p-12 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
              <div className="mb-8">
                <s.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold mb-4 text-[#0c1024] tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{s.title}</h3>
              <p className="text-gray-600 text-[14px] md:text-[18px] mb-8 leading-relaxed flex-grow font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{s.desc}</p>
              <div className="w-full h-[1px] bg-gray-300 mt-auto mb-6"></div>
              <div className="flex items-center text-[14px] font-bold text-[#5D00D6] group-hover:underline uppercase tracking-wider" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                Learn more
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="shadow-2xl hover:gap-4 transition-all group">
            View All Solutions <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
