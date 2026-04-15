'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, Shield, Phone, Activity, Smartphone,
  Server, Zap, CheckCircle, Star,
  ChevronRight, Wifi, Cloud,
} from 'lucide-react';

import { TestimonialMarquee } from '@/components/landing/TestimonialMarquee';
import { UseCasesSection } from '@/components/landing/UseCasesSection';
import { FAQSection } from '@/components/landing/FAQSection';
import './saas-homepage.css';
import { FadeIn } from '@/components/shared/FadeIn';

/* ---- Static data ---- */
const SOLUTIONS = [
  { iconName: 'Wifi',        title: 'Business Internet & Connectivity',        desc: 'Fast and reliable internet services designed for modern organisations.' },
  { iconName: 'Phone',       title: 'Cloud Phone Systems',          desc: 'Flexible communication platforms that support teams across locations.' },
  { iconName: 'Smartphone',  title: 'Unified Communications',      desc: 'Integrated voice and collaboration tools that improve communication across teams.' },
  { iconName: 'Server',      title: 'Managed IT Services',         desc: 'Proactive infrastructure management and ongoing technical support.' },
  { iconName: 'Shield',      title: 'Network Security',  desc: 'Security solutions designed to protect business infrastructure and data.' },
  { iconName: 'Cloud',       title: 'Workplace Collaboration Tools',        desc: 'Technology that supports productive and connected teams.' },
];

const STATS = [
  { num: '99.99%', label: 'Network Uptime SLA' },
  { num: '24/7',   label: 'Australian Support' },
  { num: '500+',   label: 'Business Clients' },
  { num: '40%',    label: 'Avg. Cost Reduction' },
];

const BENEFITS = [
  'Reliable connectivity designed for business operations',
  'Integrated IT and telecommunications expertise',
  'Solutions built for modern workplaces',
  'Dedicated infrastructure specialists',
  'Ongoing support and proactive management',
];

const MARQUEE_LABELS = [
  'Small Business nbn™', 'Cloud PBX', 'Cybersecurity', 'Managed IT',
  'UCaaS', 'SD-WAN', 'Cloud Hosting', 'Zero Trust',
  'Network Design', 'Contact Centre', 'Enterprise Plans', 'Fibre Leased Line',
];

const STEPS = [
  { num: '01', title: 'Consultation',              desc: 'We assess your connectivity and IT infrastructure requirements.' },
  { num: '02', title: 'Solution Design',         desc: 'Our specialists design a technology solution tailored to your organisation.' },
  { num: '03', title: 'Deployment', desc: 'Systems are implemented with minimal disruption to operations.' },
  { num: '04', title: 'Ongoing Support',    desc: 'Our team monitors and manages your infrastructure to keep everything running reliably.' },
];

const clientLogos = [
  { name: 'Atlassian', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/atlassian.svg', isWordmark: true },
  { name: 'Microsoft', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft.svg', isWordmark: true },
  { name: 'Slack', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/slack.svg', isWordmark: true },
  { name: 'Google', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/google.svg', isWordmark: true },
  { name: 'Launch Housing', logo: 'https://logo.clearbit.com/launchhousing.org.au', isWordmark: false },
  { name: 'Akubra', logo: 'https://logo.clearbit.com/akubra.com.au', isWordmark: false },
  { name: 'Novo Shoes', logo: 'https://logo.clearbit.com/novoshoes.com.au', isWordmark: false },
  { name: 'Pacific Steel', logo: 'https://logo.clearbit.com/pacificsteel.com.au', isWordmark: false },
];

const TICKER_ROW1 = [...clientLogos, ...clientLogos];
const TICKER_ROW2 = [
  { name: 'Salesforce', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/salesforce.svg', isWordmark: true },
  { name: 'Zoom', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/zoom.svg', isWordmark: true },
  { name: 'Adobe', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/adobe.svg', isWordmark: true },
  { name: 'HubSpot', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/hubspot.svg', isWordmark: true },
  { name: 'Zendesk', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/zendesk.svg', isWordmark: true },
  { name: 'Intercom', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/intercom.svg', isWordmark: true },
  { name: 'AWS', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws-amplify.svg', isWordmark: true },
  { name: 'ActiveCampaign', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/active-campaign.svg', isWordmark: true },
  // duplicate
  { name: 'Salesforce', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/salesforce.svg', isWordmark: true },
  { name: 'Zoom', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/zoom.svg', isWordmark: true },
  { name: 'Adobe', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/adobe.svg', isWordmark: true },
  { name: 'HubSpot', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/hubspot.svg', isWordmark: true },
  { name: 'Zendesk', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/zendesk.svg', isWordmark: true },
  { name: 'Intercom', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/intercom.svg', isWordmark: true },
  { name: 'AWS', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws-amplify.svg', isWordmark: true },
  { name: 'ActiveCampaign', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/active-campaign.svg', isWordmark: true },
];

/* ---- Icon renderer ---- */
const SolutionIcon = ({ name }: { name: string }) => {
  const props = { size: 22 };
  if (name === 'Wifi')       return <Wifi {...props} />;
  if (name === 'Phone')      return <Phone {...props} />;
  if (name === 'Smartphone') return <Smartphone {...props} />;
  if (name === 'Server')     return <Server {...props} />;
  if (name === 'Shield')     return <Shield {...props} />;
  if (name === 'Cloud')      return <Cloud {...props} />;
  return <Zap {...props} />;
};

/* ---- Logo Ticker Item ---- */
const TickerBadge = ({ label, logo, isWordmark = false }: { label: string; logo?: string; isWordmark?: boolean }) => {
  return (
    <div className="sp-ticker-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {logo && (
        <img 
          src={logo} 
          alt={label} 
          style={{ height: isWordmark ? '18px' : '14px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.8 }} 
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      )}
      {!isWordmark && label}
    </div>
  );
};

/* ================================================================
   MAIN COMPONENT
   ================================================================ */
export default function SaaSHomepage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="saas-page">
      {/* Background dot grid */}
      <div className="sp-noise" aria-hidden />

      {/* Hero Section */}
      <section className="sp-section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="sp-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="text-center">
            <FadeIn>
              <span className="sp-eyebrow">
                <Zap size={12} fill="currentColor" /> Australia's Enterprise Connectivity Leader
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="sp-h1 text-center" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
                Technology Infrastructure That<br />
                <span className="sp-gradient-text">Keeps Your Business Running.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="sp-body-lg" style={{ margin: '0 auto 40px', textAlign: 'center', maxWidth: '640px' }}>
                Managed IT, business connectivity, and modern workplace solutions designed to keep organisations connected, secure, and productive.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="sp-btn-primary">
                  Book a Consultation <ArrowRight size={16} />
                </Link>
                <button className="sp-btn-ghost">
                  Explore Solutions <ChevronRight size={16} />
                </button>
              </div>
            </FadeIn>

            {/* Rating badge */}
            <FadeIn delay={0.4}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center', marginTop: '48px', flexWrap: 'wrap' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '12px',
                  background: 'var(--c9-border)', border: '1px solid var(--c9-border)',
                  borderRadius: '100px', padding: '10px 20px 10px 14px',
                  backdropFilter: 'blur(12px)'
                }}>
                  {/* Avatar stack */}
                  <div style={{ display: 'flex' }}>
                    {['JT','SM','DR','AK','PL'].map((ini, i) => (
                      <div key={ini} style={{
                        width: '28px', height: '28px', borderRadius: '50%',
                        background: `linear-gradient(135deg, hsl(${260 + i * 20}, 70%, 55%), hsl(${280 + i * 20}, 80%, 65%))`,
                        border: '2px solid hsl(var(--background))',
                        marginLeft: i === 0 ? 0 : '-8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 800, color: '#fff', zIndex: 5 - i, position: 'relative', fontSize: '9px'
                      }}>{ini}</div>
                    ))}
                  </div>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={13}
                        color={s <= 4 ? '#FBBF24' : undefined}
                        fill={s <= 4 ? '#FBBF24' : undefined}
                        style={s === 5 ? { color: '#FBBF24', opacity: 0.4 } : {}}
                      />
                    ))}
                  </div>
                  <div style={{ height: '14px', width: '1px', background: 'var(--c9-border)' }} />
                  <div>
                    <span style={{ fontWeight: 800, color: 'hsl(var(--foreground))' }}>4.9</span>
                    <span style={{ color: 'var(--c9-muted)', marginLeft: '4px' }}>/ 5.0</span>
                  </div>
                  <div style={{ color: 'var(--c9-muted)', fontWeight: 500 }}>
                    on <strong style={{ color: 'var(--c9-muted)' }}>Google Reviews</strong>
                  </div>
                </div>
                <div style={{ height: '28px', width: '1px', background: 'var(--c9-border)' }} />
                {['99.99% Uptime', '24/7 AU Support', 'No Lock-In'].map(t => (
                  <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontWeight: 600, color: 'var(--c9-muted)' }}>
                    <CheckCircle size={13} color="#A855F7" /> {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Logo Ticker */}
      <section style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>
        <div className="sp-divider" />
        <div style={{ padding: '40px 0 36px' }}>
          <FadeIn>
            <p style={{ textAlign: 'center', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c9-muted)', marginBottom: '28px' }}>
              Trusted by leading Australian businesses
            </p>
          </FadeIn>
          {/* Row 1 — left */}
          <FadeIn delay={0.2} style={{ width: '100%' }}>
            <div className="sp-ticker-mask">
              <motion.div
                className="sp-ticker-track"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
                style={{ display: 'flex', gap: '0' }}
              >
                {TICKER_ROW1.map((item, i) => (
                  <TickerBadge key={`r1-${i}`} label={item.name} logo={item.logo} isWordmark={item.isWordmark} />
                ))}
              </motion.div>
            </div>
          </FadeIn>
          {/* Row 2 — right */}
          <FadeIn delay={0.3} style={{ width: '100%' }}>
            <div className="sp-ticker-mask" style={{ marginTop: '14px' }}>
              <motion.div
                className="sp-ticker-track"
                animate={{ x: ['-50%', '0%'] }}
                transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                style={{ display: 'flex', gap: '0' }}
              >
                {TICKER_ROW2.map((item, i) => (
                  <div key={`r2-${i}`} className="sp-ticker-item-dim" style={{ display: 'inline-flex', padding: 0, margin: '0 0px' }}>
                    <TickerBadge label={item.name} logo={item.logo} isWordmark={item.isWordmark} />
                  </div>
                ))}
              </motion.div>
            </div>
          </FadeIn>
        </div>
        <div className="sp-divider" />
      </section>

      {/* Stats */}
      <section className="sp-section">
        <div className="sp-container">
          <FadeIn className="text-center" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="sp-eyebrow">By the Numbers</span>
            <h2 className="sp-h2">
              Built for Australian <span className="sp-gradient-text">Enterprise Scale</span>
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {STATS.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.1}>
                <div className="sp-card" style={{ textAlign: 'center', padding: '40px 24px' }}>
                  <div className="sp-stat-num">{s.num}</div>
                  <div className="sp-stat-label">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <UseCasesSection />

      {/* Solutions */}
      <section className="sp-section" style={{ background: 'var(--c9-surface)' }}>
        <div className="sp-container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="sp-eyebrow">Solutions</span>
            <h2 className="sp-h2">
              Infrastructure Solutions<br />
              <span className="sp-gradient-text">Designed for Business</span>
            </h2>
            <p className="sp-body-lg" style={{ margin: '16px auto 0', textAlign: 'center' }}>
              C9 Communications combines IT management, telecommunications infrastructure, and workplace technology to simplify how businesses operate.
            </p>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {SOLUTIONS.map((sol, i) => (
              <FadeIn key={sol.title} delay={i * 0.08}>
                <div className="sp-card" style={{ height: '100%' }}>
                  <div className="sp-card-icon"><SolutionIcon name={sol.iconName} /></div>
                  <div className="sp-card-title">{sol.title}</div>
                  <p className="sp-card-body" style={{ marginBottom: '20px' }}>{sol.desc}</p>
                  <span style={{ fontWeight: 700, color: '#A855F7', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Learn more <ArrowRight size={13} />
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Marquee */}
      <section className="sp-section-sm">
        <FadeIn delay={0.1}>
          <div className="sp-marquee-wrapper">
            <div className="sp-marquee-track">
              {[...MARQUEE_LABELS, ...MARQUEE_LABELS].map((label, i) => (
                <div key={i} className="sp-marquee-item">
                  <Zap size={13} /> {label}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Why C9 */}
      <section className="sp-section">
        <div className="sp-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <FadeIn direction="left">
              <span className="sp-eyebrow">Why C9</span>
              <h2 className="sp-h2">
                A Reliable<br />
                <span className="sp-gradient-text">Technology Partner.</span>
              </h2>
              <p className="sp-body-lg" style={{ margin: '20px 0 32px' }}>
                We integrate IT management, telecommunications infrastructure, and workplace technology into one connected environment, improving reliability and supporting modern ways of working.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {BENEFITS.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--c9-muted)', fontWeight: 500 }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(124,58,237,0.25)', border: '1px solid var(--c9-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle size={11} color="#A855F7" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="sp-btn-primary" style={{ display: 'inline-flex' }}>
                Talk to an Expert <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div style={{ position: 'relative' }}>
                <div className="sp-card" style={{ padding: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid var(--c9-border)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Activity size={18} color="#fff" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'hsl(var(--foreground))' }}>Network Status</div>
                      <div style={{ color: '#A855F7' }}>● All systems operational</div>
                    </div>
                    <div style={{ marginLeft: 'auto', color: 'var(--c9-muted)' }}>Live</div>
                  </div>
                  {[
                    { label: 'Uptime (30d)',     val: '99.99%', color: '#A855F7' },
                    { label: 'Avg latency',      val: '4.2 ms', color: '#86EFAC' },
                    { label: 'Data throughput',  val: '10 Gbps', color: '#7DD3FC' },
                    { label: 'Active sites',     val: '247',    color: '#FCA5A5' },
                  ].map(m => (
                    <div key={m.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', marginBottom: '14px', borderBottom: '1px solid var(--c9-surface)' }}>
                      <span style={{ color: 'var(--c9-muted)', fontWeight: 500 }}>{m.label}</span>
                      <span style={{ fontWeight: 700, color: m.color }}>{m.val}</span>
                    </div>
                  ))}
                </div>
                {/* Floating notification */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  style={{ position: 'absolute', top: '-20px', right: '-24px', background: 'rgba(124,58,237,0.95)', border: '1px solid var(--c9-border)', borderRadius: '12px', padding: '12px 18px', backdropFilter: 'blur(20px)', whiteSpace: 'nowrap' }}
                >
                  <div style={{ fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Shield size={12} color="#fff" /> Threat blocked <span style={{ color: '#86EFAC' }}>just now</span>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="sp-section" style={{ background: 'var(--c9-surface)' }}>
        <div className="sp-container">
          <FadeIn style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="sp-eyebrow">Implementation Process</span>
            <h2 className="sp-h2">
              Simple and Structured <span className="sp-gradient-text">Implementation</span>
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="sp-card" style={{ height: '100%' }}>
                  <div className="sp-step-num">{step.num}</div>
                  <div className="sp-card-title" style={{ marginBottom: '12px' }}>{step.title}</div>
                  <p className="sp-card-body">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="sp-section" style={{ overflow: 'hidden' }}>
        <div className="sp-container">
          <FadeIn style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className="sp-eyebrow">Client Stories</span>
            <h2 className="sp-h2">
              Trusted by <span className="sp-gradient-text">Australian Enterprises</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <TestimonialMarquee />
          </FadeIn>
        </div>
      </section>

      <FAQSection />

      {/* CTA */}
      <section className="sp-section">
        <div className="sp-container">
          <FadeIn>
            <div className="sp-cta-block">
              <span className="sp-eyebrow" style={{ margin: '0 auto 24px' }}>Upgrade Your Infrastructure</span>
              <h2 className="sp-h2" style={{ marginBottom: '16px' }}>
                Ready to Upgrade Your<br />
                <span className="sp-gradient-text">Business Technology?</span>
              </h2>
              <p className="sp-body-lg" style={{ margin: '0 auto 40px', textAlign: 'center', maxWidth: '520px' }}>
                Speak with our specialists to design the right connectivity, IT, and workplace technology solution for your organisation.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="sp-btn-primary" style={{ padding: '15px 32px' }}>
                  Book a Call with an Expert <ArrowRight size={17} />
                </Link>
                <a href="tel:1800000299" className="sp-btn-ghost" style={{ padding: '15px 32px' }}>
                  Call 1800 000 299
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div style={{ height: '80px' }} />
    </div>
  );
}
