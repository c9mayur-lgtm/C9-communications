'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Building2, Store, Warehouse, Utensils, Plus,
  Shield, Network, Monitor, Phone, Globe, Printer, Users,
  X, Loader2, Zap, CheckCircle, ChevronLeft, ArrowRight, Clock, Sparkles
} from 'lucide-react';
import { C9Button } from '@/components/design-system/C9Button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface LeadQualifierProps {
  isOpen?: boolean;
  onClose?: () => void;
  isEmbedded?: boolean;
}

// 4 compact steps instead of 3 bloated ones
const TOTAL_STEPS = 4;

export const LeadQualifier = ({ isOpen, onClose, isEmbedded = false }: LeadQualifierProps) => {
  const [step, setStep] = useState(1);
  const [sel, setSel] = useState({
    siteType: '', challenge: '',
    services: [] as string[],
    timeline: '',
    firstName: '', lastName: '', email: '', company: '', phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const next = () => setStep((p) => Math.min(p + 1, TOTAL_STEPS));
  const back = () => setStep((p) => Math.max(p - 1, 1));
  const pick = (key: string, val: string) => setSel((p) => ({ ...p, [key]: val }));
  const toggleService = (id: string) =>
    setSel((p) => ({
      ...p,
      services: p.services.includes(id) ? p.services.filter((s) => s !== id) : [...p.services, id],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1600));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // ── Reusable option pill ──
  const Pill = ({ id, label, icon, field, onClick }: any) => {
    const active = field === id;
    return (
      <button type="button" onClick={onClick}
        className={`flex flex-col items-center gap-2 py-4 px-2 rounded-xl border-2 transition-all duration-150 w-full
          ${active ? 'border-[#5D00D6] bg-purple-50 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'}`}
      >
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all
          ${active ? 'bg-[#5D00D6] text-white' : 'bg-slate-50 text-slate-400'}`}>
          {React.cloneElement(icon, { size: 18 })}
        </div>
        <span className={`text-[12px] font-bold leading-tight text-center ${active ? 'text-[#5D00D6]' : 'text-slate-500'}`}>{label}</span>
      </button>
    );
  };

  // ── Reusable row option ──
  const Row = ({ id, label, icon, active, onClick }: any) => (
    <button type="button" onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left w-full transition-all duration-150
        ${active ? 'border-[#5D00D6] bg-purple-50 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'}`}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all
        ${active ? 'bg-[#5D00D6] text-white' : 'bg-slate-50 text-slate-400'}`}>
        {React.cloneElement(icon, { size: 16 })}
      </div>
      <span className={`text-[13px] font-semibold ${active ? 'text-[#0c1024]' : 'text-slate-500'}`}>{label}</span>
      {active && <CheckCircle size={16} className="ml-auto text-[#5D00D6] shrink-0" />}
    </button>
  );

  const shell = (
    <div className="flex flex-col bg-white font-dm-sans rounded-2xl overflow-hidden max-h-[82vh]">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-50 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#5D00D6] flex items-center justify-center shadow-md shadow-purple-400/30">
            <Zap size={16} className="text-white" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#5D00D6] leading-none mb-0.5">Greenfield Planner</p>
            <p className="text-[11px] text-slate-400 font-semibold leading-none">
              {isSuccess ? 'Complete!' : `Step ${step} of ${TOTAL_STEPS}`}
            </p>
          </div>
        </div>
        <button onClick={onClose} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 transition-colors">
          <X size={14} />
        </button>
      </div>

      {/* Progress bar */}
      {!isSuccess && (
        <div className="flex gap-1 px-5 pt-3 pb-0 shrink-0">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-400 ${step > i ? 'bg-[#5D00D6]' : 'bg-slate-100'}`} />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isSuccess ? 'success' : step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2 }}
            className="p-5"
          >

            {/* ── STEP 1: Site Type ── */}
            {!isSuccess && step === 1 && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-[17px] font-bold text-[#0c1024] font-clash leading-snug">What type of site are you launching?</h2>
                  <p className="text-[12px] text-slate-400 mt-0.5">Select the one that best fits your business.</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'retail', label: 'Retail', icon: <Store /> },
                    { id: 'office', label: 'Office', icon: <Building2 /> },
                    { id: 'warehouse', label: 'Warehouse', icon: <Warehouse /> },
                    { id: 'hospitality', label: 'Hospitality', icon: <Utensils /> },
                    { id: 'other', label: 'Other', icon: <Plus /> },
                  ].map((o) => (
                    <Pill key={o.id} id={o.id} label={o.label} icon={o.icon} field={sel.siteType} onClick={() => pick('siteType', o.id)} />
                  ))}
                </div>
                <C9Button disabled={!sel.siteType} onClick={next} className="w-full h-11 rounded-full text-sm mt-2">
                  Continue <ArrowRight size={15} className="ml-1" />
                </C9Button>
              </div>
            )}

            {/* ── STEP 2: Challenge + Wishlist ── */}
            {!isSuccess && step === 2 && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-[17px] font-bold text-[#0c1024] font-clash leading-snug">What's your primary challenge?</h2>
                  <p className="text-[12px] text-slate-400 mt-0.5">This helps us prioritize your plan.</p>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'timeline', label: 'Tight Opening Timeline', icon: <Clock /> },
                    { id: 'budget', label: 'Fixed Budget Rollout', icon: <Zap /> },
                    { id: 'coordination', label: 'Multi-Vendor Coordination', icon: <Users /> },
                  ].map((o) => (
                    <Row key={o.id} id={o.id} label={o.label} icon={o.icon} active={sel.challenge === o.id} onClick={() => pick('challenge', o.id)} />
                  ))}
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <C9Button disabled={!sel.challenge} onClick={next} className="w-full h-11 rounded-full text-sm">
                    Continue <ArrowRight size={15} className="ml-1" />
                  </C9Button>
                  <button type="button" onClick={back} className="flex items-center justify-center gap-1 text-slate-400 hover:text-slate-600 text-xs font-semibold transition-colors">
                    <ChevronLeft size={13} /> Back
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 3: Wishlist ── */}
            {!isSuccess && step === 3 && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-[17px] font-bold text-[#0c1024] font-clash leading-snug">Build your infrastructure wishlist</h2>
                  <p className="text-[12px] text-slate-400 mt-0.5">Select everything your new site needs.</p>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'internet',   label: 'Business Internet & Fibre',   icon: <Globe /> },
                    { id: 'networking', label: 'Networking & WiFi',            icon: <Network /> },
                    { id: 'phones',     label: 'Cloud Phone System',           icon: <Phone /> },
                    { id: 'security',   label: 'CCTV & AI Security',           icon: <Shield /> },
                    { id: 'workplace',  label: 'Modern Workplace (M365)',      icon: <Monitor /> },
                    { id: 'print',      label: 'Managed Print Solutions',      icon: <Printer /> },
                    { id: 'visitor',    label: 'Visitor & Contractor Mgmt',   icon: <Users /> },
                  ].map((o) => (
                    <button key={o.id} type="button" onClick={() => toggleService(o.id)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border-2 text-left w-full transition-all duration-150
                        ${sel.services.includes(o.id) ? 'border-[#5D00D6] bg-purple-50' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all
                        ${sel.services.includes(o.id) ? 'bg-[#5D00D6] text-white' : 'bg-slate-50 text-slate-400'}`}>
                        {React.cloneElement(o.icon, { size: 14 })}
                      </div>
                      <span className={`text-[13px] font-semibold ${sel.services.includes(o.id) ? 'text-[#0c1024]' : 'text-slate-500'}`}>{o.label}</span>
                      {sel.services.includes(o.id) && <CheckCircle size={14} className="ml-auto text-[#5D00D6] shrink-0" />}
                    </button>
                  ))}
                </div>
                {sel.services.length > 0 && (
                  <p className="text-[11px] text-[#5D00D6] font-bold text-center">{sel.services.length} service{sel.services.length > 1 ? 's' : ''} selected ✓</p>
                )}
                <div className="flex flex-col gap-2 pt-1">
                  <C9Button disabled={sel.services.length === 0} onClick={next} className="w-full h-11 rounded-full text-sm">
                    Final Step <ArrowRight size={15} className="ml-1" />
                  </C9Button>
                  <button type="button" onClick={back} className="flex items-center justify-center gap-1 text-slate-400 hover:text-slate-600 text-xs font-semibold transition-colors">
                    <ChevronLeft size={13} /> Back
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 4: Timeline + Contact ── */}
            {!isSuccess && step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h2 className="text-[17px] font-bold text-[#0c1024] font-clash leading-snug">Your details & go-live date</h2>
                  <p className="text-[12px] text-slate-400 mt-0.5">We'll send your custom plan to your email.</p>
                </div>
                {/* Timeline */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: '4wks', label: '< 4 Weeks' },
                    { id: '4-8wks', label: '4–8 Weeks' },
                    { id: '8-12wks', label: '8–12 Weeks' },
                    { id: '12wks+', label: '12+ Weeks' },
                  ].map((o) => {
                    const active = sel.timeline === o.id;
                    return (
                      <button key={o.id} type="button" onClick={() => pick('timeline', o.id)}
                        className={`flex items-center justify-between px-3 py-3 rounded-xl border-2 transition-all duration-150
                          ${active ? 'border-[#5D00D6] bg-purple-50' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                      >
                        <span className={`text-[12px] font-bold ${active ? 'text-[#0c1024]' : 'text-slate-500'}`}>{o.label}</span>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${active ? 'border-[#5D00D6] bg-[#5D00D6]' : 'border-slate-200'}`}>
                          {active && <CheckCircle2 size={9} className="text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {/* Contact fields */}
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="First Name" required value={sel.firstName} onChange={(e) => pick('firstName', e.target.value)} className="h-10 rounded-xl bg-slate-50 border-slate-100 text-sm" />
                    <Input placeholder="Last Name" required value={sel.lastName} onChange={(e) => pick('lastName', e.target.value)} className="h-10 rounded-xl bg-slate-50 border-slate-100 text-sm" />
                  </div>
                  <Input placeholder="Work Email" type="email" required value={sel.email} onChange={(e) => pick('email', e.target.value)} className="h-10 rounded-xl bg-slate-50 border-slate-100 text-sm" />
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Company" required value={sel.company} onChange={(e) => pick('company', e.target.value)} className="h-10 rounded-xl bg-slate-50 border-slate-100 text-sm" />
                    <Input placeholder="Phone" required value={sel.phone} onChange={(e) => pick('phone', e.target.value)} className="h-10 rounded-xl bg-slate-50 border-slate-100 text-sm" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <C9Button type="submit" disabled={isSubmitting || !sel.timeline} className="w-full h-11 rounded-full text-sm shadow-lg shadow-purple-200">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : 'Generate My Setup Plan'}
                  </C9Button>
                  <button type="button" onClick={back} className="flex items-center justify-center gap-1 text-slate-400 hover:text-slate-600 text-xs font-semibold transition-colors">
                    <ChevronLeft size={13} /> Back to Wishlist
                  </button>
                </div>
              </form>
            )}

            {/* ── SUCCESS ── */}
            {isSuccess && (
              <div className="flex flex-col items-center text-center space-y-4 py-6">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5D00D6] to-[#7C3AED] text-white flex items-center justify-center shadow-xl shadow-purple-300"
                >
                  <Sparkles size={32} />
                </motion.div>
                <div>
                  <h2 className="text-xl font-bold text-[#0c1024] font-clash">Plan Generated!</h2>
                  <p className="text-[13px] text-slate-500 mt-1 max-w-[260px] mx-auto leading-relaxed">
                    Thanks <strong>{sel.firstName}</strong>. An Aussie expert will contact you within 2 hours.
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 w-full text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#5D00D6] mb-1">What Happens Next</p>
                  <p className="text-[13px] font-bold text-[#0c1024]">Your tailored infrastructure plan will be emailed to {sel.email}.</p>
                </div>
                <C9Button onClick={onClose} className="rounded-full px-10 h-11 text-sm">
                  Close Window
                </C9Button>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  if (isEmbedded) {
    return (
      <div className="w-full overflow-hidden rounded-2xl shadow-xl shadow-slate-100 border border-slate-100">
        {shell}
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose?.()}>
      <DialogContent
        className="max-w-[420px] w-full p-0 border border-slate-100 overflow-hidden rounded-2xl shadow-2xl shadow-slate-300/30 bg-white !top-[4vh] !translate-y-0"
      >
        {shell}
      </DialogContent>
    </Dialog>
  );
};
