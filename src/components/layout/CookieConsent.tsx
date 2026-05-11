'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Settings toggles
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Check if consent is already given
    const consent = localStorage.getItem('c9_cookie_consent');
    if (!consent) {
      // Small delay before showing to not overwhelm user on immediate load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('c9_cookie_consent', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('c9_cookie_consent', JSON.stringify({ necessary: true, analytics, marketing }));
    setIsVisible(false);
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="consent-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.3 } }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:w-[420px] z-[300] font-sans"
        >
          <div className="bg-[#0c1024] text-white rounded-3xl p-6 shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Background flair */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#5D00D6] rounded-full blur-[50px] opacity-20 pointer-events-none"></div>
            
            {!showSettings ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4 relative z-10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5D00D6]/20 flex items-center justify-center shrink-0">
                    <Cookie size={20} className="text-[#5D00D6]" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold mb-1">Your Privacy</h3>
                    <p className="text-[14px] text-white/60 leading-relaxed">
                      We use cookies to improve your browsing experience, analyze site traffic, and personalize content. Read our <a href="/cookie-policy" className="text-[#5D00D6] hover:underline font-semibold">Cookie Policy</a>.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-2">
                  <Button 
                    onClick={handleAcceptAll}
                    className="flex-1 bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-xl py-5 font-bold"
                  >
                    Accept All
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowSettings(true)}
                    className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/5 rounded-xl py-5 font-semibold"
                  >
                    Settings
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col gap-5 relative z-10"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Shield size={18} className="text-[#5D00D6]" />
                    <h3 className="font-bold text-[14px]">Cookie Preferences</h3>
                  </div>
                  <button onClick={() => setShowSettings(false)} className="text-white/40 hover:text-white transition-colors">
                    <X size={18} />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Strict */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold">Strictly Necessary</span>
                      <span className="text-[12px] text-white/50">Required for website functionality.</span>
                    </div>
                    <div className="w-10 h-5 bg-[#5D00D6]/50 rounded-full flex items-center px-1 opacity-50 cursor-not-allowed">
                      <div className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center translate-x-4">
                        <Check size={10} className="text-[#5D00D6]" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold">Analytics & Performance</span>
                      <span className="text-[12px] text-white/50">Helps us understand how you use our site.</span>
                    </div>
                    <button 
                      onClick={() => setAnalytics(!analytics)}
                      className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors ${analytics ? 'bg-[#5D00D6]' : 'bg-white/20'}`}
                    >
                      <motion.div 
                        animate={{ x: analytics ? 20 : 0 }}
                        className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center"
                      />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold">Marketing & Ads</span>
                      <span className="text-[12px] text-white/50">Used to deliver targeted advertising.</span>
                    </div>
                    <button 
                      onClick={() => setMarketing(!marketing)}
                      className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors ${marketing ? 'bg-[#5D00D6]' : 'bg-white/20'}`}
                    >
                      <motion.div 
                        animate={{ x: marketing ? 20 : 0 }}
                        className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center"
                      />
                    </button>
                  </div>
                </div>

                <Button 
                  onClick={handleSaveSettings}
                  className="w-full bg-white text-[#0c1024] hover:bg-gray-100 rounded-xl py-5 font-bold mt-2"
                >
                  Save Preferences
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      ) : (
        <motion.button
          key="consent-trigger"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsVisible(true);
            setShowSettings(true);
          }}
          className="fixed bottom-6 left-6 z-[290] w-10 h-10 bg-white border border-slate-200 text-slate-400 hover:text-[#5D00D6] hover:border-[#5D00D6] shadow-lg rounded-full hidden lg:flex items-center justify-center transition-all"
          title="Cookie Settings"
        >
          <Shield size={18} className="group-hover:rotate-12" />
          <span className="absolute left-12 bg-[#0c1024] text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
            Manage Privacy
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
