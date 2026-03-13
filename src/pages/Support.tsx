import { Phone, Mail, MessageSquare, ArrowRight, Activity, Book, HelpCircle, ShieldCheck } from 'lucide-react';
import { FadeIn } from '../components/shared/FadeIn';

export const Support = () => {
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
              Support Hub
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontWeight: 900, letterSpacing: '-0.04em', color: 'hsl(var(--foreground))',
              marginBottom: '20px', lineHeight: 1.0,
            }}>
              Expert assistance,<br />
              <span style={{
                background: 'linear-gradient(135deg, #C4B5FD 0%, #A855F7 60%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>whenever you need it.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ lineHeight: 1.7, color: 'var(--c9-muted)', maxWidth: '540px', margin: '0 auto' }}>
              Access our 24/7 technical support, knowledge base, and live network status.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CHANNELS ── */}
      <section style={{ padding: '40px 0 100px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="grid-auto-small" style={{ gap: '24px' }}>
            <FadeIn>
              <div style={{ background: 'var(--c9-surface)', border: '1px solid var(--c9-border)', borderRadius: '24px', padding: '40px', height: '100%' }}>
                <div style={{ color: '#A855F7', marginBottom: '24px' }}><Phone size={32} /></div>
                <h3 style={{ fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '12px' }}>Phone Support</h3>
                <p style={{ color: 'var(--c9-muted)', marginBottom: '32px' }}>
                  24/7/365 assistance for critical network faults and enterprise voice issues.
                </p>
                <a href="tel:1300000000" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#C4B5FD', fontWeight: 800, textDecoration: 'none' }}>
                  1300 C9 TECH <ArrowRight size={18} />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div style={{ background: 'var(--c9-surface)', border: '1px solid var(--c9-border)', borderRadius: '24px', padding: '40px', height: '100%' }}>
                <div style={{ color: '#A855F7', marginBottom: '24px' }}><MessageSquare size={32} /></div>
                <h3 style={{ fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '12px' }}>Live Chat</h3>
                <p style={{ color: 'var(--c9-muted)', marginBottom: '32px' }}>
                  Quick technical queries and billing assistance. Available 8am–6pm AEDT.
                </p>
                <button style={{ padding: '12px 24px', borderRadius: '100px', background: 'linear-gradient(135deg, #7C3AED, #6B21A8)', color: 'hsl(var(--foreground))', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                  Launch Live Chat
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ background: 'var(--c9-surface)', border: '1px solid var(--c9-border)', borderRadius: '24px', padding: '40px', height: '100%' }}>
                <div style={{ color: '#A855F7', marginBottom: '24px' }}><Activity size={32} /></div>
                <h3 style={{ fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '12px' }}>Network Status</h3>
                <p style={{ color: 'var(--c9-muted)', marginBottom: '32px' }}>
                  Live monitoring of our core fibre, NBN, and C9X voice infrastructure.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00C27C', fontWeight: 700 }}>
                   <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00C27C', boxShadow: '0 0 10px #00C27C' }} />
                   All Systems Operational
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section style={{ padding: '100px 0', background: 'var(--c9-surface)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontWeight: 800, color: 'hsl(var(--foreground))' }}>Self-Service Resources</h2>
          </div>
          <div className="grid-auto" style={{ gap: '20px' }}>
            {[
              { icon: <Book size={18} />, title: "Knowledge Base", desc: "Detailed guides for C9X and network setup." },
              { icon: <HelpCircle size={18} />, title: "FAQ", desc: "Common questions about billing and service." },
              { icon: <ShieldCheck size={18} />, title: "Trust Centre", desc: "Compliance, security, and data privacy info." },
              { icon: <Mail size={18} />, title: "Submit a Ticket", desc: "Open a case with our engineering team." }
            ].map((res, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ padding: '32px', borderRadius: '20px', background: 'var(--c9-surface)', border: '1px solid var(--c9-border)', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--c9-border)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--c9-border)'; }}
                >
                  <div style={{ color: '#A855F7', marginBottom: '16px' }}>{res.icon}</div>
                  <h4 style={{ color: 'hsl(var(--foreground))', fontWeight: 700, marginBottom: '8px' }}>{res.title}</h4>
                  <p style={{ color: 'var(--c9-muted)', lineHeight: 1.5 }}>{res.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section style={{ padding: '120px 0' }}>
         <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
           <FadeIn>
             <div style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid var(--c9-border)', borderRadius: '24px', padding: '60px', textAlign: 'center' }}>
                <h3 style={{ fontWeight: 900, color: 'hsl(var(--foreground))', marginBottom: '16px' }}>Cant find what you're looking for?</h3>
                <p style={{ color: 'var(--c9-muted)', maxWidth: '500px', margin: '0 auto 32px' }}>
                  Our team is available 24/7. Don't waste time with bots when you can talk to an expert.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                   <button style={{ padding: '14px 28px', borderRadius: '100px', background: 'hsl(var(--foreground))', color: 'hsl(var(--background))', fontWeight: 800, cursor: 'pointer' }}>Call Us Now</button>
                   <button style={{ padding: '14px 28px', borderRadius: '100px', background: 'transparent', border: '1px solid var(--c9-border)', color: 'hsl(var(--foreground))', fontWeight: 700, cursor: 'pointer' }}>Email Support</button>
                </div>
             </div>
           </FadeIn>
         </div>
      </section>
    </div>
  );
};
