'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [selectedSituation, setSelectedSituation] = useState(0);

  const situations = [
    { id: 0, text: "We have no internal IT team" },
    { id: 1, text: "Our IT person left or can't keep up" },
    { id: 2, text: "Our current MSP isn't delivering" },
  ];

  const handleScrollToScope = () => {
    const element = document.getElementById('scope-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden py-20 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-[1240px]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-start">
            <Badge variant="outline" className="border-[#7B2FBE] text-[#7B2FBE] mb-8 px-4 py-1 font-dm-sans uppercase tracking-wider font-bold">
              Managed IT · IT Outsourcing
            </Badge>

            <h1 className="text-[36px] md:text-[52px] font-bold text-[#1A1A2E] leading-[1.1] mb-6 font-syne">
              You didn't start a business to spend your days fixing IT problems.
            </h1>

            <p className="text-[18px] text-[#6B7280] max-w-[560px] leading-[1.7] mb-10 font-dm-sans">
              C9 becomes your IT department — or replaces the one that's letting you down. Helpdesk, infrastructure, strategy, and security. All managed. All accountable. One agreement.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Button className="bg-[#7B2FBE] hover:bg-[#6b28a8] text-white px-8 h-12 rounded-lg font-bold font-dm-sans transition-all">
                Get an IT Outsourcing Proposal <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={handleScrollToScope} className="border-[#e5e7eb] text-[#1A1A2E] hover:bg-slate-50 px-8 h-12 rounded-lg font-bold font-dm-sans transition-all">
                See What's Included
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
              {[
                "Full IT department from day one",
                "No lock-in consultation to start",
                "Australian-based team"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE]" />
                  <span className="text-[13px] text-[#6B7280] font-medium font-dm-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[440px] bg-[#1A1A2E] rounded-2xl p-[1.75rem] flex flex-col gap-4 shadow-2xl">
              <div className="text-[12px] text-[#6B7280] font-bold uppercase tracking-[0.08em] font-dm-sans mb-2">
                WHICH SITUATION SOUNDS LIKE YOU?
              </div>

              <div className="flex flex-col gap-2">
                {situations.map((situation) => (
                  <button
                    key={situation.id}
                    onClick={() => setSelectedSituation(situation.id)}
                    className={`flex items-center justify-between gap-4 w-full rounded-xl px-5 py-[0.875rem] text-left transition-all duration-200 border cursor-pointer
                      ${selectedSituation === situation.id 
                        ? "bg-[#2D1B4E] border-[#7B2FBE] border-opacity-100" 
                        : "bg-[#0F0F1A] border-[#374151] hover:border-[#7B2FBE]"
                      }`}
                  >
                    <span className="text-[14px] text-white font-medium font-dm-sans">
                      {situation.text}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-[#7B2FBE] transition-transform duration-200 ${selectedSituation === situation.id ? 'translate-x-1' : ''}`} />
                  </button>
                ))}
              </div>

              <div className="mt-[0.5rem] pt-[1rem] border-top border-[#374151] border-opacity-50 border-t">
                <p className="text-[14px] text-[#9CA3AF] italic text-center font-dm-sans leading-relaxed">
                  "All three start with the same conversation. Let's have it."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
