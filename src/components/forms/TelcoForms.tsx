'use client';

import React, { useState } from 'react';
import { Shield, Clock, Zap, Phone, Wifi, Mic2, Network, Globe } from 'lucide-react';
import { C9Button } from '@/components/design-system/C9Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { submitConsultationForm } from '@/app/actions/form-actions';

interface BaseFormProps {
  onSuccess: () => void;
  productName: string;
}

const SuccessState = ({ onReset }: { onReset: () => void }) => (
  <div className="text-center py-12 px-6">
    <div className="w-20 h-20 bg-[#5D00D6] rounded-3xl flex items-center justify-center text-white mb-8 mx-auto shadow-xl shadow-purple-900/20">
      <Zap size={40} />
    </div>
    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-clash">Request Received</h3>
    <p className="text-slate-600 mb-10 max-w-sm mx-auto leading-relaxed">
      Thanks. We’ve got your details. A C9 engineer is already looking into it and will get back to you within 2 hours with a clear plan.
    </p>
    <C9Button onClick={onReset} size="lg" className="rounded-full px-12">
      Send Another Request
    </C9Button>
  </div>
);

const FormFooter = ({ isSubmitting, ctaText }: { isSubmitting: boolean; ctaText: string }) => (
  <div className="pt-6">
    <C9Button 
      type="submit" 
      disabled={isSubmitting} 
      size="lg" 
      className="w-full rounded-full shadow-2xl shadow-purple-900/30 h-14"
    >
      {isSubmitting ? "Processing..." : ctaText}
    </C9Button>
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest opacity-80">
        <span className="flex items-center gap-1.5 whitespace-nowrap"><Shield size={12} className="text-[#5D00D6]" /> Engineer Review</span>
        <span className="flex items-center gap-1.5 whitespace-nowrap"><Clock size={12} className="text-[#5D00D6]" /> 2H Response</span>
      </div>
      <p className="text-[12px] text-slate-400 font-medium text-center">No confusing jargon. No pressure. Just practical help.</p>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   1. PHONE SYSTEM FORM
   ───────────────────────────────────────────────────────── */
export const PhoneSystemForm = ({ onSuccess, productName }: BaseFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', organisation: '',
    users: '', setup: 'Cloud / Hosted', needsHandsets: 'Yes'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitConsultationForm({
      ...formData,
      path: `Telco: ${productName}`,
      message: `Product: ${productName}\nUsers: ${formData.users}\nSetup: ${formData.setup}\nHandsets: ${formData.needsHandsets}`
    });
    setIsSubmitting(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Name</Label>
          <Input required placeholder="John" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="rounded-xl h-11" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Name</Label>
          <Input required placeholder="Doe" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="rounded-xl h-11" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Work Email</Label>
        <Input required type="email" placeholder="john@company.com.au" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="rounded-xl h-11" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Approx. Users</Label>
          <Input required type="number" placeholder="e.g. 15" value={formData.users} onChange={e => setFormData({...formData, users: e.target.value})} className="rounded-xl h-11" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Need Handsets?</Label>
          <select value={formData.needsHandsets} onChange={e => setFormData({...formData, needsHandsets: e.target.value})} className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold outline-none focus:border-[#5D00D6]">
            <option>Yes</option>
            <option>No (Softphones only)</option>
            <option>Not Sure</option>
          </select>
        </div>
      </div>
      <FormFooter isSubmitting={isSubmitting} ctaText="Get Phone System Quote" />
    </form>
  );
};

/* ─────────────────────────────────────────────────────────
   2. BUSINESS INTERNET FORM (nbn, Fibre, Ethernet)
   ───────────────────────────────────────────────────────── */
export const InternetForm = ({ onSuccess, productName }: BaseFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', organisation: '',
    address: '', currentProvider: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitConsultationForm({
      ...formData,
      path: `Telco: ${productName}`,
      message: `Product: ${productName}\nAddress: ${formData.address}\nProvider: ${formData.currentProvider}`
    });
    setIsSubmitting(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Name</Label>
          <Input required placeholder="John" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="rounded-xl h-11" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Name</Label>
          <Input required placeholder="Doe" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="rounded-xl h-11" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Work Email</Label>
        <Input required type="email" placeholder="john@company.com.au" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="rounded-xl h-11" />
      </div>
      <div className="space-y-1.5">
        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Installation Address</Label>
        <Input required placeholder="123 Business St, Sydney NSW 2000" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="rounded-xl h-11" />
      </div>
      <FormFooter isSubmitting={isSubmitting} ctaText={`Check ${productName} Availability`} />
    </form>
  );
};

/* ─────────────────────────────────────────────────────────
   3. AI VOICE FORM
   ───────────────────────────────────────────────────────── */
export const AIVoiceForm = ({ onSuccess, productName }: BaseFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', organisation: '',
    callVolume: 'Low (<500/mo)', useCase: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitConsultationForm({
      ...formData,
      path: `Telco: ${productName}`,
      message: `Product: ${productName}\nVolume: ${formData.callVolume}\nUse Case: ${formData.useCase}`
    });
    setIsSubmitting(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Name</Label>
          <Input required placeholder="John" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="rounded-xl h-11" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Name</Label>
          <Input required placeholder="Doe" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="rounded-xl h-11" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Work Email</Label>
        <Input required type="email" placeholder="john@company.com.au" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="rounded-xl h-11" />
      </div>
      <div className="space-y-1.5">
        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Call Volume</Label>
        <select value={formData.callVolume} onChange={e => setFormData({...formData, callVolume: e.target.value})} className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold outline-none focus:border-[#5D00D6]">
          <option>Low (&lt;500/mo)</option>
          <option>Medium (500 - 2,000/mo)</option>
          <option>High (&gt;2,000/mo)</option>
        </select>
      </div>
      <div className="space-y-1.5">
        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tell us your use case</Label>
        <Textarea required placeholder="e.g. Automated reception, after-hours booking..." value={formData.useCase} onChange={e => setFormData({...formData, useCase: e.target.value})} className="rounded-xl min-h-[80px]" />
      </div>
      <FormFooter isSubmitting={isSubmitting} ctaText="Explore AI Voice Solutions" />
    </form>
  );
};

/* ─────────────────────────────────────────────────────────
   4. MODAL WRAPPER
   ───────────────────────────────────────────────────────── */
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface TelcoModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  productType: 'phone' | 'internet' | 'ai' | 'generic';
  productName: string;
}

export const TelcoProductModal = ({ isOpen, onOpenChange, productType, productName }: TelcoModalProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const renderForm = () => {
    const props = { onSuccess: () => setIsSuccess(true), productName };
    switch (productType) {
      case 'phone': return <PhoneSystemForm {...props} />;
      case 'internet': return <InternetForm {...props} />;
      case 'ai': return <AIVoiceForm {...props} />;
      default: return (
        <form onSubmit={(e) => { e.preventDefault(); setIsSuccess(true); }} className="space-y-5">
           <div className="text-slate-500 text-center py-4">Generic Inquiry Form Placeholder</div>
           <FormFooter isSubmitting={false} ctaText="Submit Inquiry" />
        </form>
      );
    }
  };

  const getIcon = () => {
    switch (productType) {
      case 'phone': return <Phone size={24} />;
      case 'internet': return <Wifi size={24} />;
      case 'ai': return <Mic2 size={24} />;
      default: return <Zap size={24} />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { onOpenChange(open); if(!open) setIsSuccess(false); }}>
      <DialogContent className="max-w-[95%] md:max-w-[550px] p-0 overflow-hidden border-none rounded-[32px] bg-white shadow-2xl">
        <div className="relative p-8 md:p-12">
          <DialogClose className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 transition-colors text-slate-300 hover:text-slate-500 z-50">
            <X size={20} />
          </DialogClose>

          {isSuccess ? (
            <SuccessState onReset={() => setIsSuccess(false)} />
          ) : (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6]">
                  {getIcon()}
                </div>
                <div>
                  <DialogTitle className="text-2xl font-bold text-slate-900 font-clash">{productName}</DialogTitle>
                  <DialogDescription className="text-slate-500 text-sm">Request technical advice or a quote for your business.</DialogDescription>
                </div>
              </div>
              {renderForm()}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
