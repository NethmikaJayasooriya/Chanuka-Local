"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/site";

export function HeadlineGenerator() {
  const [role, setRole] = useState("Software Engineer");
  const [skill, setSkill] = useState("Cloud Architecture & Microservices");
  const [metric, setMetric] = useState("Scaling high-traffic platforms & 99.9% uptime");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const presets = [
    {
      role: "Software Engineer",
      skill: "Full-Stack React & Node.js",
      metric: "Building scalable fintech systems with 99.9% uptime",
    },
    {
      role: "Marketing Manager",
      skill: "Performance Marketing & Brand Strategy",
      metric: "Generated LKR 50M+ revenue growth across omnichannel campaigns",
    },
    {
      role: "Finance & Accounting Professional",
      skill: "Financial Modeling, IFRS & Tax Compliance",
      metric: "Optimized corporate working capital & audited multi-million portfolios",
    },
    {
      role: "Project Manager / Scrum Master",
      skill: "Agile Delivery, Risk Mitigation & JIRA",
      metric: "Led cross-functional teams delivering projects 15% ahead of schedule",
    },
    {
      role: "Fresh Graduate / Management Trainee",
      skill: "Business Analytics, Data Visualization & Python",
      metric: "Top 5% Graduate eager to drive commercial data insights",
    },
  ];

  const headlines = [
    `${role} | Specializing in ${skill} | ${metric}`,
    `${role} helping organizations achieve measurable results through ${skill} | Passionate about ${metric}`,
    `Certified ${role} • ${skill} Expert • Proven Track Record in ${metric}`,
  ];

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="rounded-3xl bg-white border border-[#e2e8f0] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_-20px_rgba(23,53,92,0.1)] relative overflow-hidden break-words">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] text-[#8f6419] text-xs font-bold border border-[#b9862f]/30">
          FREE INTERACTIVE CAREER TOOL
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e1a2b] mt-3">
          Free LinkedIn <span className="text-[#17355c]">Headline Generator</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#52637a] mt-2">
          Your LinkedIn headline is the single most important factor for recruiter search discovery. Generate 3 keyword-indexed formats instantly.
        </p>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <span className="text-xs text-[#52637a] mr-1 font-medium">Quick Presets:</span>
        {presets.map((p, i) => (
          <button
            key={i}
            onClick={() => {
              setRole(p.role);
              setSkill(p.skill);
              setMetric(p.metric);
            }}
            className="px-3 py-1 text-xs rounded-full bg-[#f1f5fa] hover:bg-[#e2e8f0] text-[#0e1a2b] border border-[#e2e8f0] transition-colors font-medium"
          >
            {p.role.split("/")[0].trim()}
          </button>
        ))}
      </div>

      {/* Inputs Form */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        <div>
          <label className="text-xs font-bold text-[#17355c] uppercase tracking-wider block mb-1.5">
            Your Target Role Title
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafd] border border-[#cbd5e1] text-[#0e1a2b] text-xs sm:text-sm focus:outline-none focus:border-[#17355c]"
            placeholder="e.g. Senior Software Engineer"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-[#17355c] uppercase tracking-wider block mb-1.5">
            Core Skill / Niche
          </label>
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafd] border border-[#cbd5e1] text-[#0e1a2b] text-xs sm:text-sm focus:outline-none focus:border-[#17355c]"
            placeholder="e.g. Cloud Architecture & AWS"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-[#17355c] uppercase tracking-wider block mb-1.5">
            Key Achievement or Metric
          </label>
          <input
            type="text"
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafd] border border-[#cbd5e1] text-[#0e1a2b] text-xs sm:text-sm focus:outline-none focus:border-[#17355c]"
            placeholder="e.g. Scaled revenue by 35%"
          />
        </div>
      </div>

      {/* Generated Headlines Output */}
      <div className="space-y-3.5 mb-7">
        <span className="text-xs uppercase font-bold text-[#17355c] tracking-wider block">
          Your Generated High-Impact Headlines:
        </span>

        {headlines.map((hl, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[#f8fafd] border border-[#e2e8f0] hover:border-[#17355c]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 transition-all shadow-2xs"
          >
            <div className="flex-1">
              <span className="text-[10px] font-bold text-[#b9862f] uppercase tracking-wider block mb-0.5">
                Format 0{idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-[#0e1a2b] font-medium select-all">
                {hl}
              </p>
            </div>

            <button
              onClick={() => handleCopy(hl, idx)}
              className="px-4 py-2 rounded-full bg-[#17355c] hover:bg-[#0f2440] text-white text-xs font-bold transition-all whitespace-nowrap shadow-xs"
            >
              {copiedIndex === idx ? "✓ Copied!" : "Copy Headline"}
            </button>
          </div>
        ))}
      </div>

      {/* CTA Band */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#f0f5fc] border border-[#d8e5f5] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-heading text-xs sm:text-sm font-bold text-[#17355c]">
            Need a complete LinkedIn Profile overhaul?
          </h4>
          <p className="text-[11px] text-[#52637a]">
            We rewrite your About Story, Experience bullets, Skills, and provide Outreach DM scripts.
          </p>
        </div>
        <a
          href={whatsappUrl("Hi Chanuka, I used your Free Headline Generator and would like to order the complete LinkedIn Profile Optimization package.")}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full btn-whatsapp text-xs font-bold whitespace-nowrap shadow-md"
        >
          Book LinkedIn Overhaul →
        </a>
      </div>
    </div>
  );
}
