'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Audience = 'startup' | 'business' | 'enterprise';

interface AudienceContextType {
  audience: Audience;
  setAudience: (audience: Audience) => void;
}

const AudienceContext = createContext<AudienceContextType | undefined>(undefined);

export const AudienceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [audience, setAudienceState] = useState<Audience>('business');
  const pathname = usePathname();
  const router = useRouter();

  // Sync with URL on load and path change
  useEffect(() => {
    if (pathname.includes('/startups')) {
      setAudienceState('startup');
    } else if (pathname.includes('/enterprise')) {
      setAudienceState('enterprise');
    } else if (pathname.includes('/business')) {
      setAudienceState('business');
    } else {
      // Default or persist if on other pages
      const savedAudience = localStorage.getItem('c9_audience') as Audience;
      if (savedAudience && ['startup', 'business', 'enterprise'].includes(savedAudience)) {
        setAudienceState(savedAudience);
      }
    }
  }, [pathname]);

  const setAudience = (newAudience: Audience) => {
    setAudienceState(newAudience);
    localStorage.setItem('c9_audience', newAudience);
    
    // Navigate based on selection if not already on the correct path
    const targetPath = newAudience === 'startup' ? '/startups' : 
                       newAudience === 'enterprise' ? '/enterprise' : '/business';
    
    if (!pathname.includes(targetPath)) {
      router.push(targetPath);
    }
  };

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
};

export const useAudience = () => {
  const context = useContext(AudienceContext);
  if (context === undefined) {
    throw new Error('useAudience must be used within an AudienceProvider');
  }
  return context;
};
