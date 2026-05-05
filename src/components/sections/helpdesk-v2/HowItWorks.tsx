import React from "react";
import { Badge } from "@/components/ui/badge";
import { XCircle, CheckCircle, Download } from 'lucide-react';

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Staff member logs the issue",
      body: "Phone, email, or self-service — whichever they prefer. Ticket created automatically, priority assigned based on business impact, and acknowledgement sent within minutes.",
      badge: "Acknowledged",
      badgeColor: "bg-[#a78bfa]/10 text-[#a78bfa] border-[#a78bfa]/25",
    },
    {
      num: "02",
      title: "Priority is set — not guessed",
      body: "C9 categorises tickets by business impact — not first-come-first-served. P1 outages jump the queue. P3 standard requests are scheduled. Your staff always know where they stand.",
      badge: "Categorised",
      badgeColor: "bg-[#a78bfa]/10 text-[#a78bfa] border-[#a78bfa]/25",
    },
    {
      num: "03",
      title: "A technician who knows your environment picks it up",
      body: "Your environment is documented from day one. No technician ever asks what system you're on. Remote session starts immediately. Most issues resolved on first contact.",
      badge: "In Progress",
      badgeColor: "bg-[#a78bfa]/10 text-[#a78bfa] border-[#a78bfa]/25",
    },
    {
      num: "04",
      title: "Escalated if needed — you don't have to ask",
      body: "C9 escalates internally for senior engineering or on-site attendance. We proactively update you on what's happening. You never have to chase us for a status.",
      badge: "Escalated",
      badgeColor: "bg-amber-400/10 text-amber-400 border-amber-400/25",
    },
    {
      num: "05",
      title: "Resolved. Documented. Reviewed.",
      body: "Every resolved ticket is documented, every repeat issue is flagged. Monthly reporting shows your ticket trends — patterns turn into improvements, not recurring problems.",
      badge: "Resolved",
      badgeColor: "bg-emerald-400/10 text-emerald-400 border-emerald-400/25",
    }
  ];

  return (
    <section className="w-full bg-[#0c1024] py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* Header */}
        <div className="mb-12 max-w-[680px]">
          <span className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.35em] mb-5 block" style={fontStyle}>
            HOW IT WORKS
          </span>
          <h2 className="c9-section-heading !text-white" style={fontStyle}>
            From problem to resolution. <br />
            <span className="text-slate-400 font-normal">Exactly what happens.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-20 items-start">
          
          {/* Process Steps */}
          <div className="space-y-0 divide-y divide-white/5">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-8 py-7 md:py-8"
              >
                {/* Step number */}
                <div className="shrink-0 pt-0.5">
                  <span
                    className="text-[14px] font-bold text-white/25 tracking-widest"
                    style={fontStyle}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-6 mb-3">
                    <h3
                      className="text-[17px] md:text-[19px] font-medium text-white/90 tracking-tight leading-snug"
                      style={fontStyle}
                    >
                      {step.title}
                    </h3>
                    <Badge variant="outline" className={`${step.badgeColor} shrink-0 px-3 py-1 font-medium text-[10px] rounded-full uppercase tracking-wider border`}>
                      {step.badge}
                    </Badge>
                  </div>
                  <p
                    className="text-[14px] text-slate-400 leading-relaxed font-normal"
                    style={fontStyle}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-28 self-start space-y-5">

            {/* Legacy flaws */}
            <div className="rounded-[24px] p-7 bg-white/[0.04] border border-white/8">
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.25em] mb-6" style={fontStyle}>
                Why most helpdesks fail
              </p>
              <ul className="space-y-4">
                {[
                  "Tickets vanish with no update",
                  "Starting from scratch on every call",
                  "Repeat issues 'patched' not solved",
                  "Zero accountability on outcomes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle size={14} className="text-red-400/70 mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-[14px] text-slate-400 font-normal leading-snug" style={fontStyle}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* C9 Standard */}
            <div className="rounded-[24px] p-7 bg-[#5D00D6]/10 border border-[#5D00D6]/20">
              <p className="text-[10px] font-bold text-[#a78bfa] uppercase tracking-[0.25em] mb-6" style={fontStyle}>
                The C9 Standard
              </p>
              <ul className="space-y-4">
                {[
                  "Defined SLAs with monthly reporting",
                  "Environment documented from Day 1",
                  "Proactive updates at every stage",
                  "Dedicated Account Manager assigned",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-[#a78bfa] mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-[14px] text-slate-300 font-medium leading-snug" style={fontStyle}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Guide CTA */}
            <a
              href="/contact"
              className="flex items-center justify-between gap-4 p-6 rounded-[24px] bg-[#5D00D6] hover:bg-[#6D10E6] transition-all duration-300 shadow-xl shadow-[#5D00D6]/20"
            >
              <div>
                <p className="text-[16px] font-semibold text-white mb-0.5" style={fontStyle}>
                  Download our Guide
                </p>
                <p className="text-[14px] text-white/60 font-normal" style={fontStyle}>
                  Helpdesk Performance Playbook
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#5D00D6] transition-all duration-300 shrink-0">
                <Download size={16} className="text-white group-hover:text-[#5D00D6] transition-colors" />
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
