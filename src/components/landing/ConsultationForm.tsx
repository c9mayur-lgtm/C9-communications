import { Check, ArrowRight } from 'lucide-react';
import { FadeIn } from '../shared/FadeIn';

export const ConsultationForm = ({ showHeader = true }) => {
  return (
    <div style={{ background: '#C4B5FD', padding: '100px 0', fontFamily: "'Inter', sans-serif" }}>
      {showHeader && (
        <section style={{ 
          background: '#0B0121', 
          padding: '120px 0 160px', 
          position: 'relative',
          color: 'white',
        }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <FadeIn>
              <div style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.1)',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '32px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                CONTACT US
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 style={{ 
                fontSize: 'clamp(40px, 6vw, 72px)', 
                fontWeight: 800, 
                lineHeight: 1.1,
                maxWidth: '800px',
                marginBottom: '40px',
                fontFamily: '"Proxima Nova", sans-serif'
              }}>
                Partner with Us for Comprehensive IT
              </h1>
            </FadeIn>
          </div>
        </section>
      )}

      <div className="container" style={{ 
        maxWidth: '1100px', 
        margin: '0 auto', 
        padding: '0 2rem',
        marginTop: showHeader ? '-120px' : '40px',
        position: 'relative'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '1fr 0.9fr', 
          gap: '60px', 
          alignItems: 'center' 
        }}>
          
          {/* Left Column (Content) */}
          <div style={{ paddingTop: showHeader ? '120px' : '0', textAlign: 'left' }}>
            <FadeIn delay={0.2}>
              {!showHeader && (
                <div style={{ marginBottom: '40px' }}>
                  <div style={{
                    display: 'inline-block',
                    background: '#0B0121',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '24px',
                  }}>
                    CONTACT US
                  </div>
                  <h2 style={{ fontSize: '48px', fontWeight: 800, color: '#0B0121', lineHeight: 1.1, marginBottom: '24px', fontFamily: '"Proxima Nova", sans-serif' }}>
                    Partner with Us for Comprehensive IT
                  </h2>
                </div>
              )}

              <p style={{ fontSize: '18px', color: '#1A1C1E', fontWeight: 500, lineHeight: 1.6, marginBottom: '40px', maxWidth: '480px' }}>
                We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
              </p>
              
              <div style={{ marginBottom: '60px' }}>
                <p style={{ fontWeight: 800, color: '#0B0121', fontSize: '20px', marginBottom: '24px' }}>
                  Call us at: <a href="tel:1800000299" style={{ color: '#0B0121', textDecoration: 'none', borderBottom: '2px solid #0B0121' }}>1800 000 299</a>
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0B0121', marginBottom: '24px' }}>Your benefits:</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {[
                    'Client-oriented', 'Independent', 'Competent',
                    'Results-driven', 'Problem-solving', 'Transparent'
                  ].map((benefit, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ 
                        width: '20px', height: '20px', borderRadius: '50%', 
                        background: '#5D00D6', display: 'flex', alignItems: 'center', 
                        justifyContent: 'center', color: 'white' 
                      }}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#0B0121' }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (Form) */}
          <FadeIn delay={0.3}>
            <div style={{ 
              background: '#F8FAFC', 
              borderRadius: '8px', 
              boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
              padding: '32px',
              position: 'relative',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: 800, 
                textAlign: 'center', 
                color: '#0B0121',
                marginBottom: '24px',
                fontFamily: '"Proxima Nova", sans-serif'
              }}>
                Schedule a Free Consultation
              </h2>
    
              <form onSubmit={e => e.preventDefault()} style={{ display: 'grid', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#4A5568', marginBottom: '6px', textTransform: 'uppercase' }}>First name</label>
                    <input type="text" placeholder="John" style={{ 
                      width: '100%', padding: '10px 14px', borderRadius: '4px', 
                      border: '1px solid #E2E8F0', fontSize: '15px', background: 'white'
                    }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#4A5568', marginBottom: '6px', textTransform: 'uppercase' }}>Last name</label>
                    <input type="text" placeholder="Doe" style={{ 
                      width: '100%', padding: '10px 14px', borderRadius: '4px', 
                      border: '1px solid #E2E8F0', fontSize: '15px', background: 'white'
                    }} />
                  </div>
                </div>
    
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#4A5568', marginBottom: '6px', textTransform: 'uppercase' }}>Company</label>
                    <input type="text" placeholder="Acme Inc" style={{ 
                      width: '100%', padding: '10px 14px', borderRadius: '4px', 
                      border: '1px solid #E2E8F0', fontSize: '15px', background: 'white'
                    }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#4A5568', marginBottom: '6px', textTransform: 'uppercase' }}>Phone</label>
                    <input type="tel" placeholder="1800 000 299" style={{ 
                      width: '100%', padding: '10px 14px', borderRadius: '4px', 
                      border: '1px solid #E2E8F0', fontSize: '15px', background: 'white'
                    }} />
                  </div>
                </div>
    
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ gridColumn: 'span 1' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#4A5568', marginBottom: '6px', textTransform: 'uppercase' }}>Work email</label>
                    <input type="email" placeholder="john@company.com" style={{ 
                      width: '100%', padding: '10px 14px', borderRadius: '4px', 
                      border: '1px solid #E2E8F0', fontSize: '15px', background: 'white'
                    }} />
                  </div>
                  <div style={{ gridColumn: 'span 1' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#4A5568', marginBottom: '6px', textTransform: 'uppercase' }}>How Can We Help?</label>
                    <select style={{ 
                      width: '100%', padding: '10px 14px', borderRadius: '4px', 
                      border: '1px solid #E2E8F0', fontSize: '15px', background: 'white', cursor: 'pointer'
                    }}>
                      <option>Select Option</option>
                      <option>Managed IT Services</option>
                      <option>Cloud Communications</option>
                      <option>Cyber Security</option>
                      <option>Network Infrastructure</option>
                    </select>
                  </div>
                </div>
    
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#4A5568', marginBottom: '6px', textTransform: 'uppercase' }}>Message</label>
                  <textarea 
                    placeholder="Briefly describe your needs..."
                    style={{ 
                      width: '100%', padding: '10px 14px', borderRadius: '4px', 
                      border: '1px solid #E2E8F0', fontSize: '15px', minHeight: '80px',
                      resize: 'none', background: 'white'
                    }} 
                  />
                </div>
    
                <button type="submit" style={{ 
                  background: '#5D00D6', color: 'white', fontWeight: 800, 
                  padding: '14px', borderRadius: '6px', border: 'none',
                  fontSize: '16px', cursor: 'pointer', marginTop: '12px',
                  transition: 'background 0.2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#4C00B0')}
                onMouseLeave={e => (e.currentTarget.style.background = '#5D00D6')}
                >
                  Submit Inquiry <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
