'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Network, Shield, HeadphonesIcon,
  AlertTriangle, Heart, Clock, Users
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
              <Heart size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Non-Profit IT</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Stretching Your Budget for <span className="text-[#5D00D6]">Maximum Mission Impact</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-10 max-w-[530px]">
              Technology should be an enabler of your mission, not a drain on your resources. We deliver affordable, reliable IT and Telco solutions designed specifically for the unique needs (and budgets) of Australian non-profits.
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
                Talk to an NFP Specialist
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
              {['Cost-Effective Managed IT', 'Secure Donor Data', 'Reliable Comms', 'Dedicated Support'].map((t) => (
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
              src="/non_profit_team_realism_1776419577084.png" 
              alt="Non-profit team working together" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/90 via-[#0c1024]/20 to-transparent flex items-end p-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full">
                <div className="flex items-center gap-4 text-white">
                  <Shield className="text-blue-400" size={24} />
                  <div>
                    <div className="font-bold text-[15px]">Secure & Compliant</div>
                    <div className="text-white/70 text-[13px]">Protecting donor data and privacy.</div>
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
            Every dollar redirected to IT is a dollar away from your cause.
          </h2>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            You’re running a vital community program, coordinating volunteers, and managing donors. The last thing you need is a "technical issue" halting your operations or a massive bill for a generic IT service that doesn’t understand your constraints.
          </p>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            In non-profits, technology often feels like a necessary evil—expensive, confusing, and prone to breaking when you need it most. Your staff are there because they care about the mission, not because they want to spend their time resetting passwords or fighting with an unreliable internet connection.
          </p>
          <p className="text-[18px] text-slate-900 font-bold mb-8 leading-relaxed">
            With C9, your IT becomes a silent supporter. We standardise your setups so they just work, we secure your donor data with bank-level encryption, and we provide fast, human support that treats your team with the respect they deserve. We stretch your budget further by focusing only on what actually helps you achieve your mission.
          </p>
          <p className="text-[16px] text-[#5D00D6] font-semibold">
            We handle the tech complexity so you can focus on the community impact.
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
          The hurdles that stall your mission
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Shield size={20} />,
            title: 'Donor Privacy Risks',
            desc: 'Protecting the trust of your supporters is paramount. Fragile IT systems and lack of proper security can leave sensitive data exposed.',
          },
          {
            icon: <Users size={20} />,
            title: 'Fragmented Remote Teams',
            desc: 'Volunteers and staff working from different locations need reliable, secure access to your systems without jumping through technical hoops.',
          },
          {
            icon: <Phone size={20} />,
            title: 'Unpredictable IT Costs',
            desc: 'Lumpy expenditure on repairs and "surprises" kills your ability to plan your mission-critical programs effectively.',
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
              src="/non_profit_community_impact_realism_1776419646399.png" 
              alt="Community impact registered via tablet" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
        </FadeIn>

        <FadeIn className="order-1 lg:order-2">
          <p className="c9-eyebrow !text-[#a56eff] mb-5">Organisation Impact</p>
          <h2 className="c9-section-heading !text-white mb-8">
            What this actually means for you
          </h2>
          <div className="space-y-6">
            {[
              { title: 'Zero Donor Trust Issues', desc: 'Enterprise-grade security protocols keep your donor records and financial data locked down and compliant.' },
              { title: 'Predictable Monthly Billing', desc: 'Our managed model turns IT from a surprise expense into a steady, predictable operational cost.' },
              { title: 'Seamless Collaboration', desc: 'Staff and volunteers can access what they need from anywhere, securely, keeping your programs running efficiently.' },
              { title: 'Focus on the Cause', desc: 'No more "accidental IT managers." Your team can get back to doing the work they’re passionate about.' },
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
          <p className="c9-eyebrow mb-4">Dedicated Support</p>
          <h2 className="c9-section-heading mb-6">Humans who value your mission as much as you do.</h2>
          <p className="c9-body text-slate-600 mb-5">
            We don't see non-profits as "small business" accounts. We see you as vital community pillars. When something goes wrong, you shouldn't have to wait in a generic phone queue.
          </p>
          <p className="c9-body text-slate-600 mb-8">
            Our Australian-based support team knows your exact setup. We understand that a downtime for your donor management system isn't just a tech glitch—it's a critical threat to your mission. We’re fast, we’re jargon-free, and we’re here to help your team do more of what matters.
          </p>
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:text-indigo-900 transition-colors"
          >
            Meet the team backing your mission <ArrowRight size={16} />
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="relative rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-square bg-slate-50 border border-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
            alt="C9 team collaborating with empathy" 
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
        <h2 className="c9-section-heading mb-6">Let's audit your IT overhead.</h2>
        <p className="c9-body text-slate-600 mb-10">
          We'll do a transparent review of your current tech spending and security posture. No high-pressure sales—just a clear, mission-aligned report on how you can stretch your budget further and protect your organisation.
        </p>
        <a
          href="#consultation-section"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer"
        >
          Book an NFP Tech Review
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </FadeIn>
    </div>
  </section>
);

/* ─── Page ──────────────────────────────────────── */
export default function NonProfitPage() {
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
          eyebrow="NON-PROFIT IT ADVISORY"
          title="More mission. Less IT overhead."
          description="Drop your details below. We'll show you how we stabilise NFP networks to guarantee donor security, predictable costs, and seamless collaboration."
          formTitle="Talk to an NFP Specialist"
        />
      </section>
    </main>
  );
}
