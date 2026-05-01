'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Youtube } from 'lucide-react';

const LOGO_URL = '/c9-defense-logo.png';

export function DefenseFooter() {
  return (
    <footer className="bg-black border-t border-[#202020]">
      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src={LOGO_URL}
              alt="C9 Defense"
              className="h-8 w-auto object-contain grayscale brightness-150 mb-6"
            />
            <p className="text-sm text-[#606060] leading-relaxed max-w-xs mb-8">
              Enterprise cybersecurity solutions for Australian organisations. Combining Essential 8 compliance,
              continuous defence operations, and tested recovery assurance.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://facebook.com" className="w-9 h-9 border border-[#303030] flex items-center justify-center text-[#606060] hover:text-white hover:border-[#606060] transition-colors">
                <Facebook size={15} />
              </Link>
              <Link href="https://linkedin.com" className="w-9 h-9 border border-[#303030] flex items-center justify-center text-[#606060] hover:text-white hover:border-[#606060] transition-colors">
                <Linkedin size={15} />
              </Link>
              <Link href="https://youtube.com" className="w-9 h-9 border border-[#303030] flex items-center justify-center text-[#606060] hover:text-white hover:border-[#606060] transition-colors">
                <Youtube size={15} />
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#808080] mb-5">Solutions</h4>
            <ul className="space-y-3">
              {[
                { label: 'C9 Essentials (Essential 12)', href: '/defense/security/essentials-12' },
                { label: 'Compliance Accelerator', href: '/defense/compliance/accelerator' },
                { label: 'Security Validation & Testing', href: '/defense/security/validation' },
                { label: 'Sentinel Program', href: '/defense/security/sentinel' },
                { label: 'Security Validation', href: '/defense/security/validation' },
                { label: 'Vulnerability Assessment', href: '/defense/security/vulnerability' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#606060] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#808080] mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/defense/about' },
                { label: 'How We Operate', href: '/defense/about/how-we-operate' },
                { label: 'Security Programs vs IT Support', href: '/defense/about/programs-vs-support' },
                { label: 'FAQ', href: '/defense/about/faq' },
                { label: 'Careers', href: '/defense/careers' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#606060] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#808080] mb-5">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: 'Security Insights', href: '/defense/insights' },
                { label: 'Guides & Playbooks', href: '/defense/guides' },
                { label: 'Case Studies', href: '/defense/case-studies' },
                { label: 'Blog', href: '/defense/blog' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#606060] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-[#202020]">
              <p className="text-xs text-[#404040] mb-3">Join Us</p>
              <Link
                href="https://workforcenow.adp.com"
                className="text-sm text-[#808080] hover:text-white transition-colors underline"
              >
                Open Positions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#151515]">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#404040]">© 2025 C9 Group. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/defense/terms-conditions" className="text-xs text-[#404040] hover:text-[#808080] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/defense/privacy-policy" className="text-xs text-[#404040] hover:text-[#808080] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
