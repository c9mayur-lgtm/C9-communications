

export const AccreditationStrip = () => {
  const accreditations = [
    "APNIC", "NBN Accredited", "TIO Member", "ACMA Registered"
  ];

  return (
    <div style={{ background: 'white', borderTop: '1px solid var(--color-pale-tint)', padding: '2rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <p className="mono-tag" style={{ color: 'var(--color-text-light)', }}>ACCREDITED & CERTIFIED</p>
        
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {accreditations.map((name, i) => (
            <div key={i} style={{
              fontWeight: 600, color: 'var(--color-text-mid)', 
              opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em'
            }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-text-dark)', color: 'var(--color-text-light)', padding: '6rem 0 2rem' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.1)' 
        }}>
          <div>
            <div style={{ fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
              C9 Communications
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Empowering Australian businesses with next-generation communication tools.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="footer-link">LinkedIn</a>
              <a href="#" className="footer-link">Facebook</a>
              <a href="#" className="footer-link">Twitter</a>
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
              {["About Us", "Case Studies", "Blog", "Careers", "Partners", "Support"].map(link => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>C9 Group Family</h4>
            <p style={{ marginBottom: '1rem' }}>Also from the C9 Group:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {["C9 Teams", "C9 Defense", "C9 Digital", "C9 Lumina"].map(link => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', paddingTop: '2rem', gap: '1rem', }}>
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
          color: var(--color-text-light);
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--color-light-accent);
        }
      `}</style>
    </footer>
  );
};
