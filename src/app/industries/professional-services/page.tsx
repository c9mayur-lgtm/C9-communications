'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Network, Shield, HeadphonesIcon,
  AlertTriangle, Users, Zap
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
      className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.05]"
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
              Reliable IT for{' '}
              <span className="text-[#5D00D6]">High-Performance Teams</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-10 max-w-[530px]">
              Professional services firms run on productivity and communication. We deliver the
              technology foundations that keep your teams performing at their best — without
              reliability issues or IT distractions getting in the way.
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
              {['High Performance', 'Reliable Comms', 'Secure by Design', 'Scalable'].map((t) => (
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
                { stat: '1', label: 'Technology partner' },
                { stat: '100%', label: 'Environment ownership' },
                { stat: '24/7', label: 'Support coverage' },
                { stat: '0', label: 'IT distractions for your team' },
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
            Your Team Needs Technology That Gets Out of the Way
          </h2>
          <p className="c9-body text-slate-600 mb-4">
            In professional services — whether you're in consulting, accounting, legal, or any
            other discipline — productivity is directly tied to how well your technology performs.
            Slow systems, dropped calls, unreliable access, or poor IT support are not just
            inconveniences. They cost you time, focus, and client confidence.
          </p>
          <p className="c9-body text-slate-600">
            C9 builds environments that support high-performance teams. Reliable, well-managed, and
            maintained proactively so issues are addressed before they affect your work.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

const challenges = [
  {
    icon: <AlertTriangle size={20} />,
    title: 'IT issues interrupting billable time',
    desc: 'Every minute spent dealing with IT problems is time not spent on client work.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Slow or inconsistent system performance',
    desc: 'Unreliable connections and aging infrastructure reduce output and team morale.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Client data security',
    desc: 'Professional services firms handle sensitive client information that requires proper protection at every level.',
  },
  {
    icon: <HeadphonesIcon size={20} />,
    title: 'No dedicated IT support',
    desc: 'Without someone who owns your environment, problems take longer to resolve and recur more often.',
  },
];

const Challenges = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeIn className="mb-12">
        <p className="c9-eyebrow mb-4">Common Challenges</p>
        <h2 className="c9-section-heading max-w-2xl">What Gets in the Way of Great Work</h2>
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
            IT Built Around Productivity and Reliability
          </h2>
          <p className="c9-body text-slate-600 mb-8">
            C9 manages your entire IT and communications environment — connectivity, voice,
            security, and support — so your team operates without interruption. We handle the
            complexity so you can stay focused on delivering for clients.
          </p>
          <div className="space-y-3">
            {[
              'High-performance connectivity for teams working anywhere',
              'Clear, reliable voice and collaboration systems',
              'Security built in — not added as an afterthought',
              'Proactive support — issues resolved before you notice them',
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
              What This Delivers
            </p>
            <h3 className="text-[26px] font-bold mb-6 leading-snug">
              A technology environment that works as hard as your team does.
            </h3>
            <p className="text-white/70 text-[15px] leading-relaxed">
              When your IT works properly, your team performs better, your clients experience
              greater responsiveness, and your business has room to grow without infrastructure
              becoming a bottleneck.
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
          Let's Build the Right Technology Environment for Your Firm
        </h2>
        <p className="c9-body text-slate-600 mb-10">
          Talk to a specialist about your current setup. We'll identify what's holding your team
          back and outline a clear path to a more reliable, productive environment.
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

export default function ProfessionalServicesPage() {
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
          eyebrow="PROFESSIONAL SERVICES IT"
          title="Let's Build the Right Technology Environment for Your Firm"
          description="Tell us about your practice and team setup. We'll outline an IT and communications model that supports productivity, protects client data, and scales with your growth."
          formTitle="Talk to a Specialist"
        />
      </section>
    </main>
  );
}
