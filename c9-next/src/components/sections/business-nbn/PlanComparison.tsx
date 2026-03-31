'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Star } from 'lucide-react';

const bestEffortSpeeds = ['50/50 Mbps', '100/100 Mbps', '250/250 Mbps', '500/500 Mbps'];
const committedSpeeds = ['100/100 Mbps', '250/250 Mbps', '500/500 Mbps', '1000/1000 Mbps'];

const bestEffortIncludes = [
  'Managed router included',
  '4G LTE failover connectivity',
  'NBN™ accredited support',
  'Dedicated account manager',
  'Monthly billing — no hidden fees',
];

const committedIncludes = [
  '100% committed guaranteed bandwidth',
  'Traffic Class 2 (TC2) prioritisation',
  'SLA-backed performance guarantee',
  'Priority fault resolution',
  'Enhanced network monitoring',
];

export default function PlanComparison() {
  const [contract, setContract] = useState<24 | 36>(36);
  const [bestEffortSpeed, setBestEffortSpeed] = useState(0);
  const [committedSpeed, setCommittedSpeed] = useState(3);

  return (
    <section
      id="plan-comparison"
      className="w-full bg-white py-24"
      style={{ fontFamily: '"Proxima Nova", sans-serif' }}
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">

        {/* Header */}
        <span className="text-[11px] uppercase tracking-widest text-[#5D00D6] font-semibold block">
          NBN™ PLANS
        </span>
        <h2 className="text-[36px] md:text-[44px] text-[#1A1A2E] font-bold mt-3 leading-[1.25]">
          Choose your Business NBN™ plan.
        </h2>
        <p className="text-[17px] text-[#6B7280] mt-3 max-w-[680px] leading-[1.7]">
          Two bandwidth tiers — Best Effort for standard business use, or Committed for organisations that need
          guaranteed performance. All plans include a managed router, 4G LTE failover, and dedicated support.
        </p>

        {/* Contract Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {([24, 36] as const).map((m) => (
            <button
              key={m}
              onClick={() => setContract(m)}
              className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                contract === m
                  ? 'bg-[#5D00D6] text-white'
                  : 'bg-[#F9F9F9] text-[#6B7280] border cursor-pointer hover:border-[#5D00D6]'
              }`}
              style={{ border: contract === m ? 'none' : '0.5px solid #E5E7EB' }}
            >
              {m} months
            </button>
          ))}
        </div>
        {contract === 36 && (
          <div className="flex items-center gap-1 justify-center mt-2">
            <Star size={12} className="text-[#5D00D6]" />
            <span className="text-[12px] text-[#5D00D6]">
              $0 fibre install available on 36-month contracts
            </span>
          </div>
        )}

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          {/* PLAN 1: Best Effort */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: 'white', border: '0.5px solid rgba(93,0,214,0.15)' }}
          >
            {/* Header */}
            <div className="bg-[#F8F7FF] p-6" style={{ borderBottom: '0.5px solid rgba(93,0,214,0.12)' }}>
              <span
                className="bg-white border border-[#5D00D6] rounded-full px-3 py-1 text-[10px] text-[#5D00D6] font-semibold"
              >
                NBN™ Enterprise Ethernet
              </span>
              <h3 className="text-[26px] text-[#1A1A2E] font-bold mt-3">Best Effort</h3>
              <p className="text-[14px] text-[#6B7280] mt-1">Low CoS — shared bandwidth pool</p>
              <p className="text-[13px] text-[#6B7280] leading-[1.6] mt-3">
                High-quality business internet with consistent performance for everyday business use —
                email, cloud applications, video conferencing, and web browsing.
              </p>
            </div>

            {/* Speed Options */}
            <div className="p-6" style={{ borderBottom: '0.5px solid rgba(93,0,214,0.08)' }}>
              <span className="text-[11px] text-[#9CA3AF] uppercase tracking-wider block mb-4">SELECT SPEED</span>
              <div className="flex flex-col gap-2">
                {bestEffortSpeeds.map((speed, i) => (
                  <button
                    key={speed}
                    onClick={() => setBestEffortSpeed(i)}
                    className={`flex justify-between items-center p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                      bestEffortSpeed === i
                        ? 'bg-[#F8F7FF] border-[#5D00D6]'
                        : 'bg-[#F9F9F9] border-[#E5E7EB] hover:border-[#5D00D6]'
                    }`}
                    style={{ border: `0.5px solid ${bestEffortSpeed === i ? '#5D00D6' : '#E5E7EB'}` }}
                  >
                    <span className="text-[16px] text-[#1A1A2E] font-semibold">{speed}</span>
                    <div
                      className={`w-3 h-3 rounded-full transition-all ${
                        bestEffortSpeed === i ? 'bg-[#5D00D6]' : 'border border-[#E5E7EB] bg-white'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Includes */}
            <div className="p-6 flex-1">
              <span className="text-[11px] text-[#9CA3AF] uppercase tracking-wider block mb-4">INCLUDED IN EVERY PLAN</span>
              <div className="flex flex-col gap-3">
                {bestEffortIncludes.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle size={16} className="text-[#5D00D6] shrink-0" />
                    <span className="text-[14px] text-[#1A1A2E]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 pt-0">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full h-[52px] text-[15px] font-semibold bg-[#5D00D6] hover:bg-[#4B00AD] text-white rounded-xl transition-colors duration-200"
                style={{ fontFamily: '"Proxima Nova", sans-serif' }}
              >
                Get a Quote →
              </Link>
              <p className="text-[12px] text-[#9CA3AF] text-center mt-2">
                Site qualification required. Call 1800 000 299 to check availability.
              </p>
            </div>
          </div>

          {/* PLAN 2: Committed — Featured */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: '#0F0F1A',
              border: '1.5px solid #5D00D6',
              boxShadow: '0 0 0 4px rgba(93,0,214,0.06)',
            }}
          >
            {/* Header */}
            <div className="bg-[#0F0F1A] p-6" style={{ borderBottom: '0.5px solid rgba(93,0,214,0.3)' }}>
              <div className="bg-[#5D00D6] text-white rounded-full px-3 py-1 text-[10px] font-semibold w-fit mb-4">
                ★ Most Popular
              </div>
              <span
                className="rounded-full px-3 py-1 text-[10px] font-semibold"
                style={{ background: 'rgba(93,0,214,0.2)', color: '#A855F7' }}
              >
                Traffic Class 2 + Enterprise Ethernet
              </span>
              <h3 className="text-[26px] text-white font-bold mt-3">Committed</h3>
              <p className="text-[14px] text-[#9CA3AF] mt-1">High CoS — 100% guaranteed bandwidth</p>
              <p className="text-[13px] text-[#9CA3AF] leading-[1.6] mt-3">
                Enterprise-grade performance with 100% committed bandwidth — guaranteed speeds at all times,
                regardless of network load. Designed for organisations where internet performance directly
                impacts business operations.
              </p>
            </div>

            {/* Speed Options */}
            <div className="p-6 bg-[#0F0F1A]" style={{ borderBottom: '0.5px solid rgba(93,0,214,0.15)' }}>
              <span className="text-[11px] text-[#6B7280] uppercase tracking-wider block mb-4">SELECT SPEED</span>
              <div className="flex flex-col gap-2">
                {committedSpeeds.map((speed, i) => (
                  <button
                    key={speed}
                    onClick={() => setCommittedSpeed(i)}
                    className={`flex justify-between items-center p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                      committedSpeed === i
                        ? 'bg-[#2D003E] border-[#5D00D6]'
                        : 'bg-[#1A1A2E] border-[#374151] hover:border-[#5D00D6]'
                    }`}
                    style={{ border: `0.5px solid ${committedSpeed === i ? '#5D00D6' : '#374151'}` }}
                  >
                    <span className="text-[16px] text-white font-semibold">{speed}</span>
                    <div
                      className={`w-3 h-3 rounded-full transition-all ${
                        committedSpeed === i ? 'bg-[#5D00D6]' : 'border-[#374151] bg-transparent'
                      }`}
                      style={{ border: committedSpeed === i ? 'none' : '1px solid #374151' }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Includes */}
            <div className="p-6 bg-[#0F0F1A] flex-1">
              <span className="text-[11px] text-[#6B7280] uppercase tracking-wider block mb-4">
                INCLUDED — EVERYTHING IN BEST EFFORT PLUS
              </span>
              <div className="flex flex-col gap-3">
                {committedIncludes.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle size={16} className="text-[#5D00D6] shrink-0" />
                    <span className="text-[14px] text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 pt-0 bg-[#0F0F1A]">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full h-[52px] text-[15px] font-semibold bg-[#5D00D6] hover:bg-[#4B00AD] text-white rounded-xl transition-colors duration-200"
                style={{ fontFamily: '"Proxima Nova", sans-serif' }}
              >
                Get a Quote →
              </Link>
              <p className="text-[12px] text-[#6B7280] text-center mt-2">
                Site qualification required. Call 1800 000 299 to check availability.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
