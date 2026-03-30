'use client'

import React, { useState } from 'react'
import {
  Search, PenTool, Repeat, CheckCircle, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

const phases = [
  {
    week: 'Week 0–1',
    label: 'Assess',
    Icon: Search,
    badge: 'PHASE 1 · Assessment',
    heading: 'Understand your environment before designing the solution.',
    body: "C9 audits your current infrastructure, applications, data, and dependencies. We identify what moves to cloud, what stays on-premise, and what gets retired — with a clear migration sequence and cost model.",
    checklist: [
      'Current infrastructure and application audit',
      'Cloud readiness assessment per workload',
      'Data classification and sensitivity review',
      'Dependency mapping and migration sequencing',
      'Cost modelling — current state vs cloud',
      'Public / private / hybrid recommendation',
    ],
    outcome: 'You receive a migration blueprint before any change is made to your environment.',
    meta: [
      { label: 'Duration', val: '1–2 weeks', sub: 'Report delivered', hi: false },
      { label: 'Output', val: 'Migration blueprint', sub: 'Full workload map — owned by you', hi: true },
      { label: 'Risk', val: 'Identified upfront', sub: 'Before any change is made', hi: false },
    ],
  },
  {
    week: 'Week 1–2',
    label: 'Design',
    Icon: PenTool,
    badge: 'PHASE 2 · Architecture',
    heading: 'Architecture designed for your business — not a generic template.',
    body: "C9 designs your cloud architecture based on the assessment findings — Azure or hybrid environment, security configuration, identity management, and cost optimisation built in from the start. Signed off before migration begins.",
    checklist: [
      'Cloud architecture design document',
      'Security and identity configuration design',
      'Network design and connectivity planning',
      'Backup and recovery architecture',
      'Cost optimisation built into the design',
      'Architecture reviewed and signed off',
    ],
    outcome: 'Architecture document signed off by you before any migration work begins.',
    meta: [
      { label: 'Timeframe', val: '1–2 weeks', sub: 'Post-assessment', hi: false },
      { label: 'Standards', val: 'Microsoft best practice', sub: 'Aligned from the start', hi: true },
      { label: 'Sign-off', val: 'Before migration', sub: 'Nothing proceeds without approval', hi: false },
    ],
  },
  {
    week: 'Week 2–5',
    label: 'Migrate',
    Icon: Repeat,
    badge: 'PHASE 3 · Transition',
    heading: 'Migration executed with minimal disruption to your business.',
    body: "Workloads migrated in a sequenced, tested process — staged cutover, staff communications, and rollback capability at every step. C9 manages the cutover process so your team keeps working while we do the heavy lifting.",
    checklist: [
      'Staged workload migration sequence',
      'Pre-migration testing for each workload',
      'Staff communication and change management',
      'Rollback plan available at every stage',
      'Post-migration validation and sign-off',
      'C9 on-call throughout cutover windows',
    ],
    outcome: 'Your staff keep working. We manage every cutover window.',
    meta: [
      { label: 'Disruption', val: 'Minimised', sub: 'Staged cutover by design', hi: false },
      { label: 'Testing', val: 'Before every cutover', sub: 'Rollback ready at each stage', hi: true },
      { label: 'Support', val: 'C9 on-call', sub: 'Throughout all cutover windows', hi: false },
    ],
  },
  {
    week: 'Week 5+',
    label: 'Manage',
    Icon: CheckCircle,
    badge: 'PHASE 4 · BAU',
    heading: 'The migration ends. The managed service begins.',
    body: "C9 does not hand off after migration. Your cloud environment is managed as part of your Managed IT engagement from go-live day one — monitoring, patching, cost optimisation, and ongoing administration included in your fixed monthly fee.",
    checklist: [
      '24/7 cloud infrastructure monitoring',
      'Patch and update management',
      'Monthly cloud spend review and report',
      'User and licence administration',
      'Ongoing architecture reviews',
      'Quarterly strategic review included',
    ],
    outcome: 'Fixed monthly fee. No project billing after go-live. Your environment, managed.',
    meta: [
      { label: 'Billing model', val: 'Fixed monthly', sub: 'No project billing post go-live', hi: false },
      { label: 'Starts', val: 'Go-live day one', sub: 'No handoff period', hi: true },
      { label: 'Reviews', val: 'Quarterly', sub: 'Architecture + cost review', hi: false },
    ],
  },
]

export default function MigrationPath() {
  const [cur, setCur] = useState(0)
  const p = phases[cur]
  const Icon = p.Icon
  const progressPct = cur === 0 ? 0 : Math.round((cur / (phases.length - 1)) * 100)

  return (
    <section className="bg-white py-24 px-6 md:px-8 lg:px-12" style={FONT_FAMILY}>
      <div className="container mx-auto max-w-[1240px]">

        {/* Header */}
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-purple" style={FONT_FAMILY}>
          CLOUD MIGRATION
        </span>
        <h2 className="text-[36px] md:text-[42px] font-bold tracking-tight leading-[1.2] text-text-primary mt-4 mb-6 max-w-2xl" style={FONT_FAMILY}>
          Moving to cloud without losing sleep over the transition.
        </h2>
        <p className="text-[17px] md:text-[18px] text-text-secondary max-w-[680px] leading-relaxed font-normal mb-8" style={FONT_FAMILY}>
          C9 manages the full migration lifecycle — from initial assessment through to ongoing management. The managed service starts from day one of go-live, not after a handoff period.
        </p>

        {/* Step track */}
        <div className="relative flex items-start mt-16 lg:mt-24 mb-12">
          {/* Track line */}
          <div className="absolute top-6 left-[10%] right-[10%] h-px bg-brand-purple/10 z-0">
            <div
              className="h-full bg-brand-purple transition-all duration-700"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {phases.map((phase, i) => {
            const PhaseIcon = phase.Icon
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
                    'w-12 h-12 rounded-none flex items-center justify-center',
                    'border-[1.5px] transition-all duration-300',
                    isActive && 'bg-brand-purple border-brand-purple scale-110 shadow-2xl shadow-purple-900/20',
                    isDone && 'bg-light-purple-bg border-brand-purple',
                    !isActive && !isDone && 'bg-white border-purple-100 group-hover:border-brand-purple group-hover:-translate-y-1'
                  )}
                >
                  {isDone
                    ? <CheckCircle size={18} className="text-brand-purple" />
                    : <PhaseIcon size={18} className={isActive ? 'text-white' : 'text-brand-purple'} />
                  }
                </div>
                <span className="text-[11px] font-bold text-slate-400 mt-3 uppercase tracking-wider" style={FONT_FAMILY}>{phase.week}</span>
                <span className={cn(
                  'text-[13px] font-bold mt-1 text-center max-w-[100px] leading-snug transition-colors',
                  isActive ? 'text-brand-purple' : 'text-slate-500'
                )} style={FONT_FAMILY}>
                  {phase.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detail panel */}
        <div className="mt-12 bg-white rounded-none border border-brand-purple/10 overflow-hidden shadow-2xl shadow-purple-900/5">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px]">

            {/* Left */}
            <div className="p-8 lg:p-12 md:border-r border-brand-purple/5 flex flex-col">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-light-purple-bg text-brand-purple text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-none w-fit mb-8" style={FONT_FAMILY}>
                <CheckCircle size={14} />
                {p.badge}
              </div>

              <h3 className="text-[24px] md:text-[28px] font-bold text-text-primary leading-tight mb-4 tracking-tight" style={FONT_FAMILY}>
                {p.heading}
              </h3>
              <p className="text-[16px] text-text-secondary leading-relaxed mb-8 font-normal" style={FONT_FAMILY}>
                {p.body}
              </p>

              {/* Checklist */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 flex-1 mb-10">
                {p.checklist.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-none bg-light-purple-bg flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={12} className="text-brand-purple" />
                    </div>
                    <span className="text-[15px] font-semibold text-text-primary leading-snug" style={FONT_FAMILY}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Outcome */}
              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-brand-purple/5">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-purple flex-shrink-0 animate-pulse" />
                <span className="text-[15px] font-bold text-brand-purple" style={FONT_FAMILY}>{p.outcome}</span>
              </div>
            </div>

            {/* Right */}
            <div className="p-8 bg-light-purple-bg/30 flex flex-col gap-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2" style={FONT_FAMILY}>
                What to expect
              </p>
              {p.meta.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    'rounded-none p-5 border transition-all duration-300',
                    m.hi
                      ? 'bg-white border-brand-purple shadow-xl shadow-purple-900/5'
                      : 'bg-white/50 border-brand-purple/10 hover:border-brand-purple/30'
                  )}
                >
                  <p className={cn(
                    'text-[10px] font-black uppercase tracking-widest mb-1.5',
                    m.hi ? 'text-brand-purple' : 'text-slate-400'
                  )} style={FONT_FAMILY}>
                    {m.label}
                  </p>
                  <p className={cn(
                    'text-[16px] font-bold mb-0.5 tracking-tight',
                    m.hi ? 'text-brand-purple' : 'text-text-primary'
                  )} style={FONT_FAMILY}>
                    {m.val}
                  </p>
                  <p className={cn(
                    'text-[13px] font-normal leading-tight',
                    m.hi ? 'text-brand-purple/70' : 'text-slate-400'
                  )} style={FONT_FAMILY}>
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Nav bar */}
          <div className="border-t border-brand-purple/5 px-8 py-6 flex items-center gap-4 bg-white">
            <button
              onClick={() => setCur(Math.max(0, cur - 1))}
              disabled={cur === 0}
              className={cn(
                'px-6 py-3 rounded-none text-[14px] font-bold border transition-all duration-300',
                'border-brand-purple/10 text-text-primary hover:border-brand-purple hover:text-brand-purple',
                'disabled:opacity-25 disabled:cursor-not-allowed'
              )}
              style={FONT_FAMILY}
            >
              ← Back
            </button>

            {/* Dots */}
            <div className="flex gap-2 mx-auto">
              {phases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCur(i)}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-500',
                    i === cur ? 'w-8 bg-brand-purple' : 'w-1.5 bg-brand-purple/10 hover:bg-brand-purple/20'
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => setCur(Math.min(phases.length - 1, cur + 1))}
              disabled={cur === phases.length - 1}
              className={cn(
                'px-8 py-3 rounded-none text-[14px] font-bold transition-all duration-300',
                'bg-brand-purple text-white hover:bg-dark-purple shadow-xl shadow-purple-900/20',
                'disabled:opacity-25 disabled:cursor-not-allowed'
              )}
              style={FONT_FAMILY}
            >
              {cur === phases.length - 1 ? 'All done ✓' : 'Continue →'}
            </button>

            <span className="text-[12px] font-bold text-slate-400 whitespace-nowrap hidden sm:block" style={FONT_FAMILY}>
              {cur + 1} / {phases.length}
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
