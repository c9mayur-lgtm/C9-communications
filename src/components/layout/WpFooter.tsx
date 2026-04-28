'use client';

import React from 'react';
import { ArrowRight, Linkedin, Github, Twitter, Facebook, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const WpFooter = () => {
  return (
    <footer className="bg-black text-white pt-16 font-sans">
      <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-16 w-full" style={{ maxWidth: '1240px' }}>
         
         {/* Col 1: Solutions */}
         <div className="flex flex-col">
            <h4 className="font-bold text-[20px] mb-6 text-white tracking-tight underline decoration-[#5D00D6] decoration-2 underline-offset-8">Solutions</h4>
            <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Managed Services</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">IT Consulting & Advisory</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Cyber Security</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Web Development</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Mobile Development</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Cloud Services</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Network Connectivity</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">ERP Solutions</a></li>
            </ul>
         </div>

         {/* Col 2: Company */}
         <div className="flex flex-col">
            <h4 className="font-bold text-[20px] mb-6 text-white tracking-tight underline decoration-[#5D00D6] decoration-2 underline-offset-8">Company</h4>
            <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">About us</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Why us</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Team</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Careers</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Partners & Certifications</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Reviews & Awards</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Blog</a></li>
                <li><a href="#" className="!text-white hover:text-[#5D00D6] transition-colors block">Case studies</a></li>
            </ul>
         </div>

         {/* Col 3: Group & More */}
         <div className="flex flex-col">
            <div className="mb-10">
               <h4 className="font-bold text-[20px] mb-6 text-white tracking-tight underline decoration-[#5D00D6] decoration-2 underline-offset-8">Also from the C9 Group:</h4>
               <ul className="space-y-3 text-[14px]">
                 <li><a href="#" className="text-[#a166ff] hover:text-white font-semibold transition-colors block">C9 Teams</a></li>
                 <li><a href="#" className="text-[#a166ff] hover:text-white font-semibold transition-colors block">C9 Defense</a></li>
                 <li><a href="#" className="text-[#a166ff] hover:text-white font-semibold transition-colors block">C9 Digital</a></li>
                 <li><a href="#" className="text-[#a166ff] hover:text-white font-semibold transition-colors block">C9 Lumina</a></li>
               </ul>
            </div>
            
            <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-none">Stay in the loop</p>
                <div className="bg-transparent rounded-lg border border-[#333] flex items-center overflow-hidden focus-within:border-[#5D00D6] transition-colors">
                  <input type="email" placeholder="Email" className="bg-transparent px-4 py-3 w-full text-[14px] outline-none text-white placeholder-gray-600" />
                  <button className="bg-[#5D00D6] p-3 hover:bg-[#4d00b3] transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </div>
                <div className="flex items-center gap-2.5 mt-0.5">
                   <input type="checkbox" className="w-3 h-3 border-gray-600 rounded-sm bg-black text-[#5D00D6] focus:ring-[#5D00D6] cursor-pointer" />
                   <span className="text-[10px] text-gray-500 leading-tight">I agree to the Privacy Policy</span>
                </div>
            </div>
         </div>

          {/* Col 4: Logo & CTA Area - Grouped Together */}
          <div className="flex flex-col items-center lg:items-center pt-2">
             <img src="/images/c9_logo_light.svg" alt="C9 Communications" className="w-[180px] filter brightness-0 invert mb-8" />
             
             <Button 
               size="lg" 
               className="w-full lg:max-w-[260px] shadow-2xl group border-none text-[14px] h-12 rounded-full"
               onClick={() => document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
             >
               Schedule Consultation <ArrowRight className="transition-transform group-hover:translate-x-1" />
             </Button>
          </div>
      </div>
      
      {/* High-Fidelity White Footer Section */}
      <div className="bg-white text-slate-900 py-12">
        <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
          
          {/* Main Info Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-10 lg:gap-4 pb-12">
            
            {/* Google Section */}
            <div className="flex items-center gap-4 py-2">
              <span className="font-bold text-[32px] tracking-tighter text-[#0c1024]">Google</span>
              <div className="flex flex-col">
                <div className="text-[10px] font-bold text-gray-400 leading-none uppercase tracking-wide mb-1">Reviewed on</div>
                <div className="flex text-[#4285F4] text-md leading-none mb-1">★★★★★</div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide leading-none">4.9/5 Rating</span>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] h-14 bg-gray-200"></div>

            {/* Address Section - Narrow Stack */}
            <div className="text-[14px] text-gray-600 leading-[1.6] text-center lg:text-left max-w-[120px]">
              level 3 480 Collins Street Melbourne 3000
            </div>

            <div className="hidden lg:block w-[1px] h-14 bg-gray-200"></div>

            {/* Contact & Copyright Section */}
            <div className="text-center lg:text-left">
              <div className="text-[14px] text-gray-600 leading-[1.6] mb-1">
                T: 1800 000 299<br/>
                E: office@c9communications.com.au
              </div>
              <div className="text-[11px] text-gray-300 font-medium font-sans">
                © {new Date().getFullYear()} C9 Communications. All rights reserved.
              </div>
            </div>

            <div className="hidden lg:block w-[1px] h-14 bg-gray-200"></div>

            {/* Social Links Section */}
            <div className="flex gap-10 lg:pl-4">
              {[
                { label: 'LINKEDIN', icon: Linkedin },
                { label: 'GITHUB', icon: Github },
                { label: 'TWITTER', icon: Twitter },
                { label: 'FACEBOOK', icon: Facebook },
                { label: 'YOUTUBE', icon: Play }
              ].map((social) => (
                <a key={social.label} href="#" className="flex flex-col items-center gap-2 group">
                  <div className="h-6 flex items-center justify-center text-slate-700 opacity-80 group-hover:opacity-100 transition-opacity">
                    <social.icon size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-semibold text-[#5D00D6] tracking-[0.05em] group-hover:underline">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gray-100 mb-2"></div>

          {/* Legal Links Row */}
          <div className="flex justify-center items-center gap-8 mb-2 text-[14px] font-semibold text-[#5D00D6]">
            <a href="/terms" className="hover:underline">Terms of Use</a>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/site-map" className="hover:underline">Sitemap</a>
          </div>

          {/* Acknowledgement of Country */}
          <div className="max-w-4xl mx-auto text-center border-t border-gray-50 pt-4">
            <p className="text-[14px] md:text-[14px] text-gray-400 italic leading-[1.8] font-medium opacity-80">
              We acknowledge the Traditional Owners on whose lands we work. We pay our respects to their elders past and present and recognise their continuing connection to this land.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
