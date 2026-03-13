import { Link } from 'react-router-dom';
import { Globe, Phone, Shield, Server, Cloud, Smartphone, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { useTheme } from '../theme-provider';

export const Footer = () => {
  const { theme } = useTheme();
  const solutions = [
    { label: 'Business NBN & Fibre', icon: <Globe size={14} /> },
    { label: 'Cloud Phone System', icon: <Phone size={14} /> },
    { label: 'Unified Communications', icon: <Smartphone size={14} /> },
    { label: 'Managed IT Services', icon: <Server size={14} /> },
    { label: 'Cybersecurity', icon: <Shield size={14} /> },
    { label: 'Cloud Infrastructure', icon: <Cloud size={14} /> },
  ];

  return (
    <footer style={{
      background: 'hsl(var(--background))',
      borderTop: '1px solid var(--c9-border)',
      color: 'var(--c9-muted)',
    }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 2rem 0' }}>
        {/* Top row */}
        <div className="footer-grid" style={{ paddingBottom: '64px', borderBottom: '1px solid var(--c9-border)' }}>
          {/* Brand */}
          <FadeIn delay={0.1}>
            <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src={theme === 'light' ? "/images/c9_logo_light.svg" : "/images/c9_logo.svg"} alt="C9 Communications" style={{ 
                  height: '45px'
                }} />
              </div>
            </Link>
            <p style={{ lineHeight: 1.7, maxWidth: '280px', marginBottom: '28px' }}>
              Australia's enterprise connectivity partner — delivering NBN, cloud voice, managed IT, and cybersecurity under one roof.
            </p>
            {/* Social links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {['LinkedIn', 'Twitter', 'Facebook'].map(s => (
                <a key={s} href="#" style={{
                  padding: '7px 14px', borderRadius: '100px',
                  background: 'var(--c9-border)', border: '1px solid var(--c9-border)',
                  fontWeight: 600, color: 'var(--c9-muted)',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = '#C4B5FD';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--c9-border)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--c9-muted)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--c9-border)';
                  }}
                >{s}</a>
              ))}
            </div>
          </div>
          </FadeIn>

          {/* Solutions */}
          <FadeIn delay={0.2}>
            <div>
            <h5 style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4B5FD', marginBottom: '20px' }}>
              Solutions
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {solutions.map(s => (
                <Link key={s.label} to="/solutions" style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: 'var(--c9-muted)',
                  textDecoration: 'none', transition: 'color 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E9D5FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--c9-muted)')}
                >
                  {s.icon}{s.label}
                </Link>
              ))}
            </div>
          </div>
          </FadeIn>

          {/* Company */}
          <FadeIn delay={0.3}>
            <div>
            <h5 style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4B5FD', marginBottom: '20px' }}>
              Company
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Case Studies', path: '/about' },
                { label: 'Blog', path: '/about' },
                { label: 'Careers', path: '/about' },
                { label: 'Support', path: '/support' },
                { label: 'Contact', path: '/contact' }
              ].map(l => (
                <Link key={l.label} to={l.path} style={{
                  color: 'var(--c9-muted)',
                  textDecoration: 'none', transition: 'color 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E9D5FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--c9-muted)')}
                >{l.label}</Link>
              ))}
            </div>
          </div>
          </FadeIn>

            {/* CTA Block */}
            <FadeIn delay={0.4}>
              <div style={{ width: '100%' }}>
                <h5 style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4B5FD', marginBottom: '20px' }}>
                  Get Started
                </h5>
                <div style={{
                  background: theme === 'light' ? 'rgba(124,58,237,0.05)' : 'rgba(124,58,237,0.12)',
                  border: '1px solid var(--c9-border)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}>
                  <p style={{ lineHeight: 1.6, color: 'var(--c9-muted)', margin: 0 }}>
                    Book a free, no-obligation audit. We'll review your existing setup and show you a better path.
                  </p>
                  <Link 
                    to="/contact" 
                    className="btn-primary"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      background: 'linear-gradient(135deg, #7C3AED, #6B21A8)',
                      border: 'none',
                    }}
                  >
                    Book Free Audit <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
        </div>

        {/* Bottom row */}
        <FadeIn delay={0.5}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '16px',
          padding: '28px 0',
          color: 'var(--c9-muted)',
        }}>
          <div>© 2026 C9 Communications Pty Ltd. Part of the C9 Group. ABN XX XXX XXX XXX</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" style={{
                color: 'var(--c9-muted)', textDecoration: 'none', transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--c9-muted)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--c9-muted)')}
              >{l}</a>
            ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
