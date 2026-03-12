import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [isDarkPage, setIsDarkPage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    // Very simple check to determine if the page starts dark
    // On /pricing we might want it forced to light or determined by page
    const bodyBg = getComputedStyle(document.body).backgroundColor;
    setIsDarkPage(bodyBg !== 'rgb(255, 255, 255)'); 

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const links = [
    { name: 'Solutions', path: '/#solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Industries', path: '/#industries' },
    { name: 'About', path: '/#about' },
    { name: 'Support', path: '/#support' }
  ];

  return (
    <>
      <nav 
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 2rem', 
          transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
          height: scrolled ? '56px' : '72px',
          background: scrolled ? 'rgba(26,0,58,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'
        }}
      >
        {/* LOGO */}
        <Link to="/" style={{ 
          fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, 
          color: scrolled || isDarkPage ? 'white' : 'var(--c9-text)',
          position: 'relative', transition: 'color 0.3s',
          textDecoration: 'none'
        }}>
          C9 Communications
          {/* Active dot indicator simulation for logo */}
          <div style={{
            position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)',
            width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--c9-accent)',
            opacity: location.pathname === '/' ? 1 : 0
          }} />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {links.map((item) => {
            const isExternal = !item.path.startsWith('/#');
            const Element = isExternal ? Link : 'a' as any;
            const props = isExternal ? { to: item.path } : { href: item.path };

            return (
              <Element 
                key={item.name} 
                {...props}
                className="nav-link"
                style={{
                  color: scrolled || isDarkPage ? 'rgba(255,255,255,0.75)' : 'var(--c9-mid)',
                  fontSize: '15px', fontWeight: 500, position: 'relative',
                  transition: 'color 0.15s ease',
                  textDecoration: 'none'
                }}
              >
                {item.name}
                <div style={{
                  position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)',
                  width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--c9-accent)',
                  opacity: location.pathname === item.path ? 1 : 0, transition: 'opacity 0.15s'
                }} />
                
                {/* Mega Dropdown for Solutions */}
                {item.name === 'Solutions' && (
                  <div className="mega-menu">
                    <div className="mega-menu-content">
                      {['Voice/VoIP', 'Business NBN', 'IT Services', 'Cloud Hosting', 'Mobile Plans', 'Print & Hardware'].map(s => (
                        <div key={s} className="mega-item">
                          <span style={{color: 'white', fontWeight: 600, display: 'block'}}>{s}</span>
                          <span style={{color: 'var(--c9-muted)', fontSize: '13px'}}>Learn more about {s.toLowerCase()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Element>
            );
          })}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="nav-desktop-actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span className="mono-tag hover-white" style={{ color: 'var(--c9-light)', fontSize: '13px' }}>1800 000 C9X</span>
          <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)' }} />
          <button className="btn-primary">
            Get a Quote
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="nav-mobile-btn" style={{ display: 'none' }}>
           <button onClick={() => setNavOpen(true)} style={{ color: scrolled || isDarkPage ? 'white' : 'var(--c9-text)' }}>
              <Menu size={28} />
           </button>
        </div>
      </nav>

      {/* MOBILE FULL SCREEN NAV */}
      <div 
        className={`mobile-overlay ${navOpen ? 'open' : ''}`}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'var(--c9-hero-bg)', zIndex: 100,
          clipPath: navOpen ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)',
          transition: 'clip-path 0.4s ease-out',
          display: 'flex', flexDirection: 'column', padding: '2rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
           <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
            C9 Communications
          </div>
          <button onClick={() => setNavOpen(false)} style={{ color: 'white' }}>
            <X size={28} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
          {links.map((item, i) => {
            const isExternal = !item.path.startsWith('/#');
            const Element = isExternal ? Link : 'a' as any;
            const props = isExternal ? { to: item.path } : { href: item.path };

            return (
              <Element 
                key={item.name} 
                {...props}
                onClick={() => setNavOpen(false)}
                className="fade-up"
                style={{ 
                  color: 'white', fontSize: '48px', fontFamily: 'var(--font-heading)', fontWeight: 600,
                  opacity: navOpen ? 1 : 0, transform: navOpen ? 'translateY(0)' : 'translateY(28px)',
                  transition: `all 0.4s ease ${i * 0.08}s`,
                  textDecoration: 'none'
                }}
              >
                {item.name}
              </Element>
            );
          })}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
           <span className="mono-tag" style={{ color: 'var(--c9-light)', fontSize: '14px' }}>1800 000 C9X</span>
           <button className="btn-primary" style={{ width: '100%', padding: '1.2rem', justifyContent: 'center' }} onClick={() => setNavOpen(false)}>
            Get a Quote
          </button>
        </div>
      </div>
      <style>{`
        @media(max-width: 768px) {
          .nav-desktop-links, .nav-desktop-actions { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
        .hover-white:hover { color: white !important; cursor: none; }
        
        .nav-indicator {
          position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);
          width: 4px; height: 4px; border-radius: 50%; background-color: var(--c9-accent);
          opacity: 0; transition: opacity 0.15s;
        }
        .nav-link:hover { color: white !important; }
        .nav-link:hover .nav-indicator { opacity: 1; }
        
        .mega-menu {
          position: absolute; top: 100%; left: -20px;
          padding-top: 24px;
          opacity: 0; visibility: hidden;
          transition: all 0.2s; transform: translateY(-8px);
        }
        .nav-link:hover .mega-menu {
          opacity: 1; visibility: visible; transform: translateY(0);
        }
        .mega-menu-content {
          background: rgba(26,0,58,0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 1.5rem;
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 400px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }
        .mega-item {
          padding: 0.75rem; border-radius: 8px; transition: background 0.15s;
        }
        .mega-item:hover { background: rgba(255,255,255,0.05); }
      `}</style>
    </>
  );
};
