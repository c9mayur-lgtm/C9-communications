import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12 bg-white overflow-hidden min-h-[450px] lg:min-h-[580px] flex items-center border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-4 xl:gap-6 items-center relative z-10 w-full">
          <div className="py-4 pr-0 xl:pr-6">
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.3em] mb-4 block" >
              HEALTHCARE
            </span>
            <h1 className="text-[38px] sm:text-[48px] md:text-[52px] lg:text-[62px] font-bold tracking-tight mb-6 text-[#0c1024] leading-[1.08]" >
              Managed IT and Telco built for Australian <span className="text-[#5D00D6]">healthcare providers.</span>
            </h1>
            <p className="text-[17px] md:text-[18px] lg:text-[20px] text-slate-600 mb-8 max-w-[560px] leading-relaxed font-normal" >
              Whether you run a single clinic or a multi-site healthcare network — C9 manages your IT infrastructure, connectivity, and compliance so your clinical staff can focus on patients, not technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-8">
              <Link href="/contact" passHref>
                <Button size="lg" className="w-full sm:w-auto shadow-2xl hover:gap-4 bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold h-14 px-8 rounded-full border-none" >
                  Speak to Our Specialist 
                </Button>
              </Link>
              <Link href="/case-studies" passHref>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-200 text-[#0c1024] font-bold h-14 px-8 rounded-full hover:bg-[#5D00D6] hover:text-white hover:border-[#5D00D6] bg-white transition-colors" >
                  View Case Studies
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-5 md:gap-8 mt-10 md:mt-12 flex-wrap pb-4">
              {['HIPAA-aligned infrastructure', 'Multi-site network management', 'Essential 8 compliance ready'].map((t, i) => (
                <span key={i} className="flex items-center gap-2 text-[14px] font-bold text-slate-500 tracking-tight" >
                  <CheckCircle size={12} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden xl:block w-full h-[400px] lg:h-[500px] relative rounded-lg overflow-hidden shadow-2xl">
            <img 
               src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2850" 
               alt="Healthcare IT Professional" 
               className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-sm">
                <div className="text-white text-[12px] font-bold uppercase tracking-wider mb-2" >Infrastructure Design</div>
                <div className="text-white text-[24px] font-bold leading-tight" >Fully HIPAA-aligned & Secure Environments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

