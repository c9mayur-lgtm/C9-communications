import React, { useRef, useEffect, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Globe, Phone, Activity, Smartphone,
  Building2, Server, Zap, CheckCircle, Star,
  ChevronRight, Wifi, Cloud, Cpu, Lock
} from 'lucide-react';
import './SaaSHomepage.css';

/* ---- Reusable FadeIn wrapper ---- */
const FadeIn = ({
  children, delay = 0, className = '', direction = 'up', style
}: {
  children: ReactNode; delay?: number; className?: string; direction?: 'up' | 'left' | 'right' | 'none'; style?: React.CSSProperties;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-8%' });
  const initial =
    direction === 'up' ? { opacity: 0, y: 32 } :
    direction === 'left' ? { opacity: 0, x: -32 } :
    direction === 'right' ? { opacity: 0, x: 32 } :
    { opacity: 0 };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/* ---- Data ---- */
const SOLUTIONS = [
  { icon: <Wifi size={22} />, title: 'Business NBN & Fibre', desc: 'Enterprise-grade internet with guaranteed SLAs and failover redundancy built in.' },
  { icon: <Phone size={22} />, title: 'Cloud Phone System', desc: 'Replace your PBX with a fully managed cloud voice platform that scales with you.' },
  { icon: <Smartphone size={22} />, title: 'Unified Communications', desc: 'Voice, video, chat and collaboration — all in one integrated workspace.' },
  { icon: <Server size={22} />, title: 'Managed IT Services', desc: 'Proactive monitoring, patching and support for your entire IT infrastructure.' },
  { icon: <Shield size={22} />, title: 'Cybersecurity & Compliance', desc: 'Zero-trust framework, endpoint protection and compliance reporting at scale.' },
  { icon: <Cloud size={22} />, title: 'Cloud Infrastructure', desc: 'Hybrid and multi-cloud environments designed, deployed, and managed for you.' },
];

const STATS = [
  { num: '99.99%', label: 'Network Uptime SLA' },
  { num: '24/7', label: 'Australian Support' },
  { num: '500+', label: 'Business Clients' },
  { num: '40%', label: 'Avg. Cost Reduction' },
];

const BENEFITS = [
  'Single provider for voice, data & IT',
  'Dedicated account management',
  'Enterprise-grade Australian network',
  'No lock-in contracts available',
  'On-site technicians nationwide',
  'Real-time dashboard and reporting',
];

const TESTIMONIALS = [
  {
    text: '"C9 Communications transformed our multi-site connectivity. We went from constant outages to a rock-solid network within weeks."',
    name: 'James T.',
    role: 'IT Director, National Retailer',
    initials: 'JT',
  },
  {
    text: '"Their cloud phone system saved us 35% on telecoms costs. The migration was seamless — they handled everything."',
    name: 'Sarah M.',
    role: 'COO, Financial Services Firm',
    initials: 'SM',
  },
  {
    text: '"Finally a telco that understands enterprise. The support team is responsive, knowledgeable, and genuinely invested in our success."',
    name: 'Daniel R.',
    role: 'Head of Operations, Logistics Co.',
    initials: 'DR',
  },
];

const MARQUEE_ITEMS = [
  { icon: <Globe size={14} />, label: 'Business NBN' },
  { icon: <Phone size={14} />, label: 'Cloud PBX' },
  { icon: <Shield size={14} />, label: 'Cybersecurity' },
  { icon: <Server size={14} />, label: 'Managed IT' },
  { icon: <Smartphone size={14} />, label: 'UCaaS' },
  { icon: <Wifi size={14} />, label: 'SD-WAN' },
  { icon: <Cloud size={14} />, label: 'Cloud Hosting' },
  { icon: <Lock size={14} />, label: 'Zero Trust' },
  { icon: <Cpu size={14} />, label: 'Network Design' },
  { icon: <Activity size={14} />, label: 'Contact Centre' },
  { icon: <Building2 size={14} />, label: 'Enterprise Plans' },
  { icon: <Zap size={14} />, label: 'Fibre Leased Line' },
];

const STEPS = [
  { num: '01', title: 'Free Audit', desc: 'We map your existing telco & IT environment — no obligation, no jargon.' },
  { num: '02', title: 'Custom Blueprint', desc: 'Our engineers design a solution precisely calibrated to your scale and budget.' },
  { num: '03', title: 'Zero-Disruption Migration', desc: 'We move you across with a dedicated project manager and real-time updates.' },
  { num: '04', title: 'Always-On Support', desc: 'Australian-based team on call 24/7 with proactive monitoring from day one.' },
];

/* ---- Component ---- */
export const SaaSHomepage = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="saas-page">
      {/* Background dot grid */}
      <div className="sp-noise" aria-hidden />

      {/* ═══════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════ */}
      <section className="sp-section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="sp-glow-hero" aria-hidden />

        <div className="sp-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <motion.div style={{ opacity: heroOpacity }} className="text-center">
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

            {/* ── RATING BADGE ── */}
            <FadeIn delay={0.4}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                justifyContent: 'center', marginTop: '48px', flexWrap: 'wrap'
              }}>
                {/* Stars + Score */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '12px',
                  background: 'var(--c9-border)',
                  border: '1px solid var(--c9-border)',
                  borderRadius: '100px', padding: '10px 20px 10px 14px',
                  backdropFilter: 'blur(12px)'
                }}>
                  {/* Avatar stack */}
                  <div style={{ display: 'flex' }}>
                    {['JT','SM','DR','AK','PL'].map((ini, i) => (
                      <div key={ini} style={{
                        width: '28px', height: '28px', borderRadius: '50%',
                        background: `linear-gradient(135deg, hsl(${260 + i*20}, 70%, 55%), hsl(${280 + i*20}, 80%, 65%))`,
                        border: '2px solid hsl(var(--background))',
                        marginLeft: i === 0 ? 0 : '-8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 800, color: '#fff',
                        zIndex: 5 - i, position: 'relative',
                        fontSize: '9px'
                      }}>{ini}</div>
                    ))}
                  </div>
                  {/* Stars row */}
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

                {/* Separator */}
                <div style={{ height: '28px', width: '1px', background: 'var(--c9-border)' }} />

                {/* Trust pills */}
                {['99.99% Uptime', '24/7 AU Support', 'No Lock-In'].map((t) => (
                  <span key={t} style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    fontWeight: 600,
                    color: 'var(--c9-muted)'
                  }}>
                    <CheckCircle size={13} color="#A855F7" /> {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 2 — ANIMATED LOGO TICKER
      ═══════════════════════════════════ */}
      <section style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>
        <div className="sp-divider" />
        <div style={{ padding: '40px 0 36px' }}>
          <p style={{
            textAlign: 'center', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--c9-muted)', marginBottom: '28px'
          }}>
            Trusted by leading Australian businesses
          </p>

          {/* TICKER ROW 1 — scrolls left */}
          <div className="sp-ticker-mask">
            <motion.div
              className="sp-ticker-track"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
              style={{ display: 'flex', gap: '0' }}
            >
              {[
                'Telstra Wholesale', 'Microsoft Teams', 'Optus Business', 'NBN Co Partner',
                'Cisco Certified', 'ISO 27001', 'Salesforce Partner', 'AWS Advanced',
                'Telstra Wholesale', 'Microsoft Teams', 'Optus Business', 'NBN Co Partner',
                'Cisco Certified', 'ISO 27001', 'Salesforce Partner', 'AWS Advanced',
              ].map((logo, i) => (
                <div key={i} className="sp-ticker-item">
                  <span>{logo}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* TICKER ROW 2 — scrolls right (reverse) */}
          <div className="sp-ticker-mask" style={{ marginTop: '14px' }}>
            <motion.div
              className="sp-ticker-track"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
              style={{ display: 'flex', gap: '0' }}
            >
              {[
                'Avaya Certified', 'RingCentral', 'Fortinet Partner', '8x8 Connect',
                'Nutanix Ready', 'Poly Partner', 'Juniper Networks', 'Palo Alto Networks',
                'Avaya Certified', 'RingCentral', 'Fortinet Partner', '8x8 Connect',
                'Nutanix Ready', 'Poly Partner', 'Juniper Networks', 'Palo Alto Networks',
              ].map((logo, i) => (
                <div key={i} className="sp-ticker-item sp-ticker-item-dim">
                  <span>{logo}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="sp-divider" />
      </section>

      {/* ═══════════════════════════════════
          SECTION 3 — STATS
      ═══════════════════════════════════ */}
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
              <FadeIn key={i} delay={i * 0.1}>
                <div className="sp-card" style={{ textAlign: 'center', padding: '40px 24px' }}>
                  <div className="sp-stat-num">{s.num}</div>
                  <div className="sp-stat-label">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 4 — SOLUTIONS BENTO GRID
      ═══════════════════════════════════ */}
      <section className="sp-section" style={{ background: 'var(--c9-surface)' }}>
        <div className="sp-glow-left" />
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
              <FadeIn key={i} delay={i * 0.08}>
                <div className="sp-card" style={{ height: '100%' }}>
                  <div className="sp-card-icon">{sol.icon}</div>
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

      {/* ═══════════════════════════════════
          SECTION 5 — SCROLLING CAPABILITIES
      ═══════════════════════════════════ */}
      <section className="sp-section-sm">
        <div className="sp-marquee-wrapper">
          <div className="sp-marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <div key={i} className="sp-marquee-item">
                {item.icon} {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 6 — WHY C9 (Split)
      ═══════════════════════════════════ */}
      <section className="sp-section">
        <div className="sp-glow-right" />
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
                {BENEFITS.map((b, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--c9-muted)', fontWeight: 500 }}>
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
              {/* Feature showcase card */}
              <div style={{ position: 'relative' }}>
                {/* Main card */}
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

                  {/* Mini metrics */}
                  {[
                    { label: 'Uptime (30d)', val: '99.99%', color: '#A855F7' },
                    { label: 'Avg latency', val: '4.2 ms', color: '#86EFAC' },
                    { label: 'Data throughput', val: '10 Gbps', color: '#7DD3FC' },
                    { label: 'Active sites', val: '247', color: '#FCA5A5' },
                  ].map((m) => (
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
                  <div style={{ fontWeight: 700, color: 'hsl(var(--foreground))', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Shield size={12} /> Threat blocked <span style={{ color: '#86EFAC' }}>just now</span>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 7 — HOW IT WORKS
      ═══════════════════════════════════ */}
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
              <FadeIn key={i} delay={i * 0.1}>
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

      {/* ═══════════════════════════════════
          SECTION 8 — TESTIMONIALS
      ═══════════════════════════════════ */}
      <section className="sp-section">
        <div className="sp-container">
          <FadeIn style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="sp-eyebrow">Client Stories</span>
            <h2 className="sp-h2">
              Trusted by <span className="sp-gradient-text">Australian Enterprises</span>
            </h2>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="sp-testimonial">
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {Array(5).fill(0).map((_, j) => (
                      <Star key={j} size={14} color="#A855F7" fill="#A855F7" />
                    ))}
                  </div>
                  <p className="sp-testimonial-text">{t.text}</p>
                  <div className="sp-testimonial-author">
                    <div className="sp-avatar">{t.initials}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'hsl(var(--foreground))' }}>{t.name}</div>
                      <div style={{ color: 'var(--c9-muted)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 9 — CTA
      ═══════════════════════════════════ */}
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

      {/* Footer spacer */}
      <div style={{ height: '80px' }} />
    </div>
  );
};
