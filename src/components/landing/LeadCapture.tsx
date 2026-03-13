import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';

export const LeadCapture = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    if (!fd.get('name') || !fd.get('email') || !fd.get('phone')) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    // Mock submission
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" style={{ 
      background: 'var(--color-hero-bg)', color: 'white', padding: '8rem 0', 
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Radial Background Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 60%)',
        opacity: 0.3, filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>
          Book Your Free Business Telco Audit
        </h2>
        
        <p style={{ color: 'var(--color-pale-tint)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          We'll review your current costs, identify savings, and propose a better solution — at no charge, no obligation.
        </p>

        {submitted ? (
          <div style={{ background: 'var(--c9-surface)', padding: '3rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-accent)' }}>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>Audit Requested Successfully</h3>
            <p style={{ color: 'var(--color-pale-tint)' }}>We'll call you within 2 business hours. Check your inbox for our confirmation email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ 
            background: 'var(--c9-surface)', padding: '2rem', backdropFilter: 'blur(10px)',
            borderRadius: 'var(--radius-md)', border: '1px solid var(--c9-surface)',
            display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left'
          }}>
            <div className="form-grid">
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-pale-tint)', }}>Full Name</label>
                <input name="name" type="text" placeholder="John Doe" className="form-input" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-pale-tint)', }}>Business Email</label>
                <input name="email" type="email" placeholder="john@company.com" className="form-input" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-pale-tint)', }}>Phone Number</label>
                <input name="phone" type="tel" placeholder="0400 000 000" className="form-input" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-pale-tint)', }}>Current Provider</label>
                <select name="provider" className="form-input">
                  <option value="Telstra">Telstra</option>
                  <option value="Optus">Optus</option>
                  <option value="TPG">TPG</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-pale-tint)', }}>Estimated Monthly Spend</label>
                <select name="spend" className="form-input">
                  <option value="Under $200">Under $200</option>
                  <option value="$200–$500">$200–$500</option>
                  <option value="$500–$1000">$500–$1000</option>
                  <option value="$1000+">$1000+</option>
                </select>
              </div>
            </div>

            {error && <p style={{ color: 'var(--color-accent)', margin: 0 }}>{error}</p>}

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Get My Free Audit →
            </button>
            <p style={{ textAlign: 'center', color: 'var(--color-light-accent)', margin: 0, marginTop: '1rem' }}>
              We respond within 2 business hours. No spam, no lock-in.
            </p>
          </form>
        )}
      </div>

      <style>{`
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media(max-width: 600px) {
          .form-grid { grid-template-columns: 1fr; }
        }
        .form-input {
          width: 100%;
          padding: 0.875rem 1rem;
          background: var(--c9-surface);
          border: 1px solid var(--c9-surface);
          border-radius: var(--radius-sm);
          color: white;
          font-family: var(--font-body);
          transition: all 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-accent);
          background: var(--c9-surface);
        }
        select.form-input option {
          background: var(--color-hero-bg);
          color: white;
        }
      `}</style>
    </SectionWrapper>
  );
};
