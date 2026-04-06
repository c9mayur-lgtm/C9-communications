import React from 'react';

export const WpSimplifyingIT = () => {
  return (
    <section className="py-10 md:py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="c9-eyebrow mb-4 block">PROVEN EXPERIENCE</span>
          <h2 className="c9-section-heading text-[#0c1024]">
            Simplifying IT for a complex world.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {[
            { 
              title: 'Cost-effectiveness', 
              desc: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.',
              icon: '/images/icons/cost-effectiveness.png?v=2'
            },
            { 
              title: 'Innovative Technology', 
              desc: 'We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead.',
              icon: '/images/icons/innovative-technology.png?v=2'
            },
            { 
              title: 'Industry Expertise', 
              desc: 'We specialize in serving specific industries, such as healthcare, finance, or manufacturing.',
              icon: '/images/icons/industry-expertise.png?v=2'
            },
            { 
              title: 'Scalability', 
              desc: 'Our solutions are scalable and can grow with your business, ensuring that you get the most value.',
              icon: '/images/icons/scalability.png?v=2'
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
