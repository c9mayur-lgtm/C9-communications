import { Link } from 'react-router-dom';
import { Globe, Phone, Shield, Server, Cloud, Smartphone, ArrowRight } from 'lucide-react';

export const Footer = () => {
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
      background: '#060010',
      borderTop: '1px solid rgba(167,139,250,0.1)',
      color: 'rgba(248,245,255,0.5)',
    }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 2rem 0' }}>
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '64px',
          borderBottom: '1px solid rgba(167,139,250,0.1)',
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, color: '#fff',
                }}>C9</div>
                <span style={{ fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                  Communications
                </span>
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
                  background: 'rgba(167,139,250,0.07)', border: '1px solid rgba(167,139,250,0.15)',
                  fontWeight: 600, color: 'rgba(248,245,255,0.5)',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = '#C4B5FD';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.4)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'rgba(248,245,255,0.5)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.15)';
                  }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h5 style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4B5FD', marginBottom: '20px' }}>
              Solutions
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {solutions.map(s => (
                <Link key={s.label} to="/solutions" style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: 'rgba(248,245,255,0.5)',
                  textDecoration: 'none', transition: 'color 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E9D5FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,255,0.5)')}
                >
                  {s.icon}{s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
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
                  color: 'rgba(248,245,255,0.5)',
                  textDecoration: 'none', transition: 'color 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E9D5FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,255,0.5)')}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* CTA Block */}
          <div>
            <h5 style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4B5FD', marginBottom: '20px' }}>
              Get Started
            </h5>
            <div style={{
              background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(167,139,250,0.2)',
              borderRadius: '16px', padding: '24px',
            }}>
              <p style={{ lineHeight: 1.6, marginBottom: '20px', color: 'rgba(248,245,255,0.6)' }}>
                Book a free, no-obligation audit. We'll review your existing setup and show you a better path.
              </p>
              <Link to="/contact" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #7C3AED, #6B21A8)',
                color: '#fff', fontWeight: 700,
                padding: '11px 20px', borderRadius: '100px', textDecoration: 'none',
                border: '1px solid rgba(167,139,250,0.3)',
              }}>
                Book Free Audit <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '16px',
          padding: '28px 0',
          color: 'rgba(248,245,255,0.25)',
        }}>
          <div>© 2026 C9 Communications Pty Ltd. Part of the C9 Group. ABN XX XXX XXX XXX</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" style={{
                color: 'rgba(248,245,255,0.25)', textDecoration: 'none', transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(248,245,255,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,255,0.25)')}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
