'use client'

import React, { useState } from 'react'
import {
  Search, FileText,
  Repeat, CheckCircle, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    week: 'Phase 1',
    label: 'Assessment',
    Icon: Search,
    badge: 'Step 01 · Full Visibility',
    heading: 'Understand where you are before deciding where to go.',
    body: "C9 performs a full technology assessment — current infrastructure, software, vendors, spend, risks, and gaps. You receive a clear picture of your current state before any recommendations are made.",
    checklist: [
      'Current infrastructure audit',
      'Software and licensing review',
      'Vendor contract analysis',
      'Security posture assessment',
      'IT spend analysis and benchmarking',
      'Risk and gap identification',
    ],
    outcome: 'Current state document delivered — owned by you.',
    meta: [
      { label: 'Duration', val: '2–3 weeks', sub: 'Calculated as fixed term', hi: false },
      { label: 'Output', val: 'Current State Report', sub: 'Comprehensive gap analysis', hi: true },
      { label: 'Commitment', val: 'No obligation to proceed', sub: 'Assessment only', hi: false },
    ],
  },
  {
    week: 'Phase 2',
    label: 'The Strategy',
    Icon: FileText,
    badge: 'Step 02 · The Roadmap',
    heading: 'A technology roadmap built around your business goals.',
    body: 'Based on the assessment, C9 builds a 12-month IT roadmap — prioritised initiatives, budget model, vendor recommendations, and a risk remediation plan. Presented to your leadership team in plain language.',
    checklist: [
      '12-month prioritised IT roadmap',
      'Technology budget model (OpEx/CapEx)',
      'Vendor recommendation & rationalisation',
      'Risk remediation plan and timeline',
      'Quick wins identified and scheduled',
      'Roadmap presented to leadership team',
    ],
    outcome: '12-month Roadmap and Budget presented and hand-over.',
    meta: [
      { label: 'Timeframe', val: '3–4 weeks post-audit', sub: 'Strategic alignment period', hi: false },
      { label: 'Presentation', val: 'Board-Level Ready', sub: 'Tailored for leadership', hi: true },
      { label: 'Format', val: 'Plain English', sub: 'Zero technical jargon', hi: false },
    ],
  },
  {
    week: 'Phase 3',
    label: 'Execute & Review',
    Icon: Repeat,
    badge: 'Step 03 · Continuous Oversight',
    heading: "The roadmap gets executed. You stay in control.",
    body: "C9 manages roadmap execution alongside your Managed IT engagement — coordinating vendors, managing projects, and reporting progress quarterly. The roadmap is reviewed and updated every quarter to reflect your business as it evolves.",
    checklist: [
      'Quarterly roadmap review and update',
      'Vendor coordination and management',
      'Project delivery oversight',
      'Budget tracking and reporting',
      'Board and leadership reporting',
      'Ongoing strategic advice on demand',
    ],
    outcome: 'Quarterly strategic reviews established and active.',
    meta: [
      { label: 'Cadence', val: 'Quarterly Strategy Reviews', sub: 'Ongoing relationship', hi: true },
      { label: 'Reporting', val: 'Board-ready reports', sub: 'Roadmap progress & ROI', hi: false },
      { label: 'Inclusion', val: 'Standard with Managed IT', sub: 'No extra project fees', hi: false },
    ],
  },
]

export default function EngagementModel() {
  const [cur, setCur] = useState(0)
  const s = steps[cur]
  const Icon = s.Icon
  const progressPct = cur === 0 ? 0 : Math.round((cur / (steps.length - 1)) * 100)

  return (
    <section id="engagement-model" className="bg-white py-24 px-6 md:px-8 lg:px-12 font-sans border-t border-purple-50">
      <div className="container mx-auto max-w-[1240px]">

        {/* Header */}
        <p className="text-[14px] font-bold uppercase tracking-[0.25em] text-[#5D00D6] mb-6 block" >
          THE ENGAGEMENT MODEL
        </p>
        <h2 className="c9-section-heading mb-6 max-w-2xl" >
          Not a one-off report.<br />
          An ongoing strategic partnership.
        </h2>
        <p className="text-[18px] md:text-[20px] text-slate-600/90 max-w-[680px] leading-relaxed font-normal" >
          C9's strategic engagement follows three phases — assessment, strategy, and ongoing execution. Here's how we move from audit to ROI.
        </p>

        {/* Step track */}
        <div className="relative flex items-start mt-16 lg:mt-24">
          {/* Track line */}
          <div className="absolute top-6 left-[10%] right-[10%] h-px bg-[#5D00D6]/10 z-0">
            <div
              className="h-full bg-[#5D00D6] transition-all duration-700"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {steps.map((step, i) => {
            const StepIcon = step.Icon
            const isActive = i === cur
            const isDone = i < cur
            return (
              <button
                key={i}
                onClick={() => setCur(i)}
                className="flex-1 flex flex-col items-center relative z-10 group px-1"
              >
                <div
                  className={cn(
                    'w-12 h-12 rounded-full flex items-center justify-center',
                    'border-[1.5px] transition-all duration-300',
                    isActive && 'bg-[#5D00D6] border-[#5D00D6] scale-110 shadow-2xl shadow-purple-900/20',
                    isDone && 'bg-[#EDE9FE] border-[#5D00D6]',
                    !isActive && !isDone && 'bg-white border-purple-100 group-hover:border-[#5D00D6] group-hover:-translate-y-1'
                  )}
                >
                  {isDone
                    ? <CheckCircle size={18} className="text-[#5D00D6]" />
                    : <StepIcon size={18} className={isActive ? 'text-white' : 'text-[#5D00D6]'} />
                  }
                </div>
                <span className="text-[11px] font-bold text-slate-400 mt-3 uppercase tracking-wider">{step.week}</span>
                <span className={cn(
                  'text-[14px] font-bold mt-1 text-center max-w-[100px] leading-snug transition-colors',
                  isActive ? 'text-[#5D00D6]' : 'text-slate-500'
                )}>
                  {step.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detail panel */}
        <div className="mt-12 bg-white rounded-none border border-purple-100 overflow-hidden shadow-2xl shadow-purple-900/5">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px]">

            {/* Left */}
            <div className="p-8 lg:p-12 md:border-r border-purple-50 flex flex-col">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F4F0FA] text-[#5D00D6] text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-none w-fit mb-8">
                <CheckCircle size={14} />
                {s.badge}
              </div>

              <h3 className="c9-section-heading mb-4" >
                {s.heading}
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-8 font-normal" >
                {s.body}
              </p>

              {/* Checklist */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 flex-1 mb-10">
                {s.checklist.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-none bg-[#F4F0FA] flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={12} className="text-[#5D00D6]" />
                    </div>
                    <span className="text-[14px] font-semibold text-[#0c1024] leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Outcome */}
              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-purple-50">
                <div className="w-2.5 h-2.5 rounded-none bg-[#5D00D6] flex-shrink-0 animate-pulse" />
                <span className="text-[14px] font-bold text-[#5D00D6]">{s.outcome}</span>
              </div>
            </div>

            {/* Right */}
            <div className="p-8 bg-[#F4F0FA]/40 flex flex-col gap-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                Strategic Outcome
              </p>
              {s.meta.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    'rounded-none p-5 border transition-all duration-300',
                    m.hi
                      ? 'bg-white border-[#5D00D6] shadow-xl shadow-purple-900/5'
                      : 'bg-white/50 border-purple-100 hover:border-[#5D00D6]/30'
                  )}
                >
                  <p className={cn(
                    'text-[10px] font-black uppercase tracking-widest mb-1.5',
                    m.hi ? 'text-[#5D00D6]' : 'text-slate-400'
                  )}>
                    {m.label}
                  </p>
                  <p className={cn(
                    'text-[16px] font-bold mb-0.5 tracking-tight',
                    m.hi ? 'text-[#5D00D6]' : 'text-[#0c1024]'
                  )}>
                    {m.val}
                  </p>
                  <p className={cn(
                    'text-[14px] font-normal leading-tight',
                    m.hi ? 'text-purple-400' : 'text-slate-400'
                  )}>
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Nav bar */}
          <div className="border-t border-purple-50 px-8 py-6 flex items-center gap-4 bg-white">
            <button
              onClick={() => setCur(Math.max(0, cur - 1))}
              disabled={cur === 0}
              className={cn(
                'px-6 py-3 rounded-full text-[14px] font-bold border transition-all duration-300',
                'border-purple-100 text-[#0c1024] hover:border-[#5D00D6] hover:text-[#5D00D6]',
                'disabled:opacity-25 disabled:cursor-not-allowed'
              )}
            >
              ← Back
            </button>

            {/* Dots */}
            <div className="flex gap-2 mx-auto">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCur(i)}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-500',
                    i === cur ? 'w-8 bg-[#5D00D6]' : 'w-1.5 bg-purple-100 hover:bg-purple-200'
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => setCur(Math.min(steps.length - 1, cur + 1))}
              disabled={cur === steps.length - 1}
              className={cn(
                'px-8 py-3 rounded-full text-[14px] font-bold transition-all duration-300',
                'bg-[#5D00D6] text-white hover:bg-[#4c00b0] shadow-xl shadow-purple-900/20',
                'disabled:opacity-25 disabled:cursor-not-allowed'
              )}
            >
              {cur === steps.length - 1 ? 'Start Strategy ✓' : 'Next Phase →'}
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

