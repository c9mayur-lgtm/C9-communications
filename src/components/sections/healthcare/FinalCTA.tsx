import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#111111] py-20 px-6 overflow-hidden relative">
      {/* subtle gradient over dark background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-[800px] text-center relative z-10">
        <h2 className="c9-section-heading !text-white mb-6" >
          Ready to talk to an IT partner that understands healthcare?
        </h2>

        <p className="text-[18px] md:text-[20px] text-gray-400 mb-10 leading-relaxed font-normal max-w-[600px] mx-auto" >
          No jargon. No generic proposals. A conversation about your specific environment and regulatory requirements.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" passHref>
            <Button size="lg" className="w-full sm:w-auto bg-[#5D00D6] hover:bg-[#4c00b0] text-white shadow-2xl hover:shadow-[#5D00D6]/20 hover:gap-4 transition-all group rounded-full px-8 h-14 font-bold text-[15px]" >
              Book an IT Assessment <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="tel:1800000299" passHref>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white rounded-full px-8 h-14 font-bold text-[15px]" >
              Call 1800 000 299
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

