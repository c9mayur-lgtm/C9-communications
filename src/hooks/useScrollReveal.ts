import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Only run if reduced motion is not preferred
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Unobserve after animating once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.fade-up, .fade-in-scale, .line-reveal, .stagger-child');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
