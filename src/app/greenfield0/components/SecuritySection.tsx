'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Lock, Zap, Users, RotateCcw, BadgeCheck } from 'lucide-react';

const FEATURES = [
  { icon: <ShieldAlert />, title: 'Network Segmentation', desc: 'Isolating critical operational systems from staff and guest traffic.' },
  { icon: <Lock />, title: 'Endpoint Protection', desc: 'Enterprise-grade security policies applied to every device on the network.' },
  { icon: <Zap />, title: 'Monitoring & Alerts', desc: 'Real-time detection of anomalies and potential security threats.' },
  { icon: <Users />, title: 'Secure Remote Access', desc: 'VPN and zero-trust access for remote staff and management.' },
  { icon: <RotateCcw />, title: 'Recovery Readiness', desc: 'Built-in backup and recovery protocols to ensure business continuity.' },
  { icon: <BadgeCheck />, title: 'Compliance Ready', desc: 'Infrastructure aligned with Australian security and privacy standards.' },
];

export const SecuritySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="c9-eyebrow mb-4"
          >
            Inherent Protection
          </motion.div>
          <h2 className="c9-section-heading mb-6">
            Security Built Into Every Deployment
          </h2>
          <p className="c9-body max-w-2xl mx-auto">
            We don&apos;t treat security as an add-on. It is integrated into the core of your new site infrastructure from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-purple-100 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300">
                {React.cloneElement(feat.icon as React.ReactElement, { size: 28 } as any)}
              </div>
              <h3 className="c9-card-title mb-4">{feat.title}</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-800 font-bold text-lg italic">
            &ldquo;We were operational from day one. Nothing was left incomplete.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};
