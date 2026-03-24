'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Shield, Zap, Target, Globe, PhoneCall, 
  MessageSquare, Layout, HardDrive, Lock 
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

const ease = [0.22, 1, 0.36, 1] as any;

const SectionHighlight = ({ 
  title, 
  desc, 
  icon: Icon, 
  href, 
  color, 
  delay = 0 
}: { 
  title: string; 
  desc: string; 
  icon: any; 
  href: string; 
  color: string; 
  delay?: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: ease as any }}
    className="group relative"
  >
    <Link href={href}>
      <div className="relative h-full p-8 md:p-10 bg-white rounded-[40px] border border-gray-100 hover:border-purple-200 transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_64px_rgba(93,0,214,0.06)] overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50/50 to-transparent rounded-bl-full translate-x-12 -translate-y-12 transition-transform group-hover:translate-x-8 group-hover:-translate-y-8 duration-500" />
        
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110" style={{ background: `${color}10`, color }}>
          <Icon size={28} />
        </div>
        
        <h3 className="text-[26px] font-semibold text-[#0c1024] mb-4 tracking-tight leading-snug">{title}</h3>
        <p className="text-[15px] leading-relaxed text-gray-400 font-medium mb-8 max-w-[280px]">{desc}</p>
        
        <div className="flex items-center gap-2 text-[14px] font-bold uppercase tracking-widest transition-all duration-300 group-hover:gap-4" style={{ color }}>
          Explore Solution <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  </motion.div>
);

export default function Homepage() {
  return (
    <main className="min-h-screen bg-[#FDFDFF] selection:bg-purple-100 selection:text-[#5D00D6]">
      
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] animate-pulse" />
              <span className="text-[12px] font-bold text-[#5D00D6] uppercase tracking-[0.2em]">Australia's Trusted Partner</span>
            </div>
            
            <h1 className="text-[48px] md:text-[82px] font-semibold text-[#0c1024] leading-[1.05] tracking-tight mb-10 max-w-4xl mx-auto">
              The last <span className="text-[#5D00D6]">IT & Telco</span> partner you'll ever need.
            </h1>
            
            <p className="text-[18px] md:text-[22px] text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
              Consolidate your entire business infrastructure into one unified, high-performance ecosystem. Built for growth, powered by Aussie experts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-[#5D00D6] text-white font-bold text-[16px] hover:shadow-[0_20px_40px_rgba(93,0,214,0.3)] hover:-translate-y-1 transition-all duration-300">
                Book Free Assessment
              </Link>
              <Link href="/solutions" className="px-10 py-5 rounded-full bg-white border border-gray-100 text-[#0c1024] font-bold text-[16px] hover:bg-gray-50 transition-all">
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(93,0,214,0.03)_0,transparent_70%)] pointer-events-none" />
      </section>

      {/* ── Main Pillars ─────────────────────────────────────────── */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <SectionHighlight 
              title="Managed IT"
              desc="Full-spectrum engineering support, 24/7 security monitoring, and strategic roadmap planning."
              icon={Shield}
              href="/managed-it"
              color="#5D00D6"
              delay={0.1}
            />
            <SectionHighlight 
              title="Business Telco"
              desc="Enterprise-grade Fibre NBN, high-volume mobile fleets, and C9X cloud voice solutions."
              icon={Globe}
              href="/telco"
              color="#D946EF"
              delay={0.2}
            />
            <SectionHighlight 
              title="Modern Workplace"
              desc="Microsoft 365, zero-touch device deployment, and secure hybrid collaboration."
              icon={Layout}
              href="/modern-workplace"
              color="#0EA5E9"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ── Feature Glimpse ───────────────────────────────────────── */}
      <section className="py-32 px-6 border-y border-gray-50 bg-[#F9FAFF]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-[36px] md:text-[52px] font-semibold text-[#0c1024] tracking-tight mb-6">Built for high-performance teams.</h2>
            <p className="text-[17px] text-gray-400 font-medium max-w-xl mx-auto leading-relaxed">Everything we do is focused on 99.99% reliability and zero friction for your staff.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: '99.99% Uptime', icon: Zap, body: 'Guaranteed by enterprise-grade SLAs and dual-homed networks.' },
              { label: '24/7 Local Support', icon: MessageSquare, body: 'Direct access to level 3 Australian engineers, any time, any day.' },
              { label: 'Compliance Ready', icon: Lock, body: 'SOC2, HIPAA, and GDPR compliant workflows for sensitive data.' },
              { label: 'Scale on Demand', icon: Target, body: 'Provisions seats, hardware, and bandwidth in hours, not weeks.' }
            ].map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="flex flex-col gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg shadow-purple-900/5 flex items-center justify-center text-[#5D00D6]">
                  <f.icon size={22} />
                </div>
                <h4 className="text-[19px] font-bold text-[#0c1024] tracking-tight">{f.label}</h4>
                <p className="text-[14px] leading-relaxed text-gray-500 font-medium">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation Form ────────────────────────────────────── */}
      <WpConsultationForm 
        showHeader={false} 
        eyebrow="READY TO UPGRADE?"
        title="Build your modern infrastructure today."
        description="Book a brief session with our senior engineers to build a roadmap tailored to your specific goals and budget."
        formTitle="Build your roadmap today"
      />

    </main>
  );
}
