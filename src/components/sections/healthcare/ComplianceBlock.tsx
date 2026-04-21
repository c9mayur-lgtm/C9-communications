import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ComplianceBlock() {
  return (
    <section className="w-full bg-[#0B0B0F] py-12 md:py-16 overflow-hidden relative">
      {/* subtle gradient over dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="max-w-[760px] mx-auto text-center flex flex-col items-center mb-12">
          <span className="text-[#A266FF] text-[12px] font-extrabold uppercase tracking-[0.3em] mb-4 block" >
            Essential 8 Ready
          </span>
          <h2 className="c9-section-heading !text-white mb-6" >
            Healthcare compliance isn't optional. We make it manageable.
          </h2>
          <p className="text-gray-400 text-[17px] md:text-[18px] leading-relaxed font-normal" >
            Australian healthcare organisations face strict data security standards. C9 Defense implements the ACSC Essential 8 framework — giving you documented compliance, continuous monitoring, and tested recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#12121A] border border-white/5 rounded-[24px] p-8 md:p-10 shadow-lg flex flex-col h-full hover:bg-[#16161F] transition-colors">
            <h3 className="text-[20px] md:text-[22px] text-white font-bold mb-3" >
              Essential 8 Implementation
            </h3>
            
            <p className="text-[15px] md:text-[16px] text-gray-400 mb-8 leading-relaxed font-normal flex-grow" >
              We map your existing IT environment against the ACSC baseline, highlighting vulnerabilities and delivering a structured roadmap to your target maturity level.
            </p>

            <div className="flex flex-col mb-10 border-t border-white/5 pt-2">
              {[
                "Gap analysis against all 8 controls",
                "Maturity level scoring",
                "Phased remediation roadmap"
              ].map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-4 py-4 border-b border-white/5 px-2">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#A266FF] flex-shrink-0" />
                  <span className="text-[14px] md:text-[15px] font-medium text-gray-300" >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-4 bg-transparent border border-white/5 rounded-xl px-4 py-3">
               <div className="w-8 h-8 rounded-md bg-[#222] border border-white/10 flex items-center justify-center shrink-0">
                 <span className="text-[10px] font-bold text-white/80" >C9</span>
               </div>
               <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest" >
                 C9 DEFENSE ASSESSMENT
               </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#12121A] border border-white/5 rounded-[24px] p-8 md:p-10 shadow-lg flex flex-col h-full hover:bg-[#16161F] transition-colors">
            <h3 className="text-[20px] md:text-[22px] text-white font-bold mb-3" >
              Threat Monitoring
            </h3>
            
            <p className="text-[15px] md:text-[16px] text-gray-400 mb-8 leading-relaxed font-normal flex-grow" >
              Continuous security logging and endpoint behavioral analysis to ensure ransomware, phishing, and unauthorized access attempts are caught instantly.
            </p>

            <div className="flex flex-col mb-10 border-t border-white/5 pt-2">
              {[
                "24/7 SOC monitoring",
                "Application control enforcement",
                "Privileged access governance"
              ].map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-4 py-4 border-b border-white/5 px-2">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#A266FF] flex-shrink-0" />
                  <span className="text-[14px] md:text-[15px] font-medium text-gray-300" >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-4 bg-transparent border border-white/5 rounded-xl px-4 py-3">
               <div className="w-8 h-8 rounded-md bg-[#222] border border-white/10 flex items-center justify-center shrink-0">
                 <span className="text-[10px] font-bold text-white/80" >C9</span>
               </div>
               <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest" >
                 C9 CONTINUOUS SECURITY
               </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#12121A] border border-white/5 rounded-[24px] p-8 md:p-10 shadow-lg flex flex-col h-full hover:bg-[#16161F] transition-colors">
            <h3 className="text-[20px] md:text-[22px] text-white font-bold mb-3" >
              Recovery Assurance
            </h3>
            
            <p className="text-[15px] md:text-[16px] text-gray-400 mb-8 leading-relaxed font-normal flex-grow" >
              Immutable backups and rigorously tested disaster recovery protocols designed specifically to protect clinical databases and patient records.
            </p>

            <div className="flex flex-col mb-10 border-t border-white/5 pt-2">
              {[
                "Immutable, air-gapped backups",
                "Routine restoration testing",
                "Documented disaster recovery"
              ].map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-4 py-4 border-b border-white/5 px-2">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#A266FF] flex-shrink-0" />
                  <span className="text-[14px] md:text-[15px] font-medium text-gray-300" >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-4 bg-transparent border border-white/5 rounded-xl px-4 py-3">
               <div className="w-8 h-8 rounded-md bg-[#222] border border-white/10 flex items-center justify-center shrink-0">
                 <span className="text-[10px] font-bold text-white/80" >C9</span>
               </div>
               <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest" >
                 C9 DATA PROTECTION
               </span>
            </div>
          </div>

        </div>

        <div className="flex justify-center mt-12">
          <Link href="https://c9defense.com.au/" passHref>
            <Button size="lg" className="w-full sm:w-auto bg-[#5D00D6] hover:bg-[#4c00b0] text-white flex items-center group h-14 px-10 rounded-full shadow-2xl hover:shadow-[#5D00D6]/20 transition-all border-none font-bold tracking-wide" >
              Request a Free Compliance Assessment <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

