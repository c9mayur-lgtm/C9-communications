'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Shield, Zap, Target, Globe, PhoneCall, 
  MessageSquare, Layout, HardDrive, Lock 
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { C9Button } from '@/components/design-system/C9Button';
import { HomePillarsTabbed } from '@/components/landing/HomePillarsTabbed';
import { HomeProductBar } from '@/components/landing/HomeProductBar';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';

const ease = [0.22, 1, 0.36, 1] as any;

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
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
              <Link href="/contact" passHref>
                <C9Button size="lg" className="min-w-[240px]">
                  Book Free Assessment
                </C9Button>
              </Link>
              <Link href="/solutions" passHref>
                <C9Button variant="secondary" size="lg" className="min-w-[240px]">
                  Explore Solutions
                </C9Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(93,0,214,0.03)_0,transparent_70%)] pointer-events-none" />
      </section>

      {/* ── Main Pillars ─────────────────────────────────────────── */}
      <HomePillarsTabbed />

      {/* ── Products Bar ─────────────────────────────────────────── */}
      <HomeProductBar />

      {/* ── Feature Glimpse ───────────────────────────────────────── */}
      <section className="py-32 px-6 border-y border-gray-50 bg-[#F9FAFF]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="c9-section-heading mb-6" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>Built for high-performance teams.</h2>
            <p className="text-[18px] text-gray-500 font-normal max-w-xl mx-auto leading-relaxed">Everything we do is focused on 99.99% reliability and zero friction for your staff.</p>
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
                <h4 className="text-[20px] font-bold text-[#0c1024] tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{f.label}</h4>
                <p className="text-[16px] leading-relaxed text-gray-500 font-normal">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <ServiceTestimonialKajabi />

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
