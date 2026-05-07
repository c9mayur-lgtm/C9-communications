'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, PhoneCall, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn, handleCtaClick } from '@/lib/utils';

import { Badge } from '@/components/ui/badge';

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink href={props.href}>
        <div className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-light-purple-bg hover:text-brand-purple focus:bg-light-purple-bg focus:text-brand-purple font-dm-sans",
          className
        )}>
          <div className="text-sm font-bold leading-none tracking-tight">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-text-secondary mt-1">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export const ManagedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b",
      isScrolled ? "bg-white/80 backdrop-blur-md py-3 shadow-sm border-gray-100" : "bg-white py-5 border-gray-100"
    )}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/managed-it" className="flex items-center gap-1 shrink-0">
           <span className="text-2xl font-black text-text-primary tracking-tighter group-hover:scale-105">
             <span className="text-brand-purple">9</span>communications
           </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 text-text-primary font-bold text-sm tracking-tight px-4 py-2 rounded-xl transition-all h-auto data-[state=open]:text-brand-purple data-[state=open]:bg-brand-purple/5">
                  IT Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-6 grid grid-cols-[1.2fr_1.2fr_0.8fr] gap-8 bg-white rounded-3xl border border-gray-200 shadow-2xl">
                    <div className="flex flex-col gap-8">
                       <div>
                         <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-4 opacity-40">Managed IT Service</h4>
                         <ul className="flex flex-col gap-2">
                           <ListItem href="/managed-it/helpdesk-support" title="Helpdesk Support">24/7 AU-managed ticket resolution.</ListItem>
                           <ListItem href="/managed-it/outsourcing" title="IT Outsourcing">Expert capacity for your IT needs.</ListItem>
                           <ListItem href="/managed-it/strategy-consulting" title="Strategy">vCIO and roadmapping for growth.</ListItem>
                         </ul>
                       </div>
                       <div>
                         <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-4 opacity-40">Cybersecurity</h4>
                         <ul className="flex flex-col gap-2">
                            <ListItem href="https://c9defense.com.au/" title="Security Solutions">Enterprise threat monitoring.</ListItem>
                            <ListItem href="https://c9defense.com.au/" title="Backup & DR">Verified recovery assurance.</ListItem>
                         </ul>
                       </div>
                    </div>
                    
                    <div className="flex flex-col gap-8">
                       <div>
                         <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-4 opacity-40">Infrastructure</h4>
                         <ul className="flex flex-col gap-2">
                            <ListItem href="/managed-it/infrastructure" title="IT Infrastructure">Hardware and server management.</ListItem>
                            <ListItem href="/managed-it/network-solutions" title="Network">Fast and secure local connectivity.</ListItem>
                            <ListItem href="/managed-it/cloud-services" title="Cloud">Private and hybrid migrations.</ListItem>
                            <ListItem href="/managed-it/cloud-services" title="Software">Custom business tools.</ListItem>
                         </ul>
                       </div>
                    </div>
                    
                    <div className="bg-light-purple-bg/50 rounded-2xl p-6 flex flex-col justify-between border border-brand-purple/5">
                       <div>
                         <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-4 opacity-40">Industry Focus</h4>
                         <ul className="flex flex-col gap-1.5">
                            {['Manufacturing', 'Transport', 'Healthcare', 'Banks & Insurance', 'Consulting', 'Non-Profit'].map(industry => (
                               <li key={industry} className="text-xs font-bold text-text-primary hover:text-brand-purple transition-colors cursor-pointer py-1 block">
                                 {industry}
                               </li>
                            ))}
                         </ul>
                       </div>
                       <Button variant="link" className="p-0 h-auto justify-start text-[11px] font-bold text-brand-purple uppercase tracking-widest">
                         All Industries 
                       </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 text-text-primary font-bold text-sm tracking-tight px-4 py-2 rounded-xl transition-all h-auto data-[state=open]:text-brand-purple data-[state=open]:bg-brand-purple/5">
                  Telco
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-6 grid grid-cols-[1.2fr_1.2fr_0.8fr] gap-8 bg-white rounded-3xl border border-gray-200 shadow-2xl">
                    <div className="flex flex-col gap-8">
                       <div>
                         <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-4 opacity-40">Internet</h4>
                         <ul className="flex flex-col gap-2">
                            <ListItem href="/telco/business-nbn" title="Small Business nbn™">Fast, reliable local internet.</ListItem>
                            <ListItem href="/telco/fast-fibre" title="Fast Fibre">Ultrafast dedicated connections.</ListItem>
                            <ListItem href="/telco/enterprise-ethernet" title="Enterprise Ethernet">Symmetrical high-speed fibre.</ListItem>
                         </ul>
                       </div>
                       <div>
                         <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-4 opacity-40">Mobile</h4>
                         <ul className="flex flex-col gap-2">
                            <ListItem href="/telco/mobile-plans" title="Mobile Plans" />
                         </ul>
                       </div>
                    </div>
                    
                    <div className="flex flex-col gap-8">
                       <div>
                         <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-4 opacity-40">Voice</h4>
                         <ul className="flex flex-col gap-2">
                            <ListItem href="/telco/phone-system" title="C9 Phone System">Smart phone systems.</ListItem>
                            <ListItem href="/telco/inbound-services" title="Inbound Services" />
                            <ListItem href="/telco/teams-calling" title="Microsoft Teams Calling" />
                            <ListItem href="/telco/sip-trunking" title="SIP Trunking" />
                            <ListItem href="/telco/contact-centre" title="Contact Centre" />
                         </ul>
                       </div>
                    </div>
                    
                    <div className="bg-light-purple-bg/50 rounded-2xl p-6 flex flex-col justify-between border border-brand-purple/5">
                       <div>
                         <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-4 opacity-40">Hardware</h4>
                         <div className="grid grid-cols-2 gap-4 mt-2">
                            {['Handsets', 'Headsets', 'Routers', 'APs'].map(item => (
                               <div key={item} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex items-center justify-center text-[10px] font-bold text-text-secondary">
                                 {item}
                               </div>
                            ))}
                         </div>
                       </div>
                       <Button className="w-full bg-brand-purple text-white rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-lg">
                         Call 1800 000 299
                       </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 text-text-primary font-bold text-sm tracking-tight px-4 py-2 rounded-xl transition-all h-auto data-[state=open]:text-brand-purple data-[state=open]:bg-brand-purple/5">
                  Modern Workplace
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-6 grid grid-cols-2 gap-8 bg-white rounded-3xl border border-gray-200 shadow-2xl">
                    <div className="flex flex-col gap-8">
                       <div>
                         <h4 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-4 opacity-40">Services</h4>
                         <div className="grid grid-cols-2 gap-4">
                            <ListItem href="/modern-workplace/productivity" title="Productivity" />
                            <ListItem href="/modern-workplace/secure-remote-work" title="Secure Remote Work" />
                            <ListItem href="/modern-workplace/communication-tools" title="Communication Tools" />
                            <ListItem href="/modern-workplace/collaboration" title="Collaboration" />
                            <ListItem href="/modern-workplace/compliance-data-protection" title="Compliance" />
                            <ListItem href="/modern-workplace/endpoint-management" title="Device Mgmt" />
                         </div>
                       </div>
                    </div>
                    
                    <div className="bg-brand-purple text-white rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                       <div className="relative z-10">
                         <Badge className="bg-white text-brand-purple hover:bg-white/90 mb-4 rounded-full font-bold">New</Badge>
                         <h4 className="text-2xl font-bold font-syne mb-2">Build a Smart Workplace</h4>
                         <p className="text-white/70 text-sm font-dm-sans mb-6">Efficient setup designed for team progress.</p>
                       </div>
                       <Button className="relative z-10 bg-white text-brand-purple hover:bg-white/90 rounded-full w-fit group-hover:scale-105">
                          Book a Demo 
                       </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" passHref legacyBehavior>
                  <NavigationMenuLink className="bg-transparent hover:bg-gray-50 text-text-primary font-bold text-sm tracking-tight px-4 py-2 rounded-xl transition-all block h-auto">
                    Company
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/insights" legacyBehavior passHref>
                  <NavigationMenuLink className="bg-transparent hover:bg-gray-50 text-text-primary font-bold text-sm tracking-tight px-4 py-2 rounded-xl transition-all block h-auto">
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end border-r pr-6 mr-1 border-gray-200">
            <span className="text-[10px] font-semibold text-text-secondary uppercase tracking-[0.2em] mb-0.5 font-dm-sans leading-none">Client Support</span>
            <a href="tel:1800000299" className="text-[14px] font-bold tracking-tight text-text-primary hover:text-brand-purple transition-colors font-dm-sans">1800 000 299</a>
          </div>
          
          <Button 
            className="hidden sm:flex bg-dark-surface hover:bg-black text-white px-6 rounded-full h-11 text-xs font-bold font-dm-sans border-none shadow-md"
          >
            <Shield size={14} className="mr-2 text-defense-accent" /> C9 DEFENSE
          </Button>
          
          <Button 
            className="hidden lg:flex bg-brand-purple hover:bg-dark-purple text-white px-6 rounded-full h-11 text-xs font-bold font-dm-sans transition-all active:scale-95"
            onClick={handleCtaClick}
          >
            Schedule Consultation
          </Button>
          
          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger className="lg:hidden p-2 rounded-lg transition-colors text-text-primary hover:bg-gray-100">
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent side="right" className="p-0 border-l border-gray-100 bg-white w-[300px]">
               <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <span className="text-xl font-black text-text-primary tracking-tighter">
                      <span className="text-brand-purple">9</span>communications
                    </span>
                  </div>
                  <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-8">
                      {[{ label: 'IT Solutions', path: '/managed-it' }, { label: 'Telco', path: '/telco' }, { label: 'Modern Workplace', path: '/modern-workplace' }, { label: 'Company', path: '/about' }, { label: 'Resources', path: '/insights' }].map(item => (
                        <div key={item.label} className="flex flex-col gap-4">
                           <h4 className="text-xs font-bold uppercase tracking-widest text-brand-purple opacity-40">{item.label}</h4>
                           <div className="flex flex-col gap-4 pl-2">
                              <Link href={item.path} className="font-bold text-text-primary text-lg">Explore {item.label}</Link>
                           </div>
                        </div>
                      ))}
                  </div>
                  <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col gap-4">
                     <a href="tel:1800000299" className="flex items-center justify-center gap-2 w-full py-4 bg-white rounded-2xl border border-gray-200 font-bold text-text-primary shadow-sm">
                        <PhoneCall size={18} /> 1800 000 299
                     </a>
                     <Button 
                        className="bg-brand-purple py-7 rounded-2xl text-[14px] font-bold"
                        onClick={handleCtaClick}
                      >
                        Schedule Consultation
                      </Button>
                  </div>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
