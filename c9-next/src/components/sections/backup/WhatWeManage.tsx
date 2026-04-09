import React from 'react';
import { Database, Globe, Shield, CheckSquare, FileText, Activity } from 'lucide-react';

const F = '"Proxima Nova", sans-serif';

const services = [
  { icon: Database, title: 'Managed Backup', body: 'Automated backup of servers, workstations, cloud environments, and critical data — monitored daily and verified by C9.' },
  { icon: Globe, title: 'Offsite Replication', body: 'Backup data replicated to a geographically separate location — so a site disaster does not take your backup with it.' },
  { icon: Shield, title: 'Ransomware-Resistant Storage', body: 'Immutable backup storage that ransomware cannot encrypt — protecting your recovery point even in a worst-case attack.' },
  { icon: CheckSquare, title: 'Recovery Testing', body: 'Scheduled recovery tests performed on a defined cadence — with test reports provided to your team every time.' },
  { icon: FileText, title: 'DR Planning', body: 'A documented disaster recovery plan covering your key systems, recovery priorities, and the steps your team takes when something goes wrong.' },
  { icon: Activity, title: 'Business Continuity', body: 'Continuity planning beyond IT — identifying critical business functions and ensuring they can operate during an incident.' },
];

export default function WhatWeManage() {
  return (
    <section className="bg-white py-24" style={{ fontFamily: F }}>
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#5D00D6] block mb-3" style={{ fontFamily: F }}>
            SCOPE OF SERVICE
          </span>
          <h2 className="c9-section-heading mt-3" style={{ fontFamily: F }}>
            Everything your business needs to <span className="text-[#5D00D6]">recover from anything.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((svc, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-none p-7 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:border-[#5D00D6]/20 hover:shadow-lg hover:shadow-purple-900/5"
            >
              <div className="w-10 h-10 rounded-none flex items-center justify-center" style={{ backgroundColor: 'rgba(93,0,214,0.08)' }}>
                <svc.icon size={20} style={{ color: '#5D00D6' }} />
              </div>
              <h3 className="text-[18px] font-bold text-[#0c1024] tracking-tight leading-tight" style={{ fontFamily: F }}>{svc.title}</h3>
              <p className="text-[15px] text-[#6B7280] leading-[1.7] font-normal" style={{ fontFamily: F }}>{svc.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
