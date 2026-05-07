'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

import { Label } from '@/components/design-system/Typography';

const BUSINESS_TYPES = [
  { id: 'office', label: 'Office / Corporate', emoji: '🏢' },
  { id: 'retail', label: 'Retail / Shopfront', emoji: '🏪' },
  { id: 'warehouse', label: 'Warehouse / Industrial', emoji: '🏭' },
  { id: 'hospitality', label: 'Hospitality / Food Service', emoji: '🍽️' },
  { id: 'medical', label: 'Medical / Healthcare', emoji: '🏥' },
  { id: 'education', label: 'Education / Training', emoji: '🏫' },
];

const SERVICES = [
  { id: 'internet', label: 'Internet & NBN', emoji: '🌐' },
  { id: 'wifi', label: 'WiFi & Networking', emoji: '📶' },
  { id: 'phones', label: 'Phone System', emoji: '☎️' },
  { id: 'computers', label: 'Computers & Devices', emoji: '💻' },
  { id: 'cctv', label: 'CCTV & Security', emoji: '📷' },
  { id: 'print', label: 'Print Solutions', emoji: '🖨️' },
  { id: 'm365', label: 'Microsoft 365', emoji: '📋' },
  { id: 'visitors', label: 'Visitor Management', emoji: '🚪' },
  { id: 'cyber', label: 'Cyber Security', emoji: '🔒' },
];

const TIMELINES = [
  { id: 'urgent', label: 'Opening in < 4 weeks' },
  { id: 'soon', label: 'Opening in 4–8 weeks' },
  { id: 'planning', label: 'Opening in 8+ weeks / Planning phase' },
];

interface GreenfieldQualifierProps {
  onComplete?: (selections: { businessType: string; services: string[]; timeline: string }) => void;
}

export const GreenfieldQualifier = ({ onComplete }: GreenfieldQualifierProps) => {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('');

  const toggleService = (id: string) => {
    setServices(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  const handleGetPlan = () => {
    if (onComplete) onComplete({ businessType, services, timeline });
    document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedBusiness = BUSINESS_TYPES.find(b => b.id === businessType);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-10 justify-center">
        {[1,2,3].map(s => (
          <React.Fragment key={s}>
            <div className={`w-10 h-10 rounded-none flex items-center justify-center text-[14px] font-black transition-all ${step >= s ? 'bg-[#0027E2] text-white' : 'bg-white border border-slate-200 text-slate-400'}`}>{s}</div>
            {s < 3 && <div className={`h-0.5 w-16 transition-all ${step > s ? 'bg-[#0027E2]' : 'bg-slate-200'}`} />}
          </React.Fragment>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <Label className="text-center !text-[#0A0F1E]/40 mb-8 block">Step 1 — What type of business?</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {BUSINESS_TYPES.map(b => (
                <button key={b.id} onClick={() => { setBusinessType(b.id); setStep(2); }}
                  className={`flex flex-col items-center gap-3 p-6 rounded-none border-2 font-black text-[13px] uppercase tracking-tight transition-all ${businessType === b.id ? 'bg-[#0027E2] border-[#0027E2] text-white shadow-xl shadow-blue-900/20' : 'bg-white border-slate-100 text-[#0A0F1E] hover:border-[#0027E2]/40'}`}>
                  <span className="text-3xl">{b.emoji}</span>
                  <span className="text-center leading-tight">{b.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <Label className="text-center !text-[#0A0F1E]/40 mb-8 block">Step 2 — What does your site need?</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {SERVICES.map(s => (
                <button key={s.id} onClick={() => toggleService(s.id)}
                  className={`flex items-center gap-3 p-5 rounded-none border-2 font-black text-[13px] uppercase tracking-tight transition-all ${services.includes(s.id) ? 'bg-[#0027E2] border-[#0027E2] text-white shadow-xl shadow-blue-900/20' : 'bg-white border-slate-100 text-[#0A0F1E] hover:border-[#0027E2]/40'}`}>
                  <span className="text-xl shrink-0">{s.emoji}</span>
                  <span className="text-left leading-tight">{s.label}</span>
                  {services.includes(s.id) && <CheckCircle size={14} className="ml-auto shrink-0" />}
                </button>
              ))}
            </div>
            <div className="flex gap-4 justify-center">
              <button onClick={() => setStep(1)} className="px-8 py-4 rounded-none border-2 border-slate-200 text-[#0A0F1E] font-black text-[13px] uppercase tracking-widest hover:bg-slate-50 transition-all">Back</button>
              <button onClick={() => services.length > 0 && setStep(3)} className={`px-10 py-4 rounded-none font-black text-[13px] uppercase tracking-widest transition-all flex items-center gap-3 ${services.length > 0 ? 'bg-[#0027E2] text-white hover:bg-[#001bc2] shadow-xl shadow-blue-900/20' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}>
                Next <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <Label className="text-center !text-[#0A0F1E]/40 mb-8 block">Step 3 — When do you open?</Label>
            <div className="flex flex-col gap-3 mb-10">
              {TIMELINES.map(t => (
                <button key={t.id} onClick={() => setTimeline(t.id)}
                  className={`p-6 rounded-none border-2 font-black text-[15px] uppercase tracking-tight transition-all text-left flex items-center justify-between ${timeline === t.id ? 'bg-[#0027E2] border-[#0027E2] text-white shadow-xl shadow-blue-900/20' : 'bg-white border-slate-100 text-[#0A0F1E] hover:border-[#0027E2]/40'}`}>
                  {t.label}
                  {timeline === t.id && <CheckCircle size={20} />}
                </button>
              ))}
            </div>

            {timeline && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-none border-2 border-[#0027E2]/10 p-8 mb-10 text-center shadow-2xl">
                <Label className="!text-[#0027E2] mb-3 block">Your setup</Label>
                <p className="text-[#0A0F1E] font-black text-2xl mb-2">
                  {selectedBusiness?.emoji} {selectedBusiness?.label}
                </p>
                <p className="text-[#0A0F1E]/60 font-black text-[13px] uppercase tracking-widest">
                  {services.length} core services identified
                </p>
              </motion.div>
            )}

            <div className="flex gap-4 justify-center">
              <button onClick={() => setStep(2)} className="px-8 py-4 rounded-none border-2 border-slate-200 text-[#0A0F1E] font-black text-[13px] uppercase tracking-widest hover:bg-slate-50 transition-all">Back</button>
              <button onClick={handleGetPlan} disabled={!timeline}
                className={`px-12 py-5 rounded-none font-black text-[14px] uppercase tracking-widest transition-all flex items-center gap-4 ${timeline ? 'bg-[#0027E2] text-white hover:bg-[#001bc2] shadow-2xl shadow-blue-900/40' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}>
                Get My Setup Plan <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
