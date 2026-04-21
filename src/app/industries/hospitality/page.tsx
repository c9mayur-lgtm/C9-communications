'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Network, Shield, HeadphonesIcon,
  AlertTriangle, Star, Clock, Utensils
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
              <Star size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Hospitality IT</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Invisible Tech for a <span className="text-[#5D00D6]">Flawless Guest Stay</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-2 max-w-[530px]">
              In hospitality, the best technology is the kind guests never notice. We deliver rock-solid Wi-Fi, seamless POS connectivity, and clear communications that keep your operations humming and your reviews glowing.
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
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer whitespace-nowrap"
              >
                Talk to a Hospitality Specialist
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/industries"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                View All Industries
              </a>
            </div>
            <p className="text-[13px] text-slate-500 ml-1">No obligation. Just clear, practical advice.</p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-5">
              {['Seamless Guest Wi-Fi', 'POS & EFTPOS Uptime', 'Unified Team Comms', '24/7 Monitoring'].map((t) => (
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
              src="/hospitality_restaurant_realism_1776419336049.png" 
              alt="Premium Restaurant Service" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/90 via-[#0c1024]/20 to-transparent flex items-end p-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full">
                <div className="flex items-center gap-4 text-white">
                  <Wifi className="text-green-400" size={24} />
                  <div>
                    <div className="font-bold text-[15px]">Zero Guest Wi-Fi Complaints</div>
                    <div className="text-white/70 text-[13px]">Full coverage. High-speed. Secure.</div>
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
            It’s 7:00 PM on a Friday. The house is full.
          </h2>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            Your restaurant is buzzing, every table is flipped, and the kitchen is in high gear. Suddenly, the POS system lags. Then the EFTPOS terminals stop connecting.
          </p>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            In hospitality, you don't have "business hours"—you have "service periods." If your tech fails when you're busiest, the chaos ripples through the whole night. Front-of-house staff get stressed, diners wait too long, and revenue is literally left on the table.
          </p>
          <p className="text-[18px] text-slate-900 font-bold mb-8 leading-relaxed">
            But with C9, your infrastructure is built for pressure. Your POS runs on a dedicated, prioritised network. If your primary internet line stutters, our 4G failover kicks in before the waiter can even finish taking an order. Your team stays focused on the guests, not the router under the counter.
          </p>
          <p className="text-[16px] text-[#5D00D6] font-semibold">
            We handle the background noise so you can stay in the spotlight.
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
          The hurdles that hurt your guest scores
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Wifi size={20} />,
            title: 'Spotty Guest Wi-Fi',
            desc: 'Guests view fast Wi-Fi as a utility, not a luxury. If they can\'t stream or work from their room, they won\'t come back.',
          },
          {
            icon: <Utensils size={20} />,
            title: 'POS/EFTPOS Latency',
            desc: 'Slow transaction times at the counter or tableside create bottlenecks that kill your efficiency and frustrate customers.',
          },
          {
            icon: <Phone size={20} />,
            title: 'Team Communication Gaps',
            desc: 'If reception, housekeeping, and maintenance can\'t communicate instantly across the property, guest requests fall through the cracks.',
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
              src="/hospitality_hotel_lobby_realism_1776419484915.png" 
              alt="Guest enjoying hotel lobby Wi-Fi" 
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
              { title: 'Better Online Reviews', desc: 'No more "Wi-Fi was terrible" comments on TripAdvisor. We ensure coverage in every room and every corner of your venue.' },
              { title: 'Higher Table Turnover', desc: 'Snappy POS and instant EFTPOS processing means faster payments and more time for your staff to serve the next guest.' },
              { title: 'Operational Resilience', desc: 'Dropouts shouldn\'t stop your business. Our dual-line failover keeps you taking money and bookings regardless of the provider.' },
              { title: 'Reduced Staff Stress', desc: 'When the tech just works, your team can focus on what they do best: hospitality. No more fighting with hardware.' },
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
          <h2 className="c9-section-heading mb-6">Support that respects your service times.</h2>
          <p className="c9-body text-slate-600 mb-5">
            Communication issues on a Tuesday afternoon are annoying. Communication issues during a Saturday night rush are a disaster. We understand the difference.
          </p>
          <p className="c9-body text-slate-600 mb-8">
            Our Australian-based support team knows your venue’s floor plan and network layout. We don’t ask your floor managers to reboot switches; we monitor your systems proactively and often fix issues before your team even notices a flicker. One call, real humans, instant action.
          </p>
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:text-indigo-900 transition-colors"
          >
            Meet the team backing your service <ArrowRight size={16} />
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="relative rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-square bg-slate-50 border border-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
            alt="Team meeting in a professional environment" 
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
        <h2 className="c9-section-heading mb-6">Let's eliminate your Wi-Fi dead zones.</h2>
        <p className="c9-body text-slate-600 mb-10">
          We'll conduct a comprehensive site survey to identify weak spots in your guest and operational networks. No obligation, just a clear plan to ensure your hospitality venue is always online and always fast.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer"
          >
            Book a Site Audit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-[13px] text-slate-500">No obligation. Just clear, practical advice.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── Page ──────────────────────────────────────── */
export default function HospitalityPage() {
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
          eyebrow="HOSPITALITY IT ADVISORY"
          title="Let's stabilise your venue."
          description="Drop your details below. We'll show you how we standardise hospitality networks to guarantee uptime, fast guest Wi-Fi, and seamless team communication — no obligation, just clear, practical advice."
          formTitle="Talk to a Hospitality Specialist"
        />
      </section>
    </main>
  );
}
