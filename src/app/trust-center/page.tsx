'use client';

import React from 'react';
import { ShieldCheck, Lock, Database, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export default function TrustCenter() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0c1024] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#5D00D6] font-bold tracking-widest text-xs uppercase mb-4 block">Trust & Transparency</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Security is not an add-on. <br />It's our foundation.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              C9 Communications maintains rigorous security standards and operational transparency to ensure your business stays connected and protected.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Grid */}
      <section className="py-24 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#5D00D6]/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-[#5D00D6]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">ISO 27001</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our infrastructure and processes align with international standards for information security management.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#5D00D6]/10 rounded-2xl flex items-center justify-center mb-6">
                <Database className="text-[#5D00D6]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Data Sovereignty</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                All client data and backups are stored exclusively within Australian borders in Tier 3+ data centres.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#5D00D6]/10 rounded-2xl flex items-center justify-center mb-6">
                <Lock className="text-[#5D00D6]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Essential Eight Aligned</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We design environments that align with ASD's Essential Eight framework to mitigate cyber threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#0c1024]">Operational Security</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Network Monitoring</h4>
                    <p className="text-gray-600 text-sm">24/7 proactive monitoring of all infrastructure from our Australian NOC.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Access Control</h4>
                    <p className="text-gray-600 text-sm">Strict Multi-Factor Authentication (MFA) and Least Privilege access for all staff.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Incident Response</h4>
                    <p className="text-gray-600 text-sm">Documented procedures for rapid detection, containment, and eradication of threats.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#0c1024]">Compliance Frameworks</h2>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <p className="text-gray-600 mb-6">
                  C9 Communications operates under strict Australian regulatory frameworks to ensure your communications remain private and secure.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-xs font-bold text-[#5D00D6] block mb-1 uppercase">Privacy</span>
                    <span className="text-sm font-semibold">Privacy Act 1988</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-xs font-bold text-[#5D00D6] block mb-1 uppercase">Telco</span>
                    <span className="text-sm font-semibold">TCP Code</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-xs font-bold text-[#5D00D6] block mb-1 uppercase">Cyber</span>
                    <span className="text-sm font-semibold">ACSC Guidance</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-xs font-bold text-[#5D00D6] block mb-1 uppercase">Data</span>
                    <span className="text-sm font-semibold">Data Retention Law</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <div className="bg-[#5D00D6] rounded-[3rem] p-12 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Request a Security Audit</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Need to verify our security posture for your procurement process? Our compliance team can provide detailed documentation and audit reports.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-[#5D00D6] font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Contact Compliance Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
