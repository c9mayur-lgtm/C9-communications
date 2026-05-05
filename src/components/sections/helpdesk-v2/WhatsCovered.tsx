'use client';

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cloud, Server, Smartphone, UserPlus, AlertTriangle, ShieldCheck, CheckCircle2, Settings } from 'lucide-react';

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

// --- VISUAL CONTAINERS SPECIFICALLY SCALED TO PREVENT CLIPPING ---

const EndUserVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#F8FAFC] overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#5D00D608_1px,transparent_1px),linear-gradient(to_bottom,#5D00D608_1px,transparent_1px)] bg-[size:16px_16px]" />
    
    <motion.div 
      className="relative z-10 w-[75%] max-w-[240px] bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(93,0,214,0.1)] p-4 border border-purple-50 flex flex-col gap-3"
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2 mb-1 pb-3 border-b border-gray-50">
         <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
            <UserPlus size={14} className="text-[#5D00D6]" />
         </div>
         <div className="flex-1">
            <div className="h-2 w-[70%] bg-gray-200 rounded-full mb-1.5" />
            <div className="h-1.5 w-[40%] bg-gray-100 rounded-full" />
         </div>
         <motion.div 
           className="px-2 py-1 rounded bg-emerald-50 text-emerald-600 border border-emerald-100 text-[8px] font-bold"
           animate={{ scale: [1, 1.05, 1] }}
           transition={{ duration: 2, repeat: Infinity }}
         >
           RESOLVED
         </motion.div>
      </div>
      
      {[1, 2].map(i => (
        <div key={i} className="flex gap-3 items-center">
           <div className={`w-1 h-8 rounded-full ${i === 1 ? 'bg-[#5D00D6]' : 'bg-gray-100'}`} />
           <div className="flex-1 flex flex-col gap-1.5">
              <div className="h-2 w-full bg-gray-100 rounded-full" />
              <div className="h-1.5 w-2/3 bg-gray-50 rounded-full" />
           </div>
        </div>
      ))}
    </motion.div>
  </div>
);

const CloudVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#F8FAFC] overflow-hidden">
    {/* Scaled-down Orbital Background to ensure no clipping */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 scale-[0.85]">
        <div className="absolute w-[160px] h-[160px] rounded-full border border-gray-300/60" />
        <div className="absolute w-[230px] h-[230px] rounded-full border border-gray-300/40" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-200/50" />
    </div>
    
    {/* Center Logo - Scaled */}
    <motion.div 
      className="w-20 h-20 rounded-full bg-[#0c1024] flex items-center justify-center shadow-2xl relative z-10 border-[3px] border-white scale-[0.85]"
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <div className="grid grid-cols-2 gap-1 w-8 h-8">
        <div className="bg-[#f25022] w-full h-full rounded-sm" />
        <div className="bg-[#7fbb00] w-full h-full rounded-sm" />
        <div className="bg-[#00a1f1] w-full h-full rounded-sm" />
        <div className="bg-[#ffbb00] w-full h-full rounded-sm" />
      </div>
    </motion.div>

    {/* Larger Orbital Path - Scaled down transform scale[0.85] and translateY */}
    <motion.div className="absolute inset-0 z-20 flex items-center justify-center scale-[0.85]" animate={{ rotate: [0, 360] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
      {[
        { src: 'https://api.iconify.design/vscode-icons:file-type-word.svg', label: 'Word', degree: 0 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-excel.svg', label: 'Excel', degree: 45 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-powerpoint.svg', label: 'PowerPoint', degree: 90 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-outlook.svg', label: 'Outlook', degree: 135 },
        { src: 'https://api.iconify.design/logos:microsoft-teams.svg', label: 'Teams', degree: 180 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-vscode.svg', label: 'VS Code', degree: 225 },
        { src: 'https://api.iconify.design/logos:microsoft-azure.svg', label: 'Azure', degree: 270 },
        { src: 'https://api.iconify.design/logos:microsoft-edge.svg', label: 'Edge', degree: 315 }
      ].map((app) => (
        <div key={app.label} className="absolute" style={{ transform: `rotate(${app.degree}deg) translateY(-120px)` }}>
          <motion.div className="w-10 h-10 -ml-5 -mt-5 rounded-xl bg-white shadow-xl border border-gray-100 flex items-center justify-center p-2 z-30 transition-all hover:scale-110" animate={{ rotate: [-app.degree, -(360 + app.degree)] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
            <img src={app.src} alt={app.label} className="w-full h-full object-contain pointer-events-none select-none" />
          </motion.div>
        </div>
      ))}
    </motion.div>
  </div>
);

const InfrastructureVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#F8FAFC] overflow-hidden p-6 gap-3">
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[75%] bg-gradient-to-b from-transparent via-[#5D00D6]/20 to-transparent z-0" />
     
     <motion.div 
       className="absolute left-1/2 -translate-x-1/2 w-1.5 h-12 bg-[#5D00D6] rounded-full blur-[2px] z-0"
       animate={{ top: ['15%', '75%', '15%'] }}
       transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
     />

     {/* Max-width container to prevent clipping and ensure padding */}
     <div className="w-full max-w-[240px] flex flex-col gap-3 relative z-10">
       {[1, 2, 3].map(i => (
         <motion.div 
           key={i}
           className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-3.5 flex items-center justify-between"
           animate={{ x: i % 2 === 0 ? [0, 4, 0] : [0, -4, 0] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
         >
           <div className="flex gap-3 items-center w-full">
              <div className={`w-2 h-2 rounded-full shadow-sm shrink-0 ${i === 1 ? 'bg-emerald-400 shadow-emerald-400/40' : 'bg-[#5D00D6] shadow-[#5D00D6]/40'}`} />
              <div className="flex-1 flex flex-col gap-2">
                 <div className="w-[80%] h-1.5 bg-gray-100 rounded-full" />
                 <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                   <motion.div 
                     className={`h-full ${i === 1 ? 'bg-emerald-400' : 'bg-[#5D00D6]'}`}
                     animate={{ width: ['30%', '85%', '45%'] }}
                     transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                   />
                 </div>
              </div>
              <Server size={16} className="text-gray-300 shrink-0" />
           </div>
         </motion.div>
       ))}
     </div>
  </div>
);

const DevicesVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#F8FAFC] overflow-hidden">
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(93,0,214,0.05)_0,transparent_70%)]" />

     {/* Scaled Device Components */}
     <div className="relative w-[220px] h-[160px] flex items-center justify-center">
       {/* Macbook */}
       <motion.div 
         className="absolute top-4 left-0 w-40 h-[100px] bg-white rounded-t-[12px] rounded-b-sm border-2 shadow-xl shadow-slate-200/50 flex flex-col items-center z-10"
         style={{ borderColor: '#e2e8f0' }}
         animate={{ y: [-4, 4, -4] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
       >
         <div className="w-full h-full bg-slate-50 rounded-t-[10px] p-2 flex flex-col gap-1.5">
           <div className="w-full flex-1 bg-white rounded-sm border border-gray-100 shadow-sm p-2 flex flex-col gap-1.5 overflow-hidden relative">
               <div className="flex gap-1 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
               </div>
               <motion.div className="h-1.5 w-3/4 bg-[#5D00D6]/20 rounded-sm" animate={{ width: ['40%', '80%', '50%'] }} transition={{ duration: 4, repeat: Infinity }} />
               <div className="h-1 w-1/2 bg-gray-100 rounded-sm" />
               <div className="h-1 w-full bg-gray-100 rounded-sm" />
               <motion.div 
                 className="absolute left-0 right-0 h-[20px] bg-gradient-to-b from-transparent via-[#5D00D6]/5 to-transparent z-10"
                 animate={{ top: ['-20%', '120%'] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               />
           </div>
         </div>
         <div className="w-[110%] h-2 bg-slate-200 border-t border-slate-300 rounded-b-md rounded-t-[2px] shadow-sm" />
       </motion.div>

       {/* iPhone */}
       <motion.div 
         className="absolute right-0 bottom-4 w-12 h-[90px] bg-white rounded-[12px] border-2 border-slate-200 shadow-2xl p-0.5 z-20 flex flex-col"
         animate={{ y: [4, -4, 4] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
       >
         <div className="w-full h-full bg-slate-50 rounded-[10px] relative overflow-hidden flex flex-col pt-2 px-1.5 gap-1.5 border border-slate-100 shadow-inner">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-slate-200 rounded-full" />
            <div className="flex-1 flex flex-col justify-center gap-1.5">
               <motion.div 
                 className="w-full h-5 bg-emerald-50 rounded bg-white flex items-center justify-center text-emerald-500 border border-emerald-100"
                 animate={{ scale: [1, 1.05, 1] }} 
                 transition={{ duration: 2, repeat: Infinity }}
               >
                  <ShieldCheck size={10} />
               </motion.div>
               <div className="w-full h-1.5 bg-gray-100 rounded-sm" />
               <div className="w-[80%] h-1.5 bg-gray-100 rounded-sm" />
            </div>
         </div>
       </motion.div>
     </div>
  </div>
);

const OnboardingVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#F8FAFC]">
      <div className="w-[70%] max-w-[200px] relative flex justify-between items-center z-10">
         <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 z-0 rounded-full" />
         
         <div className="relative">
           <motion.div 
             className="w-10 h-10 bg-white rounded-full shadow-[0_5px_15px_rgba(93,0,214,0.1)] border border-purple-100 flex items-center justify-center z-10 relative"
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 2, repeat: Infinity }}
           >
              <UserPlus size={14} className="text-[#5D00D6]" />
           </motion.div>
           <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[7px] font-bold text-gray-400 tracking-widest uppercase">HIRE</div>
         </div>

         <div className="relative">
           <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center z-10 border border-gray-100 relative">
              <Settings size={14} className="text-gray-400" />
           </div>
           <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[7px] font-bold text-gray-400 tracking-widest uppercase">SETUP</div>
         </div>

         <div className="relative">
           <motion.div 
             className="w-10 h-10 bg-white rounded-full shadow-[0_5px_15px_rgba(16,185,129,0.1)] border border-emerald-100 flex items-center justify-center z-10 relative"
             animate={{ scale: [1.1, 1, 1.1], backgroundColor: ['#ffffff', '#ecfdf5', '#ffffff'] }}
             transition={{ duration: 2, repeat: Infinity }}
           >
              <CheckCircle2 size={14} className="text-emerald-500" />
           </motion.div>
           <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[7px] font-bold text-emerald-500 tracking-widest uppercase">READY</div>
         </div>

         <motion.div 
           className="absolute top-1/2 -translate-y-1/2 h-1 bg-[#5D00D6] rounded-full z-0"
           initial={{ width: '0%', left: '0%' }}
           animate={{ width: ['0%', '100%', '0%'], left: ['0%', '0%', '100%'] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
         />
      </div>
  </div>
);

const EscalationVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#F8FAFC] overflow-hidden">
     <motion.div 
       className="absolute w-20 h-20 rounded-full bg-red-100/50"
       animate={{ scale: [1, 2.8], opacity: [0.8, 0] }}
       transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
     />
     <motion.div 
       className="absolute w-20 h-20 rounded-full bg-red-100/50"
       animate={{ scale: [1, 2.8], opacity: [0.8, 0] }}
       transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
     />

     <motion.div 
       className="relative z-10 w-[65%] max-w-[220px] bg-white rounded-2xl shadow-xl shadow-red-900/5 p-4 border border-red-50 flex flex-col gap-3"
       animate={{ y: [-3, 3, -3] }}
       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
     >
       <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
             <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1, repeat: Infinity }}>
               <AlertTriangle size={16} className="text-red-500" />
             </motion.div>
          </div>
          <div className="flex flex-col flex-1 gap-1.5">
             <div className="h-2 w-1/2 bg-gray-200 rounded-full" />
             <div className="h-1.5 w-full bg-gray-100 rounded-full" />
          </div>
       </div>

       <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
          <div className="flex justify-between items-center mb-1.5">
             <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Auto Escalation</span>
             <span className="text-[8px] font-bold text-[#5D00D6]">PRIORITY LINE</span>
          </div>
          <div className="h-1 w-full bg-white rounded-full overflow-hidden border border-gray-100">
             <motion.div 
               className="h-full bg-gradient-to-r from-red-400 to-[#5D00D6]"
               animate={{ width: ['0%', '100%'] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             />
          </div>
       </div>
     </motion.div>
  </div>
);

// --- MAIN COMPONENT ---

export default function WhatsCovered() {
  const coverage = [
    {
      title: "End-user support",
      body: "Password resets, software issues, hardware faults, application errors, printer problems — anything your staff encounter day to day resolved without them having to figure it out themselves.",
      tags: ["Remote Support", "On-site", "Helpdesk"],
      visual: <EndUserVisual />
    },
    {
      title: "Microsoft 365 & cloud apps",
      body: "Outlook, Teams, SharePoint, OneDrive, and Azure — user-level and admin-level support. We manage your M365 environment so your staff don't lose time to application issues.",
      tags: ["M365 Ecosystem", "Azure", "SharePoint"],
      visual: <CloudVisual />
    },
    {
      title: "Infrastructure & network issues",
      body: "Server alerts, network connectivity, VPN failures, and internet outages — escalated automatically from helpdesk to engineering without the user having to chase anyone.",
      tags: ["Networking", "Servers", "VPN"],
      visual: <InfrastructureVisual />
    },
    {
      title: "Devices & mobile",
      body: "Laptops, desktops, tablets, and mobile phones — remote troubleshooting first, on-site dispatch when needed. New starters set up. Leavers offboarded securely.",
      tags: ["MDM", "iOS/Android", "Hardware"],
      visual: <DevicesVisual />
    },
    {
      title: "Onboarding & offboarding",
      body: "New staff set up and ready on day one. Departing staff offboarded with access revoked immediately. Device provisioning, account creation, and licence management handled end-to-end.",
      tags: ["HR Alignment", "Active Directory", "Provisioning"],
      visual: <OnboardingVisual />
    },
    {
      title: "Incident escalation",
      body: "When something is seriously wrong — a server down, a potential breach, a business-wide outage — it escalates to senior engineers automatically. You are never stuck in a queue when it matters most.",
      tags: ["24/7 Response", "Senior Engineers", "Critical Support"],
      visual: <EscalationVisual />
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-12 md:py-20 relative overflow-hidden border-y border-gray-100">
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 max-w-2xl px-2 text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.3em] mb-4 block" style={fontStyle}
          >
            SCOPE OF SUPPORT
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[40px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-6" style={fontStyle}
          >
            Everything your staff encounter.<br /><span className="text-[#5D00D6]">Covered.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed font-medium max-w-xl" style={fontStyle}
          >
            One agreement. One number to call. Every IT hurdle your team faces — handled by experts who know your environment as well as you do.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverage.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-lg p-8 border border-gray-100 flex flex-col overflow-hidden min-h-[520px] shadow-sm transition-all hover:shadow-xl hover:shadow-[#5D00D6]/5 relative"
            >
              {/* Scaled Component Container - Inheriting F8FAFC behind it to pop the white card */}
              <div className="relative h-[250px] bg-[#F8FAFC] rounded-lg mb-8 overflow-hidden flex items-center justify-center border border-gray-50/80">
                {item.visual}
              </div>
              
              {/* Content Area */}
              <div className="flex flex-col flex-1 text-left px-1">
                <h3 className="text-[18px] md:text-[18px] font-medium text-[#0c1024] mb-3 tracking-tight" style={fontStyle}>
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed font-medium mb-6 max-w-[95%]" style={fontStyle}>
                  {item.body}
                </p>

                {/* Performance Tags - Updated to exact Homepage styling */}
                <div className="mt-auto flex flex-nowrap gap-2 overflow-x-auto no-scrollbar pb-1">
                  {item.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 bg-[#F4F0FA] border border-gray-100 text-[#5D00D6] shadow-sm text-[10px] font-bold rounded-full uppercase tracking-wider whitespace-nowrap" 
                      style={fontStyle}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
