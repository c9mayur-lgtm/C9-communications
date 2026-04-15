import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DefenseBridge() {
  return (
    <section className="w-full bg-white py-8">
      <div className="container mx-auto px-6 max-w-[900px]">
        <div className="bg-[#F3EEFF] rounded-xl border-l-[4px] border-[#7B2FBE] px-6 py-6 md:px-8 md:py-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          
          <div className="flex flex-row items-start gap-4 flex-1">
            <Shield size={20} className="text-[#7B2FBE] shrink-0 mt-1" />
            <p className="text-[15px] text-[#1A1A2E] leading-[1.6]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Security incidents need more than helpdesk. When your team is facing a potential breach, ransomware, or active threat — C9 Defense provides continuous monitoring and incident response so helpdesk is never your only line of defence.
            </p>
          </div>

          <Link href="/c9-defense" className="shrink-0" passHref>
            <Button variant="ghost" className="text-[#7B2FBE] border border-[#7B2FBE] hover:bg-[#7B2FBE]/5 whitespace-nowrap">
              Learn About C9 Defense →
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
}
