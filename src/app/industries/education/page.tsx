'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Network, Shield, HeadphonesIcon,
  AlertTriangle, GraduationCap, Users, Clock, BookOpen
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
              <GraduationCap size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Education IT</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Empowering Learning Through <span className="text-[#5D00D6]">Unbreakable Continuity</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-2 max-w-[530px]">
              Lessons wait for no one. We deliver high-capacity, secure, and reliable technology that supports students, teachers, and administrators—ensuring the only thing that matters is the learning.
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
                Talk to an Education Specialist
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
              {['Campus-Wide Wi-Fi', 'Student Data Security', 'Multi-Site Management', '24/7 Monitoring'].map((t) => (
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
              src="/education_classroom_realism_1776419211585.png" 
              alt="Modern Classroom Environment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/90 via-[#0c1024]/20 to-transparent flex items-end p-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full">
                <div className="flex items-center gap-4 text-white">
                  <Users className="text-blue-400" size={24} />
                  <div>
                    <div className="font-bold text-[15px]">1,200+ Concurrent Devices</div>
                    <div className="text-white/70 text-[13px]">Zero congestion. Zero dropout.</div>
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
            It’s 8:55 AM. 30 laptops open at once.
          </h2>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            The bell rings, and within seconds, every student in the room is trying to log into the portal. In many schools, this is the moment the Wi-Fi chokes, the lesson stalls, and the teacher loses the class's attention before they've even begun.
          </p>
          <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
            When tech fails in a classroom, it's not just a ticket; it's a wasted hour of education. Teachers shouldn't have to spend the first 15 minutes of every period acting as amateur IT support or apologising for page-load speeds.
          </p>
          <p className="text-[18px] text-slate-900 font-bold mb-8 leading-relaxed">
            With C9, those 30 students are online in seconds. The interactive whiteboard connects instantly. The portal is snappy. The lesson proceeds exactly how the teacher planned it. Students stay engaged, and the technology becomes what it was always meant to be: invisible.
          </p>
          <p className="text-[16px] text-[#5D00D6] font-semibold">
            We don't just manage servers; we protect the learning experience.
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
          The hurdles your staff and students face
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Network size={20} />,
            title: 'Underpowered Connectivity',
            desc: 'Consumer-grade gear hasn\'t kept up with the 1-to-1 device explosion. If your Wi-Fi isn\'t built for high-density, it will fail during peaks.',
          },
          {
            icon: <Shield size={20} />,
            title: 'Data & Privacy Risks',
            desc: 'Protecting student records and maintaining strict access control is a full-time job. A single breach isn\'t just a tech issue—it\'s a PR disaster.',
          },
          {
            icon: <BookOpen size={20} />,
            title: 'Learning Continuity',
            desc: 'Every minute of downtime is a minute of lost teaching. When systems go down, the impact on learning outcomes is real and measurable.',
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
              src="/education_it_infrastructure_realism_1776419238341.png" 
              alt="IT Infrastructure being serviced" 
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
              { title: 'Predictable IT Budgets', desc: 'No more surprise replacement costs. We manage the lifecycle of your hardware so you always know what\'s coming next.' },
              { title: 'Teacher Trust', desc: 'When teachers know the tech will work, they\'re more likely to use digital tools, improving the overall standard of learning.' },
              { title: 'Bulletproof Security', desc: 'We implement the same level of security used by banks to protect your students\' sensitive data and your institution\'s reputation.' },
              { title: 'Focus on Pedagogy', desc: 'Your staff are educators, not troubleshooting technicians. We handle the bits and bytes so they can focus on the students.' },
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
          <h2 className="c9-section-heading mb-6">Humans who understand the school calendar.</h2>
          <p className="c9-body text-slate-600 mb-5">
            We know that a failure during NAPLAN or an assessment period is a critical emergency. We don't hide behind a generic ticketing portal.
          </p>
          <p className="c9-body text-slate-600 mb-8">
            Our team becomes an extension of your own. We work around your school hours, handling major maintenance during term breaks so your classroom time is never compromised. We’re local, we’re fast, and we actually answer the phone.
          </p>
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:text-indigo-900 transition-colors"
          >
            Meet the team backing your staff <ArrowRight size={16} />
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="relative rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-square bg-slate-50 border border-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
            alt="C9 team collaborating" 
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
        <h2 className="c9-section-heading mb-6">Let's audit your campus connectivity.</h2>
        <p className="c9-body text-slate-600 mb-10">
          We'll do a deep dive into your current Wi-Fi density and security protocols. No obligation, just a clear report on where you're at and where you need to be to support modern learning.
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
            Book a Campus Audit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-[13px] text-slate-500">No obligation. Just clear, practical advice.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── Page ──────────────────────────────────────── */
export default function EducationPage() {
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
          eyebrow="EDUCATION IT ADVISORY"
          title="Let's build a more reliable campus."
          description="Drop your details below. We'll show you how we stabilise education networks to guarantee learning continuity and data security — no obligation, just clear, practical advice."
          formTitle="Talk to an Education Specialist"
        />
      </section>
    </main>
  );
}
