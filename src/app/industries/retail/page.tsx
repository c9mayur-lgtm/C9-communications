'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Network, Shield, HeadphonesIcon,
  AlertTriangle, MapPin, BarChart3, Clock, TrendingUp
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

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
              <MapPin size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Retail Operations</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              IT Built to Keep Your <span className="text-[#5D00D6]">Registers Ringing</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-10 max-w-[530px]">
              Every second of downtime costs money. We deliver reliable, bulletproof technology across your network of stores — ensuring POS systems stay online, teams stay connected, and customers aren't left waiting.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-10">
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer whitespace-nowrap"
              >
                Talk to a Retail Specialist
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/industries"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                View All Industries
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-5">
              {['Multi-Site Standardisation', 'Failover Connectivity', 'Fast Support', 'POS Reliability'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-500 text-[13px] font-bold">
                  <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Visual panel */}
        <FadeIn delay={0.12} className="relative h-full hidden lg:block">
          <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl">
            <img 
              src="/images/greenfield_retail.png" 
              alt="Retail POS Interaction" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/90 via-[#0c1024]/20 to-transparent flex items-end p-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full">
                <div className="flex items-center gap-4 text-white">
                  <Wifi className="text-green-400" size={24} />
                  <div>
                    <div className="font-bold text-[15px]">Primary & LTE Failover Active</div>
                    <div className="text-white/70 text-[13px]">100% store uptime guaranteed.</div>
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
            It’s Saturday morning. The line is out the door.
          </h2>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            Your flagship store is packed during the biggest sale of the quarter. Suddenly, the local internet connection drops.
          </p>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            If you don't have the right IT setup, panic sets in. Staff pull out manual credit card slips. Customers get frustrated and leave. Store managers spend hours fighting with phone support while revenue walks out the door.
          </p>
          <p className="text-[18px] text-slate-900 font-bold mb-8 leading-relaxed">
            But with C9, the store's 4G failover kicks in instantly. The POS systems barely blink. The music keeps playing. Transactions keep processing. Your staff doesn’t even know there was a network issue until they see our automated resolution ticket later that day.
          </p>
          <p className="text-[16px] text-[#5D00D6] font-semibold">
            That’s the difference between treating IT as an overhead cost—and treating it as the backbone of your revenue.
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
        <p className="c9-eyebrow mb-4">The Real Friction</p>
        <h2 className="c9-section-heading max-w-2xl">
          What store managers struggle with daily
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <AlertTriangle size={20} />,
            title: 'Downtime killing sales',
            desc: 'When EFTPOS terminals can’t connect or POS software hangs, you literally cannot take money. Every minute hurts.',
          },
          {
            icon: <Network size={20} />,
            title: 'Frankenstein store setups',
            desc: 'Store 1 runs on NBN, Store 2 relies on a dodgy 4G dongle, and Store 3 uses a different firewall. Fixing issues is a nightmare.',
          },
          {
            icon: <BarChart3 size={20} />,
            title: 'Vendor finger-pointing',
            desc: 'The internet provider says it’s the POS system. The POS vendor says it’s the network. Meanwhile, your store is offline.',
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
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" 
              alt="Modern Retail Environment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
        </FadeIn>

        <FadeIn className="order-1 lg:order-2">
          <p className="c9-eyebrow !text-[#a56eff] mb-5">Business Impact</p>
          <h2 className="c9-section-heading !text-white mb-8">
            What this actually means for you
          </h2>
          <div className="space-y-6">
            {[
              { title: 'Zero Vendor Blame', desc: 'We supply the internet, the network, and the support. If something drops, you call one number. We fix it.' },
              { title: 'Cookie-Cutter Rollouts', desc: 'Opening a new store? We drop in a pre-configured rack. Plug it in, turn it on, and you’re instantly connected to head office.' },
              { title: 'Unbreakable Connectivity', desc: 'Enterprise-grade 4G/5G backup is standard. Dropouts happen, but your transactions won’t.' },
              { title: 'Focus on Retail, Not IT', desc: 'Your store managers are hired to sell and lead teams, not to crawl under desks resetting routers.' },
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
          <h2 className="c9-section-heading mb-6">Humans who actually answer the phone.</h2>
          <p className="c9-body text-slate-600 mb-5">
            When a store is offline, submitting an email ticket into a black hole isn't good enough. You need help instantly.
          </p>
          <p className="c9-body text-slate-600 mb-8">
            Our Australian-based support team knows your exact network layout. They see a store drop offline before you do. We don’t ask your managers to troubleshoot firewall logs; we handle the technical heavy lifting so they can get back to the floor.
          </p>
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:text-indigo-900 transition-colors"
          >
            Meet the team backing you <ArrowRight size={16} />
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="relative rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-square bg-slate-50 border border-slate-100">
          <img 
            src="/images/support/specialist.png" 
            alt="C9 Support specialist diagnosing a problem" 
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
        <h2 className="c9-section-heading mb-6">Let's audit your worst-performing store.</h2>
        <p className="c9-body text-slate-600 mb-10">
          We don't need to replace everything on day one. Let's look at the location that drops out the most. We'll fix it, prove the model, and then roll that stability out to the rest of your fleet.
        </p>
        <a
          href="#consultation-section"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer"
        >
          Book a Discovery Chat
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </FadeIn>
    </div>
  </section>
);

/* ─── Page ──────────────────────────────────────── */
export default function RetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <DayInTheLife />
      <Challenges />
      <Impact />
      <Trust />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="RETAIL IT ADVISORY"
          title="Let's stabilise your stores."
          description="Drop your details below. We’ll show you exactly how we standardise retail networks to guarantee uptime and fast support."
          formTitle="Talk to a Retail Specialist"
        />
      </section>
    </main>
  );
}
