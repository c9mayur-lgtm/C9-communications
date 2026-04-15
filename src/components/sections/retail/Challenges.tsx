import React from 'react';
import { Shield } from "lucide-react";
import Link from "next/link";

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

export default function Challenges() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="c9-eyebrow mb-4 block">
            CHALLENGES WE SOLVE
          </span>
          <h2 className="c9-section-heading">
            The problems retail businesses <br className="hidden md:block" /> bring to us.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:flex-wrap divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {[
            {
              title: 'Store connectivity that never goes down',
              desc: "A store without internet can't process payments, access inventory systems, or run digital displays. We implement redundant connectivity with automatic failover — so a line fault never closes your store.",
            },
            {
              title: 'Payment security and PCI-DSS compliance',
              desc: "Retailers processing card payments have PCI-DSS obligations that require documented security controls across your payment environment. We implement the controls and maintain the evidence trail.",
              link: { href: 'https://c9defense.com.au/', text: 'C9 DEFENSE — READ MORE' }
            },
            {
              title: 'Managing IT across multiple store locations',
              desc: "Each new store shouldn't mean a new IT headache. C9 manages your entire retail network from a single agreement — consistent standards, centralised monitoring, and one point of contact for every location.",
            },
            {
              title: 'Digital displays and in-store technology',
              desc: "Digital signage, promotional displays, and in-store screens need to be on, current, and managed. C9 deploys and maintains in-store display technology as part of your broader IT environment.",
            }
          ].map((f, i) => (
            <div key={i} className={`flex flex-col items-start w-full lg:w-1/4 ${
              i === 0 ? 'pb-8 lg:pb-0 lg:pr-8' :
              i === 3 ? 'pt-8 lg:pt-0 lg:pl-8' :
              'py-8 lg:py-0 lg:px-8'}`}>
              <div className="w-14 h-14 mb-6 flex items-center justify-start">
                <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/5 border border-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] font-bold text-xl">
                  0{i + 1}
                </div>
              </div>
              <h3 className="c9-card-title mb-4 !text-[20px]">{f.title}</h3>
              <p className="c9-body !text-[15px] md:!text-[16px] mb-6">{f.desc}</p>
              {f.link && (
                <div className="mt-auto pt-2 border-t-[1px] border-gray-100 w-full">
                  <Link href={f.link.href} className="inline-flex items-center gap-2 c9-eyebrow !text-[12px] hover:opacity-80 transition-opacity mt-4">
                    <Shield size={14} fill="currentColor" /> C9 DEFENSE — READ MORE
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
