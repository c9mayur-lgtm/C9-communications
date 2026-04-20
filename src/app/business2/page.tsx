'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  HelpCircle, Clock, Search, Handshake, 
  Target, Monitor, Lock, Cloud, PhoneCall,
  Users, MessageSquare, AlertCircle
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPERS
   ───────────────────────────────────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}) => {
  const y = direction === 'up' ? 28 : 0;
  const x = direction === 'left' ? -28 : direction === 'right' ? 28 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-10 pb-0 lg:pt-16">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />
    <div
      className="pointer-events-none absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-14 lg:pb-20">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <ShieldCheck size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Managed IT for Small Business</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Stop Fighting Your Technology and{' '}
              <span className="text-[#5D00D6]">Start Growing Your Business</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-5 max-w-[520px]">
              Get reliable, jargon-free IT management that actually works. We handle your systems, security, and support so you can focus on what matters—your customers.
            </p>
            <p className="text-[14px] text-slate-500 mb-10 max-w-[520px]">
              Specialised Australian IT experts for businesses with 5–50 employees. No internal IT team required.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
              >
                Get My Free IT Health Check
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:1300000000"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap"
              >
                Talk to an IT Expert
              </a>
            </div>
            <p className="text-[13px] text-slate-400 font-medium ml-1">
              Fixed-rate plans. No hidden fees. Local support.
            </p>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="flex flex-wrap gap-x-7 gap-y-3 mt-10 pt-8 border-t border-slate-100">
              {['Local AU Support', 'No Lock-in Contracts', 'Fast Response Times', 'Jargon-Free Approach'].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-slate-500 text-[13px] font-semibold">
                  <CheckCircle size={14} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.14} direction="right" className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group">
            <img
              src="/images/hero_business.png"
              alt="Small business owner focusing on work"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-white/60">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#5D00D6] mb-1">System Health</div>
              <div className="text-[17px] font-bold text-slate-900 leading-tight">All Operations Secure ✓</div>
            </div>
            <div className="absolute top-6 right-6 bg-[#5D00D6] text-white rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-0.5">Support Level</div>
              <div className="text-[15px] font-extrabold">24/7 Managed</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — RELATABILITY / EMPATHY
   ───────────────────────────────────────────────────────── */
const SectionEmpathy = () => (
  <section className="py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-12">
        <span className="c9-eyebrow mb-4">Does your IT feel like a constant hurdle?</span>
        <h2 className="text-[28px] md:text-[36px] font-extrabold text-slate-900 leading-tight max-w-3xl mx-auto">
          You started your business to solve problems for customers, not to spend your day troubleshooting computer issues.
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { icon: <Clock className="text-[#5D00D6]" />, label: 'Waiting for Fixes', desc: 'Hours (or days) wasted waiting for a simple IT response.' },
          { icon: <Target className="text-[#5D00D6]" />, label: 'Hidden IT Costs', desc: 'Surprise invoices and confusing monthly bills you can\'t predict.' },
          { icon: <Lock className="text-[#5D00D6]" />, label: 'Security Worries', desc: 'Constant concern about being hacked or losing critical data.' },
          { icon: <AlertCircle className="text-[#5D00D6]" />, label: 'Unreliable Vendors', desc: 'Feeling like your "IT person" has simply disappeared when needed.' },
        ].map((s, i) => (
          <FadeIn key={i} delay={i * 0.05} className="group">
            <div className="h-full bg-white border border-slate-100 rounded-2xl p-6 hover:border-[#5D00D6]/20 transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#5D00D6]/5 flex items-center justify-center mb-4 group-hover:bg-[#5D00D6]/10 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-[16px] mb-2">{s.label}</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.2} className="text-center">
        <p className="text-slate-600 font-medium mb-6">If any of these sound familiar, you’re not alone. We’ve helped hundreds of Aussie businesses fix this.</p>
        <a href="#consultation" className="text-[#5D00D6] font-bold hover:underline inline-flex items-center gap-2">
          Fix My IT Issues Now <ArrowRight size={16} />
        </a>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — PROBLEM AGITATION
   ───────────────────────────────────────────────────────── */
const SectionAgitation = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4 text-rose-600">The Risk of Inaction</span>
          <h2 className="c9-section-heading mb-6">
            The Hidden Cost of "Cheap" or "Freelance" IT
          </h2>
          <p className="c9-body mb-8">
            Most small businesses don't realise how much they are losing to poor IT support until it is too late. Every minute your team is offline is money out of your pocket.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                <Zap size={20} className="text-rose-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-[17px] mb-1">Downtime = Lost Sales</h4>
                <p className="text-slate-500 text-[14px]">When your network fails, your business stops. Can you afford to be offline for a whole afternoon?</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-rose-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-[17px] mb-1">Cybersecurity Threats</h4>
                <p className="text-slate-500 text-[14px]">43% of cyberattacks target small businesses. A single breach can be enough to close your doors permanently.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-rose-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-[17px] mb-1">Your Time is Wasted</h4>
                <p className="text-slate-500 text-[14px]">You didn't start a business to become a part-time IT troubleshooter. Focus on growth, not resetting passwords.</p>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.1}>
          <div className="bg-[#0c1024] rounded-[32px] p-8 lg:p-12 text-white relative overflow-hidden text-center">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <AlertCircle size={160} />
             </div>
             <h3 className="text-2xl md:text-3xl font-bold mb-6">Can you afford another day of IT uncertainty?</h3>
             <p className="text-white/70 mb-10 text-[16px] leading-relaxed">
               Reliability isn't a luxury—it's a requirement for a modern business to survive and scale.
             </p>
             <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0c1024] rounded-full h-14 px-10 font-bold text-[15px] hover:bg-slate-100 transition-all shadow-xl whitespace-nowrap"
              >
                Book My Free Assessment
              </a>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — SOLUTION
   ───────────────────────────────────────────────────────── */
const SectionSolution = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">C9 Communications: Your Complete IT Partner</span>
        <h2 className="c9-section-heading mb-6 max-w-2xl mx-auto">
          We become your outsourced IT department
        </h2>
        <p className="c9-body max-w-3xl mx-auto">
          No jargon, no excuses, just a team of Australian experts who make sure your technology &quot;just works.&quot; We provide the enterprise-level support your business deserves at a small business price point.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'Local Expert Support', desc: 'Direct access to skilled technicians right here in Australia. No overseas call centres.', icon: <Users size={24} /> },
          { title: 'Jargon-Free Clarity', desc: 'We speak in outcomes, not acronyms. You\'ll always know exactly what we\'re doing and why.', icon: <MessageSquare size={24} /> },
          { title: 'Full Accountability', desc: 'We manage everything—from your internet and phones to your servers and security.', icon: <Handshake size={24} /> },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center mb-6 text-[#5D00D6]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — VALUE / OUTCOME (TRANSFORMATION)
   ───────────────────────────────────────────────────────── */
const SectionValue = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">The C9 Difference</span>
          <h2 className="c9-section-heading mb-6">
            From Tech Anxiety to Total Peace of Mind
          </h2>
          <p className="c9-body mb-8">
            Experience the transformation when your technology is handled by professionals who care about your success.
          </p>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 relative overflow-hidden group hover:border-[#5D00D6]/20 transition-all">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[12px] font-extrabold text-slate-400 uppercase tracking-widest">Before C9</span>
                  <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
               </div>
               <p className="text-slate-700 italic font-medium">&ldquo;I hope the network doesn&apos;t crash today. Our IT guy doesn&apos;t answer his phone.&rdquo;</p>
            </div>
            <div className="p-6 rounded-2xl border border-[#5D00D6]/20 bg-[#5D00D6]/5 relative overflow-hidden group transition-all">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[12px] font-extrabold text-[#5D00D6] uppercase tracking-widest">With C9 Managed IT</span>
                  <div className="w-2 h-2 rounded-full bg-[#5D00D6]"></div>
               </div>
               <p className="text-slate-900 font-bold">&ldquo;I don&apos;t even think about the IT anymore—it just works. Help is always one call away.&rdquo;</p>
            </div>
          </div>
        </FadeIn>
        <div className="lg:pl-10">
          <FadeIn direction="right" delay={0.1}>
            <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="/images/c9_team_collaboration.png" 
                alt="Business owner enjoying peace of mind" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-bottom p-10">
                <div className="mt-auto">
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Zap key={i} size={16} className="fill-[#5D00D6] text-[#5D00D6]" />)}
                  </div>
                  <p className="text-white font-bold text-xl leading-snug">
                    Zero downtime projects. <br/>100% Australian support.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — SERVICES (SIMPLIFIED)
   ───────────────────────────────────────────────────────── */
const SectionServices = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Our Core Capabilities</span>
        <h2 className="c9-section-heading mb-6 max-w-2xl mx-auto">
          Everything your business needs to operate reliably
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <HelpCircle className="text-[#5D00D6]" />, title: 'Reliable Helpdesk', desc: 'Fast answers to your team\'s everyday IT questions from experts who know your setup.' },
          { icon: <Lock className="text-[#5D00D6]" />, title: 'Cybersecurity', desc: 'Deep protection keeping your client data safe from hackers and scams.' },
          { icon: <Cloud className="text-[#5D00D6]" />, title: 'Cloud & Email', desc: 'Secure Microsoft 365 or Google Workspace management tailored for your workflow.' },
          { icon: <Monitor className="text-[#5D00D6]" />, title: 'Proactive Monitoring', desc: 'We fix problems before they cause downtime. 24/7 system health checks.' },
        ].map((s, i) => (
          <FadeIn key={i} delay={i * 0.05} className="group">
            <div className="bg-white rounded-3xl border border-slate-100 p-8 h-full hover:border-[#5D00D6]/20 transition-all hover:shadow-lg text-center">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#5D00D6]/5 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-extrabold text-slate-900 text-[18px] mb-3">{s.title}</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      
      <FadeIn delay={0.2} className="mt-12 text-center bg-white rounded-3xl border border-slate-100 p-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 text-left">
           <div className="w-16 h-16 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
              <Zap size={32} className="text-[#5D00D6]" />
           </div>
           <div className="grow">
              <h4 className="text-xl font-bold text-slate-900 mb-2">The Telecom Advantage</h4>
              <p className="text-slate-500 text-[15px]">C9 handles both your <strong>IT and your Business Internet/Phones</strong>. No more calling two different companies only for them to blame each other. We own the outcome.</p>
           </div>
           <div className="shrink-0 w-full md:w-auto">
              <a href="/telco" className="inline-flex items-center justify-center bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all w-full">Explore Telco</a>
           </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — HOW IT WORKS
   ───────────────────────────────────────────────────────── */
const SectionHowItWorks = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Simple Onboarding</span>
        <h2 className="c9-section-heading mb-6 max-w-2xl mx-auto">
          Getting your IT fixed is easier than you think
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-slate-100" />
        
        {[
          { step: '01', title: 'Free IT Assessment', desc: 'We look at your current setup, find security gaps, and identify ways to save you time and money.' },
          { step: '02', title: 'Seamless Transition', desc: 'We move your systems to our managed platform with zero downtime for your team.' },
          { step: '03', title: 'Total Ongoing Support', desc: 'Rest easy knowing our Australian team is monitoring and supporting your business 24/7.' },
        ].map((s, i) => (
          <FadeIn key={i} delay={i * 0.1} className="relative text-center">
            <div className="w-[90px] h-[90px] rounded-full bg-white border-2 border-[#5D00D6] flex items-center justify-center mb-6 mx-auto relative z-10 shadow-lg shadow-purple-900/10">
               <span className="text-2xl font-black text-[#5D00D6]">{s.step}</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-4">{s.title}</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed px-4">{s.desc}</p>
          </FadeIn>
        ))}
      </div>
      
      <FadeIn delay={0.4} className="mt-16 text-center">
         <a
            href="#consultation"
            className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group"
          >
            Get Started with Step 01
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — OBJECTION HANDLING
   ───────────────────────────────────────────────────────── */
const SectionObjections = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6] opacity-[0.05] rounded-full blur-[100px] -mr-64 -mt-64"></div>
    <div className={`${C} relative z-10`}>
      <FadeIn className="text-center mb-16">
        <h2 className="c9-section-heading !text-white mb-6 max-w-2xl mx-auto">
          Common Questions (and Hesitations)
        </h2>
        <p className="text-white/60 text-[16px] max-w-xl mx-auto">
          We know switching IT providers can feel risky. Here is how we make it safe for you.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { q: 'Will this be expensive?', a: 'We offer predictable, flat-rate monthly plans. You will never get a "surprise bill" from us. We scale our pricing to fit your headcount.' },
          { q: 'Is it hard to switch?', a: 'Not at all. We have an expert "Transition Team" that manages everything from your previous vendor. You don\'t even have to have the awkward conversation.' },
          { q: 'Am I "too small" for you?', a: 'Never. We specialise in businesses with 5–50 staff. Our systems are built specifically for the unique needs of small Australian businesses.' },
        ].map((o, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all">
              <h4 className="text-lg font-bold mb-4 text-[#a56eff]">{o.q}</h4>
              <p className="text-white/70 text-[15px] leading-relaxed font-medium">{o.a}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — DIFFERENTIATION
   ───────────────────────────────────────────────────────── */
const SectionDifferentiation = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
           <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative">
              <img 
                src="/images/c9_support_engineer.png" 
                alt="C9 Australian support team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg">
                 <span className="text-[#5D00D6] font-bold text-[13px] uppercase tracking-wider">100% Australian Owned & Operated</span>
              </div>
           </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.1}>
          <span className="c9-eyebrow mb-4">Why C9 Communications?</span>
          <h2 className="c9-section-heading mb-6">
            Better than the average Managed Service Provider
          </h2>
          <p className="c9-body mb-8">
            Most IT companies only see half the picture. Because we are both a <strong>Telecom and IT provider</strong>, we control the entire technology path for your business.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              'Local AU-Based Support: Talk to someone who knows your area.',
              'No Finger-Pointing: We own your internet AND your IT systems.',
              'Response Time Guarantee: We don\'t leave you hanging.',
              'Long-Term Partnership: We grow as your business grows.',
            ].map((text, i) => (
              <li key={i} className="flex gap-3">
                 <div className="shrink-0 mt-1">
                    <CheckCircle size={18} className="text-[#5D00D6]" />
                 </div>
                 <span className="text-slate-700 font-semibold leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
          <a
            href="tel:1300000000"
            className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[16px] hover:translate-x-1 transition-all"
          >
            Call Us for a Quick Chat <ArrowRight size={18} />
          </a>
        </FadeIn>
      </div>
    </div>
  </section>
);


/* ─────────────────────────────────────────────────────────
   SECTION 10 — STRONG CTA SECTION
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
     <div className="absolute inset-0 bg-[#5D00D6]/5 opacity-30"></div>
     <div className={`${C} relative z-10 text-center`}>
        <FadeIn>
          <h2 className="text-[32px] md:text-[52px] font-black text-slate-900 leading-[1.1] mb-8 max-w-4xl mx-auto">
            Ready to Fix Your IT Frustrations for Good?
          </h2>
          <p className="c9-body mb-12 max-w-2xl mx-auto text-[18px]">
            Don&apos;t wait for your next system crash. Book your free IT assessment today and see the difference a professional partner makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-16 px-12 font-extrabold text-[17px] hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/30 group w-full sm:w-auto"
              >
                Book My Free Assessment
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <div className="hidden sm:block text-slate-400 font-bold px-4">OR</div>
              <a
                href="tel:1300000000"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-16 px-12 font-extrabold text-[17px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all w-full sm:w-auto bg-white"
              >
                1300 000 000
              </a>
          </div>
          <p className="mt-8 text-slate-400 font-medium">30-minute discovery call. No obligations.</p>
        </FadeIn>
     </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Business2Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionEmpathy />
      <SectionAgitation />
      <SectionSolution />
      <SectionValue />
      <SectionServices />
      <SectionHowItWorks />
      <SectionObjections />
      <SectionDifferentiation />
      
      <WpCaseStudies 
        eyebrow="CLIENT SUCCESS"
        title="Small Businesses Thriving with C9"
        articles={[
          {
            tag: 'RETAIL & E-COMMERCE',
            title: 'Securing a Growing Online Presence',
            desc: 'We helped a boutique retail brand scale from one location to five, ensuring their POS systems and warehouse networking never skipped a beat.',
            img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
            videoText: 'Retail Case Study',
            href: '#consultation'
          },
          {
            tag: 'PROFESSIONAL SERVICES',
            title: 'Remote Work Security for Law Firm',
            desc: 'Implemented a 100% secure Microsoft 365 environment for 20+ staff, allowing secure document access from courtrooms and homes.',
            img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
            videoText: 'Legal IT Success',
            href: '#consultation'
          }
        ]}
      />

      <WpFAQAndFeedback 
        faqItems={[
          { 
            q: 'How fast is your average response time?', 
            a: 'For critical issues, we respond within 15 minutes. For general helpdesk requests, our Australian team typically picks up the phone within 60 seconds and starts working on your ticket immediately.' 
          },
          { 
            q: 'Do I have to sign a long-term contract?', 
            a: 'No. We believe in earning your business every month. While we offer discounted 12-month agreements, most of our small business clients start on a flexible month-to-month plan.' 
          },
          { 
            q: 'Can you work with our existing software?', 
            a: 'Yes. We support all standard business applications including Xero, Microsoft 365, Google Workspace, and industry-specific tools for medical, legal, and retail sectors.' 
          },
          { 
            q: 'What happens if we have a major server crash?', 
            a: 'Our proactive monitoring usually spots these issues before they happen. If a critical failure does occur, our disaster recovery protocols kick in immediately to restore your data and get you back online fast.' 
          },
          { 
            q: 'Do you help with remote workers?', 
            a: 'Absolutely. We specialise in securing hybrid work environments, ensuring your team can work safely from anywhere with encrypted VPNs and secure endpoint management.' 
          }
        ]}
        testimonials={[
          {
            name: 'Sarah Thompson',
            role: 'Founder, Retail Group',
            content: 'Since switching to C9, I haven&apos;t had to worry about our POS systems crashing on a busy Saturday. They just fix things before I even know there is a problem. Best decision we made for our growth.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800',
            metric: '100%',
            metricLabel: 'Uptime'
          },
          {
            name: 'James Wilson',
            role: 'Director, Wilson & Co Legal',
            content: 'The security peace of mind is what I value most. Knowing our client data is protected by C9&apos;s cybersecurity team allows me to focus on my cases without distraction. Their local support is excellent.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
            metric: '24/7',
            metricLabel: 'Protection'
          }
        ]}
      />

      <FinalCTA />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GET STARTED"
          title="Claim Your Free IT Health Check"
          description="Ready to stop fighting your IT? Book a 30-minute discovery call where we assess your current setup, identify risks, and show you exactly how to get reliable support."
          formTitle="Claim My Health Check"
        />
      </section>
    </main>
  );
}
