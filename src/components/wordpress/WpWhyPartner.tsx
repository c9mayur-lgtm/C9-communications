'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall, Wifi, ShieldCheck, Truck, Layers, Headphones, Search, Activity, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CountUp = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = useRef<HTMLSpanElement>(null);
  const startValue = 0;
  
  // Extract numeric part
  const numericMatch = value.match(/[\d.]+/);
  const suffix = value.replace(/[\d.]+/, "");
  const target = numericMatch ? parseFloat(numericMatch[0]) : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start: number | null = null;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / (duration * 1000), 1);
            const current = Math.floor(progress * (target - startValue) + startValue);
            setDisplayValue(current.toString() + suffix);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [value, target, suffix, duration]);

  return <span ref={nodeRef}>{displayValue}</span>;
};

export const WpWhyPartner = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto px-6">
          <span className="c9-eyebrow mb-6 block">ACCOUNTABILITY STRUCTURE</span>
          <h2 className="c9-section-heading">
            One operational owner. One escalation path.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-100">
          {[
            { 
              title: 'Infrastructure Uptime', 
              desc: 'We take direct responsibility for your infrastructure uptime within SLA scope, proactively managing system health to prevent downtime.',
              icon: ShieldCheck,
              tag: 'SLA RESPONSIBILITY',
              metrics: [
                { value: '99.99%', label: 'network uptime' },
                { value: '24/7', label: 'monitoring' }
              ]
            },
            { 
              title: 'Incident Coordination', 
              desc: 'No more managing dozens of technical contacts. We coordinate incident response across all IT and telco vendors on your behalf.',
              icon: Layers,
              tag: 'VENDOR CONTROL',
              metrics: [
                { value: 'Single', label: 'point of contact' },
                { value: '100%', label: 'vendor oversight' }
              ]
            },
            { 
              title: 'Root-Cause Ownership', 
              desc: 'We don’t just fix symptoms. We own the root-cause analysis and ensure long-term stability across your entire environment.',
              icon: Search,
              tag: 'STABILISATION',
              metrics: [
                { value: 'No', label: 'blame shifting' },
                { value: 'Deep', label: 'technical audit' }
              ]
            },
            { 
              title: 'Escalation Management', 
              desc: 'Direct access to senior Australian engineers. No ticket queues or offshore runaround when critical systems are at risk.',
              icon: Headphones,
              tag: 'DIRECT ACCESS',
              metrics: [
                { value: 'Tier-3', label: 'support entry' },
                { value: 'Local', label: 'engineering team' }
              ]
            },
            { 
              title: 'Unified Response', 
              desc: 'A single operational command layer for your business. Consistent reporting, communication, and resolution structure.',
              icon: Activity,
              tag: 'COMMAND LAYER',
              metrics: [
                { value: '1', label: 'accountable owner' },
                { value: 'Real', label: 'time visibility' }
              ]
            },
            { 
              title: 'Predictable Behaviour', 
              desc: 'Transformation from reactive "break-fix" support to a controlled system with defined performance benchmarks.',
              icon: RefreshCw,
              tag: 'SYSTEM CONTROL',
              metrics: [
                { value: 'High', label: 'intent operations' },
                { value: 'Zero', label: 'blind changes' }
              ]
            }
            ].map((block, i) => {
              const Icon = block.icon;
              return (
                <div key={i} className="p-8 md:p-10 lg:p-12 border-r border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300 cursor-default flex flex-col">
                  <div className="mb-4 self-start">
                    <span className="c9-eyebrow !text-[#5D00D6]">
                      {block.tag}
                    </span>
                  </div>
                  <div className="mb-6 mt-4">
                    <Icon size={32} strokeWidth={1.5} color="#5D00D6" fill="none" />
                  </div>
              <h3 className="c9-card-title mb-4">{block.title}</h3>
              <p className="c9-body flex-grow">
                {block.desc}
              </p>

              {/* Metrics Row */}
              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-0">
                {block.metrics.map((m, mi) => (
                  <React.Fragment key={mi}>
                    <div className="flex-1">
                      <div className="text-[28px] font-medium text-[#5D00D6] leading-none tracking-tight">
                        <CountUp value={m.value} />
                      </div>
                      <div className="c9-eyebrow !text-[#6B7280] mt-2">
                        {m.label}
                      </div>
                    </div>
                    {mi === 0 && <div className="h-10 w-[1px] bg-[#5D00D6]/30 mx-6"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button 
            size="lg"
            className="rounded-full shadow-xl px-10 h-14"
            onClick={() => document.querySelector('#consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Infrastructure Assessment 
          </Button>
          <p className="text-[12px] text-slate-400 mt-4 font-medium">Direct Engineer Audit. Operational Control Layer.</p>
        </div>
      </div>
    </section>
  );
};
