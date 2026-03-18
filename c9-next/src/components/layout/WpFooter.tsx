'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const WpFooter = () => {
  return (
    <footer className="bg-black text-white pt-24 font-sans">
      <div className="container mx-auto px-10 grid lg:grid-cols-2 gap-16 mb-24" style={{ maxWidth: '1240px' }}>
         
         {/* Left side: Navigation links & compliance */}
         <div className="flex flex-col justify-between">
           
           <div className="mb-16">
              <h4 className="font-bold text-[22px] mb-6 text-white tracking-tight">Solutions</h4>
              <div className="grid grid-cols-2 gap-8">
                 <ul className="space-y-3.5 text-[15px]">
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Managed Services</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">IT Consulting & Advisory</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Cyber Security</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Web Development</a></li>
                 </ul>
                 <ul className="space-y-3.5 text-[15px]">
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Mobile Development</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Cloud Services</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Network Connectivity</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">ERP Solutions</a></li>
                 </ul>
              </div>
           </div>

           <div className="mb-16">
              <h4 className="font-bold text-[22px] mb-6 text-white tracking-tight">Company</h4>
              <div className="grid grid-cols-2 gap-8">
                 <ul className="space-y-3.5 text-[15px]">
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">About us</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Why us</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Team</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Careers</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Partners & Certifications</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Reviews & Awards</a></li>
                 </ul>
                 <ul className="space-y-3.5 text-[15px]">
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Blog</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Case studies</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Events</a></li>
                     <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">FAQ</a></li>
                 </ul>
              </div>
           </div>
           
           <div className="max-w-md w-full flex flex-col gap-7 pb-10">
               <div>
                 <p className="text-[13px] text-gray-400 font-semibold uppercase tracking-widest mb-3">Stay in the loop</p>
                 <div className="bg-transparent rounded-xl border border-[#333] flex items-center overflow-hidden focus-within:border-[#5D00D6] transition-colors">
                   <input type="email" placeholder="Your business email" className="bg-transparent px-5 py-4 w-full text-[14px] outline-none text-white placeholder-gray-500 font-medium" />
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <input type="checkbox" className="mt-0.5 border-gray-600 rounded-sm bg-black text-[#5D00D6] focus:ring-[#5D00D6] cursor-pointer shrink-0" />
                 <span className="text-[12px] text-[#A0AABB] leading-[1.7]" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.</span>
               </div>
               <Button size="lg" className="shadow-xl group self-start border-none">
                 Send Message <ArrowRight className="transition-transform group-hover:translate-x-1" />
               </Button>
           </div>
         </div>

         {/* Right side: Logo & CTA */}
         <div className="flex flex-col justify-center items-center lg:items-end h-full gap-8 mb-16 lg:mb-0">
            <img src="/images/c9_logo_light.svg" alt="C9 Communications" className="w-[180px] md:w-[280px] lg:w-[380px] filter brightness-0 invert" />
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-12 shadow-2xl group border-none"
              onClick={() => document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>

         </div>
      </div>
      
      <div className="bg-white text-slate-900 py-10">
        <div className="container mx-auto px-10 flex flex-col xl:flex-row justify-between items-center gap-8" style={{ maxWidth: '1240px' }}>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            <div className="flex items-center gap-3">
               <span className="font-black text-[22px] tracking-tight text-slate-900">Google</span>
               <div className="flex flex-col gap-0.5">
                  <div className="text-[10px] font-bold text-gray-400 leading-none uppercase tracking-wide">Reviewed on</div>
                  <div className="flex text-[#4285F4] text-sm leading-none">★★★★★</div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide leading-none">4.9/5 Rating</span>
               </div>
            </div>
            <div className="hidden lg:block w-[1px] h-10 bg-gray-200"></div>
             <div className="hidden lg:block text-[13px] text-gray-600 leading-[1.6]">
               level 3 480 Collins Street<br/>
               Melbourne 3000
             </div>
            <div className="hidden lg:block w-[1px] h-10 bg-gray-200"></div>
             <div className="hidden lg:block text-[13px] text-gray-600 leading-[1.6]">
               T: 1800 000 299<br/>
               E: office@c9communications.com.au
             </div>
          </div>
          
          <div className="flex gap-8 lg:gap-10 font-semibold text-[11px] text-gray-500">
             <a href="#" className="flex flex-col items-center gap-1.5 hover:text-slate-900 transition-colors">
               <span className="font-bold text-lg leading-none text-slate-700">in</span>
               <span>LinkedIn</span>
             </a>
             <a href="#" className="flex flex-col items-center gap-1.5 hover:text-slate-900 transition-colors">
               <svg className="w-5 h-5 text-slate-700 block" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
               <span>Github</span>
             </a>
             <a href="#" className="flex flex-col items-center gap-1.5 hover:text-slate-900 transition-colors">
               <svg className="w-5 h-5 text-slate-700 block" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               <span>Twitter</span>
             </a>
             <a href="#" className="flex flex-col items-center gap-1.5 hover:text-slate-900 transition-colors">
               <svg className="w-5 h-5 text-slate-700 block" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
               <span>Facebook</span>
             </a>
             <a href="#" className="flex flex-col items-center gap-1.5 hover:text-slate-900 transition-colors">
               <span className="font-bold text-lg leading-none text-slate-700">▶</span>
               <span>Youtube</span>
             </a>
          </div>
        </div>
        
        <div className="container mx-auto px-10 mt-6 flex flex-col md:flex-row justify-center items-center text-[12px] text-gray-500 gap-4" style={{ maxWidth: '1240px' }}>
          <span>© 2026 C9 Communications. All rights reserved.</span>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
