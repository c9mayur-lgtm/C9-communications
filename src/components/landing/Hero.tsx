
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const { scrollY } = useScroll();
  const yVal = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityVal = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      style={{
        position: 'relative', minHeight: '100vh',
        backgroundColor: 'var(--color-hero-bg)', color: 'white',
        overflow: 'hidden', display: 'flex', alignItems: 'center',
        paddingTop: '88px' // offset for nav
      }}
    >
      {/* Radial Bloom Glow */}
      <div 
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw',
          background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 60%)',
          opacity: 0.4, filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0
        }}
      />
      
      {/* Grain Overlay */}
      <div 
        style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\\"0 0 200 200\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cfilter id=\\"noiseFilter\\"%3E%3CfeTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.65\\" numOctaves=\\"3\\" stitchTiles=\\"stitch\\"/%3E%3C/filter%3E%3Crect width=\\"100%25\\" height=\\"100%25\\" filter=\\"url(%23noiseFilter)\\" opacity=\\"0.03\\"/%3E%3C/svg%3E")'
        }}
      />

      {/* Hero Orb */}
      <div 
        className="hero-orb"
        style={{
          position: 'absolute', top: '20%', right: '-10%', width: '600px', height: '600px',
          borderRadius: '50%', filter: 'blur(40px)', zIndex: 0,
          background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 50%, #000 100%)',
          opacity: 0.6
        }}
      />

      <motion.div 
        className="container"
        style={{ position: 'relative', zIndex: 10, y: yVal, opacity: opacityVal }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div style={{ maxWidth: '800px' }}>
          <div 
            className="mono-tag"
            style={{ 
              display: 'inline-block', padding: '0.25rem 0.75rem', 
              borderRadius: 'var(--radius-full)', border: '1px solid var(--color-accent)',
              color: 'var(--color-accent)', marginBottom: '1.5rem'
            }}
          >
            Australian Business Telco
          </div>
          
          <h1 style={{ 
            color: 'white', 
            lineHeight: 1.1, marginBottom: '1.5rem'
          }}>
            Cut Your Telco Bill by Up to <span style={{
              background: 'linear-gradient(to right, var(--color-accent), var(--color-light-accent))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>40%</span> — Without Losing a Single Call.
          </h1>
          
          <p style={{ 
            color: 'var(--color-pale-tint)', 
            marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6
          }}>
            Award-winning business NBN, cloud phone systems and IT services. All-Australian support. No lock-in contracts.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button className="btn-primary">
              Get My Free Telco Audit →
            </button>
            <button className="btn-ghost btn-ghost-dark">
              See Our Plans
            </button>
          </div>

          {/* Trust Bar below CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', opacity: 0.8 }}>
            <div style={{ display: 'flex', gap: '1.2rem', filter: 'grayscale(100%) brightness(200%)' }}>
               <span style={{fontWeight: 700}}>TELSTRA</span>
               <span style={{fontWeight: 700}}>OPTUS</span>
               <span style={{fontWeight: 700}}>VOCUS</span>
               <span style={{fontWeight: 700}}>AAPT</span>
               <span style={{fontWeight: 700}}>AUSSIE BB</span>
            </div>
            <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ color: 'var(--color-pale-tint)', }}>4.8★ Google Rating</span>
          </div>
        </div>
      </motion.div>

      {/* Fade out to white transition line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
        background: 'linear-gradient(to bottom, transparent, var(--color-body-bg))', zIndex: 5
      }} />
    </section>
  );
};
