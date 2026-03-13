import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      
      const sections = ['solutions', 'pricing', 'industries', 'about', 'support'];
      const current = [...sections].reverse().find((section: string) => {
        const el = document.getElementById(section);
        if (el) return window.scrollY >= el.offsetTop - 150;
        return false;
      });
      if(current) setActiveHash(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Solutions', 'Pricing', 'Industries', 'About', 'Support'];

  return (
    <>
      <motion.nav 
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 2rem', transition: 'all 0.3s ease',
          height: scrolled ? '56px' : '88px',
          background: scrolled ? 'rgba(26, 0, 58, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent'
        }}
      >
        {/* LOGO */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/c9_logo.svg" alt="C9 Communications" style={{ height: '45px' }} />
        </div>

        {/* DESKTOP LINKS */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden-mobile">
          {links.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              style={{
                color: activeHash === item.toLowerCase() ? 'var(--color-pale-tint)' : 'var(--color-text-light)',
                fontWeight: 500
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = activeHash === item.toLowerCase() ? 'var(--color-pale-tint)' : 'var(--color-text-light)'}
            >
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="hidden-mobile">
          <span style={{ color: 'var(--color-pale-tint)', fontWeight: 500, }}>1800 000 C9X</span>
          <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', minHeight: '38px', }}>
            Get a Quote
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="show-mobile" style={{ display: 'none' }}>
           <button onClick={() => setNavOpen(true)} style={{ color: 'white' }}>
              <Menu size={28} />
           </button>
        </div>
      </motion.nav>

      {/* MOBILE FULL SCREEN NAV */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{ 
              position: 'fixed', inset: 0, zIndex: 100, 
              background: 'var(--color-hero-bg)', padding: '2rem',
              display: 'flex', flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/images/c9_logo.svg" alt="C9 Communications" style={{ height: '45px' }} />
              </div>
              <button onClick={() => setNavOpen(false)} style={{ color: 'white' }}>
                <X size={28} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {links.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setNavOpen(false)}
                  style={{ color: 'white', fontWeight: 600 }}
                >
                  {item}
                </a>
              ))}
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <span style={{ color: 'var(--color-pale-tint)', fontWeight: 500, textAlign: 'center' }}>1800 000 C9X</span>
               <button className="btn-primary" style={{ width: '100%', padding: '1rem' }} onClick={() => setNavOpen(false)}>
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media(max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
};
