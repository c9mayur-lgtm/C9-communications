import React from 'react';
import { Shield } from 'lucide-react';
import Link from "next/link";

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

export default function Challenges() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.3em] mb-4 block" style={fontStyle}>
            CHALLENGES WE SOLVE
          </span>
          <h2 className="c9-section-heading" style={fontStyle}>
            The problems education providers <br className="hidden md:block" /> bring to us.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:flex-wrap divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {[
            {
              title: 'Campus connectivity that keeps up with demand',
              desc: "Hundreds of devices, simultaneous video streaming, learning platforms, and administration systems all competing for bandwidth. We design and manage campus networks that handle peak demand without dropping out.",
            },
            {
              title: 'Student data privacy and compliance',
              desc: "Student records, assessment data, and personal information carry strict privacy obligations. We implement controls that protect student data and meet Australian privacy legislation requirements.",
              link: { href: 'https://c9defense.com.au/', text: 'C9 DEFENSE — Student data protection and Essential 8 compliance →' }
            },
            {
              title: 'Managing large device fleets',
              desc: "Student laptops, classroom displays, staff workstations, and shared lab devices across multiple buildings. C9 manages your entire device fleet — enrolled, patched, monitored, and supported.",
            },
            {
              title: 'IT support that works around the school day',
              desc: "Technology failures during class time have immediate learning impact. C9 provides proactive monitoring and fast response — minimising disruption to the teaching and learning environment.",
            }
          ].map((f, i) => (
            <div key={i} className={`flex flex-col items-start w-full lg:w-1/4 ${
              i === 0 ? 'pb-8 lg:pb-0 lg:pr-8' :
              i === 3 ? 'pt-8 lg:pt-0 lg:pl-8' :
              'py-8 lg:py-0 lg:px-8'}`}>
              <div className="w-14 h-14 mb-6 flex items-center justify-start">
                <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/5 border border-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] font-bold text-xl" style={fontStyle}>
                  0{i + 1}
                </div>
              </div>
              <h3 className="text-[20px] font-bold mb-4 text-[#0c1024] tracking-tight leading-snug" style={fontStyle}>{f.title}</h3>
              <p className="text-gray-600 text-[14px] md:text-[16px] leading-relaxed font-normal mb-6" style={fontStyle}>{f.desc}</p>
              {f.link && (
                <div className="mt-auto pt-2 border-t-[1px] border-gray-100 w-full">
                  <Link href={f.link.href} className="inline-flex items-center gap-2 text-[12px] font-black text-[#5D00D6] uppercase tracking-[0.12em] hover:opacity-80 transition-opacity mt-4" style={fontStyle}>
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
