import { Link } from 'react-router-dom';
import { 
  Wifi, Phone, Server, Shield, Cloud, Smartphone, ArrowRight, CheckCircle
} from 'lucide-react';
import { FadeIn } from '../components/shared/FadeIn';


const SOLUTIONS_DATA = [
  {
    title: "Business NBN & Fibre",
    icon: <Wifi size={24} />,
    desc: "Enterprise-grade connectivity with 99.9% uptime and local Australian support.",
    features: ["Dedicated Fibre", "High-Speed NBN", "4G/5G Backup", "Managed Router"]
  },
  {
    title: "Cloud Phone System",
    icon: <Phone size={24} />,
    desc: "The C9X platform: a complete PBX replacement with 80+ enterprise features.",
    features: ["Unified Comms", "Softphone Apps", "CRM Integration", "Call Analytics"]
  },
  {
    title: "Cybersecurity",
    icon: <Shield size={24} />,
    desc: "Multi-layered security solutions to protect your business from evolving threats.",
    features: ["Endpoint Protection", "Email Security", "Firewall Mgmt", "Security Audit"]
  },
  {
    title: "Managed IT Services",
    icon: <Server size={24} />,
    desc: "Proactive management of your entire IT infrastructure by Australian experts.",
    features: ["24/7 Monitoring", "Unlimited Support", "Backup Solutions", "Asset Mgmt"]
  },
  {
    title: "Cloud Infrastructure",
    icon: <Cloud size={24} />,
    desc: "Scalable cloud hosting and storage solutions tailored for business needs.",
    features: ["Public/Private Cloud", "Hybrid Setup", "Azure/AWS Mgmt", "Disaster Recovery"]
  },
  {
    title: "Mobile Business",
    icon: <Smartphone size={24} />,
    desc: "Business-exclusive mobile plans on Australia's best 5G/4G networks.",
    features: ["Shared Data Pools", "5G Included", "No Lock-in", "Team Portal"]
  }
];

export const Solutions = () => {
  return (
    <div style={{ background: 'hsl(var(--background))', color: 'hsl(var(--foreground))', paddingTop: '72px', minHeight: '100vh' }}>
      
      {/* ── HERO ── */}
      <section style={{ padding: '100px 0 80px', textAlign: 'center', position: 'relative' }}>

        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--c9-border)', border: '1px solid var(--c9-border)',
              color: '#C4B5FD', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px',
            }}>
              Our Expertise
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontWeight: 900, letterSpacing: '-0.04em', color: 'hsl(var(--foreground))',
              marginBottom: '20px', lineHeight: 1.0,
            }}>
              Integrated solutions for<br />
              <span style={{
                background: 'linear-gradient(135deg, #C4B5FD 0%, #A855F7 60%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>the digital enterprise.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ lineHeight: 1.7, color: 'var(--c9-muted)', maxWidth: '540px', margin: '0 auto' }}>
              We provide a single, unified environment for your internet, voice, and IT infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section style={{ padding: '80px 0 120px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="grid-auto-small" style={{ gap: '24px' }}>
            {SOLUTIONS_DATA.map((sol, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  background: 'var(--c9-surface)', border: '1px solid var(--c9-border)',
                  borderRadius: '24px', padding: '40px', height: '100%',
                  display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--c9-border)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--c9-border)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--c9-surface)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--c9-border)'; }}
                >
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '14px',
                    background: 'rgba(124,58,237,0.15)', border: '1px solid var(--c9-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#A855F7', marginBottom: '24px'
                  }}>
                    {sol.icon}
                  </div>
                  <h3 style={{ fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '16px' }}>
                    {sol.title}
                  </h3>
                  <p style={{ lineHeight: 1.6, color: 'var(--c9-muted)', marginBottom: '32px' }}>
                    {sol.desc}
                  </p>
                  
                  <div style={{ marginTop: 'auto' }}>
                    <div className="grid-2col" style={{ gap: '12px', marginBottom: '32px' }}>
                      {sol.features.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--c9-muted)', fontWeight: 600 }}>
                          <CheckCircle size={14} color="#7C3AED" /> {f}
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      background: 'none', border: 'none', color: '#C4B5FD',
                      fontWeight: 700, cursor: 'pointer', padding: 0,
                      textDecoration: 'none'
                    }}>
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '0 0 120px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <FadeIn>
            <div style={{
              background: 'linear-gradient(135deg, rgba(107,33,168,0.4), rgba(124,58,237,0.2))',
              border: '1px solid var(--c9-border)', borderRadius: '32px', padding: '80px 40px',
              textAlign: 'center', position: 'relative', overflow: 'hidden'
            }}>
              <h2 style={{ fontWeight: 900, color: 'hsl(var(--foreground))', marginBottom: '24px' }}>
                Not sure which solution fits?
              </h2>
              <p style={{ color: 'var(--c9-muted)', maxWidth: '600px', margin: '0 auto 40px' }}>
                Book a free consultation with our solutions architects. We'll map your requirements and design a custom tech stack.
              </p>
              <Link to="/contact" style={{
                display: 'inline-block', padding: '16px 36px', borderRadius: '100px', background: 'linear-gradient(135deg, #7C3AED, #6B21A8)',
                color: 'hsl(var(--foreground))', fontWeight: 700, border: '1px solid var(--c9-border)', cursor: 'pointer',
                textDecoration: 'none'
              }}>
                Book Solutions Audit →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
