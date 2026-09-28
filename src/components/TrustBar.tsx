export function TrustBar() {
  const employers = [
    "Dialog Axiata",
    "MAS Holdings",
    "John Keells Holdings",
    "London Stock Exchange Group (LSEG)",
    "Virtusa",
    "IFS World",
    "Standard Chartered Bank",
    "Hemas Holdings",
    "Emirates Airlines",
    "Brandix Apparel",
    "Sysco LABS",
    "Commercial Bank",
    "WSO2",
    "Hayleys PLC",
    "Qatar Airways",
    "Aitken Spence",
  ];

  const atsEngines = [
    "Workday ATS Certified",
    "Oracle Taleo 99.4%",
    "Greenhouse Parseable",
    "SAP SuccessFactors",
    "Lever Optimization",
    "BambooHR Verified",
    "iCIMS Ready",
    "Bullhorn Compliant",
    "UK Visa Career Format",
    "Dubai / Gulf CV Standard",
    "Australia SkillSelect Format",
  ];

  return (
    <section className="py-10 bg-[#f1f5fa] border-y border-[#e2e8f0] overflow-hidden relative select-none">
      {/* Ambient gradient fade edges for infinite loop illusion */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#f1f5fa] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#f1f5fa] to-transparent z-10" />

      <div className="container-custom mb-5 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#cbd5e1] text-[11px] font-bold text-[#17355c] shadow-2xs mb-2">
          <span className="w-2 h-2 rounded-full bg-[#1ea952] animate-pulse" />
          <span>Proven Candidate Placement Across Conglomerates & Multinationals</span>
        </div>
      </div>

      {/* Row 1: Employers Infinite Loop Marquee */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap mb-3.5">
        <div className="animate-marquee flex gap-3 sm:gap-4 shrink-0 items-center">
          {employers.concat(employers).map((emp, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e2e8f0] text-[#17355c] text-xs font-bold tracking-wide shadow-2xs hover:border-[#17355c]/30 hover:scale-105 transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#b9862f]" />
              <span>{emp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: ATS Software & Global Standards Reverse Infinite Loop Marquee */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee-reverse flex gap-3 sm:gap-4 shrink-0 items-center">
          {atsEngines.concat(atsEngines).map((ats, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8eff9] border border-[#17355c]/15 text-[#17355c] text-[11px] font-mono font-bold shadow-2xs hover:bg-white transition-all cursor-default"
            >
              <span className="text-[#1ea952]">✓</span>
              <span>{ats}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
