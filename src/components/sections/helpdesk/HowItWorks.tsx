import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Staff member logs the issue",
      body: "Phone, email, or self-service portal — whichever they prefer. Ticket created automatically. Priority assigned based on business impact. Acknowledgement sent within minutes.",
      badge: "● Acknowledged",
      badgeColor: "bg-[#EDE9FE] text-[#7B2FBE]",
    },
    {
      num: "2",
      title: "Priority is set — not guessed",
      body: "C9 categorises every ticket by business impact — not first-come-first-served. P1 business-wide outages jump the queue. P3 standard requests are scheduled. Your staff always know where they stand.",
      badge: "● Prioritised",
      badgeColor: "bg-[#EDE9FE] text-[#7B2FBE]",
    },
    {
      num: "3",
      title: "A technician who knows your environment picks it up",
      body: "Your environment is documented from day one. No technician ever asks what system you are on. Remote session starts. Most issues resolved in first contact.",
      badge: "● In Progress",
      badgeColor: "bg-[#EDE9FE] text-[#7B2FBE]",
    },
    {
      num: "4",
      title: "Escalated if needed — without you chasing",
      body: "If a problem needs senior engineering or on-site attendance, C9 escalates internally. You receive an update proactively. You do not have to ask what is happening.",
      badge: "→ Escalated to Engineering",
      badgeColor: "bg-[#FEF3C7] text-[#92400E]",
    },
    {
      num: "5",
      title: "Resolved. Documented. Reviewed.",
      body: "Every resolved ticket is documented. Repeat issues are flagged proactively. Monthly reporting shows your ticket trends — patterns become improvements, not recurring problems.",
      badge: "✓ Resolved + Documented",
      badgeColor: "bg-[#D1FAE5] text-[#065F46]",
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <span className="text-[11px] uppercase tracking-[0.1em] text-[#7B2FBE]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
          HOW IT WORKS
        </span>
        <h2 className="c9-section-heading mt-4 mb-16 max-w-2xl" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
          From problem to resolved. Here's exactly what happens.
        </h2>

        <div className="grid lg:grid-cols-[60%_40%] gap-16">
          
          {/* LEFT COLUMN - Timeline */}
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-[#7B2FBE]/15" />
            
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 relative pb-10 last:pb-0">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#EDE9FE] border-2 border-[#7B2FBE] shrink-0 flex items-center justify-center font-semibold text-[14px] text-[#7B2FBE] z-10" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    {step.num}
                  </div>
                  <div className="flex flex-col pt-2">
                    <h3 className="text-[16px] font-medium text-[#1A1A2E]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7280] leading-[1.6] mt-1" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      {step.body}
                    </p>
                    <div className="mt-3">
                      <Badge className={`${step.badgeColor} border-none font-semibold text-[11px] hover:${step.badgeColor}`}>
                        {step.badge}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Contrast Card */}
          <div className="lg:sticky lg:top-24 self-start">
            <Card className="bg-[#1A1A2E] rounded-2xl border-none">
              <CardContent className="p-8">
                <h3 className="text-[20px] font-semibold text-white mb-6" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                  What most helpdesks skip
                </h3>
                
                <div className="flex flex-col gap-4">
                  {[
                    "Environment knowledge — starting from scratch every call",
                    "Proactive escalation — you have to chase for updates",
                    "Pattern detection — same problems repeat indefinitely",
                    "Accountability — no one owns the outcome"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <XCircle size={18} className="text-[#EF4444] shrink-0" />
                      <span className="text-[14px] text-[#9CA3AF] leading-snug" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#374151]">
                  <span className="text-[11px] uppercase tracking-[0.08em] text-[#7B2FBE] block mb-4" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    C9 BUILDS ALL FOUR IN AS STANDARD
                  </span>
                  
                  <div className="flex flex-col gap-4">
                    {[
                      "Full environment documentation from day one",
                      "Proactive communication at every step",
                      "Monthly trend reporting and recommendations",
                      "Named account manager who owns the outcome"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={12} className="text-[#7B2FBE] shrink-0" />
                        <span className="text-[14px] text-white leading-snug" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
