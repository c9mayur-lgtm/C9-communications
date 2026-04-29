'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, AlertCircle, Zap, ShieldCheck, Activity, Users } from 'lucide-react';



const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const steps = [
  {
    title: 'Detection & Triage',
    desc: 'Automated monitoring triggers or L1 engineer identification. Incident classified by business impact (P1-P4).',
    icon: Activity,
    time: '< 15 Mins'
  },
  {
    title: 'Ownership Assignment',
    desc: 'Incident assigned to a dedicated L2 engineer who owns the resolution lifecycle. No bounce between queues.',
    icon: Users,
    time: 'Immediate'
  },
  {
    title: 'Senior Escalation',
    desc: 'Unresolved L2 incidents trigger automatic L3 Architect intervention. High-priority cases get leadership oversight.',
    icon: Zap,
    time: 'Defined Trigger'
  },
  {
    title: 'Resolution & Root Cause',
    desc: 'Total resolution confirmed. Root Cause Analysis (RCA) performed to ensure the issue does not recur.',
    icon: ShieldCheck,
    time: 'Final Stage'
  }
];

export default function EscalationModel() {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <FadeIn>
            <span className="c9-eyebrow mb-6">
              OPERATIONAL GOVERNANCE
            </span>
            <h2 className="c9-section-heading mb-8">
              Escalation <span className="text-[#5D00D6]">Hierarchy.</span>
            </h2>
            <p className="c9-body">
              We eliminate the ambiguity of incident response. Our escalation model is hard-coded into our operations, ensuring that the right level of expertise is applied to your issue instantly.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Progress Path Background */}
          <div className="absolute top-[28px] left-0 w-full h-[1px] bg-slate-100 hidden lg:block -z-10" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500 h-full group">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 text-[#5D00D6] flex items-center justify-center group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-500">
                      <step.icon size={28} strokeWidth={1.5} />
                    </div>
                    <span className="c9-eyebrow !text-slate-300 !text-[9px] bg-slate-50 px-3 py-1.5 rounded-full group-hover:!text-[#5D00D6] group-hover:bg-[#5D00D6]/5 transition-colors">
                      {step.time}
                    </span>
                  </div>
                  
                  <h3 className="c9-card-title mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="c9-body !text-sm">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Leadership Credibility Strip */}
        <FadeIn delay={0.4}>
          <div className="mt-20 lg:mt-32 p-10 lg:p-14 bg-[#0c1024] rounded-[48px] text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5D00D6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-16 h-16 rounded-full border-4 border-[#0c1024] bg-slate-800 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={`https://i.pravatar.cc/150?u=c9_lead_${i}`} 
                      alt="Leadership" 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
                <div className="w-16 h-16 rounded-full border-4 border-[#0c1024] bg-[#5D00D6] flex items-center justify-center text-[11px] font-bold tracking-tighter">
                  +12 Leads
                </div>
              </div>
              <div className="text-center lg:text-left flex-1">
                <h3 className="c9-card-title !text-white !text-2xl mb-3">Technical Leadership Oversight</h3>
                <p className="c9-body !text-white/50">
                  Every enterprise client is assigned a Technical Account Lead with over 15 years of infrastructure experience. Strategic decisions are never delegated to juniors.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center min-w-[120px]">
                  <div className="text-[20px] font-black text-white mb-0.5">15+ yrs</div>
                  <div className="c9-eyebrow !text-white/40 !text-[8px]">Avg Experience</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center min-w-[120px]">
                  <div className="text-[20px] font-black text-[#a56eff] mb-0.5">Direct</div>
                  <div className="c9-eyebrow !text-white/40 !text-[8px]">Lead Access</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
