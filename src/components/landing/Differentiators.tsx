import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { MapPin, ShieldCheck, FileKey, User2 } from 'lucide-react';

export const Differentiators = () => {
  const points = [
    {
      icon: <MapPin size={32} color="var(--color-primary)" />,
      title: "All-Australian Support",
      desc: "No offshore call centres. Ever."
    },
    {
      icon: <FileKey size={32} color="var(--color-primary)" />,
      title: "No Lock-In Contracts",
      desc: "Switch plans anytime, no exit fees."
    },
    {
      icon: <ShieldCheck size={32} color="var(--color-primary)" />,
      title: "Certified & Accredited",
      desc: "APNIC, NBN Accredited, TIO, ACMA."
    },
    {
      icon: <User2 size={32} color="var(--color-primary)" />,
      title: "Dedicated Account Manager",
      desc: "A real person. Not a ticket number."
    }
  ];

  return (
    <SectionWrapper style={{ background: 'var(--color-alt-bg)', padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 40px)', textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
          Why 1,000+ businesses choose C9 over Telstra and TPG
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem'
        }}>
          {points.map((p, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ 
                width: '80px', height: '80px', borderRadius: '50%', background: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                boxShadow: '0 4px 20px rgba(107,33,168,0.05)'
              }}>
                {p.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-text-dark)' }}>{p.title}</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
