'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Network, Shield, HeadphonesIcon,
  AlertTriangle, Building2, Clock, Smartphone
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { TrustProofSystem } from '@/components/sections/TrustProofSystem';

/* ─── Animation Helper ─────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Hero ─────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-slate-50 pt-24 pb-14 md:pt-32 md:pb-20">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
    <div
      className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Building2 size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Real Estate IT</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Flexible IT for <span className="text-[#5D00D6]">High-Velocity Real Estate</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-2 max-w-[530px]">
              Real estate doesn't happen at a desk. We deliver mobile-first, secure, and multi-office technology that keeps your agents connected to their listings, their data, and their clients—wherever the next deal takes them.
            </p>
            <p className="text-[14px] text-[#5D00D6] font-bold mb-10">Supporting industry-specific environments with reliable, scalable systems</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-4">
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer whitespace-nowrap"
              >
                Talk to a Real Estate Specialist
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/industries"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#5D00D6] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                View All Industries
              </a>
            </div>
            <p className="text-[14px] text-slate-500 ml-1">No obligation. Just clear, practical advice.</p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-5">
              {['Mobile-Ready Agency', 'Multi-Office Sync', 'Secure Client Data', '24/7 Monitoring'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-500 text-[14px] font-bold">
                  <CheckCircle size={12} className="text-[#5D00D6]" /> {t}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Visual panel */}
        <FadeIn delay={0.12} className="relative h-full hidden lg:block">
          <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop" 
              alt="Premium Modern Real Estate" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/90 via-[#0c1024]/20 to-transparent flex items-end p-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full">
                <div className="flex items-center gap-4 text-white">
                  <Smartphone className="text-blue-400" size={24} />
                  <div>
                    <div className="font-bold text-[14px]">100% Mobile Accessibility</div>
                    <div className="text-white/70 text-[14px]">Listings & CRM available everywhere.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── Day In The Life ───────────────────────────── */
const DayInTheLife = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5D00D6]/10 text-[#5D00D6] mb-6">
            <Clock size={24} />
          </div>
          <h2 className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 leading-tight">
            It’s Saturday afternoon. The offer is on the table.
          </h2>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            Your agent is at a property, mid-negotiation. They need to pull up a vendor report or a contract addendum right now. If your office server is down or the VPN is lagging, that momentum dies.
          </p>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            Real estate doesn't wait for your IT department to wake up on Monday morning. Your team is "always on," and they expect their tech to be too. When an agent can't access their CRM or a file from their phone, it's not just a tech glitch—it's a potentially lost commission.
          </p>
          <p className="text-[18px] text-slate-900 font-bold mb-8 leading-relaxed">
            With C9, your infrastructure is built for the field. We implement cloud-first strategies that make your data accessible from anywhere, securely. We standardise your office networks so that an agent can walk into any branch and be instantly connected. We proactively monitor your systems 24/7, so when that Saturday afternoon deal is happening, the tech is the last thing on your mind.
          </p>
          <p className="text-[16px] text-[#5D00D6] font-semibold">
            We provide the backbone for your sales, so you can focus on the closure.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── Challenges ────────────────────────────────── */
const Challenges = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeIn className="mb-12">
        <p className="c9-eyebrow mb-4">Operational Friction</p>
        <h2 className="c9-section-heading max-w-2xl">
          The hurdles that slow down your agency
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Smartphone size={20} />,
            title: 'Inconsistent Mobile Access',
            desc: 'If agents have to return to the office just to upload a document or check a file, you\'re losing hours of productive listing time every week.',
          },
          {
            icon: <Network size={20} />,
            title: 'Fragmented Office Setups',
            desc: 'Running different IT setups across multiple branches leads to "IT silos" where data isn\'t shared effectively and support becomes a nightmare.',
          },
          {
            icon: <Shield size={20} />,
            title: 'Client Data Liabilities',
            desc: 'Real estate agencies hold a treasure trove of sensitive personal and financial data. A breach isn\'t just a tech issue—it\'s a massive legal and reputational risk.',
          },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div className="bg-white rounded-[20px] border border-slate-100 p-7 h-full hover:shadow-lg hover:border-[#5D00D6]/20 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6] mb-5 group-hover:bg-[#5D00D6]/15 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Impact Layer (What This Means) ────────────── */
const Impact = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.08]"
      style={{ background: 'radial-gradient(ellipse at 80% 50%, #5D00D6, transparent 70%)' }}
    />
    <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn delay={0.1} className="order-2 lg:order-1 relative rounded-[32px] overflow-hidden aspect-[4/3] hidden md:block">
           <img 
              src="/images/greenfield_consultation.png" 
              alt="Real estate strategy consultation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
        </FadeIn>

        <FadeIn className="order-1 lg:order-2">
          <p className="c9-eyebrow !text-[#a56eff] mb-5">Agency Impact</p>
          <h2 className="c9-section-heading !text-white mb-8">
            What this actually means for you
          </h2>
          <div className="space-y-6">
            {[
              { title: 'True Agent Mobility', desc: 'Secure, high-speed access to your CRM and files from any device, anywhere. No more "I\'ll send that when I get back to the office."' },
              { title: 'Standardised Branch Rollouts', desc: 'Opening a new office? We drop in a pre-configured network stack that connects seamlessly to your existing infrastructure in hours.' },
              { title: 'Bank-Level Data Security', desc: 'Protect your clients and your reputation with modern encryption and access controls that meet Australian compliance standards.' },
              { title: 'Always-On Support', desc: 'Our team is here when your agents are—including weekends. We understand that Saturday is your busiest day, and we act accordingly.' },
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="text-[#a56eff] shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-bold text-[16px] mb-1">{point.title}</h4>
                  <p className="text-white/70 text-[14px] leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── Trust / Team ──────────────────────────────── */
const Trust = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <p className="c9-eyebrow mb-4">Direct Support</p>
          <h2 className="c9-section-heading mb-6">Humans who speak agent, not just geek.</h2>
          <p className="c9-body text-slate-600 mb-5">
            We know that a listing goes live at a specific time and an auction has no "undo" button. Our support isn't about just closing tickets; it's about solving problems fast.
          </p>
          <p className="c9-body text-slate-600 mb-8">
            Our Australian-based team learns your specific agency's workflow. We don't ask your admin staff to troubleshoot firewall logs; we handle the technical heavy lifting so they can support your agents. We’re local, we’re responsive, and we actually answer the phone when it matters most.
          </p>
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:text-indigo-900 transition-colors"
          >
            Meet the team backing your agency <ArrowRight size={16} />
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="relative rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-square bg-slate-50 border border-slate-100">
          <img 
            src="/images/support/team.png" 
            alt="Dedicated Real Estate IT Support Team" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/40 to-transparent mix-blend-hard-light" />
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── Final CTA ─────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[760px] text-center">
      <FadeIn>
        <p className="c9-eyebrow mb-5">Next Steps</p>
        <h2 className="c9-section-heading mb-6">Let's audit your agent productivity.</h2>
        <p className="c9-body text-slate-600 mb-10">
          We'll do a walkthrough of your current mobile access and office connectivity. No jargon, just a clear report on how to give your agents more time back and make your agency more resilient.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer"
          >
            Book an Agency Tech Review
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-[14px] text-slate-500">No obligation. Just clear, practical advice.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── Page ──────────────────────────────────────── */
export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <DayInTheLife />
      <Challenges />
      <Impact />
      <Trust />
      <TrustProofSystem />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="REAL ESTATE IT ADVISORY"
          title="Let's stabilise your agency."
          description="Drop your details below. We'll show you how we standardise agency networks to guarantee agent mobility, data security, and seamless multi-office collaboration — no obligation, just clear, practical advice."
          formTitle="Talk to a Real Estate Specialist"
        />
      </section>
    </main>
  );
}
