'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Wifi, Phone, Network, Shield, HeadphonesIcon, AlertTriangle, Users, Zap, Clock, Briefcase } from 'lucide-react';
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
      className="pointer-events-none absolute -top-40 -left-40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Users size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Professional Services</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              IT Designed to Protect Your <span className="text-[#5D00D6]">Billable Hours</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-2 max-w-[530px]">
              Lawyers, accountants, and consultants perform best when technology is invisible. We build secure, high-performance environments so your team can focus entirely on your clients.
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
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 cursor-pointer whitespace-nowrap h-14 px-8 text-[15px] font-bold"
              >
                Talk to an IT Architect
                
              </a>
              <a
                href="/industries"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full hover:bg-[#5D00D6] hover:text-white transition-all cursor-pointer whitespace-nowrap h-14 px-8 text-[15px] font-bold"
              >
                View All Industries
              </a>
            </div>
            <p className="text-[14px] text-slate-500 ml-1">No obligation. Just clear, practical advice.</p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-5">
              {['Flawless Meeting Rooms', 'Zero Trust Security', 'Rapid Support', 'Remote Work Ready'].map((t) => (
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
              src="/modern_office_workplace.png" 
              alt="Professional business meeting in modern office" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/90 via-[#0c1024]/20 to-transparent flex items-end p-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full">
                <div className="flex items-center gap-4 text-white">
                  <Shield className="text-[#a56eff]" size={24} />
                  <div>
                    <div className="font-bold text-[14px]">Zero Trust Client Data Vault</div>
                    <div className="text-white/70 text-[14px]">Remote access secured without VPN drops.</div>
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
          <div className="inline-flex items-center justify-center w-12 rounded-full bg-[#5D00D6]/10 text-[#5D00D6] mb-6 h-14 px-8 text-[15px] font-bold">
            <Briefcase size={24} />
          </div>
          <h2 className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 leading-tight">
            It’s 3:00 PM. The final client presentation is about to start.
          </h2>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            Your partners are gathered in the main boardroom. The client is joining via Teams. Important documents—some highly confidential—need to be shared instantly from the cloud.
          </p>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            In an average firm, this is when the stress starts. The TV screen won't connect. The Wi-Fi drops. The file takes a full minute to sync. By the time the meeting actually begins, you've wasted 10 minutes and looked unprofessional.
          </p>
          <p className="text-[18px] text-slate-900 font-bold mb-8 leading-relaxed">
            With C9, the partner walks in, hits "Join," and the room wakes up. The connection is pristine. Data is shared over a fully encrypted network, instantly. The technology doesn't just work—it makes your firm look exceptionally competent.
          </p>
          <p className="text-[16px] text-[#5D00D6] font-semibold">
            That’s the difference between IT feeling like a handicap, and IT acting as a silent partner.
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
          What your practitioners suffer through daily
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            icon: <AlertTriangle size={20} />,
            title: 'IT issues bleeding billable time',
            desc: 'Every 20 minutes spent trying to reset a password, access a VPN, or fix a printer is time not spent billing clients.',
          },
          {
            icon: <Zap size={20} />,
            title: 'Meeting room anxiety',
            desc: 'Audio issues, cameras that don’t sync, and dropped calls make you look amateurish during high-stakes deals.',
          },
          {
            icon: <Shield size={20} />,
            title: 'Fear of data breaches',
            desc: 'Client contracts, IP, and financial data live on your servers. A breach isn’t just an IT issue; it’s a massive reputational disaster.',
          },
          {
            icon: <HeadphonesIcon size={20} />,
            title: 'Ticketing black holes',
            desc: 'When an accountant is working late on EOFY and gets locked out, they can’t wait 24 hours for a level-1 helpdesk to reply to an email.',
          },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div className="bg-white rounded-[20px] border border-slate-100 p-7 h-full hover:shadow-lg hover:border-[#5D00D6]/20 transition-all duration-300 flex gap-5">
              <div className="w-11 h-11 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6] shrink-0 group-hover:bg-[#5D00D6]/15 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
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
              src="/images/strategy-hero-banner.png" 
              alt="Data, team collaboration, and financial consulting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
        </FadeIn>

        <FadeIn className="order-1 lg:order-2">
          <p className="c9-eyebrow !text-[#a56eff] mb-5">Business Impact</p>
          <h2 className="c9-section-heading !text-white mb-8">
            What this matters for your firm
          </h2>
          <div className="space-y-6">
            {[
              { title: 'Maximum Productivity', desc: 'Fast, highly available systems mean staff spend time working, not waiting. Less friction equals more billable output.' },
              { title: 'Secure Client Trust', desc: 'Demonstrate to your high-value clients that their data is locked down with enterprise-grade Zero Trust architecture.' },
              { title: 'Work From Anywhere, Perfectly', desc: 'Secure laptops, fast VPNs, and cloud phones mean the partner working from the airport is as effective as the one in the boardroom.' },
              { title: 'New Hires Start at 9 AM', desc: 'We automate onboarding. When a new fee-earner starts, their laptop, accounts, and phones are fully ready on minute one.' },
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
          <h2 className="c9-section-heading mb-6">Support that respects your deadlines.</h2>
          <p className="c9-body text-slate-600 mb-5">
            When you're trying to lodge a document at 4:55 PM, you need an IT partner who feels that urgency.
          </p>
          <p className="c9-body text-slate-600 mb-8">
            We don’t subject professional services explicitly to slow ticket queues. Our Australian-based engineers pick up the phone, remote in immediately, and get your team back on track. We understand that in your industry, IT support isn't about fixing computers—it's about protecting throughput.
          </p>
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:text-indigo-900 transition-colors"
          >
            Learn about our SLA response times 
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="relative rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-square bg-slate-50 border border-slate-100">
          <img 
            src="/images/c9_support_engineer.png" 
            alt="Engineers and professionals looking at screen" 
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
        <h2 className="c9-section-heading mb-6">Let's audit your firm's setup.</h2>
        <p className="c9-body text-slate-600 mb-10">
          Tell us about the IT frustrations your partners complain about most. We'll show you exactly how to resolve them with a robust, highly secure, managed environment.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 cursor-pointer"
          >
            Book an Advisory Session
            
          </a>
          <p className="text-[14px] text-slate-500">No obligation. Just clear, practical advice.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── Page ──────────────────────────────────────── */
export default function ProfessionalServicesPage() {
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
          eyebrow="FIRM IT ADVISORY"
          title="Let's remove the IT bottlenecks."
          description="Drop your details below. We’ll show you how we secure and optimize environments for law, accounting, and consulting firms — no obligation, just clear, practical advice."
          formTitle="Talk to an IT Architect"
        />
      </section>
    </main>
  );
}
