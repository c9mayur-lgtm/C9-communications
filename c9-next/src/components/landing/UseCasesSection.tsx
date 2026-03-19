'use client';

import { FadeIn } from '../shared/FadeIn';

export const UseCasesSection = () => {
  const capabilities = [
    {
      title: 'Managed IT Services',
      desc: 'Proactive IT management designed to keep systems running reliably. We monitor, maintain, and support your infrastructure so your team can focus on running the business.',
    },
    {
      title: 'Business Connectivity & Telecommunications',
      desc: 'Reliable internet and communication systems built for modern operations. We deliver business connectivity, cloud phone systems, and communication platforms organisations rely on every day.',
    },
    {
      title: 'Modern Workplace Solutions',
      desc: 'Technology that enables teams to collaborate and work effectively from anywhere. From cloud platforms to secure workplace tools, we help organisations build flexible digital work environments.',
    },
  ];

  return (
    <section className="sp-section" style={{ background: 'hsl(var(--background))' }}>
      <div className="sp-container">
        <FadeIn style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="sp-eyebrow">Core Capabilities</span>
          <h2 className="sp-h2">
            How Australian Enterprises <span className="sp-gradient-text">Use C9</span>
          </h2>
          <p className="sp-body-lg" style={{ margin: '16px auto 0', textAlign: 'center', maxWidth: '700px' }}>
            Modern organisations depend on reliable technology every day. But many businesses still struggle with fragmented systems and unreliable infrastructure. We help organisations simplify their infrastructure with integrated technology solutions.
          </p>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.title} delay={i * 0.1}>
              <div
                style={{
                  height: '100%',
                  background: 'var(--c9-surface)',
                  border: '1px solid var(--c9-border)',
                  borderRadius: '16px',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'hsl(var(--foreground))' }}>
                  {cap.title}
                </h3>
                <p style={{ color: 'var(--c9-muted)', lineHeight: 1.6, margin: 0 }}>
                  {cap.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
