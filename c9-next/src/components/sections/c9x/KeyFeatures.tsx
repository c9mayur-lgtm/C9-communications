'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Headset, Repeat, ListOrdered, Inbox, Clock, Mail, Users, Music, Printer, Mic, Volume2, Link2 } from 'lucide-react';

const features = [
  { title: "Auto Attendant", body: "Enable callers to select their destination via voice options — route calls intelligently without a receptionist.", icon: Headset },
  { title: "Follow Me", body: "Set diversions through to voicemail or another number at any time — never miss a call regardless of where you are.", icon: Repeat },
  { title: "Call Queues", body: "Distribute incoming calls to agents as they become available — professional call handling for any team size.", icon: ListOrdered },
  { title: "Call Parking", body: "Place a caller on hold and retrieve from any handset anywhere in the system — seamless internal call management.", icon: Inbox },
  { title: "Time-based Calling", body: "Set your business hours and route calls differently after hours, on weekends, or on public holidays — automatically.", icon: Clock },
  { title: "Voicemail to Email", body: "Voicemail messages delivered directly to your email inbox — never miss an opportunity again regardless of where you are.", icon: Mail },
  { title: "Conference Calling", body: "Host multi-party conference calls directly through C9 Voice — no third-party conferencing service required.", icon: Users },
  { title: "On Hold Music and Messaging", body: "Professionally recorded on-hold messages and music — set your business hours and customer experience standards.", icon: Music },
  { title: "eFax", body: "Send and receive faxes digitally through C9 Voice — no fax machine required, full fax number portability supported.", icon: Printer },
  { title: "Call Recording", body: "Greater visibility over customer contact through simple recording and retrieval options — compliance-ready and easy to access.", icon: Mic },
  { title: "HD Voice", body: "Full crystal-clear sound on every call — superior audio quality through Yealink-certified IP phone hardware and C9 Voice cloud infrastructure.", icon: Volume2 },
  { title: "Direct Microsoft Teams Link", body: "Effortless, reliable connectivity for your agile employees — make and receive PSTN calls directly from your Teams application.", icon: Link2 }
];

export const KeyFeatures = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0c1024] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="c9-eyebrow mb-4 block"
          >
            KEY FEATURES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="c9-section-heading !text-white mb-6 max-w-3xl"
          >
            80+ features. Here are the<br className="hidden md:block" /> ones businesses love most.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="c9-body !text-slate-400 max-w-2xl"
          >
            Streamline workflows and improve communication with tools designed for high-performance teams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col gap-5 border-l border-white/5 pl-8 hover:border-[#5D00D6]/40 transition-colors group"
            >
              <div className="text-[#5D00D6] group-hover:scale-110 transition-transform origin-left">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="c9-card-title !text-white mb-3 group-hover:text-[#5D00D6] transition-colors">{feature.title}</h3>
                <p className="c9-body !text-slate-400 !font-normal">
                  {feature.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
    </section>
  );
};
