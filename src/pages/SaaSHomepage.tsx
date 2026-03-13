import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Phone, Activity, Smartphone,
  Server, Zap, CheckCircle, Star,
  ChevronRight, Wifi, Cloud,
} from 'lucide-react';

import { useTheme } from '../components/theme-provider';
import { TestimonialMarquee } from '../components/landing/TestimonialMarquee';
import './SaaSHomepage.css';
import { FadeIn } from '../components/shared/FadeIn';

/* ---- Static data (NO JSX at module level) ---- */
const SOLUTIONS = [
  { iconName: 'Wifi',        title: 'Business NBN & Fibre',        desc: 'Enterprise-grade internet with guaranteed SLAs and failover redundancy built in.' },
  { iconName: 'Phone',       title: 'Cloud Phone System',          desc: 'Replace your PBX with a fully managed cloud voice platform that scales with you.' },
  { iconName: 'Smartphone',  title: 'Unified Communications',      desc: 'Voice, video, chat and collaboration — all in one integrated workspace.' },
  { iconName: 'Server',      title: 'Managed IT Services',         desc: 'Proactive monitoring, patching and support for your entire IT infrastructure.' },
  { iconName: 'Shield',      title: 'Cybersecurity & Compliance',  desc: 'Zero-trust framework, endpoint protection and compliance reporting at scale.' },
  { iconName: 'Cloud',       title: 'Cloud Infrastructure',        desc: 'Hybrid and multi-cloud environments designed, deployed, and managed for you.' },
];

const STATS = [
  { num: '99.99%', label: 'Network Uptime SLA' },
  { num: '24/7',   label: 'Australian Support' },
  { num: '500+',   label: 'Business Clients' },
  { num: '40%',    label: 'Avg. Cost Reduction' },
];

const BENEFITS = [
  'Single provider for voice, data & IT',
  'Dedicated account management',
  'Enterprise-grade Australian network',
  'No lock-in contracts available',
  'On-site technicians nationwide',
  'Real-time dashboard and reporting',
];

const MARQUEE_LABELS = [
  'Business NBN', 'Cloud PBX', 'Cybersecurity', 'Managed IT',
  'UCaaS', 'SD-WAN', 'Cloud Hosting', 'Zero Trust',
  'Network Design', 'Contact Centre', 'Enterprise Plans', 'Fibre Leased Line',
];

const STEPS = [
  { num: '01', title: 'Free Audit',              desc: 'We analyze your current network, bills, and pain points to identify quick wins and long-term improvements.' },
  { num: '02', title: 'Solution Design',         desc: 'Our engineers design a bespoke, high-availability architecture that aligns with your specific business goals.' },
  { num: '03', title: 'Zero-Downtime Migration', desc: 'A dedicated project manager handles the cutover outside business hours, ensuring zero disruption.' },
  { num: '04', title: 'Proactive Management',    desc: '24/7 monitoring and an all-Australian support team just a phone call away.' },
];

const TICKER_ROW1 = [
  'Telstra', 'Microsoft', 'Optus', 'NBN Co', 'Cisco', 'ISO 27001', 'Salesforce', 'AWS',
  'Telstra', 'Microsoft', 'Optus', 'NBN Co', 'Cisco', 'ISO 27001', 'Salesforce', 'AWS',
];

const TICKER_ROW2 = [
  'Avaya', 'RingCentral', 'Fortinet', '8x8', 'Nutanix', 'Poly', 'Juniper', 'Palo Alto',
  'Avaya', 'RingCentral', 'Fortinet', '8x8', 'Nutanix', 'Poly', 'Juniper', 'Palo Alto',
];

/* ---- Icon renderer (no module-level JSX) ---- */
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

/* ---- Theme-Aware Logo Ticker Item ---- */
const TickerBadge = ({ label }: { label: string }) => {
  const { theme } = useTheme();
  return (
    <div className="sp-ticker-item" style={{ opacity: theme === 'light' ? 0.65 : 1 }}>
      {label}
    </div>
  );
};

/* ================================================================
   MAIN COMPONENT
   ================================================================ */
export const SaaSHomepage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="saas-page">
      {/* Background dot grid */}
      <div className="sp-noise" aria-hidden />

      {/* ══════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════ */}
      <section className="sp-section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="sp-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="text-center">
            <FadeIn>
              <span className="sp-eyebrow">
                <Zap size={12} fill="currentColor" /> Australia's Enterprise Connectivity Leader
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="sp-h1">
                Business Internet, Voice<br />
                &amp; IT —{' '}
                <span className="sp-gradient-text">One Provider.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="sp-body-lg" style={{ margin: '0 auto 40px', textAlign: 'center', maxWidth: '600px' }}>
                C9 Communications delivers enterprise-grade connectivity, cloud communications, and managed IT under one roof — with 24/7 Australian support.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="sp-btn-primary">
                  Book a Free Audit <ArrowRight size={16} />
                </Link>
                <button className="sp-btn-ghost">
                  Watch Overview <ChevronRight size={16} />
                </button>
              </div>
            </FadeIn>

            {/* ── Rating badge ── */}
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
                    from <strong style={{ color: 'var(--c9-muted)' }}>247 reviews</strong>
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

      {/* ══════════════════════════════
          SECTION 2 — LOGO TICKER
      ══════════════════════════════ */}
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
                {TICKER_ROW1.map((name, i) => (
                  <TickerBadge key={`r1-${i}`} label={name} />
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
                {TICKER_ROW2.map((name, i) => (
                  <div key={`r2-${i}`} className="sp-ticker-item-dim" style={{ display: 'inline-flex', padding: 0, margin: '0 0px' }}>
                    <TickerBadge label={name} />
                  </div>
                ))}
              </motion.div>
            </div>
          </FadeIn>
        </div>
        <div className="sp-divider" />
      </section>

      {/* ══════════════════════════════
          SECTION 3 — STATS
      ══════════════════════════════ */}
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

      {/* ══════════════════════════════
          SECTION 4 — SOLUTIONS
      ══════════════════════════════ */}
      <section className="sp-section" style={{ background: 'var(--c9-surface)' }}>
        <div className="sp-container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="sp-eyebrow">Core Solutions</span>
            <h2 className="sp-h2">
              Everything Your Business Needs,<br />
              <span className="sp-gradient-text">Under One Roof</span>
            </h2>
            <p className="sp-body-lg" style={{ margin: '16px auto 0', textAlign: 'center' }}>
              Stop juggling multiple providers. We deliver connectivity, voice, security and managed IT as one seamless, accountable service.
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

      {/* ══════════════════════════════
          SECTION 5 — CAPABILITY MARQUEE
      ══════════════════════════════ */}
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

      {/* ══════════════════════════════
          SECTION 6 — WHY C9
      ══════════════════════════════ */}
      <section className="sp-section">
        <div className="sp-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2col" style={{ gap: '80px' }}>
            <FadeIn direction="left">
              <span className="sp-eyebrow">Why C9</span>
              <h2 className="sp-h2">
                One Call Fixes<br />
                <span className="sp-gradient-text">Everything.</span>
              </h2>
              <p className="sp-body-lg" style={{ margin: '20px 0 32px' }}>
                We're not a reseller. We own and operate our own infrastructure, meaning faster resolutions, transparent pricing, and real accountability.
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
              <Link to="/contact" className="sp-btn-primary" style={{ display: 'inline-flex' }}>
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

      {/* ══════════════════════════════
          SECTION 7 — HOW IT WORKS
      ══════════════════════════════ */}
      <section className="sp-section" style={{ background: 'var(--c9-surface)' }}>
        <div className="sp-container">
          <FadeIn style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="sp-eyebrow">Our Process</span>
            <h2 className="sp-h2">
              From Quote to <span className="sp-gradient-text">Go-Live in Days</span>
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

      {/* ══════════════════════════════
          SECTION 8 — TESTIMONIALS
      ══════════════════════════════ */}
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

      {/* ══════════════════════════════
          SECTION 9 — CTA
      ══════════════════════════════ */}
      <section className="sp-section">
        <div className="sp-container">
          <FadeIn>
            <div className="sp-cta-block">
              <span className="sp-eyebrow" style={{ margin: '0 auto 24px' }}>Get Started</span>
              <h2 className="sp-h2" style={{ marginBottom: '16px' }}>
                Ready to Upgrade Your<br />
                <span className="sp-gradient-text">Business Infrastructure?</span>
              </h2>
              <p className="sp-body-lg" style={{ margin: '0 auto 40px', textAlign: 'center', maxWidth: '520px' }}>
                Book a free, no-obligation audit. Our engineers will review your existing setup and present a better path forward.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="sp-btn-primary" style={{ padding: '15px 32px' }}>
                  Book Your Free Audit <ArrowRight size={17} />
                </Link>
                <a href="tel:1800000000" className="sp-btn-ghost" style={{ padding: '15px 32px' }}>
                  Call 1800 C9 TECH
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div style={{ height: '80px' }} />
    </div>
  );
};
