import React from "react";
import { Monitor, Cloud, Server, Smartphone, UserPlus, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function WhatsCovered() {
  const coverage = [
    {
      icon: Monitor,
      title: "End-user support",
      body: "Password resets, software issues, hardware faults, application errors, printer problems — anything your staff encounter day to day resolved without them having to figure it out themselves."
    },
    {
      icon: Cloud,
      title: "Microsoft 365 & cloud apps",
      body: "Outlook, Teams, SharePoint, OneDrive, and Azure — user-level and admin-level support. We manage your M365 environment so your staff don't lose time to application issues."
    },
    {
      icon: Server,
      title: "Infrastructure & network issues",
      body: "Server alerts, network connectivity, VPN failures, and internet outages — escalated automatically from helpdesk to engineering without the user having to chase anyone."
    },
    {
      icon: Smartphone,
      title: "Devices & mobile",
      body: "Laptops, desktops, tablets, and mobile phones — remote troubleshooting first, on-site dispatch when needed. New starters set up. Leavers offboarded securely."
    },
    {
      icon: UserPlus,
      title: "Onboarding & offboarding",
      body: "New staff set up and ready on day one. Departing staff offboarded with access revoked immediately. Device provisioning, account creation, and licence management handled end-to-end."
    },
    {
      icon: AlertTriangle,
      title: "Incident escalation",
      body: "When something is seriously wrong — a server down, a potential breach, a business-wide outage — it escalates to senior engineers automatically. You are never stuck in a queue when it matters most."
    }
  ];

  return (
    <section className="w-full bg-[#F3EEFF] py-24">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.1em] text-[#7B2FBE]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
            SCOPE OF SUPPORT
          </span>
          <h2 className="c9-section-heading mt-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Everything your staff encounter. Covered.
          </h2>
          <p className="text-[18px] text-[#6B7280] mt-3 max-w-[600px] leading-[1.7]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
            One agreement. One number to call. Every IT problem your team faces — handled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverage.map((item, i) => (
            <Card 
              key={i} 
              className="bg-white border border-[#7B2FBE]/15 rounded-2xl hover:border-[#7B2FBE] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden shadow-sm"
            >
              <CardContent className="p-8">
                <div className="w-[48px] h-[48px] bg-[#EDE9FE] rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={22} className="text-[#7B2FBE]" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] font-bold text-[#1A1A2E] mb-3" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#6B7280] leading-[1.6]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {item.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
