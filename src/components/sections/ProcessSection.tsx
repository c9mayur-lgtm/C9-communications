'use client';

import React from 'react';

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Assess your business",
      description: "We dive deep into your current infrastructure, workflows, and growth goals to identify gaps and opportunities."
    },
    {
      number: "02",
      title: "Design complete solution",
      description: "We create a high-performance blueprint covering IT, Telco, and Workplace needs with total vendor consolidation."
    },
    {
      number: "03",
      title: "Deploy everything",
      description: "Our engineers handle the heavy lifting — from onsite cabling to hardware config and software rollouts."
    },
    {
      number: "04",
      title: "Manage & support",
      description: "We monitor and manage your systems 24/7/365, serving as your single point of accountability."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="text-center mb-20">
          <h2 className="c9-section-heading mb-4">
            How We Work
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A precise, battle-tested process designed to remove technical friction and scale your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-slate-200 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center px-4">
              <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#5D00D6] font-bold text-2xl shadow-sm mb-8 transition-all hover:border-[#5D00D6] hover:bg-brand-purple hover:text-white duration-500">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed font-dm-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
