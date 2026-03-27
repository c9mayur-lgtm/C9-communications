import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function DefenseBridge() {
  return (
    <section className="bg-white py-12 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-[900px]">
        <div className="bg-[#F3EEFF] rounded-xl border-l-4 border-[#7B2FBE] p-8 md:p-10 flex flex-col md:flex-row gap-6 justify-between items-center shadow-sm">
          
          <div className="flex flex-row gap-4 items-start flex-1">
            <Shield className="w-5 h-5 text-[#7B2FBE] shrink-0 mt-1" />
            <p className="text-[15px] text-[#1A1A2E] leading-[1.6] font-dm-sans">
              "A managed IT engagement without a security layer is half an engagement. C9 Defense sits alongside your Managed IT agreement — adding Essential 8 compliance, continuous 24/7 threat monitoring, and tested recovery to your outsourced IT environment. For businesses in regulated industries or with elevated risk profiles, it's not optional."
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Button 
              variant="outline" 
              className="w-full md:w-auto text-[#7B2FBE] border-[#7B2FBE] bg-transparent hover:bg-[#7B2FBE] hover:text-white transition-all font-bold px-6 h-11 whitespace-nowrap"
            >
              Learn About C9 Defense →
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
