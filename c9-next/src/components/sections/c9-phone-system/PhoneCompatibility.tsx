'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Monitor, Headphones } from 'lucide-react';

const brands = [
  { name: "Yealink", logo: "/images/clients/yealink.png", width: 140 },
  { name: "Cisco", logo: "/images/clients/cisco.png", width: 90 },
  { name: "Poly", logo: "/images/clients/poly.png", width: 110 },
  { name: "Grandstream", logo: "/images/clients/Grandstream.png", width: 160 },
  { name: "Panasonic", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Panasonic_logo.svg", width: 130 },
  { name: "Fanvil", logo: "/images/clients/Fanvii.png", width: 100 },
  { name: "Gigaset", logo: "/images/clients/Gigaset.png", width: 130 },
  { name: "Snom", logo: "/images/clients/snom.png", width: 100 },
  { name: "HTEK", logo: "/images/clients/htek.png", width: 110 }
];

export const PhoneCompatibility = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-50">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        {/* CENTERED HEADER - REDUCED MARGIN */}
        <div className="flex flex-col items-center justify-center text-center mb-12 gap-3">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="c9-eyebrow mb-1 block"
            >
              HARDWARE PARTNERS
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="c9-section-heading max-w-3xl"
            >
              Industry-leading devices, certified by C9.
            </motion.h2>
        </div>

        {/* LIGHT THEME COMPATIBILITY CARD - REDUCED PADDING */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFF] rounded-[40px] p-8 md:p-12 border border-[#5D00D6]/5 shadow-sm relative overflow-hidden"
        >
             <div className="relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-12 gap-2">
                   <h3 className="c9-section-heading font-medium">C9 Voice is compatible with:</h3>
                   <p className="c9-body !text-slate-500 max-w-lg text-[16px]">
                     Got your own phones? C9 Voice works with most major brands.
                   </p>
                </div>

                {/* LOGO GRID - BALANCED SIZES */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-10 items-center justify-items-center">
                  {brands.map((brand, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center justify-center group h-14 w-full"
                    >
                       <img 
                         src={brand.logo} 
                         alt={brand.name} 
                         className="max-h-10 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                         style={{ width: `${brand.width}px` }}
                       />
                    </motion.div>
                  ))}
                </div>

                {/* TRUST LIST - COMPACT */}
                <div className="mt-16 pt-10 border-t border-gray-200/50 flex flex-wrap gap-x-12 gap-y-6 items-center justify-center">
                   <div className="flex items-center gap-3 group cursor-default">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                        <Phone size={18} className="stroke-[1.5]" />
                      </div>
                      <span className="c9-eyebrow !text-slate-500 !text-[10px] group-hover:text-[#0c1024] transition-colors uppercase tracking-widest">IP Phones</span>
                   </div>
                   <div className="flex items-center gap-3 group cursor-default">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                        <Headphones size={18} className="stroke-[1.5]" />
                      </div>
                      <span className="c9-eyebrow !text-slate-500 !text-[10px] group-hover:text-[#0c1024] transition-colors uppercase tracking-widest">Headsets</span>
                   </div>
                   <div className="flex items-center gap-3 group cursor-default">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                        <Monitor size={18} className="stroke-[1.5]" />
                      </div>
                      <span className="c9-eyebrow !text-slate-500 !text-[10px] group-hover:text-[#0c1024] transition-colors uppercase tracking-widest">Video Conf</span>
                   </div>
                </div>
             </div>
        </motion.div>
      </div>
    </section>
  );
};
