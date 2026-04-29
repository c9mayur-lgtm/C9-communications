'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Network, Shield, HeadphonesIcon,
  AlertTriangle, Activity, Lock, Clock, FileText
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
      className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Activity size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Healthcare Operations</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              IT That Let's Your Doctors <span className="text-[#5D00D6]">Focus on Patients</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-2 max-w-[530px]">
              When a clinic is full, systems just need to work. We deliver rock-solid networks, secure patient data environments, and phone systems that never drop a booking call.
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
                Talk to a Clinic Specialist
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
              {['Secure Practice Management', 'Zero-Drop Phones', 'Urgent Support', 'Compliance Ready'].map((t) => (
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
              src="/images/hero_business.png" 
              alt="Medical professional reviewing patient data" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/90 via-[#0c1024]/20 to-transparent flex items-end p-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full">
                <div className="flex items-center gap-4 text-white">
                  <Lock className="text-blue-400" size={24} />
                  <div>
                    <div className="font-bold text-[14px]">Data Environment Secured</div>
                    <div className="text-white/70 text-[14px]">Full compliance with AU healthcare data standards.</div>
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
            It’s 8:30 AM. The clinic is already entirely full.
          </h2>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            The phone lines are running hot. General practitioners are opening patient files. Reception is trying to book follow-ups while checking in a line of patients.
          </p>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            If the practice management software stalls, or the internet drops out, everything grinds to a halt. Doctors stare at spinning wheels. Patients get agitated. The admin team gets overwhelmed. It's not just an "IT outage"—it's a massive disruption to care.
          </p>
          <p className="text-[18px] text-slate-900 font-bold mb-8 leading-relaxed">
            With C9, your infrastructure is designed around clinical flow. Your internet has a seamless 4G backup. Your network prioritises your practice management database so files load instantly. And if a doctor's PC freezes, they have a direct line to an engineer who fixes it right then and there.
          </p>
          <p className="text-[16px] text-[#5D00D6] font-semibold">
            We keep the technology invisible, so your team can focus on health.
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
          What clinics struggle with daily
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <AlertTriangle size={20} />,
            title: 'Doctors waiting on software',
            desc: 'When clinical software or radiology viewers are slow to load, a 15-minute consult turns into 20. Over the day, that causes massive delays.',
          },
          {
            icon: <Phone size={20} />,
            title: 'Dropped inbound calls',
            desc: 'Legacy phone systems can\'t handle Monday morning surges. Patients get frustrated by busy tones or misdirected routing.',
          },
          {
            icon: <Lock size={20} />,
            title: 'The fear of a data breach',
            desc: 'Healthcare details are hyper-sensitive. The stress of whether your server or cloud setup is actually secure keeps practice managers up at night.',
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
              src="/images/case-studies/case-study-1.jpg" 
              alt="Healthcare team collaboration" 
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
              { title: 'More Patients, Less Waiting', desc: 'Fast, highly available clinical systems mean doctors spend time diagnosing, not watching a loading screen.' },
              { title: 'Call Center Efficiency', desc: 'Cloud communication systems that intelligently queue and route Monday morning call spikes, so patients get answered faster.' },
              { title: 'Air-tight Compliance', desc: 'We lock down the environment so practice managers never have to stress about data breaches or audit failures.' },
              { title: 'Doctors Get VIP Support', desc: 'When a practitioner has an issue during a consult, they skip the queue. We fix it immediately so the appointment continues.' },
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
          <p className="c9-eyebrow mb-4">Urgent Support</p>
          <h2 className="c9-section-heading mb-6">Support that respects clinical time.</h2>
          <p className="c9-body text-slate-600 mb-5">
            You can’t ask a patient to "come back when the IT guy replies to the ticket." Healthcare is immediate.
          </p>
          <p className="c9-body text-slate-600 mb-8">
            Our helpdesk understands the pressure cooker of a clinic. Whether a script printer is jammed in Room 3 or a new specialist needs login credentials generated instantly, our team acts fast. We don’t run you through endless tier-1 scripts—we just log in and resolve it.
          </p>
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:text-indigo-900 transition-colors"
          >
            See how our support desk operates <ArrowRight size={16} />
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="relative rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-square bg-slate-50 border border-slate-100">
          <img 
            src="/images/realistic_business_networking_rack_1776077491291.png" 
            alt="Secure infrastructure" 
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
        <h2 className="c9-section-heading mb-6">Let's audit your clinical setup.</h2>
        <p className="c9-body text-slate-600 mb-10">
          Tell us where your clinic experiences the most friction. We'll show you how a secure, purpose-built IT and communications platform can smooth out your operations so your team can focus entirely on patient care.
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
            Book a Clinical IT Review
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-[14px] text-slate-500">No obligation. Just clear, practical advice.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── Page ──────────────────────────────────────── */
export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <DayInTheLife />
      <Challenges />
      <Impact />
      <Trust />
      <TrustProofSystem 
        testimonials={[
          {
            quote: "Every minute our systems are down is a minute we can't provide patient care. C9 has given us the stability we've needed for years.",
            author: "Clinic Practice Manager"
          },
          {
            quote: "Their understanding of security and compliance in the healthcare sector is a huge weight off our minds.",
            author: "Medical Director"
          },
          {
            quote: "The transition was seamless. Doctors and staff barely noticed the switch, but everyone noticed the improved performance.",
            author: "Healthcare Network Admin"
          }
        ]}
        cases={[
          {
            title: "Zero-Downtime Clinic Migration",
            desc: "Managed the relocation and IT setup of a multi-modality clinic without interrupting patient services."
          },
          {
            title: "Compliance-Grade Security",
            desc: "Implemented robust data protection and network security meeting Australian healthcare standards."
          },
          {
            title: "24/7 Clinical Support",
            desc: "Deployed dedicated support channels for clinical staff to ensure help is always available during patient hours."
          }
        ]}
      />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="HEALTHCARE IT ADVISORY"
          title="Let's remove the friction from your clinic."
          description="Drop your details below. We’ll show you how modernizing your IT and phones will immediately impact your team's day-to-day workflow — no obligation, just clear, practical advice."
          formTitle="Talk to a Healthcare Specialist"
        />
      </section>
    </main>
  );
}
