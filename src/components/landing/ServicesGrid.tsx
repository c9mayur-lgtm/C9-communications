
import { SectionWrapper } from './SectionWrapper';
import { PhoneCall, Wifi, Laptop, Cloud } from 'lucide-react';

export const ServicesGrid = () => {
  const services = [
    {
      title: "Voice & VoIP",
      desc: "Enterprise-grade cloud PBX without the enterprise price tag.",
      icon: <PhoneCall size={24} color="var(--color-primary)" />
    },
    {
      title: "Business NBN",
      desc: "Fast, reliable data connections built specifically for business needs.",
      icon: <Wifi size={24} color="var(--color-primary)" />
    },
    {
      title: "IT Services",
      desc: "Proactive managed IT to keep your team working without interruption.",
      icon: <Laptop size={24} color="var(--color-primary)" />
    },
    {
      title: "Cloud & More",
      desc: "Secure cloud hosting, Microsoft 365, and scalable infrastructure.",
      icon: <Cloud size={24} color="var(--color-primary)" />
    }
  ];

  return (
    <SectionWrapper id="solutions" style={{ background: 'var(--color-body-bg)', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="mono-tag" style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>WHAT WE DO</p>
          <h2 style={{ }}>Everything your business needs. One provider.</h2>
        </div>

        <div className="grid-auto-small" style={{ gap: '1.5rem' }}>
          {services.map((svc, i) => (
            <div key={i} className="glass-card-light" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '1.5rem' }}>{svc.icon}</div>
              <h3 style={{ marginBottom: '0.75rem' }}>{svc.title}</h3>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', flex: 1 }}>{svc.desc}</p>
              
              <a href="#" style={{ 
                color: 'var(--color-secondary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center' 
              }}>
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
