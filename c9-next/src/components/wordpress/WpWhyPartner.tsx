'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall, Wifi, ShieldCheck, Truck, Layers, Headphones } from 'lucide-react';

const CountUp = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = useRef<HTMLSpanElement>(null);
  const startValue = 0;
  
  // Extract numeric part
  const numericMatch = value.match(/[\d.]+/);
  const suffix = value.replace(/[\d.]+/, "");
  const target = numericMatch ? parseFloat(numericMatch[0]) : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start: number | null = null;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / (duration * 1000), 1);
            const current = Math.floor(progress * (target - startValue) + startValue);
            setDisplayValue(current.toString() + suffix);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [value, target, suffix, duration]);

  return <span ref={nodeRef}>{displayValue}</span>;
};

export const WpWhyPartner = () => {
  return (
    <section className="py-14 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto px-6">
          <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.4em] mb-6 block">Why Partner With Us</span>
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#0c1024] leading-[1.1] tracking-tight">
            What global companies use C9 Communications for
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {[
            { 
              title: 'Business Voice & C9X', 
              desc: "Replace your legacy phone system with C9X — 80+ features, $0 hardware, and a migration your team won't even notice. From $20/user per month.",
              icon: PhoneCall,
              tag: 'VOICE & CLOUD PHONE',
              metrics: [
                { value: '80+', label: 'features included' },
                { value: '$20', label: 'per user / month' }
              ]
            },
            { 
              title: 'Business NBN', 
              desc: 'Unlimited data, static IP, and a business-grade SLA backed by Telstra, Optus, Vocus and C9 Communications wholesale networks. Always-on connectivity, guaranteed.',
              icon: Wifi,
              tag: 'BUSINESS INTERNET',
              metrics: [
                { value: '99.9%', label: 'uptime SLA' },
                { value: '1Gbps', label: 'max plan speed' }
              ]
            },
            { 
              title: 'Managed IT & Security', 
              desc: 'Proactive monitoring, firewall management, and cybersecurity from Australian-based engineers — so your team stays productive and your data stays protected.',
              icon: ShieldCheck,
              tag: 'MANAGED IT',
              metrics: [
                { value: '24/7', label: 'proactive monitoring' },
                { value: '100%', label: 'Australian engineers' }
              ]
            },
            { 
              title: 'Office Relocation', 
              desc: 'Moving office? We connect your voice, internet, IT, and print before you walk through the door. 500+ relocations completed. Zero downtime reported.',
              icon: Truck,
              tag: 'OFFICE RELOCATION',
              metrics: [
                { value: '500+', label: 'relocations done' },
                { value: '0', label: 'downtime reported' }
              ]
            },
            { 
              title: 'Unified Communications', 
              desc: "Voice, video, messaging, and collaboration — all in one platform. C9X connects your team whether they're in the office, at home, or on the road.",
              icon: Layers,
              tag: 'UNIFIED COMMS',
              metrics: [
                { value: '40+', label: 'integrations' },
                { value: '48hr', label: 'average go-live' }
              ]
            },
            { 
              title: 'Australian Support Team', 
              desc: 'Every support call is answered by someone in Australia who knows your account. No offshore centres. No ticket queues. No runaround.',
              icon: Headphones,
              tag: 'LOCAL SUPPORT',
              metrics: [
                { value: '1,000+', label: 'businesses supported' },
                { value: '4.8★', label: 'Google rating' }
              ]
            }
          ].map((block, i) => (
            <div key={i} className="p-8 md:p-12 lg:p-16 border-r border-b border-gray-200 transition-all duration-300 cursor-default flex flex-col">
              <div className="mb-4 self-start">
                <span className="px-4 py-1.5 rounded-full border bg-[#F4F0FA] border-[#5D00D6]/20 text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.08em]" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                  {block.tag}
                </span>
              </div>
              <div className="mb-6 mt-4">
                <block.icon size={32} strokeWidth={1.5} color="#5D00D6" fill="none" />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#0c1024] mb-4 tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{block.title}</h3>
              <p className="text-gray-600 text-[14px] md:text-[18px] leading-relaxed font-normal mb-8 flex-grow" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                {block.desc}
              </p>

              {/* Metrics Row */}
              <div className="mt-auto pt-6 border-t border-gray-200 flex items-center gap-0">
                {block.metrics.map((m, mi) => (
                  <React.Fragment key={mi}>
                    <div className="flex-1">
                      <div className="text-[28px] font-bold text-[#5D00D6] leading-none tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                        <CountUp value={m.value} />
                      </div>
                      <div className="text-[12px] text-[#6B7280] mt-1 font-medium" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                        {m.label}
                      </div>
                    </div>
                    {mi === 0 && <div className="h-10 w-[1px] bg-[#5D00D6]/30 mx-6"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
