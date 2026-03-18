import { Check, ArrowRight } from 'lucide-react';
import { FadeIn } from '../shared/FadeIn';

export const ConsultationForm = ({ showHeader = true }) => {
  return (
    <div className="bg-[#C4B5FD] py-16 md:py-24" style={{ fontFamily: "'Inter', sans-serif" }}>
      {showHeader && (
        <section className="bg-[#0B0121] py-20 md:py-32 relative text-white">
          <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
            <FadeIn>
              <div className="inline-block bg-white/10 px-3 py-1.5 rounded-[4px] text-[11px] font-bold tracking-[0.05em] uppercase mb-8 border border-white/10">
                CONTACT US
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold leading-[1.1] max-w-[800px] mb-10" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                Partner with Us for Comprehensive IT
              </h1>
            </FadeIn>
          </div>
        </section>
      )}

      <div className={`container mx-auto px-6 md:px-8 max-w-[1100px] relative transition-all duration-500 ${showHeader ? '-mt-24 md:-mt-32' : 'mt-10'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Content) */}
          <div className={`text-left ${showHeader ? 'pt-24 md:pt-32' : 'pt-0'}`}>
            <FadeIn delay={0.2}>
              {!showHeader && (
                <div className="mb-10">
                  <div className="inline-block bg-[#0B0121] text-white px-3 py-1.5 rounded-[4px] text-[11px] font-bold tracking-[0.05em] uppercase mb-6">
                    CONTACT US
                  </div>
                  <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#0B0121] leading-[1.1] mb-6" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    Partner with Us for Comprehensive IT
                  </h2>
                </div>
              )}

              <p className="text-[16px] md:text-[18px] text-[#1A1C1E] font-medium leading-[1.6] mb-10 max-w-[480px]">
                We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
              </p>
              
              <div className="mb-12">
                <p className="font-extrabold text-[#0B0121] text-[18px] md:text-[20px] mb-6">
                  Call us at: <a href="tel:1800000299" className="text-[#0B0121] no-underline border-b-2 border-[#0B0121] hover:text-[#5D00D6] hover:border-[#5D00D6] transition-colors">1800 000 299</a>
                </p>
              </div>

              <div className="mb-5">
                <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#0B0121] mb-6">Your benefits:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Client-oriented', 'Independent', 'Competent',
                    'Results-driven', 'Problem-solving', 'Transparent'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#5D00D6] flex items-center justify-center text-white shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-[14px] md:text-[16px] font-bold text-[#0B0121]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (Form) */}
          <FadeIn delay={0.3}>
            <div className="bg-[#F8FAFC] rounded-[12px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] p-6 md:p-8 lg:p-10 relative border border-black/5 w-full">
              <h2 className="text-[22px] md:text-[24px] font-extrabold text-center text-[#0B0121] mb-8" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                Schedule a Free Consultation
              </h2>
    
              <form onSubmit={e => e.preventDefault()} className="grid gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-tight">First name</label>
                    <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[15px] bg-white outline-none focus:border-[#5D00D6] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-tight">Last name</label>
                    <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[15px] bg-white outline-none focus:border-[#5D00D6] transition-colors" />
                  </div>
                </div>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-tight">Company</label>
                    <input type="text" placeholder="Acme Inc" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[15px] bg-white outline-none focus:border-[#5D00D6] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-tight">Phone</label>
                    <input type="tel" placeholder="1800 000 299" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[15px] bg-white outline-none focus:border-[#5D00D6] transition-colors" />
                  </div>
                </div>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-tight">Work email</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[15px] bg-white outline-none focus:border-[#5D00D6] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-tight">How Can We Help?</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[15px] bg-white outline-none focus:border-[#5D00D6] transition-colors appearance-none cursor-pointer">
                        <option>Select Option</option>
                        <option>Managed IT Services</option>
                        <option>Cloud Communications</option>
                        <option>Cyber Security</option>
                        <option>Network Infrastructure</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="flex flex-col gap-1.5">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-tight">Message</label>
                  <textarea 
                    placeholder="Briefly describe your needs..."
                    className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[15px] min-h-[100px] bg-white outline-none focus:border-[#5D00D6] transition-colors resize-none"
                  />
                </div>
    
                <button type="submit" className="w-full bg-[#5D00D6] hover:bg-[#4C00B0] text-white font-extrabold py-4 px-6 rounded-[8px] transition-all duration-300 shadow-xl shadow-purple-900/10 flex items-center justify-center gap-2 mt-4 group">
                  Submit Inquiry <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
