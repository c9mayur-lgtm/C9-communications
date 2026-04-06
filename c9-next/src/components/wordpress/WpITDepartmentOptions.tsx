'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const OPTIONS = [
  {
    tag: 'IT SUPPORT MANAGED',
    title: "We have an IT department",
    desc: "Partner with us for IT management services to grow your existing IT infrastructure",
    img: "/images/it_support_geek.png",
    cardTitle: "Existing IT Infrastructure"
  },
  {
    tag: 'FULLY MANAGED SOLUTIONS',
    title: "Don't have an IT department",
    desc: "Work with us as your one-stop shop for IT management and solutions",
    img: "/images/frustrated_worker.png",
    cardTitle: "One-Stop Shop IT Management"
  }
];

export const WpITDepartmentOptions = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {OPTIONS.map((opt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              {/* Image Container (Matching Case Study Style) */}
              <div className="relative aspect-[16/10] rounded-none overflow-hidden mb-10 shadow-2xl shadow-purple-900/10 bg-slate-100">
                <img 
                  src={opt.img} 
                  alt={opt.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Brand Tint Overlays */}
                <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay group-hover:bg-[#5D00D6]/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/60 via-transparent to-transparent" />
              </div>

              {/* Text Area (Matching Case Study Style) */}
              <div className="px-2">
                 <h3 className="text-[28px] md:text-[32px] font-medium text-[#0c1024] mb-4 group-hover:text-[#5D00D6] transition-colors leading-[1.1] tracking-tight">
                   {opt.title}
                 </h3>
                 <div className="h-[1px] w-full bg-gray-100 mb-6" />
                 <p className="c9-body !text-[17px] mb-8 line-clamp-2">
                   {opt.desc}
                 </p>
                 <div className="flex items-center gap-2 text-[#5D00D6] font-bold text-[13px] leading-none uppercase tracking-[0.2em] group/link">
                    Explore solutions 
                    <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
