import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Comparison() {
  const rows = [
    { label: "Recruitment and onboarding", inhouse: "One-off cost + 3–6 months to hire", c9: "✓ Available from week one" },
    { label: "Salary + super + leave", inhouse: "$80,000–$120,000+ per year", c9: "✓ Fixed monthly, all-inclusive" },
    { label: "Training and certifications", inhouse: "Ongoing cost, often skipped", c9: "✓ Included, continuously updated" },
    { label: "Single point of failure", inhouse: "One person = one point of failure", c9: "✓ Full team behind every ticket" },
    { label: "After-hours coverage", inhouse: "None, or expensive on-call", c9: "✓ Monitoring included, 24/7 options available" },
    { label: "Strategic IT input", inhouse: "Junior hire unlikely to provide it", c9: "✓ vCIO and roadmap included" },
    { label: "Telco management", inhouse: "Separate provider, separate bill", c9: "✓ Optional single agreement" },
    { label: "Scalability", inhouse: "Rehire when you outgrow them", c9: "✓ Scales with your business" }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-[1240px]">
        <div className="text-left mb-12 font-sans">
          <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#5D00D6] mb-6 block font-sans">
            THE COMPARISON
          </span>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.05] text-[#0c1024] font-sans">
            What it actually costs to do this<br className="hidden md:block" /> in-house versus outsourcing to C9.
          </h2>
          <p className="text-[18px] md:text-[20px] text-slate-600/90 leading-relaxed mt-6 max-w-[680px] font-normal font-sans">
            The real cost of in-house IT is almost always underestimated. Salary is only the beginning. Here's what the full picture looks like.
          </p>
        </div>

        <div className="rounded-none border-[0.5px] border-[#5D00D6]/15 overflow-hidden mt-10 shadow-sm">
          <Table className="w-full">
            <TableHeader className="bg-[#F4F0FA]">
              <TableRow className="hover:bg-transparent transition-none">
                <TableHead className="w-[40%] text-left px-5 py-4 text-[13px] font-bold uppercase tracking-[0.06em] text-slate-600  border-b-0 font-sans">
                   {/* EMPTY LABEL COLUMN */}
                </TableHead>
                <TableHead className="text-center px-5 py-4 text-[13px] font-bold uppercase tracking-[0.06em] text-slate-600  border-b-0 font-sans">
                  In-house IT
                </TableHead>
                <TableHead className="text-center px-5 py-4 text-[13px] font-bold uppercase tracking-[0.06em] text-[#5D00D6] bg-[#F4F0FA]  border-b-0 font-sans">
                  C9 Managed IT
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i} className={`border-b border-[#F3F4F6] transition-none ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
                  <TableCell className="px-5 py-4 text-[14px] text-[#0c1024] font-normal  font-sans">
                    {row.label}
                  </TableCell>
                  <TableCell className="text-center px-5 py-4 text-[14px] text-[#9CA3AF]  font-sans">
                    {row.inhouse}
                  </TableCell>
                  <TableCell className="text-center px-5 py-4 text-[14px] text-[#0c1024] font-bold bg-[#F9F5FF]  font-sans">
                    {row.c9}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-[13px] text-[#9CA3AF] italic mt-4  text-left font-sans">
          "Salary figures are indicative for an IT support generalist in Australia. Senior or specialised hires cost significantly more."
        </p>
      </div>
    </section>
  );
}
