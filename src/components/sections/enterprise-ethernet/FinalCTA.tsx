'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

export default function FinalCTA() {
  const { setInquiryMessage } = useInquiry();

  const handleQuoteClick = () => {
    setInquiryMessage("I'm ready for an nbn™ Enterprise Ethernet quote for my business locations.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden border-t border-gray-100" >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="max-w-[1000px] mx-auto text-center">
          
          <h2 className="c9-section-heading lg: mb-10">
            Ready to connect your business with <span className="text-[#5D00D6]">enterprise-grade nbn™?</span>
          </h2>
          
          <p className="text-[18px] md:text-[21px] text-slate-600 mb-14 leading-relaxed font-normal max-w-[800px] mx-auto">
            Tell us your sites, your speed requirements, and your class of service preference — C9 will run a site qualification and return a tailored proposal within one business day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <Button 
              size="lg" 
              onClick={handleQuoteClick}
              className="w-full sm:w-auto bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold h-16 px-12 rounded-full shadow-2xl shadow-[#5D00D6]/30 transition-all text-[17px]"
            >
              Get an Enterprise Ethernet Quote 
            </Button>
            <a 
              href="tel:1800000299"
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-slate-200 text-[#1A1A2E] hover:bg-slate-50 rounded-full transition-all no-underline bg-white h-14 px-8 text-[15px] font-bold"
            >
              <Phone size={18} className="mr-2" /> Call 1800 000 299
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 border-t border-slate-100 pt-12 max-w-[700px] mx-auto">
            {[
              "Site qualification within 1 business day",
              "Symmetrical speeds 50/50 to 1000/1000 Mbps",
              "$0 fibre install on 36-month contracts",
              "AU-managed technical team"
            ].map((item, i) => (
               <div key={i} className="flex items-center justify-start gap-3">
                  <CheckCircle size={12} className="text-[#5D00D6] shrink-0" />
                  <span className="text-[14px] md:text-[14px] font-bold text-slate-500 tracking-tight leading-tight">{item}</span>
               </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

