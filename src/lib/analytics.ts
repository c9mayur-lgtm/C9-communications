// lib/analytics.ts

export const trackEvent = (eventName: string) => {
  // Send to analytics provider (Google Analytics, Mixpanel, etc.)
  console.log(`[Analytics] Track Event: ${eventName}`);
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      event_category: 'cta',
      event_label: eventName,
      timestamp: new Date().toISOString()
    });
  }
};
