'use client'

import React, { useState } from 'react'
import {
  MessageSquare, Search, FileText,
  Repeat, CheckCircle, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    week: 'Week 0',
    label: 'Discovery call',
    Icon: MessageSquare,
    badge: 'Step 01 · No obligation',
    heading: 'We understand your business before we touch anything.',
    body: "No templates. No assumptions. C9 starts every engagement with a structured discovery session — understanding your current IT environment, your team's pain points, what's broken, what's working, and what good looks like for your specific business.",
    checklist: [
      'Current IT environment walkthrough',
      'Pain points and frustrations documented',
      'Business goals and growth trajectory discussed',
      'Initial risk and gap identification',
      'Zero obligation — no sales pressure applied',
    ],
    outcome: 'You receive an environment brief before we proceed to Step 2.',
    meta: [
      { label: 'Format', val: 'Video call or on-site visit', sub: '30–60 minutes', hi: false },
      { label: 'Who attends', val: 'C9 account manager', sub: '+ senior engineer if required', hi: false },
      { label: 'Your commitment', val: 'Zero', sub: 'No contract, no obligation', hi: true },
    ],
  },
  {
    week: 'Week 1',
    label: 'Environment audit',
    Icon: Search,
    badge: 'Step 02 · Full transparency',
    heading: 'We document everything. You finally have a clear picture.',
    body: "C9 performs a complete audit of your IT environment — hardware, software, network infrastructure, user accounts, vendors, and licensing. Most businesses discover issues during this step they didn't know existed. Everything is documented and handed to you.",
    checklist: [
      'Hardware and device inventory completed',
      'Software licensing audit and gap report',
      'Network and connectivity architecture mapped',
      'User accounts and access permissions reviewed',
      'Vendor contracts and renewal dates logged',
      'Security risk and vulnerability summary',
    ],
    outcome: 'Full environment document delivered — owned by you, maintained by C9.',
    meta: [
      { label: 'Delivery method', val: 'Remote audit', sub: 'On-site available if required', hi: false },
      { label: 'Output', val: 'Full environment document', sub: 'You own it — always', hi: true },
      { label: 'Completed by', val: 'End of Week 1', sub: 'Before proposal is presented', hi: false },
    ],
  },
  {
    week: 'Week 1–2',
    label: 'Proposal & agreement',
    Icon: FileText,
    badge: 'Step 03 · Fixed pricing',
    heading: 'A fixed monthly proposal scoped to your actual environment.',
    body: 'No hourly rates. No surprise invoices. C9 presents a fixed monthly fee based on what the audit found — covering every service in scope with explicit inclusions, defined SLA commitments, and a commercial structure that makes IT costs genuinely predictable.',
    checklist: [
      'Fixed monthly fee — no variable or hourly billing',
      'Every included service listed line by line',
      'SLA response and resolution times defined per priority',
      'Onboarding timeline and milestones confirmed',
      'Plain English contract — your legal team welcome',
      'Questions answered before anything is signed',
    ],
    outcome: 'Proposal valid for 30 days. No pressure to decide immediately.',
    meta: [
      { label: 'Pricing model', val: 'Fixed monthly fee', sub: 'No callout fees ever', hi: true },
      { label: 'Contract language', val: 'Plain English', sub: 'Your legal team welcome to review', hi: false },
      { label: 'Decision pressure', val: 'None', sub: 'Proposal valid for 30 days', hi: false },
    ],
  },
  {
    week: 'Week 2–4',
    label: 'Managed transition',
    Icon: Repeat,
    badge: 'Step 04 · Zero gap guarantee',
    heading: "C9 takes over. Your staff notice nothing — except things working better.",
    body: "The transition is the step every business worries about. C9 manages it end-to-end — including direct handover from your existing provider. Your staff get a new number to call. Everything else continues without interruption. No gap. No downtime. No drama.",
    checklist: [
      'Existing provider handover managed directly by C9',
      'Staff communication pack prepared and distributed',
      'Helpdesk portal configured, tested, and activated',
      '24/7 monitoring systems switched on',
      'First-week check-in call scheduled with your team',
      'All open issues from previous provider tracked',
    ],
    outcome: 'Your staff are supported from day one of transition — no gap in coverage.',
    meta: [
      { label: 'Gap in support', val: 'Zero', sub: 'Continuous coverage guaranteed', hi: true },
      { label: 'Staff disruption', val: 'Minimal', sub: 'New contact, same fast support', hi: false },
      { label: 'Previous provider', val: 'C9 manages handover', sub: "Directly — you don't have to", hi: false },
    ],
  },
  {
    week: 'Week 4+',
    label: 'Business as usual',
    Icon: CheckCircle,
    badge: 'Step 05 · Fully managed',
    heading: 'Your IT is managed. Go back to running your business.',
    body: "From this point, C9 owns your IT environment. Your staff have a helpdesk to call. Your infrastructure is monitored around the clock. Monthly reports land in your inbox. Issues are resolved before your staff notice them. This is what managed IT is supposed to feel like.",
    checklist: [
      'Helpdesk live — staff support active immediately',
      '24/7 infrastructure monitoring running',
      'Monthly performance report delivered',
      'IT roadmap session scheduled within first 30 days',
      'Account manager weekly check-ins for first month',
      'Quarterly strategic review cadence established',
    ],
    outcome: "You run your business. We run your IT. That's the whole arrangement.",
    meta: [
      { label: 'First monthly report', val: 'End of Month 1', sub: 'Tickets, SLAs, open items, trends', hi: false },
      { label: 'IT roadmap session', val: 'Within 30 days', sub: '12-month technology planning', hi: false },
      { label: 'Your new role', val: 'Run your business', sub: 'We handle everything else', hi: true },
    ],
  },
]

export default function TheTransition() {
  const [cur, setCur] = useState(0)
  const s = steps[cur]
  const Icon = s.Icon
  const progressPct = cur === 0 ? 0 : Math.round((cur / (steps.length - 1)) * 100)

  return (
    <section className="bg-[#F4F0FA] py-24 px-6 md:px-8 lg:px-12 font-sans border-t border-purple-50">
      <div className="container mx-auto max-w-[1240px]">

        {/* Header */}
        <p className="text-[14px] font-bold uppercase tracking-[0.25em] text-[#5D00D6] mb-6 block">
          Getting started
        </p>
        <h2 className="c9-section-heading mb-6 max-w-2xl">
          The part everyone worries about.<br />
          Here's exactly how it works.
        </h2>
        <p className="text-[18px] md:text-[20px] text-slate-600/90 max-w-[680px] leading-relaxed font-normal">
          Moving to a new IT provider — or outsourcing IT for the first time
          — feels risky. C9 has a structured onboarding process that removes
          the risk entirely.
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
                    'w-12 h-12 rounded-lg flex items-center justify-center',
                    'border-[1.5px] transition-all duration-300',
                    isActive && 'bg-[#5D00D6] border-[#5D00D6] scale-110 shadow-2xl shadow-purple-900/20',
                    isDone && 'bg-[#EDE9FE] border-[#5D00D6]',
                    !isActive && !isDone && 'bg-white border-purple-100 group-hover:border-[#5D00D6] group-hover:-translate-y-1'
                  )}
                >
                  {isDone
                    ? <CheckCircle size={12} className="text-[#5D00D6]" />
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
        <div className="mt-12 bg-white rounded-lg border border-purple-100 overflow-hidden shadow-2xl shadow-purple-900/5">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px]">

            {/* Left */}
            <div className="p-8 lg:p-12 md:border-r border-purple-50 flex flex-col">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F4F0FA] text-[#5D00D6] text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-lg w-fit mb-8">
                <CheckCircle size={14} />
                {s.badge}
              </div>

              <h3 className="c9-section-heading mb-4">
                {s.heading}
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-8 font-normal">
                {s.body}
              </p>

              {/* Checklist */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 flex-1 mb-10">
                {s.checklist.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-lg bg-[#F4F0FA] flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={12} className="text-[#5D00D6]" />
                    </div>
                    <span className="text-[14px] font-semibold text-[#0c1024] leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Outcome */}
              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-purple-50">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5D00D6] flex-shrink-0 animate-pulse" />
                <span className="text-[14px] font-bold text-[#5D00D6]">{s.outcome}</span>
              </div>
            </div>

            {/* Right */}
            <div className="p-8 bg-[#F4F0FA]/40 flex flex-col gap-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                What to expect
              </p>
              {s.meta.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    'rounded-lg p-5 border transition-all duration-300',
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
                'px-6 py-3 rounded-lg text-[14px] font-bold border transition-all duration-300',
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
                'px-8 py-3 rounded-lg text-[14px] font-bold transition-all duration-300',
                'bg-[#5D00D6] text-white hover:bg-[#4c00b0] shadow-xl shadow-purple-900/20',
                'disabled:opacity-25 disabled:cursor-not-allowed'
              )}
            >
              {cur === steps.length - 1 ? 'All done ✓' : 'Continue →'}
            </button>

            <span className="text-[12px] font-bold text-slate-400 whitespace-nowrap hidden sm:block">
              {cur + 1} / {steps.length}
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
