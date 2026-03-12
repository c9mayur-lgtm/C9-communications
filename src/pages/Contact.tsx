import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight } from 'lucide-react';

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

export const Contact = () => {
  return (
    <div style={{ background: '#0A0010', color: '#F8F5FF', fontFamily: "'Plus Jakarta Sans', sans-serif", paddingTop: '72px', minHeight: '100vh' }}>
      
      {/* ── HERO ── */}
      <section style={{ padding: '100px 0 60px', textAlign: 'center', position: 'relative' }}>
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
              Contact Us
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(40px,6vw,72px)',
              fontWeight: 900, letterSpacing: '-0.04em', color: '#fff',
              marginBottom: '20px', lineHeight: 1.0,
            }}>
              Let's talk about<br />
              <span style={{
                background: 'linear-gradient(135deg, #C4B5FD 0%, #A855F7 60%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>your connectivity.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'rgba(248,245,255,0.55)', maxWidth: '580px', margin: '0 auto' }}>
              Whether you're looking for an audit, a quote, or technical support, our Australian-based team is ready to help.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: '40px 0 120px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '64px' }}>
            
            {/* ── FORM ── */}
            <FadeIn delay={0.3}>
              <div style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(167,139,250,0.15)',
                borderRadius: '24px', padding: '48px', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle at top right, rgba(124,58,237,0.1), transparent 70%)' }} />
                
                <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '32px' }}>Send us a message</h3>
                
                <form onSubmit={e => e.preventDefault()} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div style={{ gridColumn: 'span 1' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(248,245,255,0.5)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name</label>
                    <input type="text" placeholder="John Doe" style={{ width: '100%', background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: '12px', padding: '14px 18px', color: '#fff', fontSize: '15px' }} />
                  </div>
                  <div style={{ gridColumn: 'span 1' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(248,245,255,0.5)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Work Email</label>
                    <input type="email" placeholder="john@company.com" style={{ width: '100%', background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: '12px', padding: '14px 18px', color: '#fff', fontSize: '15px' }} />
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(248,245,255,0.5)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company Name</label>
                    <input type="text" placeholder="Acme Corp" style={{ width: '100%', background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: '12px', padding: '14px 18px', color: '#fff', fontSize: '15px' }} />
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(248,245,255,0.5)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
                    <textarea placeholder="How can we help your business?" rows={5} style={{ width: '100%', background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: '12px', padding: '14px 18px', color: '#fff', fontSize: '15px', resize: 'none' }} />
                  </div>
                  <div style={{ gridColumn: 'span 2', marginTop: '8px' }}>
                    <button style={{
                      width: '100%', padding: '16px', borderRadius: '12px', background: 'linear-gradient(135deg, #7C3AED, #6B21A8)',
                      color: '#fff', fontSize: '15px', fontWeight: 700, border: '1px solid rgba(167,139,250,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer'
                    }}>
                      Send Inquiry <Send size={16} />
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(248,245,255,0.35)', marginTop: '16px' }}>
                      We typically respond to business inquiries within 2 business hours.
                    </p>
                  </div>
                </form>
              </div>
            </FadeIn>

            {/* ── INFO ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <FadeIn delay={0.4}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(167,139,250,0.1)', borderRadius: '20px', padding: '32px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(167,139,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A855F7', marginBottom: '20px' }}>
                    <Phone size={20} />
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Call Support</h4>
                  <p style={{ fontSize: '14px', color: 'rgba(248,245,255,0.5)', marginBottom: '16px' }}>Available 24/7 for critical faults.</p>
                  <a href="tel:1300000000" style={{ fontSize: '18px', fontWeight: 800, color: '#C4B5FD', textDecoration: 'none' }}>1300 C9 TECH</a>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(167,139,250,0.1)', borderRadius: '20px', padding: '32px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(167,139,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A855F7', marginBottom: '20px' }}>
                    <Mail size={20} />
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Email Us</h4>
                  <p style={{ fontSize: '14px', color: 'rgba(248,245,255,0.5)', marginBottom: '16px' }}>For general sales and quotes.</p>
                  <a href="mailto:hello@c9communications.com.au" style={{ fontSize: '16px', fontWeight: 600, color: '#C4B5FD', textDecoration: 'none' }}>hello@c9comms.com.au</a>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(167,139,250,0.1)', borderRadius: '20px', padding: '32px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(167,139,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A855F7', marginBottom: '20px' }}>
                    <MapPin size={20} />
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Headquarters</h4>
                  <p style={{ fontSize: '14px', color: 'rgba(248,245,255,0.5)', lineHeight: 1.5 }}>
                    Level 32, 101 Miller Street<br />
                    North Sydney, NSW 2060
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ BRIEF ── */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(167,139,250,0.1)', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: '32px', fontWeight: 800, color: '#fff' }}>Quick Support</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
             {[
               { icon: <MessageSquare size={18} />, title: "Live Chat", text: "Talk to an engineer instantly via our portal." },
               { icon: <Clock size={18} />, title: "Support Times", text: "Phone support is live 24/7/365 for critical issues." },
               { icon: <ArrowRight size={18} />, title: "Service Status", text: "Check up-to-the-minute status of our core networks." }
             ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1}>
                 <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(167,139,250,0.1)' }}>
                   <div style={{ color: '#A855F7', marginBottom: '12px' }}>{item.icon}</div>
                   <h5 style={{ color: '#fff', fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h5>
                   <p style={{ color: 'rgba(248,245,255,0.4)', fontSize: '14px', lineHeight: 1.5 }}>{item.text}</p>
                 </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};
