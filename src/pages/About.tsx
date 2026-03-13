import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Users, Target, ShieldCheck, Globe2, Briefcase } from 'lucide-react';

/* ---- FadeIn ---- */
const FadeIn = ({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: React.CSSProperties }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-8%' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export const About = () => {
  return (
    <div style={{ background: 'hsl(var(--background))', color: 'hsl(var(--foreground))', paddingTop: '72px', minHeight: '100vh' }}>
      
      {/* ── HERO ── */}
      <section style={{ padding: '100px 0 80px', textAlign: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--c9-border)', border: '1px solid var(--c9-border)',
              color: '#C4B5FD', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px',
            }}>
              Our Mission
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontWeight: 900, letterSpacing: '-0.04em', color: 'hsl(var(--foreground))',
              marginBottom: '20px', lineHeight: 1.0,
            }}>
              More than a telco.<br />
              <span style={{
                background: 'linear-gradient(135deg, #C4B5FD 0%, #A855F7 60%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>A technology partner.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ lineHeight: 1.7, color: 'var(--c9-muted)', maxWidth: '580px', margin: '0 auto' }}>
              We're on a mission to simplify enterprise connectivity for Australian businesses through innovation and human-first support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: '80px 0 120px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { icon: <Target size={24} />, title: "Precision", desc: "We design networks with surgical precision, ensuring every byte is optimised for your business." },
              { icon: <Users size={24} />, title: "Human First", desc: "No overseas call centres. When you call C9, you speak to an Australian engineer who actually knows your site." },
              { icon: <ShieldCheck size={24} />, title: "Security Obsessed", desc: "In an era of evolving threats, security isn't an add-on — it's baked into every connection we deliver." }
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  background: 'var(--c9-surface)', border: '1px solid var(--c9-border)',
                  borderRadius: '24px', padding: '40px', height: '100%'
                }}>
                  <div style={{ color: '#A855F7', marginBottom: '24px' }}>{v.icon}</div>
                  <h3 style={{ fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '16px' }}>{v.title}</h3>
                  <p style={{ lineHeight: 1.6, color: 'var(--c9-muted)' }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section style={{ padding: '100px 0', background: 'var(--c9-surface)', borderTop: '1px solid var(--c9-border)', borderBottom: '1px solid var(--c9-border)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="about-stats-grid">
            {[
              { label: 'Founded', val: '2015' },
              { label: 'Active Users', val: '50k+' },
              { label: 'Uptime', val: '99.99%' },
              { label: 'Locations', val: 'AU Wide' }
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div style={{ fontWeight: 900, color: 'hsl(var(--foreground))', marginBottom: '8px' }}>{s.val}</div>
                <div style={{ fontWeight: 700, color: '#A855F7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM / STORY ── */}
      <section style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="about-team-grid">
            <FadeIn>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', inset: '-20px', background: 'linear-gradient(135deg, #7C3AED, transparent)', opacity: 0.1, borderRadius: '32px', filter: 'blur(20px)' }} />
                <div style={{ background: 'var(--c9-surface)', border: '1px solid var(--c9-border)', borderRadius: '24px', padding: '48px', position: 'relative' }}>
                  <Building2 size={48} color="#A855F7" style={{ marginBottom: '32px' }} />
                  <h3 style={{ fontWeight: 900, color: 'hsl(var(--foreground))', marginBottom: '24px' }}>Born in Sydney</h3>
                  <p style={{ lineHeight: 1.8, color: 'var(--c9-muted)', marginBottom: '24px' }}>
                    C9 Communications started with a simple observation: mid-market Australian businesses was being underserved by the major telcos.
                  </p>
                  <p style={{ lineHeight: 1.8, color: 'var(--c9-muted)' }}>
                    We built a telco that prioritises engineering over marketing, ensuring that when you connect with C9, you're getting the most reliable tech in the country.
                  </p>
                </div>
              </div>
            </FadeIn>
            <div>
              <FadeIn delay={0.2}>
                <h2 style={{ fontWeight: 900, color: 'hsl(var(--foreground))', marginBottom: '32px' }}>A team of Australian experts.</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {[
                    { icon: <Globe2 size={20} />, title: "AU Wide Core", text: "We own and operate our own core network infrastructure across all AU capitals." },
                    { icon: <Briefcase size={20} />, title: "Level 3 Support", text: "Your first point of contact is a senior network engineer, not a script reader." }
                  ].map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: '20px' }}>
                      <div style={{ color: '#A855F7', marginTop: '4px' }}>{f.icon}</div>
                      <div>
                        <h4 style={{ color: 'hsl(var(--foreground))', fontWeight: 700, marginBottom: '6px' }}>{f.title}</h4>
                        <p style={{ color: 'var(--c9-muted)', lineHeight: 1.6 }}>{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
