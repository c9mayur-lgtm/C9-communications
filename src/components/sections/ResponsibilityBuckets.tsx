'use client';

import React from 'react';
import { Network, PhoneCall, Monitor, ShieldCheck, Headphones } from 'lucide-react';

export const ResponsibilityBuckets = () => {
  const buckets = [
    {
      title: "Internet & Network Infrastructure",
      icon: <Network className="w-10 h-10 text-[#5D00D6]" />,
      description: "Business-grade fiber, managed Wi-Fi, and network switching. We handle the design, install, and performance monitoring."
    },
    {
      title: "Communication Systems",
      icon: <PhoneCall className="w-10 h-10 text-[#5D00D6]" />,
      description: "Phone systems and Unified Communications (UC). Seamless cloud-based voice solutions that work anywhere."
    },
    {
      title: "Workplace Setup",
      icon: <Monitor className="w-10 h-10 text-[#5D00D6]" />,
      description: "Devices, displays, and access control. We procure, configure, and install everything your team needs to be productive."
    },
    {
      title: "Security & Monitoring",
      icon: <ShieldCheck className="w-10 h-10 text-[#5D00D6]" />,
      description: "24/7 security monitoring and proactive threat detection. Protecting your business data and infrastructure around the clock."
    },
    {
      title: "Ongoing IT Management",
      icon: <Headphones className="w-10 h-10 text-[#5D00D6]" />,
      description: "Full-service IT support and management. We act as your internal IT department, providing expert guidance and fast resolutions."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="max-w-3xl mb-16">
          <h2 className="c9-section-heading mb-6">
            What We Take Off Your Plate
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We don't just sell products; we take full responsibility for your technology environment. 
            From initial design to daily management, we run the systems so you can run your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {buckets.map((bucket, i) => (
            <div key={i} className="flex flex-col gap-6 p-2 group">
              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-brand-purple/5 transition-colors duration-500">
                {bucket.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {bucket.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-dm-sans">
                  {bucket.description}
                </p>
              </div>
            </div>
          ))}
          {/* Empty spot to maintain grid flow or add a CTA card */}
          <div className="p-10 rounded-[40px] bg-[#5D00D6] flex flex-col justify-center items-start text-white gap-4 lg:col-span-1">
            <h3 className="text-2xl font-bold font-syne">Need a custom plan?</h3>
            <p className="text-purple-100/80">Get a solution tailored specifically for your business size and industry.</p>
            <button className="mt-4 px-6 py-3 bg-white text-[#5D00D6] rounded-full font-bold hover:bg-purple-50 transition-colors">
              Request Setup Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
