"use client";

import { whatsappUrl } from "@/lib/site";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const role = (form.elements.namedItem("role") as HTMLInputElement).value;
    const country = (form.elements.namedItem("country") as HTMLSelectElement).value;
    const note = (form.elements.namedItem("note") as HTMLTextAreaElement).value;

    const msg = `Hi Chanuka, my name is ${name}.
- Current/Target Role: ${role}
- Target Country: ${country}
- Message: ${note}`;

    window.open(whatsappUrl(msg), "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs font-bold text-[#17355c] uppercase tracking-wider block mb-1">
          Your Full Name
        </label>
        <input
          name="name"
          required
          type="text"
          placeholder="e.g. Kasun Silva"
          className="w-full px-4 py-3 rounded-xl bg-[#f8fafd] border border-[#cbd5e1] text-[#0e1a2b] text-xs sm:text-sm focus:outline-none focus:border-[#17355c]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-[#17355c] uppercase tracking-wider block mb-1">
            Current / Target Role
          </label>
          <input
            name="role"
            required
            type="text"
            placeholder="e.g. Marketing Lead / DevOps"
            className="w-full px-4 py-3 rounded-xl bg-[#f8fafd] border border-[#cbd5e1] text-[#0e1a2b] text-xs sm:text-sm focus:outline-none focus:border-[#17355c]"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-[#17355c] uppercase tracking-wider block mb-1">
            Target Job Market
          </label>
          <select
            name="country"
            className="w-full px-4 py-3 rounded-xl bg-[#f8fafd] border border-[#cbd5e1] text-[#0e1a2b] text-xs sm:text-sm focus:outline-none focus:border-[#17355c]"
          >
            <option value="Sri Lanka">Sri Lanka Local Corporate</option>
            <option value="Middle East / Gulf">Middle East (UAE / Qatar / Saudi)</option>
            <option value="Australia / New Zealand">Australia / New Zealand</option>
            <option value="UK / Europe">United Kingdom / Europe</option>
            <option value="Canada / US">Canada / North America</option>
            <option value="Remote Global USD">Remote Global USD</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-[#17355c] uppercase tracking-wider block mb-1">
          How Can Chanuka Help You?
        </label>
        <textarea
          name="note"
          rows={4}
          required
          placeholder="Tell us about your career goals, target deadline, or current CV challenges..."
          className="w-full px-4 py-3 rounded-xl bg-[#f8fafd] border border-[#cbd5e1] text-[#0e1a2b] text-xs sm:text-sm focus:outline-none focus:border-[#17355c]"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-full btn-whatsapp font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-all"
      >
        Send Inquiry to Chanuka on WhatsApp →
      </button>
    </form>
  );
}
