;
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ComplianceBlock() {
  return (
    <section className="w-full bg-[#0B0B0F] py-12 md:py-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="max-w-[760px] mx-auto text-center flex flex-col items-center mb-12">
          <span className="text-[#A266FF] text-[12px] font-extrabold uppercase tracking-[0.3em] mb-4 block" >
            Privacy Compliant
          </span>
          <h2 className="c9-section-heading !text-white mb-6" >
            Client data protection and privacy compliance aren't optional. We make them manageable.
          </h2>
          <p className="text-gray-400 text-[17px] md:text-[18px] leading-relaxed font-normal" >
            Real estate agencies hold sensitive client financial and personal information that is governed by the Australian Privacy Act and state-based property legislation. C9 Defense implements the ACSC Essential 8 framework — giving your agency documented compliance, continuous monitoring, and auditable data protection controls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Privacy Maturity",
              desc: "We map your agency's IT environment against the Privacy Act and the ACSC baseline, identifying and remediating gaps in your client data environment.",
              items: ["Essential 8 implementation and gap assessment", "Client data access controls and audit logging", "Privacy Act compliance documentation support"],
              badge: "C9 DEFENSE ASSESSMENT"
            },
            {
              title: "Mobile Security",
              desc: "Continuous security monitoring across your mobile agent fleet and multi-site office network — protecting client records and property data from anywhere.",
              items: ["24/7 SOC monitoring", "Continuous threat monitoring across all offices", "Remote device governance"],
              badge: "C9 CONTINUOUS SECURITY"
            },
            {
              title: "Data Assurance",
              desc: "Immutable backups and tested recovery for your property management systems, client database, and financial records — protected against ransomware.",
              items: ["Immutable, air-gapped backups", "Routine restoration testing", "Documented disaster recovery"],
              badge: "C9 DATA PROTECTION"
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-[#12121A] border border-white/5 rounded-[24px] p-8 md:p-10 shadow-lg flex flex-col h-full hover:bg-[#16161F] transition-colors">
              <h3 className="text-[20px] md:text-[22px] text-white font-bold mb-3" >{card.title}</h3>
              <p className="text-[14px] md:text-[16px] text-gray-400 mb-8 leading-relaxed font-normal flex-grow" >{card.desc}</p>
              <div className="flex flex-col mb-10 border-t border-white/5 pt-2">
                {card.items.map((item, index) => (
                  <div key={index} className="flex flex-row items-center gap-4 py-4 border-b border-white/5 px-2">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#A266FF] flex-shrink-0" />
                    <span className="text-[14px] md:text-[14px] font-medium text-gray-300" >{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-4 bg-transparent border border-white/5 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-md bg-[#222] border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-white/80" >C9</span>
                </div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest" >{card.badge}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="https://c9defense.com.au/" passHref>
            <Button size="lg" className="w-full sm:w-auto bg-[#5D00D6] hover:bg-[#4c00b0] text-white flex items-center h-14 px-10 rounded-full shadow-2xl hover:shadow-[#5D00D6]/20 transition-all border-none font-bold tracking-wide" >
              Request a Free Compliance Assessment 
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

