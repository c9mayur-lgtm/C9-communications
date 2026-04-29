import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12 bg-white overflow-hidden min-h-[450px] lg:min-h-[580px] flex items-center border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-4 xl:gap-6 items-center relative z-10 w-full">
          <div className="py-4 pr-0 xl:pr-6">
            <span className="c9-eyebrow mb-4 block">
              RETAIL
            </span>
            <h1 className="c9-hero-title mb-6">
              Managed IT and Telco built for Australian <span className="text-[#5D00D6]">retail businesses.</span>
            </h1>
            <p className="c9-body mb-8 max-w-[560px]">
              From the POS terminal to the back office — C9 manages your IT and connectivity so your stores stay open, your systems stay on, and your team stays focused on measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-8">
              <Link href="/contact" passHref>
                <Button size="lg" className="w-full sm:w-auto shadow-2xl hover:gap-4 group bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold h-14 px-8 rounded-full border-none">
                  Speak to Our Retail IT Specialist <ArrowRight className="transition-transform group-hover:translate-x-1 ml-2" />
                </Button>
              </Link>
              <Link href="/about/case-studies" passHref>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-200 text-[#0c1024] font-bold h-14 px-8 rounded-full hover:bg-[#5D00D6] hover:text-white hover:border-[#5D00D6] bg-white transition-colors">
                  View Case Studies
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-5 md:gap-8 mt-10 md:mt-12 flex-wrap pb-4">
              {['Multi-site retail experience', 'POS and payment system support', 'Failover connectivity standard'].map((t, i) => (
                <span key={i} className="flex items-center gap-2 c9-body !text-[14px] !font-bold !text-slate-500">
                  <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden xl:block w-full h-[400px] lg:h-[500px] relative rounded-none overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2850"
              alt="Retail Technology"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-sm">
              <div className="c9-eyebrow !text-white mb-2">Uptime Assurance</div>
              <div className="c9-card-title !text-white">99.9% Store Uptime & PCI-DSS Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
