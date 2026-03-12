import { useEffect, useState } from 'react';
import { Hero } from '../components/landing/Hero';
import { TrustStrip } from '../components/landing/TrustStrip';
import { ProblemSolution } from '../components/landing/ProblemSolution';
import { ServicesGrid } from '../components/landing/ServicesGrid';
import { C9XSpotlight } from '../components/landing/C9XSpotlight';
import { CaseStudies } from '../components/landing/CaseStudies';
import { Differentiators } from '../components/landing/Differentiators';
import { LeadCapture } from '../components/landing/LeadCapture';
import { AccreditationStrip } from '../components/landing/FooterInfo';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Landing = () => {
  useScrollReveal();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const contact = document.getElementById('contact');

      let pastHero = false;
      let beforeContact = true;

      if (hero) pastHero = window.scrollY > hero.offsetHeight;
      if (contact) beforeContact = window.scrollY + window.innerHeight < contact.offsetTop + 100;

      setShowSticky(pastHero && beforeContact);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      <main>
        <div id="hero"><Hero /></div>
        <TrustStrip />
        <ProblemSolution />
        <ServicesGrid />
        <C9XSpotlight />
        <CaseStudies />
        <Differentiators />
        <LeadCapture />
        <AccreditationStrip />
      </main>

      <div className={`mobile-sticky-cta ${showSticky ? 'visible' : ''}`}>
         <a href="#contact" style={{ display: 'block', textDecoration: 'none' }}>
           <button className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
             Book a Free Audit
           </button>
         </a>
      </div>
    </div>
  );
};
