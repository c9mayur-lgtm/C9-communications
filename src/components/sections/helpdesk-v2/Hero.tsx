'use client';

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useInquiry } from '@/components/context/InquiryContext';

const MESSAGES = [
  { from: "user",    text: "Hi, my Outlook won't open. I have a client meeting in 20 min.",  delay: 0.5  },
  { from: "c9",      text: "On it, Sarah. Starting a remote session now — give me 2 minutes.", delay: 2.5  },
  { from: "user",    text: "Thank you! That was quick.",                                       delay: 6.5  },
  { from: "c9",      text: "All fixed. Corrupted profile — repaired and tested. You're good to go ✓", delay: 9 },
];

const LiveChatVisual = () => {
  const [visible, setVisible] = React.useState(0);

  React.useEffect(() => {
    if (visible >= MESSAGES.length) return;
    const t = setTimeout(
      () => setVisible((v) => v + 1),
      visible === 0 ? 800 : (MESSAGES[visible - 1]?.delay ?? 0) * 1000
    );
    return () => clearTimeout(t);
  }, [visible]);

  React.useEffect(() => {
    if (visible < MESSAGES.length) return;
    const t = setTimeout(() => setVisible(0), 4000);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-[40px] overflow-hidden shadow-[0_40px_80px_-16px_rgba(93,0,214,0.12)] border border-slate-100">
      <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-100 bg-white">
        <div className="relative shrink-0">
          <img src="https://i.pravatar.cc/100?img=12" alt="C9 Support" className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" />
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-bold text-[#0c1024] leading-none">C9 Helpdesk</p>
          <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Online · avg. reply 2 min</p>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider">Live</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4 justify-end">
        <AnimatePresence>
          {MESSAGES.slice(0, visible).map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className={`flex items-end gap-2.5 ${m.from === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <img src={m.from === "user" ? "https://i.pravatar.cc/100?img=33" : "https://i.pravatar.cc/100?img=12"} alt={m.from} className="w-7 h-7 rounded-full object-cover shrink-0 shadow-sm" />
              <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-[14px] leading-snug font-medium shadow-sm ${m.from === "user" ? "bg-[#5D00D6] text-white rounded-br-sm" : "bg-slate-100 text-[#0c1024] rounded-bl-sm"}`}>{m.text}</div>
            </motion.div>
          ))}
          {visible > 0 && visible < MESSAGES.length && MESSAGES[visible].from === "c9" && (
            <motion.div key="typing" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-end gap-2.5">
              <img src="https://i.pravatar.cc/100?img=12" alt="typing" className="w-7 h-7 rounded-full object-cover shrink-0 shadow-sm" />
              <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center h-10">
                {[0, 1, 2].map((i) => (
                  <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {visible >= MESSAGES.length && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mx-6 mb-4 flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-2xl px-5 py-3">
            <CheckCircle size={18} className="text-emerald-600 shrink-0" />
            <div>
              <p className="text-[14px] font-bold text-emerald-800">Issue resolved in under 10 minutes</p>
              <p className="text-[11px] text-emerald-600 font-medium">Sarah is back online before her client call.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="px-6 pb-6">
        <div className="flex items-center gap-3 bg-slate-50 rounded-full border border-slate-200 px-5 py-3">
          <span className="flex-1 text-[14px] text-slate-400 font-medium">Message C9 Helpdesk…</span>
          <div className="w-8 h-8 rounded-full bg-[#5D00D6] flex items-center justify-center shadow-md">
            <ArrowRight size={14} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const { setInquiryMessage } = useInquiry();

  const handleProposalRequest = () => {
    setInquiryMessage("I'm interested in receiving a helpdesk support proposal for our Australian business.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSlaScroll = () => {
    const el = document.getElementById('sla-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-4 pb-8 md:pt-6 md:pb-10 lg:pt-8 lg:pb-12 bg-white overflow-hidden min-h-[450px] lg:min-h-[640px] flex items-center border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center relative z-10 w-full">
          <div className="py-4 pr-0 xl:pr-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h1 className="text-[36px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-bold tracking-tight mb-6 text-[#0c1024] leading-[1.05]" >
                Your staff deserve IT support that <span className="text-[#5D00D6]">actually shows up.</span>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-[17px] md:text-[19px] lg:text-[20px] text-slate-600 mb-8 max-w-[580px] leading-relaxed font-normal" >
                C9's helpdesk team becomes your staff's first call for every IT problem — remote and on-site, with defined response times, a team that knows your environment, and an account manager who owns the outcome.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-8">
                <Button 
                  onClick={handleProposalRequest}
                  size="lg" 
                  className="w-full sm:w-auto shadow-2xl hover:gap-4 group bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold h-14 px-8 rounded-full border-none text-[14px]" 
                  
                >
                  Get a Helpdesk Proposal <ArrowRight className="transition-transform group-hover:translate-x-1 ml-2" />
                </Button>
                <Button 
                  onClick={handleSlaScroll}
                  variant="outline" 
                   size="lg" 
                  className="w-full sm:w-auto border-gray-200 text-[#0c1024] font-bold h-14 px-8 rounded-full hover:bg-[#5D00D6] hover:text-white hover:border-[#5D00D6] bg-white transition-colors text-[14px]" 
                  
                >
                  See Our Response Times
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="flex flex-wrap gap-5 md:gap-8 mt-10 md:mt-12 pb-4">
                {[ "Australian-based team", "Remote + on-site support", "Dedicated account manager" ].map((text, i) => (
                  <span key={i} className="flex items-center gap-2 text-[14px] font-bold text-slate-500 tracking-tight" >
                    <CheckCircle size={16} className="text-[#5D00D6]" /> {text}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="hidden lg:block w-full h-[500px]">
            <LiveChatVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

