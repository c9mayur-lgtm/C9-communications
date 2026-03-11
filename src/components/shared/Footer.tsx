import React from 'react';

export const Footer = () => {
  return (
    <footer style={{ background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container" style={{ padding: '6rem 2rem 2rem' }}>
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.1)' 
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
              C9 Communications
            </div>
            <p style={{ color: 'var(--c9-muted)', marginBottom: '1.5rem', fontSize: '14px' }}>
              Empowering Australian businesses with next-generation communication tools.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="footer-link">LinkedIn</a>
              <a href="#" className="footer-link">Facebook</a>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Solutions</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {["Voice/VoIP", "Business NBN", "IT Services", "Cloud", "Mobile", "Print", "Relocation"].map(link => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {["About Us", "Case Studies", "Blog", "Careers", "Support"].map(link => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>C9 Group Family</h4>
            <p className="mono-tag" style={{ color: 'var(--c9-muted)', marginBottom: '1rem' }}>Also from the C9 Group:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {["C9 Teams", "C9 Defense", "C9 Digital", "C9 Lumina"].map(link => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', paddingTop: '2rem', gap: '1rem', color: 'var(--c9-muted)', fontSize: '13px' }}>
          <div>© 2026 C9 Communications. Part of the C9 Group. ABN XX XXX XXX XXX</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
             <a href="#" className="footer-link">Privacy Policy</a>
             <a href="#" className="footer-link">Terms</a>
             <a href="#" className="footer-link">Cookie Policy</a>
          </div>
        </div>
      </div>
      <style>{`
        .footer-link {
          color: var(--c9-muted);
          transition: color 0.15s;
          font-size: 14px;
        }
        .footer-link:hover {
          color: var(--c9-light);
        }
      `}</style>
    </footer>
  );
};
