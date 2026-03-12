import React, { useRef, useState, useEffect, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowRight, Zap, Activity, 
  ChevronRight, Mic, Video, Settings
} from 'lucide-react';
import './SaaSHomepage.css';

/* ---- Reusable FadeIn wrapper ---- */
const FadeIn = ({ 
  children, delay = 0, className = '', direction = 'up', style 
}: { 
  children: ReactNode; delay?: number; className?: string; direction?: 'up' | 'none'; style?: React.CSSProperties; 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-8%' });
  return (
    <motion.div
      ref={ref}
      initial={direction === 'up' ? { opacity: 0, y: 32 } : { opacity: 0 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

const FEATURES = {
  Calling: [
    { name: "Hunt Groups", desc: "Ring multiple users simultaneously or sequentially." },
    { name: "Call Queues", desc: "Professional queuing with custom greetings & hold music." },
    { name: "IVR / Auto-Attendant", desc: "Intelligent multi-level menu routing (Press 1 for Sales)." },
    { name: "Call Recording", desc: "Securely record every conversation for training & compliance." },
    { name: "Voicemail-to-Email", desc: "Audio files delivered instantly to your inbox." },
    { name: "Global Porting", desc: "Keep your existing numbers with seamless porting." }
  ],
  Collaboration: [
    { name: "Video Meetings", desc: "HD video conferencing with integrated screen sharing." },
    { name: "Team Messaging", desc: "Secure instant messaging for internal collaboration." },
    { name: "Presence Info", desc: "See at a glance who is available, busy, or on a call." },
    { name: "File Sharing", desc: "Drag-and-drop document sharing within team chats." }
  ],
  Management: [
    { name: "Live Dashboard", desc: "Real-time visibility into active calls and queues." },
    { name: "Visual Route Builder", desc: "Drag-and-drop call flow management in real-time." },
    { name: "Analytics", desc: "Deep insights into call volume and performance." },
    { name: "User Portal", desc: "Empower staff to manage their own settings & rules." }
  ]
};

export const C9X = () => {
  const [activeTab, setActiveTab] = useState<'Calling' | 'Collaboration' | 'Management'>('Calling');
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="saas-page">
      <div className="sp-noise" aria-hidden />

      {/* ── HERO SECTION ── */}
      <section className="sp-section" style={{ minHeight: '95vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="sp-glow-hero" aria-hidden />
        
        <div className="sp-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '64px', alignItems: 'center' }}>
            
            <motion.div style={{ opacity: heroOpacity }}>
              <FadeIn>
                <span className="sp-eyebrow">
                  <Zap size={12} fill="currentColor" /> The Future of Voice
                </span>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h1 className="sp-h1" style={{ textAlign: 'left', margin: '0 0 24px' }}>
                  The Only Cloud<br /> Phone System<br /> 
                  <span className="sp-gradient-text">You'll Ever Need.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="sp-body-lg" style={{ textAlign: 'left', margin: '0 0 40px', maxWidth: '520px' }}>
                  C9X is a complete unified communications platform designed for 
                  modern Australian businesses. No hardware, no contracts, just crystal-clear voice.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <button className="sp-btn-primary">Book a Live Demo <ArrowRight size={16} /></button>
                  <button className="sp-btn-ghost">View Pricing <ChevronRight size={16} /></button>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} style={{ marginTop: '56px' }}>
                <div style={{ display: 'flex', gap: '32px' }}>
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: 900, color: '#fff', fontFamily: "'Clash Display', sans-serif" }}>80+</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(248,245,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Features</div>
                  </div>
                  <div style={{ width: '1px', background: 'rgba(167,139,250,0.2)' }} />
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: 900, color: '#fff', fontFamily: "'Clash Display', sans-serif" }}>$0</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(248,245,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Setup Cost</div>
                  </div>
                  <div style={{ width: '1px', background: 'rgba(167,139,250,0.2)' }} />
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: 900, color: '#fff', fontFamily: "'Clash Display', sans-serif" }}>99.99%</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(248,245,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Uptime</div>
                  </div>
                </div>
              </FadeIn>
            </motion.div>

            {/* MOCK UI PANEL */}
            <FadeIn delay={0.3} direction="none">
              <div className="sp-card" style={{ 
                padding: '32px', minHeight: '480px', position: 'relative', 
                background: 'rgba(167,139,250,0.03)',
                boxShadow: '0 0 100px -20px rgba(124,58,237,0.2)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', borderBottom: '1px solid rgba(167,139,250,0.1)', paddingBottom: '16px' }}>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '14px' }}>C9X Admin Console</div>
                    <div style={{ color: 'rgba(248,245,255,0.4)', fontSize: '12px' }}>Active System Status • Australia SE 1</div>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={14} color="#A855F7" />
                  </div>
                </div>

                {/* Stats Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(167,139,250,0.1)' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(248,245,255,0.4)', textTransform: 'uppercase', marginBottom: '4px' }}>Active Calls</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff' }}>12</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(167,139,250,0.1)' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(248,245,255,0.4)', textTransform: 'uppercase', marginBottom: '4px' }}>Inbound Waiting</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#A855F7' }}>2</div>
                  </div>
                </div>

                {/* Users List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Sarah Miller', 'James Thodey', 'Development Queue'].map((name, i) => (
                    <div key={name} style={{ 
                      padding: '12px 16px', background: 'rgba(167,139,250,0.05)', 
                      borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px',
                      border: '1px solid rgba(167,139,250,0.1)'
                    }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 2 ? '#6B21A8' : '#7C3AED', boxShadow: '0 0 10px #7C3AED' }} />
                      <span style={{ flex: 1, fontSize: '14px', fontWeight: 600, color: 'rgba(248,245,255,0.8)' }}>{name}</span>
                      <span style={{ fontSize: '12px', color: 'rgba(248,245,255,0.3)', fontFamily: 'monospace' }}>00:{12 + i * 15}</span>
                    </div>
                  ))}
                </div>

                {/* Floating tooltips */}
                <div style={{ 
                  position: 'absolute', bottom: '-20px', right: '-20px', 
                  padding: '12px 20px', background: '#7C3AED', color: '#fff',
                  borderRadius: '12px', fontWeight: 700, fontSize: '13px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}>
                  Crystal Clear Voice Guaranteed
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FEATURES TABS ── */}
      <section className="sp-section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="sp-container">
          <FadeIn className="text-center" style={{ marginBottom: '64px' }}>
            <span className="sp-eyebrow">Enterprise Features</span>
            <h2 className="sp-h2">Everything you need to <br />run a professional office.</h2>
          </FadeIn>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '56px', flexWrap: 'wrap' }}>
            {(Object.keys(FEATURES) as Array<keyof typeof FEATURES>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '10px 24px', borderRadius: '100px', fontSize: '14px', fontWeight: 700,
                  transition: 'all 0.2s', cursor: 'pointer',
                  background: activeTab === tab ? 'linear-gradient(135deg, #7C3AED, #6B21A8)' : 'rgba(167,139,250,0.08)',
                  color: activeTab === tab ? '#fff' : 'rgba(248,245,255,0.5)',
                  border: activeTab === tab ? '1px solid rgba(167,139,250,0.4)' : '1px solid rgba(167,139,250,0.15)',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {FEATURES[activeTab].map((feat, i) => (
              <FadeIn key={feat.name} delay={i * 0.1}>
                <div className="sp-card" style={{ height: '100%' }}>
                  <div style={{ 
                    width: '44px', height: '44px', borderRadius: '12px', 
                    background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(167,139,250,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px', color: '#A855F7'
                  }}>
                    {activeTab === 'Calling' && <Mic size={20} />}
                    {activeTab === 'Collaboration' && <Video size={20} />}
                    {activeTab === 'Management' && <Settings size={20} />}
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>{feat.name}</h4>
                  <p style={{ fontSize: '14px', color: 'rgba(248,245,255,0.5)', lineHeight: 1.6 }}>{feat.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── MIGRATION TIMELINE ── */}
      <section className="sp-section">
        <div className="sp-container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <FadeIn>
                <span className="sp-eyebrow">Zero-Risk Migration</span>
                <h2 className="sp-h2" style={{ textAlign: 'left', margin: '0 0 24px' }}>Switch in 48 hours. <br />No downtime.</h2>
                <p className="sp-body-lg" style={{ textAlign: 'left', fontSize: '16px' }}>
                  Our migration engineers handle the heavy lifting. We map your current workflows and recreate them 
                  perfectly inside C9X before you ever flip the switch.
                </p>
                <div style={{ marginTop: '40px' }}>
                  <button className="sp-btn-primary">Talk to an Engineer <ArrowRight size={16} /></button>
                </div>
              </FadeIn>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { step: '01', title: 'Free Audit', desc: 'We map your existing numbers, call flows, and hardware.' },
                { step: '02', title: 'System Build', desc: 'Our engineers build your PBX in the cloud without touching your current system.' },
                { step: '03', title: 'On-Site Training', desc: 'We train your staff on the apps and handsets at your office.' },
                { step: '04', title: 'Seamless Switch', desc: 'One final port and you are live. Zero calls missed.' },
              ].map((item, i) => (
                <FadeIn key={item.step} delay={i * 0.15}>
                  <div className="sp-card" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', padding: '24px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#7C3AED', opacity: 0.4, fontFamily: "'Clash Display', sans-serif" }}>{item.step}</div>
                    <div>
                      <h4 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ color: 'rgba(248,245,255,0.45)', fontSize: '14px' }}>{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="sp-section" style={{ paddingTop: '40px' }}>
        <div className="sp-container">
          <FadeIn>
            <div className="sp-cta-block" style={{ padding: '80px 40px', textAlign: 'center' }}>
              <h2 className="sp-h2" style={{ color: '#fff', marginBottom: '16px' }}>Ready to experience C9X?</h2>
              <p className="sp-body-lg" style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'rgba(255,255,255,0.7)' }}>
                Book a 20-minute live walkthrough of the platform. No pressure, just a clear look at how it helps your team.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <button className="sp-btn-primary" style={{ background: '#fff', color: '#6B21A8' }}>Book Demo Walkthrough</button>
                <button className="sp-btn-ghost" style={{ borderColor: '#fff', color: '#fff' }}>Contact Sales</button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
