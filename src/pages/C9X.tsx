import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const C9X = () => {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState('Calling');
  const [showSticky, setShowSticky] = useState(false);
  const [animateCounters, setAnimateCounters] = useState(false);

  useEffect(() => {
    setAnimateCounters(true);
    
    const handleScroll = () => {
      const hero = document.getElementById('c9x-hero');
      const contact = document.getElementById('demo-form');

      let pastHero = false;
      let beforeContact = true;

      if (hero) pastHero = window.scrollY > hero.offsetHeight;
      if (contact) beforeContact = window.scrollY + window.innerHeight < contact.offsetTop + 100;

      setShowSticky(pastHero && beforeContact);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = {
    Calling: [
      { name: "Hunt Groups", desc: "Ring multiple users simultaneously or sequentially." },
      { name: "Call Queues", desc: "Hold inbound callers with custom greetings." },
      { name: "Auto-Attendant (IVR)", desc: "Press 1 for Sales, 2 for Support." },
      { name: "Call Recording", desc: "Automatic or on-demand recording compliance." },
      { name: "Call Parking", desc: "Place a call on hold and retrieve from any phone." },
      { name: "Voicemail-to-Email", desc: "Audio files delivered straight to your inbox." }
    ],
    Management: [
      { name: "Live Dashboard", desc: "Real-time view of active calls and queue status." },
      { name: "User Portal", desc: "Staff manage their own forwarding rules." },
      { name: "Number Management", desc: "Route DIDs instantly with a visual builder." },
      { name: "Device Auto-Provision", desc: "Plug in IP phones and they configure instantly." },
      { name: "Time of Day Routing", desc: "Different rules for after-hours and holidays." },
      { name: "Multi-Site Support", desc: "Manage multiple branch offices from one login." }
    ],
    Collaboration: [
      { name: "Internal Extension Dialling", desc: "Reach anyone in your company instantly." },
      { name: "Team Messaging", desc: "Secure chat built directly into the app." },
      { name: "File Sharing", desc: "Send documents inside group or direct chats." },
      { name: "Video Conferencing", desc: "HD video meetings with screen sharing." },
      { name: "Presence Indication", desc: "See who is available, busy, or offline." },
      { name: "Shared Directories", desc: "Company-wide contacts synced everywhere." }
    ],
    Compliance: [
      { name: "Encrypted Voice", desc: "SRTP and TLS encryption on every call." },
      { name: "Data Sovereignty", desc: "All data and recordings stored securely within Australia." },
      { name: "Compliance Archiving", desc: "Immutable storage rules for financial services." },
      { name: "Emergency Location", desc: "Accurate physical dispatch locations." },
      { name: "Role-Based Access", desc: "Granular permissions for managers vs. staff." },
      { name: "Audit Logs", desc: "Track every configuration change." }
    ],
    Analytics: [
      { name: "Historical Reports", desc: "Analyse call volume over any time period." },
      { name: "Abandoned Call Tracking", desc: "See exactly how many leads hung up." },
      { name: "Agent Performance", desc: "Track answer times and talk duration." },
      { name: "Custom Wallboards", desc: "Display live metrics on office TVs." },
      { name: "Scheduled Reports", desc: "Get weekly PDFs delivered to management." },
      { name: "Export & API", desc: "Push CSV data or link live to PowerBI." }
    ]
  };

  return (
    <div style={{ backgroundColor: 'var(--c9-white)' }}>
      {/* SECTION 1 - HERO */}
      <section id="c9x-hero" className="dark-section" style={{ minHeight: '100vh', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(var(--c9-accent) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="label fade-up" style={{ color: 'var(--c9-accent)', marginBottom: '1.5rem' }}>
              C9X PLATFORM
            </div>
            <h1 className="fade-up" style={{ animationDelay: '0.1s', marginBottom: '1.5rem' }}>
              One Platform. Every Call. Zero Hardware.
            </h1>
            <p className="body-lg fade-up" style={{ color: 'var(--c9-pale)', marginBottom: '3rem', animationDelay: '0.2s', maxWidth: '500px' }}>
              C9X is Australia's most complete cloud phone system — 80+ features, no upfront costs, and a migration your team won't even notice.
            </p>
            
            <div className="fade-up" style={{ display: 'flex', gap: '3rem', marginBottom: '3rem', animationDelay: '0.3s' }}>
              <div>
                <div style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', color: 'var(--c9-accent)', fontWeight: 700 }}>
                  <span className={animateCounters ? 'count-80' : ''}>80</span>+
                </div>
                <div className="label" style={{ color: 'var(--c9-muted)' }}>Features</div>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', color: 'var(--c9-accent)', fontWeight: 700 }}>
                  <span className={animateCounters ? 'count-99' : ''}>99.99</span>%
                </div>
                <div className="label" style={{ color: 'var(--c9-muted)' }}>Uptime SLA</div>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', color: 'var(--c9-accent)', fontWeight: 700 }}>
                  $<span className={animateCounters ? 'count-0' : ''}>0</span>
                </div>
                <div className="label" style={{ color: 'var(--c9-muted)' }}>Setup Cost</div>
              </div>
            </div>

            <div className="fade-up" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animationDelay: '0.4s' }}>
              <button className="btn-primary">Book a Live Demo →</button>
              <button className="btn-ghost btn-ghost-dark">Download Tech Spec</button>
            </div>
          </div>

          <div className="fade-up" style={{ position: 'relative', animationDelay: '0.3s' }}>
             {/* Mock UI Panel */}
             <div className="mock-panel" style={{
               background: 'rgba(26,0,58,0.6)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
               border: '1px solid rgba(168,85,247,0.2)', borderRadius: '16px',
               padding: '2rem', boxShadow: '0 40px 120px rgba(109,33,168,0.4)',
               transition: 'transform 0.3s, box-shadow 0.3s', minHeight: '400px', display: 'flex', flexDirection: 'column'
             }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '14px', color: 'var(--c9-pale)', fontWeight: 500 }}>14 users online</div>
                  <div style={{ fontSize: '14px', color: 'var(--c9-accent)', fontWeight: 600 }}>3 calls active</div>
                </div>

                <div style={{ flex: 1, display: 'flex', gap: '1.5rem' }}>
                   <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                     {/* Call rows */}
                     <div className="mock-call">
                       <div className="mock-indicator green" />
                       <div className="mock-name">Sarah Jenkins</div>
                       <div className="mock-timer timer-tick">01:42</div>
                     </div>
                     <div className="mock-call">
                       <div className="mock-indicator amber" />
                       <div className="mock-name">David Lee</div>
                       <div className="mock-timer timer-tick-2">00:15</div>
                     </div>
                     <div className="mock-call">
                       <div className="mock-indicator green" />
                       <div className="mock-name">Support Queue</div>
                       <div className="mock-timer timer-tick-3">04:18</div>
                     </div>
                   </div>
                   <div style={{ width: '40%', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }} />
                </div>

                {/* Bottom badges */}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
                   <div className="mock-badge">Call Queue</div>
                   <div className="mock-badge">IVR</div>
                   <div className="mock-badge">Record</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - FEATURE CATEGORIES */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '4rem', flexWrap: 'wrap' }}>
            {Object.keys(features).map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ 
                  padding: '8px 24px', borderRadius: '9999px', fontSize: '15px', fontWeight: 600,
                  transition: '0.15s ease',
                  background: activeTab === tab ? 'var(--c9-primary)' : 'var(--c9-surface)',
                  color: activeTab === tab ? 'white' : 'var(--c9-primary)'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {features[activeTab as keyof typeof features].map((feat, i) => (
              <div 
                key={`${activeTab}-${i}`}
                className="stagger-child fade-up"
                style={{
                  padding: '2rem', border: '1px solid var(--c9-surface)', borderRadius: '16px',
                  background: 'white', transition: 'all 0.2s ease', 
                  animationDelay: `${i * 0.1}s`, cursor: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'var(--c9-accent)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(109,33,168,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--c9-surface)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ 
                  width: '56px', height: '56px', borderRadius: '12px', marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, var(--c9-surface), var(--c9-pale))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'var(--c9-primary)' }} />
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>{feat.name}</h4>
                <p style={{ color: 'var(--c9-muted)' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - PLAN COMPARISON */}
      <section style={{ backgroundColor: 'var(--c9-surface)', padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 className="fade-up">Two plans. No surprises. Cancel any time.</h2>
             <p className="body-lg fade-up" style={{ color: 'var(--c9-muted)', marginTop: '1rem' }}>
               Choose the plan that fits your team today. You can upgrade at any time — no contracts, no exit fees.
             </p>
          </div>

          <div className="fade-line fade-up" style={{ overflowX: 'auto', background: 'white', borderRadius: '16px', border: '1px solid var(--c9-border)', boxShadow: '0 20px 40px rgba(109,33,168,0.05)' }}>
            <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr>
                  <th style={{ padding: '2rem', background: 'white', position: 'sticky', top: 0, zIndex: 10 }}>
                    <h3 style={{ fontSize: '24px' }}>Compare Features</h3>
                  </th>
                  <th style={{ padding: '2rem', background: 'white', position: 'sticky', top: 0, zIndex: 10, borderLeft: '1px solid var(--c9-surface)' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '0.5rem' }}>Basic</h3>
                    <div style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', color: 'var(--c9-primary)', fontWeight: 700 }}>$20<span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--c9-muted)' }}>/user/mo</span></div>
                  </th>
                  <th style={{ padding: '2rem', background: 'var(--c9-primary)', color: 'white', position: 'sticky', top: 0, zIndex: 10, borderLeft: '1px solid var(--c9-surface)' }}>
                    <div className="label" style={{ color: 'var(--c9-accent)', marginBottom: '0.5rem' }}>MOST POPULAR</div>
                    <h3 style={{ fontSize: '24px', marginBottom: '0.5rem', color: 'white' }}>Ultimate</h3>
                    <div style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>$45<span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--c9-pale)' }}>/user/mo</span></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Unlimited AU calls", "✓", "✓"],
                  ["Auto-Attendant (IVR)", "✓", "✓"],
                  ["Call Queues", "✓", "✓"],
                  ["Call Recording", "30 days", "Unlimited"],
                  ["Voicemail transcription", "—", "✓"],
                  ["CRM Integrations", "Basic", "Advanced + API"],
                  ["Analytics & Reporting", "Standard", "Advanced"],
                  ["Microsoft Teams integration", "—", "✓"],
                  ["Video Conferencing", "—", "✓ (up to 100 participants)"],
                  ["SLA uptime guarantee", "99.9%", "99.99%"],
                  ["Support", "Business hours", "24/7 Priority"],
                  ["Setup & onboarding", "Self-serve", "Dedicated AM"]
                ].map((row, i) => (
                  <tr key={i} className="plan-row">
                    <td style={{ padding: '1.25rem 2rem', borderTop: '1px solid var(--c9-surface)', fontWeight: 500 }}>{row[0]}</td>
                    <td style={{ padding: '1.25rem 2rem', borderTop: '1px solid var(--c9-surface)', borderLeft: '1px solid var(--c9-surface)', color: row[1] === '✓' ? '#00C27C' : 'var(--c9-muted)' }}>
                      {row[1] === '—' ? <span style={{color: '#9CA3AF'}}>—</span> : row[1]}
                    </td>
                    <td style={{ padding: '1.25rem 2rem', borderTop: '1px solid var(--c9-surface)', borderLeft: '1px solid var(--c9-surface)', background: 'rgba(107,33,168,0.02)', color: row[2].toString().includes('✓') ? '#00C27C' : 'var(--c9-text)' }}>
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="fade-up" style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
             <a href="#" style={{ fontWeight: 600, color: 'var(--c9-primary)' }}>Need more than 50 users? Get enterprise pricing →</a>
             <a href="#demo-form" style={{ fontWeight: 500, color: 'var(--c9-muted)' }}>Not sure which plan? We'll recommend the right one.</a>
          </div>
        </div>
      </section>

      {/* SECTION 4 - INTEGRATIONS */}
      <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 className="fade-up" style={{ marginBottom: '1rem' }}>Works with the tools your team already uses.</h3>
          <p className="fade-up body-lg" style={{ color: 'var(--c9-muted)', marginBottom: '3rem' }}>Native integrations with 40+ business applications.</p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { t: "M365", c: "#0078D4", bg: "#E5F2FB" },
              { t: "SF", c: "#00A1E0", bg: "#E5F6FC" },
              { t: "HubSpot", c: "#FF7A59", bg: "#FFF2EF" },
              { t: "Slack", c: "#4A154B", bg: "#F4EBF4" },
              { t: "Zoom", c: "#2D8CFF", bg: "#EAF3FF" },
              { t: "Zendesk", c: "#03363D", bg: "#E6EBEC" },
              { t: "Google Workspace", c: "#EA4335", bg: "#FCECEB" },
              { t: "Zapier", c: "#FF4A00", bg: "#FFEEE5" },
              { t: "Pipedrive", c: "#00AA55", bg: "#E5F6EE" },
              { t: "Zoho", c: "#D6000F", bg: "#FBE5E7" },
              { t: "Freshdesk", c: "#12344D", bg: "#E7EAEB" },
              { t: "Xero", c: "#13B5EA", bg: "#E7F7FD" }
            ].map((b, i) => (
              <div 
                key={i} 
                className="stagger-child fade-up integration-badge"
                style={{
                  padding: '12px 24px', borderRadius: '9999px', background: b.bg, color: b.c, 
                  fontWeight: 600, fontSize: '15px', animationDelay: `${i * 0.06}s`,
                  transition: '0.2s cubic-bezier(0.16,1,0.3,1)'
                }}
              >
                {b.t}
              </div>
            ))}
            <div className="fade-up integration-badge" style={{ padding: '12px 24px', color: 'var(--c9-muted)', fontWeight: 500, animationDelay: '0.8s' }}>
              ... and 40 more
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - HOW MIGRATION WORKS */}
      <section className="dark-section" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="fade-up" style={{ marginBottom: '1rem' }}>Switch to C9X without missing a call.</h2>
            <p className="body-lg fade-up" style={{ color: 'var(--c9-pale)', maxWidth: '600px', margin: '0 auto' }}>
              We handle everything — number porting, device setup, and staff training. Most businesses are live in under 48 hours.
            </p>
          </div>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem' }} className="timeline-container fade-up">
            {/* SVG dashed line drawing */}
            <svg style={{ position: 'absolute', top: '24px', left: 0, width: '100%', height: '4px', zIndex: 0 }} className="desktop-line" preserveAspectRatio="none" viewBox="0 0 100 4">
              <line x1="0" y1="2" x2="100" y2="2" stroke="var(--c9-accent)" strokeWidth="2" strokeDasharray="4 4" strokeDashoffset="400" className="line-grow" />
            </svg>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', position: 'relative', zIndex: 10 }}>
              {[
                { title: "Free consultation", desc: "We assess your current setup" },
                { title: "Configure your system", desc: "We build your call flows for you" },
                { title: "Port your numbers", desc: "Your existing numbers transfer seamlessly" },
                { title: "Go live", desc: "Usually within 48 business hours" }
              ].map((s, i) => (
                <div key={i} className="stagger-child" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div style={{ 
                    width: '48px', height: '48px', borderRadius: '50%', background: 'var(--c9-accent)', 
                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '1.5rem',
                    boxShadow: '0 0 0 8px var(--c9-hero-bg)'
                  }}>
                    {i+1}
                  </div>
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{s.title}</h4>
                  <p style={{ color: 'var(--c9-pale)', fontSize: '15px' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up" style={{ textAlign: 'center', marginTop: '6rem' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--c9-light)', fontSize: '18px' }}>
              "Our team does the heavy lifting. You just answer calls."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 - MID-PAGE DEMO CTA */}
      <section id="demo-form" style={{ backgroundColor: 'var(--c9-surface)', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '60vw', height: '60vw', background: 'radial-gradient(circle, var(--c9-pale) 0%, transparent 60%)',
          opacity: 0.3, pointerEvents: 'none', zIndex: 0
        }} />
        
        <div className="container fade-up" style={{ position: 'relative', zIndex: 10, maxWidth: '700px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>See C9X live before you commit.</h2>
          <p className="body-lg" style={{ color: 'var(--c9-muted)', marginBottom: '3rem' }}>
            Book a 20-minute demo and we'll show you exactly how it would work for your business. No sales pressure.
          </p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'white', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 20px 40px rgba(109,33,168,0.05)', textAlign: 'left' }} onSubmit={(e)=>e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '14px', color: 'var(--c9-text)' }}>Full Name</label>
                <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--c9-pale)', borderRadius: '8px', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '14px', color: 'var(--c9-text)' }}>Work Email</label>
                <input type="email" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--c9-pale)', borderRadius: '8px', fontFamily: 'inherit' }} />
              </div>
            </div>
            <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Book My Free Demo →</button>
            <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--c9-muted)', marginTop: '1rem' }}>
              We'll confirm within 2 business hours. No commitment required.
            </p>
          </form>
        </div>
      </section>

      {/* SECTION 7 - SOCIAL PROOF */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { q: "We tested three competitors before choosing C9X. It was the only platform that made complex call routing genuinely easy for our non-technical managers.", n: "Michelle Tran", c: "Future Retail", r: "Operations Director" },
              { q: "The setup was unbelievable. The team configured 40 users and built our entire IVR matrix before we even received the hardware. Plugged it in, and we were live.", n: "Craig Davies", c: "Davies Logistics", r: "Managing Director" },
              { q: "We've saved almost 40% natively against our old Telstra enterprise system, but honestly, the biggest win is the analytics. I finally know how many leads we drop.", n: "Sarah Kenning", c: "Acorn Health", r: "Practice Manager" }
            ].map((t, i) => (
              <div key={i} className="stagger-child fade-up shadow-card" style={{ 
                background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid var(--c9-pale)', borderRadius: '16px', padding: '2.5rem',
                display: 'flex', flexDirection: 'column', animationDelay: `${i * 0.15}s`, transition: '0.2s ease',
                cursor: 'none'
              }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem', color: '#F59E0B' }}>
                  ★★★★★
                </div>
                <p style={{ fontStyle: 'italic', fontSize: '16px', flex: 1, marginBottom: '2rem' }}>"{t.q}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    width: '40px', height: '40px', borderRadius: '50%', 
                    background: 'linear-gradient(135deg, var(--c9-accent), var(--c9-primary))',
                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontFamily: 'var(--font-heading)'
                  }}>
                    {t.n.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--c9-text)' }}>{t.n}</div>
                    <div className="label" style={{ color: 'var(--c9-muted)', marginTop: '2px', textTransform: 'none', letterSpacing: 'normal' }}>
                      {t.c} — {t.r}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - STICKY MOBILE CTA */}
      <div className={`mobile-sticky-cta ${showSticky ? 'visible' : ''}`} style={{ 
        background: 'var(--c9-hero-bg)', borderTop: '1px solid rgba(168,85,247,0.3)', 
        height: '72px', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' 
      }}>
         <span style={{ color: 'white', fontWeight: 600 }}>C9X from $20/user/mo</span>
         <a href="#demo-form"><button className="btn-primary" style={{ padding: '0 1.5rem' }}>Book a Demo</button></a>
      </div>

      <style>{`
        /* CSS Counters logic */
        @keyframes count-up-80 { from { --num: 0; } to { --num: 80; } }
        @keyframes count-up-99 { from { --num: 0; } to { --num: 99.99; } }
        @keyframes count-up-0 { from { --num: 0; } to { --num: 0; } }
        
        .count-80::after { content: "80"; animation: count-up-80 2s; }
        .count-14::after { content: "14"; }
        .count-3::after { content: "3"; }

        /* Timers */
        @keyframes tick-timer { 
          0% { content: "01:42"; } 33% { content: "01:43"; } 66% { content: "01:44"; } 100% { content: "01:45"; }
        }
        @keyframes tick-timer-2 { 
          0% { content: "00:15"; } 33% { content: "00:16"; } 66% { content: "00:17"; } 100% { content: "00:18"; }
        }
        .timer-tick::after { content: "01:42"; animation: tick-timer 3s infinite steps(1); }
        .timer-tick-2::after { content: "00:15"; animation: tick-timer-2 3s infinite steps(1); }
        .timer-tick-3::after { content: "04:18"; }

        .mock-panel:hover {
          transform: translateY(-4px);
          box-shadow: 0 50px 140px rgba(109,33,168,0.5);
        }

        .mock-call {
          background: rgba(255,255,255,0.05); padding: 12px 16px; border-radius: 8px;
          display: flex; align-items: center; gap: 12px; border: 1px solid rgba(255,255,255,0.02);
        }
        .mock-indicator {
          width: 8px; height: 8px; border-radius: 50%;
        }
        .mock-indicator.green { background: #00C27C; box-shadow: 0 0 8px rgba(0,194,124,0.4); }
        .mock-indicator.amber { background: #F59E0B; box-shadow: 0 0 8px rgba(245,158,11,0.4); }
        .mock-name { color: white; font-size: 14px; font-weight: 500; flex: 1; }
        .mock-timer { color: var(--c9-muted); font-family: var(--font-mono); font-size: 13px; }

        .mock-badge {
          padding: 6px 14px; background: rgba(255,255,255,0.05); border-radius: 9999px;
          color: var(--c9-pale); font-size: 12px; font-weight: 500;
        }

        .plan-row:hover td { background: var(--c9-surface) !important; cursor: none; }
        
        .integration-badge:hover { transform: scale(1.08) !important; box-shadow: 0 8px 16px rgba(0,0,0,0.1); cursor: none;}
        
        .shadow-card:hover { transform: translateY(-4px) !important; border-color: var(--c9-light) !important; }

        @keyframes draw-line { to { stroke-dashoffset: 0; } }
        .timeline-container.in-view .line-grow { animation: draw-line 1.5s ease forwards; }
        
        @media(max-width: 768px) {
          .desktop-line { display: none; }
        }
      `}</style>
    </div>
  );
};
