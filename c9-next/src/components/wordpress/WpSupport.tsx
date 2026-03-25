'use client';

import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const WpSupport = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="mb-10 text-center">
          <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.3em] mb-4 block" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>Support</span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0c1024] tracking-tight leading-[1.1] mb-6" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
            World‑Class Support Delivered by <br />Fully Trained Australian Experts
          </h2>
          <p className="text-[18px] text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
            At C9 Communications, support isn’t just a service — it’s a promise. Our fully trained, nationally deployed team is dedicated to providing human‑centred support backed by genuine accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "100% Australian Support",
              desc: "Every technician and coordinator is based in Australia. You get local experts who understand the Aussie way of doing business — available 7 days a week.",
              img: "/images/support/specialist.png",
              link: "SEE MORE"
            },
            {
              title: "Safeguarding Your Business",
              desc: "Our Priority 1 Support Team ensures critical issues are escalated instantly. We monitor our network 24/7 to safeguard your business connectivity.",
              img: "/images/support/safeguarding-support.jpg",
              link: "SEE MORE"
            },
            {
              title: "Manage Services On-The-Go",
              desc: "Whether you're in the office or remote, our national support network ensures consistent, high‑quality service wherever your business operates.",
              img: "/images/support/remote.png",
              link: "SEE MORE"
            }
          ].map((card, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-none overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay group-hover:bg-[#5D00D6]/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0c1024] mb-4 tracking-tight group-hover:text-[#5D00D6] transition-colors" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                {card.title}
              </h3>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed mb-6 font-normal line-clamp-3" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                {card.desc}
              </p>
              <div className="flex items-center gap-2 text-[14px] font-bold text-[#5D00D6] hover:underline uppercase tracking-widest" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                {card.link} <ArrowRight size={16} strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Support Content (Puts People Before Profit) */}
        <div className="mt-20 pt-20 border-t border-gray-100 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-8" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              Support That Puts People Before Profit
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed font-normal mb-10" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
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
                    <CheckCircle size={16} className="text-[#5D00D6]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[18px] text-[#0c1024] mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-[15px]">{item.desc}</p>
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
              <div className="text-[#5D00D6] font-bold text-[36px] mb-2 leading-none">24/7</div>
              <div className="text-gray-900 font-bold text-[14px] uppercase tracking-[0.2em] leading-tight">Critical Support<br />Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
