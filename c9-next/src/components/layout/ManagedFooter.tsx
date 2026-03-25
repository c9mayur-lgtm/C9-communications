import React from 'react';
import Link from 'next/link';
import { Linkedin, Facebook, Instagram, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ManagedFooter = () => {
  return (
    <footer className="bg-white text-text-primary pt-24 pb-12 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20 pb-16 border-b border-gray-100">
           <Link href="/managed" className="flex items-center gap-1 shrink-0 group">
              <span className="text-3xl font-black text-text-primary tracking-tighter transition-transform group-hover:scale-105">
                <span className="text-brand-purple">9</span>communications
              </span>
           </Link>
           
           <div className="flex gap-10">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-text-secondary hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
           </div>
        </div>
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-16 mb-24">
           
           {/* Managed IT */}
           <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans opacity-40">Managed IT</h4>
              <ul className="flex flex-col gap-4 text-sm font-bold font-syne tracking-tight">
                 {['Helpdesk', 'Outsourcing', 'Infrastructure', 'Cloud', 'Cybersecurity', 'Backup & DR'].map(item => (
                    <li key={item}><a href="#" className="hover:text-brand-purple transition-colors">{item}</a></li>
                 ))}
              </ul>
           </div>
           
           {/* Modern Workplace */}
           <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans opacity-40">Modern Workplace</h4>
              <ul className="flex flex-col gap-4 text-sm font-bold font-syne tracking-tight">
                 {['M365', 'Secure Remote Work', 'EDR', 'Smart Board', 'SaaS Backup', 'Compliance'].map(item => (
                   <li key={item}><a href="#" className="hover:text-brand-purple transition-colors">{item}</a></li>
                 ))}
              </ul>
           </div>
           
           {/* Telco */}
           <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans opacity-40">Telco</h4>
              <ul className="flex flex-col gap-4 text-sm font-bold font-syne tracking-tight">
                 {['Internet', 'Voice (C9X)', 'Mobile', 'Hardware', 'Contact Centre', 'Network'].map(item => (
                   <li key={item}><a href="#" className="hover:text-brand-purple transition-colors">{item}</a></li>
                 ))}
              </ul>
           </div>
           
           {/* C9 Defense */}
           <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans opacity-40">C9 Defense</h4>
              <ul className="flex flex-col gap-4 text-sm font-bold font-syne tracking-tight">
                 {['Essential 8', 'Continuous Defence', 'Recovery Assurance', 'Assess My Org'].map(item => (
                   <li key={item}><a href="#" className="hover:text-brand-purple transition-colors">{item}</a></li>
                 ))}
              </ul>
           </div>
           
           {/* Company */}
           <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans opacity-40">Company</h4>
              <ul className="flex flex-col gap-4 text-sm font-bold font-syne tracking-tight">
                 {['About', 'Case Studies', 'Blog', 'Careers', 'Support', 'Partners'].map(item => (
                   <li key={item}><a href="#" className="hover:text-brand-purple transition-colors">{item}</a></li>
                 ))}
              </ul>
           </div>
           
        </div>
        
        {/* Sub-brands row */}
        <div className="flex flex-wrap items-center gap-10 py-10 border-t border-gray-100">
           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-dm-sans">Part of the C9 Group:</span>
           <div className="flex gap-8">
              {['C9 Teams', 'C9 Lumina', 'C9 Digital'].map(brand => (
                <a key={brand} href="#" className="text-sm font-bold font-syne text-text-secondary hover:text-brand-purple transition-colors">{brand}</a>
              ))}
           </div>
        </div>
        
        {/* Accreditation Logos */}
        <div className="flex flex-wrap items-center gap-12 py-12 border-t border-gray-100 opacity-20 filter grayscale group-hover:grayscale-0 transition-opacity">
           {['NBN Accredited Advisor', 'APNIC', 'TIO', 'CommCom'].map(acc => (
             <div key={acc} className="flex flex-col gap-2">
                <div className="h-6 w-16 bg-text-primary rounded" />
                <span className="text-[8px] font-bold uppercase tracking-widest leading-none">{acc}</span>
             </div>
           ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-gray-100">
           <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest font-dm-sans">
             © 2026 C9 Communications. All rights reserved.
           </div>
           
           <div className="flex gap-8 text-[11px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans">
              <a href="#" className="hover:text-dark-purple">Cookie Policy</a>
              <a href="#" className="hover:text-dark-purple">Terms</a>
              <a href="#" className="hover:text-dark-purple">Privacy</a>
           </div>
        </div>
        
      </div>
    </footer>
  );
};
