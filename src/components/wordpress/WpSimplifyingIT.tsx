'use client';

import React from 'react';

export const WpSimplifyingIT = () => {
  return (
    <section className="py-10 md:py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="c9-eyebrow mb-4 block">WHY BUSINESSES CHOOSE C9</span>
          <h2 className="c9-section-heading text-[#0c1024]">
            Why Businesses Choose C9
          </h2>
          <p className="c9-body mt-4">We don’t just support IT—we take ownership of it.</p>
        </div>

        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {[
            { 
              title: 'Single Accountability', 
              desc: 'One partner responsible for everything—from your internet connection to your endpoint security.',
              icon: '/images/icons/industry-expertise.png'
            },
            { 
              title: 'Proven Multi-Site Capability', 
              desc: 'Consistent delivery and managed support across multiple locations, nationwide.',
              icon: '/images/icons/scalability.png'
            },
            { 
              title: 'Built for Reliability', 
              desc: 'Infrastructure designed to minimise downtime and operational disruption.',
              icon: '/images/icons/cost-effectiveness.png'
            },
            { 
              title: 'Integrated Systems', 
              desc: 'IT, Telco, and Security working as one cohesive system, managed by one team.',
              icon: '/images/icons/innovative-technology.png'
            }
          ].map((f, i) => (
            <div key={i} className={`flex flex-col items-start flex-1 ${i === 0 ? 'pb-6 lg:pb-0 lg:pr-8' : 
              i === 3 ? 'pt-6 lg:pt-0 lg:pl-8' : 
              'py-6 lg:py-0 lg:px-8'}`}>
              <div className="w-14 h-14 mb-6 flex items-center justify-start">
                <img src={f.icon} alt={f.title} className="max-w-full max-h-full object-contain object-left" />
              </div>
              <h3 className="c9-card-title mb-3 text-[#0c1024]">{f.title}</h3>
              <p className="c9-body">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
