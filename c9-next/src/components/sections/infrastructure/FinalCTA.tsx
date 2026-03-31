import { buttonVariants } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="max-w-[700px] mx-auto text-center mb-12">
          <h2 className="font-['Proxima_Nova'] text-[38px] md:text-[46px] text-[#1A1A2E] font-bold leading-[1.2] mb-6">
            Ready to talk infrastructure with people who actually get it?
          </h2>
          <p className="font-['Proxima_Nova'] text-[18px] text-[#6B7280] leading-[1.7] max-w-[600px] mx-auto">
            Tell us what you're running, what's not working, and what you need to achieve. We'll come back with an honest assessment and a proposal that fits.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/contact" 
            className={cn(
              buttonVariants({ variant: "default" }),
              "text-white font-['Proxima_Nova'] font-bold text-[14px] h-[52px] px-10 rounded-full hover:opacity-90 shadow-xl shadow-purple-900/10 transition-all border-0 flex items-center gap-2"
            )}
          >
            Get an Infrastructure Assessment <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          
          <Link 
            href="tel:1800000299" 
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-[rgba(93,0,214,0.2)] text-[#1A1A2E] font-['Proxima_Nova'] font-bold text-[14px] h-[52px] px-10 rounded-full hover:bg-[color:var(--brand-purple)] hover:text-white transition-all flex items-center gap-2"
            )}
          >
            <Phone className="w-4 h-4 mr-1" /> Call 1800 000 299
          </Link>
        </div>
        
        <div className="mt-8 flex justify-center flex-wrap gap-y-2 divide-x divide-slate-200">
          <span className="font-['Proxima_Nova'] text-[13px] text-[#6B7280] px-4">Australian team</span>
          <span className="font-['Proxima_Nova'] text-[13px] text-[#6B7280] px-4">Responds within 1 business day</span>
          <span className="font-['Proxima_Nova'] text-[13px] text-[#6B7280] px-4 font-semibold text-[color:var(--brand-purple)]">No lock-in consultations</span>
        </div>
      </div>
    </section>
  );
}
