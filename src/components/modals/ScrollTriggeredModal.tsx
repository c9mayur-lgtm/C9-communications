'use client';

import React, { useEffect, useState } from 'react';
import { LeadCaptureModal } from './LeadCaptureModal';
import { usePathname } from 'next/navigation';

export const ScrollTriggeredModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset hasShown when navigating to a new page if we want it to show again
    // For now, let's keep it once per session to avoid annoyance
    // if you want it once per page load, uncomment the line below:
    // setHasShown(false);
  }, [pathname]);

  useEffect(() => {
    if (hasShown) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      if (sections.length < 3) return;

      // The 3rd section is index 2. 
      // We want to trigger when the user has PASSED 3 sections.
      // That means the 4th section (index 3) is visible or the user has scrolled 
      // past the bottom of the 3rd section.
      
      const thirdSection = sections[2];
      if (!thirdSection) return;

      const rect = thirdSection.getBoundingClientRect();
      
      // If the bottom of the 3rd section is above the top of the viewport
      // OR if we want to be more lenient, if the top of the 3rd section is halfway up.
      // "passes 3 sections" usually means the 3rd one is gone.
      if (rect.bottom < 0) {
        setIsOpen(true);
        setHasShown(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  return (
    <LeadCaptureModal 
      isOpen={isOpen} 
      onOpenChange={setIsOpen} 
      config={{
        leftBg: 'bg-gradient-to-br from-[#0c1024] to-[#5D00D6]',
        title: 'Connectivity Operational Audit',
        subtitle: 'The 2026 Enterprise Governance Framework',
        image: '/c9_connectivity_report_cover_1778738161821.png',
        formTitle: 'Wait! Don\'t miss this.',
        formSubtitle: 'You\'ve reached our deep-dive governance layers. Download the framework we use to manage 500+ enterprise sites.',
        ctaLabel: 'Download Framework'
      }}
    />
  );
};
