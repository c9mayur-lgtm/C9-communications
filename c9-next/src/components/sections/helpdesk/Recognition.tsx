import React from "react";

export default function Recognition() {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6 md:px-8 max-w-[760px] text-center">
        <span className="text-[11px] uppercase tracking-[0.1em] text-[#7B2FBE]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
          SOUND FAMILIAR?
        </span>
        
        <h2 className="text-[28px] md:text-[40px] font-bold text-[#1A1A2E] mt-4 leading-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
          Most businesses come to us after the same experience.
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {[
            "We log a ticket and hear nothing for days.",
            "Every time we call, we explain our setup from scratch.",
            "Our IT support fixes the symptom but not the problem."
          ].map((text, i) => (
            <div 
              key={i} 
              className="bg-white border border-[#7B2FBE]/15 rounded-xl px-6 py-5 flex items-center gap-4 text-left hover:border-[#7B2FBE] transition-all duration-200"
            >
              <span className="text-[32px] font-bold text-[#EDE9FE] shrink-0" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                ❝
              </span>
              <p className="text-[17px] font-medium text-[#1A1A2E] leading-[1.5]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[17px] text-[#6B7280] leading-[1.75] mt-8 text-center" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
          These aren't edge cases — they're the most common reasons businesses switch to C9. Our helpdesk is built specifically to eliminate all three.
        </p>
      </div>
    </section>
  );
}
