'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Phone, Shield } from 'lucide-react';

const LOGO_URL = '/c9-defense-logo.png';

const navLinks = [
  { label: 'Home', href: '/defense' },
  {
    label: 'Security',
    href: '/defense/security',
    children: [
      { label: 'Security Services', href: '/defense/security/sentinel-security-program' },
      { label: 'Security Packages', href: '/defense/security/packages' },
      { label: 'Security Validation & Testing', href: '/defense/security/validation' },
    ],
  },
  {
    label: 'Compliance',
    href: '/defense/compliance',
    children: [
      { label: 'Essential 8', href: '/defense/compliance/essential-8' },
      { label: 'ISO 27001', href: '/defense/compliance/iso-27001' },
      { label: 'SMB Compliance Foundations', href: '/defense/compliance/smb' },
      { label: 'Compliance Gap Assessment', href: '/defense/compliance/gap-assessment' },
      { label: 'Compliance Accelerator Program', href: '/defense/compliance/accelerator' },
      { label: 'Audit Readiness & Evidence Support', href: '/defense/compliance/audit-readiness' },
      { label: 'Policy & Documentation Development', href: '/defense/compliance/policy' },
    ],
  },
  {
    label: 'About',
    href: '/defense/about',
    children: [
      { label: 'Our Approach', href: '/defense/about/approach' },
      { label: 'FAQ', href: '/defense/about/faq' },
      { label: 'Why C9 Defense', href: '/defense/about/why-c9' },
    ],
  },
  { label: 'Contact', href: '/defense/contact' },
];

export function DefenseNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-[#202020]">
      {/* Top utility bar */}
      <div className="border-b border-[#202020] bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center h-9 text-xs">
          <div className="flex items-center gap-2 text-[#808080]">
            <Shield size={11} />
            <span>Australian Cybersecurity Specialists</span>
          </div>
          <div className="flex items-center gap-4 text-[#808080]">
            <Link href="/defense/client-support" className="hover:text-white transition-colors">Client Support</Link>
            <Link href="tel:1800000299" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone size={11} />
              1-800-000-299
            </Link>
            <Link href="https://c9communications.com.au" className="hover:text-white transition-colors text-[#606060]">C9 Communications</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/defense" className="flex items-center gap-3 shrink-0">
          <img
            src={LOGO_URL}
            alt="C9 Defense"
            className="h-7 w-auto object-contain grayscale brightness-150"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-sm text-[#C0C0C0] hover:text-white transition-colors font-medium"
              >
                {link.label}
                {link.children && <ChevronDown size={13} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
              </Link>

              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-0 min-w-[220px] bg-[#101010] border border-[#202020] py-2 shadow-2xl">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-[#808080] hover:text-white hover:bg-[#1a1a1a] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/defense/contact"
            className="text-sm text-[#C0C0C0] hover:text-white transition-colors font-medium px-3"
          >
            Contact Us
          </Link>
          <Link
            href="/defense/contact"
            className="text-sm bg-white text-black font-semibold px-5 py-2.5 hover:bg-[#C0C0C0] transition-colors"
          >
            Book a Confidential Briefing
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-[#202020] pb-6">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block px-6 py-3 text-sm text-[#C0C0C0] hover:text-white border-b border-[#151515] font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block px-10 py-2.5 text-xs text-[#606060] hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="px-6 pt-4">
            <Link
              href="/defense/contact"
              className="block w-full text-center text-sm bg-white text-black font-semibold px-5 py-3 hover:bg-[#C0C0C0] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Book a Confidential Briefing
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
