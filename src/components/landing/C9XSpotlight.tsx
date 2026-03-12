
import { SectionWrapper } from './SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

export const C9XSpotlight = () => {
  const benefits = [
    { title: "80+ features", desc: "Call management, conferencing, routing, recording and more" },
    { title: "No upfront costs", desc: "Monthly subscription, cancel any time" },
    { title: "Scales instantly", desc: "Add users in minutes, not days" },
  ];

  return (
    <SectionWrapper style={{ background: 'var(--color-hero-bg)', padding: '8rem 0', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Side */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <p className="mono-tag" style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>C9X PLATFORM</p>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: 'white', marginBottom: '3rem' }}>
            Australia's Next-Generation Unified Communications Platform
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3.5rem' }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--color-accent)" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white', display: 'block' }}>{b.title}</span>
                  <span style={{ color: 'var(--color-pale-tint)', fontSize: '1rem' }}>{b.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary">Explore C9X →</button>
            <button className="btn-ghost btn-ghost-dark">Book a Demo</button>
          </div>
        </div>

        {/* Right Side Mockup */}
        <div className="hidden-mobile" style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '100%', maxWidth: '500px', height: '600px',
            background: 'linear-gradient(145deg, rgba(20,20,25,0.9), rgba(10,10,15,0.9))',
            borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 30px 60px -15px rgba(107,33,168,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
            padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'
          }}>
             {/* Mock UI Elements */}
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ width: '40%', height: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}/>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)' }}/>
             </div>
             
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ height: '100px', background: 'rgba(168,85,247,0.1)', borderRadius: '12px', border: '1px solid rgba(168,85,247,0.3)', padding: '1rem' }}>
                  <div style={{ width: '30%', height: '12px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', marginBottom: '0.5rem'}}/>
                  <div style={{ width: '70%', height: '32px', background: 'rgba(255,255,255,0.8)', borderRadius: '4px'}}/>
                </div>
                <div style={{ height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}/>
             </div>

             <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', marginTop: '1rem' }}/>
          </div>

          {/* Background decoration */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '120%', height: '120%', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
            opacity: 0.2, filter: 'blur(60px)', zIndex: -1
          }}/>
        </div>

      </div>
      <style>{`
        @media(max-width: 768px) {
          .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
};
