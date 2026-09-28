"use client";

import { useState } from "react";
import Link from "next/link";
import { formatLKR } from "@/lib/pricing";
import { whatsappUrl } from "@/lib/site";

export function PackageMatcherQuiz() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "ATS Friendly Professional CV Writing",
  ]);
  const [careerLevel, setCareerLevel] = useState("mid");
  const [targetMarket, setTargetMarket] = useState("local");
  const [timeline, setTimeline] = useState("standard");
  const [cvStatus, setCvStatus] = useState("existing");

  const totalSteps = 5;

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  // Calculate recommendation
  const calculateRecommendation = () => {
    if (cvStatus === "review-only" && selectedServices.length === 1 && selectedServices[0].includes("Review")) {
      return {
        title: "Express 20-Point CV Review & ATS Audit",
        price: 1490,
        originalPrice: 2500,
        badge: "Fastest Entry",
        turnaround: "Within 24 Hours",
        description: "A comprehensive voice/video breakdown of your current CV's ATS flaws, keyword gaps, and quick fixes.",
        features: [
          "20-Point ATS algorithmic pass/fail report",
          "Voice/Text feedback from CPRW Certified Writer",
          "Keyword index recommendations for your target role",
          "Actionable list of immediate revisions you can apply",
        ],
      };
    }

    if (targetMarket === "overseas") {
      return {
        title: "International Job & Relocation Package",
        price: 24500,
        originalPrice: 29500,
        badge: "Global Migration Specialist",
        turnaround: timeline === "urgent" ? "24 Hours (Express)" : "48 - 72 Hours",
        description: "Engineered specifically for foreign job applications in the Gulf (UAE/Qatar), UK, Australia, Europe, or remote USD roles.",
        features: [
          "Country-specific CV formatting (Gulf, UK, Aus, EU standards)",
          "Western ATS algorithms pass (Workday, Taleo, Greenhouse)",
          "International LinkedIn profile optimization",
          "Visa & relocation-friendly strategic cover letter",
          "Free 30-day post-delivery revisions",
        ],
      };
    }

    if (careerLevel === "fresh") {
      return {
        title: "Fresh Graduate Career Launch Pack",
        price: 8950,
        originalPrice: 10850,
        badge: "Starter Savings",
        turnaround: timeline === "urgent" ? "24 Hours" : "48 Hours",
        description: "Transform your university projects, internships, and academic results into recruiter-ready accomplishments.",
        features: [
          "1-Page High-Impact ATS Compliant CV",
          "Strategic Cover Letter for entry-level vacancies",
          "Academic achievement to corporate value translation",
          "Editable Microsoft Word (.docx) & Clean PDF",
          "Free 14-day revision support",
        ],
      };
    }

    if (careerLevel === "senior") {
      return {
        title: "Executive Leadership & Board Suite",
        price: 28500,
        originalPrice: 35000,
        badge: "Executive Class",
        turnaround: timeline === "urgent" ? "48 Hours" : "3 - 4 Working Days",
        description: "For Directors, Senior Managers, and C-Suite leaders needing high-authority positioning and boardroom credibility.",
        features: [
          "Comprehensive Executive ATS Resume & Leadership Narrative",
          "Complete High-Authority LinkedIn Profile Overhaul",
          "Executive Value Proposition & Pitch Cover Letter",
          "30-Minute 1-on-1 Strategic Consultation with Chanuka",
          "Unlimited revisions for 45 days",
        ],
      };
    }

    // Default Mid-Level Professional Accelerator
    return {
      title: "Professional Career Accelerator Suite",
      price: 17500,
      originalPrice: 21500,
      badge: "Most Popular in Sri Lanka",
      popular: true,
      turnaround: timeline === "urgent" ? "24 Hours (Express)" : "48 - 72 Hours",
      description: "Our flagship comprehensive package designed to win competitive promotions and mid-to-senior corporate vacancies.",
      features: [
        "Complete ATS-Optimized 2-Page Executive CV",
        "Metric-driven accomplishments (Revenue, Cost Savings, ROI)",
        "Full LinkedIn Profile Optimization (Headline, About, Skills)",
        "Strategic tailored industry cover letter",
        "Direct 1-on-1 guidance with Chanuka via WhatsApp",
        "Free 30-day revisions support",
      ],
    };
  };

  const rec = calculateRecommendation();

  // Create smart prefilled WhatsApp message
  const makeWhatsAppMessage = () => {
    return `Hi Chanuka! I completed your 60-Second Package Matcher Quiz on chanukajeewantha.lk.
My Results:
- Recommended Package: ${rec.title} (${formatLKR(rec.price)})
- Career Level: ${careerLevel.toUpperCase()}
- Target Market: ${targetMarket.toUpperCase()}
- Timeline: ${timeline.toUpperCase()}
- Current Status: ${cvStatus}

I'd like to get started with this package. What are the next steps?`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-white border border-[#e2e8f0] shadow-[0_20px_50px_-20px_rgba(23,53,92,0.12)] p-6 sm:p-10 relative overflow-hidden">
      
      {/* Progress Header */}
      <div className="mb-7">
        <div className="flex items-center justify-between text-xs font-bold text-[#17355c] mb-2.5">
          <span className="uppercase tracking-wider">CAREER STUDIO CATALOGUE</span>
          <span>STEP {step} OF {totalSteps}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-[#edf2f8] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#17355c] to-[#b9862f] transition-all duration-300 rounded-full"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* STEP 1: Services Selection */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-[#b9862f] uppercase tracking-wider">Question 1 of 5</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0e1a2b] mt-1">
              What kind of services do you need right now?
            </h3>
            <p className="text-xs sm:text-sm text-[#52637a] mt-1">
              You can choose multiple options. We will bundle them with an automatic discount.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              {
                id: "ATS Friendly Professional CV Writing",
                title: "ATS-Friendly Professional CV Writing",
                desc: "Engineered to pass automated screening and hook recruiters in 6 seconds.",
              },
              {
                id: "LinkedIn Account Optimization",
                title: "LinkedIn Account Optimization",
                desc: "Turn your LinkedIn into a 24/7 inbound recruiter magnet that attracts headhunters.",
              },
              {
                id: "Professional Cover Letter Writing",
                title: "Professional Cover Letter Writing",
                desc: "Role-aligned letters connecting your value to the vacancy requirements.",
              },
              {
                id: "Professional CV Review & Audit",
                title: "20-Point CV Review & ATS Audit",
                desc: "Low-cost feedback on your existing CV with actionable fixes (LKR 1,490).",
              },
            ].map((item) => {
              const isChecked = selectedServices.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleService(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? "bg-[#e8eff9] border-[#17355c] shadow-xs"
                      : "bg-[#f8fafd] border-[#e2e8f0] hover:border-[#cbd5e1]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center text-xs mt-0.5 border ${
                      isChecked
                        ? "bg-[#17355c] border-[#17355c] text-white font-bold"
                        : "border-[#cbd5e1] bg-white"
                    }`}
                  >
                    {isChecked ? "✓" : ""}
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-[#0e1a2b]">{item.title}</h4>
                    <p className="text-xs text-[#52637a] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="px-7 py-3 rounded-full btn-primary font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-md"
            >
              Continue to Step 2 →
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Career Level */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-[#b9862f] uppercase tracking-wider">Question 2 of 5</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0e1a2b] mt-1">
              What is your current career experience level?
            </h3>
            <p className="text-xs sm:text-sm text-[#52637a] mt-1">
              Pricing and depth of strategy scale based on your career trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              {
                id: "fresh",
                title: "Student / Fresh Graduate",
                sub: "Less than 1 year experience",
                desc: "Internships, first corporate jobs, university leavers.",
              },
              {
                id: "mid",
                title: "Mid-Level Professional",
                sub: "1 to 8 years experience",
                desc: "Executive, Assistant Manager, Specialist, Software Engineer, Banking Officer.",
              },
              {
                id: "senior",
                title: "Senior Leader / Executive",
                sub: "8+ years experience",
                desc: "Department Heads, General Managers, Directors, VP, C-Suite.",
              },
              {
                id: "switcher",
                title: "Career Switcher / Transition",
                sub: "Changing industries or role scope",
                desc: "Repositioning transferable skills for a brand new domain.",
              },
            ].map((lvl) => (
              <div
                key={lvl.id}
                onClick={() => setCareerLevel(lvl.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  careerLevel === lvl.id
                    ? "bg-[#e8eff9] border-[#17355c] shadow-xs"
                    : "bg-[#f8fafd] border-[#e2e8f0] hover:border-[#cbd5e1]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-heading text-sm font-bold text-[#0e1a2b]">{lvl.title}</h4>
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                      careerLevel === lvl.id ? "border-[#17355c] bg-[#17355c] text-white" : "border-[#cbd5e1] bg-white"
                    }`}
                  >
                    {careerLevel === lvl.id ? "●" : ""}
                  </span>
                </div>
                <span className="text-xs text-[#b9862f] font-bold block">{lvl.sub}</span>
                <p className="text-xs text-[#52637a] mt-1">{lvl.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-5 py-2.5 rounded-full border border-[#cbd5e1] text-[#0e1a2b] text-xs font-semibold hover:bg-slate-50"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-7 py-3 rounded-full btn-primary font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-md"
            >
              Continue to Step 3 →
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Target Market */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-[#b9862f] uppercase tracking-wider">Question 3 of 5</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0e1a2b] mt-1">
              Where are you primarily applying for jobs?
            </h3>
            <p className="text-xs sm:text-sm text-[#52637a] mt-1">
              International hiring systems require vastly different formats and data disclosures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              {
                id: "local",
                title: "Sri Lankan Job Market",
                desc: "Top Colombo conglomerates, banks, MNC branches, tech agencies.",
              },
              {
                id: "overseas",
                title: "Overseas Relocation / Migration",
                desc: "Middle East (Dubai/UAE, Qatar, KSA), UK, Australia, Canada, Europe.",
              },
              {
                id: "remote",
                title: "Remote Global USD Roles",
                desc: "US/European remote contracts while living in Sri Lanka.",
              },
              {
                id: "both",
                title: "Both Sri Lanka & International",
                desc: "Dual-ready positioning keeping all doors open.",
              },
            ].map((tm) => (
              <div
                key={tm.id}
                onClick={() => setTargetMarket(tm.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  targetMarket === tm.id
                    ? "bg-[#e8eff9] border-[#17355c] shadow-xs"
                    : "bg-[#f8fafd] border-[#e2e8f0] hover:border-[#cbd5e1]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-heading text-sm font-bold text-[#0e1a2b]">{tm.title}</h4>
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                      targetMarket === tm.id ? "border-[#17355c] bg-[#17355c] text-white" : "border-[#cbd5e1] bg-white"
                    }`}
                  >
                    {targetMarket === tm.id ? "●" : ""}
                  </span>
                </div>
                <p className="text-xs text-[#52637a] mt-1">{tm.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-between">
            <button
              onClick={() => setStep(2)}
              className="px-5 py-2.5 rounded-full border border-[#cbd5e1] text-[#0e1a2b] text-xs font-semibold hover:bg-slate-50"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="px-7 py-3 rounded-full btn-primary font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-md"
            >
              Continue to Step 4 →
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Timeline & CV Status */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-[#b9862f] uppercase tracking-wider">Question 4 of 5</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0e1a2b] mt-1">
              What is your timeline and current CV status?
            </h3>
          </div>

          <div>
            <label className="text-xs font-bold text-[#17355c] uppercase tracking-wider block mb-2">
              Timeline Requirement:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "standard", title: "Standard", time: "48 - 72 Hours" },
                { id: "fast", title: "Priority", time: "Within 48 Hours" },
                { id: "urgent", title: "VIP Express ⚡", time: "Within 24 Hours (+LKR 3,500)" },
              ].map((t) => (
                <div
                  key={t.id}
                  onClick={() => setTimeline(t.id)}
                  className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                    timeline === t.id
                      ? "bg-[#e8eff9] border-[#17355c] text-[#17355c] font-bold"
                      : "bg-[#f8fafd] border-[#e2e8f0] text-[#52637a]"
                  }`}
                >
                  <p className="text-xs font-bold">{t.title}</p>
                  <p className="text-[11px] text-[#b9862f] mt-0.5">{t.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#17355c] uppercase tracking-wider block mb-2">
              Current CV Status:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "existing", title: "Have an Outdated CV", desc: "Needs total ATS rewrite" },
                { id: "scratch", title: "Starting from Scratch", desc: "No CV currently prepared" },
                { id: "review-only", title: "Just Need CV Audit", desc: "Want 20-Point ATS test" },
              ].map((st) => (
                <div
                  key={st.id}
                  onClick={() => setCvStatus(st.id)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    cvStatus === st.id
                      ? "bg-[#e8eff9] border-[#17355c] text-[#17355c] font-bold"
                      : "bg-[#f8fafd] border-[#e2e8f0] text-[#52637a]"
                  }`}
                >
                  <p className="text-xs font-bold">{st.title}</p>
                  <p className="text-[11px] text-[#52637a] mt-0.5">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex justify-between">
            <button
              onClick={() => setStep(3)}
              className="px-5 py-2.5 rounded-full border border-[#cbd5e1] text-[#0e1a2b] text-xs font-semibold hover:bg-slate-50"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(5)}
              className="px-7 py-3 rounded-full btn-primary font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-md"
            >
              See My Tailored Match →
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: Final Recommendation Card */}
      {step === 5 && (
        <div className="space-y-6 animate-in zoom-in-95 duration-300">
          <div className="text-center max-w-xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-[#fbf3e3] text-[#8f6419] text-xs font-bold border border-[#b9862f]/30">
              🎯 YOUR TAILORED CAREER PACKAGE MATCH
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0e1a2b] mt-2.5">
              {rec.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#52637a] mt-1">
              Based on your answers, this package delivers the highest interview callback rate for your goals.
            </p>
          </div>

          {/* Result Highlight Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#17355c] to-[#0f2440] text-white shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/15 gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#b9862f]">
                  Special Matched Rate
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-heading text-3xl sm:text-4xl font-black text-white">
                    {formatLKR(rec.price)}
                  </span>
                  <span className="text-sm line-through text-white/60">
                    {formatLKR(rec.originalPrice)}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#25d366]/20 text-[#25d366]">
                    Save {formatLKR(rec.originalPrice - rec.price)}
                  </span>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-white/70 block">Turnaround Time:</span>
                <span className="text-xs font-bold text-[#fbf3e3]">{rec.turnaround}</span>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="my-6">
              <p className="text-xs uppercase font-bold text-[#fbf3e3] tracking-wider mb-3">
                Everything Included In Your Package:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {rec.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/90">
                    <span className="text-[#b9862f] font-bold">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/15">
              <a
                href={whatsappUrl(makeWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-full bg-[#25d366] hover:bg-[#1ea952] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]"
              >
                <span>Order This Package on WhatsApp (1-Click)</span>
              </a>
              <button
                onClick={() => setStep(1)}
                className="px-5 py-3 rounded-full border border-white/20 text-xs text-white/80 hover:text-white"
              >
                Retake Quiz
              </button>
            </div>
          </div>

          <div className="text-center text-xs text-[#52637a]">
            <p>🔒 100% Confidential. Free Revisions. Safe Bank Transfer & Card Payments Accepted.</p>
          </div>
        </div>
      )}
    </div>
  );
}
