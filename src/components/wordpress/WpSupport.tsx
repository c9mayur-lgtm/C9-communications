'use client';

import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const WpSupport = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="mb-16 text-center">
          <span className="c9-eyebrow mb-4 block">ALWAYS SUPPORTED</span>
          <h2 className="c9-section-heading text-[#0c1024] mb-6">
            Proactive Monitoring. <br className="hidden md:block" /> Rapid Response.
          </h2>
          <p className="c9-body max-w-3xl mx-auto">
            24/7 monitoring and responsive support ensure issues are detected and resolved before they impact operations. We don’t just fix problems—we prevent them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              title: "Rapid Response for Critical Issues",
              desc: "Our Priority 1 Support Team ensures critical issues are escalated and resolved instantly, minimisng impact on your operations.",
              img: "/images/support/specialist.png",
              link: "VIEW SLA"
            },
            {
              title: "Ongoing System Monitoring",
              desc: "We monitor your network and endpoints 24/7, detecting and neutralising threats or performance bottlenecks before you even notice them.",
              img: "/images/support/safeguarding-support.jpg",
              link: "SEE MONITORING"
            },
            {
              title: "Dedicated Support Structure",
              desc: "You have direct access to a dedicated accounting and engineering team that understands your unique environment and takes ownership.",
              img: "/images/support/remote.png",
              link: "MEET THE TEAM"
            }
          ].map((card, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-none overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay group-hover:bg-[#5D00D6]/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="c9-card-title text-[#0c1024] mb-3 group-hover:text-[#5D00D6] transition-colors">
                {card.title}
              </h3>
              <p className="c9-body mb-6 line-clamp-3">
                {card.desc}
              </p>
              <div className="flex items-center gap-2 c9-eyebrow !text-[#5D00D6] !text-[10px] group-hover:underline">
                {card.link} <ArrowRight size={14} strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Support Content (Puts People Before Profit) */}
        <div className="mt-20 pt-20 border-t border-gray-100 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div>
            <h2 className="c9-section-heading text-[#0c1024] mb-8">
              Support That Puts People Before Profit
            </h2>
            <p className="c9-body mb-10">
              We believe support should be driven by care and genuine service — not sales targets. Our nationwide team is committed to solving problems fast and reducing downtime, making every interaction feel human.
            </p>
            <div className="space-y-8">
              {[
                { title: "Priority 1 Support, Every Time", desc: "Critical issues are escalated instantly to our responders for rapid action." },
                { title: "Empathy‑First Service", desc: "We lead with understanding, listening carefully to your unique situation." },
                { title: "Nationwide Specialists", desc: "Consistent, high‑quality care across all metropolitan and regional areas." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-8 h-8 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={16} className="text-[#5D00D6]" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="c9-card-title !text-[18px] text-[#0c1024] mb-1">{item.title}</h4>
                    <p className="c9-body !text-[14px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-none overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000" alt="Customer Care" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[24px] shadow-2xl max-w-[280px] border border-gray-100 hidden md:block">
              <div className="text-[#5D00D6] font-medium text-[36px] mb-1 leading-none tracking-tighter">24/7</div>
              <div className="c9-eyebrow !text-gray-900 !text-[9px] !leading-snug">Critical Support<br />Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
