
import { SectionWrapper } from './SectionWrapper';
import { PhoneOff, HeadphonesIcon, FileX } from 'lucide-react';

export const ProblemSolution = () => {
  const items = [
    {
      icon: <PhoneOff size={28} color="var(--color-primary)" />,
      problem: "Overpaying for legacy ISDN systems",
      solution: "C9X cloud phone from $20/mo — zero hardware costs"
    },
    {
      icon: <HeadphonesIcon size={28} color="var(--color-primary)" />,
      problem: "Offshore support with endless wait times",
      solution: "All-Australian team ready to help instantly"
    },
    {
      icon: <FileX size={28} color="var(--color-primary)" />,
      problem: "Trapped in rigid, long-term contracts",
      solution: "No lock-in contracts with C9 — ever"
    }
  ];

  return (
    <SectionWrapper style={{ background: 'var(--color-alt-bg)', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Still paying for a phone system that holds your business back?
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'
        }}>
          {items.map((item, idx) => (
            <div key={idx} className="glass-card" style={{
              background: 'white', border: '1px solid var(--color-pale-tint)',
              padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
              borderRadius: 'var(--radius-md)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '12px',
                background: 'var(--color-alt-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {item.icon}
              </div>

              <div>
                <p style={{
                  color: 'var(--color-text-dark)', fontWeight: 700,
                  fontSize: '1.25rem', marginBottom: '1rem'
                }}>
                  {item.problem}
                </p>
                
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                  →
                </div>
                
                <p style={{ color: 'var(--color-text-mid)', fontWeight: 500, fontSize: '1.1rem' }}>
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
