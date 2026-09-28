"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/site";

export function AtsHealthChecker() {
  const [checkedFlags, setCheckedFlags] = useState<number[]>([]);

  const redFlags = [
    {
      id: 1,
      title: "Contains Graphic Skill Bars or Rating Stars",
      desc: "ATS software cannot read graphic shapes or percentage bars and assigns 0 points for technical skills.",
    },
    {
      id: 2,
      title: "Uses Multi-Column Tables or Text Boxes",
      desc: "Complex tables scramble the linear reading order of parsing engines like Taleo, Workday, and Lever.",
    },
    {
      id: 3,
      title: "Lists Daily Duties Instead of Metric Accomplishments",
      desc: "Bullet points like 'responsible for inventory' lack commercial impact. Recruiters look for %, LKR savings, or revenue growth.",
    },
    {
      id: 4,
      title: "Includes Personal Data (NIC, Marital Status, Religion, School Clubs)",
      desc: "Modern corporate and multinational standards penalize outdated personal data that wastes valuable executive summary space.",
    },
    {
      id: 5,
      title: "Created with Canva or Saved as Non-Selectable Image PDF",
      desc: "Many Canva templates embed text as vector glyphs that ATS parsers see as completely blank pages.",
    },
    {
      id: 6,
      title: "Not Keyword-Aligned with Target Job Listings",
      desc: "If your CV doesn't echo the exact industry keywords from the vacancy advertisement, algorithms rank you in the bottom 20%.",
    },
  ];

  const toggleFlag = (id: number) => {
    if (checkedFlags.includes(id)) {
      setCheckedFlags(checkedFlags.filter((f) => f !== id));
    } else {
      setCheckedFlags([...checkedFlags, id]);
    }
  };

  const count = checkedFlags.length;
  let statusColor = "text-[#1ea952]";
  let statusText = "Low Risk (Likely Readable)";
  let meterWidth = "15%";
  let advice = "Select any statements that describe your current CV to run the instant simulation.";

  if (count === 1) {
    statusColor = "text-amber-600";
    statusText = "Moderate ATS Risk (Could Get Filtered Out)";
    meterWidth = "40%";
    advice = "You have 1 major parsing bottleneck that may hinder interview callbacks.";
  } else if (count >= 2 && count <= 3) {
    statusColor = "text-orange-600";
    statusText = "High ATS Risk (70% Chance of Algorithmic Rejection)";
    meterWidth = "70%";
    advice = "Your CV has critical design and structural flaws that standard ATS bots fail to parse.";
  } else if (count > 3) {
    statusColor = "text-red-600";
    statusText = "Severe ATS Bottleneck (90%+ Discard Rate)";
    meterWidth = "100%";
    advice = "Your CV is almost certainly being filtered out before recruiters ever see your qualifications!";
  }

  return (
    <section className="py-20 bg-white relative border-t border-[#e2e8f0]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#f8fafd] border border-[#e2e8f0] p-6 sm:p-10 shadow-[0_20px_50px_-20px_rgba(23,53,92,0.08)] relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
              Instant 60-Second Simulator
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0e1a2b] mt-3">
              Does Your Current CV Pass Modern <span className="text-[#17355c]">ATS Algorithms</span>?
            </h2>
            <p className="text-xs sm:text-sm text-[#52637a] mt-2">
              Tick any of the following common formatting habits that exist in your current CV to calculate your rejection risk.
            </p>
          </div>

          {/* Interactive Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {redFlags.map((item) => {
              const isChecked = checkedFlags.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleFlag(item.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    isChecked
                      ? "bg-red-50/80 border-red-300 shadow-2xs"
                      : "bg-white border-[#e2e8f0] hover:border-[#cbd5e1]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center text-xs mt-0.5 border ${
                      isChecked
                        ? "bg-red-600 border-red-600 text-white font-bold"
                        : "border-[#cbd5e1] bg-white"
                    }`}
                  >
                    {isChecked ? "✕" : ""}
                  </div>
                  <div>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#0e1a2b]">
                      {item.title}
                    </h4>
                    <p className="text-[11.5px] text-[#52637a] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Risk Meter Bar */}
          <div className="p-5 rounded-2xl bg-white border border-[#e2e8f0] mb-6 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#17355c]">
                Calculated Algorithmic Risk:
              </span>
              <span className={`text-xs sm:text-sm font-bold ${statusColor}`}>
                {statusText}
              </span>
            </div>

            <div className="w-full h-2.5 rounded-full bg-[#edf2f8] overflow-hidden mb-2.5">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  count === 0
                    ? "bg-[#1ea952]"
                    : count === 1
                    ? "bg-amber-500"
                    : count <= 3
                    ? "bg-orange-500"
                    : "bg-red-600"
                }`}
                style={{ width: meterWidth }}
              />
            </div>

            <p className="text-xs text-[#52637a]">{advice}</p>
          </div>

          {/* High Conversion Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e2e8f0]">
            <div>
              <p className="text-xs text-[#0e1a2b] font-bold">Want Chanuka to audit your CV personally?</p>
              <p className="text-[11px] text-[#52637a]">20-Point Written & Audio Diagnostic Report within 24 hours.</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappUrl(`Hi Chanuka, I scored ${count} red flags on your ATS Health Checker. I want to get my CV audited or rewritten.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full btn-whatsapp font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <span>Fix My CV on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
