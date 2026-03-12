import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { Stethoscope, Briefcase, GraduationCap, ShoppingBag, Truck, Layout, ArrowRight } from 'lucide-react';

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

const INDUSTRIES_DATA = [
  {
    title: "Healthcare",
    icon: <Stethoscope size={24} />,
    desc: "HIPAA-compliant voice and secure data networks for clinics and medical centres.",
    id: "health"
  },
  {
    title: "Professional Services",
    icon: <Briefcase size={24} />,
    desc: "High-performance connectivity for legal, accounting, and financial firms.",
    id: "pro"
  },
  {
    title: "Retail & E-commerce",
    icon: <ShoppingBag size={24} />,
    desc: "Reliable POS connectivity and cloud voice for multi-site retail groups.",
    id: "retail"
  },
  {
    title: "Education",
    icon: <GraduationCap size={24} />,
    desc: "Managed campuses networks with advanced security and content filtering.",
    id: "edu"
  },
  {
    title: "Logistics",
    icon: <Truck size={24} />,
    desc: "Real-time communication and robust internet for warehouses and transport hubs.",
    id: "logistics"
  },
  {
    title: "Hospitality",
    icon: <Layout size={24} />,
    desc: "Guest WiFi, cloud PBX, and secure networks for hotels and restaurants.",
    id: "hosp"
  }
];

export const Industries = () => {
  return (
    <div style={{ background: '#0A0010', color: '#F8F5FF', fontFamily: "'Plus Jakarta Sans', sans-serif", paddingTop: '72px', minHeight: '100vh' }}>
      
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
              background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.3)',
              color: '#C4B5FD', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px',
            }}>
              Vertical Expertise
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(40px,6vw,72px)',
              fontWeight: 900, letterSpacing: '-0.04em', color: '#fff',
              marginBottom: '20px', lineHeight: 1.0,
            }}>
              Technology designed<br />
              <span style={{
                background: 'linear-gradient(135deg, #C4B5FD 0%, #A855F7 60%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>for your sector.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'rgba(248,245,255,0.55)', maxWidth: '540px', margin: '0 auto' }}>
              We've developed tailored communication stacks for Australia's most demanding industries.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ── */}
      <section style={{ padding: '80px 0 120px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {INDUSTRIES_DATA.map((ind, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(167,139,250,0.15)',
                  borderRadius: '24px', padding: '40px', height: '100%',
                  display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(167,139,250,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.15)'; }}
                >
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '14px',
                    background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(167,139,250,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#A855F7', marginBottom: '24px'
                  }}>
                    {ind.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                    {ind.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'rgba(248,245,255,0.5)', marginBottom: '32px' }}>
                    {ind.desc}
                  </p>
                  <button style={{
                    marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'none', border: 'none', color: '#C4B5FD',
                    fontSize: '14px', fontWeight: 700, cursor: 'pointer', padding: 0
                  }}>
                    Explore {ind.title} Solutions <ArrowRight size={16} />
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY BRIEF ── */}
      <section style={{ padding: '100px 0', background: 'rgba(255,255,255,0.015)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <FadeIn>
              <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '24px' }}>Proven in the field.</h2>
              <p style={{ fontSize: '18px', color: 'rgba(248,245,255,0.6)', lineHeight: 1.7 }}>
                See how we're helping Australian enterprises transform their communication infrastructure with C9 technology.
              </p>
              <div style={{ marginTop: '40px' }}>
                <button style={{ padding: '14px 28px', borderRadius: '100px', background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.3)', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>
                  View All Case Studies →
                </button>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(167,139,250,0.15)', borderRadius: '24px', padding: '40px' }}>
                 <div style={{ display: 'flex', gap: '4px', color: '#F59E0B', marginBottom: '20px' }}>★★★★★</div>
                 <p style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: 1.7, color: '#fff', marginBottom: '24px' }}>
                   "C9 was the only telco that understood our HIPAA compliance requirements for healthcare. Their setup was flawless and our team loves the new handsets."
                 </p>
                 <div style={{ fontWeight: 800, color: '#C4B5FD' }}>Acacia Health Group</div>
                 <div style={{ fontSize: '13px', color: 'rgba(248,245,255,0.4)', marginTop: '4px' }}>Medical Practice Management</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};
