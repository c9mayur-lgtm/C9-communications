'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Network, Shield, HeadphonesIcon,
  AlertTriangle, GraduationCap, Users, Layers
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

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
              <GraduationCap size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Education</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Reliable Systems for{' '}
              <span className="text-[#5D00D6]">Learning Environments</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-10 max-w-[530px]">
              Education providers need infrastructure that supports students, staff, and administration
              simultaneously — at scale, every day. We deliver reliable systems built for high-demand
              environments where access and uptime are non-negotiable.
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
                Talk to a Specialist
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
              {['High Capacity', 'Always Accessible', 'Secure by Design', 'Scalable'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-500 text-[13px] font-bold">
                  <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="hidden lg:block">
          <div className="bg-white border border-slate-100 rounded-[32px] p-10 shadow-sm">
            <div className="grid grid-cols-2 gap-0 divide-x divide-y divide-slate-100">
              {[
                { stat: '100%', label: 'Campus coverage' },
                { stat: '1', label: 'Technology partner' },
                { stat: '24/7', label: 'Monitoring & support' },
                { stat: 'All', label: 'Devices & users supported' },
              ].map((item, i) => (
                <div key={i} className="text-center p-8">
                  <div className="text-[38px] font-extrabold text-[#5D00D6] mb-2 leading-none">
                    {item.stat}
                  </div>
                  <div className="text-slate-500 text-[12px] font-bold uppercase tracking-wider text-balance">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Context = () => (
  <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="max-w-3xl">
        <FadeIn>
          <p className="c9-eyebrow mb-4">The Challenge</p>
          <h2 className="c9-section-heading mb-6">
            Education Infrastructure Needs to Perform at Scale, Every Day
          </h2>
          <p className="c9-body text-slate-600 mb-4">
            Schools, colleges, and training providers operate in high-demand environments. Students
            need consistent access to learning tools, staff need reliable administrative systems,
            and management needs visibility across the campus or network.
          </p>
          <p className="c9-body text-slate-600">
            Infrastructure failures in an education setting don't just inconvenience people — they
            disrupt learning outcomes and create lasting confidence issues with students, parents,
            and stakeholders. C9 delivers systems built to handle the load and stay reliable under
            real-world usage.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

const challenges = [
  {
    icon: <Wifi size={20} />,
    title: 'Network congestion under heavy load',
    desc: 'When hundreds of devices go online simultaneously, underpowered infrastructure creates slowdowns that affect every user.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Protecting student data and privacy',
    desc: 'Education providers handle sensitive student information that requires proper access controls and data protection policies.',
  },
  {
    icon: <Layers size={20} />,
    title: 'Managing multiple systems and sites',
    desc: 'Multi-campus providers often deal with fragmented infrastructure that\'s difficult to manage consistently across locations.',
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Downtime affecting learning continuity',
    desc: 'When systems fail during class time or assessment periods, the impact on students and educators is immediate and significant.',
  },
];

const Challenges = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeIn className="mb-12">
        <p className="c9-eyebrow mb-4">Common Challenges</p>
        <h2 className="c9-section-heading max-w-2xl">What Education Providers Deal With</h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-6">
        {challenges.map((item, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div className="bg-white rounded-[20px] border border-slate-100 p-7 h-full hover:shadow-lg hover:border-[#5D00D6]/20 transition-all duration-300 group flex gap-5">
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

const Solution = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <p className="c9-eyebrow mb-4">How C9 Helps</p>
          <h2 className="c9-section-heading mb-6">
            Infrastructure That Supports Learning at Scale
          </h2>
          <p className="c9-body text-slate-600 mb-8">
            C9 delivers high-capacity, reliable infrastructure built for the demands of education
            environments. We design, implement, and manage the systems that keep students, staff,
            and administrators connected — without the infrastructure becoming a topic of conversation.
          </p>
          <div className="space-y-3">
            {[
              'High-capacity Wi-Fi and networking across classrooms and campuses',
              'Secure access controls that protect student data appropriately',
              'Scalable infrastructure that grows with your enrolment',
              'Proactive monitoring and fast response to minimise disruptions',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={17} className="text-[#5D00D6] shrink-0 mt-0.5" />
                <span className="font-semibold text-[14px] text-slate-700">{point}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-[#5D00D6] rounded-[32px] p-10 text-white">
            <p className="text-[#C084FC] text-[11px] font-bold uppercase tracking-widest mb-6">
              The Outcome
            </p>
            <h3 className="text-[26px] font-bold mb-6 leading-snug">
              Students access what they need. Staff work without interruptions. Administrators have visibility.
            </h3>
            <p className="text-white/70 text-[15px] leading-relaxed">
              When your technology infrastructure is built to the right standard, learning environments
              function the way they should. Consistent access, secure data, and systems that handle
              real-world demand without failing when it matters most.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[760px] text-center">
      <FadeIn>
        <p className="c9-eyebrow mb-5">Get Started</p>
        <h2 className="c9-section-heading mb-6">
          Let's Build the Right Infrastructure for Your Campus
        </h2>
        <p className="c9-body text-slate-600 mb-10">
          Talk to us about your institution, user load, and current challenges. We'll put together
          a clear technology plan designed around capacity, reliability, and long-term scalability.
        </p>
        <a
          href="#consultation-section"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer"
        >
          Talk to a Specialist
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </FadeIn>
    </div>
  </section>
);

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Context />
      <Challenges />
      <Solution />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="EDUCATION IT ADVISORY"
          title="Let's Build the Right Infrastructure for Your Campus"
          description="Tell us about your institution, student load, and current setup. We'll design a technology model built around reliable access, data security, and long-term scalability."
          formTitle="Talk to a Specialist"
        />
      </section>
    </main>
  );
}
