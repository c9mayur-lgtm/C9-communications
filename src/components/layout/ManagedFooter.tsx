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
           <Link href="/" className="flex items-center gap-1 shrink-0 group">
              <span className="text-3xl font-black text-text-primary tracking-tighter transition-transform group-hover:scale-105">
                <span className="text-brand-purple">9</span>communications
              </span>
           </Link>
           
           <div className="flex gap-10">
              {[
                { Icon: Linkedin, url: 'https://linkedin.com/company/c9communications' },
                { Icon: Facebook, url: 'https://facebook.com/c9communications' },
                { Icon: Instagram, url: 'https://instagram.com/c9communications' }
              ].map(({ Icon, url }, i) => (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-text-secondary hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300">
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
                 {[
                   { label: 'Helpdesk', path: '/managed-it/helpdesk-support' },
                   { label: 'Outsourcing', path: '/managed-it/outsourcing' },
                   { label: 'Infrastructure', path: '/managed-it/infrastructure' },
                   { label: 'Cloud', path: '/managed-it/cloud-services' },
                   { label: 'Cybersecurity', path: '/managed-it/security-solutions' },
                   { label: 'Backup & DR', path: '/managed-it/backup-disaster-recovery' }
                 ].map(item => (
                    <li key={item.label}><Link href={item.path} className="hover:text-brand-purple transition-colors">{item.label}</Link></li>
                 ))}
              </ul>
           </div>
           
           {/* Modern Workplace */}
           <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans opacity-40">Modern Workplace</h4>
              <ul className="flex flex-col gap-4 text-sm font-bold font-syne tracking-tight">
                 {[
                   { label: 'Managed Productivity', path: '/modern-workplace/productivity' },
                   { label: 'Secure Remote Work', path: '/modern-workplace/secure-remote-work' },
                   { label: 'Endpoint Management', path: '/modern-workplace/endpoint-management' },
                   { label: 'Managed Print', path: '/modern-workplace/managed-print' },
                   { label: 'Visitor Solution', path: '/modern-workplace/visitor-solution' },
                   { label: 'Compliance & Data', path: '/modern-workplace/compliance-data-protection' }
                 ].map(item => (
                   <li key={item.label}><Link href={item.path} className="hover:text-brand-purple transition-colors">{item.label}</Link></li>
                 ))}
              </ul>
           </div>
           
           {/* Telco */}
           <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans opacity-40">Telco</h4>
              <ul className="flex flex-col gap-4 text-sm font-bold font-syne tracking-tight">
                 {[
                   { label: 'Internet', path: '/telco/business-nbn' },
                   { label: 'C9 Phone System', path: '/telco/phone-system' },
                   { label: 'Mobile', path: '/telco/mobile-plans' },
                   { label: 'Hardware', path: '/telco' },
                   { label: 'Contact Centre', path: '/telco/contact-centre' },
                   { label: 'Network', path: '/managed-it/network-solutions' }
                 ].map(item => (
                   <li key={item.label}><Link href={item.path} className="hover:text-brand-purple transition-colors">{item.label}</Link></li>
                 ))}
              </ul>
           </div>
           
           {/* C9 Defense */}
           <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans opacity-40">C9 Defense</h4>
              <ul className="flex flex-col gap-4 text-sm font-bold font-syne tracking-tight">
                 {[
                   { label: 'Essential 8', path: '/managed-it/security-solutions' },
                   { label: 'Continuous Defence', path: '/managed-it/security-solutions' },
                   { label: 'Recovery Assurance', path: '/managed-it/backup-disaster-recovery' },
                   { label: 'Assess My Org', path: '/managed-it/security-solutions' }
                 ].map(item => (
                   <li key={item.label}><Link href={item.path} className="hover:text-brand-purple transition-colors">{item.label}</Link></li>
                 ))}
              </ul>
           </div>
           
           {/* Company */}
           <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans opacity-40">Company</h4>
              <ul className="flex flex-col gap-4 text-sm font-bold font-syne tracking-tight">
                 {[
                   { label: 'About', path: '/about' },
                   { label: 'Case Studies', path: '/case-studies' },
                   { label: 'Blog', path: '/insights' },
                   { label: 'Careers', path: '/about/careers' },
                   { label: 'Support', path: '/support' },
                   { label: 'Partners', path: '/about/partners' }
                 ].map(item => (
                   <li key={item.label}><Link href={item.path} className="hover:text-brand-purple transition-colors">{item.label}</Link></li>
                 ))}
              </ul>
           </div>
           
        </div>
        
        {/* Sub-brands row */}
        <div className="flex flex-wrap items-center gap-10 py-10 border-t border-gray-100">
           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-dm-sans">Part of the C9 Group:</span>
           <div className="flex gap-8">
              {[
                { name: 'C9 Teams', url: '/contact' },
                { name: 'C9 Lumina', url: '/contact' },
                { name: 'C9 Digital', url: '/contact' }
              ].map(brand => (
                <a key={brand.name} href={brand.url} className="text-sm font-bold font-syne text-text-secondary hover:text-brand-purple transition-colors">{brand.name}</a>
              ))}
           </div>
        </div>
        
        {/* Accreditation Logos */}
        <div className="flex flex-wrap items-center gap-12 py-12 border-t border-gray-100 opacity-20 filter grayscale group-hover:grayscale-0 transition-opacity">
           {['nbn Accredited Advisor', 'APNIC', 'TIO', 'CommCom'].map(acc => (
             <div key={acc} className="flex flex-col gap-2">
                <div className="h-6 w-16 bg-text-primary rounded" />
                <span className="text-[8px] font-bold uppercase tracking-widest leading-none">{acc}</span>
             </div>
           ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-gray-100">
           <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest font-dm-sans">
             © {new Date().getFullYear()} C9 Communications. All rights reserved.
           </div>
           
           <div className="flex gap-8 text-[11px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans">
              <a href="/privacy-policy" className="hover:text-dark-purple">Cookie Policy</a>
              <a href="/terms" className="hover:text-dark-purple">Terms</a>
              <a href="/privacy-policy" className="hover:text-dark-purple">Privacy</a>
           </div>
        </div>
        
      </div>
    </footer>
  );
};
