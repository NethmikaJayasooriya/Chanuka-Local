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
    "Brandix",
    "Sysco LABS",
    "Commercial Bank",
    "WSO2",
    "Hayleys",
    "Qatar Airways",
  ];

  const atsEngines = [
    "Workday ATS",
    "Oracle Taleo",
    "Greenhouse",
    "SAP SuccessFactors",
    "Lever",
    "BambooHR",
  ];

  return (
    <section className="py-9 bg-[#f1f5fa] border-y border-[#e2e8f0] overflow-hidden">
      <div className="container-custom mb-5 text-center">
        <p className="text-xs uppercase tracking-widest text-[#52637a] font-semibold">
          Our candidates are hired across top Sri Lankan conglomerates & global multinational giants
        </p>
      </div>

      {/* Marquee: Top Companies */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        <div className="flex gap-4 sm:gap-6 animate-[marquee_40s_linear_infinite] shrink-0 items-center">
          {employers.concat(employers).map((emp, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#e2e8f0] text-[#17355c] text-xs sm:text-sm font-semibold tracking-wide shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#b9862f]" />
              <span>{emp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ATS Certified Systems Pill Strip */}
      <div className="container-custom mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs text-[#52637a]">
        <span className="font-semibold text-[#17355c]">100% Parsing Tested On:</span>
        {atsEngines.map((ats, idx) => (
          <span
            key={idx}
            className="px-3 py-0.5 rounded-full bg-white border border-[#cbd5e1] text-[#0e1a2b] font-mono text-[11px] shadow-xs"
          >
            ✓ {ats}
          </span>
        ))}
      </div>
    </section>
  );
}
