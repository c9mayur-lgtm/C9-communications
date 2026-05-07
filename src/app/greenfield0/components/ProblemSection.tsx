'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Network, DollarSign, Users } from 'lucide-react';

const PROBLEMS = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Multiple Vendors → Zero Accountability',
    description: 'Each contractor pointing at the other when systems don\'t integrate.',
    color: 'rose'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Delays in Cabling, Network, or Telco',
    description: 'Missed dependencies that push back your entire operational timeline.',
    color: 'amber'
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Systems Not Working Together',
    description: 'Teams arrive to find patchy Wi-Fi, non-functional phones, or offline POS.',
    color: 'orange'
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Unexpected Costs & Rework',
    description: 'Emergency fixes and return visits that quickly blow out the project budget.',
    color: 'red'
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-16 bg-white font-dm-sans">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="c9-eyebrow mb-4"
          >
            The Critical Risk
          </motion.div>
          <h2 className="c9-section-heading mb-6 font-clash">
            Why Most New Site Launches Fail
          </h2>
          <p className="c9-body leading-relaxed text-slate-500">
            Opening a new site shouldn&apos;t be a technical gamble. But when multiple vendors are involved without a single owner, the same patterns emerge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-rose-100 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {prob.icon}
              </div>
              <h3 className="c9-card-title mb-4 font-clash text-[#0c1024]">{prob.title}</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{prob.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
