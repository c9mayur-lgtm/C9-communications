'use client';

import { useMemo } from 'react';

const MOCK_TESTIMONIALS = [
  {
    text: "Excellent product—durable, intuitive, and exactly what I needed. Customer service was outstanding and very helpful.",
    author: "Paityn Lipshutz",
    role: "CEO & Co Founder at Lemonsqueezy",
    initials: "PL"
  },
  {
    text: "Top-notch quality—easy to set up and performs as promised. The support team was incredibly responsive and attentive.",
    author: "Angel Lubin",
    role: "CEO & Co Founder at Zipline",
    initials: "AL"
  },
  {
    text: "Amazing product—well-built, user-friendly, and just as advertised. The service team exceeded my expectations.",
    author: "Lincoln Stanton",
    role: "CEO & Co Founder at Gumroad",
    initials: "LS"
  },
  {
    text: "Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help.",
    author: "Skylar Rosser",
    role: "Product manager at Orbit",
    initials: "SR"
  },
  {
    text: "Wonderful product—high quality, easy to operate, and exactly what I wanted. Support was quick and very helpful.",
    author: "Corey Franci",
    role: "CEO & Co Founder",
    initials: "CF"
  },
  {
    text: "C9 Communications transformed our multi-site connectivity. We went from constant outages to a rock-solid network within weeks.",
    author: "James T.",
    role: "IT Director, National Retailer",
    initials: "JT"
  },
  {
    text: "Their cloud phone system saved us 35% on telecoms costs. The migration was seamless — they handled everything.",
    author: "Sarah M.",
    role: "COO, Financial Services Firm",
    initials: "SM"
  },
  {
    text: "Finally a telco that understands enterprise. The support team is responsive, knowledgeable, and genuinely invested in our success.",
    author: "Daniel R.",
    role: "Head of Operations, Logistics Co.",
    initials: "DR"
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof MOCK_TESTIMONIALS[0] }) => (
  <div className="tm-card">
    <div className="tm-quote-mark">“</div>
    <p className="tm-text">{testimonial.text}</p>
    <div className="tm-author-block">
      <div className="tm-avatar">{testimonial.initials}</div>
      <div>
        <div className="tm-name">{testimonial.author}</div>
        <div className="tm-role">{testimonial.role}</div>
      </div>
    </div>
  </div>
);

export const TestimonialMarquee = () => {
  // Split into columns for desktop
  const col1 = useMemo(() => MOCK_TESTIMONIALS.slice(0, Math.ceil(MOCK_TESTIMONIALS.length / 3)), []);
  const col2 = useMemo(() => MOCK_TESTIMONIALS.slice(Math.ceil(MOCK_TESTIMONIALS.length / 3), Math.ceil(MOCK_TESTIMONIALS.length / 3) * 2), []);
  const col3 = useMemo(() => MOCK_TESTIMONIALS.slice(Math.ceil(MOCK_TESTIMONIALS.length / 3) * 2), []);

  return (
    <div className="tm-wrapper">
      <div className="tm-mask">
        <div className="tm-grid">
          {/* Column 1 - scrolls UP */}
          <div className="tm-col tm-scroll-up">
            {[...col1, ...col1, ...col1].map((t, i) => (
              <TestimonialCard key={`col1-${i}`} testimonial={t} />
            ))}
          </div>

          {/* Column 2 - scrolls DOWN */}
          <div className="tm-col tm-scroll-down">
            {[...col2, ...col2, ...col2].map((t, i) => (
              <TestimonialCard key={`col2-${i}`} testimonial={t} />
            ))}
          </div>

          {/* Column 3 - scrolls UP (Desktop only) */}
          <div className="tm-col tm-scroll-up hidden-mobile">
            {[...col3, ...col3, ...col3].map((t, i) => (
              <TestimonialCard key={`col3-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
