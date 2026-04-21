'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InquiryContextType {
  inquiryMessage: string;
  setInquiryMessage: (message: string) => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export const InquiryProvider = ({ children }: { children: ReactNode }) => {
  const [inquiryMessage, setInquiryMessage] = useState('');

  return (
    <InquiryContext.Provider value={{ inquiryMessage, setInquiryMessage }}>
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => {
  const context = useContext(InquiryContext);
  if (context === undefined) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
};
