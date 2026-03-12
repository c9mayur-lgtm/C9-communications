import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Wifi, Phone, Shield, Server, Cloud, Smartphone, Building2, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

/* ── Dropdown data ── */
const SOLUTIONS_MENU = [
  { icon: <Wifi size={16} />, label: 'Business NBN & Fibre', desc: 'Ultra-fast leased line & broadband', path: '/solutions' },
  { icon: <Phone size={16} />, label: 'Cloud Phone System', desc: 'Enterprise VoIP & PBX replacement', path: '/c9x' },
  { icon: <Smartphone size={16} />, label: 'Unified Communications', desc: 'Voice, video & collaboration in one', path: '/solutions' },
  { icon: <Server size={16} />, label: 'Managed IT Services', desc: 'Proactive support & monitoring', path: '/solutions' },
  { icon: <Shield size={16} />, label: 'Cybersecurity', desc: 'Zero-trust & endpoint protection', path: '/solutions' },
  { icon: <Cloud size={16} />, label: 'Cloud Infrastructure', desc: 'Hybrid & multi-cloud hosting', path: '/solutions' },
];

const COMPANY_MENU = [
  { icon: <Building2 size={16} />, label: 'About C9', desc: 'Our story and mission', path: '/about' },
  { icon: <Globe size={16} />, label: 'Case Studies', desc: 'Client success stories', path: '/about' },
];

const NAV_LINKS = [
  { name: 'Solutions', path: '/solutions', hasMenu: true, menuKey: 'solutions' },
  { name: 'Pricing', path: '/pricing', hasMenu: false },
  { name: 'Industries', path: '/industries', hasMenu: false },
  { name: 'Company', path: '/about', hasMenu: true, menuKey: 'company' },
  { name: 'Support', path: '/support', hasMenu: false },
];

/* ── Dropdown Panel ── */
const DropdownPanel = ({ items, visible }: { items: typeof SOLUTIONS_MENU; visible: boolean }) => (
  <div style={{
    position: 'absolute', top: 'calc(100% + 16px)', left: '50%',
    background: 'rgba(10,0,16,0.97)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
    border: '1px solid rgba(167,139,250,0.18)', borderRadius: '16px', padding: '16px',
    width: '360px', boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
    opacity: visible ? 1 : 0, visibility: visible ? 'visible' : 'hidden',
    transform: visible ? 'translateX(-50%) translateY(0px)' : 'translateX(-50%) translateY(-8px)',
    transition: 'all 0.22s cubic-bezier(0.16,1,0.3,1)',
    zIndex: 100,
  }}>
    {items.map((item, i) => (
      <Link key={i} to={item.path || '#'} style={{ textDecoration: 'none' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 14px',
          borderRadius: '10px', transition: 'background 0.15s',
          cursor: 'pointer',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(167,139,250,0.08)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
            background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(167,139,250,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C4B5FD',
          }}>{item.icon}</div>
          <div>
            <div style={{ fontWeight: 600, color: '#fff', marginBottom: '2px' }}>{item.label}</div>
            <div style={{ color: 'rgba(248,245,255,0.45)' }}>{item.desc}</div>
          </div>
          <ArrowRight size={13} style={{ color: '#7C3AED', marginLeft: 'auto', flexShrink: 0 }} />
        </div>
      </Link>
    ))}
  </div>
);

/* ── Main Navigation ── */
export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<any>(null);

  const isHome = location.pathname === '/' || location.pathname === '/saas';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => { setNavOpen(false); setOpenMenu(null); }, [location.pathname]);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const navBg = scrolled
    ? 'rgba(10,0,16,0.94)'
    : isHome ? 'transparent' : 'rgba(10,0,16,0.94)';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2.5rem',
        height: scrolled ? '58px' : '72px',
        background: navBg,
        backdropFilter: (scrolled || !isHome) ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: (scrolled || !isHome) ? 'blur(24px)' : 'none',
        borderBottom: (scrolled || !isHome) ? '1px solid rgba(167,139,250,0.1)' : '1px solid transparent',
        transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}>
        {/* LOGO */}
        <Link to="/" style={{
          fontWeight: 800,
          color: '#fff', textDecoration: 'none', letterSpacing: '-0.03em',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, color: '#fff', flexShrink: 0,
          }}>C9</div>
          Communications
        </Link>

        {/* DESKTOP LINKS */}
        <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }} className="nav-desktop-links">
          {NAV_LINKS.map((item) => {
            const isActive = location.pathname === item.path || (item.path.startsWith('/#') && location.pathname === '/');
            const isDropdownOpen = item.hasMenu && openMenu === item.menuKey;

            return (
              <div
                key={item.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => item.hasMenu && handleMouseEnter(item.menuKey!)}
                onMouseLeave={handleMouseLeave}
              >
                {item.hasMenu ? (
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    color: isActive ? '#E9D5FF' : 'rgba(248,245,255,0.65)',
                    fontWeight: 500, background: 'none',
                    border: 'none', padding: '8px 14px', borderRadius: '8px',
                    cursor: 'pointer', transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = '#fff';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(167,139,250,0.07)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = isActive ? '#E9D5FF' : 'rgba(248,245,255,0.65)';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    {item.name}
                    <ChevronDown size={13} style={{
                      transition: 'transform 0.2s',
                      transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: '#A855F7',
                    }} />
                  </button>
                ) : (
                  item.path.startsWith('/#') ? (
                    <a href={item.path} style={{
                      display: 'flex', alignItems: 'center', gap: '4px',
                      color: isActive ? '#E9D5FF' : 'rgba(248,245,255,0.65)',
                      fontWeight: 500,
                      padding: '8px 14px', borderRadius: '8px',
                      textDecoration: 'none', transition: 'all 0.15s',
                    }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.color = '#fff';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(167,139,250,0.07)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.color = isActive ? '#E9D5FF' : 'rgba(248,245,255,0.65)';
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                      }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.path} style={{
                      display: 'flex', alignItems: 'center', gap: '4px',
                      color: location.pathname === item.path ? '#E9D5FF' : 'rgba(248,245,255,0.65)',
                      fontWeight: 500,
                      padding: '8px 14px', borderRadius: '8px',
                      textDecoration: 'none', transition: 'all 0.15s',
                    }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.color = '#fff';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(167,139,250,0.07)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.color = location.pathname === item.path ? '#E9D5FF' : 'rgba(248,245,255,0.65)';
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                      }}
                    >
                      {item.name}
                    </Link>
                  )
                )}

                {/* Dropdown panel */}
                {item.menuKey === 'solutions' && (
                  <DropdownPanel items={SOLUTIONS_MENU} visible={isDropdownOpen} />
                )}
                {item.menuKey === 'company' && (
                  <DropdownPanel items={COMPANY_MENU} visible={isDropdownOpen} />
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="nav-desktop-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a href="tel:1800000000" style={{
            fontWeight: 600, color: 'rgba(248,245,255,0.5)',
            textDecoration: 'none', transition: 'color 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C4B5FD')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,255,0.5)')}
          >
            1800 C9 TECH
          </a>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'linear-gradient(135deg, #7C3AED, #6B21A8)',
            color: '#fff', fontWeight: 700,
            padding: '9px 20px', borderRadius: '100px',
            border: '1px solid rgba(167,139,250,0.3)',
            textDecoration: 'none',
            transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
            boxShadow: '0 0 0 0 rgba(124,58,237,0)',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(124,58,237,0.35)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(124,58,237,0)';
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="nav-mobile-btn"
          onClick={() => setNavOpen(true)}
          style={{
            display: 'none', color: '#fff', background: 'none', border: 'none',
            padding: '8px', borderRadius: '8px', cursor: 'pointer',
          }}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'rgba(10,0,16,0.98)', backdropFilter: 'blur(20px)',
        zIndex: 100,
        opacity: navOpen ? 1 : 0,
        visibility: navOpen ? 'visible' : 'hidden',
        transition: 'all 0.35s ease',
        display: 'flex', flexDirection: 'column', padding: '24px',
        }}>
        {/* Mobile header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <Link to="/" style={{
            fontWeight: 800, color: '#fff', textDecoration: 'none',
          }}>C9 Communications</Link>
          <button onClick={() => setNavOpen(false)} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        {/* Mobile links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          {NAV_LINKS.map((item, i) => (
            <div key={item.name} style={{
              opacity: navOpen ? 1 : 0,
              transform: navOpen ? 'translateY(0)' : 'translateY(16px)',
              transition: `all 0.4s ease ${i * 0.06}s`,
            }}>
              {item.path.startsWith('/#') ? (
                <a href={item.path} onClick={() => setNavOpen(false)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  color: 'rgba(248,245,255,0.8)', fontWeight: 700,
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(167,139,250,0.1)',
                  textDecoration: 'none',
                }}>
                  {item.name}
                  {item.hasMenu && <ChevronDown size={16} color="#7C3AED" />}
                </a>
              ) : (
                <Link to={item.path} onClick={() => setNavOpen(false)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  color: 'rgba(248,245,255,0.8)', fontWeight: 700,
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(167,139,250,0.1)',
                  textDecoration: 'none',
                }}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div style={{ paddingTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href="tel:1800000000" style={{
            textAlign: 'center', padding: '16px', borderRadius: '100px',
            border: '1px solid rgba(167,139,250,0.25)', color: 'rgba(248,245,255,0.7)',
            fontWeight: 600, textDecoration: 'none',
          }}>📞 1800 C9 TECH</a>
          <Link to="/contact" onClick={() => setNavOpen(false)} style={{
            textAlign: 'center', padding: '16px', borderRadius: '100px',
            background: 'linear-gradient(135deg, #7C3AED, #6B21A8)',
            color: '#fff', fontWeight: 700, textDecoration: 'none',
          }}>Get a Free Quote →</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-links, .nav-desktop-actions { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};
